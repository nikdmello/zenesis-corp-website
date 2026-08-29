import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { ReadingProgress } from "@/components/reading-progress";
import { SiteShell } from "@/components/site-shell";
import { articleSectionHeadingClassName } from "@/lib/article-styles";
import { insightAuthorProfiles } from "@/lib/insights";
import { featuredProfile } from "@/lib/site-content";
import {
  buildBreadcrumbSchema,
  buildFeaturedProfileSchema,
  buildPageMetadata,
  getAbsoluteUrl,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Cecilia D'Cunha in Global Leaders Today | Zenesis",
  description:
    "An editorial feature on Cecilia D'Cunha covering her background in offshore incorporation, UAE business setup, and corporate compliance.",
  path: "/featured-profile",
  type: "article",
  image: featuredProfile.imageSrc,
});

const profileHighlights = [
  "More than 30 years of experience across offshore incorporation and UAE company setup",
  "Moved to the UAE in 1998 to establish operations for a Hong Kong-based company",
  "Founded Zenesis Corporation in 2005 to provide hands-on corporate services",
  "Built expertise across onshore, offshore, free zone, banking, visa, and compliance work",
];

const articleSections = [
  {
    title: "A background built across jurisdictions",
    paragraphs: [
      "Cecilia D'Cunha is known for her long-standing work in onshore and offshore incorporation and corporate compliance in Dubai and the wider UAE. Her professional path has been shaped by more than 30 years of experience and by exposure to business environments across India, Hong Kong, and the UAE.",
      "Her academic foundation began in India, where she completed degrees in Commerce and Law and qualified as a Chartered Secretary. That combination gave her an early grounding in governance, regulatory process, and corporate compliance. Her early career also included training with multinational businesses such as Boots Pharmaceuticals, Herbertsons, and the former Damania Airlines, giving her exposure to how structured organizations operate across sectors.",
      "After that early experience, she moved to Hong Kong and worked with a company focused on offshore companies and trusts. That period exposed her to structures and jurisdictions across the UK, British Virgin Islands, Mauritius, Seychelles, Anguilla, and Hong Kong. It was the beginning of her long involvement with offshore incorporation, where companies are often set up for international operations, asset protection, or more efficient structuring.",
    ],
  },
  {
    title: "Seeing the UAE opportunity early",
    paragraphs: [
      "In 1998, Cecilia moved to the UAE to establish operations for a Hong Kong-based company. International companies entering the UAE often needed help with licensing, visas, company structures, local approvals, banking requirements, and unfamiliar regulations.",
      "Offshore incorporation was still relatively new in the UAE, and few advisers handled both formation and the work required after registration. Cecilia built her practice around those connected requirements.",
    ],
    quote:
      "Apart from international offshore companies, the UAE saw the establishment of local offshore companies in Jebel Ali, Ras Al Khaimah, and Ajman. The Free Zones were also very attractive for new companies and entrepreneurs as they offered 100% foreign ownership and flexi office packages.",
  },
  {
    title: "Founding Zenesis in 2005",
    paragraphs: [
      "In 2005, Cecilia left her role to establish Zenesis Corporation as a boutique firm in the corporate services space. The business began with offshore incorporation support, but over time grew into a broader service offering that included onshore setup, bookkeeping, VAT registration and filing, corporate tax support, and management consultancy.",
      "That growth reflected how the UAE market itself was changing. As founders and companies matured, their needs extended well beyond incorporation. The same clients who needed help setting up a company also needed help with bank accounts, visas, compliance, tax, reporting, and renewals. Zenesis evolved around that reality.",
    ],
    quote:
      "The start was challenging, especially as a woman and full-time mom. There were many barriers that led to inner conflicts. I often questioned whether I was doing enough for my family while also devoting sufficient time to my business, which was like another baby to me.",
  },
  {
    title: "How Cecilia works",
    paragraphs: [
      "Cecilia remains involved in the operational detail of client work as well as advisory decisions. That approach has shaped Zenesis into a hands-on firm with close attention to process and documentation.",
      "Her legal training and Chartered Secretary background support her work across corporate and compliance requirements in multiple jurisdictions. She has advised startups, entrepreneurs, and established international businesses on reducing legal risk while meeting commercial needs.",
    ],
    quote:
      "I call myself a Messenger to Manager because I'm not afraid of doing simple tasks. This allows me to guide my clients with the experience and expertise I've gathered along the way.",
  },
  {
    title: "Mentoring and long-term influence",
    paragraphs: [
      "Beyond company setup and compliance work, Cecilia is also known for mentoring younger professionals and encouraging long-term learning in business consultancy and corporate services. Her role has extended beyond direct client work into guidance, knowledge-sharing, and helping others grow inside the profession.",
      "Her work combines company setup, corporate structuring, legal compliance, and professional mentoring in the UAE business community.",
    ],
  },
] as const;

