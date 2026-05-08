import NextImage from "next/image";
import Link from "next/link";
import {
  ConsultationFormButton,
  ConsultationScrollPrompt,
} from "@/components/consultation-form";
import { HeroBackgroundVideo } from "@/components/hero-background-video";
import { LayeredServicesShowcase } from "@/components/layered-services-showcase";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading, SiteShell } from "@/components/site-shell";
import {
  featuredProfile,
  googleMapsEmbedHref,
  googleReviewsHref,
  testimonials,
  whatsappHref,
} from "@/lib/site-content";
import { insightPosts } from "@/lib/insights";

const trustSignals = [
  {
    icon: "🇦🇪",
    label: "Founded",
    value: "UAE · 2005",
  },
  {
    icon: "🏅",
    label: "Global Recognition",
    value: "Excellence in Company Formation Award",
    detail: "Dubai, UAE · 2025",
  },
  {
    icon: "📰",
    label: "Featured Profile",
    value: "Cecilia D'Cunha in Global Leaders Today.",
    detail:
      "An external profile on the founder's background in offshore incorporation, UAE business setup, and corporate compliance.",
  },
] as const;

const customerPaths = [
  {
    eyebrow: "Business Setup",
    title: "Set up the right UAE structure",
    description:
      "Compare mainland, free zone, and offshore routes with practical guidance on licensing, banking, visas, and post-setup requirements.",
    href: "/business-setup",
    cta: "Explore setup options",
    imageSrc: "/business-setup.jpg",
    imageAlt: "Business advisors discussing UAE company formation",
    offerings: [
      {
        title: "Mainland formation",
        description:
          "Choose mainland if you need local trading, hiring, and broader operating flexibility.",
      },
      {
        title: "Free zone setup",
        description:
          "Compare free zones by package, visas, ownership, and operating fit.",
      },
      {
        title: "Offshore structuring",
        description:
          "Use offshore where holding assets or managing ownership matters more than local trading.",
      },
    ],
  },
  {
    eyebrow: "Accounting & Tax",
    title: "Keep tax and records under control",
    description:
      "Handle bookkeeping, VAT, corporate tax registration, and annual filing with cleaner records and clearer deadlines.",
    href: "/accounting-tax",
    cta: "Explore accounting and tax",
    imageSrc: "/accounting-and-tax.jpg",
    imageAlt: "Professionals reviewing business documents",
    offerings: [
      {
        title: "Bookkeeping and reporting",
        description:
          "Keep books and reporting clean instead of catching up at year end.",
      },
      {
        title: "VAT filing support",
        description:
          "Keep VAT returns, invoice checks, and reconciliations under control.",
      },
      {
        title: "Corporate tax support",
        description:
          "Handle registration, filing, and tax work without breaking operating continuity.",
      },
    ],
  },
  {
    eyebrow: "Corporate Services",
    title: "Manage corporate actions and renewals",
    description:
      "Use one point of coordination for renewals, shareholder records, annual requirements, and practical admin support around the company.",
    href: "/contact",
    cta: "Explore corporate services",
    imageSrc: "/professional-meeting.jpg",
    imageAlt: "Business advisor coordinating corporate support",
    offerings: [
      {
        title: "Renewals and annual actions",
        description:
          "Keep renewals and annual actions from slipping.",
      },
      {
        title: "Shareholder and governance support",
        description:
          "Manage shareholder records, changes, and related corporate actions through one team.",
      },
      {
        title: "Practical company administration",
        description:
          "Offload the company tasks that keep pulling founders out of the business.",
      },
    ],
  },
  {
    eyebrow: "Investor & Residency",
    title: "Plan visa, banking, and Golden Visa support",
    description:
      "Support founders and investors with business banking guidance, company visa support, and residency pathways tied to how the business will operate.",
    href: "/contact",
    cta: "Explore investor and residency support",
    imageSrc: "/contact-consultation.jpg",
    imageAlt: "Business advisor speaking with a client about residency and banking",
    offerings: [
      {
        title: "Business banking guidance",
        description:
          "Prepare for bank account opening with clearer KYC expectations.",
      },
      {
        title: "Company visa support",
        description:
          "Move through company visa steps with clearer approvals and residency support.",
      },
      {
        title: "Golden Visa pathways",
        description:
          "Check whether a Golden Visa route fits and how to apply.",
      },
    ],
  },
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
  const googleReviewsLink = googleReviewsHref;
  const googleReviewCountLabel = "480+ reviews";
  const [foundedTrustSignal, featuredTrustSignal, leadershipFeatureSignal] = trustSignals;
  const supportingTrustSignals = [foundedTrustSignal] as const;

  return (
    <SiteShell currentPath="/">
      <ConsultationScrollPrompt />
      <div className="relative z-10">
        <section className="photo-hero relative left-1/2 -mt-10 min-h-[100svh] w-screen -translate-x-1/2 overflow-hidden bg-[#11232a] text-white md:-mt-14">
          <div className="absolute inset-0">
            <HeroBackgroundVideo
              src="/homepage-video.mp4"
              className="h-full w-full object-cover object-[66%_30%] saturate-[1.05] contrast-[1.04] md:[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.12)_16%,rgba(0,0,0,0.42)_26%,rgba(0,0,0,0.78)_38%,black_50%)] md:object-[76%_28%] lg:object-[82%_27%]"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,35,42,0.82)_0%,rgba(17,35,42,0.76)_34%,rgba(17,35,42,0.62)_68%,rgba(17,35,42,0.5)_100%)] md:bg-[linear-gradient(90deg,rgba(17,35,42,0.96)_0%,rgba(17,35,42,0.9)_14%,rgba(17,35,42,0.72)_30%,rgba(17,35,42,0.42)_46%,rgba(17,35,42,0.18)_60%,rgba(17,35,42,0.05)_72%,transparent_84%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#11232a] via-[#11232a]/84 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[100rem] items-center px-6 pb-16 pt-32 md:px-12 md:pb-20 md:pt-36 xl:px-20">
            <div className="max-w-[58rem] rounded-[1.8rem] border border-white/10 bg-[rgba(17,35,42,0.36)] px-5 py-6 shadow-[0_20px_44px_rgba(7,21,27,0.16)] backdrop-blur-sm sm:px-6 md:!rounded-none md:!border-transparent md:!bg-transparent md:px-0 md:py-0 md:!shadow-none md:backdrop-blur-none">
              <div className="border-l-4 border-[#244ba8] pl-5 sm:pl-6 md:pl-7">
              <div className="hero-reveal hero-reveal-1 mb-7">
                <NextImage
                  src="/zenesis-logo-full.png"
                  alt="Zenesis Corporation"
                  width={340}
                  height={82}
                  className="h-10 w-auto object-contain brightness-0 invert sm:h-12 md:h-14"
                  priority
                />
              </div>
              <h1 className="hero-reveal hero-reveal-1 max-w-[13ch] text-[3.35rem] font-semibold leading-[0.94] tracking-[-0.04em] text-white sm:max-w-[14ch] sm:text-[4.35rem] lg:max-w-[15ch] lg:text-[5.15rem]">
                Business setup, accounting and tax, and corporate support.
              </h1>
              <p className="hero-reveal hero-reveal-2 mt-6 max-w-[36rem] text-lg font-medium leading-8 text-white/86 md:text-[1.24rem] md:leading-9">
                20+ years helping businesses set up, stay compliant, and keep
                moving in the UAE.
              </p>
              <a
                href={googleReviewsLink}
                target="_blank"
                rel="noreferrer"
                className="hero-reveal hero-reveal-3 mt-7 inline-flex w-fit items-center gap-3 text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-84"
              >
                <NextImage
                  src="/google.png"
                  alt="Google reviews"
                  width={168}
                  height={72}
                  className="h-12 w-auto object-contain md:h-14"
                />
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/82 md:text-base">
                  <span className="border-b border-white/35 pb-0.5 transition-colors duration-200 hover:border-white/70">
                    {googleReviewCountLabel}
                  </span>
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
              <div className="hero-reveal hero-reveal-3 mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <ConsultationFormButton
                  label="Schedule a Free Consultation"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold tracking-[0.01em] !text-[#07151b] shadow-[0_18px_44px_rgba(17,35,42,0.12)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/92 sm:text-base"
                />
              </div>
            </div>
            </div>
          </div>
        </section>

        <LayeredServicesShowcase items={customerPaths} />

      <section className="relative left-1/2 mt-10 w-screen -translate-x-1/2 bg-[#11232a] py-16 md:mt-12 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <ScrollReveal>
          <div className="mb-10 md:mb-12">
            <p className="eyebrow text-white/58">Why Zenesis</p>
            <h2 className="mt-4 text-[clamp(2.4rem,3.2vw,3.75rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-white xl:whitespace-nowrap">
              Award-winning guidance. 
              20+ years of experience.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] xl:gap-6">
            <div className="relative rounded-[2rem] border border-[#d8d0c2] bg-[#f5efe4] px-6 py-6 text-[#11232a] shadow-[0_28px_90px_rgba(17,35,42,0.18)] md:px-7 md:py-7">
              <span className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#11232a]/8 text-[1.65rem] md:right-7 md:top-7">
                {featuredTrustSignal.icon}
              </span>
              <div className="pr-20">
                <div>
                  <p className="eyebrow text-muted">{featuredTrustSignal.label}</p>
                  <p className="mt-4 max-w-[16ch] text-[2rem] font-semibold leading-[0.98] tracking-[-0.05em] text-foreground md:text-[2.35rem]">
                    {featuredTrustSignal.value}
                  </p>
                  {"detail" in featuredTrustSignal ? (
                    <p className="mt-4 text-xs uppercase tracking-[0.18em] text-foreground/72">
                      {featuredTrustSignal.detail}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {supportingTrustSignals.map((item) => {
                const cardContent = (
                  <>
                    <span className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#11232a]/8 text-[1.65rem] md:right-7 md:top-7">
                      {item.icon}
                    </span>
                    <div className="pr-18">
                      <div>
                        <p className="eyebrow text-muted">{item.label}</p>
                        <p className="mt-4 text-[1.8rem] font-semibold leading-[0.98] tracking-[-0.05em] text-foreground md:text-[2.05rem]">
                          {item.value}
                        </p>
                        {"detail" in item && typeof item.detail === "string" ? (
                          <p className="mt-4 max-w-[28rem] text-base leading-7 text-muted">
                            {item.detail}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </>
                );

                return (
                  <div
                    key={item.label}
                    className="relative rounded-[1.75rem] border border-[#d8d0c2] bg-[#f5efe4] px-6 py-6 text-[#11232a] shadow-[0_20px_70px_rgba(17,35,42,0.14)] md:px-7 md:py-7"
                  >
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Link
            href={featuredProfile.href}
            target="_blank"
            rel="noreferrer"
            className="group mt-10 block rounded-[2rem] border border-[#d8d0c2] bg-[#f5efe4] p-4 text-[#11232a] shadow-[0_24px_80px_rgba(17,35,42,0.18)] transition-transform duration-200 hover:-translate-y-0.5 md:p-5"
          >
            <div className="overflow-hidden rounded-[1.5rem] border border-[#ddd1c2] bg-white shadow-[0_12px_28px_rgba(17,35,42,0.12)]">
              <div className="px-5 py-5 md:px-6 md:py-6">
                <div className="flex items-start justify-between gap-6">
                  <div className="max-w-4xl">
                    <p className="eyebrow text-muted">
                      {leadershipFeatureSignal.label}
                    </p>
                    <h3 className="mt-4 text-[clamp(1.9rem,2.6vw,2.7rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-foreground">
                      {leadershipFeatureSignal.value}
                    </h3>
                    {"detail" in leadershipFeatureSignal &&
                    typeof leadershipFeatureSignal.detail === "string" ? (
                      <p className="mt-4 max-w-3xl text-[1.08rem] leading-8 text-muted md:text-[1.12rem]">
                        {leadershipFeatureSignal.detail}
                      </p>
                    ) : null}
                  </div>
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#11232a]/8 text-[1.65rem]">
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
                  className="aspect-[23/12] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01] md:aspect-[23/11]"
                />
              </div>
            </div>
          </Link>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-10 rounded-[2rem] border border-[#d8d0c2] bg-white p-4 shadow-[0_20px_70px_rgba(17,35,42,0.14)] md:p-5">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  src: "/zenesis-award1.png",
                  alt: "Zenesis team receiving company formation award in Dubai",
                  className: "aspect-[4/5]",
                },
                {
                  src: "/zenesis-award2.png",
                  alt: "Zenesis award recognition ceremony moment",
                  className: "aspect-[4/5]",
                },
                {
                  src: "/zenesis-award3.png",
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
                      image.src === "/zenesis-award1.png"
                        ? { objectPosition: "54% center" }
                        : image.src === "/zenesis-award3.png"
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
          <SectionHeading
            eyebrow="Google Reviews"
            title="What clients say."
          />
        </ScrollReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.18fr_0.82fr] xl:gap-8">
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <ScrollReveal
                key={item.name}
                className="h-full"
                delay={index * 80}
              >
                <a
                  href={googleReviewsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group block min-h-full rounded-[1.5rem] border border-white/10 bg-[#11232a] p-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.16)] transition-transform duration-200 hover:-translate-y-1"
                >
                  <p className="text-[1.12rem] leading-8 text-white">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold tracking-[-0.02em] text-white">
                      {item.name}
                    </p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={120}>
            <aside className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#11232a] p-3 text-white shadow-[0_20px_60px_rgba(0,0,0,0.16)]">
              <div className="flex flex-wrap items-center justify-between gap-3 px-3 pb-4 pt-2">
                <div className="rounded-[1.1rem] border border-white/10 bg-white/8 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <NextImage
                      src="/google.png"
                      alt="Google reviews"
                      width={168}
                      height={72}
                      className="h-12 w-auto object-contain md:h-14"
                    />
                    <span className="text-sm font-semibold tracking-[-0.02em] text-white">
                      {googleReviewCountLabel}
                    </span>
                  </div>
                </div>
                <a
                  href={googleReviewsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-white transition-colors hover:text-white/76"
                >
                  {googleReviewCountLabel} on Google ↗
                </a>
              </div>
              <div className="overflow-hidden rounded-[1.25rem] border border-white/10">
                <iframe
                  src={googleMapsEmbedHref}
                  title="Zenesis location on Google Maps"
                  className="h-[24rem] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </ScrollReveal>
        </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Insights"
            title="Reading before you decide."
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
                  <p className="eyebrow text-muted">{item.category}</p>
                  <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.03em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 flex-1 text-[1.12rem] leading-8 text-muted">
                    {item.description}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors group-hover:text-accent-strong">
                    Explore this topic
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
            <section className="relative overflow-hidden rounded-[2rem] border border-[#d8d0c2] bg-white p-7 text-[#11232a] shadow-[0_32px_110px_rgba(17,35,42,0.14)] md:p-10">
              <NextImage
                src="/contact-consultation.jpg"
                alt="Professionals in a client advisory setting"
                fill
                sizes="(min-width: 1280px) 72rem, (min-width: 768px) calc(100vw - 5rem), calc(100vw - 3rem)"
                className="object-cover object-[70%_center] opacity-[0.96]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(245,239,228,0.96)_0%,rgba(245,239,228,0.9)_34%,rgba(245,239,228,0.74)_62%,rgba(245,239,228,0.34)_100%)] md:bg-[linear-gradient(90deg,rgba(245,239,228,0.74)_0%,rgba(245,239,228,0.54)_28%,rgba(245,239,228,0.14)_58%,transparent_82%)]" />
              <div className="relative z-10 max-w-3xl">
                <p className="eyebrow text-muted">Ready to Start</p>
                <h2 className="section-title mt-4 font-semibold text-foreground">
                  Get a recommendation before you commit.
                </h2>
                <p className="mt-5 max-w-3xl text-[1.18rem] leading-9 text-muted">
                  Tell Zenesis what you want to build, where you plan to
                  operate, and what support you need next.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#25D366] px-6 py-3 text-center text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
                  >
                    Message on WhatsApp
                  </a>
                  <Link
                    href="/contact"
                    className="rounded-full border border-[#11232a]/12 bg-[#11232a]/6 px-6 py-3 text-center text-sm font-semibold !text-[#11232a] transition-colors hover:bg-[#11232a]/10"
                  >
                    View Contact Options
                  </Link>
                </div>
              </div>
            </section>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <ScrollReveal>
        <section>
          <SectionHeading
            eyebrow="FAQ"
            title="Common setup questions."
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
