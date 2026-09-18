import NextImage from "next/image";
import type { Metadata } from "next";
import { ReadingProgress } from "@/components/reading-progress";
import { PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
import { PageGuideLayout } from "@/components/page-guide-layout";
import { PageSectionNavMobile } from "@/components/page-section-nav";
import { articleSectionHeadingClassName } from "@/lib/article-styles";
import { versionedAssetPath } from "@/lib/asset-paths";
import { legacyRouteMeta, toMetadata } from "@/lib/legacy-meta";
import { TeamProfiles } from "@/components/team-profiles";

export const metadata: Metadata = toMetadata(legacyRouteMeta.about, "/about");

const aboutPageLinks = [
  { href: "#our-background", label: "Who we are" },
  { href: "#leadership", label: "Leadership" },
] as const;

export default function AboutPage() {
  return (
    <SiteShell currentPath="/about">
      <ReadingProgress />
      <PageIntro
        eyebrow="About Zenesis"
        title="About"
        description="The background, experience, and working approach behind Zenesis in the UAE."
        backgroundImageSrc={versionedAssetPath("/sections/awards-and-recognition.webp")}
        backgroundImageAlt="Zenesis awards and recognition"
        backgroundImagePosition="!object-[58%_48%]"
        backgroundImageMode="ambient"
      />

      <PageSectionNavMobile items={aboutPageLinks} />
      <PageGuideLayout items={aboutPageLinks} credibilityPath="/about" navigationLabel="On this page">

      <section
        id="our-background"
        className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-white py-11 md:py-14"
      >
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <article className="min-w-0">
              <div>
                <h2 className={articleSectionHeadingClassName}>Who we are</h2>
                <div className="mt-7 grid items-start gap-9 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] xl:gap-12">
                  <div className="space-y-5 text-[1.04rem] leading-[1.9rem] text-[#07151b]/92 md:text-[1.08rem] md:leading-[1.95rem]">
                    <p>
                      Zenesis Corporation supports entrepreneurs, investors, SMEs, and
                      international businesses with company formation, accounting, tax,
                      visas, banking support, and ongoing compliance in the UAE.
                    </p>
                    <p>
                      Cecilia D&apos;Cunha founded Zenesis in the UAE in 2005. The firm has
                      supported local and international businesses for more than 21 years.
                    </p>
                    <p>
                      The firm began with offshore incorporation work and expanded
                      into onshore setup, bookkeeping, VAT registration and filing,
                      corporate tax matters, and ongoing management support as client
                      needs evolved with the UAE market.
                    </p>
                    <p>
                      Zenesis reviews the client&apos;s activity, ownership, market,
                      visa, banking, and compliance needs before recommending a
                      structure and managing the required applications.
                    </p>
                  </div>

                  <div className="relative aspect-[3/2] overflow-hidden border border-[#d9d1c5] bg-[#07151b] xl:min-h-[32rem] xl:aspect-auto">
                    <NextImage
                      src={versionedAssetPath("/recognition/zenesis-best-real-estate-management-consultancy.webp")}
                      alt="Zenesis receiving the Best Real Estate Management Consultancy of the Year award"
                      fill
                      sizes="(min-width: 1280px) 58vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
          </article>
        </div>
      </section>

      <section
        id="leadership"
        className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#f8f6f1] py-11 md:py-14"
      >
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="The team"
            title="Leadership"
            description="The leadership team brings cross-border experience in incorporation, tax, real estate management, people and culture, and risk and crisis management."
          />

          <div className="mt-9">
            <TeamProfiles />
          </div>
        </div>
      </section>
      </PageGuideLayout>
    </SiteShell>
  );
}
