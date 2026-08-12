import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BusinessSetupCostTable } from "@/components/business-setup-cost-table";
import { BusinessSetupPriceActions } from "@/components/business-setup-price-actions";
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
  "Compare 2026 business setup costs in Dubai and the UAE, including freelance, free zone, mainland, visa, UAE offshore, and international offshore options.";
const introDescription =
  "Published starting prices, cheapest viable routes, and practical cost drivers for UAE company formation, with the full quote confirmed before filing begins.";

const pricingPageLinks = [
  { href: "#starting-prices", label: "Starting prices" },
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
      />

      <PageSectionNavMobile items={pricingPageLinks} />
      <PageGuideLayout items={pricingPageLinks} credibilityPath="/business-setup-cost-dubai">

      <section id="starting-prices" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 border-b border-[#d9d1c5] bg-white py-14 md:py-18">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Pricing overview"
            title="Compare Zenesis starting prices"
            description="A full-width comparison of the main setup routes founders ask about when estimating the cost of starting a business in Dubai or the UAE."
          />

          <div className="mt-8 md:mt-10">
            <BusinessSetupCostTable />
          </div>

          <p className="mt-5 max-w-5xl text-[0.98rem] font-medium leading-7 text-[#11232a]/72">
            {businessSetupPricingDisclaimer}
          </p>
          <div className="mt-7 grid gap-5 border-t border-[#d9d1c5] pt-7 md:grid-cols-2">
            <div>
              <p className="text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-[#8d7453]">Lowest entry price</p>
              <p className="mt-3 text-[1.05rem] font-medium leading-7 text-[#11232a]/88">A freelance permit starts from AED 4,000 when the activity and operating model fit a permit route.</p>
            </div>
            <div>
              <p className="text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-[#8d7453]">Lowest company route</p>
              <p className="mt-3 text-[1.05rem] font-medium leading-7 text-[#11232a]/88">A free zone company without a visa starts from AED 7,000, but zone, activity, banking, office, and renewal fit still matter.</p>
            </div>
          </div>

          <article className="mt-9 max-w-[58rem] border-t border-[#d9d1c5] pt-8">
            <h2 className="text-[1.55rem] font-semibold leading-tight text-[#11232a] md:text-[1.75rem]">
              What&apos;s the cheapest way to set up in the UAE?
            </h2>
            <div className="mt-5 space-y-4 text-[1.04rem] font-medium leading-8 text-[#11232a]/84 md:text-[1.08rem]">
              <p>
                The cheapest way to set up in the UAE depends on whether you need a
                registered company or a permit to work as an individual. The cheapest
                Zenesis route overall is the Freelance Permit, starting from AED 4,000.
                This is a permit to work under approved activities as an individual,
                not a registered company, and it does not carry a company visa quota
                the way a licensed company does.
              </p>
              <p>
                If the business needs a registered company, Zenesis Free Zone Company
                Setup without a visa starts from AED 7,000. The final cost depends on
                the selected free zone, business activity, office or flexi-desk package,
                government fees, approvals, and any additional visa or banking support
                required.
              </p>
              <p>
                The starting price is only the entry point. A realistic setup budget
                should account for visa costs where needed, the applicable office or
                flexi-desk package, government and approval fees, and banking preparation
                or support where required. Licence renewal is a separate recurring cost
                when the initial licence term ends and should be planned from the outset.
                The lowest-priced route is not automatically the right fit if the business
                needs employees, specific banking support, or broader trading activity.
                Compare the full route options above, or learn{" "}
                <Link className="font-semibold text-[#244ba8] underline decoration-[#244ba8]/35 underline-offset-4" href="/insights/top-5-mistakes-starting-business-dubai">
                  where cost decisions go wrong
                </Link>{" "}
                before deciding on cost alone.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="cost-drivers" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-white py-14 md:py-18">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
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

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <Link
              href="/mainland-vs-free-zone-dubai"
              className="group grid overflow-hidden rounded-lg border border-[#d8d0c2] bg-white text-[#11232a] transition-transform duration-200 hover:-translate-y-0.5 md:grid-cols-[18rem_minmax(0,1fr)]"
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
                <p className="text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-[#8d7453]">Compare routes</p>
                <h2 className="mt-3 text-[1.2rem] font-semibold leading-tight tracking-[-0.04em] text-foreground">Mainland vs free zone Dubai</h2>
                <p className="mt-3 text-[1rem] font-medium leading-7 text-foreground/84">See when mainland flexibility is worth the cost and when a free zone package is the better fit.</p>
              </div>
            </Link>
            <Link
              href="/offshore"
              className="group grid overflow-hidden rounded-lg border border-[#d8d0c2] bg-white text-[#11232a] transition-transform duration-200 hover:-translate-y-0.5 md:grid-cols-[18rem_minmax(0,1fr)]"
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
                <p className="text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-[#8d7453]">UAE offshore from AED 7,500</p>
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
        description="Direct answers for founders comparing company formation, free zone, mainland, and freelance permit costs in Dubai."
      />

      <ServiceCredibilityPanel path="/business-setup-cost-dubai" variant="sources" />
      </PageGuideLayout>
    </SiteShell>
  );
}
