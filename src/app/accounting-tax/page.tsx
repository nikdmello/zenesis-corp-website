import type { Metadata } from "next";
import { BusinessSetupRouteCard } from "@/components/business-setup-route-card";
import { createContextualLinker } from "@/components/contextual-links";
import { JsonLd } from "@/components/json-ld";
import { PageGuideLayout } from "@/components/page-guide-layout";
import { PageSectionNavMobile } from "@/components/page-section-nav";
import { ReadingProgress } from "@/components/reading-progress";
import { ServiceAnswerSection } from "@/components/service-answer-section";
import { ServiceCredibilityPanel } from "@/components/service-credibility-panel";
import { PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
import { versionedAssetPath } from "@/lib/asset-paths";
import { legacyRouteMeta, toMetadata } from "@/lib/legacy-meta";
import {
  buildFaqSchema,
  buildBreadcrumbSchema,
  buildServiceSchema,
  getAbsoluteUrl,
} from "@/lib/seo";

const accountingServices = [
  {
    title: "Corporate Tax Registration",
    href: "/corporate-tax-registration-in-the-uae",
    imageSrc: "/services/corporate-tax-registration.webp",
    imageAlt: "Corporate tax registration consultation for a UAE business",
    description:
      "Corporate tax registration is the first step for businesses that need their UAE tax setup handled correctly before filing begins.",
    points: [
      "Review whether the business should register now and what position supports that decision.",
      "Set up EmaraTax properly and complete the submission with the right documents.",
      "Explain what filing and record-keeping work starts once registration is complete.",
    ],
  },
  {
    title: "Corporate Tax Filing",
    href: "/corporate-tax-filing-services-in-the-uae",
    imageSrc: "/services/corporate-tax-filing.webp",
    imageAlt: "Corporate tax filing review for a UAE company",
    description:
      "Once registered, businesses need annual corporate tax return support, accurate calculations, and cleaner documentation around the filing process.",
    points: [
      "Prepare and file the annual return through the FTA system with cleaner support behind it.",
      "Review taxable income, deductions, and credits before the filing is submitted.",
      "Manage deadlines, documentation, and follow-through so the filing does not become a last-minute rush.",
    ],
  },
  {
    title: "VAT Registration",
    href: "/vat-registration-services-uae",
    imageSrc: "/services/vat-filing.webp",
    imageAlt: "VAT registration application support in the UAE",
    description:
      "VAT registration support connects the threshold decision and application evidence to the filing process that follows.",
    points: [
      "Assess whether mandatory or voluntary VAT registration applies.",
      "Prepare the turnover evidence, application information, and supporting documents.",
      "Set the invoicing, record-keeping, and filing rhythm after approval.",
    ],
  },
  {
    title: "VAT Filing",
    href: "/vat-filing-services-in-the-uae",
    imageSrc: "/services/vat-filing.webp",
    imageAlt: "VAT filing and reconciliation support in the UAE",
    description:
      "VAT filing support keeps recurring returns, invoice checks, reconciliations, deadlines, and payment follow-through under control.",
    points: [
      "Prepare VAT returns from sales, purchases, invoices, and the records behind them.",
      "Reconcile input and output VAT before filing so the position is clearer.",
      "Support filing periods, payment steps, and any audit-related follow-up.",
    ],
  },
  {
    title: "Bookkeeping",
    href: "/professional-bookkeeping-services-in-dubai",
    imageSrc: "/services/bookkeeping.webp",
    imageAlt: "Professional bookkeeping and financial record support in Dubai",
    description:
      "Bookkeeping keeps the business ready for VAT, corporate tax, reporting, and day-to-day financial visibility.",
    points: [
      "Keep weekly or monthly books current and reconcile the main bank activity properly.",
      "Prepare reporting and support the documentation needed for reviews or audits.",
      "Support payroll and work within QuickBooks, Zoho Books, Tally, and Excel environments.",
    ],
  },
] as const;

const whoWeHelp = [
  {
    title: "Newly formed businesses",
    description:
      "Companies that need their tax registrations, filing calendar, and record-keeping set up correctly from the start.",
  },
  {
    title: "Growing operating companies",
    description:
      "Businesses that have outgrown ad hoc spreadsheets and need steadier bookkeeping, VAT handling, and reporting discipline.",
  },
  {
    title: "Founder-led SMEs",
    description:
      "Small and mid-sized businesses that want reliable compliance support without hiring a full in-house finance team.",
  },
  {
    title: "Cross-border and group structures",
    description:
      "Businesses that need a cleaner handoff between company structure, reporting obligations, and ongoing filing support.",
  },
] as const;

const whyZenesis = [
  {
    title: "Experienced Team",
    description:
      "Support from professionals familiar with UAE business, accounting, VAT, and corporate tax workflows.",
  },
  {
    title: "Accurate Records",
    description:
      "Organized bookkeeping and reporting so your filings are based on cleaner financial data.",
  },
  {
    title: "Deadline Management",
    description:
      "Support tracking key filing and renewal timelines across the reporting cycle.",
  },
  {
    title: "Audit-Ready Documentation",
    description:
      "Structured records, invoices, reconciliations, and reports when you need them.",
  },
  {
    title: "End-to-End Support",
    description:
      "From setup to bookkeeping, VAT, corporate tax, banking, visas, and renewals.",
  },
  {
    title: "Practical Guidance",
    description:
      "Clear support on what needs to happen next, so filings, records, and follow-up decisions stay manageable.",
  },
] as const;

const workingRhythm = [
  {
    step: "01",
    title: "Review the current position",
    description:
      "Start with registrations, existing books, filing status, and any immediate compliance risks or deadline pressure.",
  },
  {
    step: "02",
    title: "Set the reporting rhythm",
    description:
      "Define what needs to happen monthly, quarterly, and annually across bookkeeping, VAT, and corporate tax.",
  },
  {
    step: "03",
    title: "Prepare and file accurately",
    description:
      "Handle the records, reconciliations, calculations, and filing work needed to keep the business current.",
  },
  {
    step: "04",
    title: "Keep the business ready",
    description:
      "Maintain clearer records and cleaner documentation so future filings, reviews, and audits are easier to manage.",
  },
] as const;

const directAnswers = [
  {
    question: "Does every UAE business need bookkeeping and tax support?",
    answer:
      "Not every business has the same filing position, but every operating business needs cleaner records than most founders expect. Bookkeeping is what keeps VAT, corporate tax, reporting, audit readiness, and management visibility from becoming reactive and error-prone later.",
  },
  {
    question: "What usually causes VAT or corporate tax problems first?",
    answer:
      "The early problems are usually weak record-keeping, rushed registrations, missing reconciliations, and unclear ownership of deadlines. By the time the filing is due, the real issue is often that the books were never kept in a way that supports the filing properly.",
  },
  {
    question: "When should a business set its reporting rhythm?",
    answer:
      "As early as possible. The cleaner approach is to define the monthly, quarterly, and annual reporting rhythm before VAT or corporate tax deadlines become urgent. That makes filings, reviews, and later audits much easier to handle.",
  },
  {
    question: "What records should stay ready at all times?",
    answer:
      "At a minimum, keep sales records, purchase records, invoices, bank reconciliations, payroll support where relevant, and the working papers behind VAT and tax calculations in order. Businesses that wait to gather these only at filing time usually create avoidable risk and delay.",
  },
] as const;

export const metadata: Metadata = toMetadata(
  legacyRouteMeta.accountingTax,
  "/accounting-tax",
);

const accountingPageLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#who-its-for", label: "Who it's for" },
  { href: "#core-services", label: "Core services" },
  { href: "#how-zenesis-helps", label: "How Zenesis helps" },
  { href: "#accounting-expertise", label: "Accounting expertise" },
  { href: "#direct-answers", label: "Direct answers" },
  { href: "#process", label: "Process" },
  { href: "#primary-sources", label: "Primary sources" },
] as const;

