import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { ServiceAnswerSection } from "@/components/service-answer-section";
import { ServiceCredibilityPanel } from "@/components/service-credibility-panel";
import { ServiceSubpageLinks } from "@/components/service-subpage-links";
import { PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
import { TalkToZenesisPanel } from "@/components/talk-to-zenesis-panel";
import { versionedAssetPath } from "@/lib/asset-paths";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  getAbsoluteUrl,
} from "@/lib/seo";

const pageTitle = "Low Cost Business Setup in UAE 2026 | Cheapest Viable Routes";
const pageDescription =
  "Compare low-cost business setup routes in the UAE, including freelance permits, free zone setup without visa, free zone with visa, mainland setup, and hidden cost tradeoffs.";

const lowCostRoutes = [
  {
    route: "Freelance permit",
    startingPoint: "From AED 4,000 with Zenesis",
    bestFor:
      "Independent professionals who need a lean entry route before building a larger company structure.",
    caution:
      "Check activity scope, visa needs, banking expectations, and whether the permit fits future client work.",
  },
  {
    route: "Free zone without visa",
    startingPoint: "From AED 7,000 with Zenesis",
    bestFor:
      "Founders who want a UAE company structure without immediate residency or employee visa requirements.",
    caution:
      "The cheapest zone may not be the right zone for banking, renewals, office rules, or activity fit.",
  },
  {
    route: "Free zone with visa",
    startingPoint: "From AED 15,000 with Zenesis",
    bestFor:
      "Entrepreneurs who need company setup aligned with UAE residency planning.",
    caution:
      "Budget for visa allocation, establishment card, medical, Emirates ID, health insurance, and renewal rules.",
  },
  {
    route: "Mainland setup",
    startingPoint: "From AED 10,000 with Zenesis",
    bestFor:
      "Businesses that need direct UAE market access, local clients, or broader operating flexibility.",
    caution:
      "Do not compare mainland only on headline license cost; office, approvals, and visa planning can change the real budget.",
  },
] as const;

const faqs = [
  {
    question: "What is the cheapest business setup option in the UAE?",
    answer:
      "The cheapest viable route is often a freelance permit or a low-cost free zone setup without visa, but the right answer depends on the activity, visa needs, banking expectations, client type, and future renewal costs.",
  },
  {
    question: "Is low-cost business setup always the best choice?",
    answer:
      "No. A low headline setup price can become expensive later if the route causes problems with banking, visas, activity scope, office requirements, renewals, or mainland market access.",
  },
  {
    question: "How should founders compare low-cost company formation packages?",
    answer:
      "Compare the total first-year and renewal position, not only the license fee. Include visa needs, office package, government fees, bank-readiness documents, compliance work, and whether the route fits how the business will actually operate.",
  },
] as const;

const relatedGuides = [
  {
    label: "Business setup cost Dubai",
    href: "/business-setup-cost-dubai",
    description: "Compare Zenesis starting prices and the main cost drivers by setup route.",
  },
  {
    label: "Mainland vs free zone",
    href: "/mainland-vs-free-zone-dubai",
    description: "Check whether the lowest-cost route also fits your market access and visa needs.",
  },
  {
    label: "Company formation Dubai",
    href: "/company-formation-dubai",
    description: "Review mainland, free zone, and offshore formation routes before choosing a package.",
  },
  {
    label: "Business setup services",
    href: "/business-setup-services-uae",
    description: "See how licensing, visas, banking, tax, and renewals fit into the full setup path.",
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/low-cost-business-setup-uae",
});

export default function LowCostBusinessSetupUaePage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", url: getAbsoluteUrl("/") },
      { name: "Pricing", url: getAbsoluteUrl("/business-setup-cost-dubai") },
      {
        name: "Low cost business setup",
        url: getAbsoluteUrl("/low-cost-business-setup-uae"),
      },
    ]),
    buildFaqSchema(faqs),
  ];

  return (
    <SiteShell currentPath="/business-setup-cost-dubai">
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}

      <PageIntro
        showBottomBorder={false}
        breadcrumb={[
          { label: "Pricing", href: "/business-setup-cost-dubai" },
          { label: "Low cost setup" },
        ]}
        title="Low cost business setup in UAE"
        description="A practical guide to the cheapest viable setup routes, and the point where a low headline price can become the wrong structure."
        backgroundImageSrc={versionedAssetPath("/services/low-cost-setup.webp")}
        backgroundImageAlt="Low cost business setup and company formation in the UAE"
        backgroundImagePosition="!object-[82%_34%]"
        backgroundImageMode="ambient"
        footerContent={
          <ServiceCredibilityPanel path="/low-cost-business-setup-uae" variant="expertise" embedded />
        }
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow=""
            title="Cheapest viable setup routes"
            description="The goal is not to buy the cheapest license. It is to choose the lowest-cost route that still fits your activity, banking, visa, renewal, and operating needs."
            titleClassName="!text-white"
            descriptionClassName="!text-white/88"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {lowCostRoutes.map((item) => (
              <article
                key={item.route}
                className="rounded-[1.55rem] border border-[#d8d0c2] bg-white p-6 text-[#11232a] shadow-[0_16px_44px_rgba(17,35,42,0.12)]"
              >
                <p className="text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-[#8d7453]">
                  {item.startingPoint}
                </p>
                <h2 className="mt-4 text-[1.25rem] font-semibold leading-tight tracking-[-0.04em] text-foreground">
                  {item.route}
                </h2>
                <p className="mt-4 text-[1rem] font-medium leading-7 text-foreground/86">
                  {item.bestFor}
                </p>
                <p className="mt-4 rounded-[1.1rem] border border-[#d8d0c2] bg-[#f8f5ef] px-4 py-3 text-[0.94rem] font-medium leading-6 text-foreground/78">
                  {item.caution}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Next checks"
            title="Validate the low-cost route before you choose"
            description="Use these pages to compare the cheap option against cost, structure, banking, visas, and long-term operating fit."
          />
          <div className="mt-7">
            <ServiceSubpageLinks items={relatedGuides} columnsClassName="md:grid-cols-2 xl:grid-cols-4" />
          </div>
        </div>
      </section>

      <ServiceAnswerSection
        title="Direct answers"
        description="Short answers for founders comparing low-cost setup routes before choosing a package."
        items={faqs}
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-14 md:py-16">
        <div className="mx-auto w-full max-w-[88rem] px-6 md:px-10 xl:px-16">
          <TalkToZenesisPanel
            wrapperClassName="rounded-[2rem] bg-[#11232a] p-8 text-white shadow-[0_22px_70px_rgba(17,35,42,0.18)] md:p-10"
            eyebrowClassName="eyebrow text-white/58"
            titleClassName="section-title mt-4 font-semibold text-white"
            textClassName="text-[1.22rem] font-medium leading-9 text-white/94"
            title="Find the lowest route that still fits."
            paragraphs={[
              "Zenesis can help compare the leanest setup route against your activity, visa plan, banking expectations, and renewal position before you commit.",
            ]}
            buttonClassName="inline-flex rounded-full border border-[#e2c58f] bg-[linear-gradient(180deg,#f4e4be_0%,#e7cc97_100%)] px-6 py-3 text-sm font-semibold !text-[#11232a] shadow-[0_16px_36px_rgba(231,204,151,0.24)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[linear-gradient(180deg,#f1dfb1_0%,#dfc186_100%)]"
            imageClassName="object-cover object-[74%_center]"
          />
        </div>
      </section>

      <ServiceCredibilityPanel path="/low-cost-business-setup-uae" variant="sources" />
    </SiteShell>
  );
}
