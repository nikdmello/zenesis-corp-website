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
        className="-my-2 flex snap-x snap-mandatory overflow-x-auto py-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loopedPages.map((page, pageIndex) => (
          <div
            key={`reviews-page-${pageIndex}`}
            className="w-full shrink-0 snap-start px-1 md:px-2"
          >
            <div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
              {page.map((item) => (
                <a
                  key={item.name}
                  href={googleReviewsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex h-full min-h-[18rem] min-w-0 flex-col rounded-[1.7rem] border border-[#d8d0c2] bg-[linear-gradient(145deg,#ffffff_0%,#ffffff_62%,#faf5eb_100%)] p-5 text-[#11232a] shadow-[0_12px_32px_rgba(17,35,42,0.055)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-[#cdb98f] hover:shadow-[0_18px_42px_rgba(17,35,42,0.1)] md:p-5.5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      aria-label="5 out of 5 stars"
                      className="text-[0.82rem] tracking-[0.16em] text-[#b88a35]"
                    >
                      ★★★★★
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-serif text-[2.1rem] leading-none text-[#d5be8b]/65"
                    >
                      &ldquo;
                    </span>
                  </div>

                  <p className="mt-2 text-[1.08rem] leading-7 text-[#11232a] md:text-[1.14rem] md:leading-8">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-4 border-t border-[#d8d0c2]/70 pt-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#11232a] text-[0.78rem] font-semibold uppercase tracking-[0.04em] text-white"
                      >
                        {getInitials(item.name)}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[0.96rem] font-semibold leading-tight tracking-[-0.02em] text-[#11232a] md:text-[1rem]">
                          {item.name}
                        </p>
                        <p className="mt-0.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#8d7453]">
                          Google review
                        </p>
                      </div>
                    </div>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-lg text-[#8d7453] transition-transform duration-300 group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
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

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}