const accountingExperts = [
  {
    name: "Sajal Arora",
    credentials: "BCom, CA, CFA",
    role: "Director - Accountancy and Taxation",
    description:
      "More than 13 years of experience across finance, taxation, auditing, banking, treasury, costing, and project financing.",
  },
  {
    name: "Glenita D'Souza",
    credentials: "CA Intermediate (IPCC), BCom",
    role: "Accounts Manager and Compliance Officer",
    description:
      "Hands-on responsibility across management accounts, bookkeeping, VAT, corporate tax compliance, and client reporting support.",
  },
] as const;

export default function AccountingTaxPage() {
  const linkContext = createContextualLinker("/accounting-tax", 4);
  const pageSchemas = [
    buildServiceSchema({
      title: "Accounting and tax",
      description: legacyRouteMeta.accountingTax.description,
      path: "/accounting-tax",
    }),
    buildBreadcrumbSchema([
      { name: "Home", url: getAbsoluteUrl("/") },
      { name: "Accounting and tax", url: getAbsoluteUrl("/accounting-tax") },
    ]),
    buildFaqSchema(directAnswers),
  ];

  return (
    <SiteShell currentPath="/accounting-tax">
      <ReadingProgress />
      {pageSchemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <PageIntro
        showBottomBorder={false}
        breadcrumb={[
          { label: "Services", href: "/#services" },
          { label: "Accounting and tax" },
        ]}
        title="Accounting and tax"
        description="Accounting services in Dubai for UAE businesses that need reliable bookkeeping, financial reporting, VAT, corporate tax, and ongoing compliance support."
        backgroundImageSrc={versionedAssetPath("/services/accounting-and-tax.webp")}
        backgroundImageAlt="Financial professional reviewing accounting and tax records"
        backgroundImagePosition="!object-[66%_center]"
        backgroundImageMode="ambient"
      />

      <PageSectionNavMobile items={accountingPageLinks} />
      <PageGuideLayout items={accountingPageLinks} credibilityPath="/accounting-tax">

      <section id="overview" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-white py-11 md:py-14">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <article className="max-w-[54rem]">
            <h2 className="text-[1.75rem] font-semibold leading-[1.16] tracking-[-0.02em] text-[#011735] sm:text-[1.9rem] md:text-[2.05rem]">
              Overview
            </h2>
            <div className="mt-7 max-w-[50rem] space-y-5 text-[1.06rem] leading-[1.9rem] text-[#07151b]/92 md:text-[1.1rem] md:leading-[2rem]">
              <p>
                {linkContext("UAE businesses need accounting records that work for day-to-day decisions as well as VAT, corporate tax, reporting, and regulatory review. Zenesis provides accounting services in Dubai for businesses that need their books, reconciliations, reports, and filing responsibilities managed as one connected process.")}
              </p>
              <p>
                {linkContext("Whether you are newly incorporated or already operating, the team can support your day-to-day accounting and ongoing tax compliance.")}
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="who-its-for" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#011735] py-16 md:py-20 [&_.eyebrow]:text-white/68 [&_.section-title]:text-white [&_.text-muted]:text-white/94">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Who it helps"
            title="Who it's for"
            description="These are the businesses most likely to need structured help across corporate tax, VAT, bookkeeping, and reporting."
          />

          <div className="balanced-editorial-grid balanced-editorial-grid-2 mt-10 grid border-y border-white/18 md:grid-cols-2">
            {whoWeHelp.map((item, index) => (
              <article key={item.title} className="border-b border-white/18 py-7 text-white">
                <span className="text-sm font-semibold text-[#ead5aa]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-[1.1rem] font-semibold leading-tight !text-white md:text-[1.24rem]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[1.04rem] leading-8 !text-white/74">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="core-services" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Service lines"
            title="Core services"
            description="Each service line is a concrete part of the compliance and reporting stack."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {accountingServices.map((item) => (
              <BusinessSetupRouteCard
                key={item.title}
                title={item.title}
                href={item.href}
                imageSrc={versionedAssetPath(item.imageSrc)}
                imageAlt={item.imageAlt}
                frontSummary={item.description}
                points={item.points}
                ctaLabel="Open service"
                variant="essential"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="how-zenesis-helps" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#011735] py-16 md:py-20 [&_.eyebrow]:text-white/68 [&_.section-title]:text-white [&_.text-muted]:text-white/94">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Why Zenesis"
            title="How Zenesis helps"
            description="The goal is not just to file. It is to keep the business organized enough that filing, review, and future growth become easier."
          />

          <div className="balanced-editorial-grid balanced-editorial-grid-3 mt-10 grid border-y border-white/18 md:grid-cols-2 xl:grid-cols-3">
            {whyZenesis.map((item, index) => (
              <article key={item.title} className="border-b border-white/18 py-7 text-white">
                <span className="text-sm font-semibold text-[#ead5aa]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-[1.1rem] font-semibold leading-tight !text-white md:text-[1.24rem]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[1.04rem] leading-8 !text-white/74">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="accounting-expertise" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Named expertise"
            title="Accounting and tax leadership"
            description="The work is supported by named professionals whose experience covers accounting, taxation, audit, reporting, and compliance in the UAE."
          />
          <div className="mt-10 grid max-w-[72rem] border-y border-[#d8d0c2] md:grid-cols-2">
            {accountingExperts.map((expert) => (
              <article key={expert.name} className="border-b border-[#d8d0c2] py-7 md:pr-10 md:odd:border-r md:even:pl-10">
                <p className="text-sm font-semibold text-[#8d7453]">{expert.credentials}</p>
                <h3 className="mt-3 text-[1.24rem] font-semibold text-[#011735]">{expert.name}</h3>
                <p className="mt-2 text-[0.98rem] font-semibold text-[#244ba8]">{expert.role}</p>
                <p className="mt-4 max-w-[34rem] text-[1.04rem] leading-8 text-[#07151b]/78">{expert.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceAnswerSection
        title="Direct answers"
        description="Short answers to the questions businesses usually need clarified before registrations, filings, and reporting work begin."
        items={directAnswers}
      />

      <section id="process" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Working rhythm"
            title="Process"
            description="Most businesses need the same practical rhythm: review the current position, prepare properly, file accurately, and keep the records ready for what comes next."
          />

          <div className="balanced-editorial-grid balanced-editorial-grid-4 mt-10 grid border-y-2 border-[#8d7453]/45 md:grid-cols-2 xl:grid-cols-4">
            {workingRhythm.map((item) => (
              <article key={item.step} className="border-b border-[#d8d0c2] py-7">
                <div className="inline-flex h-10 w-10 items-center justify-center border border-[#8d7453]/30 bg-white text-sm font-semibold text-[#8d7453]">
                  {item.step}
                </div>
                <h3 className="mt-4 text-[1.1rem] font-semibold leading-tight text-foreground md:text-[1.24rem]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[1.06rem] leading-8 text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceCredibilityPanel path="/accounting-tax" variant="sources" />
      </PageGuideLayout>
    </SiteShell>
  );
}
