"use client";

import Link from "next/link";
import { useState } from "react";

type ServiceRevealItem = {
  title: string;
  description: string;
  href: string;
  cta: string;
  items: readonly string[];
  icon: "business" | "accounting" | "visa" | "support";
};

type HomepageServicesRevealProps = {
  items: readonly ServiceRevealItem[];
};

const stageNumberByIndex: Record<number, string> = {
  0: "01",
  1: "02",
  2: "03",
  3: "04",
};

function ServiceIcon({ type }: { type: ServiceRevealItem["icon"] }) {
  const common = "h-[1.1rem] w-[1.1rem]";

  if (type === "business") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common}>
        <path d="M4 19.5h16" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M7 19V8.5h4V19" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 19V4.5h4V19" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 11.5h.01M15 8.5h.01M15 11.5h.01" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "accounting") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common}>
        <rect x="5" y="4.5" width="14" height="15" rx="2.5" strokeWidth="1.5" />
        <path d="M8 15.5l2.8-2.8 2.2 2.2 3-4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 8.5h8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "visa") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common}>
        <rect x="4.5" y="6" width="15" height="11.5" rx="2.5" strokeWidth="1.5" />
        <path d="M8 10h8" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 13.5h3.5" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="16.2" cy="13.3" r="1.6" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common}>
      <circle cx="12" cy="12" r="4.25" strokeWidth="1.5" />
      <path d="M12 5.25v2.5M12 16.25v2.5M5.25 12h2.5M16.25 12h2.5" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 9.8v2.4l1.7 1.2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HomepageServicesReveal({
  items,
}: HomepageServicesRevealProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="services"
      className="relative left-1/2 w-screen -translate-x-1/2 scroll-mt-14 overflow-hidden bg-[#f5efe4] pb-0 pt-16 text-[#07151b] md:scroll-mt-18 md:pt-18 xl:pt-22"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(216,195,162,0.16),transparent_26%),radial-gradient(circle_at_80%_30%,rgba(17,35,42,0.05),transparent_28%)]"
      />

      <div className="relative mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <div className="max-w-[52rem]">
          <h2 className="section-title font-semibold text-[#07151b]">
            Our services
          </h2>
          <p className="mt-5 text-[1.08rem] leading-8 text-[#30434b] md:text-[1.18rem] md:leading-9">
            From choosing the right setup route to visa, banking, tax, and ongoing compliance, Zenesis supports every stage of operating in the UAE.
          </p>
        </div>

        <div className="mt-10">
          <div className="hidden xl:block">
            <div className="rounded-[2.4rem] border border-[#d9cfbf] bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(255,255,255,0.34))] p-5 shadow-[0_24px_60px_rgba(17,35,42,0.07)] md:p-6 xl:p-8">
              <div className="grid gap-3 xl:grid-cols-4 xl:gap-3">
                {items.map((item) => {
                  const index = items.indexOf(item);
                  const isActive = activeIndex === index;
                  const stageNumber = stageNumberByIndex[index];

                    return (
                      <article
                        key={item.title}
                        onMouseEnter={() => setActiveIndex(index)}
                        className={`flex h-full flex-col overflow-hidden rounded-[1.55rem] border transition-all duration-300 xl:min-h-[18.9rem] ${
                          isActive
                            ? "border-[#d1b285] bg-[#102028] shadow-[0_22px_48px_rgba(17,35,42,0.14)]"
                            : "border-[#d8cfbf] bg-white/88 shadow-[0_10px_24px_rgba(17,35,42,0.05)]"
                        }`}
                      >
                      <button
                        type="button"
                        onFocus={() => setActiveIndex(index)}
                        onClick={() => setActiveIndex(index)}
                        className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left xl:px-4 xl:py-4"
                        aria-expanded={isActive}
                      >
                        <div className="flex min-w-0 flex-1 gap-3">
                          <span
                            className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
                              isActive
                                ? "border-[#d8c3a2]/30 bg-white/[0.04] text-[#ecdcbc]"
                                : "border-[#d8c3a2]/45 bg-[#f8f2e7] text-[#8d7453]"
                            }`}
                          >
                            <ServiceIcon type={item.icon} />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-[0.72rem] font-semibold tracking-[0.18em] ${
                                  isActive ? "text-[#d8c3a2]" : "text-[#8d7453]"
                                }`}
                              >
                                {stageNumber}
                              </span>
                            </div>
                            <h3
                              className={`mt-0.75 text-[1.18rem] font-semibold leading-[1.04] tracking-[-0.04em] xl:whitespace-nowrap xl:text-[1.2rem] ${
                                isActive ? "text-white" : "text-[#07151b]"
                              }`}
                            >
                              {item.title}
                            </h3>
                            <p
                              className={`mt-1.25 max-w-[26ch] text-[1rem] leading-[1.48] xl:text-[1.02rem] ${
                                isActive ? "text-white/78" : "text-[#31444c]"
                              }`}
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <span
                          aria-hidden="true"
                          className={`mt-0.5 inline-flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-full border text-[0.92rem] ${
                            isActive
                              ? "border-[#d8c3a2]/35 bg-[#d8c3a2]/14 text-[#f7efe1]"
                              : "border-[#d7cfbf] bg-white text-[#8d7453]"
                          }`}
                        >
                          {isActive ? "−" : "+"}
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 xl:max-h-none xl:px-4 xl:pb-4 xl:opacity-100 ${
                          isActive ? "max-h-[16rem] px-4 pb-4 opacity-100" : "max-h-0 px-4 pb-0 opacity-0"
                        }`}
                      >
                        <div
                          className={`rounded-[1.15rem] border border-white/8 bg-white/[0.05] px-3.25 py-3.25 transition-all duration-300 xl:min-h-[7.25rem] ${
                            isActive ? "visible opacity-100" : "xl:invisible xl:opacity-0"
                          }`}
                        >
                          <ul className="space-y-1.75">
                            {item.items.map((entry) => (
                              <li
                                key={entry}
                                className={`flex items-start gap-2.25 text-[0.92rem] leading-[1.42] ${
                                  isActive ? "text-white" : "text-[#07151b]"
                                }`}
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b79056]"
                                />
                                <span>{entry}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-3.25">
                            <Link
                              href={item.href}
                              className="inline-flex items-center gap-2 rounded-full border border-[#d0b58d] bg-[linear-gradient(180deg,#f4e6cc_0%,#e8d1a6_100%)] px-3.25 py-1.75 text-[0.9rem] font-semibold text-[#07151b]"
                            >
                              {item.cta}
                              <span aria-hidden="true">→</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4 xl:hidden">
          {items.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                key={item.title}
                className={`overflow-hidden rounded-[1.8rem] border transition-all duration-300 ${
                  isActive
                    ? "border-[#d1b285] bg-[#102028] shadow-[0_22px_48px_rgba(17,35,42,0.14)]"
                    : "border-[#d8cfbf] bg-white/80 shadow-[0_10px_24px_rgba(17,35,42,0.05)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={isActive}
                >
                  <div className="flex min-w-0 gap-3.5">
                    <span
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                        isActive
                          ? "border-[#d8c3a2]/30 bg-white/[0.04] text-[#ecdcbc]"
                          : "border-[#d8c3a2]/45 bg-[#f8f2e7] text-[#8d7453]"
                      }`}
                    >
                      <ServiceIcon type={item.icon} />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[0.72rem] font-semibold tracking-[0.18em] ${
                            isActive ? "text-[#d8c3a2]" : "text-[#8d7453]"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3
                        className={`mt-1 text-[1.18rem] font-semibold leading-[1.12] tracking-[-0.03em] ${
                          isActive ? "text-white" : "text-[#07151b]"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`mt-2 text-[0.98rem] leading-7 ${
                          isActive ? "text-white/78" : "text-[#42545b]"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className={`mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[1rem] ${
                      isActive
                        ? "border-[#d8c3a2]/35 bg-[#d8c3a2]/14 text-[#f7efe1]"
                        : "border-[#d7cfbf] bg-white text-[#8d7453]"
                    }`}
                  >
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isActive ? "max-h-[16rem] px-5 pb-5 opacity-100" : "max-h-0 px-5 pb-0 opacity-0"
                  }`}
                >
                  <div className="rounded-[1.35rem] border border-white/8 bg-white/[0.05] px-4 py-4">
                    <ul className="space-y-2.5">
                      {item.items.map((entry) => (
                        <li
                          key={entry}
                          className={`flex items-start gap-3 text-[0.98rem] leading-6 ${
                            isActive ? "text-white" : "text-[#07151b]"
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b79056]"
                          />
                          <span>{entry}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5">
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-2 rounded-full border border-[#d0b58d] bg-[linear-gradient(180deg,#f4e6cc_0%,#e8d1a6_100%)] px-4 py-2.5 text-[0.96rem] font-semibold text-[#07151b]"
                      >
                        {item.cta}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
