import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConsultationFormButton } from "@/components/consultation-button";
import { CleanSectionLink } from "@/components/clean-section-link";
import { JsonLd } from "@/components/json-ld";
import { PrimarySources } from "@/components/primary-sources";
import { ReadingProgress } from "@/components/reading-progress";
import { SiteShell } from "@/components/site-shell";
import { SourceCitationLink } from "@/components/source-citation-link";
import { TalkToZenesisPanel } from "@/components/talk-to-zenesis-panel";
import { articleSectionHeadingClassName } from "@/lib/article-styles";
import {
  getInsightCredibility,
  getInsightPost,
  insightAuthorProfiles,
  insightPosts,
} from "@/lib/insights";
import { pickServiceLinks, serviceLinksByCategory } from "@/lib/internal-links";
import { legacyInsightMetaBySlug } from "@/lib/legacy-meta";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  getAbsoluteUrl,
  toIsoDate,
} from "@/lib/seo";

type InsightArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function toInsightSectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const insightCalloutStyles = {
  deadline: {
    label: "Deadline",
    className: "border-[#244ba8] bg-[#f3f7ff]",
    labelClassName: "text-[#244ba8]",
  },
  definition: {
    label: "Definition",
    className: "border-[#57717c] bg-[#f3f6f6]",
    labelClassName: "text-[#39535e]",
  },
  warning: {
    label: "Important",
    className: "border-[#a87927] bg-[#fbf6e9]",
    labelClassName: "text-[#865f1e]",
  },
  action: {
    label: "Action required",
    className: "border-[#1f7652] bg-[#edf7f1]",
    labelClassName: "text-[#185d41]",
  },
} as const;

export async function generateStaticParams() {
  return insightPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: InsightArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsightPost(slug);

  if (!post) {
    return {
      title: "Insight Not Found | Zenesis Corporation",
    };
  }

  const legacyMeta = legacyInsightMetaBySlug[slug as keyof typeof legacyInsightMetaBySlug];

  return buildPageMetadata({
    title: legacyMeta ? legacyMeta.title : `${post.title} | Zenesis Corporation`,
    description: legacyMeta ? legacyMeta.description : post.description,
    path: `/insights/${post.slug}`,
    type: "article",
    image: post.heroImageSrc,
  });
}

