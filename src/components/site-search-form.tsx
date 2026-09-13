"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useDeferredValue,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { SearchHighlight } from "@/components/search-highlight";
import { getSearchExcerpt, searchSite } from "@/lib/site-search";

type SiteSearchFormProps = {
  defaultValue?: string;
  placeholder?: string;
  compact?: boolean;
  autoFocus?: boolean;
  className?: string;
  theme?: "dark" | "light";
};

export function HeaderSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label="Search Zenesis"
        aria-expanded={isOpen}
        title="Search Zenesis"
        onClick={() => setIsOpen((current) => !current)}
        className={`flex h-10 w-10 items-center justify-center rounded-md border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ead5aa] ${
          isOpen
            ? "border-[#ead5aa]/55 bg-white/12 text-[#ead5aa]"
            : "border-white/16 bg-white/[0.055] text-white/78 hover:border-[#ead5aa]/42 hover:text-[#ead5aa]"
        }`}
      >
        <SearchIcon className="h-[1.05rem] w-[1.05rem]" />
      </button>

      {isOpen ? (
        <div className="absolute right-0 top-[calc(100%+0.75rem)] z-[80] w-[min(30rem,calc(100vw-2rem))] border border-white/12 bg-[#011735] p-4 shadow-[0_24px_60px_rgba(0,10,28,0.38)]">
          <div className="mb-3 flex items-center justify-between gap-4">
            <p className="text-sm font-semibold text-white">Search Zenesis</p>
            <button
              type="button"
              aria-label="Close search"
              title="Close search"
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-sm text-white/58 transition-colors hover:bg-white/8 hover:text-white"
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          </div>
          <SiteSearchForm compact autoFocus className="w-full" />
        </div>
      ) : null}
    </div>
  );
}

export function SiteSearchForm({
  defaultValue = "",
  placeholder = "Search the site",
  compact = false,
  autoFocus = false,
  className,
  theme = "dark",
}: SiteSearchFormProps) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listboxId = useId();
  const isLight = theme === "light";
  const deferredQuery = useDeferredValue(query);
  const trimmedQuery = deferredQuery.trim();
  const liveResults = useMemo(
    () => (trimmedQuery.length >= 2 ? searchSite(trimmedQuery, 6) : []),
    [trimmedQuery],
  );
  const shouldShowResults = isOpen && trimmedQuery.length >= 2;

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!formRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsOpen(false);
    router.push(trimmedQuery ? `/search?q=${encodeURIComponent(trimmedQuery)}` : "/search");
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={`relative ${className ?? ""}`}
      autoComplete="off"
      suppressHydrationWarning
    >
      <div
        aria-expanded={shouldShowResults}
        aria-controls={shouldShowResults ? listboxId : undefined}
        className={`flex items-center overflow-hidden rounded-[0.7rem] border transition-all duration-300 ${
          isLight
            ? "border-foreground/10 bg-white text-foreground shadow-[0_10px_24px_rgba(7,21,27,0.12)] focus-within:border-[#8d7453]/45 focus-within:shadow-[0_14px_30px_rgba(7,21,27,0.16)]"
            : "border-[#ead5aa]/28 bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.055)_100%)] text-white shadow-[0_12px_28px_rgba(7,21,27,0.24),inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/5 backdrop-blur-xl focus-within:border-[#ead5aa]/65 focus-within:bg-white/12 focus-within:shadow-[0_16px_34px_rgba(7,21,27,0.3),0_0_0_3px_rgba(234,213,170,0.1),inset_0_1px_0_rgba(255,255,255,0.14)]"
        } ${
          compact ? "h-11 pl-3 pr-3" : "h-14 pl-4 pr-2"
        }`}
      >
        <SearchIcon
          className={`shrink-0 transition-colors duration-300 ${isLight ? "text-foreground/46" : "text-[#ead5aa]"} ${
            compact ? "h-4 w-4" : "h-5 w-5"
          }`}
        />
        <input
          ref={inputRef}
          type="search"
          name="site_search_query"
          suppressHydrationWarning
          value={query}
          autoFocus={autoFocus}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck={false}
          onFocus={() => setIsOpen(true)}
          onChange={(event) => {
            setQuery(event.target.value);
            setIsOpen(true);
          }}
          aria-autocomplete="list"
          placeholder={placeholder}
          className={`w-full bg-transparent outline-none ${
            isLight ? "text-foreground placeholder:text-foreground/40" : "text-white placeholder:text-white/58"
          } ${
            compact
              ? "px-2 text-[0.94rem] font-medium"
              : "px-3 pr-4 text-[1.04rem] font-medium"
          }`}
        />
      </div>
      {shouldShowResults ? (
        <div
          id={listboxId}
          className={`absolute left-0 top-[calc(100%+0.75rem)] z-[70] overflow-hidden rounded-[1.4rem] border shadow-[0_24px_60px_rgba(7,21,27,0.22)] ${
            compact
              ? "w-[26rem] max-w-[calc(100vw-2rem)] xl:w-[30rem] 2xl:w-[32rem]"
              : "right-0 w-full"
          } ${
            isLight
              ? "border-foreground/10 bg-white"
              : "border-white/10 bg-[rgba(15,31,39,0.985)] text-white backdrop-blur-xl"
          }`}
          role="listbox"
        >
          {liveResults.length > 0 ? (
            <>
              <div className="max-h-[24rem] overflow-y-auto p-2">
                {liveResults.map((result) => (
                  <Link
                    key={result.href}
                    href={result.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-[1rem] px-4 py-3 transition-colors ${
                      isLight
                        ? "hover:bg-[#f8f5ef]"
                        : "hover:bg-white/7"
                    }`}
                  >
                    <div
                      title={result.section ? `${result.type}, ${result.section}` : result.type}
                      className={`flex items-center gap-2 whitespace-nowrap text-sm font-semibold ${
                        isLight ? "text-[#8d7453]" : "text-white/48"
                      }`}
                    >
                      <span className="shrink-0">{result.type}</span>
                      {result.section ? (
                        <>
                          <span className={`shrink-0 ${isLight ? "text-[#8d7453]/52" : "text-white/28"}`}>
                            ,
                          </span>
                          <span>{result.section}</span>
                        </>
                      ) : null}
                    </div>
                    <div
                      title={result.title}
                      className={`mt-2 text-[0.98rem] font-semibold leading-6 tracking-[-0.02em] ${
                        isLight ? "text-foreground" : "text-white"
                      }`}
                    >
                      <SearchHighlight text={result.title} query={trimmedQuery} />
                    </div>
                    <p
                      className={`mt-1 text-[0.92rem] leading-6 ${
                        isLight ? "text-foreground/72" : "text-white/66"
                      }`}
                    >
                      <SearchHighlight
                        text={getSearchExcerpt(
                          `${result.description} ${result.searchText}`,
                          trimmedQuery,
                          compact ? 118 : 150,
                        )}
                        query={trimmedQuery}
                        highlightClassName={
                          isLight
                            ? "bg-[#ead9b7] text-foreground"
                            : "bg-[#8d7453]/45 text-white"
                        }
                      />
                    </p>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="px-4 py-4">
              <p
                className={`text-[0.92rem] leading-6 ${
                  isLight ? "text-foreground/68" : "text-white/62"
                }`}
              >
                No direct matches yet. Try a broader term like mainland, VAT,
                Golden Visa, or bookkeeping.
              </p>
            </div>
          )}
        </div>
      ) : null}
    </form>
  );
}

export function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M14.17 14.18 18 18m-1.94-8.06a6.11 6.11 0 1 1-12.22 0 6.11 6.11 0 0 1 12.22 0Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
