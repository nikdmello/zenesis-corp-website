import { NextResponse, type NextRequest } from "next/server";
import { type ConsultationLeadPayload } from "@/lib/consultation-lead";

export const runtime = "nodejs";

type ConsultationLeadRequest = ConsultationLeadPayload & {
  captchaToken?: string;
  startedAt?: string;
  website?: string;
};

type CaptchaVerificationResult = {
  ok: boolean;
  reason?: string;
  message?: string;
  score?: number;
  action?: string;
  errorCodes?: string[];
};

function getClientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip")?.trim() ??
    ""
  );
}

function isMeaningfulString(value: unknown, maxLength: number) {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

function isLikelyAutomated(payload: ConsultationLeadRequest) {
  const startedAt = Number(payload.startedAt);
  const elapsedMs = Number.isFinite(startedAt) ? Date.now() - startedAt : 0;

  return Boolean(payload.website?.trim()) || elapsedMs < 1800;
}

async function verifyRecaptcha(
  token: string | undefined,
  request: NextRequest,
): Promise<CaptchaVerificationResult> {
  const secret = process.env.RECAPTCHA_SECRET_KEY?.trim();

  if (!secret) {
    return { ok: true };
  }

  if (!token) {
    return { ok: false, reason: "missing_token" };
  }

  try {
    const verificationParams = new URLSearchParams({
      secret,
      response: token,
    });
    const remoteIp = getClientIp(request);

    if (remoteIp && remoteIp !== "::1" && remoteIp !== "127.0.0.1") {
      verificationParams.set("remoteip", remoteIp);
    }

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: verificationParams,
      signal: AbortSignal.timeout(6000),
    });

    if (!response.ok) {
      return { ok: false, reason: "verification_http_error" };
    }

    const result = (await response.json()) as {
      success?: boolean;
      score?: number;
      action?: string;
      "error-codes"?: string[];
    };
    const configuredMinimumScore = Number(process.env.RECAPTCHA_MINIMUM_SCORE ?? "0.5");
    const minimumScore = Number.isFinite(configuredMinimumScore)
      ? configuredMinimumScore
      : 0.5;

    if (result.success !== true) {
      return {
        ok: false,
        reason: "verification_failed",
        score: result.score,
        action: result.action,
        errorCodes: result["error-codes"],
      };
    }

    if (typeof result.score === "number" && result.score < minimumScore) {
      return {
        ok: false,
        reason: "low_score",
        score: result.score,
        action: result.action,
      };
    }

    if (result.action && result.action !== "consultation_lead") {
      return {
        ok: false,
        reason: "action_mismatch",
        score: result.score,
        action: result.action,
      };
    }

    return {
      ok: true,
      score: result.score,
      action: result.action,
    };
  } catch (error) {
    console.error("reCAPTCHA verification failed", error);
    return {
      ok: false,
      reason: "verification_exception",
      message: error instanceof Error ? error.message : "Unknown verification error",
    };
  }
}

export async function POST(request: NextRequest) {
  let payload: ConsultationLeadRequest;

  try {
    payload = (await request.json()) as ConsultationLeadRequest;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (isLikelyAutomated(payload)) {
    return NextResponse.json({ ok: true });
  }

  if (
    !isMeaningfulString(payload.name, 120) ||
    !isMeaningfulString(payload.mobile, 40) ||
    !isMeaningfulString(payload.email, 160) ||
    typeof payload.enquiry !== "string" ||
    payload.enquiry.length > 4000
  ) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const captcha = await verifyRecaptcha(payload.captchaToken, request);

  if (!captcha.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: "captcha_failed",
        ...(process.env.NODE_ENV === "development" ? { captcha } : {}),
      },
      { status: 403 },
    );
  }

  return NextResponse.json({ ok: true });
}
