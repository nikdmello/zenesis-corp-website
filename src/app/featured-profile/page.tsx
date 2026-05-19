import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ConsultationFormButton } from "@/components/consultation-form";
import { SiteShell } from "@/components/site-shell";
import { featuredProfile } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Cecilia D'Cunha in Global Leaders Today | Zenesis Corporation",
  description:
    "An internal feature on Cecilia D'Cunha covering her background in offshore incorporation, UAE business setup, and corporate compliance.",
};

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
      "In 1998, Cecilia moved to the UAE to establish operations for a Hong Kong-based company. At the time, the UAE was developing rapidly as an international business hub. Companies were arriving from around the world, but many still found the practical realities difficult: licensing, visas, company structures, local approvals, banking expectations, and how to navigate unfamiliar regulatory systems.",
      "That environment helped Cecilia identify a real gap in the market. Offshore incorporation was still relatively new in the UAE, and the practical support available to founders and international businesses was limited. She saw that businesses needed more than theory. They needed someone who understood how company setup, local rules, and operational follow-through worked together.",
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
    title: "A practical operating philosophy",
    paragraphs: [
      "One of Cecilia's distinguishing traits is that she does not frame leadership as distance from the work. She is known for understanding the operational detail, not only the high-level advisory layer. That has helped shape Zenesis into a business that is hands-on, process-aware, and grounded in execution rather than presentation.",
      "That same practical orientation is also visible in how she speaks about compliance. Her legal training and Chartered Secretary background gave her a strong foundation for helping businesses navigate complex regulatory requirements across jurisdictions. Over the years, she has worked with startups, entrepreneurs, and established international businesses that needed to reduce legal risk while staying commercially effective.",
    ],
    quote:
      "I call myself a Messenger to Manager because I'm not afraid of doing simple tasks. This allows me to guide my clients with the experience and expertise I've gathered along the way.",
  },
  {
    title: "Mentoring and long-term influence",
    paragraphs: [
      "Beyond company setup and compliance work, Cecilia is also known for mentoring younger professionals and encouraging long-term learning in business consultancy and corporate services. Her role has extended beyond direct client work into guidance, knowledge-sharing, and helping others grow inside the profession.",
      "That combination of technical depth, long-range perspective, and operating resilience is why she has become a visible figure in the UAE business community. Her work reflects not only business setup expertise, but also a broader commitment to helping companies and professionals navigate complexity with more clarity.",
    ],
  },
] as const;

const finalQuote =
  "Yes, you can have it all. You can be a great mom, a great wife, and a great entrepreneur. This does not have to be an either-or choice. Embrace the power of planning, prioritize what truly matters, and surround yourself with a strong support system.";

export default function FeaturedProfilePage() {
  return (
    <SiteShell currentPath="/insights">
      <article className="mx-auto mt-10 w-full max-w-5xl md:mt-12">
        <div>
          <Link
            href="/insights"
            className="text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
          >
            ← Back to Insights
          </Link>
        </div>

        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.96rem] text-muted">
            <span>{featuredProfile.publication}</span>
            <span>{featuredProfile.dateLabel}</span>
          </div>
          <h1 className="mt-6 text-[3.3rem] font-semibold leading-[0.96] tracking-[-0.05em] text-foreground sm:text-[4.15rem] xl:whitespace-nowrap">
            Cecilia D&apos;Cunha in Global Leaders Today
          </h1>
          <p className="mt-6 max-w-4xl text-[1.18rem] leading-8 text-muted md:text-[1.32rem] md:leading-9">
            {featuredProfile.summary}
          </p>
        </header>

        <div className="glass-panel relative mt-10 overflow-hidden rounded-[2.25rem]">
          <Image
            src={featuredProfile.imageSrc}
            alt={featuredProfile.imageAlt}
            width={2300}
            height={1800}
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        <section className="mt-12">
          <h2 className="text-[2.15rem] font-semibold tracking-[-0.05em] text-foreground">
            Profile Highlights
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {profileHighlights.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-[#d8d0c2] bg-[#f7f1e7] px-5 py-5 shadow-[0_16px_42px_rgba(17,35,42,0.08)]"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#244ba8] text-sm font-semibold text-white">
                    ✓
                  </span>
                  <p className="text-[1.04rem] leading-7 text-foreground md:text-[1.08rem]">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 space-y-12">
          {articleSections.map((section) => (
            <section key={section.title}>
              <h2 className="text-[2.15rem] font-semibold tracking-[-0.05em] text-foreground">
                {section.title}
              </h2>
              <div className="mt-5 space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[1.16rem] leading-9 text-muted md:text-[1.22rem]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {"quote" in section && section.quote ? (
                <blockquote className="mt-6 rounded-[1.6rem] border border-[#d8d0c2] bg-[#f7f1e7] px-6 py-5 text-[1.08rem] leading-8 text-foreground md:text-[1.12rem] md:leading-9">
                  &ldquo;{section.quote}&rdquo;
                </blockquote>
              ) : null}
            </section>
          ))}
        </section>

        <section className="glass-panel mt-14 rounded-[2rem] p-7 md:p-8">
          <h2 className="text-[2.15rem] font-semibold tracking-[-0.05em] text-foreground">
            Why this matters for clients
          </h2>
          <div className="mt-5 space-y-5">
            <p className="text-[1.16rem] leading-9 text-muted md:text-[1.22rem]">
              Cecilia&apos;s background is not just a personal profile. It explains why
              Zenesis is able to guide businesses through company formation,
              structuring, banking coordination, visas, and compliance with a
              practical understanding of how these steps connect in real life.
            </p>
            <p className="text-[1.16rem] leading-9 text-muted md:text-[1.22rem]">
              For founders, investors, and operating companies, that experience
              is useful when the goal is to make the right setup decision early
              and avoid fragmented execution later.
            </p>
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] border border-[#d8d0c2] bg-[#f7f1e7] p-7 shadow-[0_22px_70px_rgba(17,35,42,0.12)] md:p-8">
          <p className="eyebrow text-accent">Her Advice</p>
          <blockquote className="mt-4 text-[1.2rem] leading-9 text-foreground md:text-[1.26rem]">
            &ldquo;{finalQuote}&rdquo;
          </blockquote>
        </section>

        <section className="mt-14 rounded-[2rem] bg-[#11232a] p-7 text-white shadow-[0_28px_90px_rgba(17,35,42,0.18)] md:p-8">
          <p className="eyebrow text-white/58">Next Step</p>
          <h2 className="mt-4 text-[2.2rem] font-semibold tracking-[-0.05em] text-white">
            Discuss your setup or compliance needs with Zenesis.
          </h2>
          <p className="mt-5 max-w-4xl text-[1.16rem] leading-9 text-white/94 md:text-[1.22rem]">
            If you are comparing company setup routes, working through banking
            or visa steps, or need help with ongoing compliance in the UAE,
            the useful next move is a direct consultation.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ConsultationFormButton
              label="Schedule a Free Consultation"
              className="inline-flex rounded-full bg-[#25D366] px-6 py-3 text-center text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
            />
            <Link
              href="/about"
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-semibold !text-white backdrop-blur-md transition-colors hover:bg-white/[0.18]"
            >
              View About Zenesis
            </Link>
          </div>
        </section>
      </article>
    </SiteShell>
  );
}
