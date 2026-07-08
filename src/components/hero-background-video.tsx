"use client";

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
  const sourceType = src.endsWith(".webm") ? "video/webm" : "video/mp4";

  useEffect(() => {
    const loadTimer = window.setTimeout(() => {
      setShouldLoadVideo(true);
    }, 350);

    return () => {
      window.clearTimeout(loadTimer);
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

  if (!shouldLoadVideo) {
    return (
      <div
        className={`${className ?? ""} bg-[#11232a]`}
        aria-hidden="true"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      suppressHydrationWarning
      className={className}
      aria-hidden="true"
    >
      <source src={src} type={sourceType} />
    </video>
  );
}