const finalQuote =
  "Yes, you can have it all. You can be a great mom, a great wife, and a great entrepreneur. This does not have to be an either-or choice. Embrace the power of planning, prioritize what truly matters, and surround yourself with a strong support system.";

function toSectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const profileGuideLinks = [
  { href: "#profile-highlights", label: "Profile highlights" },
  ...articleSections.map((section) => ({
    href: `#${toSectionId(section.title)}`,
    label: section.title,
  })),
  { href: "#why-this-matters-for-clients", label: "Why this matters for clients" },
  { href: "#her-advice", label: "Her advice" },
];

const featuredProfileSchemas = [
  buildFeaturedProfileSchema(),
  buildBreadcrumbSchema([
    { name: "Home", url: getAbsoluteUrl("/") },
    { name: "Insights", url: getAbsoluteUrl("/insights") },
    { name: "Featured profile", url: getAbsoluteUrl("/featured-profile") },
  ]),
];

export default function FeaturedProfilePage() {
  const profile = insightAuthorProfiles["Cecilia D'Cunha"];

  return (
    <SiteShell currentPath="/insights">
      <ReadingProgress />
      {featuredProfileSchemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <article>
        <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 overflow-hidden bg-[#011735] py-7 text-white md:py-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(36,75,168,0.24),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_44%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-full overflow-hidden md:w-[min(56vw,60rem)]">
            <div
              className="absolute inset-0 opacity-[0.34] md:opacity-[0.88]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.12) 20%, rgba(0,0,0,0.42) 34%, rgba(0,0,0,0.78) 50%, #000 64%)",
                maskImage:
                  "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.12) 20%, rgba(0,0,0,0.42) 34%, rgba(0,0,0,0.78) 50%, #000 64%)",
              }}
            >
              <Image
                src={featuredProfile.imageSrc}
                alt={featuredProfile.imageAlt}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 58vw, 56vw"
                className="object-cover object-right saturate-[0.94] contrast-[0.98]"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,35,42,0.08)_0%,rgba(17,35,42,0.02)_58%,rgba(17,35,42,0.28)_100%)]" />
          </div>
          <div className="relative mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/12"
            >
              <span aria-hidden="true">←</span>
              Back to Insights
            </Link>

            <div className="mt-4 lg:min-h-[16rem] xl:min-h-[17rem]">
              <header className="relative z-10 max-w-[58rem]">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.98rem] text-white/72">
                  <span className="text-sm font-semibold text-[#d8c3a2]">
                    Leadership Feature
                  </span>
                  <span aria-hidden="true" className="text-white/34">
                    •
                  </span>
                  <span>{featuredProfile.publication}</span>
                  <span aria-hidden="true" className="text-white/34">
                    •
                  </span>
                  <span>{featuredProfile.dateLabel}</span>
                </div>
                <h1 className="mt-7 w-full text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.06em] text-white sm:text-[2.75rem] md:text-[3.15rem] xl:text-[3.5rem]">
                  Cecilia D&apos;Cunha in Global Leaders Today
                </h1>
                <p className="mt-6 max-w-4xl text-[1.06rem] font-medium leading-[1.9rem] text-white/86 md:text-[1.16rem] md:leading-8">
                  {featuredProfile.summary}
                </p>
              </header>
            </div>
          </div>
        </section>

        <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-white py-11 md:py-14">
          <div className="mx-auto w-full max-w-[104rem] px-7 md:px-14 xl:px-24">
            <div className="max-w-[78rem] lg:grid lg:grid-cols-[minmax(0,54rem)_17rem] lg:items-start lg:gap-12 xl:gap-16">
              <div className="min-w-0 space-y-12">
                <section className="border-y border-[#e4dbce] py-5 lg:hidden">
                  <ProfileIdentity profile={profile} compact />
                </section>

                <nav
                  aria-label="In this profile"
                  className="border-y border-[#d9d1c5] bg-[#f8f6f1] px-6 py-7 md:px-8 lg:hidden"
                >
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                      <span>
                        <span className="block text-sm font-semibold text-[#8d7453]">
                          In this profile
                        </span>
                        <span className="mt-2 block text-[0.98rem] leading-7 text-[#07151b]/68">
                          {profileGuideLinks.length} sections
                        </span>
                      </span>
                      <span className="text-2xl leading-none text-[#8d7453] transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <ProfileGuideList className="mt-6 space-y-3 border-t border-[#d9d1c5] pt-5" />
                  </details>
                </nav>

                <section
                  id="profile-highlights"
                  className="w-full max-w-[54rem] scroll-mt-28 border-l-4 border-[#d8d0c2] bg-[#f8f6f1] px-6 py-7 md:px-8"
                >
                  <h2 className={articleSectionHeadingClassName}>
                    Profile highlights
                  </h2>
                  <ul className="mt-5 divide-y divide-[#ddd4c7] border-y border-[#ddd4c7]">
                    {profileHighlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 py-4 text-[1.02rem] leading-8 text-[#07151b] md:text-[1.04rem]"
                      >
                        <span className="mt-[0.7rem] h-2 w-2 shrink-0 rounded-full bg-[#8d7453]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {articleSections.map((section) => (
                  <section
                    key={section.title}
                    id={toSectionId(section.title)}
                    className="w-full max-w-[54rem] scroll-mt-28 border-t border-[#e4dbce] pt-10"
                  >
                    <h2 className={articleSectionHeadingClassName}>
                      {section.title}
                    </h2>
                    <div className="mt-6 max-w-[50rem] space-y-5">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-[1.04rem] leading-[1.9rem] text-[#07151b]/92 md:text-[1.08rem] md:leading-[1.95rem]"
                        >
                          {paragraph}
                          <a
                            href="#source-1"
                            aria-label="View source 1"
                            className="inline-flex whitespace-nowrap align-super text-[0.72em] font-semibold leading-none text-[#244ba8] hover:underline"
                          >
                            [1]
                          </a>
                        </p>
                      ))}
                    </div>
                    {"quote" in section && section.quote ? (
                      <blockquote className="mt-8 border-l-4 border-[#244ba8] bg-[#f3f7ff] px-6 py-6 text-[1.06rem] font-medium leading-8 text-[#07151b] md:px-8 md:text-[1.1rem] md:leading-9">
                        &ldquo;{section.quote}&rdquo;
                      </blockquote>
                    ) : null}
                  </section>
                ))}

                <section
                  id="why-this-matters-for-clients"
                  className="w-full max-w-[54rem] scroll-mt-28 border-l-4 border-[#1f7652] bg-[#edf7f1] px-6 py-7 md:px-8"
                >
                  <h2 className={articleSectionHeadingClassName}>
                    Why this matters for clients
                  </h2>
                  <div className="mt-5 space-y-5 text-[1.04rem] leading-8 text-[#07151b]/92 md:text-[1.08rem]">
                    <p>
                      Cecilia&apos;s background explains why
                      Zenesis is able to guide businesses through company formation,
                      structuring, banking coordination, visas, and compliance with a
                      direct experience of how these steps affect one another.
                    </p>
                    <p>
                      For founders, investors, and operating companies, that experience is
                      useful when a client needs to choose a setup structure early and
                      avoid fragmented execution later.
                    </p>
                  </div>
                </section>

                <section
                  id="her-advice"
                  className="w-full max-w-[54rem] scroll-mt-28 border-y border-[#e4dbce] py-10"
                >
                  <h2 className={articleSectionHeadingClassName}>
                    Her advice
                  </h2>
                  <blockquote className="mt-6 text-[1.2rem] font-medium leading-9 text-foreground md:text-[1.35rem] md:leading-10">
                    &ldquo;{finalQuote}&rdquo;
                  </blockquote>
                </section>

              </div>

              <aside className="sticky top-28 hidden border-l border-[#ddd4c7] pl-7 lg:block">
                <div className="border-b border-[#ddd4c7] pb-5">
                  <ProfileIdentity profile={profile} />
                </div>
                <nav aria-label="In this profile" className="pt-6">
                  <p className="text-sm font-semibold text-[#8d7453]">
                    In this profile
                  </p>
                  <ProfileGuideList className="mt-5 space-y-3.5" />
                </nav>
              </aside>
            </div>
          </div>
        </section>

      </article>
    </SiteShell>
  );
}

