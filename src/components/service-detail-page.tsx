import { ConsultationFormButton } from "@/components/consultation-form";
import { PageIntro, SiteShell } from "@/components/site-shell";
import type { ServiceDetailConfig } from "@/lib/service-pages";

export function ServiceDetailPage({ config }: { config: ServiceDetailConfig }) {
  const hasAmbientIntro = Boolean(config.introBackgroundImageSrc);
  return (
    <SiteShell currentPath={config.currentPath}>
      <PageIntro
        breadcrumb={[
          {
            label: config.backLabel.replace("Back to ", ""),
            href: config.backHref,
          },
          { label: config.eyebrow, href: `/${config.slug}` },
        ]}
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
        <div className="mx-auto grid w-full max-w-[100rem] gap-5 px-6 md:px-12 lg:grid-cols-[1.05fr_0.95fr] xl:px-20">
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

          <article className="glass-panel rounded-[2rem] p-8 md:p-10">
            <p className="eyebrow text-accent">Next Step</p>
            <h2 className="section-title mt-4 font-semibold text-foreground">
              {config.supportTitle ?? "Talk to Zenesis"}
            </h2>
            <div className="mt-5 max-w-[44rem] space-y-5 text-[1.16rem] leading-9 text-muted md:text-[1.22rem]">
              {(config.supportParagraphs ?? [
                "If you are comparing routes, the key questions are usually market access, ownership, visa needs, banking expectations, and what the business needs to do after incorporation.",
              ]).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8">
              <ConsultationFormButton
                label="Schedule a Free Consultation"
                className="inline-flex rounded-full bg-[#244ba8] px-6 py-3 text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1b3c86]"
              />
            </div>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
