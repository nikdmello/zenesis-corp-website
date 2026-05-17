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
        title="Insights"
        description="Published guidance from Zenesis on UAE tax, compliance, and operating decisions."
        backgroundImageSrc="/insights-bg.png"
        backgroundImageAlt="Zenesis Insights page background"
        backgroundImagePosition="!object-[100%_100%]"
        backgroundImageMode="ambient"
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Zenesis Blog"
            title="Latest from Zenesis"
            description="Useful reading on corporate tax, free zone rules, and compliance timing in the UAE."
            eyebrowClassName="!text-white/62"
            titleClassName="!text-white"
            descriptionClassName="!text-white/92"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <Link
              href={`/insights/${featuredPost.slug}`}
              className="group grid overflow-hidden rounded-[2rem] border border-[#ddd3c6] bg-[#f7f1e6] shadow-[0_22px_70px_rgba(17,35,42,0.08)] transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[0.92fr_1.08fr]"
            >
              <div className="relative min-h-[18rem] overflow-hidden bg-[#11232a] md:min-h-full">
                <Image
                  src={featuredPost.heroImageSrc}
                  alt={featuredPost.heroImageAlt}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,35,42,0.08)_0%,rgba(17,35,42,0.36)_100%)]" />
              </div>

              <div className="flex flex-col justify-center px-6 py-7 md:px-8 md:py-8">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.95rem] text-foreground/68">
                  <p className="eyebrow text-[#244ba8]">Featured article</p>
                  <span>{featuredPost.category}</span>
                  <span>{featuredPost.dateLabel}</span>
                </div>
                <h2 className="mt-5 max-w-[14ch] text-[2.4rem] font-semibold leading-[0.96] tracking-[-0.05em] text-foreground md:text-[2.9rem]">
                  {featuredPost.title}
                </h2>
                <p className="mt-5 text-[1.1rem] font-medium leading-8 text-foreground/82 md:text-[1.16rem]">
                  {featuredPost.description}
                </p>
                <p className="mt-4 text-[0.96rem] font-semibold text-foreground/62">
                  By {featuredPost.author}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#244ba8] transition-colors group-hover:text-[#1b3c86]">
                  Read article
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>

            <aside className="rounded-[2rem] border border-foreground/10 bg-[#f7f5f0] p-7 shadow-[0_18px_50px_rgba(17,35,42,0.06)] md:p-8">
              <p className="eyebrow text-[#244ba8]">What you will find</p>
              <h2 className="mt-4 text-[2rem] font-semibold leading-[0.98] tracking-[-0.04em] text-foreground">
                Practical blog posts
              </h2>
              <p className="mt-5 text-[1.08rem] leading-8 text-foreground/76">
                These articles are written for founders and operators who need
                the implications explained clearly before they make a filing,
                structuring, or setup decision.
              </p>
              <div className="mt-8 space-y-3.5">
                {[
                  "Corporate tax structure and group treatment",
                  "Financial-year timing and compliance planning",
                  "Free zone rules and operating decisions",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-[1.2rem] border border-foreground/10 bg-white/82 px-4 py-4"
                  >
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#244ba8]" />
                    <span className="text-[1rem] font-medium leading-7 text-foreground/86">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[1.2rem] border border-foreground/10 bg-white/82 px-4 py-4">
                  <p className="eyebrow text-muted">Published now</p>
                  <p className="mt-2 text-[1.08rem] font-semibold text-foreground">
                    {insightPosts.length} articles live
                  </p>
                </div>
                <div className="rounded-[1.2rem] border border-foreground/10 bg-white/82 px-4 py-4">
                  <p className="eyebrow text-muted">Primary author</p>
                  <p className="mt-2 text-[1.08rem] font-semibold text-foreground">
                    {featuredPost.author}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Archive"
            title="More articles"
            description="Browse the latest written guidance on compliance timing, tax treatment, and operating decisions in the UAE."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {remainingPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group overflow-hidden rounded-[1.8rem] border border-[#ddd3c6] bg-white shadow-[0_18px_54px_rgba(17,35,42,0.08)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden bg-[#11232a]">
                  <Image
                    src={post.heroImageSrc}
                    alt={post.heroImageAlt}
                    width={960}
                    height={620}
                    className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="px-5 py-6 md:px-6 md:py-7">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.94rem] text-foreground/66">
                    <p className="eyebrow text-[#244ba8]">Blog post</p>
                    <span>{post.category}</span>
                    <span>{post.dateLabel}</span>
                  </div>
                  <h2 className="mt-4 text-[2rem] font-semibold leading-[1] tracking-[-0.04em] text-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-[1.08rem] leading-8 text-foreground/76">
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
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Leadership"
            title="Featured profile"
            description="A full-length profile on Cecilia D'Cunha covering her early offshore incorporation work, her move into the UAE in 1998, and the leadership path that led to Zenesis."
            eyebrowClassName="!text-white/62"
            titleClassName="!text-white"
            descriptionClassName="!text-white/92"
          />

          <Link
            href={featuredProfile.href}
            className="group mt-10 block transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="rounded-[1.8rem] border border-[#ddd3c6] bg-[#f7f1e6] p-4 shadow-[0_20px_60px_rgba(17,35,42,0.08)]">
              <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr] md:items-center">
                <div className="overflow-hidden rounded-[1.4rem] border border-[#ddd1c2] bg-white shadow-[0_12px_28px_rgba(17,35,42,0.10)]">
                  <Image
                    src={featuredProfile.imageSrc}
                    alt={featuredProfile.imageAlt}
                    width={2300}
                    height={1800}
                    className="aspect-[23/18] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>
                <div className="px-2 py-2 md:px-4">
                  <p className="eyebrow text-[#244ba8]">Global Leaders Today</p>
                  <h2 className="mt-4 text-[2.2rem] font-semibold leading-[0.98] tracking-[-0.05em] text-foreground md:text-[2.7rem]">
                    Cecilia D&apos;Cunha
                  </h2>
                  <p className="mt-5 text-[1.1rem] leading-8 text-foreground/76">
                    Read the full leadership profile covering Cecilia&apos;s
                    early offshore incorporation work, her move into the UAE in
                    1998, and the experience that shaped Zenesis.
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#244ba8] transition-colors group-hover:text-[#1b3c86]">
                    Read profile
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
