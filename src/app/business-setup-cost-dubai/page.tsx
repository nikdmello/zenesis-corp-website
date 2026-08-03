import type { Metadata } from "next";
import Link from "next/link";
import { BusinessSetupCostTable } from "@/components/business-setup-cost-table";
import { BusinessSetupPriceActions } from "@/components/business-setup-price-actions";
import { BusinessSetupPricingFaq } from "@/components/business-setup-pricing-faq";
import { JsonLd } from "@/components/json-ld";
import { PageSectionNav, PageSectionNavMobile } from "@/components/page-section-nav";
import { ReadingProgress } from "@/components/reading-progress";
import { ServiceCredibilityPanel } from "@/components/service-credibility-panel";
import { PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
import { versionedAssetPath } from "@/lib/asset-paths";
import {
  businessSetupPricingDisclaimer,
  businessSetupPricingFaqs,
  businessSetupStartingPrices,
  setupCostDecisionFactors,
} from "@/lib/business-setup-pricing";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  buildServiceSchema,
  getAbsoluteUrl,
} from "@/lib/seo";

const pageTitle = "Business Setup Cost in Dubai 2026 | Zenesis Prices";
const pageDescription =
  "Compare 2026 business setup costs in Dubai, including freelance, free zone, visa, and mainland options, plus the cheapest viable routes and key cost drivers.";
const introDescription =
  "Published starting prices, cheapest viable routes, and practical cost drivers for UAE company formation, with the full quote confirmed before filing begins.";

const lowCostRouteGuidance = [
  {
    title: "Freelance permit",
    pricingTitle: "Freelance Permit",
    bestFor: "Independent professionals who need a lean entry route before building a larger company structure.",
    caution: "Check activity scope, visa needs, banking expectations, and whether the permit fits future client work.",
  },
  {
    title: "Free Zone Company Setup",
    pricingTitle: "Free Zone Company Setup",
    bestFor: "Founders who want a UAE company structure without immediate residency or employee visa requirements.",
    caution: "The cheapest zone may not be the right zone for banking, renewals, office rules, or activity fit.",
  },
  {
    title: "Free Zone Company Setup + Visa",
    pricingTitle: "Free Zone Company Setup + Visa",
    bestFor: "Entrepreneurs who need company setup aligned with UAE residency planning.",
    caution: "Budget for visa allocation, establishment card, medical, Emirates ID, health insurance, and renewal rules.",
  },
  {
    title: "Mainland Company Setup",
    pricingTitle: "Mainland Company Setup",
    bestFor: "Businesses that need direct UAE market access, local clients, or broader operating flexibility.",
    caution: "Do not compare mainland only on headline license cost. Office, approvals, and visa planning can change the real budget.",
  },
] as const;

const pricingPageLinks = [
  { href: "#starting-prices", label: "Starting prices" },
  { href: "#low-cost-routes", label: "Low-cost routes" },
  { href: "#cost-drivers", label: "What affects cost" },
  { href: "#setup-routes", label: "Setup routes" },
  { href: "#direct-answers", label: "Pricing FAQ" },
  { href: "#primary-sources", label: "Primary sources" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/business-setup-cost-dubai",
});

