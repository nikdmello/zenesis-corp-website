"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { InsightPost } from "@/lib/insights";

type InsightsArchiveProps = {
  posts: readonly InsightPost[];
};

const allCategoryLabel = "All";

export function InsightsArchive({ posts }: InsightsArchiveProps) {
  const categories = [allCategoryLabel, ...new Set(posts.map((post) => post.category))];
  const [activeCategory, setActiveCategory] = useState(allCategoryLabel);

  const filteredPosts = useMemo(
    () =>
      activeCategory === allCategoryLabel
        ? posts
        : posts.filter((post) => post.category === activeCategory),
    [activeCategory, posts],
  );

  return (
    <div className="mt-10">
      <div className="flex flex-wrap items-center gap-3">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-[#11232a] text-white"
                  : "border border-[#d6cdbc] bg-white text-foreground/72 hover:bg-[#f8f5ef]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-8 space-y-5">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/insights/${post.slug}`}
            className="group grid gap-6 rounded-[2rem] border border-[#ddd3c6] bg-white px-5 py-5 shadow-[0_18px_48px_rgba(17,35,42,0.06)] transition-transform duration-200 hover:-translate-y-0.5 md:grid-cols-[0.88fr_1.12fr] md:items-center md:px-6 md:py-6"
          >
            <div className="relative overflow-hidden rounded-[1.7rem] bg-[#11232a] shadow-[0_18px_48px_rgba(17,35,42,0.08)]">
              <Image
                src={post.heroImageSrc}
                alt={post.heroImageAlt}
                width={960}
                height={620}
                className={`aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${post.heroImageClassName ?? "object-center"}`}
              />
            </div>

            <div className="md:px-2">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.94rem] text-foreground/66">
                <span className="text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-[#8d7453]">
                  {post.category}
                </span>
                <span aria-hidden="true" className="text-foreground/28">
                  •
                </span>
                <span>{post.dateLabel}</span>
              </div>
              <h2 className="mt-4 max-w-[18ch] text-[2.25rem] font-semibold leading-[1.06] tracking-[-0.05em] text-foreground md:text-[2.65rem]">
                {post.title}
              </h2>
              <p className="mt-4 max-w-3xl text-[1.08rem] leading-8 text-foreground/76">
                {post.description}
              </p>
              <p className="mt-4 text-[0.96rem] font-semibold text-foreground/62">
                By {post.author}
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#244ba8] transition-colors group-hover:text-[#1b3c86]">
                Read article
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
