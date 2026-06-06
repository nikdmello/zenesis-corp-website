import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { getInsightPost, insightPosts } from "@/lib/insights";
import { legacyInsightMetaBySlug } from "@/lib/legacy-meta";

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

  return {
    title: legacyMeta ? legacyMeta.title : `${post.title} | Zenesis Corporation`,
    description: legacyMeta ? legacyMeta.description : post.description,
  };
}

export default async function InsightArticlePage({
  params,
}: InsightArticlePageProps) {
  const { slug } = await params;
  const post = getInsightPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <SiteShell currentPath="/insights">
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
                  className="aspect-[16/8.2] w-full rounded-[1.95rem] object-cover lg:h-full lg:aspect-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-white py-14 md:py-18">
          <div className="mx-auto w-full max-w-[104rem] px-7 md:px-14 xl:px-24">
            <div className="mx-auto max-w-[62rem] space-y-16">
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

        <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-14 text-white md:py-16">
          <div className="mx-auto w-full max-w-[88rem] px-6 md:px-10 xl:px-16">
            <div className="rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-7 shadow-[0_28px_90px_rgba(17,35,42,0.18)] md:p-8">
              <h2 className="max-w-[18ch] text-[2.2rem] font-semibold tracking-[-0.05em] text-white">
                Discuss how this applies to your structure.
              </h2>
              <p className="mt-5 max-w-4xl text-[1.16rem] leading-9 text-white/94 md:text-[1.22rem]">
                If your business operates through multiple entities, free zones, or
                a cross-border structure, the useful next step is to review how the
                practical filing and setup choices line up with your compliance
                position.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#25D366] px-6 py-3 text-center text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
                >
                  Contact Zenesis
                </Link>
                <Link
                  href="/accounting-tax"
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-semibold !text-white backdrop-blur-md transition-colors hover:bg-white/[0.18]"
                >
                  View Accounting & Tax
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </SiteShell>
  );
}