export default function BusinessSetupCostDubaiPage() {
  const schemas = [
    buildServiceSchema({
      title: "Business setup cost in Dubai",
      description: pageDescription,
      path: "/business-setup-cost-dubai",
      offers: businessSetupStartingPrices,
    }),
    buildBreadcrumbSchema([
      { name: "Home", url: getAbsoluteUrl("/") },
      {
        name: "Pricing",
        url: getAbsoluteUrl("/business-setup-cost-dubai"),
      },
    ]),
    buildFaqSchema(businessSetupPricingFaqs),
  ];

  return (
    <SiteShell currentPath="/business-setup-cost-dubai">
      <ReadingProgress />
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}

      <PageIntro
        showBottomBorder={false}
        breadcrumb={[
          { label: "Business setup", href: "/business-setup" },
          { label: "Pricing" },
        ]}
        title="Business setup cost in Dubai"
        description={introDescription}
        backgroundImageSrc={versionedAssetPath("/services/business-setup-cost-uae.webp")}
        backgroundImageAlt="Dubai business setup cost and company formation pricing"
        backgroundImagePosition="!object-[82%_32%]"
        backgroundImageMode="ambient"
        footerContent={
          <ServiceCredibilityPanel path="/business-setup-cost-dubai" variant="expertise" embedded />
        }
      />

      <PageSectionNavMobile items={pricingPageLinks} />

      <section id="starting-prices" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#11232a] py-14 md:py-18">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Pricing overview"
            title="Compare Zenesis starting prices"
            description="A full-width comparison of the main setup routes founders ask about when estimating the cost of starting a business in Dubai or the UAE."
            titleClassName="!text-white"
            descriptionClassName="!text-white/88"
          />

          <div className="mt-8 md:mt-10">
            <BusinessSetupCostTable />
          </div>

          <p className="mt-5 max-w-5xl text-[0.98rem] font-medium leading-7 text-white/72">
            {businessSetupPricingDisclaimer}
          </p>
        </div>
      </section>

      <section id="low-cost-routes" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#f8f6f1] py-14 md:py-18">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Lowest viable route"
            title="Compare low-cost setup options"
            description="The cheapest route is useful only when it still fits the activity, visa plan, banking expectations, renewal position, and way the company needs to operate."
          />
          <div className="mt-8 grid gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-4">
            {lowCostRouteGuidance.map((item) => {
              const price = businessSetupStartingPrices.find((option) => option.title === item.pricingTitle);
              return (
                <article key={item.title} className="border-t border-[#d8d0c2] pt-5 text-[#11232a]">
                  <p className="text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-[#8d7453]">
                    From {price?.price}
                  </p>
                  <h2 className="mt-3 text-[1.2rem] font-semibold leading-tight">{item.title}</h2>
                  <p className="mt-4 text-[1rem] font-medium leading-7 text-[#11232a]/86">{item.bestFor}</p>
                  <p className="mt-4 border-l-2 border-[#244ba8] pl-4 text-[0.94rem] font-medium leading-6 text-[#11232a]/76">
                    {item.caution}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="cost-drivers" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-white py-14 md:py-18">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start">
          <div className="min-w-0">
          <SectionHeading
            eyebrow="2026 cost guide"
            title="What affects the real setup budget"
            description="The lowest advertised license price rarely tells the whole story. These are the factors that usually change the real business setup cost in Dubai, free zone setup cost, or mainland company formation budget after the headline quote."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {setupCostDecisionFactors.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#d8d0c2] bg-[#f8f6f1] p-6 text-[#11232a]"
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#8d7453]">
                  Cost driver
                </p>
                <h3 className="mt-3 text-[1.2rem] font-semibold leading-tight tracking-[-0.04em] text-[#11232a]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[1rem] font-medium leading-7 text-[#11232a]/84">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 border-l-4 border-[#244ba8] bg-[#f3f7ff] px-6 py-6 md:px-7">
            <h3 className="text-[1.15rem] font-semibold leading-tight tracking-[-0.04em] text-[#11232a]">
              Why two Dubai company setup quotes can look different
            </h3>
            <p className="mt-3 max-w-5xl text-[1rem] font-medium leading-7 text-[#11232a]/82">
              Two founders can both ask about company formation in Dubai and still receive different quotes because the
              practical route is shaped by activity, approvals, visa planning, office requirements, and the compliance
              work that follows setup. A low starting price can be useful for comparison, but the right structure is the
              one that still works once licensing, banking, and post-setup obligations begin.
            </p>
          </div>
          </div>
          <PageSectionNav items={pricingPageLinks} />
          </div>
        </div>
      </section>

      <section id="setup-routes" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#f8f6f1] py-14 md:py-18">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Starting package options"
            title="Choose the closest setup route"
            description="These starting points help founders compare routes before the full cost is confirmed. Click a package to open the consultation form with that option already selected."
          />

          <BusinessSetupPriceActions variant="servicePage" />

          <div className="mt-8 grid gap-4">
            <Link
              href="/mainland-vs-free-zone-dubai"
              className="rounded-lg border border-[#d8d0c2] bg-white px-5 py-5 text-[#11232a] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <p className="text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-[#8d7453]">
                Compare routes
              </p>
              <h2 className="mt-3 text-[1.2rem] font-semibold leading-tight tracking-[-0.04em] text-foreground">
                Mainland vs free zone Dubai
              </h2>
              <p className="mt-3 text-[1rem] font-medium leading-7 text-foreground/84">
                See when mainland flexibility is worth the cost and when a free zone package is the better fit.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <BusinessSetupPricingFaq
        dark
        title="Business setup cost FAQ"
        description="Direct answers for founders comparing company formation, free zone, mainland, and freelance permit costs in Dubai."
      />

      <ServiceCredibilityPanel path="/business-setup-cost-dubai" variant="sources" />
    </SiteShell>
  );
}
