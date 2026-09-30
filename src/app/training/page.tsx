import Image from "next/image";
import Link from "next/link";
import { ConsultationFormButton } from "@/components/consultation-button";
import { JsonLd } from "@/components/json-ld";
import { PageGuideLayout } from "@/components/page-guide-layout";
import { PageSectionNavMobile } from "@/components/page-section-nav";
import { ReadingProgress } from "@/components/reading-progress";
import { ServiceAnswerSection } from "@/components/service-answer-section";
import { PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  buildServiceSchema,
  getAbsoluteUrl,
} from "@/lib/seo";

const description =
  "Practical training in community management, leadership, customer experience, and professional development, led by Prof. Jeevan D'Mello.";

export const metadata = buildPageMetadata({
  title: "Professional Training in Dubai | Zenesis",
  description,
  path: "/training",
  image: "/services/jeevan-professional-training.webp",
});

const pageLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#training-areas", label: "Training areas" },
  { href: "#who-its-for", label: "Who it's for" },
  { href: "#how-it-works", label: "How programmes are arranged" },
  { href: "#direct-answers", label: "Direct answers" },
] as const;

const trainingAreas = [
  {
    title: "Community management",
    description:
      "Professional learning on governance, service standards, financial stewardship, maintenance planning, resident engagement, and the day-to-day work of managing communities.",
  },
  {
    title: "Leadership and customer experience",
    description:
      "Workshops for managers and teams on communication, decision-making, trust, service leadership, and handling complex stakeholder relationships.",
  },
  {
    title: "University and student learning",
    description:
      "Guest teaching and practical sessions that connect architecture, real estate, business, leadership, and community development to professional practice.",
  },
  {
    title: "Tailored organisational programmes",
    description:
      "Courses, workshops, and masterclasses shaped around the organisation, audience, operating context, and learning outcome required.",
  },
] as const;

const audiences = [
  "Real-estate developers and community-management teams",
  "Property managers, association managers, boards, and owners",
  "Leadership, customer-experience, and service teams",
  "Universities, professional bodies, students, and early-career professionals",
] as const;

const process = [
  {
    step: "01",
    title: "Share the audience and objective",
    description:
      "Tell us who the programme is for, what participants need to understand or improve, and the setting in which they will use it.",
  },
  {
    step: "02",
    title: "Agree the programme",
    description:
      "Zenesis confirms the subject, format, level, duration, and delivery approach before the session is scheduled.",
  },
  {
    step: "03",
    title: "Deliver practical learning",
    description:
      "Jeevan connects professional standards with real operating experience, discussion, and examples relevant to the room.",
  },
] as const;

const faqs = [
  {
    question: "Who leads Zenesis training programmes?",
    answer:
      "Training is led by Prof. Jeevan D'Mello, CEO of Zenesis Corporation. His work spans real estate, community management, customer experience, leadership, university teaching, and professional education.",
  },
  {
    question: "Does Zenesis offer community-management training?",
    answer:
      "Yes. Community-management training can cover governance, professional standards, financial stewardship, maintenance and operations, stakeholder communication, resident engagement, and service leadership.",
  },
  {
    question: "Can a programme be tailored for our organisation or university?",
    answer:
      "Yes. The content, level, duration, and format can be shaped around the audience and learning objective. Programme details are confirmed after an initial discussion.",
  },
  {
    question: "Is there a fixed public course calendar?",
    answer:
      "Zenesis currently handles training enquiries directly rather than publishing a fixed course calendar. Contact the team with the audience, topic, preferred timing, and delivery format required.",
  },
] as const;

