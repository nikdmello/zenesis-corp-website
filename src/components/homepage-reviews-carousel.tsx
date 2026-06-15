"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { googleReviewsHref, type Testimonial } from "@/lib/site-content";

type HomepageReviewsCarouselProps = {
  testimonials: readonly Testimonial[];
};

export function HomepageReviewsCarousel({
  testimonials,
}: HomepageReviewsCarouselProps) {
  const pages = useMemo(() => chunkTestimonials(testimonials, 6), [testimonials]);
  const loopedPages = useMemo(() => {
    if (pages.length <= 1) {
      return pages;
    }

    return [pages[pages.length - 1], ...pages, pages[0]];
  }, [pages]);
  const [activePage, setActivePage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(pages.length > 1 ? 1 : 0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const isJumpingRef = useRef(false);
  const settleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastPageIndex = pages.length - 1;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (pages.length > 1) {
      const pageWidth = track.clientWidth;
      track.scrollLeft = pageWidth;
    }
  }, [pages.length]);

  useEffect(() => {
    return () => {
      if (settleTimeoutRef.current) {
        clearTimeout(settleTimeoutRef.current);
      }
    };
  }, []);

  const jumpToIndex = (pageIndex: number) => {
    const track = trackRef.current;
    if (!track) return;

    isJumpingRef.current = true;
    const pageWidth = track.clientWidth;
    const previousScrollBehavior = track.style.scrollBehavior;
    track.style.scrollBehavior = "auto";
    track.scrollLeft = pageIndex * pageWidth;
    setCurrentIndex(pageIndex);
    window.requestAnimationFrame(() => {
      track.style.scrollBehavior = previousScrollBehavior;
      isJumpingRef.current = false;
    });
  };

  const scrollToIndex = (pageIndex: number) => {
    const track = trackRef.current;
    if (!track) return;

    const pageWidth = track.clientWidth;
    track.scrollTo({
      left: pageIndex * pageWidth,
      behavior: "smooth",
    });
    setCurrentIndex(pageIndex);
  };

  const scrollToPage = (pageIndex: number) => {
    if (pages.length <= 1) {
      scrollToIndex(pageIndex);
      return;
    }

    scrollToIndex(pageIndex + 1);
  };

  const getLogicalPage = (pageIndex: number) => {
    if (pages.length <= 1) {
      return pageIndex;
    }

    if (pageIndex === 0) {
      return lastPageIndex;
    }

    if (pageIndex === pages.length + 1) {
      return 0;
    }

    return pageIndex - 1;
  };

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={(event) => {
          if (isJumpingRef.current) return;

          const element = event.currentTarget;
          const nextPageIndex = Math.round(element.scrollLeft / element.clientWidth);
          const nextLogicalPage = getLogicalPage(nextPageIndex);

          if (nextLogicalPage !== activePage) {
            setActivePage(nextLogicalPage);
          }

          if (nextPageIndex !== currentIndex) {
            setCurrentIndex(nextPageIndex);
          }

          if (settleTimeoutRef.current) {
            clearTimeout(settleTimeoutRef.current);
          }

          if (pages.length > 1) {
            settleTimeoutRef.current = setTimeout(() => {
              if (nextPageIndex === 0) {
                jumpToIndex(pages.length);
                return;
              }

              if (nextPageIndex === pages.length + 1) {
                jumpToIndex(1);
              }
            }, 140);
          }
        }}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loopedPages.map((page, pageIndex) => (
          <div
            key={`reviews-page-${pageIndex}`}
            className="w-full shrink-0 snap-start px-1 md:px-2"
          >
            <div className="grid gap-5 md:grid-cols-2 md:[grid-auto-rows:1fr] xl:grid-cols-3">
              {page.map((item) => (
                <a
                  key={item.name}
                  href={googleReviewsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full min-h-[12rem] flex-col rounded-[1.7rem] border border-[#d8d0c2] bg-white p-5 text-[#11232a] transition-transform duration-200 hover:-translate-y-1 md:min-h-[12.9rem] md:p-5.5 xl:min-h-[13.8rem]"
                >
                  <p className="text-[1.08rem] leading-7 text-[#11232a] md:text-[1.14rem] md:leading-8">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-4 pt-4.5">
                    <p className="text-[0.96rem] font-semibold tracking-[-0.02em] text-[#11232a] md:text-[1rem]">
                      {item.name}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous review page"
          onClick={() =>
            scrollToIndex(
              pages.length > 1
                ? currentIndex - 1
                : Math.max(0, currentIndex - 1),
            )
          }
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#11232a]/16 bg-white text-[#11232a] transition-colors hover:border-[#11232a]/34 hover:bg-white disabled:cursor-not-allowed disabled:opacity-35"
        >
          <span aria-hidden="true">←</span>
        </button>

        <div className="flex items-center justify-center gap-2.5">
        {pages.map((_, pageIndex) => {
          const isActive = pageIndex === activePage;
          return (
            <button
              key={`reviews-dot-${pageIndex}`}
              type="button"
              aria-label={`Go to review page ${pageIndex + 1}`}
              aria-pressed={isActive}
              onClick={() => scrollToPage(pageIndex)}
              className={`h-2.5 rounded-full transition-all duration-200 ${
                isActive
                  ? "w-8 bg-[#11232a]"
                  : "w-2.5 bg-[#11232a]/24 hover:bg-[#11232a]/40"
              }`}
            />
          );
        })}
        </div>

        <button
          type="button"
          aria-label="Next review page"
          onClick={() =>
            scrollToIndex(
              pages.length > 1
                ? currentIndex + 1
                : Math.min(lastPageIndex, currentIndex + 1),
            )
          }
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#11232a]/16 bg-white text-[#11232a] transition-colors hover:border-[#11232a]/34 hover:bg-white disabled:cursor-not-allowed disabled:opacity-35"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}

function chunkTestimonials(testimonials: readonly Testimonial[], size: number) {
  const pages: Testimonial[][] = [];

  for (let index = 0; index < testimonials.length; index += size) {
    pages.push([...testimonials.slice(index, index + size)]);
  }

  return pages;
}
