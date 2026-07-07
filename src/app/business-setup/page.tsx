import type { Metadata } from "next";
import Image from "next/image";
import { BusinessSetupCostTable } from "@/components/business-setup-cost-table";
import { BusinessSetupPricingFaq } from "@/components/business-setup-pricing-faq";
import { BusinessSetupRouteCard } from "@/components/business-setup-route-card";
import { JsonLd } from "@/components/json-ld";
import { ServiceAnswerSection } from "@/components/service-answer-section";
import { ServiceSubpageLinks } from "@/components/service-subpage-links";
import { CardAccent, PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
import { TalkToZenesisPanel } from "@/components/talk-to-zenesis-panel";
import { versionedAssetPath } from "@/lib/asset-paths";
import {
  businessSetupPricingFaqs,
  businessSetupPricingDisclaimer,
  businessSetupStartingPrices,
} from "@/lib/business-setup-pricing";
import { legacyRouteMeta, toMetadata } from "@/lib/legacy-meta";
import {
  buildFaqSchema,
  buildBreadcrumbSchema,
  buildServiceSchema,
  getAbsoluteUrl,
} from "@/lib/seo";
import {
  freeZoneExamples,
  offshoreOptions,
  setupStructures,
} from "@/lib/site-content";

const setupRoutes = [
  {
    title: "Mainland / Onshore Setup",
    href: "/mainland",
    imageSrc: versionedAssetPath("/mainland.webp"),
    imageAlt: "Mainland company setup consultation in a Dubai office",
    imageWidth: 1248,
    imageHeight: 528,
    bestFor:
      "Best for businesses that want to operate directly in the UAE market and work with local clients.",
    description:
      "Best suited to consultancies, trading businesses, professional services, retail, and companies that need broader UAE market access.",
    points: [
      "Choose the right business activity and trade name before filing the application.",
      "Handle licensing, supporting documents, and authority approvals properly.",
      "Plan office requirements, visas, renewals, and the compliance work that follows setup.",
    ],
  },
  {
    title: "Free Zone Setup",
    href: "/free-zones",
    imageSrc: versionedAssetPath("/freezone.webp"),
    imageAlt: "Free zone company setup consultation in a JLT office",
    imageWidth: 1328,
    imageHeight: 528,
    bestFor:
      "Best for entrepreneurs, consultants, e-commerce, international trade, media, and tech businesses.",
    description:
      "Free zone routes are often chosen for flexible setup packages, international positioning, and easier alignment with specific business activities.",
    points: [
      "Compare the right free zones instead of choosing only on headline cost.",
      "Match the activity, package, and license application to how the business will operate.",
      "Plan visas, renewals, and banking documents before they become a delay after setup.",
    ],
  },
  {
    title: "Offshore Setup",
    href: "/offshore",
    imageSrc: versionedAssetPath("/offshore.webp"),
    imageAlt: "Offshore company setup planning discussion in Dubai",
    imageWidth: 1280,
    imageHeight: 850,
    bestFor:
      "Best for international structuring, asset holding, and companies that do not need to trade directly inside the UAE market.",
    description:
      "Offshore structures are typically used for ownership, international arrangements, and holding needs rather than local operating activity.",
    points: [
      "Choose the offshore jurisdiction that fits the ownership objective behind the structure.",
      "Handle incorporation documents and the compliance paperwork tied to the setup.",
      "Get support on banking where the structure and use case make that practical.",
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
      "Prepare personal documents such as birth, marriage, divorce, police clearance, and death certificates for UAE use.",
      "Handle educational records including degrees, diplomas, transcripts, and training certificates.",
      "Process commercial documents such as incorporation records, board resolutions, POAs, invoices, and MOA or AOA papers.",
    ],
  },
  {
    title: "Business Banking",
    href: "/open-a-bank-account-easily",
    description:
      "Business owners usually need banking support soon after choosing the formation route, especially when KYC and documentation requirements affect timing.",
    points: [
      "Prepare for corporate and personal account opening with a cleaner document pack.",
      "Handle KYC and compliance documentation before the bank asks for multiple revisions.",
      "Support mainland, free zone, and offshore structures with the right banking approach.",
    ],
  },
  {
    title: "Company Visa",
    href: "/uae-company-visa",
    description:
      "A company visa is usually one of the first follow-on needs after setup for founders and employees who need to live and work in the UAE.",
    points: [
      "Support founders and employees who need legal UAE residency to start operating.",
      "Coordinate Emirates ID, health insurance, and family sponsorship follow-through.",
      "Put renewable residency in place while the company becomes operational.",
    ],
  },
  {
    title: "Visa and Banking",
    href: "/visa-and-banking",
    description:
      "Residency and banking support matters when founders, investors, and teams need visas or account opening tied to business setup.",
    points: [
      "Plan Golden Visa, company visa, and family residency needs in the right sequence.",
      "Prepare banking and KYC documentation alongside the company structure.",
      "Reduce delays by connecting residency and banking steps to the setup timeline.",
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

const directAnswers = [
  {
    question: "How do you usually choose between mainland, free zone, and offshore?",
    answer:
      "Start with how the business will operate after incorporation. Mainland usually fits businesses that need direct UAE market access. Free zone often fits founder-led, consulting, digital, trade, or international models. Offshore is usually for holding, ownership, or international structuring rather than day-to-day UAE operations.",
  },
  {
    question: "What usually needs to be decided before filing starts?",
    answer:
      "The business activity, ownership structure, trade name, visa plan, office position, and likely banking route should all be clear early. Those decisions affect which authority or zone makes sense and what documentation the setup will actually require.",
  },
  {
    question: "What do founders most often underestimate after incorporation?",
    answer:
      "Most delays happen after the license is issued, not before. Banking, company visas, Emirates ID steps, renewals, attestation, tax registrations, and record-keeping work all need to be sequenced properly if the company is meant to start operating quickly.",
  },
  {
    question: "When does the cheapest setup route stop being the best route?",
    answer:
      "A lower headline setup cost often stops looking attractive when the route creates problems later with visas, office rules, banking expectations, license scope, or renewals. The better question is whether the route still fits once the company starts operating, not just whether the license is issued quickly.",
  },
] as const;

export const metadata: Metadata = toMetadata(
  legacyRouteMeta.businessSetup,
  "/business-setup",
);

export default function BusinessSetupPage() {
  const pageSchemas = [
    buildServiceSchema({
      title: "Business setup",
      description: legacyRouteMeta.businessSetup.description,
      path: "/business-setup",
      offers: businessSetupStartingPrices,
    }),
    buildBreadcrumbSchema([
      { name: "Home", url: getAbsoluteUrl("/") },
      { name: "Business setup", url: getAbsoluteUrl("/business-setup") },
    ]),
    buildFaqSchema([...directAnswers, ...businessSetupPricingFaqs]),
  ];

  return (
    <SiteShell currentPath="/business-setup">
      {pageSchemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <PageIntro
        breadcrumb={[
          { label: "Services", href: "/#services" },
          { label: "Business setup" },
        ]}
        title="Business setup"
        description="Mainland, free zone, and offshore support for founders who need the right structure before licensing, visas, and banking begin."
        backgroundImageSrc="/backgrounds/business-setup-bg.webp"
        backgroundImageAlt="Zenesis Business Setup page background"
        backgroundImagePosition="!object-[100%_100%]"
        backgroundImageMode="ambient"
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <div className="grid gap-6 xl:grid-cols-[1.06fr_0.94fr] xl:items-stretch">
            <article className="rounded-[2rem] border border-[#d8d0c2] bg-white p-8 text-[#11232a] shadow-[0_22px_70px_rgba(17,35,42,0.16)] md:p-10">
              <CardAccent />
              <h2 className="section-title font-semibold text-[#11232a]">
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

            <div className="overflow-hidden rounded-[2rem] border border-[#d8d0c2] bg-white shadow-[0_18px_56px_rgba(17,35,42,0.12)]">
              <Image
                src={versionedAssetPath("/business-setup-overview.webp")}
                alt="Zenesis founder guiding a UAE business setup consultation in a JLT office"
                width={1920}
                height={1074}
                className="block h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceAnswerSection
        dark
        title="Direct answers"
        description="Short answers to the questions that usually shape the setup route before paperwork begins."
        items={directAnswers}
      />

      <section
        id="starting-prices"
        className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20"
      >
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow=""
            title="Business setup starting prices"
            description="Clear starting points for founders comparing the cost of business setup in Dubai and the UAE before booking a consultation."
          />

          <div className="mt-8 md:mt-10">
            <BusinessSetupCostTable />
          </div>

          <p className="mt-5 max-w-5xl text-[0.98rem] font-medium leading-7 text-[#11232a]/72">
            {businessSetupPricingDisclaimer}
          </p>
        </div>
      </section>

      <BusinessSetupPricingFaq />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[100rem] gap-5 px-6 md:px-12 lg:grid-cols-2 xl:px-20">
          <article className="rounded-[2rem] border border-[#d8d0c2] bg-white p-8 text-[#11232a] shadow-[0_22px_70px_rgba(17,35,42,0.16)] md:p-10">
            <CardAccent />
            <p className="mt-5 text-[0.78rem] font-semibold uppercase tracking-[0.26em] text-[#8d7453]">
              Setup Path
            </p>
            <h2 className="section-title mt-5 font-semibold text-foreground">
              Dubai Company Formation
            </h2>
            <p className="mt-4 max-w-3xl text-[1.18rem] font-medium leading-8 text-foreground/88">
              Most enquiries start with one decision: mainland, free zone, or
              offshore. Those three routes shape licensing, visas, banking, and
              how the company operates after formation.
            </p>
            <div className="mt-6 rounded-[1.4rem] border border-[#d8d0c2] bg-white px-5 py-4 text-[1.04rem] font-medium leading-7 text-[#11232a]/84">
              Compare the operating model first, then the license, visa, banking,
              and compliance path that follows.
            </div>
            <div className="mt-6">
              <ServiceSubpageLinks
                items={setupRoutes.map((route) => ({
                  label: route.title,
                  href: route.href,
                  description: route.description,
                }))}
                columnsClassName="md:grid-cols-3"
              />
            </div>
          </article>

          <article className="rounded-[2rem] border border-[#d8d0c2] bg-white p-8 text-[#11232a] shadow-[0_22px_70px_rgba(17,35,42,0.16)] md:p-10">
            <CardAccent />
            <p className="mt-5 text-[0.78rem] font-semibold uppercase tracking-[0.26em] text-[#6f5a42]">
              Ongoing Support
            </p>
            <h2 className="section-title mt-5 font-semibold text-foreground">
              Support after formation
            </h2>
            <p className="mt-4 max-w-3xl text-[1.18rem] font-medium leading-8 text-foreground/88">
              Company setup is usually only the first step. Most clients also
              need banking, visas, attestation, and residency support once the
              structure is chosen.
            </p>
            <div className="mt-6 rounded-[1.4rem] border border-[#d8d0c2] bg-white px-5 py-4 text-[1.04rem] font-medium leading-7 text-[#11232a]/84">
              Keep the follow-through work aligned to the formation timeline so
              the company can actually start operating without avoidable delays.
            </div>
            <div className="mt-6">
              <ServiceSubpageLinks
                items={essentialServices.map((item) => ({
                  label: item.title,
                  href: item.href,
                  description: item.description,
                }))}
                columnsClassName="md:grid-cols-2"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow=""
            title="Main routes"
            description="Three common setup routes, each suited to a different operating model, ownership plan, and post-formation workflow."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {setupRoutes.map((route) => (
              <BusinessSetupRouteCard
                key={route.title}
                title={route.title}
                href={route.href}
                imageSrc={route.imageSrc}
                imageAlt={route.imageAlt}
                imageWidth={route.imageWidth}
                imageHeight={route.imageHeight}
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
          <article className="h-full rounded-[2rem] border border-[#d8d0c2] bg-white p-7 text-[#11232a] shadow-[0_20px_60px_rgba(17,35,42,0.18)] md:p-8">
            <CardAccent />
            <p className="mt-5 text-[0.78rem] font-semibold uppercase tracking-[0.26em] text-[#8d7453]">
              Comparison
            </p>
            <h2 className="section-title mt-5 font-semibold !text-foreground">
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
                  className="grid gap-4 rounded-[1.55rem] border border-[#d8d0c2] bg-white p-5 shadow-[0_12px_34px_rgba(17,35,42,0.08)] md:grid-cols-[auto_1fr]"
                >
                  <div className="flex items-start">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#8d7453]/18 bg-[#8d7453]/10 text-sm font-semibold text-[#8d7453] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
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

          <article className="h-full rounded-[2rem] border border-[#d8d0c2] bg-white p-7 text-[#11232a] shadow-[0_20px_60px_rgba(17,35,42,0.18)] md:p-8">
            <CardAccent />
            <p className="mt-5 text-[0.78rem] font-semibold uppercase tracking-[0.26em] text-[#6f5a42]">
              Formation reference
            </p>
            <h2 className="section-title mt-5 font-semibold !text-foreground">
              Route reference
            </h2>
            <div className="mt-7 grid gap-4">
              <div className="rounded-[1.45rem] border border-[#d8d0c2] bg-white p-5 shadow-[0_10px_28px_rgba(17,35,42,0.08)]">
                <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-[#8d7453]">
                  Structures
                </p>
                <ul className="mt-3 space-y-2.5 text-[1.04rem] leading-7 !text-foreground/92">
                  {setupStructures.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#8d7453]"
                      >
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.45rem] border border-[#d8d0c2] bg-white p-5 shadow-[0_10px_28px_rgba(17,35,42,0.08)]">
                <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-[#8d7453]">
                  Popular free zones
                </p>
                <ul className="mt-3 space-y-2.5 text-[1.04rem] leading-7 !text-foreground/92">
                  {freeZoneExamples.slice(0, 6).map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#8d7453]"
                      >
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.45rem] border border-[#d8d0c2] bg-white p-5 shadow-[0_10px_28px_rgba(17,35,42,0.08)]">
                <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-[#8d7453]">
                  Offshore options
                </p>
                <ul className="mt-3 space-y-2.5 text-[1.04rem] leading-7 !text-foreground/92">
                  {offshoreOptions.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#8d7453]"
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
            eyebrow=""
            title="After setup"
            description="Formation is only the start. These are the follow-through services businesses usually need once the company is in place."
          />

          <div className="mt-6 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {essentialServices.map((service) => (
              <BusinessSetupRouteCard
                key={service.title}
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
            eyebrow=""
            title="Process"
            description="A practical sequence from the first consultation through licensing, banking, visas, and ongoing compliance support."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((item) => (
              <article key={item.step} className="rounded-[1.75rem] border border-[#d8d0c2] bg-white p-8 text-[#11232a] shadow-[0_18px_50px_rgba(17,35,42,0.16)] md:p-9">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#8d7453]/18 bg-[#8d7453]/10 text-[0.95rem] font-semibold tracking-[0.08em] text-[#8d7453]">
                  {item.step}
                </div>
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
            wrapperClassName="rounded-[2rem] bg-[#11232a] p-8 text-white shadow-[0_22px_70px_rgba(17,35,42,0.12)] md:p-10"
            eyebrowClassName="eyebrow text-white/58"
            titleClassName="section-title mt-4 font-semibold text-white"
            textClassName="text-[1.22rem] font-medium leading-9 text-white/94"
            paragraphs={[
              "Share your business activity, ownership needs, and visa requirements. Zenesis will help you compare the right mainland, free zone, or offshore route.",
            ]}
            buttonClassName="inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
            imageClassName="object-cover object-[74%_center]"
          />
        </div>
      </section>
    </SiteShell>
  );
}
