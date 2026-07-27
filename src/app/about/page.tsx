import NextImage from "next/image";
import type { Metadata } from "next";
import { CardAccent, PageIntro, SiteShell } from "@/components/site-shell";
import { TalkToZenesisPanel } from "@/components/talk-to-zenesis-panel";
import { legacyRouteMeta, toMetadata } from "@/lib/legacy-meta";
import { TeamProfiles } from "@/components/team-profiles";

export const metadata: Metadata = toMetadata(legacyRouteMeta.about, "/about");

export default function AboutPage() {
  return (
    <SiteShell currentPath="/about">
      <PageIntro
        eyebrow="About Zenesis"
        title="About"
        description="The background, experience, and working approach behind Zenesis in the UAE."
        backgroundImageSrc="/team-photo.webp"
        backgroundImageAlt="Zenesis team photo"
        backgroundImagePosition="!object-[72%_28%]"
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
              src="/awards-and-recognition.webp"
              alt=""
              fill
              sizes="(max-width: 1279px) 46vw, 52vw"
              className="object-cover object-right"
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <div className="max-w-4xl">
            <h2 className="section-title font-semibold text-foreground">
              Leadership
            </h2>
            <p className="mt-4 max-w-3xl text-[1.18rem] leading-9 text-muted">
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
