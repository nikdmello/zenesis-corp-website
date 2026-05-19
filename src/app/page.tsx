import NextImage from "next/image";
import Link from "next/link";
import {
  ConsultationFormButton,
  ConsultationFormButtonWithScrollPrompt,
} from "@/components/consultation-form";
import { HeroBackgroundVideo } from "@/components/hero-background-video";
import { HomepageReviewsCarousel } from "@/components/homepage-reviews-carousel";
import { HomepageServiceTile } from "@/components/homepage-service-tile";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading, SiteShell } from "@/components/site-shell";
import { TalkToZenesisPanel } from "@/components/talk-to-zenesis-panel";
import {
  featuredProfile,
  testimonials,
  whatsappHref,
} from "@/lib/site-content";
import { insightPosts } from "@/lib/insights";

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
    value: "Cecilia D'Cunha in Global Leaders Today.",
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
    imageSrc: "/business-setup.webp",
    imageAlt: "Business advisors discussing UAE company formation",
    offerings: [
      {
        icon: "🏢",
        title: "Mainland",
        description: "Set up a company for local UAE trading and operations.",
        href: "/mainland",
      },
      {
        icon: "🗂",
        title: "Free zone",
        description: "Choose the right free zone, package, and licensing route.",
        href: "/free-zones",
      },
      {
        icon: "🌐",
        title: "Offshore",
        description: "Use offshore structures for holding and international ownership needs.",
        href: "/offshore",
      },
    ],
  },
  {
    eyebrow: "Accounting & Tax",
    title: "Accounting and tax",
    href: "/accounting-tax",
    cta: "Explore accounting and tax",
    imageSrc: "/accounting-and-tax.webp",
    imageAlt: "Professionals reviewing business documents",
    offerings: [
      {
        icon: "📒",
        title: "Bookkeeping",
        description: "Keep records, books, and reports current through the year.",
        href: "/professional-bookkeeping-services-in-dubai",
      },
      {
        icon: "🧾",
        title: "VAT filing",
        description: "Prepare VAT returns and keep VAT records in order.",
        href: "/vat-filing-services-in-the-uae",
      },
      {
        icon: "📑",
        title: "Corporate tax",
        description: "Handle registration, filing, and annual tax compliance.",
        href: "/corporate-tax-registration-in-the-uae",
      },
    ],
  },
  {
    eyebrow: "Visa and Banking",
    title: "Visa and Banking",
    href: "/visa-and-banking",
    cta: "Explore visa and banking",
    imageSrc: "/contact-consultation.webp",
    imageAlt: "Business advisor speaking with a client about residency and banking",
    offerings: [
      {
        icon: "⭐",
        title: "Golden Visa",
        description: "Check eligibility and prepare the right Golden Visa route.",
        href: "/golden-visa-services-in-the-uae",
      },
      {
        icon: "🪪",
        title: "Company visa",
        description: "Handle company visa processing, approvals, and Emirates ID steps.",
        href: "/uae-company-visa",
      },
      {
        icon: "🏦",
        title: "Banking support",
        description: "Prepare KYC documents and support the bank account opening process.",
        href: "/open-a-bank-account-easily",
      },
    ],
  },
  {
    eyebrow: "Corporate Support",
    title: "Corporate support",
    href: "/contact",
    cta: "Discuss corporate support",
    imageSrc: "/professional-meeting.webp",
    imageAlt: "Business advisor coordinating corporate support",
    offerings: [
      {
        icon: "🔄",
        title: "License renewals",
        description: "Keep trade license renewals and annual deadlines on track.",
      },
      {
        icon: "📂",
        title: "PRO services",
        description: "Handle government paperwork, approvals, and related submissions.",
      },
      {
        icon: "🗃",
        title: "Company changes",
        description: "Manage company amendments, shareholder changes, and records.",
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
  const [featuredTrustSignal, leadershipFeatureSignal] = trustSignals;

  return (
    <SiteShell currentPath="/">
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
                  src="/zenesis-logo-full.webp"
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

              <div className="hero-reveal hero-reveal-2 mt-7 grid max-w-[28rem] grid-cols-1 gap-3.5 md:mx-0 md:max-w-[26rem]">
                {heroServices.map((service, index) => (
                  <div
                    key={service.title}
                    className="group mx-auto flex min-h-[4.8rem] w-full items-center gap-4 rounded-[1.45rem] border border-white/14 bg-[linear-gradient(135deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.06)_100%)] px-4.5 py-3 text-white shadow-[0_18px_38px_rgba(7,21,27,0.16)] backdrop-blur-md transition-transform duration-200 hover:-translate-y-0.5 md:mx-0 md:min-h-[5rem] md:px-5.5"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[1rem] border border-white/14 bg-white/10 text-[0.84rem] font-bold tracking-[0.12em] text-white md:h-11 md:w-11 md:text-[0.9rem]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="eyebrow text-[0.66rem] tracking-[0.18em] text-white/54">
                        {service.label}
                      </p>
                      <p className="mt-1 text-[1.16rem] font-bold leading-6 tracking-[-0.03em] text-white md:text-[1.32rem] md:leading-7">
                        {service.title}
                      </p>
                    </div>
                    <Link
                      href={service.href}
                      aria-label={`Go to ${service.title}`}
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/8 text-[1rem] !text-white/84 transition-transform duration-200 hover:translate-x-0.5 hover:!text-white"
                    >
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
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
          <div className="mx-auto w-full max-w-[108rem] px-6 md:px-12 xl:px-16 2xl:px-18">
            <div className="py-5 md:py-6 xl:py-4">
              <p className="eyebrow text-[#244ba8]">Services</p>
              <h2 className="section-title mt-4 font-semibold text-[#07151b] md:text-[3rem] xl:mt-3 xl:text-[2.95rem] xl:whitespace-nowrap">
                Our services
              </h2>
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
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.02]"
                      style={{ backgroundImage: `url(${item.imageSrc})` }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,35,42,0.34)_0%,rgba(17,35,42,0.5)_38%,rgba(17,35,42,0.88)_100%)]" />
                    <div className="relative z-10 flex h-full items-end px-6 pb-6 md:px-7 md:pb-7">
                      <div>
                        <h3 className="max-w-[24ch] text-[2.5rem] font-semibold leading-[0.95] tracking-[-0.055em] text-white transition-transform duration-200 group-hover:-translate-y-0.5 md:text-[2.95rem] xl:max-w-none xl:text-[1.92rem] xl:whitespace-nowrap">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </Link>

                  <div className="flex grow flex-col p-4 sm:p-5 md:p-6 lg:p-7 xl:p-6">
                    <div className="grid grow gap-4 md:grid-cols-3 md:items-stretch xl:grid-cols-1 xl:gap-4">
                      {item.offerings.map((offering, offeringIndex) => {
                        return (
                          <HomepageServiceTile
                            key={offering.title}
                            icon={String(offeringIndex + 1).padStart(2, "0")}
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

                    <div className="mt-auto pt-5">
                      <Link
                        href={item.href}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#11232a] px-4 py-2.5 text-[0.95rem] font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#18343d] md:w-auto xl:px-5 xl:py-2.5 xl:text-[0.94rem]"
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
          <div className="mb-10 md:mb-12">
            <p className="eyebrow text-white/58">Zenesis Awards</p>
            <h2 className="mt-4 text-[clamp(2.4rem,3.2vw,3.75rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-white xl:whitespace-nowrap">
              Awards and recognition
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] xl:gap-6">
            <div className="relative rounded-[2rem] border border-[#d8d0c2] bg-[#f5efe4] px-6 py-6 text-[#11232a] shadow-[0_28px_90px_rgba(17,35,42,0.18)] md:px-7 md:py-7">
              <span className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#11232a]/8 text-[1.65rem] md:right-7 md:top-7">
                {featuredTrustSignal.icon}
              </span>
              <div className="pr-20">
                <div className="flex flex-wrap gap-2.5">
                  <span className="inline-flex rounded-full border border-[#244ba8]/14 bg-[#244ba8]/8 px-4 py-2 text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-[#244ba8]">
                    21 years of experience
                  </span>
                  <span className="inline-flex rounded-full border border-[#11232a]/10 bg-[#11232a]/6 px-4 py-2 text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-[#11232a]">
                    Award-winning
                  </span>
                </div>
                <div>
                  <p className="eyebrow mt-5 text-muted">{featuredTrustSignal.label}</p>
                  <p className="mt-4 max-w-[16ch] text-[2rem] font-semibold leading-[0.98] tracking-[-0.05em] text-foreground md:text-[2.35rem]">
                    {featuredTrustSignal.value}
                  </p>
                  {"detail" in featuredTrustSignal ? (
                    <p className="mt-4 text-xs uppercase tracking-[0.18em] text-foreground/72">
                      {featuredTrustSignal.detail}
                    </p>
                  ) : null}
                  <p className="mt-5 max-w-2xl text-[1.08rem] leading-8 text-muted md:text-[1.12rem]">
                    Recognition like this reflects long-running work across
                    company formation, corporate support, and client execution
                    in the UAE.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href={featuredProfile.href}
              className="group block rounded-[1.7rem] border border-[#d8d0c2] bg-[#f5efe4] p-3 text-[#11232a] shadow-[0_20px_60px_rgba(17,35,42,0.16)] transition-transform duration-200 hover:-translate-y-0.5 md:p-4"
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
                    className="aspect-[23/13] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01] md:aspect-[23/12]"
                  />
                </div>
              </div>
            </Link>
          </div>

        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-10 rounded-[2rem] border border-[#d8d0c2] bg-white p-4 shadow-[0_20px_70px_rgba(17,35,42,0.14)] md:p-5">
            <div className="grid gap-4 md:grid-cols-3">
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
                  className={`relative overflow-hidden rounded-[1.6rem] border border-[#e8ddcc] bg-white shadow-[0_16px_44px_rgba(17,35,42,0.10)] ${
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

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <ScrollReveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Google Reviews"
              title="Client reviews"
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
                <p className="text-[1.35rem] font-semibold tracking-[-0.03em] text-[#11232a] md:text-[1.55rem]">
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
          <SectionHeading
            eyebrow="Zenesis Blog"
            eyebrowClassName="!text-white"
            title="Latest blog posts"
            titleClassName="!text-white"
          />
        </ScrollReveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {insightPosts.map((item, index) => (
            <ScrollReveal
              key={item.title}
              className="h-full"
              delay={index * 90}
            >
              <Link
                href={`/insights/${item.slug}`}
                className="premium-card group flex min-h-full flex-col rounded-[1.75rem] border border-[#d8d0c2] bg-[#f5efe4] p-4 text-[#11232a] shadow-[0_24px_80px_rgba(17,35,42,0.14)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative z-10 flex min-h-full flex-col">
                  <div className="relative overflow-hidden rounded-[1.35rem] bg-[#11232a]">
                    <NextImage
                      src={item.heroImageSrc}
                      alt={item.heroImageAlt}
                      width={640}
                      height={420}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(17,35,42,0.46)_100%)]" />
                  </div>
                  <div className="flex flex-1 flex-col p-3 pt-6">
                  <p className="eyebrow text-muted">Blog post</p>
                  <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.03em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted/80">
                    {item.category}
                  </p>
                  <p className="mt-4 flex-1 text-[1.12rem] leading-8 text-muted">
                    {item.description}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors group-hover:text-accent-strong">
                    Read blog post
                    <span aria-hidden="true">→</span>
                  </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <ScrollReveal>
            <TalkToZenesisPanel
              wrapperClassName="rounded-[2rem] border border-[#d8d0c2] bg-white p-7 text-[#11232a] shadow-[0_32px_110px_rgba(17,35,42,0.14)] md:p-10"
              eyebrowClassName="eyebrow text-muted"
              titleClassName="section-title mt-4 font-semibold text-foreground"
              textClassName="text-[1.24rem] font-semibold leading-9 text-foreground/90 md:text-[1.32rem]"
              title="Talk to Zenesis"
              paragraphs={[
                "Tell Zenesis what you want to build, where you plan to operate, and what support you need next.",
              ]}
              actions={
                <div className="flex flex-col gap-4 sm:flex-row">
                  <ConsultationFormButton
                    label="Schedule a Free Consultation"
                    className="rounded-full bg-[#11232a] px-6 py-3 text-center text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#18343d]"
                  />
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#25D366] px-6 py-3 text-center text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              }
              imageClassName="object-cover object-[74%_center]"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <ScrollReveal>
        <section>
          <SectionHeading
            eyebrow="FAQ"
            eyebrowClassName="!text-white"
            title="Questions"
            titleClassName="!text-white"
          />

          <div className="mt-10 grid gap-3">
            {homepageFaqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-[1.35rem] border border-[#d8d0c2] bg-[#f5efe4] px-5 py-4 text-[#11232a] shadow-[0_18px_50px_rgba(17,35,42,0.14)]"
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
      </div>
    </SiteShell>
  );
}
