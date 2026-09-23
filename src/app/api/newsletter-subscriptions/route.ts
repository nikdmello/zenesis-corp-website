import { NextResponse, type NextRequest } from "next/server";
import { newsletterTopics } from "@/lib/newsletter";

export const runtime = "nodejs";

type NewsletterRequest = {
  email?: string;
  topics?: string[];
  consent?: boolean;
  pagePath?: string;
  captchaToken?: string;
  startedAt?: string;
  website?: string;
};

const validTopicIds = new Set<string>(newsletterTopics.map((topic) => topic.id));

function getClientIp(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? request.headers.get("x-real-ip")?.trim() ?? "";
}

function isLikelyAutomated(payload: NewsletterRequest) {
  const startedAt = Number(payload.startedAt);
  const elapsedMs = Number.isFinite(startedAt) ? Date.now() - startedAt : 0;
  return Boolean(payload.website?.trim()) || elapsedMs < 1200;
}

function isValidEmail(value: unknown) {
  return typeof value === "string" && value.length <= 160 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

async function verifyRecaptcha(token: string | undefined, request: NextRequest) {
  const secret = process.env.RECAPTCHA_SECRET_KEY?.trim();
  if (!secret) return { ok: false, reason: "secret_not_configured" };
  if (!token) return { ok: false, reason: "missing_token" };

  try {
    const parameters = new URLSearchParams({ secret, response: token });
    const remoteIp = getClientIp(request);
    if (remoteIp && remoteIp !== "::1" && remoteIp !== "127.0.0.1") parameters.set("remoteip", remoteIp);

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: parameters,
      signal: AbortSignal.timeout(6000),
    });
    if (!response.ok) return { ok: false, reason: "verification_http_error" };

    const result = (await response.json()) as { success?: boolean; score?: number; action?: string };
    const configuredScore = Number(process.env.RECAPTCHA_MINIMUM_SCORE ?? "0.5");
    const minimumScore = Number.isFinite(configuredScore) ? configuredScore : 0.5;
    if (result.success !== true) return { ok: false, reason: "verification_failed" };
    if (typeof result.score === "number" && result.score < minimumScore) return { ok: false, reason: "low_score" };
    if (result.action && result.action !== "newsletter_signup") return { ok: false, reason: "action_mismatch" };
    return { ok: true };
  } catch (error) {
    console.error("Newsletter reCAPTCHA verification failed", error);
    return { ok: false, reason: "verification_exception" };
  }
}

async function submitToZohoMarketingAutomation(email: string) {
  const form = new URLSearchParams({
    CONTACT_EMAIL: email,
    LASTNAME: "Newsletter Subscriber",
    submitType: "optinCustomView",
    emailReportId: "",
    formType: "QuickForm",
    zx: "125f9b15f",
    zcvers: "3.0",
    oldListIds: "",
    mode: "OptinCreateView",
    zcld: "",
    zctd: "",
    zc_trackCode: "ZCFORMVIEW",
    zc_formIx: "3z6585a6bcd20d09f086ca439e0a3bdc40911ea591a30ea329abf84c39270b550b",
  });

  try {
    const response = await fetch("https://zcff-zgfl.maillist-manage.com/weboptin.zc", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form,
      redirect: "manual",
      signal: AbortSignal.timeout(8000),
    });
    if (response.status < 200 || response.status >= 400) return { ok: false, reason: "zoho_http_error", status: response.status };
    return { ok: true };
  } catch (error) {
    console.error("Newsletter Zoho submission failed", error);
    return { ok: false, reason: "zoho_exception" };
  }
}

export async function POST(request: NextRequest) {
  let payload: NewsletterRequest;
  try {
    payload = (await request.json()) as NewsletterRequest;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (isLikelyAutomated(payload)) return NextResponse.json({ ok: true });
  const topics = Array.isArray(payload.topics) ? [...new Set(payload.topics)] : [];
  if (
    !isValidEmail(payload.email) ||
    payload.consent !== true ||
    topics.length < 1 ||
    topics.length > newsletterTopics.length ||
    topics.some((topic) => !validTopicIds.has(topic)) ||
    typeof payload.pagePath !== "string" ||
    payload.pagePath.length > 1000
  ) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const captcha = await verifyRecaptcha(payload.captchaToken, request);
  if (!captcha.ok) {
    return NextResponse.json(
      { ok: false, error: "captcha_failed", ...(process.env.NODE_ENV === "development" ? { captcha } : {}) },
      { status: 403 },
    );
  }

  const zoho = await submitToZohoMarketingAutomation(payload.email!.trim());
  if (!zoho.ok) {
    return NextResponse.json(
      { ok: false, error: "submission_failed", ...(process.env.NODE_ENV === "development" ? { zoho } : {}) },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
