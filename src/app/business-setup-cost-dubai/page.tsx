import type { Metadata } from "next";
import { BusinessSetupCostTable } from "@/components/business-setup-cost-table";
import { BusinessSetupPriceActions } from "@/components/business-setup-price-actions";
import { BusinessSetupPricingFaq } from "@/components/business-setup-pricing-faq";
import { JsonLd } from "@/components/json-ld";
import { PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
import { TalkToZenesisPanel } from "@/components/talk-to-zenesis-panel";
import {
  businessSetupPricingDisclaimer,
  businessSetupPricingFaqs,
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
const introDescription =
  "Published starting prices for the UAE company formation routes founders ask about most, with the full quote confirmed before filing begins.";

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
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}

      <PageIntro
        title="Pricing"
        description={introDescription}
        backgroundImageSrc="/backgrounds/business-setup-bg.webp"
        backgroundImageAlt="Dubai business setup cost and company formation pricing"
        backgroundImagePosition="!object-[100%_100%]"
        backgroundImageMode="ambient"
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow=""
            title="Compare starting prices"
            description="A full-width comparison of the main setup routes founders ask about when estimating the cost of starting a business in Dubai."
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

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Starting package options"
            title="Choose the closest setup route"
            description="These starting points help founders compare routes before the full cost is confirmed. Click a package to open the consultation form with that option already selected."
          />

          <BusinessSetupPriceActions variant="servicePage" />
        </div>
      </section>

      <BusinessSetupPricingFaq
        dark
        title="Business setup cost FAQ"
        description="Direct answers for founders comparing company formation, free zone, mainland, and freelance permit costs in Dubai."
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <TalkToZenesisPanel
            wrapperClassName="rounded-[2rem] bg-[#11232a] p-8 text-white shadow-[0_22px_70px_rgba(17,35,42,0.12)] md:p-10"
            eyebrowClassName="eyebrow text-white/58"
            titleClassName="section-title mt-4 font-semibold text-white"
            textClassName="text-lg leading-8 text-white/94"
            paragraphs={[
              "Tell us your business activity, visa plan, and preferred setup route. Zenesis will confirm the right structure and the full cost before filing begins.",
            ]}
            buttonClassName="inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
            imageClassName="object-cover object-[72%_center]"
          />
        </div>
      </section>
    </SiteShell>
  );
}
