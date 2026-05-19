import Link from "next/link";
import type { Metadata } from "next";
import { BusinessSetupRouteCard } from "@/components/business-setup-route-card";
import { PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
import { TalkToZenesisPanel } from "@/components/talk-to-zenesis-panel";
import {
  freeZoneExamples,
  offshoreOptions,
  setupStructures,
} from "@/lib/site-content";

const setupRoutes = [
  {
    title: "Mainland / Onshore Setup",
    href: "/mainland",
    bestFor:
      "Best for businesses that want to operate directly in the UAE market and work with local clients.",
    description:
      "Best suited to consultancies, trading businesses, professional services, retail, and companies that need broader UAE market access.",
    points: [
      "Choose the right business activity and trade name before filing the application",
      "Handle licensing, supporting documents, and authority approvals properly",
      "Plan office requirements, visas, renewals, and the compliance work that follows setup",
    ],
  },
  {
    title: "Free Zone Setup",
    href: "/free-zones",
    bestFor:
      "Best for entrepreneurs, consultants, e-commerce, international trade, media, and tech businesses.",
    description:
      "Free zone routes are often chosen for flexible setup packages, international positioning, and easier alignment with specific business activities.",
    points: [
      "Compare the right free zones instead of choosing only on headline cost",
      "Match the activity, package, and license application to how the business will operate",
      "Plan visas, renewals, and banking documents before they become a delay after setup",
    ],
  },
  {
    title: "Offshore Setup",
    href: "/offshore",
    bestFor:
      "Best for international structuring, asset holding, and companies that do not need to trade directly inside the UAE market.",
    description:
      "Offshore structures are typically used for ownership, international arrangements, and holding needs rather than local operating activity.",
    points: [
      "Choose the offshore jurisdiction that fits the ownership objective behind the structure",
      "Handle incorporation documents and the compliance paperwork tied to the setup",
      "Get support on banking where the structure and use case make that practical",
    ],
  },
] as const;

const essentialServices = [
  {
    title: "Document Attestation",
    href: "/document-attestation-services-in-uae",
    description:
      "Personal, educational, and commercial documents often need formal attestation before UAE authorities will accept them.",
    points: [
      "Prepare personal documents such as birth, marriage, divorce, police clearance, and death certificates for UAE use",
      "Handle educational records including degrees, diplomas, transcripts, and training certificates",
      "Process commercial documents such as incorporation records, board resolutions, POAs, invoices, and MOA or AOA papers",
    ],
  },
  {
    title: "Business Banking",
    href: "/open-a-bank-account-easily",
    description:
      "Business owners usually need banking support soon after choosing the formation route, especially when KYC and documentation requirements affect timing.",
    points: [
      "Prepare for corporate and personal account opening with a cleaner document pack",
      "Handle KYC and compliance documentation before the bank asks for multiple revisions",
      "Support mainland, free zone, and offshore structures with the right banking approach",
    ],
  },
  {
    title: "Company Visa",
    href: "/uae-company-visa",
    description:
      "A company visa is usually one of the first follow-on needs after setup for founders and employees who need to live and work in the UAE.",
    points: [
      "Support founders and employees who need legal UAE residency to start operating",
      "Coordinate Emirates ID, health insurance, and family sponsorship follow-through",
      "Put renewable residency in place while the company becomes operational",
    ],
  },
  {
    title: "Visa and Banking",
    href: "/visa-and-banking",
    description:
      "Residency and banking support matters when founders, investors, and teams need visas or account opening tied to business setup.",
    points: [
      "Plan Golden Visa, company visa, and family residency needs in the right sequence",
      "Prepare banking and KYC documentation alongside the company structure",
      "Reduce delays by connecting residency and banking steps to the setup timeline",
    ],
  },
] as const;

const routeSignals = [
  {
    title: "Choose mainland if...",
    description:
      "you need local UAE market access, local clients, or a broader operating scope inside the country.",
  },
  {
    title: "Choose free zone if...",
    description:
      "you want a structured setup package, a known zone ecosystem, or a route aligned with consulting, digital, trade, or investor-led models.",
  },
  {
    title: "Choose offshore if...",
    description:
      "your priority is holding, structuring, or international use cases that do not depend on local day-to-day UAE operations.",
  },
] as const;

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We understand your business activity, ownership structure, visa needs, and operational goals.",
  },
  {
    step: "02",
    title: "Structure Recommendation",
    description:
      "We compare mainland, free zone, and offshore options and recommend the best fit.",
  },
  {
    step: "03",
    title: "Documentation",
    description:
      "We prepare and review the required application documents.",
  },
  {
    step: "04",
    title: "Licensing & Approvals",
    description:
      "We coordinate with the relevant authority or free zone.",
  },
  {
    step: "05",
    title: "Visas & Banking Support",
    description:
      "We assist with company visas, Emirates ID steps, and bank account documentation.",
  },
  {
    step: "06",
    title: "Ongoing Support",
    description:
      "We help with renewals, accounting, VAT, corporate tax, and compliance.",
  },
] as const;

