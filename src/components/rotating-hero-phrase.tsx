"use client";

import { useEffect, useRef, useState } from "react";

type RotatingHeroPhraseProps = {
  phrases: readonly string[];
  intervalMs?: number;
  className?: string;
};

export function RotatingHeroPhrase({
  phrases,
  intervalMs = 2200,
  className = "",
}: RotatingHeroPhraseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (phrases.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setIsVisible(false);

      timeoutRef.current = window.setTimeout(() => {
        setActiveIndex((currentIndex) => (currentIndex + 1) % phrases.length);
        setIsVisible(true);
      }, 220);
    }, intervalMs);

    return () => {
      window.clearInterval(timer);

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [intervalMs, phrases.length]);

  const longestPhrase = phrases.reduce((longest, phrase) =>
    phrase.length > longest.length ? phrase : longest,
  );

  return (
    <span
      className={`hero-phrase relative inline-grid min-h-[1.2em] align-top ${className}`.trim()}
      aria-hidden="true"
    >
      <span className="hero-phrase-measure" aria-hidden="true">
        {longestPhrase}
      </span>
      <span
        key={phrases[activeIndex]}
        className={`hero-phrase-item ${isVisible ? "is-visible" : "is-hidden"}`}
      >
        {phrases[activeIndex]}
      </span>
    </span>
  );
}
