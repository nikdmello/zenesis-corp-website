import Link from "next/link";
import type { Metadata } from "next";
import { ConsultationFormButton } from "@/components/consultation-form";
import { PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
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
    title: "Document Attestation Services in UAE",
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
    title: "UAE Business Bank Account",
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
    title: "UAE Company Visa",
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
    title: "UAE Golden Visa",
    href: "/golden-visa-services-in-the-uae",
    description:
      "Golden Visa support matters when founders, investors, and senior professionals want residency planning tied to their business or long-term UAE presence.",
    points: [
      "Review investor and entrepreneur routes tied to business activity and long-term UAE presence",
      "Assess professional categories across fields such as medicine, engineering, IT, and research",
      "Support creative, cultural, and other qualifying routes where the profile fits the criteria",
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
        eyebrow="Business Setup"
        title="Business setup support across the UAE."
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <article className="glass-panel rounded-[2rem] p-8 md:p-10">
            <p className="eyebrow text-accent">Business Setup</p>
            <h2 className="section-title mt-4 font-semibold text-foreground">
              Pick the right setup route first.
            </h2>
            <div className="mt-5 max-w-[84rem] space-y-5 text-[1.16rem] leading-9 text-muted md:text-[1.22rem]">
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
            <p className="mt-4 max-w-3xl text-[1.14rem] leading-8 text-muted">
              Most enquiries start with one decision: mainland, free zone, or
              offshore. Those three routes shape licensing, visas, banking, and
              how the company operates after formation.
            </p>
            <div className="mt-6 grid gap-3">
              {setupRoutes.map((route) => (
                <Link
                  key={route.title}
                  href={route.href}
                  className="rounded-[1.2rem] border border-foreground/10 bg-white/70 px-4 py-4 text-base font-medium text-foreground"
                >
                  {route.title}
                </Link>
              ))}
            </div>
          </article>

          <article className="glass-panel rounded-[2rem] p-8 md:p-10">
            <p className="eyebrow text-accent">Business Setup</p>
            <h2 className="section-title mt-4 font-semibold text-foreground">
              Support after formation
            </h2>
            <p className="mt-4 max-w-3xl text-[1.14rem] leading-8 text-muted">
              Company setup is usually only the first step. Most clients also
              need banking, visas, attestation, and residency support once the
              structure is chosen.
            </p>
            <div className="mt-6 grid gap-3">
              {essentialServices.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-[1.2rem] border border-foreground/10 bg-white/70 px-4 py-4 text-base font-medium text-foreground"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Company Formation"
            title="The three main setup options."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {setupRoutes.map((route) => (
              <article
                key={route.title}
                className="glass-panel flex h-full flex-col rounded-[2rem] p-7 md:p-8"
              >
                <p className="eyebrow text-accent">Company formation</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  {route.title}
                </h3>
                <p className="mt-4 text-base font-semibold leading-7 text-foreground/92">
                  {route.bestFor}
                </p>
                <p className="mt-5 text-[1.12rem] leading-8 text-muted">
                  {route.description}
                </p>
                <div className="mt-6 space-y-3">
                  {route.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-[1.2rem] border border-foreground/10 bg-white/80 px-5 py-4 text-[1.02rem] leading-7 text-foreground"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20 [&_.eyebrow]:text-white/68 [&_.section-title]:text-white [&_.text-muted]:text-white/94">
        <div className="mx-auto grid w-full max-w-[100rem] items-start gap-5 px-6 md:px-12 lg:grid-cols-[1.1fr_0.9fr] xl:px-20">
          <article className="glass-panel h-fit rounded-[2rem] p-7 md:p-8">
            <p className="eyebrow text-accent">Comparison</p>
            <h2 className="section-title mt-4 font-semibold !text-foreground">
              Start with what the business needs to do.
            </h2>
            <div className="mt-6 space-y-4">
              {routeSignals.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.35rem] border border-foreground/10 bg-white/70 p-5"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.03em] !text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 !text-foreground/92">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-panel h-fit rounded-[2rem] p-7 md:p-8">
            <p className="eyebrow text-accent">Formation reference</p>
            <h2 className="section-title mt-4 font-semibold !text-foreground">
              Structures, zones, and offshore options.
            </h2>

            <div className="mt-6">
              <p className="eyebrow !text-muted">Structures</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {setupStructures.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-foreground/10 bg-white/70 px-4 py-2 text-sm text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="eyebrow text-muted">Popular free zones</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {freeZoneExamples.slice(0, 6).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-foreground/10 bg-white/70 px-4 py-2 text-sm text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="eyebrow text-muted">Offshore options</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {offshoreOptions.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-foreground/10 bg-white/70 px-4 py-2 text-sm text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Services"
            title="Everything you may need after setup."
            description="These services usually come immediately after the route decision, so they belong on the page."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {essentialServices.map((item) => (
              <article key={item.title} className="glass-panel rounded-[1.75rem] p-7">
                <p className="eyebrow text-warm">Essential service</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[1.12rem] leading-8 text-muted">
                  {item.description}
                </p>
                <div className="mt-5 space-y-3">
                  {item.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-[1.1rem] border border-foreground/10 bg-white/80 px-5 py-4 text-[1.02rem] leading-7 text-foreground"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20 [&_.eyebrow]:text-white/68 [&_.section-title]:text-white [&_.text-muted]:text-white/94">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Setup Process"
            title="Our business setup process."
            description="From first conversation to operating company, this is the practical flow most clients want to understand."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((item) => (
              <article key={item.step} className="glass-panel rounded-[1.75rem] p-7">
                <p className="text-sm font-semibold tracking-[0.24em] text-accent">
                  {item.step}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] !text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 !text-foreground/92">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <article className="glass-panel rounded-[2rem] p-8 md:p-10">
            <p className="eyebrow text-accent">Next Step</p>
            <h2 className="section-title mt-4 font-semibold text-foreground">
              Not sure which company setup option is right for you?
            </h2>
            <p className="mt-5 max-w-4xl text-[1.18rem] leading-9 text-muted">
              Share your business activity, ownership needs, and visa
              requirements. Zenesis will help you compare the right mainland,
              free zone, or offshore route.
            </p>
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
