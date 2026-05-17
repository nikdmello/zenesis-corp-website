import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { getInsightPost, insightPosts } from "@/lib/insights";

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

  return {
    title: `${post.title} | Zenesis Corporation`,
    description: post.description,
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
      <article className="mx-auto w-full max-w-[62rem]">
        <div className="mt-4">
          <Link
            href="/insights"
            className="text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
          >
            ← Back to Insights
          </Link>
        </div>

        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.96rem] text-muted">
            <p className="eyebrow text-accent">{post.category}</p>
            <span>{post.dateLabel}</span>
            <span>{post.author}</span>
          </div>
          <h1 className="mt-6 max-w-[15ch] text-[3.45rem] font-semibold leading-[0.96] tracking-[-0.05em] text-foreground sm:text-[4.35rem]">
            {post.title}
          </h1>
          <p className="mt-6 max-w-4xl text-[1.18rem] font-medium leading-8 text-foreground/82 md:text-[1.32rem] md:leading-9">
            {post.description}
          </p>
        </header>

        <div className="relative mt-10 overflow-hidden rounded-[2.1rem] border border-[#ddd3c6] bg-[#f7f1e6] p-3 shadow-[0_16px_48px_rgba(17,35,42,0.08)]">
          <Image
            src={post.heroImageSrc}
            alt={post.heroImageAlt}
            width={1600}
            height={900}
            className="aspect-[16/8.5] w-full rounded-[1.55rem] object-cover"
            priority
          />
        </div>

        <div className="mt-12 max-w-3xl space-y-12">
          {post.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-[2.15rem] font-semibold tracking-[-0.05em] text-foreground">
                {section.title}
              </h2>

              {section.paragraphs?.length ? (
                <div className="mt-5 space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[1.16rem] leading-9 text-muted md:text-[1.22rem]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : null}

              {section.bullets?.length ? (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-[1.25rem] border border-foreground/10 bg-[#f7f5f0] px-5 py-4 text-base leading-7 text-foreground"
                    >
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.table ? (
                <div className="mt-6 overflow-hidden rounded-[1.6rem] border border-foreground/10 bg-[#f7f5f0]">
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="border-b border-foreground/10 bg-[rgba(36,75,168,0.08)]">
                          {section.table.columns.map((column) => (
                            <th
                              key={column}
                              className="px-5 py-4 text-left text-sm font-semibold text-foreground"
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
                            className="border-b border-foreground/10 last:border-b-0"
                          >
                            {row.map((cell) => (
                              <td
                                key={cell}
                                className="px-5 py-4 align-top text-[0.96rem] leading-6 text-muted"
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
        </div>

        {post.closingParagraphs?.length ? (
          <section className="mt-14 max-w-3xl rounded-[2rem] border border-foreground/10 bg-[#f7f5f0] p-7 shadow-[0_16px_40px_rgba(17,35,42,0.06)] md:p-8">
            <h2 className="text-[2.15rem] font-semibold tracking-[-0.05em] text-foreground">
              Final Thoughts
            </h2>
            <div className="mt-5 space-y-5">
              {post.closingParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-[1.16rem] leading-9 text-muted md:text-[1.22rem]">
                  {paragraph}
                </p>
              ))}
            </div>

            {post.closingCta ? (
              <p className="mt-6 rounded-[1.4rem] border border-foreground/10 bg-white/75 px-5 py-4 text-base leading-7 text-foreground">
                {post.closingCta}
              </p>
            ) : null}
          </section>
        ) : null}

        <section className="mt-14 rounded-[2rem] bg-[#11232a] p-7 text-white shadow-[0_28px_90px_rgba(17,35,42,0.18)] md:p-8">
          <p className="eyebrow text-white/58">Next Step</p>
          <h2 className="mt-4 text-[2.2rem] font-semibold tracking-[-0.05em] text-white">
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
        </section>
      </article>
    </SiteShell>
  );
}
