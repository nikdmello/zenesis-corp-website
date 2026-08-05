import type { Metadata } from "next";
import Link from "next/link";
import { CleanSectionLink } from "@/components/clean-section-link";
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
  { href: "#license-lifecycle", label: "Corporate license lifecycle" },
  { href: "#corporate-services", label: "Corporate services" },
  { href: "#direct-answers", label: "Direct answers" },
  { href: "#process", label: "Process" },
  { href: "#primary-sources", label: "Primary sources" },
] as const;

const lifecycleLinks = [
  { label: "License renewals", href: "#license-renewals", description: "Keep the license, office position, immigration file, and renewal dependencies moving before expiry." },
  { label: "Liquidation", href: "#company-liquidation", description: "Close an inactive or restructured company through the proper authority process." },
  { label: "Restoration", href: "#company-restoration", description: "Assess whether an expired or struck off company can return to good standing." },
] as const;

const corporateServiceLinks = [
  { label: "License amendments", href: "#company-amendments", description: "Update ownership, activities, managers, trade names, addresses, and connected records." },
  { label: "Corporate secretarial and compliance", href: "#secretarial-compliance", description: "Maintain governance records, regulatory filings, registers, resolutions, and compliance tracking." },
  { label: "Document attestation and legalization", href: "/document-attestation-services-in-uae", description: "Authenticate corporate and personal documents for official UAE use." },
  { label: "Branch and representative offices", href: "#branch-representative-office", description: "Establish a UAE presence as an extension of an existing international company." },
] as const;

const serviceLinks = [
  { label: "License renewals", href: "#license-renewals", description: "Keep the trade license, office position, immigration file, and renewal dependencies moving before expiry.", imageSrc: versionedAssetPath("/services/renewals-amendments.webp"), imageAlt: "Company license renewals in the UAE", imageClassName: "object-[center_58%]" },
  { label: "License amendments", href: "#company-amendments", description: "Update activities, shareholder records, manager details, trade names, and company documents when the business changes.", imageSrc: versionedAssetPath("/services/renewals-amendments.webp"), imageAlt: "Company license amendments and record updates in the UAE", imageClassName: "object-[center_58%]" },
  { label: "Liquidation and restoration", href: "#company-liquidation", description: "Close a company properly or assess the route to return a struck off company to good standing.", imageSrc: versionedAssetPath("/services/liquidation-restoration.webp"), imageAlt: "Company liquidation and restoration support in the UAE", imageClassName: "object-[center_58%]" },
  { label: "Branch and representative offices", href: "#branch-representative-office", description: "Coordinate parent company, authority, registration, and attested document requirements for UAE market entry.", imageSrc: versionedAssetPath("/services/branch-office-support.webp"), imageAlt: "Branch and representative office registration in the UAE", imageClassName: "object-[center_64%]" },
  { label: "Corporate secretarial and compliance", href: "#secretarial-compliance", description: "Maintain resolutions, registers, authority records, and compliance follow-through around company changes." },
  { label: "Document attestation and legalization", href: "/document-attestation-services-in-uae", description: "Prepare personal and commercial documents for official use in the UAE." },
] as const;

const directAnswers = [
  { question: "Can Zenesis support company liquidation and restoration?", answer: "Yes. Zenesis supports liquidation and restoration in the jurisdictions where it handles company setup. Restoration means bringing an eligible struck off company back to good standing and active status. The route is confirmed against the company record and relevant authority before work begins." },
  { question: "How long does liquidation or restoration take?", answer: "There is no universal timeline. The legal form, authority, company status, outstanding renewals, employee or immigration files, liabilities, notices, clearances, and required third party actions can all affect timing." },
  { question: "Is there one document list for every corporate support case?", answer: "No. Documents depend on the jurisdiction, legal form, requested action, current company status, and authority requirements. Zenesis reviews the company file first and confirms the case specific list." },
  { question: "What is usually involved in opening a UAE branch of a foreign company?", answer: "The process normally connects parent company approval, appointment of the branch manager, attested parent documents, activity approvals, local licensing, and Ministry registration where applicable. The exact path depends on the authority and activity." },
  { question: "What is the difference between a branch and a representative office?", answer: "A branch can generally conduct the approved activities of its parent company and generate UAE revenue. A representative office is limited to market research, promotion, and liaison work and cannot conduct revenue-generating commercial activity." },
  { question: "When should a company start its license renewal?", answer: "Zenesis recommends starting around 30 days before expiry. A straightforward renewal may take 3 to 7 working days, but authority approvals, tenancy, office, immigration, compliance, or outstanding penalty issues can extend that timing." },
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

function DetailList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
      {items.map((item) => <li key={item} className="border-t border-current/18 pt-3">{item}</li>)}
    </ul>
  );
}

