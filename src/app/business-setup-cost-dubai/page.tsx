import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PricingPackages } from "@/components/pricing-packages";
import { BusinessSetupPricingFaq } from "@/components/business-setup-pricing-faq";
import { JsonLd } from "@/components/json-ld";
import { PageGuideLayout } from "@/components/page-guide-layout";
import { PageSectionNavMobile } from "@/components/page-section-nav";
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
  "Compare Zenesis business setup prices in Dubai: freelance permits from AED 4,000, free zone from AED 7,000, mainland from AED 10,000.";

const pricingPageLinks = [
  { href: "#starting-prices", label: "Setup options" },
  { href: "#cost-drivers", label: "Pricing factors" },
  { href: "#setup-routes", label: "Route comparison" },
  { href: "#direct-answers", label: "Pricing FAQ" },
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
        title="Pricing"
        description="Compare freelance, free zone, mainland, and offshore routes by how you plan to work, trade, and live in the UAE."
      />

      <PageSectionNavMobile items={pricingPageLinks} />
      <PageGuideLayout items={pricingPageLinks} credibilityPath="/business-setup-cost-dubai">

      <section id="starting-prices" className="pricing-packages-section">
        <div className="pricing-page-container">
          <PricingPackages />
          <p className="pricing-disclaimer">{businessSetupPricingDisclaimer}</p>
        </div>
      </section>

      <section id="cost-drivers" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#fbfaf7] py-12 md:py-16">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <div className="min-w-0">
          <SectionHeading
            title="Pricing factors"
            description="Your final quote depends on the jurisdiction, activity, visas, premises, banking preparation, and work required after setup."
          />

          <div className="balanced-editorial-grid balanced-editorial-grid-2 mt-9 grid border-y border-[#cfc5b7] md:grid-cols-2">
            {setupCostDecisionFactors.map((item, index) => (
              <article
                key={item.title}
                className="border-b border-[#d8d0c2] py-7 text-[#011735]"
              >
                <span className="text-sm font-semibold text-[#8d7453]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-[1.2rem] font-semibold leading-tight tracking-[-0.04em] text-[#011735]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[1rem] font-medium leading-7 text-[#011735]/84">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 border-l-4 border-[#244ba8] bg-[#f3f7ff] px-6 py-6 md:px-7">
            <h3 className="text-[1.15rem] font-semibold leading-tight tracking-[-0.04em] text-[#011735]">
              Why two Dubai company setup quotes can look different
            </h3>
            <p className="mt-3 max-w-5xl text-[1rem] font-medium leading-7 text-[#011735]/82">
              Quotes vary because business activity, approvals, visa needs, office requirements,
              and post-setup compliance differ by founder. A low starting price can be useful for comparison, but the suitable structure is the
              one that still works once licensing, banking, and post-setup obligations begin.
            </p>
          </div>
          </div>
        </div>
      </section>

      <section id="setup-routes" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-white py-11 md:py-14">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            title="Route comparison"
          />


          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <Link
              href="/mainland-vs-free-zone-dubai"
              className="group grid overflow-hidden border border-[#d8d0c2] bg-white text-[#011735] transition-transform duration-200 hover:-translate-y-0.5 md:grid-cols-[18rem_minmax(0,1fr)]"
            >
              <div className="relative min-h-[12rem] overflow-hidden bg-[#e9e3d9] md:min-h-[15rem]">
                <Image
                  src={versionedAssetPath("/services/mainland-vs-freezone.webp")}
                  alt="Mainland and free zone company setup comparison in Dubai"
                  fill
                  sizes="(max-width: 768px) 100vw, 288px"
                  className="object-cover object-[82%_34%] transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="px-5 py-6 md:px-7 md:py-7">
                <h2 className="text-[1.2rem] font-semibold leading-tight tracking-[-0.04em] text-foreground">Mainland vs free zone Dubai</h2>
                <p className="mt-3 text-[1rem] font-medium leading-7 text-foreground/84">Compare market access, office requirements, visas, and costs for mainland and free zone companies.</p>
              </div>
            </Link>
            <Link
              href="/offshore"
              className="group grid overflow-hidden border border-[#d8d0c2] bg-white text-[#011735] transition-transform duration-200 hover:-translate-y-0.5 md:grid-cols-[18rem_minmax(0,1fr)]"
            >
              <div className="relative min-h-[12rem] overflow-hidden bg-[#e9e3d9] md:min-h-[15rem]">
                <Image
                  src={versionedAssetPath("/services/offshore.webp")}
                  alt="Offshore company setup and jurisdiction comparison"
                  fill
                  sizes="(max-width: 768px) 100vw, 288px"
                  className="object-cover object-[72%_22%] transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="px-5 py-6 md:px-7 md:py-7">
                <p className="text-sm font-semibold text-[#8d7453]">UAE offshore from AED 7,500</p>
                <h2 className="mt-3 text-[1.2rem] font-semibold leading-tight tracking-[-0.04em] text-foreground">Offshore setup</h2>
                <p className="mt-3 text-[1rem] font-medium leading-7 text-foreground/84">Compare Ajman, RAK, and Jebel Ali offshore routes from AED 7,500 to AED 15,000, and international options such as BVI, Nevis, Mauritius, Seychelles, and Hong Kong from AED 8,000 to AED 15,000.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <BusinessSetupPricingFaq
        dark
        title="Business setup cost FAQ"
        description="Answers about setup routes, starting prices, visas, and applying from outside the UAE."
      />

      <ServiceCredibilityPanel path="/business-setup-cost-dubai" variant="sources" />
      </PageGuideLayout>
    </SiteShell>
  );
}
