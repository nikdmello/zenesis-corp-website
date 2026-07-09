import type { Metadata } from "next";
import Link from "next/link";
import { BusinessSetupCostTable } from "@/components/business-setup-cost-table";
import { BusinessSetupPriceActions } from "@/components/business-setup-price-actions";
import { BusinessSetupPricingFaq } from "@/components/business-setup-pricing-faq";
import { JsonLd } from "@/components/json-ld";
import { PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
import { TalkToZenesisPanel } from "@/components/talk-to-zenesis-panel";
import {
  marketCostGuideRows,
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
        title="Business setup cost in Dubai"
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
            description="The lowest advertised license price rarely tells the whole story. These are the cost drivers that usually decide whether a Dubai company formation route stays practical after approval."
          />

          <div className="mt-8 overflow-hidden rounded-[1.55rem] border border-[#d8d0c2] bg-white shadow-[0_16px_44px_rgba(17,35,42,0.08)]">
            <div className="overflow-x-auto">
              <table className="min-w-[62rem] border-collapse text-left">
                <thead className="bg-[#11232a] text-white">
                  <tr>
                    {["Route", "Starting range", "Main cost drivers", "Zenesis position"].map((heading) => (
                      <th
                        key={heading}
                        scope="col"
                        className="px-4 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.16em]"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {marketCostGuideRows.map((row) => (
                    <tr key={row.route} className="border-t border-[#e4dacb]">
                      <th
                        scope="row"
                        className="w-[13rem] px-4 py-4 text-[1rem] font-semibold leading-6 text-[#11232a]"
                      >
                        {row.route}
                      </th>
                      <td className="whitespace-nowrap px-4 py-4 text-[1.12rem] font-semibold tracking-[-0.03em] text-[#244ba8]">
                        {row.typicalRange}
                      </td>
                      <td className="px-4 py-4 text-[0.98rem] font-medium leading-6 text-[#11232a]/84">
                        {row.costDrivers}
                      </td>
                      <td className="px-4 py-4 text-[0.98rem] font-medium leading-6 text-[#11232a]/84">
                        {row.zenesisPosition}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20 [&_.eyebrow]:text-white/68 [&_.section-title]:text-white [&_.text-muted]:text-white/88">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Cost factors"
            title="Why two setup quotes can look different"
            description="Two founders can ask for business setup in Dubai and receive different quotes because the operating model, visa path, activity, and authority requirements are not the same."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {setupCostDecisionFactors.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.55rem] border border-[#d8d0c2] bg-white p-6 text-[#11232a] shadow-[0_16px_44px_rgba(17,35,42,0.12)]"
              >
                <h3 className="text-[1.2rem] font-semibold leading-tight tracking-[-0.04em] text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-[1rem] font-medium leading-7 text-foreground/86">
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
    </SiteShell>
  );
}