function ServiceGroupSection({ id, title, description, items }: { id: string; title: string; description: string; items: readonly { label: string; href: string; description: string }[] }) {
  return (
    <section id={id} className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#244ba8] py-16 text-white md:py-20">
      <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <p className="text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-white/68">Corporate support</p>
        <h2 className="mt-3 text-[1.9rem] font-semibold leading-[1.14] sm:text-[2.1rem] md:text-[2.35rem]">{title}</h2>
        <p className="mt-5 max-w-[48rem] text-[1.08rem] leading-8 text-white/82">{description}</p>
        <div className={`mt-9 grid gap-px overflow-hidden border border-white/18 bg-white/18 ${items.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 xl:grid-cols-4"}`}>
          {items.map((item) => {
            const className = "min-h-full bg-[#244ba8] p-6 text-white transition-colors hover:bg-[#1d4197] md:p-7";
            const content = <><h3 className="text-[1.16rem] font-semibold leading-7">{item.label}</h3><p className="mt-3 text-[1rem] leading-7 text-white/74">{item.description}</p></>;

            return item.href.startsWith("#") ? (
              <CleanSectionLink key={item.label} href={item.href as `#${string}`} className={className}>{content}</CleanSectionLink>
            ) : (
              <Link key={item.label} href={item.href} className={className}>{content}</Link>
            );
          })}
        </div>
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

      <ServiceGroupSection id="license-lifecycle" title="Corporate License Lifecycle" description="Support for keeping a company active, closing it correctly, or returning an eligible company to good standing." items={lifecycleLinks} />

      <DetailSection id="license-renewals" eyebrow="Keep the company active" title="Company license renewal">
        <p>An active business license supports uninterrupted operations, employee visa validity, authority standing, and continued banking activity. Zenesis coordinates mainland and free zone renewals, including connected office, immigration, amendment, and compliance requirements.</p>
        <DetailList items={["Mainland renewals may require a current Ejari and external approvals", "Free zone renewals may include office or desk package renewal", "Common records include the trade license, shareholder passports, tenancy contract, and immigration card", "Starting around 30 days before expiry reduces last-minute risk"]} />
        <p>Allowing a license to expire can lead to financial penalties, suspension, visa issues, disruption to bank operations, possible blacklisting, and greater difficulty reopening the business. A straightforward renewal commonly takes 3 to 7 working days, subject to the authority, license type, office position, visas, approvals, and outstanding obligations.</p>
      </DetailSection>

      <DetailSection id="company-liquidation" eyebrow="Formal company closure" title="Company liquidation" dark>
        <p>Liquidation is the formal process of closing a company and cancelling its legal and administrative obligations. Depending on the company record, the route may be voluntary liquidation, strike-off, or an authority-initiated closure.</p>
        <p>The process commonly covers a board resolution, appointment of a liquidator where required, employee and visa cancellations, bank account closure, authority clearances, notices, and final deregistration. It may be appropriate when a business is no longer operational, is restructuring after losses, has changed direction, or is relocating its operations.</p>
        <p>A typical case may take 4 to 8 weeks, but jurisdiction, liabilities, notices, clearances, and third-party actions can extend the timeline. Leaving a company to expire instead of closing it properly can allow fines and legal liabilities to accumulate and may create immigration, travel, or future licensing complications.</p>
      </DetailSection>

      <DetailSection id="company-restoration" eyebrow="Return to good standing" title="Company restoration">
        <p>An expired or struck off company may be eligible for restoration when the relevant authority still permits reinstatement and the business needs to resume operations. Restoration is time-sensitive, costs may increase with delay, and not every company or status is eligible.</p>
        <p>The route can require payment of penalties, renewal of the license, updated company documents, shareholder or manager resolutions, outstanding compliance filings, and authority approvals. Zenesis first checks the company record and restoration window before confirming whether reinstatement is practical.</p>
      </DetailSection>

      <ServiceGroupSection id="corporate-services" title="Corporate Services" description="Ongoing support for company changes, governance, document legalization, and international expansion into the UAE." items={corporateServiceLinks} />

      <DetailSection id="company-amendments" eyebrow="Keep records accurate" title="Company amendments and corporate changes">
        <p>Ownership, activities, management, trade names, and offices can change as a business develops. These changes need to be approved and reflected across the relevant company and authority records for mainland, free zone, and offshore entities.</p>
        <DetailList items={["Add or remove shareholders and transfer shares", "Reserve and register a new company or trade name", "Add or remove business activities and obtain connected approvals", "Appoint or remove managers and directors", "Update an office address, Ejari, or lease records", "Align license, constitutional, immigration, tax, banking, and UBO records"]} />
        <p>The usual sequence is to review the requested change, prepare resolutions and supporting documents, submit to the authority, obtain approval, and issue the amended license and company records. Common documents include the trade license, shareholder records, board resolution where applicable, and passport copies. Many amendments take 3 to 10 working days, subject to their complexity and authority approvals.</p>
      </DetailSection>

      <DetailSection id="secretarial-compliance" eyebrow="Ongoing governance" title="Corporate secretarial and compliance services" dark>
        <p>Running a UAE company involves continuing record maintenance, regulatory filings, and reporting obligations. Zenesis supports companies across UAE jurisdictions, including businesses with international operations or more structured governance needs.</p>
        <DetailList items={["Ultimate Beneficial Owner identification, filings, and register maintenance", "Economic Substance classification, assessment, notifications, and reporting where applicable", "Statutory registers, shareholder resolutions, and board documentation", "Annual filings, authority submissions, and compliance tracking", "Proactive reminders and updates", "Accurate records that support audits, banking, and good standing"]} />
        <p><Link href="/document-attestation-services-in-uae" className="font-semibold text-[#ead5aa] underline decoration-[#ead5aa]/50 underline-offset-4">Document attestation and legalization</Link> supports this work when corporate or personal documents must be authenticated for company formation, visas, family sponsorship, professional licensing, or government use.</p>
      </DetailSection>

      <DetailSection id="branch-representative-office" eyebrow="International expansion" title="Branch and representative office registration">
        <p>An established company can enter the UAE through an extension of its existing legal entity. A branch office can carry out approved activities aligned with the parent company and generate revenue. A representative office is intended for market research, promotion, and brand presence and cannot conduct revenue-generating commercial activity.</p>
        <DetailList items={["100% foreign ownership may be available", "Both structures remain extensions of the parent company", "Branch activities must align with the parent company", "A mainland route may require a Local Service Agent", "A branch can invoice for approved activities", "A representative office is suitable for testing the market"]} />
        <p>A branch suits an established international business that needs direct UAE operations, control, and local invoicing. A representative office suits a company that wants a lower-complexity presence before committing to full operations.</p>
        <p>Common documents include parent incorporation records, a board resolution for UAE expansion, power of attorney, memorandum and articles, audited financial statements, and directors&apos; passport copies. Foreign documents generally need notarization, attestation, and legalization in the required sequence.</p>
        <p>A typical setup may take 3 to 6 weeks. Timing and cost depend on the mainland or free zone jurisdiction, licensing authority, activity approvals, office requirements, and document attestation. UAE corporate tax and VAT obligations must also be assessed against the actual activities and taxable presence.</p>
      </DetailSection>

      <ServiceAnswerSection title="Direct answers" description="Clear answers before a corporate action is scoped with the relevant authority." items={directAnswers} />

      <section id="process" className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20"><SectionHeading eyebrow="Working rhythm" title="Process" description="A case specific path from company record review through authority completion." /><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{process.map((item) => <article key={item.step} className="border border-[#d8d0c2] bg-white p-7 text-[#11232a] shadow-[0_10px_28px_rgba(17,35,42,0.08)]"><div className="text-sm font-semibold tracking-[0.12em] text-[#8d7453]">{item.step}</div><h3 className="mt-4 text-[1.18rem] font-semibold">{item.title}</h3><p className="mt-4 text-[1.06rem] leading-8 text-[#11232a]/82">{item.description}</p></article>)}</div></div>
      </section>

      <ServiceCredibilityPanel path="/corporate-support" variant="sources" />
    </SiteShell>
  );
}
