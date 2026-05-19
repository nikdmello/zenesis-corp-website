import { PageIntro, SiteShell } from "@/components/site-shell";
import { TalkToZenesisPanel } from "@/components/talk-to-zenesis-panel";
import type { ServiceDetailConfig } from "@/lib/service-pages";

export function ServiceDetailPage({ config }: { config: ServiceDetailConfig }) {
  const hasAmbientIntro = Boolean(config.introBackgroundImageSrc);
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
          hasAmbientIntro ? "bg-[#11232a]" : "bg-[#f5efe4]"
        }`}
      >
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <article
            className={
              hasAmbientIntro
                ? "rounded-[2rem] border border-[#d8d0c2] bg-[linear-gradient(180deg,#fffdfa_0%,#f5efe4_100%)] p-8 text-[#11232a] shadow-[0_22px_70px_rgba(17,35,42,0.16)] md:p-10"
                : "glass-panel rounded-[2rem] p-8 md:p-10"
            }
          >
            <p className={`eyebrow ${hasAmbientIntro ? "text-[#244ba8]" : "text-accent"}`}>{config.eyebrow}</p>
            <h2 className={`section-title mt-4 font-semibold ${hasAmbientIntro ? "text-[#11232a]" : "text-foreground"}`}>
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
          </article>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <div className="max-w-[56rem]">
            <p className="eyebrow text-white/58">Useful context</p>
            <h2 className="section-title mt-4 font-semibold text-white">
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
              <article key={section.title} className="glass-panel rounded-[2rem] p-8 md:p-10">
                <p className="eyebrow text-accent">{config.eyebrow}</p>
                <h2 className="section-title mt-4 font-semibold text-foreground">
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
                      className="rounded-[1.2rem] border border-foreground/10 bg-white/70 px-4 py-4 text-[1.02rem] leading-7 text-foreground"
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
          <article className="glass-panel rounded-[2rem] p-8 md:p-10">
            <p className="eyebrow text-accent">{config.eyebrow}</p>
            <h2 className="section-title mt-4 font-semibold text-foreground">
              {config.pointsTitle}
            </h2>
            <div className="mt-6 grid gap-3">
              {config.points.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.2rem] border border-foreground/10 bg-white/70 px-4 py-4 text-[1.05rem] font-medium text-foreground"
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
            buttonClassName="inline-flex rounded-full bg-[#244ba8] px-6 py-3 text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1b3c86]"
            imageClassName="object-cover object-[74%_center]"
          />
        </div>
      </section>
    </SiteShell>
  );
}
