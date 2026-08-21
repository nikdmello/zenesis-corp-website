import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BusinessSetupRouteCard } from "@/components/business-setup-route-card";
import { JsonLd } from "@/components/json-ld";
import { PageGuideLayout } from "@/components/page-guide-layout";
import { PageSectionNavMobile } from "@/components/page-section-nav";
import { ReadingProgress } from "@/components/reading-progress";
import { ServiceAnswerSection } from "@/components/service-answer-section";
import { ServiceCredibilityPanel } from "@/components/service-credibility-panel";
import { ServiceSubpageLinks } from "@/components/service-subpage-links";
import { PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
import { versionedAssetPath } from "@/lib/asset-paths";
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
    imageSrc: versionedAssetPath("/services/mainland.webp"),
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
    imageSrc: versionedAssetPath("/services/freezone.webp"),
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
    imageSrc: versionedAssetPath("/services/offshore.webp"),
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
    imageSrc: "/services/document-attestation.webp",
    imageAlt: "Document attestation support for UAE business requirements",
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
    imageSrc: "/services/banking-support.webp",
    imageAlt: "Business banking and account opening support in the UAE",
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
    imageSrc: "/services/company-visas.webp",
    imageAlt: "UAE company visa support for founders and employees",
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
    imageSrc: "/services/visa-and-banking.webp",
    imageAlt: "Residency and business banking consultation in Dubai",
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
    href: "/mainland",
    imageSrc: versionedAssetPath("/services/mainland.webp"),
    imageAlt: "Mainland company setup consultation in Dubai",
    description:
      "you need local UAE market access, local clients, or a broader operating scope inside the country.",
  },
  {
    title: "Choose free zone if...",
    href: "/free-zones",
    imageSrc: versionedAssetPath("/services/freezone.webp"),
    imageAlt: "Free zone company setup consultation in Dubai",
    description:
      "you want a structured setup package, a known zone ecosystem, or a route aligned with consulting, digital, trade, or investor-led models.",
  },
  {
    title: "Choose offshore if...",
    href: "/offshore",
    imageSrc: versionedAssetPath("/services/offshore.webp"),
    imageAlt: "Offshore company setup planning in Dubai",
    description:
      "your priority is holding, structuring, or international use cases that do not depend on local day-to-day UAE operations.",
  },
] as const;

const businessSetupPageLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#how-zenesis-helps", label: "How Zenesis helps" },
  { href: "#jurisdiction-support", label: "Jurisdiction support" },
  { href: "#setup-routes", label: "Setup routes" },
  { href: "#sme-business-setup", label: "SME setup" },
  { href: "#before-the-quote", label: "Before the quote" },
  { href: "#planning-tools", label: "Planning tools" },
  { href: "#route-comparison", label: "Route comparison" },
  { href: "#direct-answers", label: "Direct answers" },
  { href: "#process", label: "Process" },
  { href: "#primary-sources", label: "Primary sources" },
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
    question: "What does Zenesis help decide before company setup starts?",
    answer:
      "Zenesis helps founders choose the right UAE setup route before filing begins: mainland, free zone, or offshore. The recommendation is based on activity, ownership, visa needs, banking expectations, office requirements, cost, and how the company needs to operate after incorporation.",
  },
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
  {
    question: "What do UAE business setup and company formation services usually include?",
    answer:
      "The service usually includes route selection, trade license activity guidance, document preparation, authority submissions, trade name steps, approvals, visas, bank-readiness support, renewals, and compliance follow-through. The exact scope depends on the selected route and operating plan.",
  },
  {
    question: "Is business setup in Dubai different from business setup elsewhere in the UAE?",
    answer:
      "Dubai is one of the most common setup locations, but the right route can also depend on the emirate, free zone, authority, activity, visa plan, office needs, and cost position. The better choice is the jurisdiction and structure that fit how the company will operate.",
  },
  {
    question: "Can foreigners own a company in Dubai?",
    answer:
      "Foreign ownership is available across many mainland activities and is a common feature of free zone structures. Some strategic or regulated activities follow specific rules, so the exact activity and authority should be checked before filing.",
  },
  {
    question: "Can Zenesis support the company after formation?",
    answer:
      "Yes. Zenesis supports company visas, banking preparation, bookkeeping, VAT, corporate tax, renewals, amendments, document attestation, and other follow-through work where needed.",
  },
  {
    question: "Can Zenesis help with an Abu Dhabi, ADGM, or Jebel Ali company?",
    answer:
      "Yes. Zenesis can review the proposed activity, ownership, visa, and operating requirements before referring or coordinating with an appropriately licensed consultant. Zenesis does not act directly as an agent in Abu Dhabi, ADGM, or Jebel Ali.",
  },
  {
    question: "Is business setup different for a small or medium-sized business?",
    answer:
      "The core process is the same, but SME-scale setups can differ in visa allocation, activity scope, and route selection depending on the business. Zenesis sizes the structure to the business rather than defaulting to a general enterprise package.",
  },
] as const;

