import type { Metadata } from "next";
import Image from "next/image";
import { CardAccent, PageIntro, SiteShell } from "@/components/site-shell";
import { TalkToZenesisPanel } from "@/components/talk-to-zenesis-panel";
import { versionedAssetPath } from "@/lib/asset-paths";
import { legacyRouteMeta, toMetadata } from "@/lib/legacy-meta";
import { TeamProfiles } from "@/components/team-profiles";

const howWeWork = [
  {
    title: "Understand",
    description:
      "We start by understanding your activity, ownership needs, visa requirements, banking goals, and long-term plans.",
  },
  {
    title: "Recommend",
    description:
      "We help you compare mainland, free zone, and offshore options so you can choose the structure that fits your business.",
  },
  {
    title: "Execute",
    description:
      "Our team supports documentation, approvals, licensing, banking coordination, visas, accounting, and tax compliance.",
  },
  {
    title: "Support",
    description:
      "After setup, we continue supporting renewals, bookkeeping, VAT, corporate tax, and regulatory requirements.",
  },
] as const;

export const metadata: Metadata = toMetadata(legacyRouteMeta.about);

export default function AboutPage() {
  return (
    <SiteShell currentPath="/about">
      <PageIntro
        eyebrow="About Zenesis"
        title="About"
        backgroundImageSrc="/about-bg.webp"
        backgroundImageAlt="Zenesis About page background"
        backgroundImagePosition="!object-[100%_100%]"
        backgroundImageMode="ambient"
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 text-white md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <article className="rounded-[2rem] border border-[#d8d0c2] bg-white p-8 text-[#11232a] shadow-[0_22px_70px_rgba(17,35,42,0.16)] md:p-10">
            <CardAccent />
            <h2 className="section-title font-semibold text-[#11232a]">
              Who we are
            </h2>
            <div className="mt-6 max-w-[88rem] space-y-5 text-[1.18rem] font-medium leading-9 text-[#11232a] md:text-[1.24rem]">
              <p>
                Zenesis Corporation supports entrepreneurs, investors, SMEs, and
                international businesses with company formation, accounting, tax,
                visas, banking support, and ongoing compliance in the UAE.
              </p>
              <p>
                Founded in the UAE in 2005, Zenesis has more than 21 years of
                experience helping businesses navigate the UAE market with
                clarity and confidence.
              </p>
              <p>
                The firm began with offshore incorporation work and expanded
                into onshore setup, bookkeeping, VAT registration and filing,
                corporate tax matters, and ongoing management support as client
                needs evolved with the UAE market.
              </p>
              <p>
                Zenesis starts by understanding the client&apos;s goals, then
                recommends the right structure and manages the process with
                transparency from start to finish.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <div className="mb-8 max-w-4xl">
            <h2 className="section-title font-semibold text-foreground">
              How we work
            </h2>
            <p className="mt-4 max-w-4xl text-[1.16rem] leading-8 text-muted md:text-[1.24rem] md:leading-9">
              A simple four-step flow for narrowing the right structure and carrying it through to execution and ongoing support.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-stretch">
            <div className="overflow-hidden rounded-[2rem] border border-[#ddd3c6] bg-white shadow-[0_18px_56px_rgba(17,35,42,0.08)]">
              <Image
                src={versionedAssetPath("/how-we-work.webp")}
                alt="Zenesis founder presenting a clear business setup process to clients in Dubai"
                width={1920}
                height={1076}
                className="block h-full min-h-[18rem] w-full object-cover object-center"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:hidden">
              {howWeWork.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-[#11232a] p-6 text-white shadow-[0_18px_54px_rgba(17,35,42,0.12)]"
                >
                  <p className="text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-white/58">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[1.14rem] font-medium leading-8 text-white/94 md:text-[1.18rem]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="relative hidden xl:grid xl:grid-cols-2 xl:gap-11">
              {howWeWork.map((item, index) => (
                <article
                  key={item.title}
                  className={`flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-[#11232a] p-6 text-white shadow-[0_18px_54px_rgba(17,35,42,0.12)] ${
                    index === 2 ? "xl:order-4" : index === 3 ? "xl:order-3" : ""
                  }`}
                >
                  <p className="text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-white/58">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[1.14rem] font-medium leading-8 text-white/94">
                    {item.description}
                  </p>
                </article>
              ))}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[23.5%] -translate-x-1/2 -translate-y-1/2 text-[2.35rem] font-black leading-none text-[#11232a]"
              >
                <span className="block">→</span>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[77.5%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-[2.35rem] font-black leading-none text-[#11232a]"
              >
                <span className="block rotate-90">→</span>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[76.5%] -translate-x-1/2 -translate-y-1/2 text-[2.35rem] font-black leading-none text-[#11232a]"
              >
                <span className="block rotate-180">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <div className="max-w-4xl">
            <h2 className="section-title font-semibold text-white">
              Leadership
            </h2>
            <p className="mt-4 max-w-3xl text-[1.18rem] leading-9 text-white/94">
              The leadership team brings cross-border experience in incorporation,
              tax, real estate management, people and culture, and risk and
              crisis management.
            </p>
          </div>

          <div className="mt-8">
            <TeamProfiles />
          </div>
        </div>
      </section>

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <TalkToZenesisPanel
            wrapperClassName="rounded-[2rem] bg-[#11232a] p-8 text-white shadow-[0_22px_70px_rgba(17,35,42,0.12)] md:p-10"
            eyebrowClassName="eyebrow text-white/58"
            titleClassName="section-title mt-4 font-semibold text-white"
            textClassName="text-lg leading-8 text-white/94"
            paragraphs={[
              "Tell us what you want to achieve, and our team will guide you through the right setup, documents, costs, and next steps.",
            ]}
            buttonClassName="inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
            imageClassName="object-cover object-[72%_center]"
          />
        </div>
      </section>
    </SiteShell>
  );
}
