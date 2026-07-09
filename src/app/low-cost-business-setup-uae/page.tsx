import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  getAbsoluteUrl,
} from "@/lib/seo";

const pageTitle = "Low Cost Business Setup in UAE | Cheapest Viable Routes";
const pageDescription =
  "Compare low-cost business setup routes in the UAE, including freelance permits, free zone setup without visa, free zone setup with visa, and mainland setup tradeoffs.";

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
        breadcrumb={[
          { label: "Pricing", href: "/business-setup-cost-dubai" },
          { label: "Low cost setup" },
        ]}
        title="Low cost business setup in UAE"
        description="A practical guide to the cheapest viable setup routes, and the point where a low headline price can become the wrong structure."
        backgroundImageSrc="/backgrounds/business-setup-bg.webp"
        backgroundImageAlt="Low cost business setup and company formation in the UAE"
        backgroundImagePosition="!object-[100%_100%]"
        backgroundImageMode="ambient"
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
        <div className="mx-auto grid w-full max-w-[100rem] gap-5 px-6 md:px-12 lg:grid-cols-3 xl:px-20">
          {faqs.map((item) => (
            <article
              key={item.question}
              className="rounded-[1.55rem] border border-[#d8d0c2] bg-white p-6 text-[#11232a] shadow-[0_16px_44px_rgba(17,35,42,0.08)]"
            >
              <h2 className="text-[1.22rem] font-semibold leading-tight tracking-[-0.04em] text-foreground">
                {item.question}
              </h2>
              <p className="mt-4 text-[1rem] font-medium leading-7 text-foreground/86">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-14 text-white md:py-16">
        <div className="mx-auto w-full max-w-[88rem] px-6 md:px-10 xl:px-16">
          <div className="rounded-[2rem] bg-white/6 p-7 shadow-[0_28px_90px_rgba(17,35,42,0.18)] md:p-8">
            <h2 className="max-w-[19ch] text-[2.2rem] font-semibold tracking-[-0.05em] text-white">
              Find the lowest route that still fits.
            </h2>
            <p className="mt-5 max-w-4xl text-[1.16rem] leading-9 text-white/94 md:text-[1.22rem]">
              Zenesis can help compare the leanest setup route against your
              activity, visa plan, banking expectations, and renewal position
              before you commit.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/business-setup-cost-dubai"
                className="rounded-full bg-[#25D366] px-6 py-3 text-center text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
              >
                View price table
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-semibold !text-white backdrop-blur-md transition-colors hover:bg-white/[0.18]"
              >
                Ask Zenesis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