export const metadata: Metadata = {
  title: "Business Setup | Zenesis Corporation",
  description:
    "Zenesis business setup support across mainland, free zone, offshore, banking, visas, attestation, and related setup services in the UAE.",
};

export default function BusinessSetupPage() {
  return (
    <SiteShell currentPath="/business-setup">
      <PageIntro
        breadcrumb={[
          { label: "Services", href: "/#services" },
          { label: "Business setup" },
        ]}
        title="Business setup"
        backgroundImageSrc="/business-setup-bg.webp"
        backgroundImageAlt="Zenesis Business Setup page background"
        backgroundImagePosition="!object-[100%_100%]"
        backgroundImageMode="ambient"
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <article className="rounded-[2rem] border border-[#d8d0c2] bg-[linear-gradient(180deg,#fffdfa_0%,#f5efe4_100%)] p-8 text-[#11232a] shadow-[0_22px_70px_rgba(17,35,42,0.16)] md:p-10">
            <p className="eyebrow text-[#244ba8]">Business Setup</p>
            <h2 className="section-title mt-4 font-semibold text-[#11232a]">
              Overview
            </h2>
            <div className="mt-5 max-w-[84rem] space-y-5 text-[1.2rem] font-medium leading-9 text-[#11232a] md:text-[1.26rem]">
              <p>
                Setting up a company in the UAE is not just about getting a trade
                license. The right structure depends on your business activity,
                ownership needs, target market, visa requirements, office needs,
                banking expectations, and tax position.
              </p>
              <p>
                Zenesis helps you compare your options clearly, avoid unnecessary
                delays, and complete the setup process with the right
                documentation and support.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[100rem] gap-5 px-6 md:px-12 lg:grid-cols-2 xl:px-20">
          <article className="glass-panel rounded-[2rem] p-8 md:p-10">
            <p className="eyebrow text-accent">Business Setup</p>
            <h2 className="section-title mt-4 font-semibold text-foreground">
              Dubai Company Formation
            </h2>
            <p className="mt-4 max-w-3xl text-[1.18rem] font-medium leading-8 text-foreground/88">
              Most enquiries start with one decision: mainland, free zone, or
              offshore. Those three routes shape licensing, visas, banking, and
              how the company operates after formation.
            </p>
            <div className="mt-6 grid gap-3">
              {setupRoutes.map((route) => (
                <Link
                  key={route.title}
                  href={route.href}
                  className="group flex items-center justify-between rounded-[1.2rem] border border-[#d7cfc2] bg-[linear-gradient(180deg,#fffdfa_0%,#f7f1e7_100%)] px-5 py-4 text-[1.04rem] font-semibold text-foreground shadow-[0_10px_30px_rgba(17,35,42,0.07)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#244ba8]/22 hover:bg-white"
                >
                  <span>{route.title}</span>
                  <span
                    aria-hidden="true"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#244ba8]/14 bg-[#244ba8]/8 text-[1rem] font-semibold text-[#244ba8] transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </article>

          <article className="glass-panel rounded-[2rem] p-8 md:p-10">
            <p className="eyebrow text-accent">Business Setup</p>
            <h2 className="section-title mt-4 font-semibold text-foreground">
              Support after formation
            </h2>
            <p className="mt-4 max-w-3xl text-[1.18rem] font-medium leading-8 text-foreground/88">
              Company setup is usually only the first step. Most clients also
              need banking, visas, attestation, and residency support once the
              structure is chosen.
            </p>
            <div className="mt-6 grid gap-3">
              {essentialServices.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-center justify-between rounded-[1.2rem] border border-[#d7cfc2] bg-[linear-gradient(180deg,#fffdfa_0%,#f7f1e7_100%)] px-5 py-4 text-[1.04rem] font-semibold text-foreground shadow-[0_10px_30px_rgba(17,35,42,0.07)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#244ba8]/22 hover:bg-white"
                >
                  <span>{item.title}</span>
                  <span
                    aria-hidden="true"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#244ba8]/14 bg-[#244ba8]/8 text-[1rem] font-semibold text-[#244ba8] transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Setup Options"
            eyebrowClassName="text-[#244ba8]"
            title="Main routes"
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {setupRoutes.map((route) => (
              <BusinessSetupRouteCard
                key={route.title}
                eyebrow="Setup Option"
                title={route.title}
                href={route.href}
                frontSummary={route.bestFor}
                backDescription={route.description}
                points={route.points}
                ctaLabel="View route"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20 [&_.eyebrow]:text-white/68 [&_.section-title]:text-white [&_.text-muted]:text-white/94">
        <div className="mx-auto grid w-full max-w-[100rem] items-stretch gap-5 px-6 md:px-12 lg:grid-cols-[1.1fr_0.9fr] xl:px-20">
          <article className="glass-panel h-full rounded-[2rem] p-7 md:p-8">
            <p className="eyebrow !text-[#244ba8]">Comparison</p>
            <h2 className="section-title mt-4 font-semibold !text-foreground">
              Route comparison
            </h2>
            <p className="mt-4 max-w-3xl text-[1.14rem] font-medium leading-8 !text-foreground/90">
              Use these quick route signals to narrow the setup path before you compare licenses,
              visas, banking, and ongoing compliance.
            </p>
            <div className="mt-7 space-y-3.5">
              {routeSignals.map((item, index) => (
                <div
                  key={item.title}
                  className="grid gap-4 rounded-[1.45rem] border border-foreground/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.86)_0%,rgba(245,239,228,0.98)_100%)] p-5 shadow-[0_12px_34px_rgba(17,35,42,0.09)] md:grid-cols-[auto_1fr]"
                >
                  <div className="flex items-start">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#244ba8]/14 bg-[#244ba8]/8 text-sm font-semibold text-[#244ba8]">
                      0{index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[1.14rem] font-semibold tracking-[-0.03em] !text-foreground md:text-[1.18rem]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[1.08rem] font-medium leading-7 !text-foreground/92">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-panel h-full rounded-[2rem] p-7 md:p-8">
            <p className="eyebrow !text-[#244ba8]">Formation reference</p>
            <h2 className="section-title mt-4 font-semibold !text-foreground">
              Route reference
            </h2>
            <div className="mt-7 grid gap-4">
              <div className="rounded-[1.35rem] border border-foreground/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(245,239,228,0.96)_100%)] p-5 shadow-[0_10px_28px_rgba(17,35,42,0.08)]">
                <p className="eyebrow !text-muted">Structures</p>
                <ul className="mt-3 space-y-2.5 text-[1.04rem] leading-7 !text-foreground/92">
                  {setupStructures.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#244ba8]"
                      >
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.35rem] border border-foreground/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(245,239,228,0.96)_100%)] p-5 shadow-[0_10px_28px_rgba(17,35,42,0.08)]">
                <p className="eyebrow !text-muted">Popular free zones</p>
                <ul className="mt-3 space-y-2.5 text-[1.04rem] leading-7 !text-foreground/92">
                  {freeZoneExamples.slice(0, 6).map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#244ba8]"
                      >
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.35rem] border border-foreground/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(245,239,228,0.96)_100%)] p-5 shadow-[0_10px_28px_rgba(17,35,42,0.08)]">
                <p className="eyebrow !text-muted">Offshore options</p>
                <ul className="mt-3 space-y-2.5 text-[1.04rem] leading-7 !text-foreground/92">
                  {offshoreOptions.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#244ba8]"
                      >
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="After Setup"
            eyebrowClassName="text-[#244ba8]"
            title="After setup"
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {essentialServices.map((service) => (
              <BusinessSetupRouteCard
                key={service.title}
                eyebrow="Essential Service"
                title={service.title}
                href={service.href}
                frontSummary={service.description}
                points={service.points}
                ctaLabel="Open service"
                variant="essential"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20 [&_.eyebrow]:text-white/68 [&_.section-title]:text-white [&_.text-muted]:text-white/94">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Setup Process"
            title="Process"
          />
          <p className="mt-5 max-w-4xl text-[1.14rem] font-medium leading-8 text-white/88 md:text-[1.2rem]">
            From first conversation to operating company, this is the practical flow most clients want to understand.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((item) => (
              <article key={item.step} className="glass-panel rounded-[1.75rem] p-8 md:p-9">
                <p className="text-[0.95rem] font-semibold tracking-[0.24em] text-accent">
                  {item.step}
                </p>
                <h3 className="mt-4 text-[1.32rem] font-semibold leading-tight tracking-[-0.04em] !text-foreground md:text-[1.4rem] xl:text-[1.46rem]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[1.14rem] font-medium leading-8 !text-foreground/94 md:text-[1.18rem]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <TalkToZenesisPanel
            wrapperClassName="glass-panel rounded-[2rem] p-8 md:p-10"
            eyebrowClassName="eyebrow text-accent"
            titleClassName="section-title mt-4 font-semibold text-foreground"
            textClassName="text-[1.22rem] font-medium leading-9 text-foreground/88"
            paragraphs={[
              "Share your business activity, ownership needs, and visa requirements. Zenesis will help you compare the right mainland, free zone, or offshore route.",
            ]}
            buttonClassName="inline-flex rounded-full bg-[#244ba8] px-6 py-3 text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1b3c86]"
            imageClassName="object-cover object-[74%_center]"
          />
        </div>
      </section>
    </SiteShell>
  );
}
