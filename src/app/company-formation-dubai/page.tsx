import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ServiceSubpageLinks } from "@/components/service-subpage-links";
import { CardAccent, PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
import { TalkToZenesisPanel } from "@/components/talk-to-zenesis-panel";
import { versionedAssetPath } from "@/lib/asset-paths";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  buildServiceSchema,
  getAbsoluteUrl,
} from "@/lib/seo";

const pageTitle = "Company Formation in Dubai | Zenesis Corp";
const pageDescription =
  "Company formation in Dubai for mainland, free zone, and offshore structures with licensing, document preparation, visas, banking, tax, accounting, renewals, and compliance support.";

const formationRoutes = [
  {
    title: "Mainland company formation",
    href: "/mainland",
    imageSrc: versionedAssetPath("/mainland.webp"),
    description:
      "For businesses that need direct UAE market access, local client work, broader operating flexibility, and a route that can support local contracts.",
  },
  {
    title: "Free zone company formation",
    href: "/free-zones",
    imageSrc: versionedAssetPath("/freezone.webp"),
    description:
      "For founders who want a package-led structure, 100% foreign ownership in the relevant free zone, and a route suited to consulting, trade, digital, or international work.",
  },
  {
    title: "Offshore company formation",
    href: "/offshore",
    imageSrc: versionedAssetPath("/offshore.webp"),
    description:
      "For holding, asset ownership, succession planning, and international structures that are not meant for day-to-day UAE operating activity.",
  },
] as const;

const decisionPoints = [
  {
    title: "Activity and license scope",
    description:
      "The business activity determines which authority, approvals, documents, and operating limits apply after the company is formed.",
  },
  {
    title: "Market access",
    description:
      "A company serving local UAE clients may need a different route from one focused on international work, consulting, digital services, or holding activity.",
  },
  {
    title: "Visa and office position",
    description:
      "Founder visas, employee visas, office requirements, flexi-desk options, and establishment steps should be understood before filing.",
  },
  {
    title: "Banking readiness",
    description:
      "Banks look at the full story: shareholder profile, business model, source of funds, expected transactions, activity clarity, and structure fit.",
  },
] as const;

const processSteps = [
  {
    step: "01",
    title: "Formation brief",
    description:
      "Zenesis reviews the activity, shareholders, target market, budget, visa needs, office plan, and banking expectations.",
  },
  {
    step: "02",
    title: "Route selection",
    description:
      "Mainland, free zone, offshore, or a connected route is recommended around how the company will operate after incorporation.",
  },
  {
    step: "03",
    title: "Application file",
    description:
      "Trade name, activity selection, supporting documents, forms, and authority submissions are prepared in the right sequence.",
  },
  {
    step: "04",
    title: "Operating setup",
    description:
      "Banking, visas, accounting, tax registration, renewals, and compliance are connected once the company is formed.",
  },
] as const;

const supportLinks = [
  {
    label: "Business setup services UAE",
    href: "/business-setup-services-uae",
    description: "See the full support path from licensing through renewals and compliance.",
  },
  {
    label: "Business setup cost Dubai",
    href: "/business-setup-cost-dubai",
    description: "Compare Zenesis starting prices and the cost drivers behind each route.",
  },
  {
    label: "Mainland vs free zone",
    href: "/mainland-vs-free-zone-dubai",
    description: "Compare market access, ownership, visas, office needs, banking, and cost.",
  },
  {
    label: "Low-cost setup routes",
    href: "/low-cost-business-setup-uae",
    description: "Find the lowest viable route without choosing the wrong structure.",
  },
] as const;

const faqs = [
  {
    question: "What is the best company formation route in Dubai?",
    answer:
      "The best route depends on the business activity, target clients, ownership plan, visa needs, office requirements, banking expectations, and first-year budget. Mainland, free zone, and offshore routes each fit different operating models.",
  },
  {
    question: "Is company formation in Dubai the same as business setup?",
    answer:
      "They are often used together. Company formation usually refers to creating the legal entity and license, while business setup also includes the practical follow-through such as visas, banking, accounting, tax, renewals, and compliance.",
  },
  {
    question: "Can foreigners own a company in Dubai?",
    answer:
      "Foreign ownership is available across many mainland activities and is a common advantage of free zone structures. Some strategic or regulated activities may still follow specific rules, so the exact activity needs to be checked before filing.",
  },
  {
    question: "What should be ready before starting company formation?",
    answer:
      "The activity, shareholder details, preferred trade name, route choice, visa plan, office position, and banking expectations should be clear before documents are submitted. This reduces avoidable revisions and delays.",
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/company-formation-dubai",
});

