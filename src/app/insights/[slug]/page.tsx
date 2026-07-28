import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConsultationFormButton } from "@/components/consultation-button";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import { TalkToZenesisPanel } from "@/components/talk-to-zenesis-panel";
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

  return (
    <SiteShell currentPath="/insights">
      {articleSchemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <article>
        <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 overflow-hidden bg-[#11232a] py-14 text-white md:py-18">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(36,75,168,0.24),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_44%)]" />
          <div className="relative mx-auto w-full max-w-[94rem] px-6 md:px-10 xl:px-18">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/12"
            >
              <span aria-hidden="true">←</span>
              Back to Insights
            </Link>

            <div className="mt-8 grid gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-start xl:gap-8">
              <header className="max-w-[66rem] self-start">
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
                  <span aria-hidden="true" className="text-white/34">
                    •
                  </span>
                  <span>By {post.author}</span>
                </div>
                <h1 className="mt-7 max-w-[18ch] text-[3.25rem] font-semibold leading-[1] tracking-[-0.06em] text-white sm:max-w-[19ch] sm:text-[4.2rem] md:max-w-[20ch] md:text-[5rem]">
                  {post.title}
                </h1>
                <p className="mt-7 max-w-4xl text-[1.16rem] font-medium leading-8 text-white/86 md:text-[1.28rem] md:leading-9">
                  {post.description}
                </p>
              </header>

              <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#f7f1e6] p-1.5 shadow-[0_18px_52px_rgba(17,35,42,0.18)] lg:h-[31rem] xl:h-[33rem]">
                <Image
                  src={post.heroImageSrc}
                  alt={post.heroImageAlt}
                  width={1600}
                  height={900}
                  className={`aspect-[16/8.2] w-full rounded-[1.95rem] object-cover lg:h-full lg:aspect-auto ${post.heroImageClassName ?? "object-center"}`}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-white py-14 md:py-18">
          <div className="mx-auto w-full max-w-[104rem] px-7 md:px-14 xl:px-24">
            <div className="mx-auto max-w-[62rem] space-y-16">
              {authorProfile ? (
                <section className="border-y border-[#e4dbce] py-7">
                  <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                    <div>
                      <p className="text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-[#8d7453]">
                        About the author
                      </p>
                      <h2 className="mt-3 text-[1.35rem] font-semibold text-foreground">
                        {post.author}, {authorProfile.credentials}
                      </h2>
                      <p className="mt-1 text-[1rem] font-semibold text-foreground/68">
                        {authorProfile.role}
                      </p>
                      <p className="mt-4 max-w-3xl text-[1.04rem] leading-8 text-[#07151b]/84">
                        {authorProfile.bio}
                      </p>
                    </div>
                    <a
                      href={authorProfile.profileHref}
                      className="text-[0.98rem] font-semibold text-[#244ba8] hover:underline"
                    >
                      View leadership profile
                    </a>
                  </div>
                </section>
              ) : null}

              {post.keyTakeaways?.length ? (
                <section className="rounded-[2rem] border border-[#e7ded1] bg-[linear-gradient(180deg,#ffffff_0%,#f8f5ef_100%)] p-7 shadow-[0_12px_30px_rgba(17,35,42,0.04)] md:p-8">
                  <h2 className="text-[2.05rem] font-semibold leading-[1.08] tracking-[-0.05em] text-foreground md:text-[2.2rem]">
                    Key takeaways
                  </h2>
                  <ul className="mt-6 space-y-3.5">
                    {post.keyTakeaways.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 rounded-[1.35rem] border border-[#e7ded1] bg-white px-5 py-4.5 text-[1.04rem] leading-[1.95rem] text-[#07151b] shadow-[0_8px_20px_rgba(17,35,42,0.03)] md:text-[1.08rem]"
                      >
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#8d7453]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {relatedServices.length ? (
                <section className="rounded-[2rem] border border-[#e7ded1] bg-[linear-gradient(180deg,#ffffff_0%,#f8f5ef_100%)] p-7 shadow-[0_12px_30px_rgba(17,35,42,0.04)] md:p-8">
                  <h2 className="text-[2.05rem] font-semibold leading-[1.08] tracking-[-0.05em] text-foreground md:text-[2.2rem]">
                    Useful next step
                  </h2>
                  <p className="mt-4 text-[1.1rem] leading-[2rem] text-[#07151b]/84 md:text-[1.16rem] md:leading-[2.1rem]">
                    If this article matches a real decision you are making, these are the service pages most closely connected to it.
                  </p>
                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {relatedServices.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group overflow-hidden rounded-[1.35rem] border border-[#e7ded1] bg-white shadow-[0_8px_20px_rgba(17,35,42,0.03)] transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        {item.imageSrc ? (
                          <div className="overflow-hidden border-b border-[#e7ded1] bg-[#f8f5ef]">
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
                        <div className="px-5 py-5">
                          <p className="text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-[#8d7453]">
                            Service
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

              {post.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-[2.15rem] font-semibold leading-[1.08] tracking-[-0.05em] text-foreground md:text-[2.35rem]">
                    {section.title}
                  </h2>

                  {section.paragraphs?.length ? (
                    <div className="mt-6 space-y-6">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-[1.14rem] leading-[2rem] text-[#07151b] md:text-[1.22rem] md:leading-[2.3rem]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : null}

                  {section.bullets?.length ? (
                    <ul className="mt-7 space-y-3.5">
                      {section.bullets.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 rounded-[1.35rem] border border-[#e7ded1] bg-[linear-gradient(180deg,#ffffff_0%,#faf7f2_100%)] px-5 py-4.5 text-[1.04rem] leading-[1.95rem] text-[#07151b] shadow-[0_8px_20px_rgba(17,35,42,0.03)] md:text-[1.08rem]"
                        >
                          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#8d7453]" />
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
                                    className="px-5 py-4 align-top text-[1rem] leading-7 text-[#07151b] md:text-[1.04rem]"
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
              ))}

              {post.faqs?.length ? (
                <section className="rounded-[2rem] border border-[#e7ded1] bg-[linear-gradient(180deg,#ffffff_0%,#f8f5ef_100%)] p-7 shadow-[0_12px_30px_rgba(17,35,42,0.04)] md:p-8">
                  <h2 className="text-[2.15rem] font-semibold leading-[1.08] tracking-[-0.05em] text-foreground md:text-[2.35rem]">
                    Direct answers
                  </h2>
                  <div className="mt-6 divide-y divide-[#e4dbce] overflow-hidden rounded-[1.45rem] border border-[#e4dbce] bg-white">
                    {post.faqs.map((item) => (
                      <details key={item.question} className="group px-5 py-4 open:bg-[#fcfbf8]">
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
                <section className="border-t border-[#e4dbce] pt-9">
                  <h2 className="text-[2.15rem] font-semibold leading-[1.08] tracking-[-0.05em] text-foreground md:text-[2.35rem]">
                    Primary sources
                  </h2>
                  <p className="mt-4 max-w-4xl text-[1.04rem] leading-8 text-[#07151b]/78">
                    This guide was checked against the following official UAE sources. Rules, fees, eligibility, and authority procedures can change, so confirm the position that applies to your business before acting.
                  </p>
                  <ul className="mt-6 divide-y divide-[#e4dbce] border-y border-[#e4dbce]">
                    {credibility.sources.map((source) => (
                      <li key={source.href} className="py-4">
                        <a
                          href={source.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-start justify-between gap-5"
                        >
                          <span>
                            <span className="block text-[1.05rem] font-semibold leading-7 text-foreground group-hover:text-[#244ba8]">
                              {source.title}
                            </span>
                            <span className="mt-1 block text-[0.94rem] leading-6 text-foreground/66">
                              {source.publisher}
                            </span>
                          </span>
                          <span aria-hidden="true" className="mt-1 shrink-0 text-[#8d7453]">
                            ↗
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-[0.94rem] leading-7 text-[#07151b]/66">
                    Published {post.dateLabel}. Last updated {credibility.updatedLabel}. This article provides general information and is not legal or tax advice.
                  </p>
                </section>
              ) : null}

              {relatedInsights.length ? (
                <section className="rounded-[2rem] border border-[#e7ded1] bg-[linear-gradient(180deg,#ffffff_0%,#f8f5ef_100%)] p-7 shadow-[0_12px_30px_rgba(17,35,42,0.04)] md:p-8">
                  <h2 className="text-[2.15rem] font-semibold leading-[1.08] tracking-[-0.05em] text-foreground md:text-[2.35rem]">
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
                  <h2 className="text-[2.15rem] font-semibold leading-[1.08] tracking-[-0.05em] text-foreground md:text-[2.35rem]">
                    Final Thoughts
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
          </div>
        </section>

        {relatedServices.length ? (
          <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-14 md:py-18">
            <div className="mx-auto w-full max-w-[100rem] px-7 md:px-14 xl:px-24">
              <div className="mx-auto max-w-[72rem]">
                <h2 className="text-[2.15rem] font-semibold leading-[1.08] tracking-[-0.05em] text-foreground md:text-[2.35rem]">
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

        <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-14 md:py-16">
          <div className="mx-auto w-full max-w-[88rem] px-6 md:px-10 xl:px-16">
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