export default function TrainingPage() {
  const schemas = [
    buildServiceSchema({
      title: "Professional training",
      description,
      path: "/training",
    }),
    buildBreadcrumbSchema([
      { name: "Home", url: getAbsoluteUrl("/") },
      { name: "Professional training", url: getAbsoluteUrl("/training") },
    ]),
    buildFaqSchema(faqs),
  ];

  return (
    <SiteShell currentPath="/training">
      <ReadingProgress />
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}

      <PageIntro
        showBottomBorder={false}
        breadcrumb={[{ label: "Services", href: "/#services" }, { label: "Professional training" }]}
        title="Professional training"
        description={description}
      />

      <PageSectionNavMobile items={pageLinks} />
      <PageGuideLayout items={pageLinks} credibilityPath="/training" navigationLabel="On this page">
        <section id="overview" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-white py-11 md:py-14">
          <div className="mx-auto grid w-full max-w-[100rem] items-start gap-9 px-6 md:px-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(24rem,1.1fr)] lg:gap-12 xl:px-20">
            <div className="max-w-[48rem]">
              <SectionHeading title="Learning grounded in practice" />
              <div className="mt-7 space-y-5 text-[1.04rem] leading-[1.9rem] text-[#07151b]/92 md:text-[1.08rem] md:leading-[1.95rem]">
                <p>
                  Zenesis provides professional training led by Prof. Jeevan D&apos;Mello for organisations, universities, working professionals, and students.
                </p>
                <p>
                  Jeevan brings decades of work across architecture, property handover, customer experience, community management, leadership, and professional education into the classroom. His training connects standards and theory to decisions participants face at work.
                </p>
                <p>
                  Programmes are arranged around the audience and objective. Zenesis can support a focused workshop, a longer course, a university session, or a tailored programme for an organisation.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ConsultationFormButton
                  label="Discuss a training programme"
                  presetEnquiry="I would like to discuss a professional training programme with Zenesis."
                  className="inline-flex min-h-12 items-center justify-center bg-[#011735] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#0c2d59]"
                />
                <Link href="/about#leadership" className="text-sm font-semibold !text-[#244ba8] underline decoration-[#244ba8]/35 underline-offset-4">
                  About Jeevan D&apos;Mello
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden bg-[#011735] lg:min-h-[31rem] lg:aspect-auto">
              <Image
                src="/services/jeevan-professional-training.webp"
                alt="Jeevan D'Mello leading a professional training session"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        <section id="training-areas" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#f5efe4] py-12 md:py-16">
          <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
            <SectionHeading
              title="Training areas"
              description="The subject and level are agreed around the people attending and what they need to take back into practice."
            />
            <div className="mt-9 grid border-l border-t border-[#d8d0c2] md:grid-cols-2">
              {trainingAreas.map((area, index) => (
                <article key={area.title} className="min-h-[15rem] border-b border-r border-[#d8d0c2] bg-white p-6 md:p-8">
                  <span className="text-sm font-semibold tabular-nums text-[#8d7453]">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-7 text-[1.3rem] font-semibold leading-tight text-[#011735] md:text-[1.45rem]">{area.title}</h3>
                  <p className="mt-4 max-w-[34rem] text-[1rem] leading-7 text-[#07151b]/76">{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="who-its-for" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#011735] py-12 text-white md:py-16">
          <div className="mx-auto grid w-full max-w-[100rem] gap-9 px-6 md:px-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 xl:px-20">
            <div>
              <div className="h-px w-16 bg-[#d5be8b]" />
              <h2 className="mt-5 text-[1.75rem] font-semibold leading-[1.16] text-white sm:text-[1.9rem] md:text-[2.05rem]">Who it&apos;s for</h2>
              <p className="mt-4 max-w-[32rem] text-[1.04rem] leading-8 text-white/74">
                Training can be adapted for experienced practitioners, new teams, students, or mixed professional groups.
              </p>
            </div>
            <ul className="divide-y divide-white/18 border-y border-white/18">
              {audiences.map((audience) => (
                <li key={audience} className="flex items-start gap-4 py-5 text-[1.05rem] leading-8 text-white/92">
                  <span className="mt-3 h-2 w-2 shrink-0 bg-[#d5be8b]" />
                  {audience}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="how-it-works" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-white py-12 md:py-16">
          <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
            <SectionHeading
              title="How programmes are arranged"
              description="There is no generic package to force onto every group. The programme is scoped before it is scheduled."
            />
            <div className="mt-9 grid border-y-2 border-[#8d7453]/45 md:grid-cols-3">
              {process.map((item) => (
                <article key={item.step} className="border-b border-[#d8d0c2] py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                  <span className="text-sm font-semibold text-[#8d7453]">{item.step}</span>
                  <h3 className="mt-5 text-[1.15rem] font-semibold text-[#011735]">{item.title}</h3>
                  <p className="mt-3 text-[0.98rem] leading-7 text-[#07151b]/72">{item.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 border-l-4 border-[#244ba8] bg-[#f3f7ff] px-6 py-6 md:flex md:items-center md:justify-between md:gap-8">
              <p className="max-w-[48rem] text-[1rem] leading-7 text-[#07151b]/82">
                Programme dates, duration, format, fees, and any participation requirements are confirmed for each enquiry.
              </p>
              <ConsultationFormButton
                label="Ask about training"
                presetEnquiry="I would like to ask about a professional training programme with Zenesis."
                className="mt-5 inline-flex min-h-11 shrink-0 items-center justify-center bg-[#011735] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#0c2d59] md:mt-0"
              />
            </div>
          </div>
        </section>

        <ServiceAnswerSection
          title="Direct answers"
          description="The practical details people usually ask before discussing a training programme."
          items={faqs}
        />
      </PageGuideLayout>
    </SiteShell>
  );
}
