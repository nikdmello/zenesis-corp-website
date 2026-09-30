"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@/components/arrow-right-icon";
import { getCurrentPagePath, trackConversionEvent } from "@/lib/conversion-analytics";
import { newsletterTopics } from "@/lib/newsletter";

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() ?? "";

type GrecaptchaApi = {
  ready(callback: () => void): void;
  execute(siteKey: string, options: { action: string }): Promise<string>;
};

function loadRecaptchaScript() {
  if (!recaptchaSiteKey) return Promise.resolve();
  const existing = document.querySelector<HTMLScriptElement>('script[src^="https://www.google.com/recaptcha/api.js"]');
  if (existing) return Promise.resolve();

  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(recaptchaSiteKey)}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Unable to load reCAPTCHA."));
    document.head.appendChild(script);
  });
}

async function getRecaptchaToken() {
  if (!recaptchaSiteKey) return "";
  await loadRecaptchaScript();
  return new Promise<string>((resolve, reject) => {
    const grecaptcha = (window as Window & { grecaptcha?: GrecaptchaApi }).grecaptcha;
    if (!grecaptcha) return reject(new Error("reCAPTCHA is not ready."));
    grecaptcha.ready(() => grecaptcha.execute(recaptchaSiteKey, { action: "newsletter_signup" }).then(resolve).catch(reject));
  });
}

export function NewsletterSignup() {
  const [startedAt] = useState(() => Date.now().toString());
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("submitting");
    setErrorMessage("");
    try {
      const response = await fetch("/api/newsletter-subscriptions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: String(form.get("email") ?? ""),
          topics: newsletterTopics.map((topic) => topic.id),
          consent: true,
          pagePath: getCurrentPagePath(),
          captchaToken: await getRecaptchaToken(),
          startedAt,
          website: String(form.get("website") ?? ""),
        }),
      });
      if (!response.ok) {
        throw new Error("We couldn't complete your subscription. Please try again.");
      }
      setStatus("success");
      trackConversionEvent("newsletter_signup_success", { topic_count: newsletterTopics.length, page_path: getCurrentPagePath() });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "We couldn't complete your subscription. Please try again.");
    }
  };

  return (
    <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 border-y border-[#d8d0c2] bg-[#f8f6f1] py-11 md:py-14">
      <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <div className="text-center">
          <div aria-hidden="true" className="mx-auto mb-5 h-px w-16 bg-[#b88d53]/75" />
          <h2 className="home-section-display text-[#07151b]">Join our newsletter</h2>
        </div>

        <div className="mt-7 border-y border-[#e4dbce] py-7 md:py-8">
        {status === "success" ? (
          <div className="mx-auto max-w-4xl border-l-2 border-[#b9985f] py-1 pl-5 text-left" role="status">
            <p className="text-xl font-semibold text-[#07151b]">You&apos;re subscribed.</p>
            <p className="mt-2 text-sm leading-6 text-[#07151b]/68">Check your inbox to confirm your subscription.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto max-w-3xl">
            <div className="grid gap-2 border border-[#cfc4b4] bg-white p-1.5 shadow-[0_14px_38px_rgba(7,21,27,0.08)] transition-colors focus-within:border-[#8d7453] sm:grid-cols-[minmax(0,1fr)_auto]">
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input id="newsletter-email" name="email" type="email" required autoComplete="email" placeholder="Enter your email address" className="h-14 min-w-0 bg-transparent px-4 text-[1rem] text-[#07151b] outline-none placeholder:text-[#07151b]/46 sm:px-5" />
              <button type="submit" disabled={status === "submitting"} className="inline-flex h-14 items-center justify-center gap-3 bg-[#011735] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#082b58] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8d7453] disabled:cursor-wait disabled:opacity-70">
                {status === "submitting" ? "Subscribing..." : "Subscribe"}<ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-4 text-center text-xs leading-5 text-[#07151b]/56">
              By subscribing, you agree to receive email updates from Zenesis. Unsubscribe at any time.
            </p>
            <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" />
            {status === "error" ? <p className="mt-3 text-sm text-[#9b3f2c]" role="alert">{errorMessage}</p> : null}
          </form>
        )}
        </div>
      </div>
    </section>
  );
}
