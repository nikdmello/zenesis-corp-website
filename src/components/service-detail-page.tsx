import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ServiceAnswerSection } from "@/components/service-answer-section";
import { CardAccent, PageIntro, SiteShell } from "@/components/site-shell";
import { ServiceSubpageLinks } from "@/components/service-subpage-links";
import { TalkToZenesisPanel } from "@/components/talk-to-zenesis-panel";
import { insightPosts } from "@/lib/insights";
import { pickInsightLinks } from "@/lib/internal-links";
import type { ServiceDetailConfig } from "@/lib/service-pages";
import {
  buildFaqSchema,
  buildBreadcrumbSchema,
  buildServiceSchema,
  getAbsoluteUrl,
} from "@/lib/seo";

export function ServiceDetailPage({ config }: { config: ServiceDetailConfig }) {
  const hasAmbientIntro = Boolean(config.introBackgroundImageSrc);
  const useDarkParentIntroSection =
    config.topLevelService && config.slug === "visa-and-banking";
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
      {serviceSchemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <PageIntro
        breadcrumb={
          config.hideBreadcrumb
            ? undefined
            : config.topLevelService
              ? [{ label: "Services", href: "/#services" }, { label: config.title }]
              : [
                  { label: "Services", href: "/#services" },
                  {
                    label: parentServiceLabel,
                    href: config.backHref,
                  },
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

      <section
        className={`relative left-1/2 -mt-px w-screen -translate-x-1/2 py-16 md:py-20 ${
          useDarkParentIntroSection ? "bg-[#11232a]" : "bg-[#f5efe4]"
        }`}
      >
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <article className={`rounded-[2rem] border border-[#d8d0c2] p-8 text-[#11232a] shadow-[0_22px_70px_rgba(17,35,42,0.16)] md:p-10 ${
            config.topLevelService
              ? "bg-[linear-gradient(180deg,#ffffff_0%,#f8f5ef_100%)]"
              : "bg-white"
          }`}>
            <div className={config.overviewImageSrc ? "grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start" : ""}>
              <div>
                <CardAccent />
                <h2 className={`section-title font-semibold ${hasAmbientIntro ? "text-[#11232a]" : "text-foreground"}`}>
                  {config.introTitle}
                </h2>
                <div
                  className={`mt-5 max-w-[88rem] space-y-5 text-[1.16rem] leading-9 md:text-[1.22rem] ${
                    hasAmbientIntro ? "text-[#11232a]" : "text-muted"
                  }`}
                >
                  {config.introParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {config.overviewImageSrc ? (
                <div className="overflow-hidden rounded-[1.8rem] border border-[#d8d0c2] bg-[#11232a] shadow-[0_18px_50px_rgba(17,35,42,0.1)]">
                  <Image
                    src={config.overviewImageSrc}
                    alt={config.overviewImageAlt ?? config.title}
                    width={1600}
                    height={1040}
                    className={`aspect-[16/11] w-full object-cover ${config.overviewImagePosition ?? "object-center"}`}
                  />
                </div>
              ) : null}
            </div>

            {config.subpageLinks?.length ? (
              <div className={`mt-8 ${config.topLevelService ? "rounded-[1.6rem] border border-[#d8d0c2] bg-white p-4 shadow-[0_10px_28px_rgba(17,35,42,0.06)] md:p-5" : ""}`}>
                <ServiceSubpageLinks items={config.subpageLinks} columnsClassName="md:grid-cols-3" />
              </div>
            ) : null}
          </article>
        </div>
      </section>

      {config.directAnswers?.length ? (
        <ServiceAnswerSection
          dark
          title="Direct answers"
          description="Short answers to the questions founders and operators usually need clarified before the next step."
          items={config.directAnswers}
        />
      ) : null}

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <div className="max-w-[56rem]">
            <h2 className="section-title font-semibold text-white">
              What helps clients make the right decision
            </h2>
            <p className="mt-4 max-w-[52rem] text-[1.12rem] leading-8 text-white/92 md:text-[1.16rem] md:leading-9">
              The right choice usually becomes clearer when the business model,
              ownership structure, timing, and post-setup needs are looked at
              together instead of in isolation.
            </p>
          </div>

          <div
            className={`mt-10 grid gap-5 ${
              knowledgeSections.length > 1 ? "lg:grid-cols-2" : ""
            }`}
          >
            {knowledgeSections.map((section) => (
              <article key={section.title} className="rounded-[2rem] border border-[#d8d0c2] bg-white p-8 text-[#11232a] shadow-[0_20px_60px_rgba(17,35,42,0.18)] md:p-10">
                <CardAccent />
                <h2 className="section-title font-semibold text-foreground">
                  {section.title}
                </h2>
                {section.intro ? (
                  <p className="mt-5 max-w-[42rem] text-[1.08rem] leading-8 text-muted md:text-[1.12rem] md:leading-9">
                    {section.intro}
                  </p>
                ) : null}
                <div className="mt-6 grid gap-3">
                  {section.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.3rem] border border-[#d8d0c2] bg-[linear-gradient(180deg,#ffffff_0%,#f8f5ef_100%)] px-4 py-4 text-[1.02rem] leading-7 text-foreground shadow-[0_8px_24px_rgba(17,35,42,0.06)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <article className="rounded-[2rem] border border-[#d8d0c2] bg-[linear-gradient(180deg,#ffffff_0%,#f8f5ef_100%)] p-8 text-[#11232a] shadow-[0_20px_60px_rgba(17,35,42,0.12)] md:p-10">
            <CardAccent />
            <h2 className="section-title font-semibold text-foreground">
              {config.pointsTitle}
            </h2>
            <div className="mt-6 grid gap-3">
              {config.points.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.3rem] border border-[#d8d0c2] bg-white px-4 py-4 text-[1.05rem] font-medium text-foreground shadow-[0_8px_22px_rgba(17,35,42,0.05)]"
                >
                  {point}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      {relatedInsights.length ? (
        <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
          <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
            <div className="max-w-5xl">
              <h2 className="section-title font-semibold text-foreground">
                Related reading
              </h2>
              <p className="mt-4 max-w-4xl text-[1.16rem] leading-8 text-muted md:text-[1.24rem] md:leading-9">
                Useful insight articles that connect the service decision to structure, compliance, or timing questions around it.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {relatedInsights.map((post) => (
                <Link
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  className="group overflow-hidden rounded-[1.75rem] border border-[#d8d0c2] bg-white text-[#11232a] shadow-[0_18px_50px_rgba(17,35,42,0.08)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="relative overflow-hidden bg-[#11232a]">
                    <Image
                      src={post.heroImageSrc}
                      alt={post.heroImageAlt}
                      width={960}
                      height={620}
                      className={`aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${post.heroImageClassName ?? "object-center"}`}
                    />
                  </div>
                  <div className="p-6">
                    <CardAccent />
                    <p className="text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-[#8d7453]">
                      {post.category} <span className="text-[#11232a]/42">/</span>{" "}
                      <span className="text-[#11232a]/58">{post.dateLabel}</span>
                    </p>
                    <h3 className="mt-4 text-[1.28rem] font-semibold leading-tight tracking-[-0.04em] text-foreground">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-[1.02rem] leading-7 text-foreground/88">
                      {post.description}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 text-[0.98rem] font-semibold text-[#244ba8]">
                      Read article
                      <span aria-hidden="true">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <TalkToZenesisPanel
            wrapperClassName="rounded-[2rem] bg-[#11232a] p-8 text-white shadow-[0_22px_70px_rgba(17,35,42,0.12)] md:p-10"
            eyebrowClassName="eyebrow text-white/58"
            titleClassName="section-title mt-4 font-semibold text-white"
            textClassName="text-[1.16rem] leading-9 text-white/94 md:text-[1.22rem]"
            paragraphs={
              config.supportParagraphs ?? [
                "If you are comparing routes, the key questions are usually market access, ownership, visa needs, banking expectations, and what the business needs to do after incorporation.",
              ]
            }
            title={config.supportTitle}
            buttonClassName="inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
            imageClassName="object-cover object-[74%_center]"
          />
        </div>
      </section>
    </SiteShell>
  );
}
