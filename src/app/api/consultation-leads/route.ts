import { NextResponse, type NextRequest } from "next/server";
import {
  buildConsultationDescription,
  splitLeadName,
  type ConsultationLeadPayload,
} from "@/lib/consultation-lead";

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

type ZohoSubmissionResult = {
  ok: boolean;
  reason?: string;
  status?: number;
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

function isOptionalString(value: unknown, maxLength: number) {
  return value === undefined || (typeof value === "string" && value.length <= maxLength);
}

function hasValidAttribution(payload: ConsultationLeadRequest) {
  const attribution = payload.attribution;

  return Boolean(
    attribution &&
      isMeaningfulString(attribution.landingPage, 1000) &&
      isMeaningfulString(attribution.referrer, 2000) &&
      isOptionalString(attribution.utmSource, 300) &&
      isOptionalString(attribution.utmMedium, 300) &&
      isOptionalString(attribution.utmCampaign, 500) &&
      isOptionalString(attribution.utmTerm, 500) &&
      isOptionalString(attribution.utmContent, 500) &&
      isOptionalString(attribution.gclid, 500),
  );
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
    console.error("RECAPTCHA_SECRET_KEY is not configured");
    return { ok: false, reason: "secret_not_configured" };
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

async function submitLeadToZoho(
  payload: ConsultationLeadPayload,
): Promise<ZohoSubmissionResult> {
  const actionUrl = process.env.ZOHO_WEBFORM_ACTION_URL?.trim();
  const xnQsjsdp = process.env.ZOHO_WEBFORM_XNQSJSDP?.trim();
  const xmIwtLD = process.env.ZOHO_WEBFORM_XMIWTLD?.trim();
  const actionType = process.env.ZOHO_WEBFORM_ACTION_TYPE?.trim() ?? "TGVhZHM=";
  const returnUrl = process.env.ZOHO_WEBFORM_RETURN_URL?.trim() ?? "null";
  const zcGad = process.env.ZOHO_WEBFORM_ZCGAD?.trim() ?? "";
  const leadSource = "Website Enquiry";

  if (!actionUrl || !xnQsjsdp || !xmIwtLD) {
    console.error("Private Zoho webform configuration is incomplete");
    return { ok: false, reason: "zoho_not_configured" };
  }

  const { firstName, lastName } = splitLeadName(payload.name);
  const form = new URLSearchParams({
    xnQsjsdp,
    xmIwtLD,
    actionType,
    returnURL: returnUrl,
    "First Name": firstName,
    "Last Name": lastName,
    Email: payload.email,
    Phone: `${payload.countryCode} ${payload.mobile}`.trim(),
    Description: buildConsultationDescription(payload),
    "Lead Source": leadSource,
    aG9uZXlwb3Q: "",
  });

  const optionalAttributionFields = [
    [process.env.ZOHO_WEBFORM_LANDING_PAGE_FIELD, payload.attribution.landingPage],
    [process.env.ZOHO_WEBFORM_REFERRER_FIELD, payload.attribution.referrer],
    [process.env.ZOHO_WEBFORM_UTM_SOURCE_FIELD, payload.attribution.utmSource],
    [process.env.ZOHO_WEBFORM_UTM_MEDIUM_FIELD, payload.attribution.utmMedium],
    [process.env.ZOHO_WEBFORM_UTM_CAMPAIGN_FIELD, payload.attribution.utmCampaign],
    [process.env.ZOHO_WEBFORM_UTM_TERM_FIELD, payload.attribution.utmTerm],
    [process.env.ZOHO_WEBFORM_UTM_CONTENT_FIELD, payload.attribution.utmContent],
    [process.env.ZOHO_WEBFORM_GCLID_FIELD, payload.attribution.gclid],
  ] as const;

  for (const [fieldName, value] of optionalAttributionFields) {
    const resolvedFieldName = fieldName?.trim();

    if (resolvedFieldName && value) {
      form.set(resolvedFieldName, value);
    }
  }

  if (zcGad) {
    form.set("zc_gad", zcGad);
  }

  try {
    const response = await fetch(actionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: form,
      redirect: "manual",
      signal: AbortSignal.timeout(8000),
    });

    if (response.status < 200 || response.status >= 400) {
      console.error("Zoho webform submission failed", { status: response.status });
      return { ok: false, reason: "zoho_http_error", status: response.status };
    }

    return { ok: true, status: response.status };
  } catch (error) {
    console.error("Zoho webform submission failed", error);
    return { ok: false, reason: "zoho_exception" };
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
    payload.enquiry.length > 4000 ||
    !isMeaningfulString(payload.pagePath, 1000) ||
    !isMeaningfulString(payload.pageTitle, 500) ||
    !["inline-panel", "modal"].includes(payload.source) ||
    !hasValidAttribution(payload)
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

  const zoho = await submitLeadToZoho(payload);

  if (!zoho.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: "submission_failed",
        ...(process.env.NODE_ENV === "development" ? { zoho } : {}),
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