export default async function InsightArticlePage({
  params,
}: InsightArticlePageProps) {
  const { slug } = await params;
  const post = getInsightPost(slug);

  if (!post) {
    notFound();
  }

  const credibility = getInsightCredibility(post.slug);
  const authorProfile =
    insightAuthorProfiles[post.author as keyof typeof insightAuthorProfiles];

  const articleSchemas = [
    buildArticleSchema({
      title: post.title,
      description: post.description,
      path: `/insights/${post.slug}`,
      image: post.heroImageSrc,
      publishedTime: toIsoDate(post.dateLabel),
      modifiedTime: toIsoDate(credibility?.updatedLabel),
      authorName: post.author,
      authorUrl: authorProfile?.profileHref,
    }),
    buildBreadcrumbSchema([
      { name: "Home", url: getAbsoluteUrl("/") },
      { name: "Insights", url: getAbsoluteUrl("/insights") },
      { name: post.title, url: getAbsoluteUrl(`/insights/${post.slug}`) },
    ]),
    ...(post.faqs?.length ? [buildFaqSchema(post.faqs)] : []),
  ];
  const relatedServices =
    pickServiceLinks(post.category, post.relatedServiceHrefs) ??
    serviceLinksByCategory[post.category] ??
    [];
  const relatedInsights = post.relatedInsightSlugs
    ?.map((relatedSlug) => insightPosts.find((item) => item.slug === relatedSlug))
    .filter((item): item is (typeof insightPosts)[number] => Boolean(item)) ?? [];
  const categoryHubHref =
    post.category === "Accounting and Tax"
      ? "/accounting-tax"
      : post.category === "Business Setup"
        ? "/business-setup"
        : "/visa-and-banking";
  const categoryHubLabel =
    post.category === "Accounting and Tax"
      ? "View Accounting & Tax"
      : post.category === "Business Setup"
        ? "View Business Setup"
        : "View Visa & Banking";
  const guideLinks = [
    ...post.sections.map((section) => ({
      href: `#${toInsightSectionId(section.title)}`,
      label: section.title,
    })),
    ...(post.faqs?.length
      ? [{ href: "#direct-answers", label: "Direct answers" }]
      : []),
    ...(credibility?.sources.length
      ? [{ href: "#primary-sources", label: "Primary sources" }]
      : []),
  ];

  return (
    <SiteShell currentPath="/insights">
      <ReadingProgress />
      {articleSchemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <article>
        <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 overflow-hidden bg-[#11232a] py-7 text-white md:py-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(36,75,168,0.24),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_44%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-full overflow-hidden md:w-[min(56vw,60rem)]">
            <div
              className="absolute inset-0 opacity-[0.34] md:opacity-[0.88]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.12) 20%, rgba(0,0,0,0.42) 34%, rgba(0,0,0,0.78) 50%, #000 64%)",
                maskImage:
                  "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.12) 20%, rgba(0,0,0,0.42) 34%, rgba(0,0,0,0.78) 50%, #000 64%)",
              }}
            >
              <Image
                src={post.heroImageSrc}
                alt={post.heroImageAlt}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 58vw, 56vw"
                className={`object-cover object-right saturate-[0.94] contrast-[0.98] ${post.heroImageClassName ?? ""}`}
                priority
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,35,42,0.08)_0%,rgba(17,35,42,0.02)_58%,rgba(17,35,42,0.28)_100%)]" />
          </div>
          <div className="relative mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/12"
            >
              <span aria-hidden="true">←</span>
              Back to Insights
            </Link>

            <div className="mt-4 lg:min-h-[16rem] xl:min-h-[17rem]">
              <header className="relative z-10 max-w-[58rem]">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.98rem] text-white/72">
                  <span className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#d8c3a2]">
                    {post.category}
                  </span>
                  <span aria-hidden="true" className="text-white/34">
                    •
                  </span>
                  <span>{post.dateLabel}</span>
                  {credibility?.updatedLabel ? (
                    <>
                      <span aria-hidden="true" className="text-white/34">
                        •
                      </span>
                      <span>Updated {credibility.updatedLabel}</span>
                    </>
                  ) : null}
                </div>
                <h1
                  className={`mt-7 font-semibold tracking-[-0.06em] text-white ${
                    post.heroTitleClassName ??
                    "w-full text-[2.5rem] leading-[1.06] sm:text-[3rem] md:text-[3.35rem] xl:text-[3.5rem]"
                  }`}
                >
                  {post.displayTitle ?? post.title}
                </h1>
                <p className="mt-7 max-w-4xl text-[1.16rem] font-medium leading-8 text-white/86 md:text-[1.28rem] md:leading-9">
                  {post.description}
                </p>
              </header>
            </div>
          </div>
        </section>

        <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-white py-14 md:py-18">
          <div className="mx-auto w-full max-w-[104rem] px-7 md:px-14 xl:px-24">
            <div className="mx-auto max-w-[78rem] lg:grid lg:grid-cols-[minmax(0,54rem)_17rem] lg:items-start lg:gap-12 xl:gap-16">
              <div className="min-w-0 space-y-16">
              {authorProfile ? (
                <section className="border-y border-[#e4dbce] py-5 lg:hidden">
                  <div className="flex items-center">
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[#d8d0c2] bg-[#f5efe4]">
                        <Image
                          src={authorProfile.imageSrc}
                          alt={post.author}
                          fill
                          sizes="56px"
                          className="scale-[1.15] object-cover object-center"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#8d7453]">
                          Written by
                        </p>
                        <h2 className="mt-1 text-[1rem] font-semibold leading-tight text-foreground md:text-[1.08rem]">
                          {post.author}
                        </h2>
                        <p className="mt-1 text-[0.84rem] font-medium text-foreground/66">
                          {authorProfile.role} <span className="mx-1">•</span>
                          {authorProfile.credentials}
                        </p>
                        <p className="mt-1.5 line-clamp-2 max-w-3xl text-[0.9rem] leading-6 text-foreground/78">
                          {authorProfile.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              ) : null}

              {guideLinks.length ? (
                <nav
                  aria-label="In this guide"
                  className="border-y border-[#d9d1c5] bg-[#f8f6f1] px-6 py-7 md:px-8 lg:hidden"
                >
                  <details className="group sm:hidden">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                      <span>
                        <span className="block text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-[#8d7453]">
                          In this guide
                        </span>
                        <span className="mt-2 block text-[0.98rem] leading-7 text-[#07151b]/68">
                          {guideLinks.length} sections
                        </span>
                      </span>
                      <span className="text-2xl leading-none text-[#8d7453] transition-transform duration-200 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <ol className="mt-6 space-y-3 border-t border-[#d9d1c5] pt-5">
                      {guideLinks.map((item, index) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            className="flex items-start gap-3 text-[0.98rem] font-semibold leading-6 text-foreground"
                          >
                            <span className="mt-0.5 text-[0.78rem] font-semibold tabular-nums text-[#8d7453]">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span>{item.label}</span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </details>
                  <div className="hidden flex-col gap-5 sm:flex md:flex-row md:items-start md:justify-between">
                    <div className="md:max-w-[15rem]">
                      <p className="text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-[#8d7453]">
                        In this guide
                      </p>
                      <p className="mt-2 text-[0.98rem] leading-7 text-[#07151b]/68">
                        Jump directly to the answer or requirement you need.
                      </p>
                    </div>
                    <ol className="grid flex-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                      {guideLinks.map((item, index) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            className="group flex items-start gap-3 text-[0.98rem] font-semibold leading-6 text-foreground hover:text-[#244ba8]"
                          >
                            <span className="mt-0.5 text-[0.78rem] font-semibold tabular-nums text-[#8d7453]">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="border-b border-transparent group-hover:border-[#244ba8]/30">
                              {item.label}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </div>
                </nav>
              ) : null}

              {post.keyTakeaways?.length ? (
                <section className="mx-auto w-full max-w-[54rem] border-l-4 border-[#8d7453] bg-[#f8f6f1] px-6 py-7 md:px-8">
                  <p className="text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-[#8d7453]">
                    Summary
                  </p>
                  <h2 className={`mt-3 ${articleSectionHeadingClassName}`}>
                    Key takeaways
                  </h2>
                  <ul className="mt-5 divide-y divide-[#ddd4c7] border-y border-[#ddd4c7]">
                    {post.keyTakeaways.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 py-4 text-[1.02rem] leading-8 text-[#07151b] md:text-[1.08rem]"
                      >
                        <span className="mt-[0.7rem] h-2 w-2 shrink-0 rounded-full bg-[#8d7453]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {post.sections.map((section, sectionIndex) => {
                const isQuickAnswer = section.title.toLowerCase().includes("quick answer");
                const isIntroSection = sectionIndex === 0;

                return (
                <section
                  key={section.title}
                  id={toInsightSectionId(section.title)}
                  className={`scroll-mt-28 ${
                    isQuickAnswer
                      ? "mx-auto w-full max-w-[58rem] border-y-2 border-[#244ba8] bg-[#f3f7ff] px-6 py-8 md:px-8"
                      : `mx-auto w-full border-t border-[#e4dbce] pt-10 ${
                          section.table ? "max-w-[62rem]" : "max-w-[54rem]"
                        }`
                  }`}
                >
                  {isQuickAnswer ? (
                    <p className="mb-3 text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-[#244ba8]">
                      At a glance
                    </p>
                  ) : null}
                  <h2 className={articleSectionHeadingClassName}>
                    {section.title}
                  </h2>

                  {section.paragraphs?.length ? (
                    <div
                      className={`max-w-[50rem] space-y-5 ${
                        isIntroSection ? "mt-8" : "mt-6"
                      }`}
                    >
                      {section.paragraphs.map((paragraph) => {
                        const text = typeof paragraph === "string" ? paragraph : paragraph.text;
                        const sourceIndexes =
                          typeof paragraph === "string" ? undefined : paragraph.sourceIndexes;

                        return (
                          <p
                            key={text}
                            className={`text-[1.08rem] text-[#07151b]/92 md:text-[1.14rem] ${
                              isIntroSection
                                ? "leading-[2.1rem] md:leading-[2.25rem]"
                                : "leading-[2rem] md:leading-[2.15rem]"
                            }`}
                          >
                            {text}
                            {sourceIndexes?.length ? (
                              <span className="inline-flex whitespace-nowrap align-super text-[0.72em] leading-none">
                                {sourceIndexes.map((sourceIndex) => (
                                  <SourceCitationLink
                                    key={sourceIndex}
                                    sourceIndex={sourceIndex}
                                  />
                                ))}
                              </span>
                            ) : null}
                          </p>
                        );
                      })}
                    </div>
                  ) : null}

                  {section.callout ? (
                    <aside
                      className={`mt-7 border-l-4 px-5 py-5 md:px-6 ${
                        insightCalloutStyles[section.callout.type].className
                      }`}
                    >
                      <p
                        className={`text-[0.72rem] font-semibold uppercase tracking-[0.2em] ${
                          insightCalloutStyles[section.callout.type].labelClassName
                        }`}
                      >
                        {insightCalloutStyles[section.callout.type].label}
                      </p>
                      <h3 className="mt-2 text-[1.08rem] font-semibold leading-7 text-foreground">
                        {section.callout.title}
                      </h3>
                      <p className="mt-2 text-[0.98rem] leading-7 text-[#07151b]/82">
                        {section.callout.text}
                      </p>
                    </aside>
                  ) : null}

                  {section.bullets?.length ? (
                    <ul className="mt-7 max-w-[52rem] divide-y divide-[#e4dbce] border-y border-[#e4dbce]">
                      {section.bullets.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 py-4 text-[1.02rem] leading-8 text-[#07151b]/92 md:text-[1.08rem]"
                        >
                          <span className="mt-[0.7rem] h-2 w-2 shrink-0 rounded-full bg-[#8d7453]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.table ? (
                    <div className="mt-6 overflow-hidden rounded-[1.6rem] border border-[#e4dbce] bg-[#fcfbf8] shadow-[0_12px_30px_rgba(17,35,42,0.05)]">
                      <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                          <thead>
                            <tr className="border-b border-[#e4dbce] bg-[rgba(36,75,168,0.08)]">
                              {section.table.columns.map((column) => (
                                <th
                                  key={column}
                                  className="px-5 py-4 text-left text-[0.97rem] font-semibold text-foreground md:text-[1rem]"
                                >
                                  {column}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row) => (
                              <tr
                                key={row.join("-")}
                                className="border-b border-[#ece4d8] last:border-b-0"
                              >
                                {row.map((cell) => (
                                  <td
                                    key={cell}
                                    className="px-5 py-4 align-top text-[1rem] leading-7 text-[#07151b] first:whitespace-nowrap md:text-[1.04rem]"
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : null}
                </section>
                );
              })}

              {post.faqs?.length ? (
                <section
                  id="direct-answers"
                  className="mx-auto w-full max-w-[54rem] scroll-mt-28 border-t border-[#e4dbce] pt-10"
                >
                  <h2 className={articleSectionHeadingClassName}>
                    Direct answers
                  </h2>
                  <div className="mt-6 divide-y divide-[#e4dbce] border-y border-[#e4dbce] bg-white">
                    {post.faqs.map((item) => (
                      <details key={item.question} className="group py-5">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[1.08rem] font-semibold leading-7 text-foreground md:text-[1.14rem]">
                          <span>{item.question}</span>
                          <span className="mt-1 shrink-0 text-2xl leading-none text-[#8d7453] transition-transform duration-200 group-open:rotate-45">
                            +
                          </span>
                        </summary>
                        <p className="mt-4 max-w-5xl text-[1.02rem] leading-8 text-[#07151b]/84 md:text-[1.08rem]">
                          {item.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              ) : null}

              {credibility?.sources.length ? (
                <PrimarySources
                  sources={credibility.sources}
                  note="This guide was checked against the following official UAE sources. Rules, fees, eligibility, and authority procedures can change, so confirm the position that applies to your business before acting."
                  verificationLabel={`Published ${post.dateLabel}. Last updated ${credibility.updatedLabel}. This article provides general information and is not legal or tax advice.`}
                />
              ) : null}

              {relatedInsights.length ? (
                <section className="rounded-[2rem] border border-[#e7ded1] bg-[linear-gradient(180deg,#ffffff_0%,#f8f5ef_100%)] p-7 shadow-[0_12px_30px_rgba(17,35,42,0.04)] md:p-8">
                  <h2 className={articleSectionHeadingClassName}>
                    Related compliance guides
                  </h2>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {relatedInsights.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/insights/${item.slug}`}
                        className="group overflow-hidden rounded-[1.35rem] border border-[#e7ded1] bg-white shadow-[0_8px_20px_rgba(17,35,42,0.03)] transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        <div className="overflow-hidden border-b border-[#e7ded1] bg-[#f8f5ef]">
                          <Image
                            src={item.heroImageSrc}
                            alt={item.heroImageAlt}
                            width={720}
                            height={450}
                            className={`aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                              item.heroImageClassName ?? "object-center"
                            }`}
                          />
                        </div>
                        <div className="px-5 py-5">
                          <p className="text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-[#8d7453]">
                            {item.category}
                          </p>
                          <h3 className="mt-3 text-[1.1rem] font-semibold leading-tight tracking-[-0.03em] text-foreground">
                            {item.title}
                          </h3>
                          <p className="mt-3 text-[0.98rem] leading-7 text-foreground/84">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              ) : null}

              {post.closingParagraphs?.length ? (
                <section className="rounded-[2rem] border border-[#e7ded1] bg-[linear-gradient(180deg,#ffffff_0%,#f8f5ef_100%)] p-7 shadow-[0_12px_30px_rgba(17,35,42,0.04)] md:p-8">
                  <h2 className={articleSectionHeadingClassName}>
                    {post.closingTitle ?? "Final Thoughts"}
                  </h2>
                  <div className="mt-6 space-y-6">
                    {post.closingParagraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[1.14rem] leading-[2rem] text-[#07151b] md:text-[1.22rem] md:leading-[2.3rem]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {post.closingCta ? (
                    <p className="mt-7 rounded-[1.4rem] border border-[#dfd5c7] bg-white px-5 py-4 text-[1.04rem] leading-[1.95rem] text-foreground md:text-[1.08rem]">
                      {post.closingCta}
                    </p>
                  ) : null}
                </section>
              ) : null}
              </div>

              <aside className="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto border-l border-[#d9d1c5] pl-7 lg:block">
                {authorProfile ? (
                  <section className="border-b border-[#d9d1c5] pb-6">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#d8d0c2] bg-[#f5efe4]">
                        <Image
                          src={authorProfile.imageSrc}
                          alt={post.author}
                          fill
                          sizes="48px"
                          className="scale-[1.15] object-cover object-center"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#8d7453]">
                          Written by
                        </p>
                        <p className="mt-1 text-[0.94rem] font-semibold leading-5 text-foreground">
                          {post.author}
                        </p>
                        <p className="mt-0.5 text-[0.76rem] leading-5 text-foreground/62">
                          {authorProfile.credentials}
                        </p>
                      </div>
                    </div>
                  </section>
                ) : null}

                {guideLinks.length ? (
                  <nav aria-label="Article sections" className="border-b border-[#d9d1c5] py-6">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8d7453]">
                      In this guide
                    </p>
                    <ol className="mt-4 space-y-2.5">
                      {guideLinks.map((item, index) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            className="group flex items-start gap-2.5 text-[0.82rem] font-semibold leading-5 text-foreground/72 hover:text-[#244ba8]"
                          >
                            <span className="mt-px text-[0.66rem] tabular-nums text-[#8d7453]">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span>{item.label}</span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                ) : null}

                {credibility ? (
                  <section className="pt-6">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#1f7652]">
                      Officially sourced
                    </p>
                    <p className="mt-2 text-[0.82rem] leading-5 text-foreground/68">
                      Last reviewed {credibility.updatedLabel}
                    </p>
                    <CleanSectionLink
                      href="#primary-sources"
                      className="mt-3 inline-flex text-[0.82rem] font-semibold text-[#244ba8] hover:underline"
                    >
                      View primary sources
                    </CleanSectionLink>
                  </section>
                ) : null}
              </aside>
            </div>
          </div>
        </section>

        {relatedServices.length ? (
          <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-14 md:py-18">
            <div className="mx-auto w-full max-w-[100rem] px-7 md:px-14 xl:px-24">
              <div className="mx-auto max-w-[72rem]">
                <h2 className={articleSectionHeadingClassName}>
                  Related services
                </h2>
                <p className="mt-4 max-w-4xl text-[1.14rem] leading-[2rem] text-[#07151b]/82 md:text-[1.2rem] md:leading-[2.2rem]">
                  If this topic is relevant to your structure or next step, these are the service pages most closely connected to it.
                </p>
              </div>

              <div className="mx-auto mt-10 grid max-w-[72rem] gap-5 md:grid-cols-3">
                {relatedServices.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group overflow-hidden rounded-[1.75rem] border border-[#d8d0c2] bg-white text-[#11232a] shadow-[0_18px_50px_rgba(17,35,42,0.08)] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    {item.imageSrc ? (
                      <div className="overflow-hidden border-b border-[#d8d0c2] bg-[#f8f5ef]">
                        <Image
                          src={item.imageSrc}
                          alt={item.imageAlt ?? item.title}
                          width={720}
                          height={450}
                          className={`aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                            item.imageClassName ?? "object-center"
                          }`}
                        />
                      </div>
                    ) : null}
                    <div className="p-6">
                    <p className="text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-[#8d7453]">
                      Service
                    </p>
                    <h3 className="mt-4 text-[1.26rem] font-semibold leading-tight tracking-[-0.04em] text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[1.02rem] leading-7 text-foreground/88">
                      {item.description}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 text-[0.98rem] font-semibold text-[#244ba8]">
                      Open service
                      <span aria-hidden="true">→</span>
                    </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f8f6f1] py-14 md:py-16">
          <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
            <TalkToZenesisPanel
              wrapperClassName="rounded-[2rem] bg-[#11232a] p-8 text-white shadow-[0_22px_70px_rgba(17,35,42,0.18)] md:p-10"
              eyebrowClassName="eyebrow text-white/58"
              titleClassName="section-title mt-4 font-semibold text-white"
              textClassName="text-[1.22rem] font-medium leading-9 text-white/94"
              title="Discuss how this applies to your structure."
              paragraphs={[
                "If your business operates through multiple entities, free zones, or a cross-border structure, the useful next step is to review how the practical filing and setup choices line up with your compliance position.",
              ]}
              imageClassName="object-cover object-[74%_center]"
              actions={
                <div className="flex flex-col gap-4 sm:flex-row">
                <ConsultationFormButton
                  label="Schedule a Free Consultation"
                  className="rounded-full border border-[#e2c58f] bg-[linear-gradient(180deg,#f4e4be_0%,#e7cc97_100%)] px-6 py-3 text-center text-sm font-semibold !text-[#11232a] shadow-[0_16px_36px_rgba(231,204,151,0.24)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[linear-gradient(180deg,#f1dfb1_0%,#dfc186_100%)]"
                />
                <Link
                  href={categoryHubHref}
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-semibold !text-white backdrop-blur-md transition-colors hover:bg-white/[0.18]"
                >
                  {categoryHubLabel}
                </Link>
                </div>
              }
            />
          </div>
        </section>
      </article>
    </SiteShell>
  );
}
