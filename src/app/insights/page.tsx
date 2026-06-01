import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
import { TalkToZenesisPanel } from "@/components/talk-to-zenesis-panel";
import { featuredProfile } from "@/lib/site-content";
import { insightPosts } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights | Zenesis Corporation",
  description:
    "Zenesis insights across accounting and tax, business setup, and visa and banking topics in the UAE.",
};

const categorySummaries = [
  {
    title: "Accounting and Tax",
    text: "Guidance on corporate tax, VAT, financial-year timing, filing structure, and compliance planning.",
  },
  {
    title: "Business Setup",
    text: "Practical reading on mainland, free zone, and founder decisions before and after incorporation.",
  },
  {
    title: "Visa and Banking",
    text: "Articles on residency routes, company visas, Golden Visa planning, and business banking considerations.",
  },
] as const;

export default function InsightsPage() {
  const [featuredPost, ...remainingPosts] = insightPosts;

  return (
    <SiteShell currentPath="/insights">
      <PageIntro
        eyebrow="Insights"
        title="Insights"
        backgroundImageSrc="/insights-bg.webp"
        backgroundImageAlt="Zenesis Insights page background"
        backgroundImagePosition="!object-[100%_100%]"
        backgroundImageMode="ambient"
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 overflow-hidden bg-[#11232a] py-16 text-white md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(36,75,168,0.24),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_42%)]" />
        <div className="relative mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Blog"
            title="Latest from Zenesis"
            description="Useful reading across accounting and tax, business setup, and visa and banking in the UAE."
            eyebrowClassName="!text-white/58"
            titleClassName="!text-white"
            descriptionClassName="!text-white/88"
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.98rem] text-white/72">
                <span className="text-white">Featured article</span>
                <span aria-hidden="true" className="text-white/34">
                  •
                </span>
                <span>{featuredPost.category}</span>
                <span aria-hidden="true" className="text-white/34">
                  •
                </span>
                <span>{featuredPost.dateLabel}</span>
              </div>
              <h2 className="mt-7 max-w-[12ch] text-[3.2rem] font-semibold leading-[0.92] tracking-[-0.06em] text-white md:text-[4.4rem]">
                {featuredPost.title}
              </h2>
              <p className="mt-6 max-w-3xl text-[1.14rem] leading-8 text-white/84 md:text-[1.24rem] md:leading-9">
                {featuredPost.description}
              </p>
              <p className="mt-5 text-[0.98rem] font-semibold text-white/62">
                By {featuredPost.author}
              </p>
              <Link
                href={`/insights/${featuredPost.slug}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold !text-black transition-transform duration-200 hover:-translate-y-0.5"
              >
                Read featured article
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <Link
              href={`/insights/${featuredPost.slug}`}
              className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 shadow-[0_28px_90px_rgba(7,21,27,0.28)]"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={featuredPost.heroImageSrc}
                  alt={featuredPost.heroImageAlt}
                  width={1400}
                  height={920}
                  className="aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_38%,rgba(17,35,42,0.48)_100%)]" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-white py-14 md:py-16">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <div className="grid gap-6 lg:grid-cols-3">
            {categorySummaries.map((item) => (
              <div
                key={item.title}
                className="border-t border-[#d8cec0] pt-5"
              >
                <p className="eyebrow text-[#244ba8]">Category</p>
                <h2 className="mt-4 text-[2rem] font-semibold leading-[0.98] tracking-[-0.05em] text-foreground">
                  {item.title}
                </h2>
                <p className="mt-4 max-w-[28rem] text-[1.06rem] leading-8 text-foreground/76">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Archive"
            title="More articles"
            description="Browse written guidance across accounting and tax, business setup, and visa and banking topics in the UAE."
          />

          <div className="mt-10 space-y-5">
            {remainingPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group grid gap-6 rounded-[2rem] border border-[#ddd3c6] bg-white px-5 py-5 shadow-[0_18px_48px_rgba(17,35,42,0.06)] transition-transform duration-200 hover:-translate-y-0.5 md:grid-cols-[0.88fr_1.12fr] md:items-center md:px-6 md:py-6"
              >
                <div className="relative overflow-hidden rounded-[1.7rem] bg-[#11232a] shadow-[0_18px_48px_rgba(17,35,42,0.08)]">
                  <Image
                    src={post.heroImageSrc}
                    alt={post.heroImageAlt}
                    width={960}
                    height={620}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="md:px-2">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.94rem] text-foreground/66">
                    <p className="eyebrow text-[#244ba8]">Blog post</p>
                    <span>{post.category}</span>
                    <span>{post.dateLabel}</span>
                  </div>
                  <h2 className="mt-4 max-w-[18ch] text-[2.25rem] font-semibold leading-[0.98] tracking-[-0.05em] text-foreground md:text-[2.65rem]">
                    {post.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-[1.08rem] leading-8 text-foreground/76">
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
            className="group mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
          >
            <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/10 shadow-[0_20px_60px_rgba(17,35,42,0.12)]">
              <Image
                src={featuredProfile.imageSrc}
                alt={featuredProfile.imageAlt}
                width={2300}
                height={1800}
                className="aspect-[23/18] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>
            <div className="max-w-3xl">
              <p className="eyebrow text-white/58">Global Leaders Today</p>
              <h2 className="mt-4 text-[2.7rem] font-semibold leading-[0.96] tracking-[-0.05em] text-white md:text-[3.5rem]">
                Cecilia D&apos;Cunha
              </h2>
              <p className="mt-5 text-[1.12rem] leading-8 text-white/86 md:text-[1.18rem] md:leading-9">
                Read the full leadership profile covering Cecilia&apos;s early
                offshore incorporation work, her move into the UAE in 1998, and
                the experience that shaped Zenesis.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-white/78">
                Read profile
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <TalkToZenesisPanel
            wrapperClassName="rounded-[2rem] bg-[#11232a] p-8 text-white shadow-[0_22px_70px_rgba(17,35,42,0.12)] md:p-10"
            eyebrowClassName="eyebrow text-white/58"
            titleClassName="section-title mt-4 font-semibold text-white"
            textClassName="text-[1.18rem] leading-9 text-white/94 md:text-[1.22rem]"
            paragraphs={[
              "If you want help understanding how a filing, structure, or compliance change affects the business in practice, Zenesis can help you work through the right next step.",
            ]}
            buttonClassName="inline-flex rounded-full bg-[#244ba8] px-6 py-3 text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1b3c86]"
            imageClassName="object-cover object-[74%_center]"
          />
        </div>
      </section>
    </SiteShell>
  );
}
