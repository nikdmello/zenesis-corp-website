import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageSectionNav, PageSectionNavMobile } from "@/components/page-section-nav";
import { ReadingProgress } from "@/components/reading-progress";
import { ServiceAnswerSection } from "@/components/service-answer-section";
import { ServiceCredibilityPanel } from "@/components/service-credibility-panel";
import { ServiceSubpageLinks } from "@/components/service-subpage-links";
import { PageIntro, SectionHeading, SiteShell } from "@/components/site-shell";
import { versionedAssetPath } from "@/lib/asset-paths";
import { legacyRouteMeta, toMetadata } from "@/lib/legacy-meta";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema, getAbsoluteUrl } from "@/lib/seo";

export const metadata: Metadata = toMetadata(legacyRouteMeta.corporateSupport, "/corporate-support");

const pageLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#core-services", label: "Core services" },
  { href: "#liquidation-restoration", label: "Liquidation and restoration" },
  { href: "#branch-office", label: "Branch office" },
  { href: "#renewals-amendments", label: "Renewals and amendments" },
  { href: "#direct-answers", label: "Direct answers" },
  { href: "#process", label: "Process" },
  { href: "#primary-sources", label: "Primary sources" },
] as const;

const serviceLinks = [
  { label: "Liquidation and restoration", href: "#liquidation-restoration", description: "Close a company properly or assess the route to return a struck off company to good standing." },
  { label: "Branch office support", href: "#branch-office", description: "Coordinate the parent company, authority, registration, and attested document requirements." },
  { label: "Renewals and amendments", href: "#renewals-amendments", description: "Keep licence, shareholder, manager, activity, and company records current." },
  { label: "Document attestation", href: "/document-attestation-services-in-uae", description: "Prepare personal and commercial documents for official use in the UAE." },
] as const;

const directAnswers = [
  { question: "Can Zenesis support company liquidation and restoration?", answer: "Yes. Zenesis supports liquidation and restoration in the jurisdictions where it handles company setup. Restoration means bringing an eligible struck off company back to good standing and active status. The route is confirmed against the company record and relevant authority before work begins." },
  { question: "How long does liquidation or restoration take?", answer: "There is no universal timeline. The legal form, authority, company status, outstanding renewals, employee or immigration files, liabilities, notices, clearances, and required third party actions can all affect timing." },
  { question: "Is there one document list for every corporate support case?", answer: "No. Documents depend on the jurisdiction, legal form, requested action, current company status, and authority requirements. Zenesis reviews the company file first and confirms the case specific list." },
  { question: "What is usually involved in opening a UAE branch of a foreign company?", answer: "The process normally connects parent company approval, appointment of the branch manager, attested parent documents, activity approvals, local licensing, and Ministry registration where applicable. The exact path depends on the authority and activity." },
] as const;

const process = [
  { step: "01", title: "Review the company record", description: "Confirm the jurisdiction, legal form, licence status, shareholders, managers, and the corporate action required." },
  { step: "02", title: "Confirm the authority path", description: "Check the current authority requirements, dependencies, documents, notices, clearances, and third party steps." },
  { step: "03", title: "Prepare and coordinate", description: "Organize resolutions, applications, attestations, and supporting records, then coordinate the required submissions." },
  { step: "04", title: "Close the follow through", description: "Track authority responses and complete the resulting licence, register, immigration, or company record updates." },
] as const;

function DetailSection({ id, eyebrow, title, children, dark = false }: { id: string; eyebrow: string; title: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <section id={id} className={`relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 py-16 md:py-20 ${dark ? "bg-[#11232a] text-white [&_.eyebrow]:text-white/68 [&_.section-title]:text-white" : "bg-white text-[#11232a]"}`}>
      <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className={`mt-7 max-w-[62rem] space-y-5 text-[1.08rem] leading-8 ${dark ? "text-white/90" : "text-[#11232a]/86"}`}>{children}</div>
      </div>
    </section>
  );
}

