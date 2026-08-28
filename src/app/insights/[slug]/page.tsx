import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConsultationFormButton } from "@/components/consultation-button";
import { CleanSectionLink } from "@/components/clean-section-link";
import { createContextualLinker } from "@/components/contextual-links";
import { PageRailLayout } from "@/components/page-guide-layout";
import { JsonLd } from "@/components/json-ld";
import { PrimarySources } from "@/components/primary-sources";
import { ReadingProgress } from "@/components/reading-progress";
import { SiteShell } from "@/components/site-shell";
import { SourceCitationLink } from "@/components/source-citation-link";
import { articleSectionHeadingClassName } from "@/lib/article-styles";
import {
  getInsightCredibility,
  getInsightPost,
  insightAuthorProfiles,
  insightPosts,
} from "@/lib/insights";
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

const relatedGuideStopWords = new Set([
  "and", "are", "complete", "for", "from", "guide", "how", "in", "of",
  "the", "to", "uae", "what", "your",
]);

function getRelatedGuideTokens(value: string) {
  return new Set(
    value
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((token) => token.length > 2 && !relatedGuideStopWords.has(token)),
  );
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

  const linkContext = createContextualLinker(`/insights/${post.slug}`, 6);

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
  const explicitlyRelatedInsights = post.relatedInsightSlugs
    ?.map((relatedSlug) => insightPosts.find((item) => item.slug === relatedSlug))
    .filter((item): item is (typeof insightPosts)[number] => Boolean(item)) ?? [];
  const explicitSlugs = new Set(explicitlyRelatedInsights.map((item) => item.slug));
  const postTokens = getRelatedGuideTokens(`${post.title} ${post.description}`);
  const rankedRelatedInsights = insightPosts
    .filter((item) => item.slug !== post.slug && !explicitSlugs.has(item.slug))
    .map((item, index) => {
      const itemTokens = getRelatedGuideTokens(`${item.title} ${item.description}`);
      const sharedTokenCount = [...itemTokens].filter((token) => postTokens.has(token)).length;

      return {
        item,
        index,
        score: sharedTokenCount * 2 + (item.category === post.category ? 5 : 0),
      };
    })
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map(({ item }) => item);
  const relatedInsights = [
    ...explicitlyRelatedInsights,
    ...rankedRelatedInsights,
  ].slice(0, 2);
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

  const articleRail = (
    <aside className="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto py-8 lg:block">
      {authorProfile ? (
        <section className="border-b border-[#d9d1c5] pb-6">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#d8d0c2] bg-[#f5efe4]">
              <Image src={authorProfile.imageSrc} alt={post.author} fill sizes="48px" className="scale-[1.15] object-cover object-center" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-[#8d7453]">Written by</p>
              <p className="mt-1 text-[0.94rem] font-semibold leading-5 text-foreground">{post.author}</p>
              <p className="mt-0.5 text-[0.76rem] leading-5 text-foreground/62">{authorProfile.credentials}</p>
            </div>
          </div>
        </section>
      ) : null}

      {guideLinks.length ? (
        <nav aria-label="Article sections" className="border-b border-[#d9d1c5] py-6">
          <p className="text-sm font-semibold text-[#8d7453]">In this guide</p>
          <ol className="mt-4 space-y-2.5">
            {guideLinks.map((item, index) => (
              <li key={item.href}>
                <CleanSectionLink href={item.href as `#${string}`} className="group flex items-start gap-2.5 text-[0.82rem] font-semibold leading-5 text-foreground/72 hover:text-[#244ba8]">
                  <span className="mt-px text-[0.66rem] tabular-nums text-[#8d7453]">{String(index + 1).padStart(2, "0")}</span>
                  <span>{item.label}</span>
                </CleanSectionLink>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}

      {credibility ? (
        <section className="pt-6">
          <p className="text-[0.82rem] leading-5 text-foreground/68">Sources reviewed {credibility.updatedLabel}</p>
        </section>
      ) : null}
    </aside>
  );

  return (
    <SiteShell currentPath="/insights">
      <ReadingProgress />
      {articleSchemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <article>
        <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 overflow-hidden bg-[#011735] py-7 text-white md:py-8">
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
              className="inline-flex items-center gap-2 border border-white/18 bg-white/8 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#ead5aa]/60 hover:bg-white/12"
            >
              <span aria-hidden="true">←</span>
              Back to Insights
            </Link>

            <div className="mt-4 lg:min-h-[16rem] xl:min-h-[17rem]">
              <header className="relative z-10 max-w-[58rem]">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.98rem] text-white/72">
                  <span className="text-sm font-semibold text-[#d8c3a2]">
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
                    "w-full text-[2.25rem] leading-[1.08] sm:text-[2.75rem] md:text-[3.15rem] xl:text-[3.5rem]"
                  }`}
                >
                  {post.displayTitle ?? post.title}
                </h1>
                <p className="mt-6 max-w-4xl text-[1.06rem] font-medium leading-[1.9rem] text-white/86 md:text-[1.16rem] md:leading-8">
                  {post.description}
                </p>
              </header>
            </div>
          </div>
        </section>
        <PageRailLayout rail={articleRail}>

        <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-white py-11 md:py-14">
          <div className="mx-auto w-full max-w-[104rem] px-7 md:px-14 xl:px-24">
            <div className="max-w-[78rem]">
              <div className="min-w-0 space-y-12">
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
                        <p className="text-sm font-medium text-[#8d7453]">
                          Written by
                        </p>
                        <h2 className="mt-1 text-[1rem] font-semibold leading-tight text-foreground md:text-[1.04rem]">
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
                        <span className="block text-sm font-semibold text-[#8d7453]">
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
                      <p className="text-sm font-semibold text-[#8d7453]">
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
                <section className="w-full max-w-[54rem] border-l-4 border-[#8d7453] bg-[#f8f6f1] px-6 py-7 md:px-8">
                  <h2 className={articleSectionHeadingClassName}>
                    Key takeaways
                  </h2>
                  <ul className="mt-5 divide-y divide-[#ddd4c7] border-y border-[#ddd4c7]">
                    {post.keyTakeaways.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 py-4 text-[1.02rem] leading-8 text-[#07151b] md:text-[1.04rem]"
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
                      ? "w-full max-w-[58rem] border-y-2 border-[#244ba8] bg-[#f3f7ff] px-6 py-8 md:px-8"
                      : `w-full border-t border-[#e4dbce] pt-10 ${
                          section.table ? "max-w-[62rem]" : "max-w-[54rem]"
                        }`
                  }`}
                >
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
                        const inlineLinks =
                          typeof paragraph === "string" ? undefined : paragraph.inlineLinks;

                        return (
                          <p
                            key={text}
                            className={`text-[1.04rem] text-[#07151b]/92 md:text-[1.08rem] ${
                              isIntroSection
                                ? "leading-[2.1rem] md:leading-[2.25rem]"
                                : "leading-[1.9rem] md:leading-[1.95rem]"
                            }`}
                          >
                            {linkContext(text, inlineLinks)}
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
                        className={`text-sm font-semibold ${
                          insightCalloutStyles[section.callout.type].labelClassName
                        }`}
                      >
                        {insightCalloutStyles[section.callout.type].label}
                      </p>
                      <h3 className="mt-2 text-[1.04rem] font-semibold leading-7 text-foreground">
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
                          className="flex gap-3 py-4 text-[1.02rem] leading-8 text-[#07151b]/92 md:text-[1.04rem]"
                        >
                          <span className="mt-[0.7rem] h-2 w-2 shrink-0 rounded-full bg-[#8d7453]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.numberedBullets?.length ? (
                    <ol className="mt-7 max-w-[52rem] list-decimal divide-y divide-[#e4dbce] border-y border-[#e4dbce] pl-10 marker:font-semibold marker:text-[#8d7453]">
                      {section.numberedBullets.map((item) => (
                        <li
                          key={item}
                          className="py-4 pl-2 text-[1.02rem] leading-8 text-[#07151b]/92 md:text-[1.04rem]"
                        >
                          {item}
                        </li>
                      ))}
                    </ol>
                  ) : null}

                  {section.table ? (
                    <div className="mt-6 overflow-hidden border border-[#d8d0c2] bg-[#fcfbf8]">
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
                  className="w-full max-w-[54rem] scroll-mt-28 border-t border-[#e4dbce] pt-10"
                >
                  <h2 className={articleSectionHeadingClassName}>
                    Direct answers
                  </h2>
                  <div className="mt-6 divide-y divide-[#e4dbce] border-y border-[#e4dbce] bg-white">
                    {post.faqs.map((item) => (
                      <details key={item.question} className="group py-5">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[1.04rem] font-semibold leading-7 text-foreground md:text-[1.08rem]">
                          <span>{item.question}</span>
                          <span className="mt-1 shrink-0 text-2xl leading-none text-[#8d7453] transition-transform duration-200 group-open:rotate-45">
                            +
                          </span>
                        </summary>
                        <p className="mt-4 max-w-5xl text-[1.02rem] leading-8 text-[#07151b]/84 md:text-[1.04rem]">
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

              <section className="border-y border-[#d8d0c2] py-6">
                  <h2 className="text-[1.35rem] font-semibold tracking-[-0.03em] text-foreground">
                    Related guides
                  </h2>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {relatedInsights.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/insights/${item.slug}`}
                        className="group flex min-h-28 overflow-hidden border border-[#d8d0c2] bg-white transition-colors duration-200 hover:border-[#b79248] hover:bg-[#fcfaf6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244ba8]"
                      >
                        <div className="w-28 shrink-0 overflow-hidden border-r border-[#e7ded1] bg-[#f8f5ef] sm:w-32">
                          <Image
                            src={item.heroImageSrc}
                            alt=""
                            width={256}
                            height={192}
                            className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                              item.heroImageClassName ?? "object-center"
                            }`}
                          />
                        </div>
                        <div className="self-center px-4 py-3">
                          <p className="text-sm font-semibold text-[#8d7453]">
                            {item.category}
                          </p>
                          <h3 className="mt-2 text-[1rem] font-semibold leading-snug tracking-[-0.02em] text-foreground group-hover:text-[#244ba8]">
                            {item.title}
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>

              {post.closingParagraphs?.length ? (
                <section className="border border-[#d8d0c2] bg-[linear-gradient(180deg,#ffffff_0%,#f8f5ef_100%)] p-7 md:p-8">
                  <h2 className={articleSectionHeadingClassName}>
                    {post.closingTitle ?? "Final Thoughts"}
                  </h2>
                  <div className="mt-6 space-y-6">
                    {post.closingParagraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[1.08rem] leading-[1.9rem] text-[#07151b] md:text-[1.22rem] md:leading-[2.3rem]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {post.closingCta ? (
                    <div className="mt-7 border-t border-[#dfd5c7] pt-6">
                      <p className="max-w-[48rem] text-[1.04rem] font-medium leading-[1.95rem] text-foreground md:text-[1.04rem]">
                        {post.closingCta}
                      </p>
                      <ConsultationFormButton
                        label="Book a consultation"
                        className="mt-5 inline-flex border border-[#c6a15f] bg-[linear-gradient(135deg,#fff9ec_0%,#edd9b2_52%,#d9b97e_100%)] px-6 py-3 text-sm font-semibold tracking-[0.015em] !text-[#011735] transition-all hover:-translate-y-0.5 hover:border-[#9f7b3f] hover:brightness-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b79056] focus-visible:ring-offset-2"
                        presetEnquiry={post.closingCta}
                      />
                    </div>
                  ) : null}
                </section>
              ) : null}
              </div>

            </div>
          </div>
        </section>

        </PageRailLayout>

      </article>
    </SiteShell>
  );
}
