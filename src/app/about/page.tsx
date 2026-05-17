import type { Metadata } from "next";
import { Fragment } from "react";
import { ConsultationFormButton } from "@/components/consultation-form";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { TeamProfiles } from "@/components/team-profiles";

const howWeWork = [
  {
    title: "Understand",
    description:
      "We start by understanding your activity, ownership needs, visa requirements, banking goals, and long-term plans.",
  },
  {
    title: "Recommend",
    description:
      "We help you compare mainland, free zone, and offshore options so you can choose the structure that fits your business.",
  },
  {
    title: "Execute",
    description:
      "Our team supports documentation, approvals, licensing, banking coordination, visas, accounting, and tax compliance.",
  },
  {
    title: "Support",
    description:
      "After setup, we continue supporting renewals, bookkeeping, VAT, corporate tax, and regulatory requirements.",
  },
] as const;

export const metadata: Metadata = {
  title: "About | Zenesis Corporation",
  description:
    "Zenesis Corporation background, UAE incorporation history, DMCC presence, and business support experience.",
};

export default function AboutPage() {
  return (
    <SiteShell currentPath="/about">
      <PageIntro
        eyebrow="About Zenesis"
        title="About"
        backgroundImageSrc="/about-bg.png"
        backgroundImageAlt="Zenesis About page background"
        backgroundImagePosition="!object-[100%_100%]"
        backgroundImageMode="ambient"
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 text-white md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <article className="rounded-[2rem] border border-[#d8d0c2] bg-[linear-gradient(180deg,#fffdfa_0%,#f5efe4_100%)] p-8 text-[#11232a] shadow-[0_22px_70px_rgba(17,35,42,0.16)] md:p-10">
            <p className="eyebrow text-[#244ba8]">Company story</p>
            <h2 className="section-title mt-4 font-semibold text-[#11232a]">
              Who we are
            </h2>
            <div className="mt-6 max-w-[88rem] space-y-5 text-[1.18rem] font-medium leading-9 text-[#11232a] md:text-[1.24rem]">
              <p>
                Zenesis Corporation supports entrepreneurs, investors, SMEs, and
                international businesses with company formation, accounting, tax,
                visas, banking support, and ongoing compliance in the UAE.
              </p>
              <p>
                Founded in the UAE in 2005, Zenesis has more than 21 years of
                experience helping businesses navigate the UAE market with
                clarity and confidence.
              </p>
              <p>
                The firm began with offshore incorporation work and expanded
                into onshore setup, bookkeeping, VAT registration and filing,
                corporate tax matters, and ongoing management support as client
                needs evolved with the UAE market.
              </p>
              <p>
                Zenesis starts by understanding the client&apos;s goals, then
                recommends the right structure and manages the process with
                transparency from start to finish.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <div className="mb-8 max-w-4xl">
            <p className="eyebrow text-accent">Working style</p>
            <h2 className="section-title mt-4 font-semibold text-foreground">
              How we work
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:hidden">
            {howWeWork.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-[#11232a] p-6 text-white shadow-[0_18px_54px_rgba(17,35,42,0.12)]"
              >
                <p className="eyebrow text-white/58">Step {index + 1}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-[1.14rem] font-medium leading-8 text-white/94 md:text-[1.18rem]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="hidden xl:grid xl:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] xl:items-stretch xl:gap-4">
            {howWeWork.map((item, index) => (
              <Fragment key={item.title}>
                <article className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-[#11232a] p-6 text-white shadow-[0_18px_54px_rgba(17,35,42,0.12)]">
                  <p className="eyebrow text-white/58">Step {index + 1}</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[1.14rem] font-medium leading-8 text-white/94">
                    {item.description}
                  </p>
                </article>
                {index < howWeWork.length - 1 ? (
                  <div
                    aria-hidden="true"
                    className="flex items-center justify-center px-1 text-3xl text-[#11232a]"
                  >
                    →
                  </div>
                ) : null}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <div className="max-w-4xl">
            <p className="eyebrow text-white/58">Our Team</p>
            <h2 className="section-title mt-4 font-semibold text-white">
              Leadership
            </h2>
            <p className="mt-4 max-w-3xl text-[1.18rem] leading-9 text-white/94">
              The leadership team brings cross-border experience in incorporation,
              tax, real estate management, people and culture, and risk and
              crisis management.
            </p>
          </div>

          <TeamProfiles />
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <article className="rounded-[2rem] border border-white/10 bg-[#11232a] p-8 text-white shadow-[0_22px_70px_rgba(17,35,42,0.12)] md:p-10">
            <p className="eyebrow text-white/58">Next Step</p>
            <h2 className="section-title mt-4 font-semibold text-white">
              Talk to Zenesis
            </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/94">
              Tell us what you want to achieve, and our team will guide you
              through the right setup, documents, costs, and next steps.
            </p>
            <div className="mt-8">
              <ConsultationFormButton
                label="Schedule a Free Consultation"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#11232a] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/90"
              />
            </div>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
