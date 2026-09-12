"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/arrow-right-icon";
import { useMemo, useRef, useState } from "react";
import { useResponsiveCarouselPage } from "@/components/use-responsive-carousel-page";

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

export function HomepageInsightsCarousel({ posts }: HomepageInsightsCarouselProps) {
  const categories = [allCategoryLabel, ...new Set(posts.map((post) => post.category))];
  const [activeCategory, setActiveCategory] = useState(allCategoryLabel);
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const programmaticScrollTimerRef = useRef<number | null>(null);
  const programmaticScrollRef = useRef(false);

  const filteredPosts = useMemo(
    () => activeCategory === allCategoryLabel
      ? posts
      : posts.filter((post) => post.category === activeCategory),
    [activeCategory, posts],
  );
  const { activePage, pageCount, isReady, startIndexForPage } =
    useResponsiveCarouselPage(filteredPosts.length, activeIndex);

  const scrollToCard = (index: number) => {
    const track = trackRef.current;
    const nextIndex = Math.max(0, Math.min(filteredPosts.length - 1, index));
    const card = track?.children.item(nextIndex) as HTMLElement | null;

    if (!track || !card) return;

    programmaticScrollRef.current = true;
    if (programmaticScrollTimerRef.current !== null) {
      window.clearTimeout(programmaticScrollTimerRef.current);
    }
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setActiveIndex(nextIndex);
    programmaticScrollTimerRef.current = window.setTimeout(() => {
      programmaticScrollRef.current = false;
      programmaticScrollTimerRef.current = null;
    }, 500);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-white/18">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
                setActiveIndex(0);
                requestAnimationFrame(() => trackRef.current?.scrollTo({ left: 0 }));
              }}
              className={`border-b-2 px-0 pb-3 pt-1 text-sm font-semibold transition-colors ${isActive ? "border-[#ead5aa] text-white" : "border-transparent text-white/62 hover:text-white"}`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div
        ref={trackRef}
        onScroll={(event) => {
          const track = event.currentTarget;
          if (programmaticScrollRef.current) return;
          const cards = Array.from(track.children) as HTMLElement[];
          if (!cards.length) return;

          const cardStep = cards.length > 1
            ? cards[1].offsetLeft - cards[0].offsetLeft
            : cards[0].offsetWidth;
          const nextIndex = Math.min(
            filteredPosts.length - 1,
            Math.max(0, Math.round(track.scrollLeft / cardStep)),
          );

          if (nextIndex !== activeIndex) setActiveIndex(nextIndex);
        }}
        className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {filteredPosts.map((item) => (
          <Link
            key={item.slug}
            href={`/insights/${item.slug}`}
            className="group flex min-h-[34rem] w-[88%] shrink-0 snap-start flex-col overflow-hidden rounded-[0.35rem] border border-white/18 bg-white text-[#011735] transition-transform duration-300 hover:-translate-y-0.5 sm:w-[calc((100%-1.25rem)/2)] xl:w-[calc((100%-2.5rem)/3)]"
          >
            <div className="relative h-52 shrink-0 overflow-hidden bg-[#011735] md:h-56">
              <Image
                src={item.heroImageSrc}
                alt={item.heroImageAlt}
                fill
                sizes="(min-width: 1280px) 30vw, (min-width: 640px) 46vw, 88vw"
                className={`object-cover transition-transform duration-700 group-hover:scale-[1.025] ${item.heroImageClassName ?? "object-center"}`}
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.84rem] text-[#011735]/58">
                <span className="font-semibold text-[#8d7453]">{item.category}</span>
                <span aria-hidden="true">,</span>
                <span>{item.dateLabel}</span>
              </div>
              <h3 className="mt-5 text-[1.5rem] font-semibold leading-[1.08] text-[#011735]">
                {item.title}
              </h3>
              <p className="mt-4 line-clamp-4 text-[1rem] leading-7 text-[#30434b]">
                {item.description}
              </p>
              <span className="mt-auto border-t border-[#d8d0c2] pt-5 text-sm font-semibold text-[#244ba8]">
                Read article <ArrowRightIcon className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-7 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous insights page"
          disabled={activePage === 0}
          onClick={() => scrollToCard(startIndexForPage(activePage - 1))}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/24 text-white transition-colors hover:border-white/55 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <span aria-hidden="true">←</span>
        </button>
        <p className="min-w-[5.5rem] text-center text-sm font-semibold tabular-nums text-white/64">
          {isReady ? `${String(activePage + 1).padStart(2, "0")} / ${String(pageCount).padStart(2, "0")}` : "\u00a0"}
        </p>
        <button
          type="button"
          aria-label="Next insights page"
          disabled={activePage === pageCount - 1}
          onClick={() => scrollToCard(startIndexForPage(activePage + 1))}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/24 text-white transition-colors hover:border-white/55 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
