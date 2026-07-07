import type { Metadata } from "next";
import Link from "next/link";
import { BusinessSetupCostTable } from "@/components/business-setup-cost-table";
import { BusinessSetupPriceActions } from "@/components/business-setup-price-actions";
import { BusinessSetupPricingFaq } from "@/components/business-setup-pricing-faq";
import { JsonLd } from "@/components/json-ld";
import { CardAccent, PageIntro, SiteShell } from "@/components/site-shell";
import {
  businessSetupPricingDisclaimer,
  businessSetupPricingFaqs,
  businessSetupPricingLastUpdated,
  businessSetupPricingSummary,
  businessSetupStartingPrices,
} from "@/lib/business-setup-pricing";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  buildServiceSchema,
  getAbsoluteUrl,
} from "@/lib/seo";

const pageTitle = "Business Setup Cost in Dubai | Zenesis Prices";
const pageDescription =
  "Compare Zenesis business setup consultancy prices in Dubai: freelance permits from AED 4,000, free zone setup from AED 7,000, free zone with visa from AED 15,000, and mainland setup from AED 10,000.";

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
      { name: "Business setup", url: getAbsoluteUrl("/business-setup") },
      {
        name: "Business setup cost in Dubai",
        url: getAbsoluteUrl("/business-setup-cost-dubai"),
      },
    ]),
    buildFaqSchema(businessSetupPricingFaqs),
  ];

  return (
    <SiteShell currentPath="/business-setup">
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}

      <PageIntro
        breadcrumb={[
          { label: "Services", href: "/#services" },
          { label: "Business setup", href: "/business-setup" },
          { label: "Business setup cost in Dubai" },
        ]}
        title="Business setup cost in Dubai"
        description={pageDescription}
        backgroundImageSrc="/backgrounds/business-setup-bg.webp"
        backgroundImageAlt="Dubai business setup cost and company formation pricing"
        backgroundImagePosition="!object-[100%_100%]"
        backgroundImageMode="ambient"
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[100rem] gap-6 px-6 md:px-12 lg:grid-cols-[0.92fr_1.08fr] xl:px-20">
          <article className="rounded-[2rem] border border-[#d8d0c2] bg-white p-7 text-[#11232a] shadow-[0_20px_60px_rgba(17,35,42,0.12)] md:p-9">
            <CardAccent />
            <p className="mt-5 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-[#8d7453]">
              Updated{" "}
              <time dateTime={businessSetupPricingLastUpdated.isoDate}>
                {businessSetupPricingLastUpdated.label}
              </time>
            </p>
            <h2 className="section-title mt-5 font-semibold text-[#11232a]">
              Starting prices
            </h2>
            <p className="mt-5 text-[1.14rem] font-medium leading-8 text-[#11232a]/88">
              {businessSetupPricingSummary}
            </p>
            <p className="mt-5 text-[1rem] font-medium leading-7 text-[#11232a]/72">
              {businessSetupPricingDisclaimer}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/business-setup"
                className="inline-flex rounded-full bg-[#11232a] px-5 py-2.5 text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#18343d]"
              >
                Business setup service
              </Link>
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-[#11232a]/16 bg-white px-5 py-2.5 text-sm font-semibold text-[#11232a] transition-colors hover:bg-[#f8f5ef]"
              >
                Contact Zenesis
              </Link>
            </div>
          </article>

          <BusinessSetupCostTable />
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <div className="max-w-5xl">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-[#d8c3a2]">
              Starting package options
            </p>
            <h2 className="section-title mt-5 font-semibold text-white">
              Choose the closest setup route
            </h2>
            <p className="mt-4 max-w-4xl text-[1.12rem] font-medium leading-8 text-white/88">
              These starting points help founders compare routes before the full
              cost is confirmed. Click a package to open the consultation form
              with that option already selected.
            </p>
          </div>

          <div className="mt-10">
            <BusinessSetupPriceActions variant="servicePage" />
          </div>
        </div>
      </section>

      <BusinessSetupPricingFaq
        title="Business setup cost FAQ"
        description="Direct answers for founders comparing company formation, free zone, mainland, and freelance permit costs in Dubai."
      />
    </SiteShell>
  );
}
