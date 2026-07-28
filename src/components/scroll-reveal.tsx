import { type CSSProperties, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  return (
    <div
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      className={`scroll-reveal is-visible ${className}`}
    >
      {children}
    </div>
  );
}