type Profile = (typeof insightAuthorProfiles)["Cecilia D'Cunha"];

function ProfileIdentity({ profile, compact = false }: { profile: Profile; compact?: boolean }) {
  return (
    <div className="flex min-w-0 items-center gap-4">
      <div
        className={`relative shrink-0 overflow-hidden rounded-full border border-[#d8d0c2] bg-[#f5efe4] ${
          compact ? "h-14 w-14" : "h-12 w-12"
        }`}
      >
        <Image
          src={profile.imageSrc}
          alt="Cecilia D'Cunha"
          fill
          sizes={compact ? "56px" : "48px"}
          className="scale-[1.15] object-cover object-center"
        />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium text-[#8d7453]">
          Featured leader
        </p>
        <p className="mt-1 text-[0.94rem] font-semibold text-foreground">
          Cecilia D&apos;Cunha
        </p>
        <p className="mt-1 text-[0.76rem] text-foreground/62">
          {profile.role} <span className="mx-1">•</span>
          {profile.credentials}
        </p>
      </div>
    </div>
  );
}

function ProfileGuideList({ className }: { className: string }) {
  return (
    <ol className={className}>
      {profileGuideLinks.map((item, index) => (
        <li key={item.href}>
          <a
            href={item.href}
            className="group flex items-start gap-3 text-[0.84rem] font-semibold leading-5 text-foreground/72 hover:text-[#244ba8]"
          >
            <span className="mt-px text-[0.68rem] tabular-nums text-[#8d7453]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}
