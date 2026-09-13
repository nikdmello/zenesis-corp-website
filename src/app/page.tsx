import NextImage from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/arrow-right-icon";
import { ConsultationFormButton } from "@/components/consultation-button";
import { AwardsVideoExperience } from "@/components/awards-video-experience";
import { HomepageReviewsCarousel } from "@/components/homepage-reviews-carousel";
import { PremierClientsCarousel } from "@/components/premier-clients-carousel";
import {
  HomepageInsightsCarousel,
  type HomepageInsightCard,
} from "@/components/homepage-insights-carousel";
import { HomepageServicesReveal } from "@/components/homepage-services-reveal";
import { HeroBackgroundVideo } from "@/components/hero-background-video";
import { JsonLd } from "@/components/json-ld";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ServiceAnswerSection } from "@/components/service-answer-section";
import { SectionHeading, SiteShell } from "@/components/site-shell";
import {
  featuredProfile,
  testimonials,
} from "@/lib/site-content";
import { insightPosts } from "@/lib/insights";
import { businessSetupPricingAnswer } from "@/lib/business-setup-pricing";
import { buildFaqSchema } from "@/lib/seo";

const trustSignals = [
  {
    label: "Excellence in company formation",
    value: "Excellence in Company Formation Award",
    detail: "Dubai, UAE · 2025",
  },
  {
    label: "Featured Profile",
    value: "Cecilia D'Cunha in Global Leaders Today",
    detail:
      "A full-length profile on Cecilia D'Cunha covering her early offshore incorporation work, her move into the UAE in 1998, and the leadership path that led to Zenesis.",
  },
] as const;

const customerPaths = [
  {
    title: "Business setup",
    href: "/business-setup",
    icon: "business",
    cta: "Setup options",
    imageSrc: "/services/business-setup-services-uae.webp",
    imageAlt: "Business advisers planning a UAE company setup route",
    lead: "Start a company",
    items: [
      "Mainland company formation",
      "Free zone company formation",
      "Offshore structuring",
    ],
  },
  {
    title: "Accounting and tax",
    href: "/accounting-tax",
    icon: "accounting",
    cta: "Tax support",
    imageSrc: "/services/accounting-and-tax.webp",
    imageAlt: "Accounting and tax review for a UAE business",
    lead: "Keep the company compliant",
    items: ["Bookkeeping", "VAT registration and filing", "Corporate tax"],
  },
  {
    title: "Visa and banking",
    href: "/visa-and-banking",
    icon: "visa",
    cta: "Visa and banking",
    imageSrc: "/services/visa-banking-consultation.webp",
    imageAlt: "Business advisers discussing visa and banking requirements in Dubai",
    lead: "Move people and money",
    items: ["Golden Visa", "Company visas", "Bank account support"],
  },
  {
    title: "Corporate support",
    href: "/corporate-support",
    icon: "support",
    cta: "Corporate support",
    imageSrc: "/services/branch-and-representative-offices.webp",
    imageAlt: "Corporate support for an established UAE company",
    lead: "Maintain or change a company",
    items: ["Renewals and amendments", "Liquidation and restoration", "Document attestation"],
  },
] as const;

const homepageFaqs = [
  {
    question: "How do I choose between mainland, free zone, and offshore setup?",
    answer:
      "The route depends on how the business will operate after incorporation. Mainland usually suits businesses that need direct UAE market access. Free zones often suit consultants, startups, digital businesses, and international operators seeking a packaged setup. Offshore structures are generally used for holding, asset ownership, and specific international arrangements. Zenesis compares these options before an application is filed.",
  },
  {
    question: "How much does business setup in Dubai cost with Zenesis?",
    answer: businessSetupPricingAnswer,
  },
  {
    question: "What company structures can Zenesis help set up in the UAE?",
    answer:
      "Zenesis can help with mainland, free zone, and offshore company setup in the UAE. That includes helping you compare structures such as sole proprietorships, LLCs, partnerships, civil companies, branch offices, representative offices, PJSCs, PrJSCs, and joint ventures based on the business activity, ownership plan, and how the company needs to operate.",
  },
  {
    question: "Can Zenesis help compare specific free zones?",
    answer:
      "Yes. Zenesis compares free zones such as DMCC, Dubai South, IFZA, Meydan, Shams, RAKEZ, Ajman Free Zone, Sharjah Airport International Free Zone, Fujairah Free Zone, and Umm Al Quwain Free Trade Zone. The comparison covers business activity, package terms, visa requirements, and operating needs.",
  },
  {
    question: "Can Zenesis help with business banking and KYC preparation?",
    answer:
      "Yes. Zenesis can support UAE business bank account opening, KYC preparation, compliance documents, and coordination around the banking process. This usually matters early because the company structure, shareholder profile, and business activity all affect how the bank reviews the application.",
  },
  {
    question: "Can Zenesis help with visas after company setup?",
    answer:
      "Yes. Zenesis can help with both company visas and Golden Visa support. Company visa support typically covers the setup, labor approvals, entry permit, medical, Emirates ID, and residency process. Golden Visa support can be relevant for investors, entrepreneurs, professionals, researchers, creatives, and qualifying students or graduates.",
  },
  {
    question: "Do I need document attestation for UAE setup or residency matters?",
    answer:
      "In many cases, yes. Personal, educational, and commercial documents may need formal attestation before a UAE authority will accept them. Zenesis can help review the document type, explain the attestation path, and coordinate the steps across home-country legalization, embassy action, and MOFA where required.",
  },
  {
    question: "What accounting and tax support can Zenesis handle after setup?",
    answer:
      "Zenesis can support bookkeeping, VAT registration and filing, corporate tax registration, and annual corporate tax filing after setup. That can include VAT registration assessment and application preparation, recurring bookkeeping, VAT reconciliations, payroll support, audit-ready records, and work across accounting tools such as QuickBooks, Zoho Books, Tally, and Excel.",
  },
  {
    question: "Can Zenesis help if my business is already running in the UAE?",
    answer:
      "Yes. Zenesis also supports existing UAE businesses with bookkeeping, VAT registration and filing, corporate tax, renewals, document handling, banking preparation, and other corporate services.",
  },
  {
    question: "What happens after the first consultation?",
    answer:
      "Zenesis first reviews the activity, ownership, visa requirements, and operating plans. The team then compares setup routes, prepares the documents, manages the licensing process, and coordinates follow-on work such as banking, visas, bookkeeping, VAT, and corporate tax.",
  },
] as const;

