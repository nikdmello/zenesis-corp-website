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
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-[#d8d0c2]">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`border-b-2 px-0 pb-2 pt-1 text-sm font-semibold transition-colors ${
                isActive
                  ? "border-[#244ba8] text-[#11232a]"
                  : "border-transparent text-foreground/62 hover:border-[#8d7453]/42 hover:text-[#11232a]"
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
            className="group grid gap-6 rounded-lg border border-[#ddd3c6] bg-white p-5 transition-transform duration-200 hover:-translate-y-0.5 md:grid-cols-[0.72fr_1.28fr] md:items-center md:p-6"
          >
            <div className="relative h-56 overflow-hidden rounded-lg border border-[#d8d0c2] bg-[#11232a] md:h-60 xl:h-64">
              <Image
                src={post.heroImageSrc}
                alt={post.heroImageAlt}
                fill
                sizes="(min-width: 1280px) 34vw, (min-width: 768px) 38vw, 92vw"
                className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${post.heroImageClassName ?? "object-center"}`}
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
              <h2 className="mt-4 w-full text-[1.8rem] font-semibold leading-[1.12] tracking-[-0.04em] text-foreground sm:text-[2.1rem] md:text-[2.35rem] xl:text-[2.5rem]">
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
