import NextImage from "next/image";
import Link from "next/link";
import {
  ConsultationFormButton,
  ConsultationFormButtonWithScrollPrompt,
  WhatsAppCueIcon,
} from "@/components/consultation-form";
import { HeroBackgroundVideo } from "@/components/hero-background-video";
import { HomepageReviewsCarousel } from "@/components/homepage-reviews-carousel";
import { HomepageInsightsCarousel } from "@/components/homepage-insights-carousel";
import { HomepageServiceTile } from "@/components/homepage-service-tile";
import { JsonLd } from "@/components/json-ld";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CardAccent, SectionHeading, SiteShell } from "@/components/site-shell";
import { TalkToZenesisPanel } from "@/components/talk-to-zenesis-panel";
import { versionedAssetPath } from "@/lib/asset-paths";
import {
  featuredProfile,
  partnerLogos,
  testimonials,
} from "@/lib/site-content";
import { insightPosts } from "@/lib/insights";
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
    eyebrow: "Business Setup",
    title: "Business setup",
    href: "/business-setup",
    cta: "Explore business setup",
    imageSrc: versionedAssetPath("/business-setup.webp"),
    imageAlt: "Business advisors discussing UAE company formation",
    offerings: [
      {
        icon: "🏢",
        title: "Mainland",
        description: "For local UAE trading and operations.",
        href: "/mainland",
      },
      {
        icon: "🗂",
        title: "Free zone",
        description: "For packaged setup and foreign ownership.",
        href: "/free-zones",
      },
      {
        icon: "🌐",
        title: "Offshore",
        description: "For holding and international ownership.",
        href: "/offshore",
      },
    ],
  },
  {
    eyebrow: "Accounting & Tax",
    title: "Accounting and tax",
    href: "/accounting-tax",
    cta: "Explore accounting and tax",
    imageSrc: versionedAssetPath("/accounting-and-tax.webp"),
    imageAlt: "Professionals reviewing business documents",
    offerings: [
      {
        icon: "📒",
        title: "Bookkeeping",
        description: "Keep records and reports current.",
        href: "/professional-bookkeeping-services-in-dubai",
      },
      {
        icon: "🧾",
        title: "VAT filing",
        description: "Prepare returns and keep VAT records in order.",
        href: "/vat-filing-services-in-the-uae",
      },
      {
        icon: "📑",
        title: "Corporate tax",
        description: "Handle registration, filing, and annual compliance.",
        href: "/corporate-tax-registration-in-the-uae",
      },
    ],
  },
  {
    eyebrow: "Visa and Banking",
    title: "Visa and banking",
    href: "/visa-and-banking",
    cta: "Explore visa and banking",
    imageSrc: versionedAssetPath("/contact-consultation.webp"),
    imageAlt: "Business advisor speaking with a client about residency and banking",
    offerings: [
      {
        icon: "⭐",
        title: "Golden Visa",
        description: "Check eligibility and prepare the right route.",
        href: "/golden-visa-services-in-the-uae",
      },
      {
        icon: "🪪",
        title: "Company visa",
        description: "Handle processing, approvals, and Emirates ID.",
        href: "/uae-company-visa",
      },
      {
        icon: "🏦",
        title: "Banking support",
        description: "Prepare KYC and support account opening.",
        href: "/open-a-bank-account-easily",
      },
    ],
  },
  {
    eyebrow: "Corporate Support",
    title: "Corporate support",
    href: "/contact",
    cta: "Discuss corporate support",
    imageSrc: versionedAssetPath("/professional-meeting.webp"),
    imageAlt: "Business advisor coordinating corporate support",
    offerings: [
      {
        icon: "🔄",
        title: "License renewals",
        description: "Keep renewals and annual deadlines on track.",
      },
      {
        icon: "📂",
        title: "PRO services",
        description: "Handle government paperwork and approvals.",
      },
      {
        icon: "🗃",
        title: "Company changes",
        description: "Manage amendments, shareholder changes, and records.",
      },
    ],
  },
] as const;