const setupServiceCoverage = [
  {
    title: "Company formation route",
    description:
      "Compare mainland, free zone, and offshore structures based on market access, ownership, visas, office needs, banking, and the activity you plan to run.",
  },
  {
    title: "Licensing and filings",
    description:
      "Prepare trade name options, activity selection, application forms, shareholder documents, authority submissions, and approval follow-up.",
  },
  {
    title: "Visa and residency sequence",
    description:
      "Plan founder and employee visas, establishment steps, Emirates ID, medical, insurance, and family sponsorship needs around the company setup.",
  },
  {
    title: "Banking readiness",
    description:
      "Build a cleaner bank-ready file with license documents, shareholder records, source-of-funds context, business model notes, and transaction expectations.",
  },
  {
    title: "Tax and accounting setup",
    description:
      "Connect the new company to bookkeeping, VAT, corporate tax registration, corporate tax filing, records, and recurring compliance work.",
  },
  {
    title: "Renewals and changes",
    description:
      "Keep the structure supported after setup through renewals, amendments, document updates, shareholder changes, and ongoing corporate service work.",
  },
] as const;

const readinessChecks = [
  "Business activity and whether local UAE, free zone, international, or holding use is expected",
  "Shareholder structure, passport details, manager role, and any overseas company documents",
  "Visa needs for founders, employees, family sponsorship, and practical timing",
  "Banking expectations, source-of-funds context, expected currencies, and likely transaction flow",
  "First-year budget, renewal expectations, office needs, tax registration, and bookkeeping readiness",
] as const;

const formationDocuments = [
  "Passport copies and basic shareholder details for each owner or manager involved",
  "Proposed business activities, trade name options, and the expected operating model",
  "Visa, office, and banking expectations so the right authority or free zone can be checked",
  "Corporate documents, board resolutions, POAs, or attestations where a parent company or overseas shareholder is involved",
] as const;

const decisionResources = [
  {
    label: "General trading licence",
    href: "/general-trading-license-dubai",
    description:
      "Plan the activity scope, jurisdiction, approvals, customs position, banking, and post-licence requirements for a trading company.",
  },
  {
    label: "Business setup pricing",
    href: "/business-setup-cost-dubai",
    description:
      "Compare Zenesis starting prices for freelance, free zone, and mainland setup routes.",
  },
  {
    label: "Mainland vs free zone",
    href: "/mainland-vs-free-zone-dubai",
    description:
      "Compare market access, ownership, visas, office needs, banking, and cost tradeoffs.",
  },
  {
    label: "Offshore options",
    href: "/offshore",
    description:
      "Compare Ajman, RAK, Jebel Ali, BVI, Nevis, Mauritius, Seychelles, and Hong Kong for holding, ownership, and international structures.",
  },
] as const;

export const metadata: Metadata = toMetadata(
  legacyRouteMeta.businessSetup,
  "/business-setup",
);

