"use client";

import Link from "next/link";
import { useState } from "react";

type HomepageServiceTileProps = {
  title: string;
  description: string;
  href?: string;
};

export function HomepageServiceTile({
  title,
  description,
  href,
}: HomepageServiceTileProps) {
  const [expanded, setExpanded] = useState(false);

  const frontVisibility = expanded ? "opacity-0" : "opacity-100";
  const detailVisibility = expanded ? "opacity-100" : "opacity-0";

  const frontFace = (
    <div
      className={`absolute inset-0 flex items-center justify-center px-4 py-4 text-center transition-opacity duration-300 md:px-5 md:py-5 md:group-hover:opacity-0 ${frontVisibility}`}
    >
      <div className="min-w-0 flex-1">
        <p className="max-w-[18ch] text-[1.34rem] font-bold leading-[1.15] tracking-[-0.04em] text-white md:max-w-[19ch] md:text-[1.48rem] md:leading-[1.18] xl:text-[1.38rem]">
          {title}
        </p>
      </div>
    </div>
  );

  const detailFace = (
    <div
      className={`absolute inset-0 px-4 py-4 text-center transition-opacity duration-300 md:px-5 md:py-5 md:group-hover:opacity-100 ${detailVisibility}`}
    >
      <div className="flex h-full items-center justify-center">
        <p className="max-w-[23ch] text-[1.1rem] font-medium leading-7 text-white/90 md:text-[1.08rem] md:leading-[1.65]">
          {description}
        </p>
      </div>
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
