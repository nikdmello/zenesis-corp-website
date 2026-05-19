"use client";

import Link from "next/link";
import { useState } from "react";

type BusinessSetupRouteCardProps = {
  eyebrow?: string;
  title: string;
  href: string;
  frontSummary: string;
  backDescription?: string;
  points: readonly string[];
  ctaLabel?: string;
  variant?: "setup" | "essential";
};

export function BusinessSetupRouteCard({
  eyebrow = "Setup Option",
  title,
  href,
  frontSummary,
  backDescription,
  points,
  ctaLabel = "View route",
  variant = "setup",
}: BusinessSetupRouteCardProps) {
  const [expanded, setExpanded] = useState(false);
  const isEssential = variant === "essential";
  const frameHeightClass = isEssential
    ? "min-h-[30rem] md:min-h-[34rem] xl:min-h-[40rem]"
    : "min-h-[36rem] md:min-h-[38rem]";

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={expanded}
      onClick={() => setExpanded((current) => !current)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setExpanded((current) => !current);
        }
      }}
      className={`relative h-full cursor-pointer outline-none [perspective:1600px] ${frameHeightClass}`}
    >
      <div
        className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: expanded ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <div
          className="absolute inset-0 flex h-full w-full flex-col justify-center overflow-hidden rounded-[2rem] border border-[#dcd3c6] bg-[linear-gradient(180deg,#fffdfa_0%,#f5efe4_100%)] px-7 py-8 text-center shadow-[0_16px_44px_rgba(17,35,42,0.09)] md:px-8 md:py-10 [backface-visibility:hidden]"
        >
          <span className="eyebrow mx-auto text-[#244ba8]">{eyebrow}</span>
          <div className="mt-6 flex flex-1 flex-col items-center justify-center">
            <h3 className="max-w-[12ch] text-[2.15rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[#07151b] md:text-[2.3rem]">
              {title}
            </h3>
            <p className="mt-5 max-w-[28ch] text-[1.14rem] font-semibold leading-8 text-[#11232a] md:text-[1.14rem]">
              {frontSummary}
            </p>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-[#244ba8]">
            <span>View details</span>
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#244ba8]/16 bg-[#244ba8]/8 text-[1.05rem]"
            >
              →
            </span>
          </div>
        </div>

        <div
          className={`absolute inset-0 flex h-full w-full flex-col overflow-hidden rounded-[2rem] border border-[#dcd3c6] bg-[linear-gradient(180deg,#fffdfa_0%,#f5efe4_100%)] shadow-[0_16px_44px_rgba(17,35,42,0.09)] [backface-visibility:hidden] [transform:rotateY(180deg)] ${isEssential ? "p-5 md:p-6 xl:p-7" : "p-5 md:p-8"}`}
        >
          <div>
            <p className="eyebrow text-[#244ba8]">{eyebrow}</p>
            <h3 className={`mt-4 font-semibold tracking-[-0.04em] text-[#07151b] ${isEssential ? "text-[1.22rem] leading-[1.15] md:text-[1.34rem]" : "text-[1.44rem] leading-[1.08] md:text-[1.5rem]"}`}>
              {title}
            </h3>
          </div>

          {backDescription ? (
            <p className="mt-4 text-[1.08rem] leading-7 text-[#42535a] md:text-[1.1rem] md:leading-8">
              {backDescription}
            </p>
          ) : null}

        <div className={`${backDescription ? "mt-4" : "mt-5"} ${isEssential ? "space-y-2.5" : "space-y-2.5"}`}>
          {points.map((point) => (
            <div
              key={point}
              className={
                isEssential
                  ? "overflow-hidden rounded-[1.15rem] border border-[#d8d0c2] bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(245,239,228,0.96)_100%)] px-4 py-3 text-[0.98rem] font-medium leading-6 text-[#11232a] shadow-[0_8px_24px_rgba(17,35,42,0.06)] md:text-[1.03rem] md:leading-7"
                  : "overflow-hidden rounded-[1.15rem] border border-[#d8d0c2] bg-[linear-gradient(180deg,rgba(255,255,255,0.86)_0%,rgba(245,239,228,0.98)_100%)] px-4 py-3 text-[1.02rem] font-medium leading-7 text-[#11232a] shadow-[0_8px_24px_rgba(17,35,42,0.06)]"
              }
            >
              {point}
            </div>
          ))}
          </div>

        <div className={`mt-auto ${isEssential ? "pt-4" : "pt-4"}`}>
            <Link
              href={href}
              onClick={(event) => event.stopPropagation()}
              className={`inline-flex items-center gap-2 rounded-full bg-[#244ba8] font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1b3c86] ${isEssential ? "px-4 py-2 text-[0.94rem]" : "px-5 py-3 text-sm md:px-4.5 md:py-2.5 md:text-[0.94rem]"}`}
            >
              <span>{ctaLabel}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
