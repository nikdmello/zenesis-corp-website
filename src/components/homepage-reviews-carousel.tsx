"use client";

import { useRef, useState } from "react";
import { googleReviewsHref, type Testimonial } from "@/lib/site-content";

type HomepageReviewsCarouselProps = {
  testimonials: readonly Testimonial[];
};

export function HomepageReviewsCarousel({
  testimonials,
}: HomepageReviewsCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToReview = (index: number) => {
    const track = trackRef.current;
    const nextIndex = Math.max(0, Math.min(testimonials.length - 1, index));
    const card = track?.children.item(nextIndex) as HTMLElement | null;

    if (!track || !card) return;

    track.scrollTo({
      left: card.offsetLeft - track.offsetLeft,
      behavior: "smooth",
    });
    setActiveIndex(nextIndex);
  };

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={(event) => {
          const track = event.currentTarget;
          const cards = Array.from(track.children) as HTMLElement[];
          const nextIndex = cards.reduce((closestIndex, card, index) => {
            const currentDistance = Math.abs(card.offsetLeft - track.offsetLeft - track.scrollLeft);
            const closestCard = cards[closestIndex];
            const closestDistance = Math.abs(
              closestCard.offsetLeft - track.offsetLeft - track.scrollLeft,
            );

            return currentDistance < closestDistance ? index : closestIndex;
          }, 0);

          if (nextIndex !== activeIndex) {
            setActiveIndex(nextIndex);
          }
        }}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((item) => (
          <a
            key={item.name}
            href={googleReviewsHref}
            target="_blank"
            rel="noreferrer"
            className="group relative flex min-h-[19rem] w-[88%] shrink-0 snap-start flex-col rounded-lg border border-[#d8d0c2] bg-white p-5 text-[#11232a] transition-transform duration-300 ease-out hover:-translate-y-0.5 sm:w-[calc((100%-1.25rem)/2)] xl:w-[calc((100%-2.5rem)/3)]"
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

            <p className="mt-3 text-[1.05rem] leading-7 text-[#11232a] md:text-[1.1rem] md:leading-7">
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
                <p className="min-w-0 text-[0.96rem] font-semibold leading-tight tracking-[-0.02em] text-[#11232a] md:text-[1rem]">
                  {item.name}
                </p>
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

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous review"
          disabled={activeIndex === 0}
          onClick={() => scrollToReview(activeIndex - 1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#11232a]/16 bg-white text-[#11232a] transition-colors hover:border-[#11232a]/34 disabled:cursor-not-allowed disabled:opacity-35"
        >
          <span aria-hidden="true">←</span>
        </button>

        <p className="min-w-[4.5rem] text-center text-sm font-semibold tabular-nums text-[#11232a]/66">
          {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
        </p>

        <button
          type="button"
          aria-label="Next review"
          disabled={activeIndex === testimonials.length - 1}
          onClick={() => scrollToReview(activeIndex + 1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#11232a]/16 bg-white text-[#11232a] transition-colors hover:border-[#11232a]/34 disabled:cursor-not-allowed disabled:opacity-35"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}
