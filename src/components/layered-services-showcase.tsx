"use client";

import NextImage from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ServiceOffering = {
  title: string;
  description: string;
  href?: string;
};

type LayeredServiceItem = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  imageSrc: string;
  imageAlt: string;
  offerings: readonly ServiceOffering[];
};

type LayeredServicesShowcaseProps = {
  items: readonly LayeredServiceItem[];
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function lerp(start: number, end: number, progress: number) {
  return start + (end - start) * progress;
}

function easeOutCubic(progress: number) {
  return 1 - (1 - progress) ** 3;
}

export function LayeredServicesShowcase({
  items,
}: LayeredServicesShowcaseProps) {
  const cardStripHeight = 46;
  const serviceScrollFactor = 96;
  const serviceExitBuffer = 48;
  const sectionRef = useRef<HTMLElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const targetProgressRef = useRef(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [progress, setProgress] = useState(0);
  const [pinState, setPinState] = useState<"before" | "active" | "after">(
    "before",
  );

  useEffect(() => {
    function updateProgress() {
      const section = sectionRef.current;
      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      setViewportHeight(viewportHeight);
      const totalScrollable = Math.max(rect.height - viewportHeight, 1);
      const distanceTravelled = clamp(-rect.top, 0, totalScrollable);

      targetProgressRef.current = distanceTravelled / totalScrollable;

      if (animationFrameRef.current === null) {
        const animateProgress = () => {
          setProgress((currentProgress) => {
            const delta = targetProgressRef.current - currentProgress;

            if (Math.abs(delta) < 0.0015) {
              animationFrameRef.current = null;
              return targetProgressRef.current;
            }

            animationFrameRef.current = window.requestAnimationFrame(
              animateProgress,
            );
            return currentProgress + delta * 0.18;
          });
        };

        animationFrameRef.current = window.requestAnimationFrame(animateProgress);
      }

      if (rect.top > 0) {
        setPinState("before");
      } else if (rect.bottom <= viewportHeight) {
        setPinState("after");
      } else {
        setPinState("active");
      }
    }

    function resetAndMeasure() {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

      targetProgressRef.current = 0;
      setProgress(0);
      setPinState("before");

      window.requestAnimationFrame(updateProgress);
    }

    resetAndMeasure();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    window.addEventListener("pageshow", resetAndMeasure);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.removeEventListener("pageshow", resetAndMeasure);
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, []);

  const transitionSteps = Math.max(items.length - 1, 0);
  const releaseBuffer = 0.2;
  const holdRatio = 0.12;
  const motionWindow = 1 - releaseBuffer;
  const motionProgress = clamp(progress / motionWindow, 0, 1);
  const rawStep = motionProgress * transitionSteps;
  const activeIndex = clamp(Math.floor(rawStep + 0.0001), 0, items.length - 1);
  const stepProgress =
    transitionSteps > 0
      ? clamp(rawStep - activeIndex, 0, 1)
      : 1;
  const activeProgress =
    transitionSteps > 0
      ? clamp((stepProgress - holdRatio) / (1 - holdRatio), 0, 1)
      : 1;
  const smoothActiveProgress = easeOutCubic(activeProgress);
  const desktopStageClassName =
    pinState === "active"
      ? "fixed left-1/2 top-0 z-30 h-[100svh] w-[calc(100vw-3rem)] max-w-[100rem] -translate-x-1/2 overflow-hidden rounded-[2rem] shadow-[0_34px_120px_rgba(0,0,0,0.34)] md:w-[calc(100vw-6rem)] xl:w-[calc(100vw-10rem)]"
      : pinState === "after"
        ? "absolute left-1/2 bottom-0 h-[100svh] w-[calc(100vw-3rem)] max-w-[100rem] -translate-x-1/2 overflow-hidden rounded-[2rem] shadow-[0_34px_120px_rgba(0,0,0,0.34)] md:w-[calc(100vw-6rem)] xl:w-[calc(100vw-10rem)]"
        : "absolute left-1/2 top-0 h-[100svh] w-[calc(100vw-3rem)] max-w-[100rem] -translate-x-1/2 overflow-hidden rounded-[2rem] shadow-[0_34px_120px_rgba(0,0,0,0.34)] md:w-[calc(100vw-6rem)] xl:w-[calc(100vw-10rem)]";

  return (
    <>
      <section className="text-[#07151b]">
        <div className="mx-auto w-full max-w-[100rem] px-6 py-10 md:px-12 md:py-12 xl:px-20">
          <div className="border-y border-[#07151b]/10 py-5 md:py-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow text-[#244ba8]">Services</p>
                <h2 className="section-title mt-4 font-semibold text-[#07151b]">
                  To meet your needs.
                </h2>
              </div>
              <p className="max-w-md text-[1rem] leading-7 text-[#07151b]/72 md:text-right">
                Start with the area you need help with.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={sectionRef}
        className="relative mx-auto w-full max-w-[100rem] text-white"
        style={{
          minHeight: `${Math.max(items.length * serviceScrollFactor + serviceExitBuffer, 420)}svh`,
        }}
      >
        <div className={desktopStageClassName}>
          <div className="relative h-full w-full overflow-hidden">
            {items.map((item, index) => {
              const isPrevious = index < activeIndex;
              const isActive = index === activeIndex;
              const isNext = index === activeIndex + 1;
              const currentStackTop = cardStripHeight * activeIndex;
              const nextStackTop = cardStripHeight * (activeIndex + 1);
              const nextCardTop = lerp(
                viewportHeight || 1200,
                nextStackTop,
                smoothActiveProgress,
              );
              const topOffset = isPrevious
                ? `${cardStripHeight * index}px`
                : isActive
                  ? `${currentStackTop}px`
                  : isNext
                    ? `${nextCardTop}px`
                    : "100%";
              const cardHeight = isPrevious
                ? `${cardStripHeight}px`
                : isActive
                  ? `calc(100% - ${currentStackTop}px)`
                  : isNext
                    ? `calc(100% - ${nextCardTop}px)`
                  : "100%";
              const opacity = index <= activeIndex + 1 ? 1 : 0;
              const pointerEvents = index <= activeIndex + 1 ? "auto" : "none";
              const contentShift = isNext
                ? (1 - smoothActiveProgress) * 16
                : 0;

              return (
                <article
                  key={item.title}
                  className="absolute inset-0 overflow-hidden bg-[#0a1d24] [will-change:top,height,opacity]"
                  style={{
                    opacity,
                    pointerEvents,
                    top: topOffset,
                    height: cardHeight,
                    zIndex: items.length + index,
                    transition: "opacity 160ms ease-out",
                  }}
                >
                  <div className="relative h-full">
                    <div className="absolute inset-0">
                      <NextImage
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,35,42,0.22)_0%,rgba(17,35,42,0.26)_24%,rgba(17,35,42,0.92)_100%)]" />

                    <div className="relative z-10 flex h-full items-center justify-center px-6 pb-14 pt-24 sm:px-8 sm:pb-16 sm:pt-28 lg:px-12 lg:pb-20 lg:pt-32">
                      <div
                        className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-center border-b border-[#07151b]/8 bg-white px-8"
                        style={{ height: `${cardStripHeight}px` }}
                      >
                        <p className="text-center font-[family-name:var(--font-plex-mono)] text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#07151b] sm:text-[0.82rem] sm:tracking-[0.2em]">
                          {String(index + 1).padStart(2, "0")} {item.eyebrow}
                        </p>
                      </div>
                      <div
                        className="mt-auto flex max-w-5xl flex-col items-center text-center"
                        style={{
                          transform: `translateY(${contentShift}px)`,
                          transition: "transform 140ms linear",
                        }}
                      >
                        <h3 className="max-w-[16ch] text-[2.35rem] font-semibold leading-[0.95] tracking-[-0.055em] text-white [text-shadow:0_10px_28px_rgba(0,0,0,0.45)] sm:max-w-[17ch] sm:text-[2.9rem] lg:max-w-[20ch] lg:text-[3.55rem] xl:text-[4.1rem]">
                          {item.title}
                        </h3>
                        <div className="mt-8 w-full max-w-[68rem] overflow-hidden rounded-[1.55rem] border border-[#07151b] bg-[#07151b] shadow-[0_20px_52px_rgba(0,0,0,0.14)]">
                          <div className="grid gap-px md:grid-cols-3">
                          {item.offerings.map((offering) => {
                            const content = (
                              <div className="h-full bg-white px-5 py-6 text-center sm:px-6 sm:py-7">
                                <p className="text-[1.08rem] font-semibold tracking-[-0.025em] text-[#07151b] sm:text-[1.14rem]">
                                  {offering.title}
                                </p>
                                <p className="mt-4 text-[1rem] leading-7 text-[#07151b] sm:mt-5 sm:text-[1.04rem] sm:leading-8">
                                  {offering.description}
                                </p>
                              </div>
                            );

                            return offering.href ? (
                              <Link
                                key={offering.title}
                                href={offering.href}
                                className="transition-transform duration-200 hover:-translate-y-0.5"
                              >
                                {content}
                              </Link>
                            ) : (
                              <div key={offering.title}>{content}</div>
                            );
                          })}
                          </div>
                        </div>
                        <Link
                          href={item.href}
                          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold !text-[#07151b] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/92"
                        >
                          {item.cta}
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
