import Link from "next/link";
import { CardAccent, PageIntro, SiteShell } from "@/components/site-shell";
import { ServiceSubpageLinks } from "@/components/service-subpage-links";
import { TalkToZenesisPanel } from "@/components/talk-to-zenesis-panel";
import type { ServiceDetailConfig } from "@/lib/service-pages";

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
  return (
    <SiteShell currentPath={config.currentPath}>
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
        backgroundImageSrc={config.introBackgroundImageSrc}
        backgroundImageAlt={config.introBackgroundImageAlt}
        backgroundImagePosition={config.introBackgroundImagePosition}
        backgroundImageMode={config.introBackgroundImageSrc ? "ambient" : undefined}
        ambientImageClassName={config.introAmbientImageClassName}
      />

      <section
        className={`relative left-1/2 -mt-px w-screen -translate-x-1/2 py-16 md:py-20 ${
          useDarkParentIntroSection ? "bg-[#11232a]" : "bg-[#f5efe4]"
        }`}
      >
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          {!config.topLevelService ? (
            <div className="mb-6 md:mb-8">
              <nav
                aria-label="Service breadcrumb"
                className="inline-flex flex-wrap items-center gap-2 rounded-full border border-[#d8d0c2] bg-white px-4 py-2.5 text-[0.88rem] font-semibold tracking-[-0.01em] text-[#8d7453] shadow-[0_10px_28px_rgba(17,35,42,0.06)] md:px-5 md:text-[0.92rem]"
              >
                <Link
                  href={config.backHref}
                  className="transition-colors hover:text-[#244ba8]"
                >
                  {parentServiceLabel}
                </Link>
                <span aria-hidden="true" className="text-[#8d7453]/56">
                  →
                </span>
                <span className="text-foreground">{config.title}</span>
              </nav>
            </div>
          ) : null}
          <article className={`rounded-[2rem] border border-[#d8d0c2] p-8 text-[#11232a] shadow-[0_22px_70px_rgba(17,35,42,0.16)] md:p-10 ${
            config.topLevelService
              ? "bg-[linear-gradient(180deg,#ffffff_0%,#f8f5ef_100%)]"
              : "bg-white"
          }`}>
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

            {config.subpageLinks?.length ? (
              <div className={`mt-8 ${config.topLevelService ? "rounded-[1.6rem] border border-[#d8d0c2] bg-white p-4 shadow-[0_10px_28px_rgba(17,35,42,0.06)] md:p-5" : ""}`}>
                <ServiceSubpageLinks items={config.subpageLinks} columnsClassName="md:grid-cols-3" />
              </div>
            ) : null}
          </article>
        </div>
      </section>

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