export default function CorporateSupportPage() {
  const schemas = [
    buildServiceSchema({ title: "Corporate support", description: legacyRouteMeta.corporateSupport.description, path: "/corporate-support" }),
    buildBreadcrumbSchema([{ name: "Home", url: getAbsoluteUrl("/") }, { name: "Corporate support", url: getAbsoluteUrl("/corporate-support") }]),
    buildFaqSchema(directAnswers),
  ];

  return (
    <SiteShell currentPath="/corporate-support">
      <ReadingProgress />
      {schemas.map((schema, index) => <JsonLd key={index} data={schema} />)}
      <PageIntro
        showBottomBorder={false}
        breadcrumb={[{ label: "Services", href: "/#services" }, { label: "Corporate support" }]}
        title="Corporate support"
        description="Ongoing company administration for renewals, amendments, liquidation, restoration, branch offices, and document attestation across the UAE jurisdictions Zenesis supports."
        backgroundImageSrc={versionedAssetPath("/services/document-attestation.webp")}
        backgroundImageAlt="Corporate records and document support for a UAE company"
        backgroundImagePosition="!object-[76%_center]"
        backgroundImageMode="ambient"
        footerContent={<ServiceCredibilityPanel path="/corporate-support" variant="expertise" embedded />}
      />
      <PageSectionNavMobile items={pageLinks} />

      <section id="overview" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-white py-14 md:py-18">
        <div className="mx-auto grid w-full max-w-[100rem] gap-12 px-6 md:px-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start xl:px-20">
          <article className="max-w-[54rem]">
            <p className="text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-[#8d7453]">After formation</p>
            <h2 className="mt-3 text-[1.75rem] font-semibold leading-[1.16] tracking-[-0.02em] text-[#11232a] sm:text-[1.9rem] md:text-[2.05rem]">Keep the company record current</h2>
            <div className="mt-7 space-y-5 text-[1.12rem] leading-[2.08rem] text-[#07151b]/92 md:text-[1.18rem] md:leading-[2.2rem]">
              <p>Company administration continues after incorporation. Licences renew, ownership or manager details change, documents need attestation, foreign parents open branches, and some companies eventually need formal liquidation or restoration.</p>
              <p>Zenesis starts with the company record and the relevant jurisdiction. That matters because the authority, legal form, current status, outstanding obligations, and requested action determine the real process.</p>
            </div>
            <div className="mt-9 border-t border-[#e4dbce] pt-8"><ServiceSubpageLinks items={[...serviceLinks]} columnsClassName="sm:grid-cols-2" variant="compact" /></div>
          </article>
          <PageSectionNav items={pageLinks} />
        </div>
      </section>

      <section id="core-services" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
          <SectionHeading eyebrow="Service lines" title="Corporate support services" description="The exact work is scoped against the company, authority, and requested action rather than a universal checklist." />
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {serviceLinks.map((item) => <Link key={item.label} href={item.href} className="border border-[#d8d0c2] bg-white p-7 text-[#11232a] shadow-[0_10px_28px_rgba(17,35,42,0.07)] transition-transform hover:-translate-y-0.5"><h3 className="text-[1.24rem] font-semibold">{item.label}</h3><p className="mt-4 text-[1.08rem] leading-8 text-[#11232a]/82">{item.description}</p></Link>)}
          </div>
        </div>
      </section>

      <DetailSection id="liquidation-restoration" eyebrow="Company status" title="Liquidation and restoration" dark>
        <p>Zenesis supports liquidation and restoration in the jurisdictions where it handles company setup. Liquidation is a formal closure process, not simply allowing a licence to expire. Depending on the company, it can involve corporate approvals, a liquidator, notices, authority clearances, employee and immigration closure, and final deregistration.</p>
        <p>Restoration is the route used to bring an eligible struck off company back to good standing and active status. The authority first needs to confirm that restoration is available and identify the outstanding filings, renewals, penalties, resolutions, or supporting evidence required.</p>
        <p>Timelines and documents are confirmed case by case because the legal form, jurisdiction, company status, liabilities, and third party dependencies differ.</p>
      </DetailSection>

      <DetailSection id="branch-office" eyebrow="Existing companies" title="Branch office support">
        <p>A branch allows an existing company to establish a UAE presence under the parent company rather than creating a completely separate ownership structure. The suitable route depends on whether the parent is foreign or UAE based, where the branch will be licensed, and what activity it needs to conduct.</p>
        <p>Foreign branch work commonly involves a parent company resolution, appointment of the responsible manager, parent incorporation and registration evidence, attestation, activity approvals, local licensing, and Ministry registration where applicable. Regulated activities can add further approvals.</p>
        <p>Zenesis coordinates the practical route and identifies when a jurisdiction or regulated activity requires an appropriately licensed specialist or authority specific support.</p>
      </DetailSection>

      <DetailSection id="renewals-amendments" eyebrow="Ongoing administration" title="Renewals, amendments, and company records" dark>
        <p>Corporate support also covers recurring and event driven changes such as licence renewals, activity changes, shareholder or manager updates, trade name changes, authorised signatory records, share transfers, and company document updates.</p>
        <p>The safest sequence is to identify every connected record before filing. A change may affect the licence, constitutional documents, commercial register, establishment or immigration file, bank records, tax profile, contracts, and beneficial ownership information.</p>
        <p><Link href="/document-attestation-services-in-uae" className="font-semibold text-[#ead5aa] underline decoration-[#ead5aa]/50 underline-offset-4">Document attestation</Link> sits within this corporate support workflow when resolutions, powers of attorney, parent company records, or other documents must be legalized for UAE use.</p>
      </DetailSection>

      <ServiceAnswerSection title="Direct answers" description="Clear answers before a corporate action is scoped with the relevant authority." items={directAnswers} />

      <section id="process" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20"><SectionHeading eyebrow="Working rhythm" title="Process" description="A case specific path from company record review through authority completion." /><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{process.map((item) => <article key={item.step} className="border border-[#d8d0c2] bg-white p-7 text-[#11232a] shadow-[0_10px_28px_rgba(17,35,42,0.08)]"><div className="text-sm font-semibold tracking-[0.12em] text-[#8d7453]">{item.step}</div><h3 className="mt-4 text-[1.18rem] font-semibold">{item.title}</h3><p className="mt-4 text-[1.06rem] leading-8 text-[#11232a]/82">{item.description}</p></article>)}</div></div>
      </section>

      <ServiceCredibilityPanel path="/corporate-support" variant="sources" />
    </SiteShell>
  );
}
