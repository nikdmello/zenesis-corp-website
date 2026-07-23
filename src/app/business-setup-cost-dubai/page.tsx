import type { Metadata } from "next";
import Link from "next/link";
import { BusinessSetupCostTable } from "@/components/business-setup-cost-table";
import { BusinessSetupPriceActions } from "@/components/business-setup-price-actions";
import { BusinessSetupPricingFaq } from "@/components/business-setup-pricing-faq";
import { JsonLd } from "@/components/json-ld";
import { ServiceCredibilityPanel } from "@/components/service-credibility-panel";
import { PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
import { TalkToZenesisPanel } from "@/components/talk-to-zenesis-panel";
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
  "Compare 2026 business setup cost in Dubai and Zenesis consultancy prices: freelance permits from AED 4,000, free zone setup from AED 7,000, free zone with visa from AED 15,000, and mainland setup from AED 10,000.";
const introDescription =
  "Published starting prices and practical cost drivers for the UAE company formation routes founders ask about most, with the full quote confirmed before filing begins.";

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
        showBottomBorder={false}
        title="Business setup cost in Dubai"
        description={introDescription}
        backgroundImageSrc={versionedAssetPath("/business-setup-cost-uae.webp")}
        backgroundImageAlt="Dubai business setup cost and company formation pricing"
        backgroundImagePosition="!object-[82%_32%]"
        backgroundImageMode="ambient"
        footerContent={
          <ServiceCredibilityPanel path="/business-setup-cost-dubai" variant="expertise" embedded />
        }
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow=""
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

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="2026 cost guide"
            title="What affects the real setup budget"
            description="The lowest advertised license price rarely tells the whole story. These are the factors that usually change the real business setup cost in Dubai, free zone setup cost, or mainland company formation budget after the headline quote."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {setupCostDecisionFactors.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.55rem] border border-[#d8d0c2] bg-white p-6 text-[#11232a] shadow-[0_16px_44px_rgba(17,35,42,0.08)]"
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

          <div className="mt-8 rounded-[1.55rem] border border-[#d8d0c2] bg-white px-6 py-6 shadow-[0_16px_44px_rgba(17,35,42,0.08)] md:px-7">
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
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Starting package options"
            title="Choose the closest setup route"
            description="These starting points help founders compare routes before the full cost is confirmed. Click a package to open the consultation form with that option already selected."
          />

          <BusinessSetupPriceActions variant="servicePage" />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Link
              href="/mainland-vs-free-zone-dubai"
              className="rounded-[1.35rem] border border-[#d8d0c2] bg-white px-5 py-5 text-[#11232a] shadow-[0_12px_30px_rgba(17,35,42,0.06)] transition-transform duration-200 hover:-translate-y-0.5"
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
            <Link
              href="/low-cost-business-setup-uae"
              className="rounded-[1.35rem] border border-[#d8d0c2] bg-white px-5 py-5 text-[#11232a] shadow-[0_12px_30px_rgba(17,35,42,0.06)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <p className="text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-[#8d7453]">
                Lowest viable route
              </p>
              <h2 className="mt-3 text-[1.2rem] font-semibold leading-tight tracking-[-0.04em] text-foreground">
                Low-cost business setup in UAE
              </h2>
              <p className="mt-3 text-[1rem] font-medium leading-7 text-foreground/84">
                Compare cheap setup options without choosing a structure that blocks visas, banking, or market access.
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

      <ServiceCredibilityPanel path="/business-setup-cost-dubai" variant="sources" />
    </SiteShell>
  );
}
