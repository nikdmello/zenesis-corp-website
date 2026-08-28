"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { InsightPost } from "@/lib/insights";

type InsightsArchiveProps = {
  posts: readonly InsightPost[];
};

const allCategoryLabel = "All";
const initialVisibleCount = 8;
const loadMoreCount = 6;

export function InsightsArchive({ posts }: InsightsArchiveProps) {
  const categories = [allCategoryLabel, ...new Set(posts.map((post) => post.category))];
  const [activeCategory, setActiveCategory] = useState(allCategoryLabel);
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const matches = posts.filter((post) => {
      const matchesCategory =
        activeCategory === allCategoryLabel || post.category === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        [post.title, post.description, post.category, post.author]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });

    return [...matches].sort((first, second) => {
      const difference =
        new Date(second.dateLabel).getTime() - new Date(first.dateLabel).getTime();
      return sortOrder === "newest" ? difference : -difference;
    });
  }, [activeCategory, posts, query, sortOrder]);

  const updateCategory = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(initialVisibleCount);
  };

  return (
    <div className="mt-9">
      <div className="border-y border-[#d8d0c2] py-4">
        <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max items-center gap-2">
            {categories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => updateCategory(category)}
                  className={`min-h-10 border px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "border-[#011735] bg-[#011735] text-white"
                      : "border-[#d8d0c2] bg-white text-[#011735]/72 hover:border-[#8d7453] hover:text-[#011735]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-[minmax(0,1fr)_12rem]">
          <label className="block">
            <span className="sr-only">Search articles</span>
            <input
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setVisibleCount(initialVisibleCount);
              }}
              placeholder="Search the Insights catalogue"
              className="h-11 w-full border border-[#cfc5b7] bg-white px-4 text-[0.96rem] text-[#011735] outline-none transition-colors placeholder:text-[#011735]/46 focus:border-[#244ba8] focus:ring-2 focus:ring-[#244ba8]/15"
            />
          </label>
          <label className="block">
            <span className="sr-only">Sort articles</span>
            <select
              value={sortOrder}
              onChange={(event) => {
                setSortOrder(event.target.value as "newest" | "oldest");
                setVisibleCount(initialVisibleCount);
              }}
              className="h-11 w-full border border-[#cfc5b7] bg-white px-4 text-[0.96rem] font-medium text-[#011735] outline-none focus:border-[#244ba8] focus:ring-2 focus:ring-[#244ba8]/15"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </label>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-sm text-[#011735]/64" aria-live="polite">
          {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
        </p>
        {query || activeCategory !== allCategoryLabel ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              updateCategory(allCategoryLabel);
            }}
            className="text-sm font-semibold text-[#244ba8] hover:text-[#1b3c86]"
          >
            Clear filters
          </button>
        ) : null}
      </div>

      {filteredPosts.length ? (
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {filteredPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className={`group grid min-h-[10.5rem] grid-cols-[6.75rem_minmax(0,1fr)] overflow-hidden border border-[#ddd3c6] bg-white text-[#011735] transition-[border-color,box-shadow] hover:border-[#bca57f] hover:shadow-[0_10px_26px_rgba(17,35,42,0.08)] sm:grid-cols-[10rem_minmax(0,1fr)] ${
                index >= visibleCount ? "hidden" : ""
              }`}
            >
              <div className="relative min-h-full overflow-hidden border-r border-[#e4dbce] bg-[#011735]">
                <Image
                  src={post.heroImageSrc}
                  alt={post.heroImageAlt}
                  fill
                  quality={75}
                  sizes="(min-width: 640px) 320px, 216px"
                  className={`object-cover ${post.heroImageClassName ?? "object-center"}`}
                />
              </div>

              <div className="flex min-w-0 flex-col p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.78rem] text-[#011735]/58 sm:text-sm">
                  <span className="font-semibold text-[#8d7453]">{post.category}</span>
                  <span aria-hidden="true">/</span>
                  <span>{post.dateLabel}</span>
                </div>
                <h2 className="mt-2 text-[1.04rem] font-semibold leading-6 text-[#011735] sm:text-[1.2rem] sm:leading-7">
                  {post.title}
                </h2>
                <p className="mt-2 hidden line-clamp-2 text-[0.94rem] leading-6 text-[#011735]/68 sm:block">
                  {post.description}
                </p>
                <span className="mt-auto pt-3 text-sm font-semibold text-[#244ba8] group-hover:text-[#1b3c86]">
                  Read article <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-5 border border-[#ddd3c6] bg-white px-6 py-10 text-center">
          <h2 className="text-[1.2rem] font-semibold text-[#011735]">No matching articles</h2>
          <p className="mt-2 text-[0.98rem] leading-7 text-[#011735]/68">
            Try a broader search or choose another topic.
          </p>
        </div>
      )}

      {visibleCount < filteredPosts.length ? (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + loadMoreCount)}
            className="min-h-11 border border-[#244ba8] bg-white px-6 py-2.5 text-sm font-semibold text-[#244ba8] transition-colors hover:bg-[#244ba8] hover:text-white"
          >
            Show more articles
          </button>
        </div>
      ) : null}
    </div>
  );
}