const heroServices = [
  { title: "Business setup", label: "Service", href: "/business-setup" },
  { title: "Accounting and tax", label: "Service", href: "/accounting-tax" },
  { title: "Corporate support", label: "Service", href: "/contact" },
  { title: "Visa and banking", label: "Service", href: "/visa-and-banking" },
] as const;

const homepageFaqs = [
  {
    question: "How do I choose between mainland, free zone, and offshore setup?",
    answer:
      "The right route depends on what the business needs to do after incorporation. Mainland usually suits businesses that want UAE market access and broader local operating flexibility. Free zones are often preferred by consultants, startups, digital businesses, and international operators who want a more packaged setup path. Offshore structures are usually considered for holding, asset protection, and specific international ownership arrangements. Zenesis helps compare those routes before you commit.",
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
              src="/homepage.webm"
              className="h-full w-full object-cover object-[66%_30%] saturate-[1.05] contrast-[1.04] md:[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.12)_16%,rgba(0,0,0,0.42)_26%,rgba(0,0,0,0.78)_38%,black_50%)] md:object-[76%_28%] lg:object-[82%_27%]"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,35,42,0.82)_0%,rgba(17,35,42,0.76)_34%,rgba(17,35,42,0.62)_68%,rgba(17,35,42,0.5)_100%)] md:bg-[linear-gradient(90deg,rgba(17,35,42,0.96)_0%,rgba(17,35,42,0.9)_14%,rgba(17,35,42,0.72)_30%,rgba(17,35,42,0.42)_46%,rgba(17,35,42,0.18)_60%,rgba(17,35,42,0.05)_72%,transparent_84%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#11232a] via-[#11232a]/84 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[100rem] items-center px-6 pb-16 pt-32 md:px-12 md:pb-20 md:pt-36 xl:px-20">
            <div className="max-w-[58rem] rounded-[1.8rem] border border-white/10 bg-[rgba(17,35,42,0.38)] px-5 py-6 shadow-[0_20px_44px_rgba(7,21,27,0.16)] backdrop-blur-sm sm:px-6 md:!rounded-none md:!border-transparent md:!bg-transparent md:px-0 md:py-0 md:!shadow-none md:backdrop-blur-none">
              <div className="pl-5 sm:pl-6 md:pl-7">
              <div className="hero-reveal hero-reveal-1 mb-6 flex justify-center md:block">
                <NextImage
                    src="/logos/zenesis-logo-full.webp"
                  alt="Zenesis Corporation"
                  width={340}
                  height={82}
                  className="h-10 w-auto object-contain brightness-0 invert sm:h-12 md:h-14"
                  priority
                />
              </div>
              <h1 className="hero-reveal hero-reveal-1 mx-auto max-w-[13ch] text-center text-[3.1rem] font-semibold leading-[0.94] tracking-[-0.05em] text-white sm:max-w-[14ch] sm:text-[4.1rem] md:mx-0 md:text-left lg:max-w-[15ch] lg:text-[5rem]">
                20+ years of business setup in Dubai
              </h1>

              <div className="hero-reveal hero-reveal-2 mt-7 grid max-w-[21.75rem] grid-cols-1 gap-3.5 md:mx-0 md:max-w-[21.5rem]">
                {heroServices.map((service, index) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    aria-label={`Go to ${service.title}`}
                    className="group mx-auto flex min-h-[4.15rem] w-full items-center gap-3 rounded-[1.35rem] border border-white/14 bg-[linear-gradient(135deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.06)_100%)] px-4 py-3 text-white shadow-[0_18px_38px_rgba(7,21,27,0.16)] backdrop-blur-md transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.08)_100%)] md:mx-0 md:min-h-[4.3rem] md:px-4.5"
                  >
                    <span className="shrink-0 text-[0.7rem] font-semibold tracking-[0.18em] text-white/52 md:text-[0.74rem]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1 text-[1.22rem] font-semibold leading-6 tracking-[-0.03em] text-white md:text-[1.38rem] md:leading-7">
                      {service.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-[1.08rem] text-white/82 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white"
                    >
                      <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                ))}
              </div>
              <div className="hero-reveal hero-reveal-3 mt-9 flex flex-col items-center gap-4 sm:flex-row sm:items-center md:items-start">
                <ConsultationFormButtonWithScrollPrompt
                  label="Schedule a Free Consultation"
                  className="inline-flex min-h-12 w-fit items-center justify-center self-center whitespace-nowrap rounded-full bg-white px-5 py-3.5 text-center text-sm font-semibold tracking-[0.01em] !text-[#07151b] shadow-[0_18px_44px_rgba(17,35,42,0.12)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/92 sm:px-7 sm:text-base md:self-auto"
                />
              </div>
              <div className="hero-reveal hero-reveal-3 mt-4 flex h-16 w-full items-center justify-center gap-3 text-white md:inline-flex md:h-[4.5rem] md:w-fit md:justify-start md:gap-4">
                <div className="origin-left scale-[1.22] md:scale-[1.28]">
                  <NextImage
                    src="/google.webp"
                    alt="Google reviews"
                    width={168}
                    height={72}
                    className="h-12 w-auto object-contain md:h-14"
                  />
                </div>
                <span className="inline-flex min-w-max items-center gap-2 whitespace-nowrap pl-4 text-[1rem] font-semibold text-white/88 md:pl-5 md:text-[1.14rem]">
                  <span>{googleReviewCountLabel}</span>
                </span>
              </div>
            </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="relative left-1/2 w-screen -translate-x-1/2 scroll-mt-14 md:scroll-mt-18 py-14 text-[#07151b] md:py-16 xl:py-12"
        >
          <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
            <div className="max-w-5xl py-5 md:py-6 xl:py-4">
              <h2 className="section-title font-semibold text-[#07151b] md:text-[3rem] xl:text-[2.95rem] xl:whitespace-nowrap">
                Our services
              </h2>
              <p className="mt-4 max-w-4xl text-[1.16rem] leading-8 text-muted md:text-[1.24rem] md:leading-9">
                Core support across business setup, accounting and tax, visa and banking, and ongoing corporate requirements in the UAE.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:mt-6 xl:grid-cols-4 xl:gap-2.5 2xl:gap-3">
              {customerPaths.map((item) => (
                <div
                  key={item.eyebrow}
                  className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#d9d2c5] bg-white shadow-[0_22px_70px_rgba(17,35,42,0.10)]"
                >
                  <Link
                    href={item.href}
                    className="group relative block h-[18.5rem] overflow-hidden md:h-[20rem] xl:h-[14.5rem]"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${item.imageSrc})` }}
                    />
                  </Link>

                  <div className="flex grow flex-col p-4 sm:p-5 md:p-6 lg:p-7 xl:p-6">
                    <div className="mb-5">
                      <CardAccent />
                      <Link href={item.href} className="group inline-block">
                        <h3 className="text-[2.05rem] font-semibold leading-[0.95] tracking-[-0.05em] text-[#07151b] transition-transform duration-200 group-hover:-translate-y-0.5 md:text-[2.3rem] xl:text-[1.78rem] xl:whitespace-nowrap">
                          {item.title}
                        </h3>
                      </Link>
                    </div>
                    <div className="grid grow gap-3 md:grid-cols-3 md:items-stretch xl:grid-cols-1 xl:gap-3">
                      {item.offerings.map((offering) => {
                        return (
                          <HomepageServiceTile
                            key={offering.title}
                            title={offering.title}
                            description={offering.description}
                            href={
                              "href" in offering && typeof offering.href === "string"
                                ? offering.href
                                : undefined
                            }
                          />
                        );
                      })}
                    </div>

                    <div className="mt-auto flex justify-center pt-5">
                      <Link
                        href={item.href}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#11232a] px-4 py-2.75 text-[0.96rem] font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#18343d] md:w-auto xl:px-5 xl:text-[0.95rem]"
                      >
                        {item.cta}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      <section className="relative left-1/2 mt-10 w-screen -translate-x-1/2 bg-[#11232a] py-16 md:mt-12 md:py-20">
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

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
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

          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-start xl:gap-6">
            <div className="overflow-hidden rounded-[2rem] border border-[#d8d0c2] bg-[#f5efe4] shadow-[0_28px_90px_rgba(17,35,42,0.18)]">
              <NextImage
                src="/zenesis-award.webp"
                alt="Zenesis award recognition poster for excellence in company formation"
                width={1400}
                height={1400}
                className="block aspect-square w-full object-cover"
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
            </div>

            <Link
              href={featuredProfile.href}
              className="group block overflow-hidden rounded-[1.7rem] border border-[#d8d0c2] bg-[#f5efe4] text-[#11232a] shadow-[0_20px_60px_rgba(17,35,42,0.16)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="overflow-hidden rounded-[1.3rem] border border-[#ddd1c2] bg-white shadow-[0_12px_28px_rgba(17,35,42,0.12)]">
                <div className="px-4 py-4 md:px-5 md:py-5">
                  <div className="flex items-start justify-between gap-6">
                    <div className="max-w-4xl">
                      <p className="eyebrow text-muted">
                        {leadershipFeatureSignal.label}
                      </p>
                      <h3 className="mt-3 text-[clamp(1.55rem,2.15vw,2.15rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-foreground">
                        {leadershipFeatureSignal.value}
                      </h3>
                      {"detail" in leadershipFeatureSignal &&
                      typeof leadershipFeatureSignal.detail === "string" ? (
                        <p className="mt-3 max-w-3xl text-[1rem] leading-7 text-muted md:text-[1.05rem]">
                          {leadershipFeatureSignal.detail}
                        </p>
                      ) : null}
                    </div>
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#11232a]/8 text-[1.4rem]">
                      {leadershipFeatureSignal.icon}
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden border-t border-[#ece4d8]">
                  <NextImage
                    src={featuredProfile.imageSrc}
                    alt={featuredProfile.imageAlt}
                    width={2300}
                    height={1800}
                    className="block aspect-[4/3.18] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>
              </div>
            </Link>
          </div>

        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-10 rounded-[1.8rem] border border-[#ddd3c6] bg-white p-2.5 shadow-[0_18px_56px_rgba(17,35,42,0.12)] md:p-3">
            <div className="grid gap-2.5 md:grid-cols-3">
              {[
                {
                  src: "/zenesis-award1.webp",
                  alt: "Zenesis team receiving company formation award in Dubai",
                  className: "aspect-[4/5]",
                },
                {
                  src: "/zenesis-award2.webp",
                  alt: "Zenesis award recognition ceremony moment",
                  className: "aspect-[4/5]",
                },
                {
                  src: "/zenesis-award3.webp",
                  alt: "Zenesis representatives holding company award",
                  className: "aspect-[4/5]",
                },
              ].map((image) => (
                <div
                  key={image.src}
                  className={`relative overflow-hidden rounded-[1.3rem] border border-[#ece3d7] bg-white shadow-[0_10px_28px_rgba(17,35,42,0.08)] ${
                    image.className ?? ""
                  }`}
                >
                  <NextImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={
                      "(min-width: 1280px) 280px, (min-width: 768px) 30vw, 100vw"
                    }
                    className="object-cover object-center"
                    style={
                      image.src === "/zenesis-award1.webp"
                        ? { objectPosition: "54% center" }
                        : image.src === "/zenesis-award3.webp"
                          ? { objectPosition: "center 42%" }
                          : undefined
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <ScrollReveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Google Reviews"
              eyebrowClassName="!text-white"
              title="Client reviews"
              titleClassName="!text-white"
              description="Recent client feedback on responsiveness, setup support, tax handling, and the practical follow-through clients needed after formation."
              descriptionClassName="!text-white/88"
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
                <p className="text-[1.35rem] font-semibold tracking-[-0.03em] text-white md:text-[1.55rem]">
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

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Blog"
            title="Latest blog posts"
            description="Recent guidance on business setup, accounting and tax, and visa and banking questions for UAE founders and operators."
          />
        </ScrollReveal>

        <div className="mt-10">
          <ScrollReveal>
            <HomepageInsightsCarousel posts={insightPosts} />
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
                    className="rounded-full bg-[#25D366] px-6 py-3 text-center text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
                    leadingIcon={<WhatsAppCueIcon inverse />}
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
