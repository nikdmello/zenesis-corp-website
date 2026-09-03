import type { Metadata } from "next";
import Link from "next/link";
import { BusinessSetupRouteCard } from "@/components/business-setup-route-card";
import { ConsultationFormButton } from "@/components/consultation-button";
import { createContextualLinker } from "@/components/contextual-links";
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
      "Prepare the company and shareholder documents required for bank review.",
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
      "Prepare company, shareholder, KYC, and source-of-funds documents for account opening.",
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
    imageSrc: "/services/visa-banking-consultation.webp",
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

const routeComparisonRows = [
  {
    route: "Mainland",
    href: "/mainland",
    bestFor: "Direct UAE trade, local clients, retail, contracting, and broader onshore operations",
    marketAccess: "Direct mainland operating access, subject to the licensed activity and approvals",
    officeAndVisas: "Office or premises position and visa capacity depend on the activity and authority",
    startingCost: "AED 10,000+",
    planningSignal: "Usually the strongest fit when local operating access matters more than the lowest entry price",
  },
  {
    route: "Free zone",
    href: "/free-zones",
    bestFor: "Consulting, digital, e-commerce, international trade, and founder-led businesses",
    marketAccess: "Operates under the selected zone and activity; mainland trading arrangements need to be checked",
    officeAndVisas: "Package, flexi-desk, office, and visa allocation vary materially by free zone",
    startingCost: "AED 7,000+ without visa; AED 15,000+ with visa",
    planningSignal: "Often efficient when the zone, package, visa allocation, and banking file match the real business model",
  },
  {
    route: "Offshore",
    href: "/offshore",
    bestFor: "Holding, ownership, asset structuring, and international arrangements",
    marketAccess: "Not a substitute for a UAE operating licence and generally not used for local day-to-day trade",
    officeAndVisas: "Normally does not provide the operating office and residency pathway of an onshore company",
    startingCost: "AED 7,500-15,000 for UAE offshore routes",
    planningSignal: "Use only when the ownership or international purpose is clear and banking acceptance has been assessed",
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
      "A low setup price can lead to higher costs when the package does not cover the required visas, office, licence scope, banking documents, or renewals. Compare what the company will need after licensing before choosing a package.",
  },
  {
    question: "What do UAE business setup and company formation services usually include?",
    answer:
      "The service usually includes route selection, trade license activity guidance, document preparation, authority submissions, trade name steps, approvals, visas, bank-readiness support, renewals, and compliance follow-through. The exact scope depends on the selected route and operating plan.",
  },
  {
    question: "Is business setup in Dubai different from business setup elsewhere in the UAE?",
    answer:
      "Dubai is one of the most common setup locations, but the decision also depends on the emirate, free zone, licensing authority, activity, visa plan, office requirements, and budget. Choose the jurisdiction and structure around how the company will operate.",
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
      "Build the bank file with licence documents, shareholder records, source-of-funds evidence, a business profile, and expected transactions.",
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
  "Visa requirements and timing for founders, employees, and family sponsorship",
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
  const linkContext = createContextualLinker("/business-setup", 4);
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
        titleClassName="!max-w-[58rem] !text-[2.05rem] sm:!text-[2.5rem] md:!text-[3rem] lg:!text-[3.55rem]"
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
        className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-white py-11 md:py-14"
      >
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-16">
          <article className="max-w-[54rem]">
            <h2 className="text-[1.75rem] font-semibold leading-[1.16] tracking-[-0.02em] text-[#011735] sm:text-[1.9rem] md:text-[2.05rem]">
              Overview
            </h2>
            <div className="mt-7 max-w-[50rem] space-y-5 text-[1.06rem] leading-[1.9rem] text-[#07151b]/92 md:text-[1.1rem] md:leading-[2rem]">
              <p>
                {linkContext(
                  "Zenesis provides business setup services in Dubai and the wider UAE for founders, investors, SMEs, and international companies comparing mainland, free zone, and offshore company formation routes. The right structure depends on your activity, ownership plan, target market, visa requirements, office needs, banking expectations, and tax position. Zenesis supports businesses across a range of sectors, including technology, professional services, and other industries entering the UAE.",
                  [
                    { text: "mainland", href: "/mainland" },
                    { text: "free zone", href: "/free-zones" },
                    { text: "offshore company formation", href: "/offshore" },
                  ],
                )}
              </p>
              <p>
                {linkContext("As a business setup consultant in Dubai, Zenesis helps you compare the route before paperwork starts, prepare the documents properly, and keep company formation, licensing, visas, banking, accounting, tax, and renewals connected after incorporation.")}
              </p>
            </div>
          </article>
          <aside className="border-t-4 border-[#244ba8] bg-[#011735] px-6 py-7 text-white md:px-8 md:py-9">
            <h2 className="text-[1.45rem] font-semibold leading-tight text-white md:text-[1.7rem]">The setup route starts with five decisions</h2>
            <ol className="mt-6 divide-y divide-white/14 border-y border-white/14">
              {[
                ["01", "Activity", "What the company will actually sell or deliver."],
                ["02", "Market", "Whether clients are in the UAE, abroad, or both."],
                ["03", "People", "Who needs ownership, residency, or employee visas."],
                ["04", "Operations", "The office, banking, and approval position required."],
                ["05", "First-year cost", "Setup fees plus the obligations that follow incorporation."],
              ].map(([number, title, description]) => (
                <li key={number} className="grid grid-cols-[2.5rem_6rem_1fr] gap-3 py-4">
                  <span className="text-sm font-semibold text-[#ead5aa]">{number}</span>
                  <strong className="text-[0.96rem] font-semibold text-white">{title}</strong>
                  <span className="text-[0.9rem] leading-6 text-white/68">{description}</span>
                </li>
              ))}
            </ol>
            <Link href="/business-setup-cost-dubai" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ead5aa] hover:text-white">
              Compare starting prices <span aria-hidden="true">→</span>
            </Link>
          </aside>
          </div>

        </div>
      </section>

      <section id="how-zenesis-helps" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#011735] py-16 md:py-20 [&_.eyebrow]:text-white/68 [&_.section-title]:text-white [&_.text-muted]:text-white/94">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Why Zenesis"
            title="How Zenesis helps"
            description="Zenesis plans the setup route alongside documents, visas, banking, tax, and renewals from the start."
          />

          <div className="balanced-editorial-grid balanced-editorial-grid-3 mt-10 grid border-y border-white/18 md:grid-cols-2 xl:grid-cols-3">
            {setupServiceCoverage.map((item, index) => (
              <article
                key={item.title}
                className="border-b border-white/18 py-7 text-white"
              >
                <span className="text-sm font-semibold text-[#ead5aa]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-[1.1rem] font-semibold leading-tight text-white md:text-[1.24rem]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[1.04rem] leading-8 text-white/76">
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
            <article className="rounded-lg border border-[#d8d0c2] bg-[#f8f5ef] p-7 text-[#011735] shadow-[0_12px_30px_rgba(17,35,42,0.07)] md:p-8">
              <p className="text-sm font-semibold text-[#8d7453]">
                Direct Zenesis support
              </p>
              <h3 className="mt-4 text-[1.45rem] font-semibold tracking-[-0.025em]">
                Ajman and Ras Al Khaimah
              </h3>
              <p className="mt-4 text-[1.04rem] leading-8 text-[#011735]/84">
                Zenesis acts as an agent in Ajman and Ras Al Khaimah and can support the
                relevant setup route directly.
              </p>
            </article>

            <article className="rounded-lg border border-[#d8d0c2] bg-[#011735] p-7 text-white shadow-[0_14px_34px_rgba(17,35,42,0.14)] md:p-8">
              <p className="text-sm font-semibold text-[#ead5aa]">
                Partner supported routes
              </p>
              <h3 className="mt-4 text-[1.45rem] font-semibold tracking-[-0.025em] text-white">
                Abu Dhabi, ADGM, and Jebel Ali
              </h3>
              <p className="mt-4 text-[1.04rem] leading-8 text-white/84">
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
            <h2 className="text-[1.75rem] font-semibold leading-[1.16] text-[#011735] sm:text-[1.9rem] md:text-[2.05rem]">
              Business setup for SME businesses
            </h2>
            <div className="mt-6 space-y-5 text-[1.04rem] leading-8 text-[#07151b]/88 md:text-[1.06rem]">
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
              <h3 className="text-[1.25rem] font-semibold text-[#011735]">Operating and ownership details</h3>
              <ul className="mt-5 divide-y divide-[#e4dbce] border-y border-[#e4dbce]">
                {readinessChecks.map((item) => (
                  <li key={item} className="py-4 text-[1rem] font-medium leading-7 text-[#011735]/84">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="border-t border-[#d8d0c2] pt-6">
              <h3 className="text-[1.25rem] font-semibold text-[#011735]">Documents usually checked early</h3>
              <ul className="mt-5 divide-y divide-[#e4dbce] border-y border-[#e4dbce]">
                {formationDocuments.map((item) => (
                  <li key={item} className="py-4 text-[1rem] font-medium leading-7 text-[#011735]/84">
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

      <section id="route-comparison" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#011735] py-16 md:py-20 [&_.eyebrow]:text-white/68 [&_.section-title]:text-white [&_.text-muted]:text-white/94">
        <div className="mx-auto grid w-full max-w-[100rem] items-stretch gap-5 px-6 md:px-12 lg:grid-cols-2 xl:px-20">
          <article className="flex h-full min-w-0 flex-col rounded-lg border border-[#d8d0c2] bg-white p-7 text-[#011735] shadow-[0_10px_30px_rgba(17,35,42,0.1)] md:p-8 lg:col-span-2">
            <h2 className="section-title mt-5 font-semibold !text-foreground">
              Mainland, free zone, or offshore?
            </h2>
            <p className="mt-4 max-w-3xl text-[1.08rem] font-medium leading-8 !text-foreground/90">
              Compare the operating fit first. The lowest advertised fee is not useful if the route cannot support the activity, clients, visas, office, or bank application.
            </p>
            <div className="mt-7 overflow-x-auto border-y border-[#d8d0c2]">
              <table className="w-full min-w-[74rem] border-collapse text-left">
                <thead className="bg-[#f3f7ff]">
                  <tr>
                    {['Route', 'Best suited to', 'Market access', 'Office and visas', 'Zenesis starting price', 'Decision signal'].map((header) => (
                      <th key={header} className="px-4 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.04em] text-[#244ba8]">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e4dbce]">
                  {routeComparisonRows.map((item) => (
                    <tr key={item.route} className="align-top even:bg-[#f8f6f1]">
                      <td className="px-4 py-5">
                        <Link href={item.href} className="font-semibold text-[#244ba8] underline decoration-[#244ba8]/30 underline-offset-4">
                          {item.route}
                        </Link>
                      </td>
                      <td className="px-4 py-5 text-[0.92rem] leading-6">{item.bestFor}</td>
                      <td className="px-4 py-5 text-[0.92rem] leading-6">{item.marketAccess}</td>
                      <td className="px-4 py-5 text-[0.92rem] leading-6">{item.officeAndVisas}</td>
                      <td className="px-4 py-5 text-[0.92rem] font-semibold leading-6">{item.startingCost}</td>
                      <td className="px-4 py-5 text-[0.92rem] leading-6">{item.planningSignal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-[0.94rem] leading-7 text-[#07151b]/72">
              Starting prices are indicative and were last reviewed on August 4, 2026. Final cost and timing depend on the activity, jurisdiction, approvals, office, visas, government fees, and document readiness.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <ConsultationFormButton
                label="Request a written route recommendation"
                presetEnquiry="I would like a written recommendation comparing mainland, free zone, and offshore options for my business."
                className="inline-flex min-h-12 items-center justify-center bg-[#011735] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#244ba8]"
              />
              <Link href="/business-setup-cost-dubai" className="text-sm font-semibold text-[#244ba8] underline decoration-[#244ba8]/30 underline-offset-4">
                Review the full cost guide
              </Link>
            </div>
          </article>

          <article className="flex h-full flex-col rounded-lg border border-[#d8d0c2] bg-white p-7 text-[#011735] shadow-[0_10px_30px_rgba(17,35,42,0.1)] md:p-8">
            <h2 className="section-title mt-5 font-semibold !text-foreground">
              Quick route signals
            </h2>
            <div className="mt-7 grid flex-1 grid-rows-3 divide-y divide-[#d8d0c2] border-y border-[#d8d0c2]">
              {routeComparisonRows.map((item, index) => (
                <Link
                  key={item.route}
                  href={item.href}
                  className="group grid content-center gap-3 py-5 md:grid-cols-[2.5rem_1fr_auto] md:items-start"
                >
                  <span className="text-sm font-semibold text-[#8d7453]">0{index + 1}</span>
                  <span>
                    <strong className="block text-[1.08rem] font-semibold text-[#011735] transition-colors group-hover:text-[#244ba8]">
                      {item.route}
                    </strong>
                    <span className="mt-2 block text-[0.96rem] leading-7 text-[#07151b]/78">
                      {item.planningSignal}
                    </span>
                  </span>
                  <span aria-hidden="true" className="hidden text-lg text-[#8d7453] group-hover:translate-x-1 md:inline-flex">
                    &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </article>

          <article className="h-full rounded-lg border border-[#d8d0c2] bg-white p-7 text-[#011735] shadow-[0_10px_30px_rgba(17,35,42,0.1)] md:p-8">
            <h2 className="section-title mt-5 font-semibold !text-foreground">
              Route reference
            </h2>
            <div className="mt-7 divide-y divide-[#d8d0c2] border-y border-[#d8d0c2]">
              <div className="py-5">
                <h3 className="text-base font-semibold text-[#011735]">
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
                <h3 className="text-base font-semibold text-[#011735]">
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
                <h3 className="text-base font-semibold text-[#011735]">
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
            description="The process runs from the first consultation through licensing, banking, visas, and ongoing compliance."
          />

          <div className="balanced-editorial-grid balanced-editorial-grid-3 mt-10 grid border-y-2 border-[#8d7453]/45 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((item) => (
              <article key={item.step} className="relative border-b border-[#cfc5b7] py-7">
                <div className="inline-flex h-10 w-10 items-center justify-center border border-[#8d7453]/30 bg-white text-[0.86rem] font-semibold text-[#8d7453]">
                  {item.step}
                </div>
                <h3 className="mt-5 text-[1.24rem] font-semibold leading-tight text-foreground md:text-[1.3rem]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[1.04rem] leading-8 text-foreground/76">
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
