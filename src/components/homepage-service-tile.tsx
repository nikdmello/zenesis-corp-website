"use client";

import Link from "next/link";
import { useState } from "react";

type HomepageServiceTileProps = {
  icon: string;
  title: string;
  description: string;
  href?: string;
};

export function HomepageServiceTile({
  icon,
  title,
  description,
  href,
}: HomepageServiceTileProps) {
  const [expanded, setExpanded] = useState(false);

  const frontVisibility = expanded ? "opacity-0" : "opacity-100";
  const detailVisibility = expanded ? "opacity-100" : "opacity-0";

  const frontFace = (
    <div
      className={`absolute inset-0 flex items-center gap-3 px-4 py-4 text-left transition-opacity duration-300 md:gap-4 md:px-5 md:py-5 md:group-hover:opacity-0 ${frontVisibility}`}
    >
      <span
        aria-hidden="true"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-[1rem] font-semibold leading-none text-white ring-1 ring-white/12 md:h-10 md:w-10 md:text-[1.05rem]"
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="max-w-[16ch] text-[1.2rem] font-semibold leading-7 tracking-[-0.025em] text-white md:max-w-[17ch] md:text-[1.2rem] md:leading-[1.3]">
          {title}
        </p>
      </div>
      {href ? (
        <span
          aria-hidden="true"
          className="text-[1rem] font-semibold text-white/72"
        >
          →
        </span>
      ) : null}
    </div>
  );

  const detailFace = (
    <div
      className={`absolute inset-0 px-4 py-4 text-center transition-opacity duration-300 md:px-5 md:py-5 md:group-hover:opacity-100 ${detailVisibility}`}
    >
      <div className="flex h-full items-center justify-center pr-10">
        <p className="max-w-[23ch] text-[1.1rem] font-medium leading-7 text-white/90 md:text-[1.08rem] md:leading-[1.65]">
          {description}
        </p>
      </div>
      {href ? (
        <span className="absolute right-4 top-1/2 inline-flex -translate-y-1/2 items-center text-[1.05rem] font-semibold text-white">
          <span aria-hidden="true">→</span>
        </span>
      ) : null}
    </div>
  );

  if (href) {
    return (
      <div className="group relative h-full">
        <Link
          href={href}
          className="relative flex h-full min-h-[8rem] w-full overflow-hidden rounded-[1.2rem] border border-[#1b2f37] bg-[linear-gradient(180deg,#173039_0%,#11232a_100%)] shadow-[0_14px_34px_rgba(17,35,42,0.14)] transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#244ba8]/35 md:min-h-[9rem]"
        >
          {frontFace}
          {detailFace}
        </Link>
      </div>
    );
  }

  return (
    <div className="group relative h-full">
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => {
          if (typeof window !== "undefined" && window.innerWidth >= 768) {
            return;
          }

          setExpanded((current) => !current);
        }}
        className="relative flex h-full min-h-[8rem] w-full overflow-hidden rounded-[1.2rem] border border-[#1b2f37] bg-[linear-gradient(180deg,#173039_0%,#11232a_100%)] shadow-[0_14px_34px_rgba(17,35,42,0.14)] md:min-h-[9rem]"
      >
        {frontFace}
        {detailFace}
      </button>
    </div>
  );
}
