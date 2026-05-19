"use client";

import { useEffect, useRef } from "react";

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
  const sourceType = src.endsWith(".webm") ? "video/webm" : "video/mp4";

  useEffect(() => {
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
  }, [playbackRate]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      suppressHydrationWarning
      className={className}
      aria-hidden="true"
    >
      <source src={src} type={sourceType} />
    </video>
  );
}
