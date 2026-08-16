import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { InsightsArchive } from "@/components/insights-archive";
import { PageGuideLayout } from "@/components/page-guide-layout";
import { PageSectionNavMobile } from "@/components/page-section-nav";
import { PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
import { versionedAssetPath } from "@/lib/asset-paths";
import { featuredProfile } from "@/lib/site-content";
import { insightPosts } from "@/lib/insights";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Insights | Zenesis Corporation",
  description:
    "Zenesis insights across accounting and tax, business setup, and visa and banking topics in the UAE.",
  path: "/insights",
});

const insightsPageLinks = [
  { href: "#latest", label: "Latest from Zenesis" },
  { href: "#articles", label: "Articles" },
  { href: "#featured-profile", label: "Featured profile" },
] as const;

export default function InsightsPage() {
  const [featuredPost] = insightPosts;

  return (
    <SiteShell currentPath="/insights">
      <PageIntro
        eyebrow="Insights"
        title="Insights"
        description="Articles and practical guidance across business setup, tax, visa, and banking in the UAE."
        backgroundImageSrc={versionedAssetPath("/services/insights.webp")}
        backgroundImageAlt="Dubai skyline and Jumeirah Lake Towers viewed from a business setting"
        backgroundImagePosition="!object-[68%_center]"
        backgroundImageMode="ambient"
      />

      <PageSectionNavMobile items={insightsPageLinks} />
      <PageGuideLayout items={insightsPageLinks} credibilityPath="/insights">

      <section id="latest" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-white py-14 md:py-18">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <div className="min-w-0">
          <SectionHeading
            eyebrow="Blog"
            title="Latest from Zenesis"
            description="Useful reading across accounting and tax, business setup, and visa and banking in the UAE."
          />

          <Link
            href={`/insights/${featuredPost.slug}`}
            className="group mt-9 grid gap-7 rounded-lg border border-[#d8d0c2] bg-[#f8f6f1] p-5 text-foreground transition-transform duration-200 hover:-translate-y-0.5 xl:grid-cols-[1.05fr_0.95fr] xl:items-center xl:p-6"
          >
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.98rem] text-foreground/66">
                <span className="text-sm font-semibold text-[#8d7453]">
                  {featuredPost.category}
                </span>
                <span aria-hidden="true" className="text-foreground/28">
                  •
                </span>
                <span>{featuredPost.dateLabel}</span>
              </div>
              <h2
                className={`mt-5 font-semibold tracking-[-0.06em] text-foreground ${
                  featuredPost.heroTitleClassName ??
                  "max-w-[15ch] text-[2.4rem] leading-[1.06] md:text-[3.1rem]"
                }`}
              >
                {featuredPost.displayTitle ?? featuredPost.title}
              </h2>
              <p className="mt-6 max-w-3xl text-[1.14rem] leading-8 text-foreground/76 md:text-[1.24rem] md:leading-9">
                {featuredPost.description}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#11232a] px-6 py-3 text-sm font-semibold text-white transition-colors group-hover:bg-[#1b3040]">
                Read featured article
                <span aria-hidden="true">→</span>
              </span>
            </div>

            <div className="block self-start overflow-hidden rounded-lg border border-[#d8d0c2] bg-[#11232a]">
              <div className="relative overflow-hidden">
                <Image
                  src={featuredPost.heroImageSrc}
                  alt={featuredPost.heroImageAlt}
                  width={1400}
                  height={920}
                  className={`aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${featuredPost.heroImageClassName ?? "object-center"}`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_38%,rgba(17,35,42,0.48)_100%)]" />
              </div>
            </div>
          </Link>
          </div>
        </div>
      </section>

      <section id="articles" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#f8f6f1] py-14 md:py-18">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Archive"
            title="Articles"
            description="Browse written guidance across accounting and tax, business setup, and visa and banking topics in the UAE."
          />
          <InsightsArchive posts={insightPosts} />
        </div>
      </section>

      <section id="featured-profile" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-white py-14 md:py-18">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Leadership"
            title="Featured profile"
            description="A full-length profile on Cecilia D'Cunha covering her early offshore incorporation work, her move into the UAE in 1998, and the leadership path that led to Zenesis."
          />

          <Link
            href={featuredProfile.href}
            className="group mt-9 grid gap-7 rounded-lg border border-[#d8d0c2] bg-[#f8f6f1] p-5 text-foreground transition-transform duration-200 hover:-translate-y-0.5 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:p-6"
          >
            <div className="overflow-hidden rounded-lg border border-[#d8d0c2] bg-[#11232a]">
              <Image
                src={featuredProfile.imageSrc}
                alt={featuredProfile.imageAlt}
                width={2300}
                height={1800}
                className="aspect-[23/18] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.98rem] text-foreground/66">
                <span className="text-sm font-semibold text-[#8d7453]">
                  Featured profile
                </span>
                <span aria-hidden="true" className="text-foreground/28">
                  •
                </span>
                <span>Global Leaders Today</span>
              </div>
              <h2 className="mt-5 text-[2.4rem] font-semibold leading-[1.06] tracking-[-0.04em] text-foreground md:text-[3.1rem]">
                Cecilia D&apos;Cunha
              </h2>
              <p className="mt-6 text-[1.14rem] leading-8 text-foreground/76 md:text-[1.22rem] md:leading-9">
                Read the full leadership profile covering Cecilia&apos;s early
                offshore incorporation work, her move into the UAE in 1998, and
                the experience that shaped Zenesis.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#11232a] px-6 py-3 text-sm font-semibold text-white transition-colors group-hover:bg-[#1b3040]">
                Read profile
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>
      </PageGuideLayout>
    </SiteShell>
  );
}
