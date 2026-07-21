import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { ServiceAnswerSection } from "@/components/service-answer-section";
import { ServiceSubpageLinks } from "@/components/service-subpage-links";
import { PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
import { TalkToZenesisPanel } from "@/components/talk-to-zenesis-panel";
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
      "Usually better for free zone activity, international work, consulting, digital, trade, and founder-led packages.",
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
      "Not automatically. The correct route depends on the business activity, emirate, client type, and whether an additional permit, distribution arrangement, branch, or mainland structure is needed.",
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
  {
    label: "Low-cost setup",
    href: "/low-cost-business-setup-uae",
    description: "Check the cheapest viable routes without choosing a structure that blocks operations later.",
  },
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
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}

      <PageIntro
        breadcrumb={[
          { label: "Business setup", href: "/business-setup" },
          { label: "Comparison" },
        ]}
        title="Mainland vs free zone"
        description="A practical comparison for founders deciding which Dubai company formation route fits their market access, visa, office, banking, and cost position."
        backgroundImageSrc="/backgrounds/business-setup-bg.webp"
        backgroundImageAlt="Mainland vs free zone company setup comparison in Dubai"
        backgroundImagePosition="!object-[100%_100%]"
        backgroundImageMode="ambient"
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow=""
            title="Route comparison"
            description="Use this as a decision tool before comparing license packages. The right setup route should match how the company will actually operate."
            titleClassName="!text-white"
            descriptionClassName="!text-white/88"
          />

          <div className="mt-8 overflow-hidden rounded-[1.55rem] border border-[#d8d0c2] bg-white shadow-[0_16px_44px_rgba(17,35,42,0.08)]">
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
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
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

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-14 md:py-16">
        <div className="mx-auto w-full max-w-[88rem] px-6 md:px-10 xl:px-16">
          <TalkToZenesisPanel
            wrapperClassName="rounded-[2rem] bg-[#11232a] p-8 text-white shadow-[0_22px_70px_rgba(17,35,42,0.18)] md:p-10"
            eyebrowClassName="eyebrow text-white/58"
            titleClassName="section-title mt-4 font-semibold text-white"
            textClassName="text-[1.22rem] font-medium leading-9 text-white/94"
            title="Compare the route before you commit."
            paragraphs={[
              "Zenesis can review your activity, ownership, visa needs, client model, and banking expectations before recommending mainland, free zone, or another route.",
            ]}
            buttonClassName="inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
            imageClassName="object-cover object-[74%_center]"
          />
        </div>
      </section>
    </SiteShell>
  );
}

