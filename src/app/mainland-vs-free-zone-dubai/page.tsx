import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageSectionNav, PageSectionNavMobile } from "@/components/page-section-nav";
import { ReadingProgress } from "@/components/reading-progress";
import { ServiceAnswerSection } from "@/components/service-answer-section";
import { ServiceCredibilityPanel } from "@/components/service-credibility-panel";
import { ServiceSubpageLinks } from "@/components/service-subpage-links";
import { PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
import { versionedAssetPath } from "@/lib/asset-paths";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  getAbsoluteUrl,
} from "@/lib/seo";

const pageTitle = "Mainland vs Free Zone Dubai 2026 | Setup Cost, Visas & Banking";
const pageDescription =
  "Compare mainland vs free zone company setup in Dubai by market access, ownership, visas, office needs, banking, cost, renewals, and long-term operating fit.";

const comparisonRows = [
  {
    factor: "Market access",
    mainland: "Usually better for direct UAE market access, local contracts, and broader operating flexibility.",
    freeZone:
      "Usually better for free zone or international activity. Eligible Dubai free zone companies may obtain a separate mainland operating permit for approved activities.",
  },
  {
    factor: "Ownership",
    mainland:
      "Full foreign ownership is available across many activities, while some strategic or regulated activities follow specific rules.",
    freeZone:
      "100% foreign ownership is a common free zone advantage within the relevant free zone structure.",
  },
  {
    factor: "Office needs",
    mainland:
      "Often tied to mainland office or Ejari requirements depending on activity, emirate, and license route.",
    freeZone:
      "May offer flexi-desk, shared office, or package-based office options depending on the chosen zone.",
  },
  {
    factor: "Visas",
    mainland:
      "Visa capacity depends on structure, office position, immigration file, and practical operating plan.",
    freeZone:
      "Visa packages can be clearer upfront, but limits vary by zone, package, office type, and renewal rules.",
  },
  {
    factor: "Banking",
    mainland:
      "Can be easier to explain for local UAE operations when activity, contracts, and office position are clear.",
    freeZone:
      "Can work well, but banks usually review zone choice, activity, shareholder profile, substance, and transaction model.",
  },
  {
    factor: "Cost",
    mainland:
      "Can cost more when approvals, office requirements, and visa planning are included, but may fit broader local activity.",
    freeZone:
      "Can be leaner for packaged setup, especially without visa, but the cheapest zone is not always the best operating fit.",
  },
] as const;

const faqs = [
  {
    question: "Is mainland or free zone better for business setup in Dubai?",
    answer:
      "Mainland is usually better when the business needs direct UAE market access, local client work, or broader operating flexibility. Free zone is often better for packaged setup, consulting, digital work, international trade, or founder-led businesses that do not need unrestricted mainland activity.",
  },
  {
    question: "Is free zone company setup cheaper than mainland setup?",
    answer:
      "Free zone setup can be cheaper when the founder wants a packaged route without an initial visa or complex office need. Mainland setup can cost more, but it may be the stronger route when local UAE market access, office presence, or operational flexibility matters.",
  },
  {
    question: "Can a free zone company trade directly in the UAE mainland?",
    answer:
      "Not automatically. In Dubai, eligible free zone companies holding a Dubai Unified Licence may apply for the Free Zone Mainland Operating Permit for approved activities. Other businesses may still need a branch, distribution arrangement, mainland structure, or another authority approval.",
  },
  {
    question: "What is the Free Zone Mainland Operating Permit?",
    answer:
      "It is a Dubai framework introduced under Executive Council Resolution No. 11 of 2025. In its initial phase, eligible Dubai free zone companies can apply through Invest in Dubai to conduct approved mainland activities while retaining their free zone entity.",
  },
  {
    question: "Does the new permit make mainland and free zone companies the same?",
    answer:
      "No. The permit creates a structured route for eligible activities, but it does not remove the differences in licensing, office position, operating scope, tax records, renewals, or long-term commercial fit.",
  },
] as const;

const nextStepLinks = [
  {
    label: "Mainland setup",
    href: "/mainland",
    description: "Use this route when local market access, contracts, or operating flexibility matter most.",
  },
  {
    label: "Free zone setup",
    href: "/free-zones",
    description: "Use this route for package-led setup, ownership clarity, and zone-specific activity fit.",
  },
  {
    label: "Setup cost",
    href: "/business-setup-cost-dubai",
    description: "Compare starting prices and the cost drivers behind each setup route.",
  },
] as const;

const comparisonPageLinks = [
  { href: "#route-comparison", label: "Route comparison" },
  { href: "#mainland-permit", label: "Mainland permit" },
  { href: "#next-steps", label: "Next steps" },
  { href: "#direct-answers", label: "Direct answers" },
  { href: "#primary-sources", label: "Primary sources" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/mainland-vs-free-zone-dubai",
});

