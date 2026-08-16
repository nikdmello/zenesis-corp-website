"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
type HomepageInsightsCarouselProps = {
  posts: readonly HomepageInsightCard[];
};

export type HomepageInsightCard = {
  slug: string;
  category: string;
  title: string;
  description: string;
  dateLabel: string;
  heroImageSrc: string;
  heroImageAlt: string;
  heroImageClassName?: string;
};

const allCategoryLabel = "All";

export function HomepageInsightsCarousel({
  posts,
}: HomepageInsightsCarouselProps) {
  const categories = [allCategoryLabel, ...new Set(posts.map((post) => post.category))];
  const [activeCategory, setActiveCategory] = useState(allCategoryLabel);

  const filteredPosts = useMemo(
    () =>
      activeCategory === allCategoryLabel
        ? posts
        : posts.filter((post) => post.category === activeCategory),
    [activeCategory, posts],
  );
  const pages = useMemo(() => chunkPosts(filteredPosts, 3), [filteredPosts]);
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

    if (settleTimeoutRef.current) {
      clearTimeout(settleTimeoutRef.current);
    }

    if (pages.length > 1) {
      const pageWidth = track.clientWidth;
      track.scrollLeft = pageWidth;
      return;
    }

    track.scrollLeft = 0;
  }, [pages.length, activeCategory]);

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
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-white/14">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
                setActivePage(0);
                setCurrentIndex(
                  category === allCategoryLabel
                    ? posts.length > 3
                      ? 1
                      : 0
                    : posts.filter((post) => post.category === category).length > 3
                      ? 1
                      : 0,
                );
              }}
              className={`border-b-2 px-0 pb-2 pt-1 text-sm font-semibold transition-colors ${
                isActive
                  ? "border-[#d5be8b] text-white"
                  : "border-transparent text-white/68 hover:border-white/28 hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

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
        className="mt-8 flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loopedPages.map((page, pageIndex) => (
          <div
            key={`insights-page-${pageIndex}`}
            className="w-full shrink-0 snap-start px-1 md:px-2"
          >
            <div className="grid items-stretch gap-5 md:[grid-auto-rows:1fr] lg:grid-cols-3">
              {page.map((item) => (
                <Link
                  key={item.slug}
                  href={`/insights/${item.slug}`}
                  className="group flex h-[40rem] self-stretch flex-col rounded-lg border border-[#d8d0c2] bg-white p-3 text-[#11232a] shadow-[0_10px_28px_rgba(17,35,42,0.08)] transition-transform duration-300 hover:-translate-y-0.5 md:h-[41rem]"
                >
                  <div className="relative z-10 flex min-h-full flex-1 flex-col">
                    <div className="relative h-56 shrink-0 overflow-hidden rounded-md bg-[#11232a] md:h-64 lg:h-60 xl:h-64">
                      <Image
                        src={item.heroImageSrc}
                        alt={item.heroImageAlt}
                        fill
                        sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 31vw, (min-width: 768px) 88vw, 92vw"
                        className={`object-cover transition-transform duration-500 group-hover:scale-[1.04] ${item.heroImageClassName ?? "object-center"}`}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(17,35,42,0.46)_100%)]" />
                    </div>
                    <div className="flex flex-1 flex-col p-3 pt-6">
                      <div className="min-h-[2.25rem] flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.88rem] text-muted/84">
                        <span className="text-sm font-semibold text-[#8d7453]">
                          {item.category}
                        </span>
                        <span aria-hidden="true" className="text-muted/34">
                          •
                        </span>
                        <span>{item.dateLabel}</span>
                      </div>
                      <h3 className="mt-4 line-clamp-3 h-[5.8rem] overflow-hidden text-2xl font-semibold leading-[1.05] tracking-[-0.03em] text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-4 line-clamp-4 flex-1 overflow-hidden text-[1.08rem] leading-8 text-muted">
                        {item.description}
                      </p>
                      <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors group-hover:text-accent-strong">
                        Read blog post
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {pages.length > 1 ? (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous blog page"
            onClick={() =>
              scrollToIndex(
                pages.length > 1
                  ? currentIndex - 1
                  : Math.max(0, currentIndex - 1),
              )
            }
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-transparent text-white transition-colors hover:border-white/34 hover:bg-white/8 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <span aria-hidden="true">←</span>
          </button>

          <div className="flex items-center justify-center gap-2.5">
            {pages.map((_, pageIndex) => {
              const isActive = pageIndex === activePage;
              return (
                <button
                  key={`insights-dot-${pageIndex}`}
                  type="button"
                  aria-label={`Go to blog page ${pageIndex + 1}`}
                  aria-pressed={isActive}
                  onClick={() => scrollToPage(pageIndex)}
                  className={`h-2.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "w-8 bg-white"
                      : "w-2.5 bg-white/30 hover:bg-white/48"
                  }`}
                />
              );
            })}
          </div>

          <button
            type="button"
            aria-label="Next blog page"
            onClick={() =>
              scrollToIndex(
                pages.length > 1
                  ? currentIndex + 1
                  : Math.min(lastPageIndex, currentIndex + 1),
              )
            }
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-transparent text-white transition-colors hover:border-white/34 hover:bg-white/8 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}

function chunkPosts(posts: readonly HomepageInsightCard[], size: number) {
  const pages: HomepageInsightCard[][] = [];

  for (let index = 0; index < posts.length; index += size) {
    pages.push([...posts.slice(index, index + size)]);
  }

  return pages;
}