export default function CompanyFormationDubaiPage() {
  const schemas = [
    buildServiceSchema({
      title: "Company formation in Dubai",
      description: pageDescription,
      path: "/company-formation-dubai",
    }),
    buildBreadcrumbSchema([
      { name: "Home", url: getAbsoluteUrl("/") },
      { name: "Business setup", url: getAbsoluteUrl("/business-setup") },
      {
        name: "Company formation Dubai",
        url: getAbsoluteUrl("/company-formation-dubai"),
      },
    ]),
    buildFaqSchema(faqs),
  ];

  return (
    <SiteShell currentPath="/business-setup">
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}

      <PageIntro
        breadcrumb={[
          { label: "Business setup", href: "/business-setup" },
          { label: "Company formation" },
        ]}
        title="Company formation in Dubai"
        description="Choose the right mainland, free zone, or offshore route before licensing, visas, banking, accounting, tax, renewals, and compliance begin."
        backgroundImageSrc="/backgrounds/business-setup-bg.webp"
        backgroundImageAlt="Company formation consultation in Dubai"
        backgroundImagePosition="!object-[100%_100%]"
        backgroundImageMode="ambient"
        ctaHref="/contact"
        ctaLabel="Book a consultation"
        secondaryHref="/business-setup-cost-dubai"
        secondaryLabel="Compare costs"
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[100rem] items-stretch gap-6 px-6 md:px-12 xl:grid-cols-[0.94fr_1.06fr] xl:px-20">
          <article className="rounded-[2rem] border border-[#d8d0c2] bg-white p-7 text-[#11232a] shadow-[0_22px_70px_rgba(17,35,42,0.16)] md:p-9">
            <CardAccent />
            <h2 className="section-title font-semibold text-foreground">
              Formation before paperwork
            </h2>
            <div className="mt-5 space-y-5 text-[1.08rem] font-medium leading-8 text-foreground/88 md:text-[1.16rem] md:leading-9">
              <p>
                Company formation in Dubai works best when the route is chosen
                around the operating model, not only around the fastest license
                package. The company has to fit how it will sell, hire, bank,
                renew, and stay compliant.
              </p>
              <p>
                Zenesis helps founders and companies compare mainland, free
                zone, and offshore formation routes before the application file
                is prepared, so the setup is practical after approval.
              </p>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative min-h-[18rem] overflow-hidden rounded-[2rem] border border-[#d8d0c2] bg-white shadow-[0_20px_60px_rgba(17,35,42,0.2)] sm:row-span-2">
              <Image
                src={versionedAssetPath("/business-setup-overview.webp")}
                alt="Zenesis company formation consultation in Dubai"
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 34vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative min-h-[12rem] overflow-hidden rounded-[2rem] border border-[#d8d0c2] bg-white shadow-[0_16px_44px_rgba(17,35,42,0.16)]">
              <Image
                src={versionedAssetPath("/professional-meeting.webp")}
                alt="Business setup planning meeting in Dubai"
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 22vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative min-h-[12rem] overflow-hidden rounded-[2rem] border border-[#d8d0c2] bg-white shadow-[0_16px_44px_rgba(17,35,42,0.16)]">
              <Image
                src={versionedAssetPath("/contact-consultation.webp")}
                alt="Dubai company formation document review"
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 22vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Formation routes"
            title="Mainland, free zone, or offshore"
            description="The right company formation route depends on where the business will operate, who it will serve, how it will bank, and what it needs after approval."
          />

          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {formationRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="group overflow-hidden rounded-[1.55rem] border border-[#d8d0c2] bg-white text-[#11232a] shadow-[0_16px_44px_rgba(17,35,42,0.08)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#11232a]">
                  <Image
                    src={route.imageSrc}
                    alt={`${route.title} in Dubai`}
                    fill
                    sizes="(max-width: 1023px) 100vw, 30vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-[1.24rem] font-semibold leading-tight tracking-[-0.04em] text-foreground">
                    {route.title}
                  </h2>
                  <p className="mt-4 text-[1rem] font-medium leading-7 text-foreground/86">
                    {route.description}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-[#244ba8]">
                    View route
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Decision points"
            title="What decides the structure"
            description="A formation route should survive the real operating questions that arrive after the license is issued."
            titleClassName="!text-white"
            descriptionClassName="!text-white/88"
          />

          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {decisionPoints.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.55rem] border border-[#d8d0c2] bg-white p-6 text-[#11232a] shadow-[0_16px_44px_rgba(17,35,42,0.12)]"
              >
                <h2 className="text-[1.2rem] font-semibold leading-tight tracking-[-0.04em] text-foreground">
                  {item.title}
                </h2>
                <p className="mt-4 text-[1rem] font-medium leading-7 text-foreground/86">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Support pages"
            title="Compare the details before you commit"
            description="Use these pages to compare service scope, route fit, cost, and low-cost options before choosing a formation package."
          />

          <div className="mt-7">
            <ServiceSubpageLinks items={supportLinks} columnsClassName="md:grid-cols-2 xl:grid-cols-4" />
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading
            eyebrow="Process"
            title="A cleaner formation sequence"
            description="The company formation process should make licensing, visas, banking, and compliance easier, not create extra cleanup work after approval."
            titleClassName="!text-white"
            descriptionClassName="!text-white/88"
          />

          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-[1.55rem] border border-[#d8d0c2] bg-white p-6 text-[#11232a] shadow-[0_16px_44px_rgba(17,35,42,0.12)]"
              >
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-[#8d7453]">
                  {item.step}
                </p>
                <h2 className="mt-4 text-[1.24rem] font-semibold leading-tight tracking-[-0.04em] text-foreground">
                  {item.title}
                </h2>
                <p className="mt-4 text-[1rem] font-medium leading-7 text-foreground/86">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[100rem] gap-5 px-6 md:px-12 lg:grid-cols-2 xl:px-20">
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

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <TalkToZenesisPanel
            wrapperClassName="rounded-[2rem] bg-white p-8 text-[#11232a] shadow-[0_22px_70px_rgba(17,35,42,0.18)] md:p-10"
            eyebrowClassName="eyebrow text-[#8d7453]"
            titleClassName="section-title mt-4 font-semibold text-foreground"
            textClassName="text-[1.22rem] font-medium leading-9 text-foreground/88"
            paragraphs={[
              "Share the activity, shareholders, visa needs, target clients, and expected banking use. Zenesis will help you choose the company formation route that fits the real operating plan.",
            ]}
            buttonClassName="inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
            imageClassName="object-cover object-[74%_center]"
          />
        </div>
      </section>
    </SiteShell>
  );
}
