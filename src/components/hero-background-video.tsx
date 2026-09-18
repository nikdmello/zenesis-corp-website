"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setShouldPlay(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!shouldPlay) return;

    let frameId = 0;
    let phase: "slow" | "fast" | "fast-settle" = "slow";
    let previousMediaTime = 0;
    let fastRotations = 0;

    const animate = () => {
      const video = videoRef.current;

      if (video && Number.isFinite(video.duration) && video.duration > 0) {
        const mediaTime = video.currentTime;
        const remaining = video.duration - mediaTime;
        const wrapped = mediaTime + video.duration * 0.5 < previousMediaTime;

        if (phase === "slow") {
          if (video.paused) void video.play();
          const slowProgress = Math.min(mediaTime / (video.duration * 0.5), 1);
          const targetRate = 0.42 + 0.55 * Math.sin(Math.PI * slowProgress);
          video.playbackRate += (targetRate - video.playbackRate) * 0.065;

          if (mediaTime >= video.duration * 0.5) {
            phase = "fast";
            fastRotations = 0;
          }
        } else if (phase === "fast") {
          if (video.paused) void video.play();
          video.playbackRate += (2.65 - video.playbackRate) * 0.12;

          if (wrapped) fastRotations += 1;
          if (fastRotations >= 1 && remaining < 2.5) phase = "fast-settle";
        } else if (phase === "fast-settle") {
          const approach = Math.min(Math.max(remaining / 2.5, 0), 1);
          const targetRate = 0.42 + 2.23 * Math.pow(approach, 1.45);
          video.playbackRate += (targetRate - video.playbackRate) * 0.12;

          if (wrapped) {
            phase = "slow";
            fastRotations = 0;
            video.playbackRate = 0.42;
          }
        }

        previousMediaTime = video.currentTime;
      }

      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, [shouldPlay]);

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
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
          tabIndex={-1}
          onCanPlay={(event) => {
            if (!isReady) {
              event.currentTarget.currentTime = 0;
              event.currentTarget.playbackRate = 0.42;
            }
            event.currentTarget.muted = true;
            void event.currentTarget.play().catch(() => undefined);
            setIsReady(true);
          }}
          className={`hero-background-video-motion ${isReady ? "opacity-100" : "opacity-0"}`}
        >
          <source src={mp4Src} type="video/mp4" />
          <source src={webmSrc} type="video/webm" />
        </video>
      ) : null}
    </div>
  );
}
