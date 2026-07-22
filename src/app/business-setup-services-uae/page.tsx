import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { ServiceAnswerSection } from "@/components/service-answer-section";
import { ServiceCredibilityPanel } from "@/components/service-credibility-panel";
import { ServiceSubpageLinks } from "@/components/service-subpage-links";
import { PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
import { TalkToZenesisPanel } from "@/components/talk-to-zenesis-panel";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  buildServiceSchema,
  getAbsoluteUrl,
} from "@/lib/seo";

const pageTitle = "Business Setup Services in UAE 2026 | Licensing, Visas & Banking";
const pageDescription =
  "Business setup services in the UAE for mainland, free zone, offshore, trade licensing, visas, banking, PRO coordination, tax, accounting, renewals, and compliance.";

const serviceAreas = [
  {
    title: "Company formation route",
    description:
      "Compare mainland, free zone, and offshore options based on market access, activity scope, ownership, visas, office needs, and banking expectations.",
  },
  {
    title: "Licensing and approvals",
    description:
      "Prepare the trade name, trade license activity selection, application documents, authority submissions, and follow-up needed for the chosen setup route.",
  },
  {
    title: "Visas and residency",
    description:
      "Plan founder and employee visas, establishment steps, Emirates ID, medical, health insurance, family sponsorship, and related PRO coordination in the right sequence.",
  },
  {
    title: "Banking and KYC",
    description:
      "Build a clearer bank-ready file with company documents, shareholder records, business profile, source-of-funds context, and expected transaction details.",
  },
  {
    title: "Accounting and tax",
    description:
      "Connect the new company to bookkeeping, VAT, corporate tax registration, corporate tax filing, records, and recurring compliance support.",
  },
  {
    title: "Renewals and changes",
    description:
      "Keep the company supported after setup with renewals, amendments, document updates, shareholder changes, and ongoing corporate service work.",
  },
] as const;

const routeLinks = [
  {
    label: "Company formation services",
    href: "/company-formation-dubai",
    description: "Choose the right mainland, free zone, or offshore formation route in Dubai.",
  },
  {
    label: "Mainland setup",
    href: "/mainland",
    description: "For direct UAE market access, local clients, and wider operating flexibility.",
  },
  {
    label: "Free zone setup",
    href: "/free-zones",
    description: "For founder-led packages, 100% foreign ownership, and zone-specific activity fit.",
  },
  {
    label: "Offshore setup",
    href: "/offshore",
    description: "For holding, asset ownership, and international structuring use cases.",
  },
  {
    label: "Setup cost guide",
    href: "/business-setup-cost-dubai",
    description: "Compare starting prices and the cost factors behind different setup routes.",
  },
] as const;

const trustSignals = [
  {
    title: "Route-first advice",
    description:
      "The setup recommendation starts with activity, client model, ownership, visa, banking, and renewal needs rather than a one-size package.",
  },
  {
    title: "Post-license follow-through",
    description:
      "The service does not stop at incorporation. Visas, PRO coordination, banking, accounting, tax, renewals, amendments, and attestations are planned around the same setup path.",
  },
  {
    title: "Authority-aware preparation",
    description:
      "Applications are prepared around the relevant mainland authority, free zone, offshore registry, or follow-on government process.",
  },
] as const;

const readinessChecks = [
  "Business activity and whether local UAE, free zone, international, or holding use is expected",
  "Shareholder structure, passport details, manager role, and any overseas company documents",
  "Visa needs for founders, employees, family sponsorship, and practical timing",
  "Banking expectations, source-of-funds context, expected currencies, and likely transaction flow",
  "First-year budget, renewal expectations, office needs, tax registration, and bookkeeping readiness",
] as const;

const processSteps = [
  {
    step: "01",
    title: "Fit check",
    description:
      "Zenesis reviews the activity, ownership plan, target clients, visa needs, banking expectations, and first-year operating priorities.",
  },
  {
    step: "02",
    title: "Route recommendation",
    description:
      "The setup route is narrowed to mainland, free zone, offshore, or a connected structure before documents and fees are committed.",
  },
  {
    step: "03",
    title: "Documents and filing",
    description:
      "Applications, supporting documents, authority submissions, trade name steps, and approvals are handled around the chosen route.",
  },
  {
    step: "04",
    title: "Post-setup support",
    description:
      "Visas, banking, accounting, tax, renewals, and compliance are sequenced so the company can start operating with fewer avoidable delays.",
  },
] as const;

const faqs = [
  {
    question: "What do UAE business setup services usually include?",
    answer:
      "Business setup services usually include route selection, trade license activity guidance, document preparation, authority submissions, trade name steps, approvals, visas, PRO coordination, bank-readiness support, renewals, and compliance follow-through.",
  },
  {
    question: "Is business setup in Dubai different from business setup in the wider UAE?",
    answer:
      "Dubai is one of the most common setup locations, but the right UAE route can also depend on the free zone, emirate, authority, activity, visa plan, office needs, and cost position. The best route is the one that fits the operating model.",
  },
  {
    question: "Should founders choose the cheapest UAE company formation package?",
    answer:
      "Not automatically. A cheap package can work when it fits the activity, visa need, banking file, renewal cost, and client model. It becomes risky when the low price creates problems after the license is issued.",
  },
  {
    question: "Can Zenesis support work after the company is formed?",
    answer:
      "Yes. Zenesis supports the follow-through work after formation, including company visas, banking support, bookkeeping, VAT, corporate tax, renewals, amendments, and document attestation where needed.",
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/business-setup-services-uae",
});

