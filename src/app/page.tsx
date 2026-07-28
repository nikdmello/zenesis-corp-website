import NextImage from "next/image";
import Link from "next/link";
import { ConsultationFormButton } from "@/components/consultation-button";
import { HeroBackgroundVideo } from "@/components/hero-background-video";
import { HomepageReviewsCarousel } from "@/components/homepage-reviews-carousel";
import {
  HomepageInsightsCarousel,
  type HomepageInsightCard,
} from "@/components/homepage-insights-carousel";
import { HomepageServicesReveal } from "@/components/homepage-services-reveal";
import { JsonLd } from "@/components/json-ld";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading, SiteShell } from "@/components/site-shell";
import { TalkToZenesisPanel } from "@/components/talk-to-zenesis-panel";
import { versionedAssetPath } from "@/lib/asset-paths";
import {
  featuredProfile,
  partnerLogos,
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
    description: "Choose the right structure for your company.",
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
    description: "Stay compliant with ongoing financial obligations.",
    items: ["Bookkeeping", "VAT filing", "Corporate tax"],
  },
  {
    title: "Visa and banking",
    href: "/visa-and-banking",
    icon: "visa",
    cta: "Visa and banking",
    description: "Support for residency and banking processes.",
    items: ["Golden Visa", "Company visas", "Bank account support"],
  },
  {
    title: "Corporate support",
    href: "/contact",
    icon: "support",
    cta: "Corporate support",
    description: "Ongoing help after your business is established.",
    items: ["License renewals", "PRO services", "Company amendments"],
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
      "Zenesis can support bookkeeping, VAT filing, corporate tax registration, and annual corporate tax filing after setup. That can include recurring bookkeeping, VAT reconciliations, payroll support, audit-ready records, and work across accounting tools such as QuickBooks, Zoho Books, Tally, and Excel.",
  },
  {
    question: "Can Zenesis help if my business is already running in the UAE?",
    answer:
      "Yes. The services are not only for first-time incorporation. Existing businesses can use Zenesis for bookkeeping, VAT filing, corporate tax support, renewals, document handling, banking-related support, and other corporate services where the business already exists but needs cleaner execution.",
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

export default function Home() {
  const googleReviewCountLabel = "480+ reviews";
  const [, leadershipFeatureSignal] = trustSignals;
  const faqSchema = buildFaqSchema(homepageFaqs);

  return (
    <SiteShell currentPath="/">
      <JsonLd data={faqSchema} />
      <div className="relative z-10">
        <section className="photo-hero relative left-1/2 -mt-10 min-h-[100svh] w-screen -translate-x-1/2 overflow-hidden bg-[#11232a] text-white md:-mt-14">
          <div className="absolute inset-0">
            <HeroBackgroundVideo
              src="/zenesis-video-v2.webm"
              className="h-full w-full object-cover object-[66%_30%] lg:object-[82%_27%]"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#11232a] via-[#11232a]/94 via-36% to-transparent md:h-72" />

          <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[100rem] flex-col justify-end px-5 pb-12 pt-26 md:block md:px-12 md:pb-20 md:pt-12 xl:px-20">
            <div className="bottom-12 mx-auto w-full md:absolute md:bottom-20 md:left-1/2 md:w-[min(100%-6rem,68rem)] md:-translate-x-1/2 xl:w-[min(100%-10rem,72rem)]">
              <div className="mx-auto w-full max-w-[48rem] px-0 py-4 sm:px-2 md:max-w-none md:px-0 md:py-0">
                <h1 className="hero-reveal hero-reveal-1 mx-auto max-w-[12ch] text-center text-[2.45rem] font-semibold leading-[0.94] tracking-[-0.05em] text-white sm:max-w-[14ch] sm:text-[clamp(3.2rem,7vw,3.95rem)] lg:max-w-[16ch] lg:text-[clamp(3.3rem,4.5vw,4.45rem)] 2xl:max-w-none 2xl:whitespace-nowrap">
                  Over 20 years of business setup in Dubai
                </h1>

                <div className="hero-reveal hero-reveal-2 mx-auto mt-5 flex w-full max-w-[46rem] items-center justify-center gap-1 text-center sm:max-w-[50rem] lg:gap-1.5 2xl:max-w-none">
                  <span
                    aria-hidden="true"
                    className="hero-subtitle-accent h-[2px] w-2.5 shrink-0 sm:w-4 lg:w-5 xl:w-7 2xl:w-10"
                  />
                  <p className="hero-subtitle-copy block min-w-0 flex-1 whitespace-normal px-0 text-center text-[#f7efe1] [text-wrap:pretty] 2xl:flex-none 2xl:whitespace-nowrap">
                    Business setup, corporate tax, visa and banking, and ongoing corporate support
                  </p>
                  <span
                    aria-hidden="true"
                    className="hero-subtitle-accent h-[2px] w-2.5 shrink-0 sm:w-4 lg:w-5 xl:w-7 2xl:w-10"
                  />
                </div>
              </div>

              <div className="hero-reveal hero-reveal-3 mt-5 flex justify-center md:mt-10">
                <div className="flex flex-col items-center gap-4">
                  <ConsultationFormButton
                    label="Schedule a Free Consultation"
                    className="inline-flex min-h-12 w-full max-w-[22rem] items-center justify-center whitespace-nowrap rounded-full bg-white px-5 py-3.5 text-sm font-semibold tracking-[0.01em] !text-[#07151b] shadow-[0_18px_44px_rgba(17,35,42,0.12)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/92 sm:w-fit sm:max-w-none sm:px-7 sm:text-base"
                  />

                  <div className="hero-reveal hero-reveal-4 flex items-center gap-3.5 text-white">
                    <div className="origin-left scale-[0.94] sm:scale-[1.02] md:scale-[1.08]">
                      <NextImage
                        src="/google.webp"
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

        <HomepageServicesReveal items={customerPaths} />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <ScrollReveal>
          <div className="max-w-[50rem]">
            <h2 className="section-title font-semibold text-white">
              Our clients
            </h2>
            <p className="mt-4 max-w-4xl text-[1.16rem] leading-8 text-white/88 md:text-[1.24rem] md:leading-9">
              Organizations and operators Zenesis supports across incorporation, compliance, residency, and ongoing business administration.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {partnerLogos.map((logo) => (
              <div
                key={logo.label}
                className="flex min-h-[9rem] items-center justify-center rounded-[1.55rem] border border-[#d8d0c2] bg-white px-4 py-5 transition-transform duration-200 hover:-translate-y-0.5 md:min-h-[9.5rem]"
              >
                <NextImage
                  src={logo.src}
                  alt={`${logo.label} logo`}
                  width={320}
                  height={140}
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 40vw, 70vw"
                  className={`w-auto max-w-full object-contain opacity-90 ${
                    "isEmphasized" in logo && logo.isEmphasized
                      ? "h-24 md:h-[5.5rem]"
                      : "h-20 md:h-[4.75rem]"
                  }`}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
        </div>
      </section>

      <section
        id="client-reviews"
        className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46vw] min-w-[34rem] md:block xl:w-[52vw] xl:min-w-[42rem]"
        >
          <div
            className="absolute inset-0 opacity-[0.5] xl:opacity-[0.56]"
            style={{
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 18%, rgba(0,0,0,0.32) 36%, rgba(0,0,0,0.72) 58%, #000 76%, #000 100%)",
              maskImage:
                "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 18%, rgba(0,0,0,0.32) 36%, rgba(0,0,0,0.72) 58%, #000 76%, #000 100%)",
            }}
          >
            <NextImage
              src="/awards-and-recognition.webp"
              alt=""
              fill
              sizes="(max-width: 1279px) 46vw, 52vw"
              className="object-cover object-right"
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <ScrollReveal>
          <div className="mb-10 md:mb-12">
            <h2 className="text-[clamp(2.4rem,3.2vw,3.75rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-[#07151b] xl:whitespace-nowrap">
              Awards and recognition
            </h2>
            <p className="mt-4 max-w-4xl text-[1.16rem] leading-8 text-muted md:text-[1.24rem] md:leading-9">
              Recognition that reflects Zenesis work in company formation and the leadership profile behind the firm.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#cfc4b4] bg-white/80 p-3 shadow-[0_24px_70px_rgba(17,35,42,0.13)] backdrop-blur-[2px] md:p-4">
            <div className="grid gap-3 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch md:gap-4">
              <div className="relative aspect-[1280/855] overflow-hidden rounded-[1.45rem] border border-[#d8cdbc] bg-[#eee7dc]">
                  <NextImage
                    src={versionedAssetPath(
                      "/zenesis-award.webp",
                      "20260727-award",
                    )}
                    alt="Zenesis award recognition poster for excellence in company formation"
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 44vw, 100vw"
                  />
              </div>

              <Link
                href={featuredProfile.href}
                className="group flex h-full flex-col overflow-hidden rounded-[1.45rem] border border-[#d8cdbc] bg-white text-[#11232a] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#bda77f] hover:shadow-[0_16px_36px_rgba(17,35,42,0.12)] lg:aspect-[1280/855] lg:h-auto"
              >
                <div className="px-4 py-3.5 md:px-5 md:py-4">
                  <div className="flex items-start justify-between gap-6">
                    <div className="max-w-4xl">
                      <p className="eyebrow text-muted">
                        {leadershipFeatureSignal.label}
                      </p>
                      <h3 className="mt-2 text-[clamp(1.38rem,1.8vw,1.8rem)] font-semibold leading-[1] tracking-[-0.045em] text-foreground">
                        {leadershipFeatureSignal.value}
                      </h3>
                      {"detail" in leadershipFeatureSignal &&
                      typeof leadershipFeatureSignal.detail === "string" ? (
                        <p className="mt-2 max-w-3xl text-[0.93rem] leading-[1.4] text-muted md:text-[0.96rem]">
                          {leadershipFeatureSignal.detail}
                        </p>
                      ) : null}
                    </div>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#11232a]/8 text-[1.2rem]">
                      {leadershipFeatureSignal.icon}
                    </span>
                  </div>
                </div>
                <div className="relative aspect-[4/1.65] overflow-hidden border-t border-[#e3d9ca] lg:aspect-auto lg:min-h-0 lg:flex-1">
                  <NextImage
                    src={featuredProfile.imageSrc}
                    alt={featuredProfile.imageAlt}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                    sizes="(min-width: 1024px) 42vw, 100vw"
                  />
                </div>
              </Link>
            </div>

            <div className="mt-3 border-t border-[#d8cdbc] pt-3 md:mt-4 md:pt-4">
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  {
                    src: "/zenesis-award1.webp",
                    alt: "Zenesis team receiving company formation award in Dubai",
                    position: "54% center",
                  },
                  {
                    src: "/zenesis-award2.webp",
                    alt: "Zenesis award recognition ceremony moment",
                    position: "center center",
                  },
                  {
                    src: "/zenesis-award3.webp",
                    alt: "Zenesis representatives holding company award",
                    position: "center 42%",
                  },
                ].map((image) => (
                  <div
                    key={image.src}
                    className="relative aspect-[4/2.7] overflow-hidden rounded-[1.15rem] border border-[#ddd2c2] bg-[#eee7dc]"
                  >
                    <NextImage
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1280px) 28vw, (min-width: 768px) 30vw, 100vw"
                      className="object-cover transition-transform duration-500 hover:scale-[1.015]"
                      style={{ objectPosition: image.position }}
                    />
                  </div>
                ))}
              </div>
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

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46vw] min-w-[34rem] md:block xl:w-[52vw] xl:min-w-[42rem]"
        >
          <div
            className="absolute inset-0 opacity-[0.48] xl:opacity-[0.54]"
            style={{
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 18%, rgba(0,0,0,0.32) 36%, rgba(0,0,0,0.72) 58%, #000 76%, #000 100%)",
              maskImage:
                "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 18%, rgba(0,0,0,0.32) 36%, rgba(0,0,0,0.72) 58%, #000 76%, #000 100%)",
            }}
          >
            <NextImage
              src="/client-reviews.webp"
              alt=""
              fill
              sizes="(max-width: 1279px) 46vw, 52vw"
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
              description="Recent client feedback on responsiveness, setup support, tax handling, and the practical follow-through clients needed after formation."
              descriptionClassName="!text-muted"
            />
            <div className="flex items-center gap-4 md:shrink-0">
              <NextImage
                src="/google.webp"
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

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <ScrollReveal>
        <section>
          <SectionHeading
            eyebrow="FAQ"
            eyebrowClassName="!text-white"
            title="FAQ"
            titleClassName="!text-white"
            description="Common questions on setup routes, structures, visas, banking, attestation, and ongoing compliance in the UAE."
            descriptionClassName="!text-white/88"
          />

          <div className="mt-10 grid gap-3">
            {homepageFaqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-[1.35rem] border border-[#d8d0c2] bg-white px-5 py-4 text-[#11232a] shadow-[0_18px_50px_rgba(17,35,42,0.14)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 marker:content-none">
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-foreground">
                    {item.question}
                  </h3>
                  <span className="shrink-0 text-2xl leading-none text-muted transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-5xl pr-8 text-[1.12rem] leading-8 text-muted">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
        </ScrollReveal>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <ScrollReveal>
            <TalkToZenesisPanel
              wrapperClassName="rounded-[2rem] bg-[#11232a] p-7 text-white shadow-[0_32px_110px_rgba(17,35,42,0.18)] md:p-10"
              eyebrowClassName="eyebrow text-white/58"
              titleClassName="section-title mt-4 font-semibold text-white"
              textClassName="text-[1.24rem] font-semibold leading-9 text-white/94 md:text-[1.32rem]"
              title="Talk to Zenesis"
              paragraphs={[
                "Tell Zenesis what you want to build, where you plan to operate, and what support you need next.",
              ]}
              actions={
                <div className="flex flex-col gap-4 sm:flex-row">
                  <ConsultationFormButton
                    label="Schedule a Free Consultation"
                    className="rounded-full border border-[#e2c58f] bg-[linear-gradient(180deg,#f4e4be_0%,#e7cc97_100%)] px-6 py-3 text-center text-sm font-semibold !text-[#11232a] shadow-[0_16px_36px_rgba(231,204,151,0.24)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[linear-gradient(180deg,#f1dfb1_0%,#dfc186_100%)]"
                  />
                </div>
              }
              imageClassName="object-cover object-[74%_center]"
            />
          </ScrollReveal>
        </div>
      </section>
      </div>
    </SiteShell>
  );
}
