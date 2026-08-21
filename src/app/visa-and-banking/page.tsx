import { BusinessSetupRouteCard } from "@/components/business-setup-route-card";
import { JsonLd } from "@/components/json-ld";
import { PageGuideLayout } from "@/components/page-guide-layout";
import { PageSectionNavMobile } from "@/components/page-section-nav";
import { ReadingProgress } from "@/components/reading-progress";
import { ServiceAnswerSection } from "@/components/service-answer-section";
import { ServiceCredibilityPanel } from "@/components/service-credibility-panel";
import { PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
import { versionedAssetPath } from "@/lib/asset-paths";
import { serviceDetailPages } from "@/lib/service-pages";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  getAbsoluteUrl,
} from "@/lib/seo";

const config = serviceDetailPages["visa-and-banking"];

export const metadata = config.metadata;

const visaBankingPageLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#who-its-for", label: "Who it's for" },
  { href: "#core-services", label: "Core services" },
  { href: "#how-zenesis-helps", label: "How Zenesis helps" },
  { href: "#case-study", label: "Case study" },
  { href: "#direct-answers", label: "Direct answers" },
  { href: "#process", label: "Process" },
  { href: "#primary-sources", label: "Primary sources" },
] as const;

const visaBankingServices = [
  {
    title: "Golden Visa",
    href: "/golden-visa-services-in-the-uae",
    imageSrc: "/services/golden-visa.webp",
    imageAlt: "Golden Visa planning and long-term UAE residency support",
    description:
      "Long-term residency planning for investors, entrepreneurs, professionals, and qualifying family applications.",
    points: [
      "Review the qualifying category before documents are prepared.",
      "Build the evidence and submission path around the real eligibility basis.",
      "Support family sponsorship and post-approval residency follow-through.",
    ],
  },
  {
    title: "Company Visa",
    href: "/uae-company-visa",
    imageSrc: "/services/company-visas.webp",
    imageAlt: "UAE company visa support for founders and employees",
    description:
      "Residency support for founders and employees through the company, from permits through Emirates ID.",
    points: [
      "Plan founder and employee visa capacity around the company structure.",
      "Coordinate entry permits, medicals, Emirates ID, and residency issuance.",
      "Keep renewals, insurance, and family sponsorship needs visible early.",
    ],
  },
  {
    title: "Business Banking",
    href: "/open-a-bank-account-easily",
    imageSrc: "/services/banking-support.webp",
    imageAlt: "UAE business banking and KYC preparation support",
    description:
      "Account-opening and KYC preparation aligned with the company, shareholders, and expected transactions.",
    points: [
      "Prepare a clearer company profile, KYC pack, and source-of-funds context.",
      "Align the proposed account with the mainland, free zone, or offshore structure.",
      "Support document follow-up and practical coordination with banking teams.",
    ],
  },
] as const;

const whoWeHelp = [
  {
    title: "Founders relocating to the UAE",
    description:
      "Business owners who need their company, residency, Emirates ID, and banking steps planned as one sequence.",
  },
  {
    title: "Companies hiring in the UAE",
    description:
      "Businesses that need founder and employee visas aligned with establishment, labor, insurance, and renewal requirements.",
  },
  {
    title: "Investors and professionals",
    description:
      "Applicants exploring Golden Visa routes who need the category and evidence basis reviewed before submission.",
  },
  {
    title: "Businesses preparing for banking",
    description:
      "Mainland, free zone, and offshore companies that need a stronger KYC file and clearer account-opening story.",
  },
] as const;

const whyZenesis = [
  {
    title: "One practical sequence",
    description:
      "Residency and banking steps are planned around the company structure instead of being treated as unrelated tasks.",
  },
  {
    title: "Category and route clarity",
    description:
      "The visa or banking route is narrowed before documents and applications begin.",
  },
  {
    title: "Cleaner documentation",
    description:
      "Passport, company, eligibility, KYC, and supporting records are organized around what the authority or bank needs.",
  },
  {
    title: "Banking readiness",
    description:
      "The business model, shareholders, source of funds, and expected transaction profile are presented more clearly.",
  },
  {
    title: "Family and team planning",
    description:
      "Founder, employee, and family residency needs are considered early enough to avoid fragmented follow-through.",
  },
  {
    title: "Post-approval support",
    description:
      "Medical, Emirates ID, renewals, document follow-up, and later corporate support remain connected after approval.",
  },
] as const;

const processSteps = [
  {
    step: "01",
    title: "Review the structure",
    description:
      "Confirm the company, shareholders, visa needs, and expected banking use before choosing the route.",
  },
  {
    step: "02",
    title: "Set the sequence",
    description:
      "Plan which residency, establishment, KYC, and banking steps can move together and which depend on earlier approvals.",
  },
  {
    step: "03",
    title: "Prepare and submit",
    description:
      "Organize the required records, complete the relevant applications, and respond to authority or bank follow-up.",
  },
  {
    step: "04",
    title: "Complete the follow-through",
    description:
      "Finish medicals, Emirates ID, residency issuance, account-opening support, and the practical steps that follow.",
  },
] as const;

