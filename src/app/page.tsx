import NextImage from "next/image";
import Link from "next/link";
import { ConsultationFormButton } from "@/components/consultation-button";
import { HeroBackgroundVideo } from "@/components/hero-background-video";
import { AwardsVideoExperience } from "@/components/awards-video-experience";
import { HomepageReviewsCarousel } from "@/components/homepage-reviews-carousel";
import { PremierClientsCarousel } from "@/components/premier-clients-carousel";
import {
  HomepageInsightsCarousel,
  type HomepageInsightCard,
} from "@/components/homepage-insights-carousel";
import { HomepageServicesReveal } from "@/components/homepage-services-reveal";
import { JsonLd } from "@/components/json-ld";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ServiceAnswerSection } from "@/components/service-answer-section";
import { SectionHeading, SiteShell } from "@/components/site-shell";
import { versionedAssetPath } from "@/lib/asset-paths";
import {
  featuredProfile,
  testimonials,
} from "@/lib/site-content";
import { insightPosts } from "@/lib/insights";
import { businessSetupPricingAnswer } from "@/lib/business-setup-pricing";
import { buildFaqSchema } from "@/lib/seo";

const trustSignals = [
  {
    icon: "🏅",
    label: "Excellence in company formation",
    value: "Excellence in Company Formation Award",
    detail: "Dubai, UAE · 2025",
  },
  {
    icon: "📰",
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
      "The right route depends on what the business needs to do after incorporation. Mainland usually suits businesses that want UAE market access and broader local operating flexibility. Free zones are often preferred by consultants, startups, digital businesses, and international operators who want a more packaged setup path. Offshore structures are usually considered for holding, asset protection, and specific international ownership arrangements. Zenesis helps compare those routes before you commit.",
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
      "Yes. Zenesis can help compare free zones such as DMCC, Dubai South, IFZA, Meydan, Shams, RAKEZ, Ajman Free Zone, Sharjah Airport International Free Zone, Fujairah Free Zone, and Umm Al Quwain Free Trade Zone. The goal is to narrow the shortlist based on business activity, package fit, visa needs, and how the company will operate after setup.",
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
      "Yes. The services are not only for first-time incorporation. Existing businesses can use Zenesis for bookkeeping, VAT registration and filing, corporate tax support, renewals, document handling, banking-related support, and other corporate services where the business already exists but needs cleaner execution.",
  },
  {
    question: "What happens after the first consultation?",
    answer:
      "The usual flow is to understand the activity, ownership, visa needs, and operating goals first, then compare the right route, prepare the documents, handle the licensing or authority process, and support the follow-on needs such as banking, visas, bookkeeping, VAT, and corporate tax. The point is to make the next step clearer before paperwork starts.",
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
  { value: "18", label: "UAE free zone and offshore setup routes covered in our guidance" },
  { value: "8", label: "legal structures compared for UAE company formation" },
] as const;

export default function Home() {
  const googleReviewCountLabel = "480+ reviews";
  const [companyFormationAward] = trustSignals;
  const faqSchema = buildFaqSchema(homepageFaqs);

  return (
    <SiteShell currentPath="/">
      <JsonLd data={faqSchema} />
      <div className="relative z-10">
        <section className="photo-hero relative left-1/2 -mt-10 min-h-[100svh] w-screen -translate-x-1/2 overflow-hidden bg-[#11232a] text-white md:-mt-14">
          <div className="absolute inset-0">
            <HeroBackgroundVideo
              src={versionedAssetPath("/media/zenesis-video.webm")}
              poster={versionedAssetPath("/media/zenesis-video-poster.webp")}
              className="h-full w-full object-cover object-[66%_30%] lg:object-[82%_27%]"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#11232a] via-[#11232a]/94 via-36% to-transparent md:h-72" />

          <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[100rem] flex-col justify-end px-5 pb-3 pt-26 md:block md:px-12 md:pb-3 md:pt-12 xl:px-20">
            <div className="bottom-3 mx-auto w-full md:absolute md:bottom-3 md:left-1/2 md:w-[min(100%-6rem,68rem)] md:-translate-x-1/2 xl:w-[min(100%-10rem,72rem)]">
              <div className="mx-auto w-full max-w-[48rem] px-0 py-4 sm:px-2 md:max-w-none md:px-0 md:py-0">
                <h1 className="hero-reveal hero-reveal-1 mx-auto max-w-[22rem] px-2 text-center text-[1.4rem] font-medium leading-[1.12] tracking-[0] text-white min-[380px]:text-[1.5rem] sm:max-w-none sm:text-[2.35rem] sm:leading-[1.04] md:px-12 md:text-[2.8rem] lg:text-[3.05rem] xl:whitespace-nowrap xl:text-[2.15rem] min-[1900px]:text-[3rem] min-[2200px]:text-[3.6rem]">
                  <span className="block sm:whitespace-nowrap xl:inline">Over <span className="relative inline-block">20 years<span aria-hidden="true" className="hero-subtitle-accent absolute inset-x-0 -bottom-1 h-1 scale-x-[-1]" /></span> of </span>
                  <span className="block xl:inline">
                    <span className="block sm:whitespace-nowrap xl:inline">UAE and international </span>
                    <span className="block sm:hidden">business setup</span>
                    <span className="block sm:hidden">experience</span>
                    <span className="hidden sm:block sm:whitespace-nowrap xl:inline">business setup experience</span>
                  </span>
                </h1>

                <div className="hero-reveal hero-reveal-2 mx-auto mt-5 w-full max-w-[58rem] px-5 text-center sm:px-4 lg:px-1">
                  <p className="hero-subtitle-copy mx-auto block w-fit max-w-[21rem] whitespace-normal px-0 text-center text-[#f7efe1] [text-wrap:balance] sm:max-w-full lg:max-w-none lg:whitespace-nowrap">
                    Company formation, licensing, visas, banking, compliance, and ongoing corporate support
                  </p>
                </div>
              </div>

              <div className="hero-reveal hero-reveal-3 mt-2 flex justify-center">
                <div className="flex flex-col items-center gap-4">
                  <ConsultationFormButton
                    label="Schedule a Free Consultation"
                    leadingIcon={
                      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#11232a] text-[#f4dfb5] shadow-[0_5px_14px_rgba(17,35,42,0.22)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
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
                    className="group inline-flex min-h-12 w-fit max-w-full items-center justify-center whitespace-nowrap rounded-full border border-[#f6e4bd]/90 bg-[linear-gradient(135deg,#fff9ec_0%,#edd9b2_52%,#d9b97e_100%)] px-4 py-2 text-sm font-semibold tracking-[0.015em] !text-[#11232a] shadow-[0_20px_48px_rgba(7,21,27,0.28),inset_0_1px_0_rgba(255,255,255,0.9)] outline-none ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#fff1d3] hover:brightness-[1.04] hover:shadow-[0_24px_56px_rgba(7,21,27,0.34),inset_0_1px_0_rgba(255,255,255,0.95)] focus-visible:ring-2 focus-visible:ring-[#f4dfb5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#11232a] active:translate-y-0 sm:px-6 sm:text-base md:relative md:top-1"
                  />

                  <div className="hero-reveal hero-reveal-4 flex items-center gap-3.5 text-white">
                    <div className="origin-left scale-[0.94] sm:scale-[1.02] md:scale-[1.08]">
                      <NextImage
                        src="/logos/google.webp"
                        alt="Google reviews"
                        width={168}
                        height={72}
                        className="h-9 w-auto object-contain md:h-11"
                      />
                    </div>
                    <span
                      aria-hidden="true"
                      className="h-7 w-px shrink-0 bg-white/22"
                    />
                    <span className="inline-flex min-w-max items-center whitespace-nowrap text-[0.96rem] md:text-[1.12rem]">
                      <span className="font-semibold text-white">480+</span>
                      <span className="ml-1.5 font-medium text-white/76">reviews</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative left-1/2 w-screen -translate-x-1/2 border-y border-white/12 bg-[#11232a] text-white">
          <div className="mx-auto grid w-full max-w-[100rem] px-6 sm:grid-cols-2 md:px-12 xl:grid-cols-4 xl:px-20">
            {experienceLedger.map((item, index) => (
              <ScrollReveal key={item.value} delay={index * 70} className="flex flex-col items-center border-b border-white/12 py-7 text-center last:border-b-0 sm:border-r sm:px-6 sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0 xl:border-b-0 xl:border-r xl:py-8 xl:[&:nth-child(2n)]:border-r xl:last:border-r-0">
                <p className="text-[1.65rem] font-semibold leading-none text-[#ead5aa] md:text-[1.9rem]">{item.value}</p>
                <p className="mt-3 max-w-[21rem] text-[0.92rem] leading-6 text-white/70">{item.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <HomepageServicesReveal items={customerPaths} />

      <section id="premier-clients" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <ScrollReveal>
          <div className="max-w-[50rem]">
            <h2 className="section-title w-full border-t border-[#b88d53]/55 pt-5 !text-[1.75rem] font-semibold !leading-[1.16] !tracking-[-0.02em] text-white sm:!text-[1.9rem] md:!text-[2.05rem]">
              Our premier clients
            </h2>
            <p className="mt-4 max-w-4xl text-[1.06rem] leading-8 text-white/84 md:text-[1.1rem]">
              Organizations and operators Zenesis supports across incorporation, compliance, residency, and ongoing business administration.
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
              description="Ceremony moments and recognition for Zenesis work across business consultancy, company formation, and leadership."
            />
          </div>

          <div className="border-y border-[#cfc4b4] py-6 md:py-8">
            <AwardsVideoExperience />

            <h3 className="mt-4 text-[1.35rem] font-semibold leading-[1.16] text-[#11232a] sm:hidden">
              Best Real Estate Management Consultancy of the Year
            </h3>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="relative aspect-[3/2] overflow-hidden border border-[#d8cdbc] bg-[#07151b]">
                <NextImage
                  src="/recognition/zenesis-irecms-awards.webp"
                  alt="Cecilia D'Cunha and the Zenesis team holding awards at IRECMS Dubai"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-500 hover:scale-[1.015]"
                />
              </div>
              <div className="relative aspect-[3/2] overflow-hidden border border-[#d8cdbc] bg-[#07151b]">
                <NextImage
                  src="/recognition/zenesis-best-real-estate-management-consultancy.webp"
                  alt="Zenesis receiving the Best Real Estate Management Consultancy of the Year award"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-500 hover:scale-[1.015]"
                />
              </div>
            </div>

            <div className="mt-8 grid gap-6 border-t border-[#cfc4b4] pt-7 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-[#8d7453]">{companyFormationAward.detail}</p>
                <h3 className="mt-3 text-[1.25rem] font-semibold text-[#11232a]">{companyFormationAward.value}</h3>
              </div>
              <Link href={featuredProfile.href} className="group border-l-0 border-[#cfc4b4] md:border-l md:pl-7">
                <p className="text-sm font-semibold text-[#8d7453]">Leadership profile</p>
                <h3 className="mt-3 text-[1.25rem] font-semibold text-[#11232a] transition-colors group-hover:text-[#244ba8]">Cecilia D&apos;Cunha in Global Leaders Today</h3>
                <span className="mt-3 inline-flex text-sm font-semibold text-[#244ba8]">Read the profile →</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Blog"
            eyebrowClassName="!text-white/68"
            title="Latest blog posts"
            titleClassName="!text-white"
            description="Recent guidance on business setup, accounting and tax, and visa and banking questions for UAE founders and operators."
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

      <section id="client-reviews" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-20 bg-[#f5efe4] py-16 md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-full max-w-[64rem] md:w-[46vw] md:min-w-[34rem] xl:w-[52vw] xl:min-w-[42rem]"
        >
          <div
            className="absolute inset-0 opacity-[0.32] md:opacity-[0.48] xl:opacity-[0.54]"
            style={{
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 18%, rgba(0,0,0,0.32) 36%, rgba(0,0,0,0.72) 58%, #000 76%, #000 100%)",
              maskImage:
                "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 18%, rgba(0,0,0,0.32) 36%, rgba(0,0,0,0.72) 58%, #000 76%, #000 100%)",
            }}
          >
            <NextImage
              src="/sections/client-reviews.webp"
              alt=""
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 46vw, 1024px"
              className="object-cover object-right"
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <ScrollReveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Google Reviews"
              eyebrowClassName="!text-[#8d7453]"
              title="Client reviews"
              titleClassName="!text-[#07151b]"
              description="Client feedback on business growth, long-term support, company formation, visas, banking, and offshore structures."
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
