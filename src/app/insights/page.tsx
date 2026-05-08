import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
import { featuredProfile } from "@/lib/site-content";
import { insightPosts } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights | Zenesis Corporation",
  description:
    "Zenesis insights on UAE business setup, corporate tax, free zone structures, and compliance topics.",
};

export default function InsightsPage() {
  const featuredPost = insightPosts[0];
  const remainingPosts = insightPosts.slice(1);

  return (
    <SiteShell currentPath="/insights">
      <PageIntro
        eyebrow="Insights"
        title="Guidance on setup, tax, and compliance in the UAE."
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Published Articles"
            title="Current articles on tax and compliance."
            description="Read Zenesis guidance on corporate tax groups, financial-year compliance, and free zone tax treatment in the UAE."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <Link
              href={`/insights/${featuredPost.slug}`}
              className="premium-card glass-panel group grid gap-6 rounded-[2rem] p-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[#11232a]">
                <Image
                  src={featuredPost.heroImageSrc}
                  alt={featuredPost.heroImageAlt}
                  width={1080}
                  height={700}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(17,35,42,0.34)_100%)]" />
              </div>

              <div className="flex flex-col justify-center p-2 md:p-4">
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                  <p className="eyebrow text-accent">Latest Article</p>
                  <span>{featuredPost.dateLabel}</span>
                </div>
                <h2 className="mt-4 text-[clamp(2rem,3vw,3rem)] font-semibold leading-[1] tracking-[-0.04em] text-foreground">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 text-sm font-medium text-muted">
                  {featuredPost.author}
                </p>
                <p className="mt-5 max-w-3xl text-[1.14rem] leading-8 text-muted">
                  {featuredPost.description}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors group-hover:text-accent-strong">
                  Read article
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>

            <article className="glass-panel rounded-[2rem] p-7 md:p-8">
              <p className="eyebrow text-accent">What You Will Find</p>
              <h2 className="section-title mt-4 font-semibold text-foreground">
                Topics businesses usually need explained clearly.
              </h2>
              <div className="mt-6 space-y-4 text-[1.14rem] leading-8 text-muted">
                <p>
                  The articles focus on the questions that affect how businesses
                  structure operations, plan filings, and stay compliant in the
                  UAE.
                </p>
                <p>
                  That includes corporate tax grouping, financial-year timing,
                  free zone treatment, and other operating decisions where the
                  implications need to be understood before action is taken.
                </p>
              </div>
              <div className="mt-8 grid gap-3">
                <div className="rounded-[1.2rem] border border-foreground/10 bg-white/75 px-4 py-4">
                  <p className="eyebrow text-muted">Latest topic</p>
                  <p className="mt-2 text-base font-semibold text-foreground">
                    {featuredPost.category}
                  </p>
                </div>
                <div className="rounded-[1.2rem] border border-foreground/10 bg-white/75 px-4 py-4">
                  <p className="eyebrow text-muted">Current reading</p>
                  <p className="mt-2 text-base font-semibold text-foreground">
                    3 published articles
                  </p>
                </div>
                <div className="rounded-[1.2rem] border border-foreground/10 bg-white/75 px-4 py-4">
                  <p className="eyebrow text-muted">Covered areas</p>
                  <p className="mt-2 text-base font-semibold text-foreground">
                    Tax groups, financial year, free zones
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-16">
            <SectionHeading
              eyebrow="Article Archive"
              title="More articles from Zenesis."
              description="Browse the latest written guidance on compliance timing, tax treatment, and operating decisions in the UAE."
            />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {remainingPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="premium-card glass-panel group flex min-h-full flex-col rounded-[1.75rem] p-4 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden rounded-[1.35rem] bg-[#11232a]">
                  <Image
                    src={post.heroImageSrc}
                    alt={post.heroImageAlt}
                    width={640}
                    height={420}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(17,35,42,0.46)_100%)]" />
                </div>

                <div className="flex flex-1 flex-col p-3 pt-6">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                    <p className="eyebrow text-accent">{post.category}</p>
                    <span>{post.dateLabel}</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.03em] text-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-sm font-medium text-muted">
                    {post.author}
                  </p>
                  <p className="mt-4 flex-1 text-[1.12rem] leading-8 text-muted">
                    {post.description}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors group-hover:text-accent-strong">
                    Read article
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20 [&_.text-muted]:text-white/94">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Featured Profile"
            title="Cecilia D'Cunha in Global Leaders Today."
            description="An external profile on the founder's background in offshore incorporation, UAE business setup, and corporate compliance."
            titleClassName="!text-white"
          />

          <a
            href={featuredProfile.href}
            target="_blank"
            rel="noreferrer"
            className="group mt-10 block transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="rounded-[1.75rem] border border-[#d8d0c2] bg-[#efe6d6] p-4 shadow-[0_22px_70px_rgba(17,35,42,0.12)]">
              <div className="overflow-hidden rounded-[1.35rem] border border-[#ddd1c2] bg-white shadow-[0_12px_28px_rgba(17,35,42,0.12)]">
                <Image
                  src={featuredProfile.imageSrc}
                  alt={featuredProfile.imageAlt}
                  width={2300}
                  height={1800}
                  className="aspect-[23/18] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </div>
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
