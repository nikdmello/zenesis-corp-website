"use client";

import { useRef, useState } from "react";

export function AwardsVideoExperience() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const startVideo = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      await video.play();
    } catch {
      video.controls = true;
    }
  };

  return (
    <div className="group relative overflow-hidden bg-[#07151b] shadow-[0_28px_70px_rgba(7,21,27,0.24)]">
      <video
        ref={videoRef}
        controls={hasStarted}
        playsInline
        preload="metadata"
        poster="/recognition/zenesis-award-video-poster.webp"
        onPlay={() => setHasStarted(true)}
        className="aspect-video w-full bg-[#07151b] object-contain"
      >
        <source src="/recognition/zenesis-award-cecilia-75s.mp4" type="video/mp4" />
        Your browser does not support embedded video.
      </video>

      {!hasStarted ? (
        <button
          type="button"
          onClick={startVideo}
          className="absolute inset-0 flex cursor-pointer items-center justify-center bg-[linear-gradient(180deg,rgba(7,21,27,0.04)_20%,rgba(7,21,27,0.82)_100%)] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#ead5aa]"
          aria-label="Play the Zenesis award ceremony video"
        >
          <span className="absolute left-5 top-5 border border-white/32 bg-[#07151b]/74 px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm md:left-8 md:top-8">
            IRECMS Dubai
          </span>

          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-white/14 shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm transition duration-300 group-hover:scale-105 group-hover:bg-white/22 md:h-20 md:w-20">
            <span className="ml-1 block h-0 w-0 border-y-[9px] border-l-[15px] border-y-transparent border-l-white md:border-y-[11px] md:border-l-[18px]" aria-hidden="true" />
          </span>

          <span className="absolute inset-x-5 bottom-5 hidden max-w-[48rem] text-white sm:block md:inset-x-8 md:bottom-8">
            <span className="block text-[1.45rem] font-semibold leading-[1.08] md:text-[2.35rem]">
              Best Real Estate Management Consultancy of the Year
            </span>
            <span className="mt-3 hidden max-w-[40rem] text-[0.95rem] leading-6 text-white/78 sm:block">
              Watch Zenesis receive the award and founder Cecilia D&apos;Cunha share a few words from the stage.
            </span>
          </span>
        </button>
      ) : null}
    </div>
  );
}
