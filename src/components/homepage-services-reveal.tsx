"use client";

import Image from "next/image";
import Link from "next/link";

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
  return (
    <section
      id="services"
      className="relative left-1/2 w-screen -translate-x-1/2 scroll-mt-14 overflow-hidden bg-[#f5efe4] pb-10 pt-16 text-[#07151b] md:scroll-mt-18 md:pb-12 md:pt-18 xl:pt-22"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(216,195,162,0.16),transparent_26%),radial-gradient(circle_at_80%_30%,rgba(17,35,42,0.05),transparent_28%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46vw] min-w-[34rem] md:block xl:w-[52vw] xl:min-w-[42rem]"
      >
        <div
          className="absolute inset-0 opacity-[0.54] xl:opacity-[0.6]"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 18%, rgba(0,0,0,0.32) 36%, rgba(0,0,0,0.72) 58%, #000 76%, #000 100%)",
            maskImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 18%, rgba(0,0,0,0.32) 36%, rgba(0,0,0,0.72) 58%, #000 76%, #000 100%)",
          }}
        >
          <Image
            src="/uae-flag.webp"
            alt=""
            fill
            sizes="(max-width: 1279px) 46vw, 52vw"
            className="object-cover object-right"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,239,228,0.18)_0%,rgba(245,239,228,0.08)_26%,rgba(245,239,228,0.02)_62%,rgba(245,239,228,0)_100%)]" />
      </div>

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
          <div className="mb-5">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-[#8d7453]">
              Explore all services
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2.1rem] border border-[#d9cfbf] bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(255,255,255,0.34))] p-4 shadow-[0_24px_60px_rgba(17,35,42,0.07)] md:p-5 xl:rounded-[2.4rem] xl:p-8">
            <div className="relative z-10 grid items-stretch gap-3 md:grid-cols-2 xl:grid-cols-4">
              {items.map((item, index) => (
                <article
                  key={item.title}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.55rem] border border-[#d8cfbf] bg-white/88 shadow-[0_10px_24px_rgba(17,35,42,0.05)] transition-all duration-300 hover:border-[#d1b285] hover:bg-[#102028] hover:shadow-[0_22px_48px_rgba(17,35,42,0.14)] focus-within:border-[#d1b285] focus-within:bg-[#102028] focus-within:shadow-[0_22px_48px_rgba(17,35,42,0.14)]"
                >
                  <div className="flex w-full flex-1 items-start gap-3 px-4 py-4 text-left md:min-h-[10.5rem]">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d8c3a2]/45 bg-[#f8f2e7] text-[#8d7453] transition-colors duration-300 group-hover:border-[#d8c3a2]/30 group-hover:bg-white/[0.04] group-hover:text-[#ecdcbc] group-focus-within:border-[#d8c3a2]/30 group-focus-within:bg-white/[0.04] group-focus-within:text-[#ecdcbc]">
                      <ServiceIcon type={item.icon} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-[#8d7453] transition-colors duration-300 group-hover:text-[#d8c3a2] group-focus-within:text-[#d8c3a2]">
                        {stageNumberByIndex[index]}
                      </p>
                      <h3 className="mt-1 text-[1.16rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#07151b] transition-colors duration-300 group-hover:text-white group-focus-within:text-white xl:whitespace-nowrap xl:text-[1.2rem]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[0.98rem] leading-6 text-[#31444c] transition-colors duration-300 group-hover:text-white/78 group-focus-within:text-white/78 xl:text-[1.02rem]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 pb-3 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
                    <div className="rounded-[1.15rem] border border-white/8 bg-white/[0.05] px-3.25 py-3">
                      <ul className="space-y-1.75">
                        {item.items.map((entry) => (
                          <li
                            key={entry}
                            className="flex items-start gap-2.25 text-[0.92rem] leading-[1.42] text-white"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b79056]"
                            />
                            <span>{entry}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-2.5">
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-2 rounded-full border border-[#d0b58d] bg-[linear-gradient(180deg,#f4e6cc_0%,#e8d1a6_100%)] px-3.25 py-1.75 text-[0.9rem] font-semibold text-[#07151b]"
                        >
                          {item.cta}
                          <span aria-hidden="true">-&gt;</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
