"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeroBackgroundVideoProps = {
  className?: string;
  mp4Src: string;
  posterSrc: string;
  webmSrc: string;
};

export function HeroBackgroundVideo({
  className = "",
  mp4Src,
  posterSrc,
  webmSrc,
}: HeroBackgroundVideoProps) {
  const [shouldPlay, setShouldPlay] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;

    if (reducedMotion.matches || connection?.saveData) return;

    const timer = window.setTimeout(() => setShouldPlay(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`hero-background-video ${className}`} aria-hidden="true">
      <Image
        src={posterSrc}
        alt=""
        fill
        priority
        sizes="(max-width: 767px) 120vw, (max-width: 1073px) 82vw, 880px"
        className={`hero-background-video-poster ${isReady ? "opacity-0" : "opacity-100"}`}
      />
      {shouldPlay ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
          tabIndex={-1}
          onCanPlay={() => setIsReady(true)}
          className={`hero-background-video-motion ${isReady ? "opacity-100" : "opacity-0"}`}
        >
          <source src={webmSrc} type="video/webm" />
          <source src={mp4Src} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
