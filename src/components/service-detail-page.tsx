import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { CleanSectionLink } from "@/components/clean-section-link";
import { createContextualLinker } from "@/components/contextual-links";
import { PageGuideLayout, type PageGuideItem } from "@/components/page-guide-layout";
import { ReadingProgress } from "@/components/reading-progress";
import { ServiceAnswerSection } from "@/components/service-answer-section";
import { ServiceCredibilityPanel } from "@/components/service-credibility-panel";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { ServiceSubpageLinks } from "@/components/service-subpage-links";
import { articleSectionHeadingClassName } from "@/lib/article-styles";
import { insightPosts } from "@/lib/insights";
import { pickInsightLinks } from "@/lib/internal-links";
import type { ServiceDetailConfig } from "@/lib/service-pages";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  getAbsoluteUrl,
} from "@/lib/seo";

function toSectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function ServiceDetailPage({ config }: { config: ServiceDetailConfig }) {
  const knowledgeSections =
    config.knowledgeSections && config.knowledgeSections.length > 0
      ? config.knowledgeSections
      : [
          {
            title: "What this usually involves",
            intro: config.description,
            items: config.points.slice(0, Math.min(4, config.points.length)),
          },
        ];
  const parentServiceLabel =
    config.backHref === "/business-setup"
      ? "Business setup"
      : config.backHref === "/accounting-tax"
        ? "Accounting and tax"
        : "Visa and banking";
  const relatedInsights = pickInsightLinks(
    insightPosts,
    parentServiceLabel,
    config.relatedInsightSlugs,
  );
  const canonicalPath = `/${config.slug}`;
  const linkContext = createContextualLinker(canonicalPath, 5);
  const guideLinks: PageGuideItem[] = [
    { href: "#overview", label: config.introTitle },
    ...knowledgeSections.map((section) => ({
      href: `#${toSectionId(section.title)}` as `#${string}`,
      label: section.title,
    })),
    { href: "#what-we-handle", label: config.pointsTitle },
    ...(config.directAnswers?.length
      ? [{ href: "#direct-answers", label: "Direct answers" }]
      : []),
    { href: "#primary-sources", label: "Primary sources" },
  ];
  const serviceSchemas = [
    buildServiceSchema({
      title: config.title,
      description: config.description,
      path: canonicalPath,
    }),
    buildBreadcrumbSchema(
      config.topLevelService
        ? [
            { name: "Home", url: getAbsoluteUrl("/") },
            { name: config.title, url: getAbsoluteUrl(canonicalPath) },
          ]
        : [
            { name: "Home", url: getAbsoluteUrl("/") },
            { name: parentServiceLabel, url: getAbsoluteUrl(config.backHref) },
            { name: config.title, url: getAbsoluteUrl(canonicalPath) },
          ],
    ),
    ...(config.directAnswers?.length
      ? [
          buildFaqSchema(
            config.directAnswers.map((item) => ({
              question: item.question,
              answer: item.answer,
            })),
          ),
        ]
      : []),
  ];

  return (
    <SiteShell currentPath={config.currentPath}>
      <ReadingProgress />
      {serviceSchemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <PageIntro
        showBottomBorder={false}
        breadcrumb={
          config.hideBreadcrumb
            ? undefined
            : config.topLevelService
              ? [{ label: "Services", href: "/#services" }, { label: config.title }]
              : [
                  { label: "Services", href: "/#services" },
                  { label: parentServiceLabel, href: config.backHref },
                  { label: config.title },
                ]
        }
        title={config.title}
        description={config.description}
        backgroundImageSrc={config.introBackgroundImageSrc}
        backgroundImageAlt={config.introBackgroundImageAlt}
        backgroundImagePosition={config.introBackgroundImagePosition}
        backgroundImageMode={
          config.introBackgroundImageSrc
            ? (config.introBackgroundImageMode ?? "ambient")
            : undefined
        }
        ambientImageClassName={config.introAmbientImageClassName}
        contentClassName={config.introContentClassName}
      />
      <PageGuideLayout items={guideLinks} credibilityPath={canonicalPath}>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-white py-11 md:py-14">
        <div className="mx-auto w-full max-w-[104rem] px-7 md:px-14 xl:px-24">
          <div className="max-w-[78rem]">
            <div className="min-w-0 space-y-10 md:space-y-12">
              <nav
                aria-label="On this page"
                className="border-y border-[#d9d1c5] bg-[#f8f6f1] px-6 py-7 md:px-8 lg:hidden"
              >
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span>
                      <span className="block text-sm font-semibold text-[#8d7453]">
                        On this page
                      </span>
                      <span className="mt-2 block text-[0.98rem] leading-7 text-[#07151b]/68">
                        {guideLinks.length} sections
                      </span>
                    </span>
                    <span className="text-2xl leading-none text-[#8d7453] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <GuideLinks items={guideLinks} className="mt-6 space-y-3 border-t border-[#d9d1c5] pt-5" />
                </details>
              </nav>

              <section
                id="overview"
                className="w-full max-w-[78rem] scroll-mt-28"
              >
                <div
                  className={
                    config.overviewImageSrc
                      ? "grid items-start gap-8 lg:grid-cols-[minmax(0,1.06fr)_minmax(20rem,0.94fr)] lg:gap-12"
                      : undefined
                  }
                >
                  <div className="min-w-0">
                    <h2 className={articleSectionHeadingClassName}>
                      {config.introTitle}
                    </h2>
                    <div
                      className={`mt-7 max-w-[50rem] space-y-5 ${
                        config.overviewImageSrc
                          ? "text-[1.04rem] leading-[1.9rem] md:text-[1.08rem] md:leading-[1.95rem]"
                          : "text-[1.06rem] leading-[1.9rem] md:text-[1.1rem] md:leading-[2rem]"
                      } text-[#07151b]/92`}
                    >
                      {config.introParagraphs.map((paragraph) => (
                        <p key={paragraph}>{linkContext(paragraph)}</p>
                      ))}
                    </div>

                  </div>

                  {config.overviewImageSrc ? (
                    <div className="overflow-hidden border-y border-[#d9d1c5] bg-[#f8f6f1] py-4 lg:mt-0">
                      <Image
                        src={config.overviewImageSrc}
                        alt={config.overviewImageAlt ?? config.title}
                        width={1600}
                        height={1040}
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className={`aspect-[4/3] w-full object-cover ${config.overviewImagePosition ?? "object-center"}`}
                      />
                    </div>
                  ) : null}
                </div>
              </section>

              {knowledgeSections.map((section) => (
                <section
                  key={section.title}
                  id={toSectionId(section.title)}
                  className="w-full max-w-[54rem] scroll-mt-28 border-t border-[#e4dbce] pt-10"
                >
                  <h2 className={articleSectionHeadingClassName}>{section.title}</h2>
                  {section.intro ? (
                    <p className="mt-6 max-w-[50rem] text-[1.04rem] leading-[1.9rem] text-[#07151b]/84 md:text-[1.08rem] md:leading-[1.95rem]">
                      {linkContext(section.intro)}
                    </p>
                  ) : null}
                  <ul className="mt-7 max-w-[52rem] divide-y divide-[#e4dbce] border-y border-[#e4dbce]">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 py-4 text-[1.02rem] leading-8 text-[#07151b]/92 md:text-[1.04rem]"
                      >
                        <span className="mt-[0.72rem] h-2 w-2 shrink-0 rounded-full bg-[#8d7453]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}

              <section
                id="what-we-handle"
                className="w-full max-w-[54rem] scroll-mt-28 border-l-4 border-[#244ba8] bg-[#f3f7ff] px-6 py-8 md:px-8"
              >
                <h2 className={articleSectionHeadingClassName}>
                  {config.pointsTitle}
                </h2>
                <ul className="mt-6 divide-y divide-[#cfdaf1] border-y border-[#cfdaf1]">
                  {config.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 py-4 text-[1.02rem] leading-8 text-[#07151b]/92 md:text-[1.04rem]"
                    >
                      <span className="mt-[0.72rem] h-2 w-2 shrink-0 rounded-full bg-[#244ba8]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

          </div>
        </div>
      </section>

      {relatedInsights.length ? (
        <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-11 md:py-14">
          <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
            <div className="max-w-[54rem]">
              <h2 className={articleSectionHeadingClassName}>
                Continue reading
              </h2>
              <p className="mt-4 max-w-[50rem] text-[1.04rem] leading-8 text-[#07151b]/76">
                Useful guides that connect this service decision to structure, compliance, and timing.
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {relatedInsights.map((post) => (
                <Link
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  className="group overflow-hidden border border-[#d8d0c2] bg-white text-[#011735] shadow-[0_14px_36px_rgba(17,35,42,0.07)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <Image
                    src={post.heroImageSrc}
                    alt={post.heroImageAlt}
                    width={960}
                    height={620}
                    className={`aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${post.heroImageClassName ?? "object-center"}`}
                  />
                  <div className="border-t border-[#e4dbce] p-5">
                    <p className="text-sm font-semibold text-[#8d7453]">
                      {post.category} / {post.dateLabel}
                    </p>
                    <h3 className="mt-3 text-[1.16rem] font-semibold leading-7 text-foreground">
                      {post.title}
                    </h3>
                    <span className="mt-4 inline-flex text-[0.9rem] font-semibold text-[#244ba8]">
                      Read article →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {config.directAnswers?.length ? (
        <ServiceAnswerSection
          title="Direct answers"
          description="Short answers to the questions founders and operators usually need clarified before the next step."
          items={config.directAnswers}
        />
      ) : null}

      <ServiceCredibilityPanel path={canonicalPath} variant="sources" />

      {config.subpageLinks?.length ? (
        <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-white py-12 md:py-14">
          <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
            <div className="max-w-[78rem]">
              <h2 className={articleSectionHeadingClassName}>Related services</h2>
              <div className="mt-7">
                <ServiceSubpageLinks
                  items={config.subpageLinks}
                  columnsClassName="md:grid-cols-2"
                  variant="compact"
                />
              </div>
            </div>
          </div>
        </section>
      ) : null}
      </PageGuideLayout>
    </SiteShell>
  );
}

function GuideLinks({
  items,
  className,
}: {
  items: readonly { href: string; label: string }[];
  className: string;
}) {
  return (
    <ol className={className}>
      {items.map((item, index) => (
        <li key={item.href}>
          <CleanSectionLink
            href={item.href as `#${string}`}
            className="group flex items-start gap-3 text-[0.84rem] font-semibold leading-5 text-foreground/72 hover:text-[#244ba8]"
          >
            <span className="mt-px text-[0.68rem] tabular-nums text-[#8d7453]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{item.label}</span>
          </CleanSectionLink>
        </li>
      ))}
    </ol>
  );
}