const homepageInsightCards: HomepageInsightCard[] = insightPosts.map(
  ({
    slug,
    category,
    title,
    description,
    dateLabel,
    heroImageSrc,
    heroImageAlt,
    heroImageClassName,
  }) => ({
    slug,
    category,
    title,
    description,
    dateLabel,
    heroImageSrc,
    heroImageAlt,
    heroImageClassName,
  }),
);

const experienceLedger = [
  { value: "20+", label: "years supporting UAE and international business setup" },
  { value: "480+", label: "Google reviews from clients and business owners" },
] as const;

export default function Home() {
  const googleReviewCountLabel = "480+ reviews";
  const [companyFormationAward] = trustSignals;
  const faqSchema = buildFaqSchema(homepageFaqs);

  return (
    <SiteShell currentPath="/">
      <JsonLd data={faqSchema} />
      <div className="relative z-10">
        <section className="home-editorial-hero relative left-1/2 -mt-10 min-h-[calc(100svh-9rem)] w-screen -translate-x-1/2 overflow-hidden bg-[#011735] text-white md:-mt-14">
          <div className="hero-medallion-stage absolute inset-0 z-0" aria-hidden="true">
            <HeroBackgroundVideo
              webmSrc="/media/z-medallion-120-v2.webm"
              mp4Src="/media/z-medallion-120-v2.mp4"
              posterSrc="/media/z-medallion-120-v2-poster.webp"
            />
          </div>
          <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_18%,rgba(1,23,53,0.16)_58%,rgba(1,23,53,0.55)_100%)]" aria-hidden="true" />
          <div className="home-hero-composition relative z-10 mx-auto w-full max-w-[112rem] px-6 md:px-12 xl:px-20">
            <div className="home-hero-heading text-center">
              <h1 className="home-hero-display hero-reveal hero-reveal-1 mx-auto text-white">
                Set up your business in Dubai.
              </h1>
            </div>
            <div className="home-hero-support mx-auto max-w-[48rem] text-center">
              <p className="hero-reveal hero-reveal-3 mx-auto max-w-[50rem] text-[1rem] leading-7 text-white/78 md:text-[1.16rem] md:leading-8">
                We provide company formation, licensing, visas, banking, accounting, tax, and ongoing corporate support.
              </p>
              <div className="hero-reveal hero-reveal-4 mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-7">
                <ConsultationFormButton
                  label="Schedule a Free Consultation"
                  leadingIcon={
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#011735] text-[#f4dfb5] shadow-[0_5px_14px_rgba(17,35,42,0.22)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 3v3M17 3v3M4.5 9h15" />
                        <rect x="4.5" y="5" width="15" height="15" rx="3" />
                        <path d="m9.5 14 1.7 1.7 3.6-4" />
                      </svg>
                    </span>
                  }
                  className="group inline-flex min-h-12 w-fit max-w-full items-center justify-center whitespace-nowrap !rounded-[0.35rem] border border-[#f6e4bd]/90 bg-[#ead5aa] px-4 py-2 text-sm font-semibold !text-[#011735] shadow-[0_18px_42px_rgba(7,21,27,0.25)] outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f2dfb9] focus-visible:ring-2 focus-visible:ring-[#f4dfb5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#011735] sm:px-5 sm:text-base"
                />
                <Link href="/business-setup-cost-dubai" className="inline-flex min-h-12 items-center border-b border-white/45 px-1 text-sm font-semibold text-white transition-colors hover:border-[#ead5aa] hover:text-[#ead5aa] sm:text-base">
                  View starting prices <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="relative left-1/2 w-screen -translate-x-1/2 border-y border-white/12 bg-[#011735] text-white">
          <div className="mx-auto grid w-full max-w-[84rem] grid-cols-2 px-5 md:px-12 xl:px-20">
            {experienceLedger.map((item, index) => (
              <ScrollReveal key={item.value} delay={index * 90} className="flex flex-col items-center justify-center border-r border-white/14 px-4 py-6 text-center last:border-r-0 md:min-h-[9.5rem] md:px-12 md:py-8">
                <p className="text-[2rem] font-semibold leading-none text-[#ead5aa] md:text-[2.65rem]">{item.value}</p>
                <p className="mt-3 max-w-[22rem] text-[0.75rem] leading-5 text-white/68 md:mt-4 md:text-[0.92rem] md:leading-6">{item.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <HomepageServicesReveal items={customerPaths} />

      <section id="premier-clients" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#011735] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <ScrollReveal>
          <div className="max-w-[50rem]">
            <h2 className="section-title w-full border-t border-[#b88d53]/55 pt-5 !text-[1.75rem] font-semibold !leading-[1.16] !tracking-[-0.02em] text-white sm:!text-[1.9rem] md:!text-[2.05rem]">
              Our premier clients
            </h2>
            <p className="mt-4 max-w-4xl text-[1.06rem] leading-8 text-white/84 md:text-[1.1rem]">
              Companies that work with Zenesis on incorporation, compliance, residency, and business administration.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-8">
            <PremierClientsCarousel />
          </div>
        </ScrollReveal>
        </div>
      </section>

      <section
        id="awards-recognition"
        className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20"
      >
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <ScrollReveal>
          <div className="mb-9">
            <SectionHeading
              eyebrow="Recognition"
              title="Awards and recognition"
              description="Zenesis received the Excellence in Company Formation Award in Dubai in 2025."
            />
          </div>

          <div className="border-y border-[#cfc4b4] py-6 md:py-8">
            <AwardsVideoExperience />

            <h3 className="mt-4 text-[1.35rem] font-semibold leading-[1.16] text-[#011735] sm:hidden">
              Best Real Estate Management Consultancy of the Year
            </h3>

            <div className="mt-8 grid gap-6 border-t border-[#cfc4b4] pt-7 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-[#8d7453]">{companyFormationAward.detail}</p>
                <h3 className="mt-3 text-[1.25rem] font-semibold text-[#011735]">{companyFormationAward.value}</h3>
              </div>
              <Link href={featuredProfile.href} className="group border-l-0 border-[#cfc4b4] md:border-l md:pl-7">
                <p className="text-sm font-semibold text-[#8d7453]">Leadership profile</p>
                <h3 className="mt-3 text-[1.25rem] font-semibold text-[#011735] transition-colors group-hover:text-[#244ba8]">Cecilia D&apos;Cunha in Global Leaders Today</h3>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#244ba8]">Read the profile <ArrowRightIcon className="h-4 w-4" /></span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
        </div>
      </section>

      <section id="homepage-insights" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#011735] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Blog"
            eyebrowClassName="!text-white/68"
            title="Latest insights"
            titleClassName="!text-white"
            description="Guidance on setting up, operating, and keeping a business compliant in the UAE."
            descriptionClassName="!text-white/84"
          />
        </ScrollReveal>

        <div className="mt-10">
          <ScrollReveal>
            <HomepageInsightsCarousel posts={homepageInsightCards} />
          </ScrollReveal>
        </div>
        </div>
      </section>

      <section id="client-reviews" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-20 border-y border-[#d8d0c2] bg-[#f8f6f1] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <ScrollReveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Google Reviews"
              eyebrowClassName="!text-[#8d7453]"
              title="Client reviews"
              titleClassName="!text-[#07151b]"
              description="What clients say about working with Zenesis across company formation, visas, banking, and long-term business support."
              descriptionClassName="!text-muted"
            />
            <div className="flex items-center gap-4 md:shrink-0">
              <NextImage
                src="/logos/google.webp"
                alt="Google reviews"
                width={168}
                height={72}
                className="h-14 w-auto object-contain md:h-16"
              />
              <div>
                <p className="text-[1.35rem] font-semibold tracking-[-0.03em] text-[#07151b] md:text-[1.55rem]">
                  {googleReviewCountLabel}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-8">
          <ScrollReveal>
            <HomepageReviewsCarousel testimonials={testimonials} />
          </ScrollReveal>
        </div>
        </div>
      </section>

      <ServiceAnswerSection
        title="Direct answers"
        description="Common questions on setup routes, structures, visas, banking, attestation, and ongoing compliance in the UAE."
        items={homepageFaqs}
      />

      </div>
    </SiteShell>
  );
}