export default function MainlandVsFreeZoneDubaiPage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", url: getAbsoluteUrl("/") },
      { name: "Business setup", url: getAbsoluteUrl("/business-setup") },
      {
        name: "Mainland vs free zone",
        url: getAbsoluteUrl("/mainland-vs-free-zone-dubai"),
      },
    ]),
    buildFaqSchema(faqs),
  ];

  return (
    <SiteShell currentPath="/business-setup">
      <ReadingProgress />
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}

      <PageIntro
        showBottomBorder={false}
        breadcrumb={[
          { label: "Business setup", href: "/business-setup" },
          { label: "Comparison" },
        ]}
        title="Mainland vs free zone"
        description="A practical comparison for founders deciding which Dubai company formation route fits their market access, visa, office, banking, and cost position."
        backgroundImageSrc={versionedAssetPath("/services/mainland-vs-freezone.webp")}
        backgroundImageAlt="Mainland vs free zone company setup comparison in Dubai"
        backgroundImagePosition="!object-[82%_34%]"
        backgroundImageMode="ambient"
        footerContent={
          <ServiceCredibilityPanel path="/mainland-vs-free-zone-dubai" variant="expertise" embedded />
        }
      />

      <PageSectionNavMobile items={comparisonPageLinks} />

      <section id="route-comparison" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-white py-14 md:py-18">
        <div className="mx-auto grid w-full max-w-[100rem] gap-12 px-6 md:px-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start xl:px-20">
          <div className="min-w-0">
          <SectionHeading
            eyebrow="Decision table"
            title="Route comparison"
            description="Use this as a decision tool before comparing license packages. The right setup route should match how the company will actually operate."
          />

          <div className="mt-8 overflow-hidden rounded-lg border border-[#d8d0c2] bg-white">
            <div className="overflow-x-auto">
              <table className="min-w-[64rem] border-collapse text-left">
                <thead className="bg-[#f5efe4] text-[#11232a]">
                  <tr>
                    {["Factor", "Mainland setup", "Free zone setup"].map((heading) => (
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
                  {comparisonRows.map((row) => (
                    <tr key={row.factor} className="border-t border-[#e4dacb]">
                      <th
                        scope="row"
                        className="w-[11rem] px-4 py-4 text-[1rem] font-semibold leading-6 text-[#11232a]"
                      >
                        {row.factor}
                      </th>
                      <td className="px-4 py-4 text-[0.98rem] font-medium leading-6 text-[#11232a]/84">
                        {row.mainland}
                      </td>
                      <td className="px-4 py-4 text-[0.98rem] font-medium leading-6 text-[#11232a]/84">
                        {row.freeZone}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          </div>
          <PageSectionNav items={comparisonPageLinks} />
        </div>
      </section>

      <section
        id="mainland-permit"
        className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#11232a] py-16 text-white md:py-20 [&_.eyebrow]:text-[#ead5aa] [&_.section-title]:text-white [&_.text-muted]:text-white/84"
      >
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Current Dubai framework"
            title="A new route from a Dubai free zone to the mainland"
            description="The Free Zone Mainland Operating Permit changes the comparison for some companies, but it does not make mainland access automatic."
          />

          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Who can apply",
                text: "Eligible companies licensed in Dubai free zones that hold a Dubai Unified Licence.",
              },
              {
                title: "Initial activity scope",
                text: "Non-regulated activities including technology, consultancy, design, professional services, and trading.",
              },
              {
                title: "Validity and fee",
                text: "Six months at AED 5,000, renewable for the same period and fee under the published initial framework.",
              },
              {
                title: "Records and tax",
                text: "Separate financial records are required for mainland activity, with the related revenue subject to the published corporate tax treatment.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/14 bg-white/7 p-6 backdrop-blur-sm"
              >
                <h3 className="text-[1.16rem] font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-[1rem] leading-7 text-white/82">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-7 border-l-2 border-[#ead5aa] pl-5 text-[1.03rem] leading-8 text-white/86">
            A permanent mainland company may still be the stronger route where a business needs
            broader local operations, regulated activities, a long-term mainland presence, or an
            operating model that falls outside the permit.
          </div>
        </div>
      </section>

      <section id="next-steps" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Next step"
            title="Move from comparison to route choice"
            description="Once the tradeoffs are clear, compare the route pages and cost guide before committing to a package."
          />
          <div className="mt-7">
            <ServiceSubpageLinks items={nextStepLinks} columnsClassName="md:grid-cols-2 xl:grid-cols-4" />
          </div>
        </div>
      </section>

      <ServiceAnswerSection
        title="Direct answers"
        description="Short answers for founders comparing mainland and free zone setup before choosing a route."
        items={faqs}
      />

      <ServiceCredibilityPanel path="/mainland-vs-free-zone-dubai" variant="sources" />
    </SiteShell>
  );
}