export default function VisaAndBankingPage() {
  const schemas = [
    buildServiceSchema({
      title: config.title,
      description: config.description,
      path: "/visa-and-banking",
    }),
    buildBreadcrumbSchema([
      { name: "Home", url: getAbsoluteUrl("/") },
      { name: "Visa and banking", url: getAbsoluteUrl("/visa-and-banking") },
    ]),
    buildFaqSchema(config.directAnswers ?? []),
  ];

  return (
    <SiteShell currentPath="/visa-and-banking">
      <ReadingProgress />
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}

      <PageIntro
        showBottomBorder={false}
        breadcrumb={[
          { label: "Services", href: "/#services" },
          { label: "Visa and banking" },
        ]}
        title={config.title}
        description={config.description}
        backgroundImageSrc={config.introBackgroundImageSrc ?? config.backgroundImageSrc}
        backgroundImageAlt={config.introBackgroundImageAlt ?? config.backgroundImageAlt}
        backgroundImagePosition={config.introBackgroundImagePosition}
        backgroundImageMode={config.introBackgroundImageMode ?? "ambient"}
      />

      <PageSectionNavMobile items={visaBankingPageLinks} />
      <PageGuideLayout items={visaBankingPageLinks} credibilityPath="/visa-and-banking">

      <section id="overview" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-white py-14 md:py-18">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <article className="max-w-[54rem]">
            <h2 className="text-[1.75rem] font-semibold leading-[1.16] text-[#11232a] sm:text-[1.9rem] md:text-[2.05rem]">
              Overview
            </h2>
            <div className="mt-7 max-w-[50rem] space-y-5 text-[1.12rem] leading-[2.08rem] text-[#07151b]/92 md:text-[1.18rem] md:leading-[2.2rem]">
              {config.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="who-its-for" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#11232a] py-16 md:py-20 [&_.eyebrow]:text-white/68 [&_.section-title]:text-white [&_.text-muted]:text-white/94">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Who it helps"
            title="Who it's for"
            description="The founders, teams, investors, and operating companies most likely to need residency and banking support connected properly."
          />
          <div className="balanced-editorial-grid balanced-editorial-grid-2 mt-10 grid border-y border-white/18 md:grid-cols-2">
            {whoWeHelp.map((item, index) => (
              <article
                key={item.title}
                className="border-b border-white/18 py-7 text-white"
              >
                <span className="text-sm font-semibold text-[#ead5aa]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-[1.18rem] font-semibold leading-tight text-white md:text-[1.24rem]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[1.04rem] leading-8 text-white/74">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="core-services" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Service lines"
            title="Core services"
            description="Three connected service lines for residency, company visas, and business banking."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visaBankingServices.map((item) => (
              <BusinessSetupRouteCard
                key={item.title}
                title={item.title}
                href={item.href}
                imageSrc={versionedAssetPath(item.imageSrc)}
                imageAlt={item.imageAlt}
                frontSummary={item.description}
                points={item.points}
                ctaLabel="Open service"
                variant="essential"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="how-zenesis-helps" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#11232a] py-16 md:py-20 [&_.eyebrow]:text-white/68 [&_.section-title]:text-white [&_.text-muted]:text-white/94">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Why Zenesis"
            title="How Zenesis helps"
            description="The goal is to connect company structure, residency, documentation, and banking so each approval supports the next step."
          />
          <div className="balanced-editorial-grid balanced-editorial-grid-3 mt-10 grid border-y border-white/18 md:grid-cols-2 xl:grid-cols-3">
            {whyZenesis.map((item, index) => (
              <article
                key={item.title}
                className="border-b border-white/18 py-7 text-white"
              >
                <span className="text-sm font-semibold text-[#ead5aa]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-[1.18rem] font-semibold leading-tight text-white md:text-[1.24rem]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[1.04rem] leading-8 text-white/74">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="case-study" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-start">
            <SectionHeading
              eyebrow="Client case"
              title="When Every Minute Matters"
              description="An urgent visa follow-through case where fast coordination helped a family resolve a re-entry issue the same day."
            />
            <article className="border-l-4 border-[#244ba8] bg-[#f8f6f1] px-6 py-7 text-[#11232a] md:px-8 md:py-8">
              <p className="text-[1.16rem] font-semibold leading-8 tracking-[-0.02em] text-[#11232a]">
                A client had obtained a UAE residency visa through his company and later sponsored his wife&apos;s residence visa. Because of travel disruption outside their control, she was unable to enter the UAE within the permitted six-month period.
              </p>
              <div className="mt-6 space-y-5 text-[1.04rem] font-medium leading-8 text-[#11232a]/84">
                <p>When the couple arrived in Dubai, the client was allowed to enter, but his wife was stopped at immigration because a re-entry permit was required.</p>
                <p>The call came through on a Sunday. Zenesis coordinated immediately with the sponsor at the airport, collected the required Emirates ID details, prepared the documents, and submitted the re-entry permit application without delay.</p>
                <p>The permit was approved within one hour, including document collection time, and the client&apos;s wife was able to enter the UAE the same day.</p>
              </div>
              <p className="mt-6 border-t border-[#d8d0c2] pt-5 text-[0.95rem] font-medium leading-7 text-[#11232a]/68">
                Approval times depend on the authority, case facts, documents, and eligibility. This case reflects one urgent situation where the right process and immediate follow-through made the difference.
              </p>
            </article>
          </div>
        </div>
      </section>

      <ServiceAnswerSection
        title="Direct answers"
        description="Short answers to the questions founders and companies usually need clarified before residency and banking work begins."
        items={config.directAnswers ?? []}
      />

      <section id="process" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Working rhythm"
            title="Process"
            description="A practical sequence from company and eligibility review through residency, KYC, account-opening support, and final follow-through."
          />
          <div className="balanced-editorial-grid balanced-editorial-grid-4 mt-10 grid border-y-2 border-[#8d7453]/45 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((item) => (
              <article
                key={item.step}
                className="border-b border-[#d8d0c2] py-7"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center border border-[#8d7453]/30 bg-white text-sm font-semibold text-[#8d7453]">
                  {item.step}
                </div>
                <h3 className="mt-4 text-[1.18rem] font-semibold leading-tight text-foreground md:text-[1.24rem]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[1.12rem] leading-8 text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceCredibilityPanel path="/visa-and-banking" variant="sources" />
      </PageGuideLayout>
    </SiteShell>
  );
}
