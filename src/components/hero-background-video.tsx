"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type HeroBackgroundVideoProps = {
  src: string;
  className?: string;
  poster?: string;
  playbackRate?: number;
};

export function HeroBackgroundVideo({
  src,
  className,
  poster,
  playbackRate = 1,
}: HeroBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const sourceType = src.includes(".webm") ? "video/webm" : "video/mp4";

  useEffect(() => {
    const connection = (
      navigator as Navigator & {
        connection?: {
          saveData?: boolean;
        };
      }
    ).connection;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const shouldAvoidVideo =
      prefersReducedMotion || connection?.saveData;

    if (shouldAvoidVideo) {
      return;
    }

    const requestIdleCallback = window.requestIdleCallback;
    const cancelIdleCallback = window.cancelIdleCallback;
    const loadVideo = () => setShouldLoadVideo(true);
    let idleId: number | undefined;
    let loadTimer: number | undefined;

    const scheduleVideoLoad = () => {
      if (requestIdleCallback) {
        idleId = requestIdleCallback(loadVideo, { timeout: 600 });
        return;
      }

      loadTimer = window.setTimeout(loadVideo, 200);
    };

    if (document.readyState === "complete") {
      scheduleVideoLoad();
    } else {
      window.addEventListener("load", scheduleVideoLoad, { once: true });
    }

    return () => {
      window.removeEventListener("load", scheduleVideoLoad);
      if (idleId !== undefined) cancelIdleCallback(idleId);
      if (loadTimer !== undefined) window.clearTimeout(loadTimer);
    };
  }, []);

  useEffect(() => {
    if (!shouldLoadVideo) {
      return;
    }

    const video = videoRef.current;
    if (!video) {
      return;
    }

    const applyPlaybackRate = () => {
      video.playbackRate = playbackRate;
    };

    applyPlaybackRate();
    video.addEventListener("loadedmetadata", applyPlaybackRate);

    return () => {
      video.removeEventListener("loadedmetadata", applyPlaybackRate);
    };
  }, [playbackRate, shouldLoadVideo]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#11232a]">
      {poster ? (
        <Image
          src={poster}
          alt=""
          fill
          priority
          quality={68}
          sizes="100vw"
          className={className}
          aria-hidden="true"
        />
      ) : null}

      {shouldLoadVideo ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setIsVideoReady(true)}
          suppressHydrationWarning
          className={`${className ?? ""} absolute inset-0 transition-opacity duration-500 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          <source src={src} type={sourceType} />
        </video>
      ) : null}
    </div>
  );
}
