"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { usePathname } from "next/navigation";

type CleanSectionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: `#${string}`;
  children: ReactNode;
};

export function CleanSectionLink({
  href,
  children,
  onClick,
  ...props
}: CleanSectionLinkProps) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    const target = document.getElementById(href.slice(1));

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`,
    );
  };

  return (
    <a href={pathname} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
