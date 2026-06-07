import Link from "next/link";
import { SearchHighlight } from "@/components/search-highlight";
import { SiteSearchForm } from "@/components/site-search-form";
import { SectionHeading, SiteShell } from "@/components/site-shell";
import { getSearchExcerpt, getSearchSuggestions, searchSite } from "@/lib/site-search";

export const metadata = {
  title: "Search | Zenesis Corporation",
  description:
    "Search Zenesis pages, services, and insight articles across business setup, accounting and tax, and visa and banking.",
};

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const results = query ? searchSite(query) : [];
  const suggestions = getSearchSuggestions();

  return (
    <SiteShell currentPath="/search">
      <section className="relative z-20 left-1/2 -mt-px w-screen -translate-x-1/2 overflow-visible border-b border-foreground/8 bg-[#f5efe4] pt-24 pb-10 md:pt-28 md:pb-12">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <div className="max-w-[72rem] border-l-4 border-[#244ba8] pl-5 sm:pl-6 md:pl-7">
            <p className="text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-[#244ba8]">
              Site Search
            </p>
            <h1 className="mt-5 max-w-[18ch] text-[3.2rem] font-semibold leading-[0.94] tracking-[-0.04em] text-foreground sm:text-[4rem] lg:max-w-[20ch] lg:text-[4.55rem]">
              Search Zenesis
            </h1>
            <p className="mt-6 max-w-3xl text-[1.12rem] leading-8 text-muted md:text-[1.2rem] md:leading-9">
              Search pages, services, and insight articles across business setup,
              accounting and tax, and visa and banking.
            </p>
            <div className="mt-8 max-w-[46rem]">
              <SiteSearchForm
                defaultValue={query}
                theme="light"
                className="w-full"
              />
            </div>
            <p className="mt-4 text-[0.96rem] leading-7 text-muted">
              {query
                ? `${results.length} result${results.length === 1 ? "" : "s"} for “${query}”.`
                : "Start with a service, article, visa route, tax topic, or company setup term."}
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow={query ? "Results" : "Browse"}
            title={query ? "Matching pages" : "Suggested places to start"}
            description={
              query
                ? "Results are pulled from top-level pages, service pages, the featured profile, and insight articles."
                : "Use these common entry points if you are not sure where to begin."
            }
            eyebrowClassName="text-white/68"
            titleClassName="text-white"
            descriptionClassName="text-white/92"
          />

          {query && results.length === 0 ? (
            <div className="mt-10 rounded-[2rem] border border-[#d8d0c2] bg-white p-8 text-[#11232a] shadow-[0_20px_60px_rgba(17,35,42,0.18)] md:p-10">
              <h2 className="text-[1.4rem] font-semibold tracking-[-0.03em] text-foreground">
                No direct matches found
              </h2>
              <p className="mt-4 max-w-3xl text-[1.08rem] leading-8 text-muted md:text-[1.12rem] md:leading-9">
                Try broader terms like <span className="font-semibold text-foreground">mainland</span>,
                <span className="font-semibold text-foreground"> free zone</span>,
                <span className="font-semibold text-foreground"> corporate tax</span>,
                <span className="font-semibold text-foreground"> VAT</span>,
                <span className="font-semibold text-foreground"> Golden Visa</span>, or
                <span className="font-semibold text-foreground"> bank account</span>.
              </p>
            </div>
          ) : null}

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {(query ? results : suggestions).map((result) => (
              <Link
                key={`${result.href}-${result.title}`}
                href={result.href}
                className="group rounded-[1.75rem] border border-[#d8d0c2] bg-white p-7 text-[#11232a] shadow-[0_18px_50px_rgba(17,35,42,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_58px_rgba(17,35,42,0.18)]"
              >
                <div
                  title={result.section ? `${result.type} • ${result.section}` : result.type}
                  className="flex items-center gap-2 whitespace-nowrap text-[0.84rem] font-semibold uppercase tracking-[0.16em] text-[#8d7453]"
                >
                  <span className="shrink-0">{result.type}</span>
                  {result.section ? (
                    <>
                      <span className="shrink-0 text-[#8d7453]/58">•</span>
                      <span>{result.section}</span>
                    </>
                  ) : null}
                </div>
                <h2
                  title={result.title}
                  className="mt-4 text-[1.24rem] font-semibold leading-[1.28] tracking-[-0.035em] text-foreground"
                >
                  {query ? (
                    <SearchHighlight text={result.title} query={query} />
                  ) : (
                    result.title
                  )}
                </h2>
                <p className="mt-4 text-[1.04rem] leading-8 text-muted">
                  {query ? (
                    <SearchHighlight
                      text={getSearchExcerpt(
                        `${result.description} ${result.searchText}`,
                        query,
                        165,
                      )}
                      query={query}
                    />
                  ) : (
                    result.description
                  )}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-[0.96rem] font-semibold text-[#244ba8] transition-colors group-hover:text-[#1b3c86]">
                  Open result
                  <span aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
