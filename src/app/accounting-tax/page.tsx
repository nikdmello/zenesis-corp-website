import type { Metadata } from "next";
import { BusinessSetupRouteCard } from "@/components/business-setup-route-card";
import { JsonLd } from "@/components/json-ld";
import { ServiceAnswerSection } from "@/components/service-answer-section";
import { ServiceSubpageLinks } from "@/components/service-subpage-links";
import { CardAccent, PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
import { TalkToZenesisPanel } from "@/components/talk-to-zenesis-panel";
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
    description:
      "Corporate tax registration is the first step for businesses that need their UAE tax setup handled correctly before filing begins.",
    points: [
      "Review whether the business should register now and what position supports that decision",
      "Set up EmaraTax properly and complete the submission with the right documents",
      "Explain what filing and record-keeping work starts once registration is complete",
    ],
  },
  {
    title: "Corporate Tax Filing",
    href: "/corporate-tax-filing-services-in-the-uae",
    description:
      "Once registered, businesses need annual corporate tax return support, accurate calculations, and cleaner documentation around the filing process.",
    points: [
      "Prepare and file the annual return through the FTA system with cleaner support behind it",
      "Review taxable income, deductions, and credits before the filing is submitted",
      "Manage deadlines, documentation, and follow-through so the filing does not become a last-minute rush",
    ],
  },
  {
    title: "VAT Filing",
    href: "/vat-filing-services-in-the-uae",
    description:
      "VAT filing support matters most to businesses that need their returns prepared accurately, submitted on time, and backed by proper reconciliations.",
    points: [
      "Prepare VAT returns from sales, purchases, invoices, and the records behind them",
      "Reconcile input and output VAT before filing so the position is clearer",
      "Support filing periods, payment steps, and any audit-related follow-up",
    ],
  },
  {
    title: "Bookkeeping",
    href: "/professional-bookkeeping-services-in-dubai",
    description:
      "Bookkeeping keeps the business ready for VAT, corporate tax, reporting, and day-to-day financial visibility.",
    points: [
      "Keep weekly or monthly books current and reconcile the main bank activity properly",
      "Prepare reporting and support the documentation needed for reviews or audits",
      "Support payroll and work within QuickBooks, Zoho Books, Tally, and Excel environments",
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

const reportingNeeds = [
  {
    title: "Corporate tax registration",
    href: "/corporate-tax-registration-in-the-uae",
    description:
      "For businesses that need the tax setup handled correctly before the filing cycle starts.",
  },
  {
    title: "Corporate tax filing",
    href: "/corporate-tax-filing-services-in-the-uae",
    description:
      "For annual return preparation, calculations, and FTA portal submission support.",
  },
  {
    title: "VAT filing",
    href: "/vat-filing-services-in-the-uae",
    description:
      "For recurring VAT returns, reconciliations, and payment-related follow-through.",
  },
  {
    title: "Bookkeeping",
    href: "/professional-bookkeeping-services-in-dubai",
    description:
      "For weekly or monthly books, cleaner reports, and steadier financial records.",
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

export default function AccountingTaxPage() {
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
      {pageSchemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <PageIntro
        breadcrumb={[
          { label: "Services", href: "/#services" },
          { label: "Accounting and tax" },
        ]}
        title="Accounting and tax"
        backgroundImageSrc="/backgrounds/accounting-and-tax-bg.webp"
        backgroundImageAlt="Zenesis Accounting and Tax page background"
        backgroundImagePosition="!object-[100%_100%]"
        backgroundImageMode="ambient"
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <article className="rounded-[2rem] border border-[#d8d0c2] bg-[linear-gradient(180deg,#ffffff_0%,#f8f5ef_100%)] p-8 text-[#11232a] shadow-[0_22px_70px_rgba(17,35,42,0.16)] md:p-10">
            <CardAccent />
            <h2 className="section-title font-semibold text-[#11232a]">
              Overview
            </h2>
            <div className="mt-5 max-w-[88rem] space-y-5 text-[1.16rem] leading-9 text-[#11232a] md:text-[1.22rem]">
              <p>
              UAE businesses are expected to maintain accurate financial
              records, file required tax returns, and stay ready for regulatory
              review. Zenesis helps businesses keep their books organized,
              manage VAT and corporate tax obligations, and reduce the risk of
              missed deadlines or inaccurate filings.
              </p>
              <p>
                Whether you are newly incorporated or already operating, the team
                can support your day-to-day accounting and ongoing tax compliance.
              </p>
            </div>
            <div className="mt-8 rounded-[1.6rem] border border-[#d8d0c2] bg-white p-4 shadow-[0_10px_28px_rgba(17,35,42,0.06)] md:p-5">
              <ServiceSubpageLinks
                items={reportingNeeds.map((item) => ({
                  label: item.title,
                  href: item.href,
                  description: item.description,
                }))}
                columnsClassName="sm:grid-cols-2 lg:grid-cols-4"
                variant="compact"
              />
            </div>
          </article>
        </div>
      </section>

      <ServiceAnswerSection
        dark
        title="Direct answers"
        description="Short answers to the questions businesses usually need clarified before registrations, filings, and reporting work begin."
        items={directAnswers}
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20 [&_.eyebrow]:text-white/68 [&_.section-title]:text-white [&_.text-muted]:text-white/94">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Who It Helps"
            title="Who it's for"
            description="These are the businesses most likely to need structured help across corporate tax, VAT, bookkeeping, and reporting."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {whoWeHelp.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-[#d8d0c2] bg-white p-7 text-[#11232a] shadow-[0_18px_50px_rgba(17,35,42,0.14)]">
                <CardAccent />
                <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-[1.18rem] font-semibold tracking-[-0.04em] !text-foreground md:text-[1.24rem] xl:text-[1.3rem]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[1.12rem] leading-8 !text-foreground/92">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Service Lines"
            title="Core services"
            description="Each service line is a concrete part of the compliance and reporting stack."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {accountingServices.map((item) => (
              <BusinessSetupRouteCard
                key={item.title}
                title={item.title}
                href={item.href}
                frontSummary={item.description}
                points={item.points}
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
            eyebrow="Why Zenesis"
            title="How Zenesis helps"
            description="The goal is not just to file. It is to keep the business organized enough that filing, review, and future growth become easier."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whyZenesis.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-[#d8d0c2] bg-white p-7 text-[#11232a] shadow-[0_18px_50px_rgba(17,35,42,0.14)]">
                <CardAccent />
                <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-[1.18rem] font-semibold tracking-[-0.04em] !text-foreground md:text-[1.24rem] xl:text-[1.3rem]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[1.12rem] leading-8 !text-foreground/92">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Working Rhythm"
            title="Process"
            description="Most businesses need the same practical rhythm: review the current position, prepare properly, file accurately, and keep the records ready for what comes next."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {workingRhythm.map((item) => (
              <article key={item.step} className="rounded-[1.75rem] border border-[#d8d0c2] bg-[linear-gradient(180deg,#ffffff_0%,#f8f5ef_100%)] p-7 text-[#11232a] shadow-[0_18px_50px_rgba(17,35,42,0.14)]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#8d7453]/18 bg-[#8d7453]/10 text-sm font-semibold tracking-[0.08em] text-[#8d7453]">
                  {item.step}
                </div>
                <h3 className="mt-4 overflow-hidden text-ellipsis whitespace-nowrap text-[1.18rem] font-semibold tracking-[-0.04em] text-foreground md:text-[1.24rem] xl:text-[1.3rem]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[1.12rem] leading-8 text-muted">
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
            textClassName="text-[1.18rem] leading-9 text-white/94"
            paragraphs={[
              "Whether you need monthly bookkeeping, VAT filing, corporate tax registration, or annual tax filing, Zenesis can help you stay organized and compliant.",
            ]}
            buttonClassName="inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
            imageClassName="object-cover object-[74%_center]"
          />
        </div>
      </section>
    </SiteShell>
  );
}