export default function BusinessSetupServicesUaePage() {
  const schemas = [
    buildServiceSchema({
      title: "Business setup services in UAE",
      description: pageDescription,
      path: "/business-setup-services-uae",
    }),
    buildBreadcrumbSchema([
      { name: "Home", url: getAbsoluteUrl("/") },
      { name: "Business setup", url: getAbsoluteUrl("/business-setup") },
      {
        name: "Business setup services in UAE",
        url: getAbsoluteUrl("/business-setup-services-uae"),
      },
    ]),
    buildFaqSchema(faqs),
  ];

  return (
    <SiteShell currentPath="/business-setup">
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}

      <PageIntro
        breadcrumb={[
          { label: "Business setup", href: "/business-setup" },
          { label: "Services in UAE" },
        ]}
        title="Business setup services in UAE"
        description="A full-service setup path for founders and companies that need formation, trade licensing, visas, PRO coordination, banking, accounting, tax, renewals, and compliance connected from the start."
        backgroundImageSrc="/backgrounds/business-setup-bg.webp"
        backgroundImageAlt="Business setup services consultation in the UAE"
        backgroundImagePosition="!object-[100%_100%]"
        backgroundImageMode="ambient"
        ctaHref="/contact"
        ctaLabel="Book a consultation"
        secondaryHref="/business-setup-cost-dubai"
        secondaryLabel="Compare pricing"
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow=""
            title="What Zenesis handles"
            description="Business setup is not one form or one license. The useful work is choosing the right structure, preparing the file properly, and connecting the operational steps that come after approval."
            titleClassName="!text-white"
            descriptionClassName="!text-white/88"
          />

          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceAreas.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.55rem] border border-[#d8d0c2] bg-white p-6 text-[#11232a] shadow-[0_16px_44px_rgba(17,35,42,0.12)]"
              >
                <h2 className="text-[1.24rem] font-semibold leading-tight tracking-[-0.04em] text-foreground">
                  {item.title}
                </h2>
                <p className="mt-4 text-[1rem] font-medium leading-7 text-foreground/86">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[100rem] gap-6 px-6 md:px-12 lg:grid-cols-[0.95fr_1.05fr] xl:px-20">
          <article className="rounded-[2rem] border border-[#d8d0c2] bg-white p-7 text-[#11232a] shadow-[0_18px_50px_rgba(17,35,42,0.1)] md:p-9">
            <SectionHeading
              eyebrow="Proof points"
              title="What makes the setup work usable"
              description="A useful business setup service should reduce decisions, document rework, and post-license delays, not only file the first application."
            />
            <div className="mt-7 grid gap-4">
              {trustSignals.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.35rem] border border-[#d8d0c2] bg-[#f8f5ef] px-5 py-5"
                >
                  <h3 className="text-[1.08rem] font-semibold tracking-[-0.03em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.98rem] font-medium leading-7 text-foreground/82">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-[#d8d0c2] bg-white p-7 text-[#11232a] shadow-[0_18px_50px_rgba(17,35,42,0.1)] md:p-9">
            <SectionHeading
              eyebrow="Readiness check"
              title="What to clarify before the quote"
              description="The quote becomes more useful when these details are known before comparing mainland, free zone, offshore, and follow-through costs."
            />
            <div className="mt-7 grid gap-3">
              {readinessChecks.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-[#d8d0c2] bg-[linear-gradient(180deg,#ffffff_0%,#f8f5ef_100%)] px-4 py-4 text-[1rem] font-medium leading-7 text-foreground/84"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Route planning"
            title="Choose the setup route first"
            description="Most business setup decisions become clearer once the route is matched to how the company will sell, hire, bank, renew, and stay compliant."
          />

          <div className="mt-7">
            <ServiceSubpageLinks items={routeLinks} columnsClassName="md:grid-cols-2 xl:grid-cols-5" />
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Process"
            title="From first call to operating company"
            description="A practical sequence for reducing setup delays and keeping licensing, visas, banking, and compliance connected."
            titleClassName="!text-white"
            descriptionClassName="!text-white/88"
          />

          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-[1.55rem] border border-[#d8d0c2] bg-white p-6 text-[#11232a] shadow-[0_16px_44px_rgba(17,35,42,0.12)]"
              >
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-[#8d7453]">
                  {item.step}
                </p>
                <h2 className="mt-4 text-[1.24rem] font-semibold leading-tight tracking-[-0.04em] text-foreground">
                  {item.title}
                </h2>
                <p className="mt-4 text-[1rem] font-medium leading-7 text-foreground/86">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceCredibilityPanel path="/business-setup-services-uae" />

      <ServiceAnswerSection
        title="Direct answers"
        description="Short answers for founders comparing UAE business setup services before choosing a route."
        items={faqs}
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <TalkToZenesisPanel
            wrapperClassName="rounded-[2rem] bg-[#11232a] p-8 text-white shadow-[0_22px_70px_rgba(17,35,42,0.12)] md:p-10"
            eyebrowClassName="eyebrow text-white/58"
            titleClassName="section-title mt-4 font-semibold text-white"
            textClassName="text-[1.22rem] font-medium leading-9 text-white/94"
            paragraphs={[
              "Share the business activity, ownership structure, visa needs, and budget. Zenesis will help you choose the setup route and plan the steps that follow.",
            ]}
            buttonClassName="inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
            imageClassName="object-cover object-[74%_center]"
          />
        </div>
      </section>
    </SiteShell>
  );
}