export default function BusinessSetupPage() {
  const pageSchemas = [
    buildServiceSchema({
      title: "Business setup services in Dubai and UAE",
      description: legacyRouteMeta.businessSetup.description,
      path: "/business-setup",
    }),
    buildBreadcrumbSchema([
      { name: "Home", url: getAbsoluteUrl("/") },
      { name: "Business setup", url: getAbsoluteUrl("/business-setup") },
    ]),
    buildFaqSchema(directAnswers),
  ];

  return (
    <SiteShell currentPath="/business-setup">
      <ReadingProgress />
      {pageSchemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <PageIntro
        showBottomBorder={false}
        breadcrumb={[
          { label: "Services", href: "/#services" },
          { label: "Business setup" },
        ]}
        title="Business setup in Dubai"
        titleClassName="!max-w-[58rem] !text-[1.72rem] sm:!text-[2.65rem] md:!text-[3.25rem] lg:!text-[4.15rem]"
        description="Company formation services for mainland, free zone, and offshore routes, with licensing, visas, banking, tax, renewals, and compliance planned around how the business will operate."
        backgroundImageSrc={versionedAssetPath("/services/business-setup.webp")}
        backgroundImageAlt="Business leader arriving in Jumeirah Lake Towers for UAE company setup"
        backgroundImagePosition="!object-[58%_center]"
        backgroundImageMode="ambient"
      />

      <PageSectionNavMobile items={businessSetupPageLinks} />
      <PageGuideLayout items={businessSetupPageLinks} credibilityPath="/business-setup">

      <section
        id="overview"
        className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-white py-14 md:py-18"
      >
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <article className="max-w-[54rem]">
            <h2 className="text-[1.75rem] font-semibold leading-[1.16] tracking-[-0.02em] text-[#11232a] sm:text-[1.9rem] md:text-[2.05rem]">
              Overview
            </h2>
            <div className="mt-7 max-w-[50rem] space-y-5 text-[1.12rem] leading-[2.08rem] text-[#07151b]/92 md:text-[1.18rem] md:leading-[2.2rem]">
              <p>
                Zenesis provides business setup services in Dubai and the wider
                UAE for founders, investors, SMEs, and international companies
                comparing mainland, free zone, and offshore company formation
                routes. The right structure depends on your activity, ownership
                plan, target market, visa requirements, office needs, banking
                expectations, and tax position. Zenesis supports businesses across
                a range of sectors, including technology, professional services,
                and other industries entering the UAE.
              </p>
              <p>
                As a business setup consultant in Dubai, Zenesis helps you compare
                the route before paperwork starts, prepare the documents properly,
                and keep company formation, licensing, visas, banking, accounting,
                tax, and renewals connected after incorporation.
              </p>
            </div>
            <div className="mt-9 border-t border-[#e4dbce] pt-8">
              <h3 className="mb-5 text-base font-semibold text-[#11232a]">
                Core services
              </h3>
              <ServiceSubpageLinks
                items={setupRoutes.map((route) => ({
                  label: route.title,
                  href: route.href,
                  description: route.bestFor,
                }))}
                columnsClassName="sm:grid-cols-2 lg:grid-cols-3"
                variant="compact"
              />
            </div>
          </article>
        </div>
      </section>

      <section id="how-zenesis-helps" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#11232a] py-16 md:py-20 [&_.eyebrow]:text-white/68 [&_.section-title]:text-white [&_.text-muted]:text-white/94">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Why Zenesis"
            title="How Zenesis helps"
            description="The useful service is not only licence filing. Zenesis connects the route, documents, visas, banking, tax, and renewal position from the start."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {setupServiceCoverage.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#d8d0c2] bg-white p-6 text-[#11232a] shadow-[0_10px_28px_rgba(17,35,42,0.07)]"
              >
                <h3 className="text-[1.18rem] font-semibold leading-tight text-foreground md:text-[1.24rem]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[1.12rem] leading-8 text-foreground/92">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="jurisdiction-support"
        className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-white py-16 md:py-20"
      >
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Delivery model"
            title="Direct and partner supported setup routes"
            description="The way Zenesis supports an application depends on the jurisdiction. We make that delivery model clear before the setup process begins."
          />

          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            <article className="rounded-lg border border-[#d8d0c2] bg-[#f8f5ef] p-7 text-[#11232a] shadow-[0_12px_30px_rgba(17,35,42,0.07)] md:p-8">
              <p className="text-sm font-semibold text-[#8d7453]">
                Direct Zenesis support
              </p>
              <h3 className="mt-4 text-[1.45rem] font-semibold tracking-[-0.025em]">
                Ajman and Ras Al Khaimah
              </h3>
              <p className="mt-4 text-[1.08rem] leading-8 text-[#11232a]/84">
                Zenesis acts as an agent in Ajman and Ras Al Khaimah and can support the
                relevant setup route directly.
              </p>
            </article>

            <article className="rounded-lg border border-[#d8d0c2] bg-[#11232a] p-7 text-white shadow-[0_14px_34px_rgba(17,35,42,0.14)] md:p-8">
              <p className="text-sm font-semibold text-[#ead5aa]">
                Partner supported routes
              </p>
              <h3 className="mt-4 text-[1.45rem] font-semibold tracking-[-0.025em] text-white">
                Abu Dhabi, ADGM, and Jebel Ali
              </h3>
              <p className="mt-4 text-[1.08rem] leading-8 text-white/84">
                Zenesis can assess the requirement and refer or coordinate with an
                appropriately licensed consultant for the relevant jurisdiction.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="setup-routes" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Service lines"
            title="Core services"
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

          <article
            id="sme-business-setup"
            className="mt-12 max-w-[54rem] scroll-mt-28 border-t border-[#d8d0c2] pt-10"
          >
            <h2 className="text-[1.75rem] font-semibold leading-[1.16] text-[#11232a] sm:text-[1.9rem] md:text-[2.05rem]">
              Business setup for SME businesses
            </h2>
            <div className="mt-6 space-y-5 text-[1.08rem] leading-8 text-[#07151b]/88 md:text-[1.12rem]">
              <p>
                Setting up at SME scale can look a little different from a large
                corporate setup. Depending on the business, it may involve a smaller
                initial visa allocation, an activity scope suited to one core activity
                or a small number of related activities, and a route chosen partly for
                cost efficiency without giving up what the business needs to operate.
              </p>
              <p>
                Founders setting up at SME scale should decide early how many visas the
                company needs in year one, whether the planned activity fits a narrower
                licence or needs a broader scope, and whether a free zone package or
                mainland licence better matches the target clients and hiring plan. See{" "}
                <Link className="font-semibold text-[#244ba8] underline decoration-[#244ba8]/35 underline-offset-4" href="/business-setup-cost-dubai">
                  business setup pricing
                </Link>{" "}
                for starting costs by route, and{" "}
                <Link className="font-semibold text-[#244ba8] underline decoration-[#244ba8]/35 underline-offset-4" href="/insights/business-setup-mistakes-dubai">
                  avoid the most common setup mistakes
                </Link>{" "}
                before filing.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="before-the-quote" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Readiness check"
            title="What to clarify before the quote"
            description="A useful quote starts with the operating details that affect the route, documents, visas, banking, and total first-year position."
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <article className="border-t border-[#d8d0c2] pt-6">
              <h3 className="text-[1.25rem] font-semibold text-[#11232a]">Operating and ownership details</h3>
              <ul className="mt-5 divide-y divide-[#e4dbce] border-y border-[#e4dbce]">
                {readinessChecks.map((item) => (
                  <li key={item} className="py-4 text-[1rem] font-medium leading-7 text-[#11232a]/84">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="border-t border-[#d8d0c2] pt-6">
              <h3 className="text-[1.25rem] font-semibold text-[#11232a]">Documents usually checked early</h3>
              <ul className="mt-5 divide-y divide-[#e4dbce] border-y border-[#e4dbce]">
                {formationDocuments.map((item) => (
                  <li key={item} className="py-4 text-[1rem] font-medium leading-7 text-[#11232a]/84">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="planning-tools" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Planning tools"
            title="Compare route, cost, and fit"
            description="Use these pages when you are deciding whether to prioritize cost, mainland access, free zone flexibility, visas, or banking readiness."
          />
          <div className="mt-7">
            <ServiceSubpageLinks items={decisionResources} columnsClassName="md:grid-cols-2 xl:grid-cols-4" />
          </div>
        </div>
      </section>

      <section id="route-comparison" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#11232a] py-16 md:py-20 [&_.eyebrow]:text-white/68 [&_.section-title]:text-white [&_.text-muted]:text-white/94">
        <div className="mx-auto grid w-full max-w-[100rem] items-stretch gap-5 px-6 md:px-12 lg:grid-cols-2 xl:px-20">
          <article className="flex h-full flex-col rounded-lg border border-[#d8d0c2] bg-white p-7 text-[#11232a] shadow-[0_10px_30px_rgba(17,35,42,0.1)] md:p-8">
            <h2 className="section-title mt-5 font-semibold !text-foreground">
              Route comparison
            </h2>
            <p className="mt-4 max-w-3xl text-[1.14rem] font-medium leading-8 !text-foreground/90">
              Use these quick route signals to narrow the setup path before you compare licenses,
              visas, banking, and ongoing compliance.
            </p>
            <div className="mt-7 grid flex-1 grid-rows-3 divide-y divide-[#d8d0c2] border-y border-[#d8d0c2]">
              {routeSignals.map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group grid content-center gap-4 py-4 md:grid-cols-[5.75rem_1fr_auto] md:items-center"
                >
                  <div className="relative h-[4.5rem] w-full overflow-hidden rounded-md border border-[#d8d0c2] bg-[#eee7dc] md:w-[5.75rem]">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      sizes="92px"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/92 text-[0.72rem] font-semibold text-[#8d7453] shadow-sm">
                      0{index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[1.14rem] font-semibold tracking-[-0.03em] !text-foreground transition-colors group-hover:!text-[#244ba8] md:text-[1.18rem]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[1.08rem] font-medium leading-7 !text-foreground/92">
                      {item.description}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="hidden text-lg text-[#8d7453] transition-transform duration-300 group-hover:translate-x-1 md:inline-flex"
                  >
                    &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </article>

          <article className="h-full rounded-lg border border-[#d8d0c2] bg-white p-7 text-[#11232a] shadow-[0_10px_30px_rgba(17,35,42,0.1)] md:p-8">
            <h2 className="section-title mt-5 font-semibold !text-foreground">
              Route reference
            </h2>
            <div className="mt-7 divide-y divide-[#d8d0c2] border-y border-[#d8d0c2]">
              <div className="py-5">
                <h3 className="text-base font-semibold text-[#11232a]">
                  Structures
                </h3>
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

              <div className="py-5">
                <h3 className="text-base font-semibold text-[#11232a]">
                  Popular free zones
                </h3>
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

              <div className="py-5">
                <h3 className="text-base font-semibold text-[#11232a]">
                  Offshore options
                </h3>
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
            eyebrow="Follow-through"
            title="After setup"
            description="Formation is only the start. These are the follow-through services businesses usually need once the company is in place."
          />

          <div className="mt-6 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {essentialServices.map((service) => (
              <BusinessSetupRouteCard
                key={service.title}
                title={service.title}
                href={service.href}
                imageSrc={versionedAssetPath(service.imageSrc)}
                imageAlt={service.imageAlt}
                frontSummary={service.description}
                points={service.points}
                ctaLabel="Open service"
                variant="essential"
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceAnswerSection
        title="Direct answers"
        description="Short answers to the questions that usually shape the setup route before paperwork begins."
        items={directAnswers}
      />

      <section id="process" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Working rhythm"
            title="Process"
            description="A practical sequence from the first consultation through licensing, banking, visas, and ongoing compliance support."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((item) => (
              <article key={item.step} className="rounded-lg border border-[#d8d0c2] bg-white p-8 text-[#11232a] shadow-[0_10px_28px_rgba(17,35,42,0.08)] md:p-9">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#8d7453]/18 bg-[#8d7453]/10 text-[0.95rem] font-semibold tracking-[0.08em] text-[#8d7453]">
                  {item.step}
                </div>
                <h3 className="mt-4 text-[1.24rem] font-semibold leading-tight text-foreground md:text-[1.3rem]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[1.12rem] leading-8 text-foreground/92">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      <ServiceCredibilityPanel path="/business-setup" variant="sources" />
      </PageGuideLayout>
    </SiteShell>
  );
}
