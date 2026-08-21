import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CleanSectionLink } from "@/components/clean-section-link";
import { JsonLd } from "@/components/json-ld";
import { PageGuideLayout } from "@/components/page-guide-layout";
import { PageSectionNavMobile } from "@/components/page-section-nav";
import { ReadingProgress } from "@/components/reading-progress";
import { ServiceAnswerSection } from "@/components/service-answer-section";
import { ServiceCredibilityPanel } from "@/components/service-credibility-panel";
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
  { label: "License renewals", href: "#license-renewals", description: "Keep the license, office position, immigration file, and renewal dependencies moving before expiry.", imageSrc: versionedAssetPath("/services/license-renewals.webp"), imageAlt: "A UAE business staying operational during its company license renewal" },
  { label: "Liquidation", href: "#company-liquidation", description: "Close an inactive or restructured company through the proper authority process.", imageSrc: versionedAssetPath("/services/liquidation.webp"), imageAlt: "Business advisers completing an orderly UAE company liquidation" },
  { label: "Restoration", href: "#company-restoration", description: "Assess whether an expired or struck off company can return to good standing.", imageSrc: versionedAssetPath("/services/restoration.webp"), imageAlt: "A UAE company office reopening as the business returns to good standing" },
] as const;

const corporateServiceLinks = [
  { label: "License amendments", href: "#company-amendments", description: "Update ownership, activities, managers, trade names, addresses, and connected records.", imageSrc: versionedAssetPath("/services/license-amendments.webp"), imageAlt: "UAE business advisers reviewing company license amendments" },
  { label: "Corporate secretarial and compliance", href: "#secretarial-compliance", description: "Maintain governance records, regulatory filings, registers, resolutions, and compliance tracking.", imageSrc: versionedAssetPath("/services/corporate-secretarial-and-compliance.webp"), imageAlt: "A corporate governance professional preparing a UAE board meeting" },
  { label: "Document attestation and legalization", href: "#document-attestation-legalization", description: "Authenticate corporate and personal documents for official UAE use.", imageSrc: versionedAssetPath("/services/document-attestation-and-legalization.webp"), imageAlt: "A corporate document being embossed for official use in the UAE" },
  { label: "Branch and representative offices", href: "#branch-representative-office", description: "Establish a UAE presence as an extension of an existing international company.", imageSrc: versionedAssetPath("/services/branch-and-representative-offices.webp"), imageAlt: "International business leaders planning a UAE branch or representative office" },
] as const;

const directAnswers = [
  { question: "Can Zenesis support company liquidation and restoration?", answer: "Yes. Zenesis supports liquidation and restoration in the jurisdictions where it handles company setup. Restoration means bringing an eligible struck off company back to good standing and active status. The route is confirmed against the company record and relevant authority before work begins." },
  { question: "How long does liquidation or restoration take?", answer: "There is no universal timeline. The legal form, authority, company status, outstanding renewals, employee or immigration files, liabilities, notices, clearances, and required third party actions can all affect timing." },
  { question: "Is there one document list for every corporate support case?", answer: "No. Documents depend on the jurisdiction, legal form, requested action, current company status, and authority requirements. Zenesis reviews the company file first and confirms the case specific list." },
  { question: "What is usually involved in opening a UAE branch of a foreign company?", answer: "The process normally connects parent company approval, appointment of the branch manager, attested parent documents, activity approvals, local licensing, and Ministry registration where applicable. The exact path depends on the authority and activity." },
  { question: "What is the difference between a branch and a representative office?", answer: "A branch can generally conduct the approved activities of its parent company and generate UAE revenue. A representative office is limited to market research, promotion, and liaison work and cannot conduct revenue-generating commercial activity." },
  { question: "When should a company start its license renewal?", answer: "Zenesis recommends starting around 30 days before expiry. A straightforward renewal may take 3 to 7 working days, but authority approvals, tenancy, office, immigration, compliance, or outstanding penalty issues can extend that timing." },
  { question: "What UBO records does a UAE company need to maintain?", answer: "A UAE company should identify the natural person or people who ultimately own or control it, provide the required beneficial-owner information to the relevant registrar or licensing authority, and keep its UBO register accurate when ownership or control changes. The exact filing route depends on the legal form and licensing authority." },
  { question: "Does a UAE company still need to file an ESR notification or report?", answer: "Not for financial years ending after 31 December 2022. The UAE Ministry of Finance cancelled those Economic Substance notification and reporting requirements. Earlier-period obligations, authority requests, amendments, and penalties can still require review, so older companies should confirm their historical position." },
] as const;

const process = [
  { step: "01", title: "Review the company record", description: "Confirm the jurisdiction, legal form, licence status, shareholders, managers, and the corporate action required." },
  { step: "02", title: "Confirm the authority path", description: "Check the current authority requirements, dependencies, documents, notices, clearances, and third party steps." },
  { step: "03", title: "Prepare and coordinate", description: "Organize resolutions, applications, attestations, and supporting records, then coordinate the required submissions." },
  { step: "04", title: "Close the follow through", description: "Track authority responses and complete the resulting licence, register, immigration, or company record updates." },
] as const;

function DetailSection({
  id,
  title,
  children,
  dark = false,
  imageSrc,
  imageAlt,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  dark?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
}) {
  const image = imageSrc && imageAlt ? (
    <div className={`overflow-hidden rounded-lg border ${dark ? "border-white/14 bg-white/5" : "border-[#ded5c8] bg-[#f5efe4]"}`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1200}
        height={800}
        sizes="(min-width: 1280px) 38vw, (min-width: 768px) 42vw, 100vw"
        className="aspect-[3/2] w-full object-cover"
      />
    </div>
  ) : null;

  return (
    <section id={id} className={`relative -mt-px w-full scroll-mt-28 py-16 md:py-20 ${dark ? "bg-[#11232a] text-white [&_.eyebrow]:text-white/68 [&_.section-title]:text-white" : "bg-white text-[#11232a]"}`}>
      <div className="w-full px-6 md:px-12 xl:px-16">
        <div className="flow-root max-w-[92rem]">
          <div className="mb-5 h-px w-full bg-[#b88d53]/55" />
          {image ? (
            <div className="mb-7 hidden w-[42%] min-w-[20rem] max-w-[38rem] md:float-right md:ml-10 md:block lg:ml-14 lg:w-[40%]">
              {image}
            </div>
          ) : null}
          <h2 className="section-title w-full !text-[1.75rem] font-semibold !leading-[1.16] !tracking-[-0.02em] text-foreground sm:!text-[1.9rem] md:!text-[2.05rem]">
            {title}
          </h2>
          {image ? <div className="mt-7 md:hidden">{image}</div> : null}
          <div className={`mt-7 space-y-5 text-[1.08rem] leading-8 ${dark ? "text-white/90" : "text-[#11232a]/86"}`}>{children}</div>
        </div>
      </div>
    </section>
  );
}

function DetailList({ items }: { items: readonly string[] }) {
  return (
    <ul className="divide-y divide-current/15 border-y border-current/15">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 py-3.5 leading-7">
          <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b9955f]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ServiceGroupSection({ id, title, description, items, compact = false }: { id: string; title: string; description: string; items: readonly { label: string; href: string; description: string; imageSrc: string; imageAlt: string }[]; compact?: boolean }) {
  return (
    <section id={id} className={`relative -mt-px w-full scroll-mt-28 bg-[#244ba8] text-white ${compact ? "py-11 md:py-14" : "py-16 md:py-20"}`}>
      <div className="w-full px-6 md:px-12 xl:px-16">
        <h2 className={`font-semibold leading-[1.14] ${compact ? "text-[1.7rem] sm:text-[1.85rem] md:text-[2rem]" : "text-[1.9rem] sm:text-[2.1rem] md:text-[2.35rem]"}`}>{title}</h2>
        <p className={`max-w-[48rem] text-white/82 ${compact ? "mt-3 text-[1rem] leading-7" : "mt-5 text-[1.08rem] leading-8"}`}>{description}</p>
        <div className={`grid gap-4 ${compact ? "mt-7 md:grid-cols-2" : `mt-9 ${items.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}`}>
          {items.map((item) => {
            const className = `group flex min-h-full overflow-hidden rounded-lg border border-[#d8d0c2] bg-white text-[#11232a] shadow-[0_12px_30px_rgba(17,35,42,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#bca57f] hover:shadow-[0_16px_36px_rgba(17,35,42,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4dfb5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#244ba8] ${compact ? "min-h-36 flex-row" : "flex-col"}`;
            const content = compact ? <><div className="w-32 shrink-0 overflow-hidden border-r border-[#e4dbce] bg-[#f8f6f1] sm:w-40"><Image src={item.imageSrc} alt={item.imageAlt} width={480} height={480} sizes="(min-width: 640px) 160px, 128px" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div><div className="flex flex-1 flex-col justify-center px-4 py-4"><h3 className="text-[1.05rem] font-semibold leading-6 tracking-[-0.02em] !text-[#07151b]">{item.label}</h3><p className="mt-2 text-[0.92rem] leading-6 text-[#07151b]/76">{item.description}</p><span className="mt-3 inline-flex items-center gap-2 text-[0.78rem] font-semibold text-[#244ba8]">View service <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span></span></div></> : <><div className="overflow-hidden border-b border-[#e4dbce] bg-[#f8f6f1]"><Image src={item.imageSrc} alt={item.imageAlt} width={1200} height={800} sizes={items.length === 3 ? "(min-width: 768px) 33vw, 100vw" : "(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"} className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" /></div><div className="flex flex-1 flex-col p-6"><h3 className="text-[1.18rem] font-semibold leading-7 tracking-[-0.02em] !text-[#07151b]">{item.label}</h3><p className="mt-4 text-[1rem] leading-7 text-[#07151b]/78">{item.description}</p><span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[#244ba8]">View service <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span></span></div></>;

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
        backgroundImageSrc={versionedAssetPath("/services/branch-and-representative-offices.webp")}
        backgroundImageAlt="International business leaders planning a UAE branch or representative office"
        backgroundImagePosition="!object-[center_42%]"
        backgroundImageMode="ambient"
      />
      <PageSectionNavMobile items={pageLinks} />

      <PageGuideLayout items={pageLinks} credibilityPath="/corporate-support">

      <section id="overview" className="relative -mt-px w-full scroll-mt-28 bg-white py-14 md:py-18">
        <div className="w-full px-6 md:px-12 xl:px-16">
          <article className="flex max-w-[54rem] flex-col items-start">
            <h2 className="text-[1.75rem] font-semibold leading-[1.16] tracking-[-0.02em] text-[#11232a] sm:text-[1.9rem] md:text-[2.05rem]">Keep the company record current</h2>
            <div className="mt-7 w-full space-y-5 text-[1.12rem] leading-[2.08rem] text-[#07151b]/92 md:text-[1.18rem] md:leading-[2.2rem]">
              <p>Company administration continues after incorporation. Licences renew, ownership or manager details change, documents need attestation, foreign parents open branches, and some companies eventually need formal liquidation or restoration.</p>
              <p>Zenesis starts with the company record and the relevant jurisdiction. That matters because the authority, legal form, current status, outstanding obligations, and requested action determine the real process.</p>
            </div>
          </article>
        </div>
      </section>

      <ServiceGroupSection id="license-lifecycle" title="Corporate License Lifecycle" description="Support for keeping a company active, closing it correctly, or returning an eligible company to good standing." items={lifecycleLinks} compact />

      <DetailSection id="license-renewals" eyebrow="Keep the company active" title="Company license renewal" imageSrc={versionedAssetPath("/services/license-renewals.webp")} imageAlt="A UAE business staying operational while its company license renewal is coordinated">
        <p>An active business license supports uninterrupted operations, employee visa validity, authority standing, and continued banking activity. Zenesis coordinates mainland and free zone renewals, including connected office, immigration, amendment, and compliance requirements.</p>
        <DetailList items={["Mainland renewals may require a current Ejari and external approvals", "Free zone renewals may include office or desk package renewal", "Common records include the trade license, shareholder passports, tenancy contract, and immigration card", "Starting around 30 days before expiry reduces last-minute risk"]} />
        <p>Allowing a license to expire can lead to financial penalties, suspension, visa issues, disruption to bank operations, possible blacklisting, and greater difficulty reopening the business. A straightforward renewal commonly takes 3 to 7 working days, subject to the authority, license type, office position, visas, approvals, and outstanding obligations.</p>
      </DetailSection>

      <DetailSection id="company-liquidation" eyebrow="Formal company closure" title="Company liquidation" dark imageSrc={versionedAssetPath("/services/liquidation.webp")} imageAlt="Business advisers completing an orderly UAE company liquidation" imagePosition="left">
        <p>Liquidation is the formal process of closing a company and cancelling its legal and administrative obligations. Depending on the company record, the route may be voluntary liquidation, strike-off, or an authority-initiated closure.</p>
        <p>The process commonly covers a board resolution, appointment of a liquidator where required, employee and visa cancellations, bank account closure, authority clearances, notices, and final deregistration. It may be appropriate when a business is no longer operational, is restructuring after losses, has changed direction, or is relocating its operations.</p>
        <p>A typical case may take 4 to 8 weeks, but jurisdiction, liabilities, notices, clearances, and third-party actions can extend the timeline. Leaving a company to expire instead of closing it properly can allow fines and legal liabilities to accumulate and may create immigration, travel, or future licensing complications.</p>
      </DetailSection>

      <DetailSection id="company-restoration" eyebrow="Return to good standing" title="Company restoration" imageSrc={versionedAssetPath("/services/restoration.webp")} imageAlt="A UAE company office reopening as the business returns to good standing">
        <p>An expired or struck off company may be eligible for restoration when the relevant authority still permits reinstatement and the business needs to resume operations. Restoration is time-sensitive, costs may increase with delay, and not every company or status is eligible.</p>
        <p>The route can require payment of penalties, renewal of the license, updated company documents, shareholder or manager resolutions, outstanding compliance filings, and authority approvals. Zenesis first checks the company record and restoration window before confirming whether reinstatement is practical.</p>
      </DetailSection>

      <ServiceGroupSection id="corporate-services" title="Corporate Services" description="Ongoing support for company changes, governance, document legalization, and international expansion into the UAE." items={corporateServiceLinks} compact />

      <DetailSection id="company-amendments" eyebrow="Keep records accurate" title="Company amendments and corporate changes" imageSrc={versionedAssetPath("/services/license-amendments.webp")} imageAlt="UAE business advisers reviewing company license amendments" imagePosition="left">
        <p>Ownership, activities, management, trade names, and offices can change as a business develops. These changes need to be approved and reflected across the relevant company and authority records for mainland, free zone, and offshore entities.</p>
        <DetailList items={["Add or remove shareholders and transfer shares", "Reserve and register a new company or trade name", "Add or remove business activities and obtain connected approvals", "Appoint or remove managers and directors", "Update an office address, Ejari, or lease records", "Align license, constitutional, immigration, tax, banking, and UBO records"]} />
        <p>The usual sequence is to review the requested change, prepare resolutions and supporting documents, submit to the authority, obtain approval, and issue the amended license and company records. Common documents include the trade license, shareholder records, board resolution where applicable, and passport copies. Many amendments take 3 to 10 working days, subject to their complexity and authority approvals.</p>
      </DetailSection>

      <DetailSection id="secretarial-compliance" eyebrow="Ongoing governance" title="Corporate secretarial and compliance services" dark imageSrc={versionedAssetPath("/services/corporate-secretarial-and-compliance.webp")} imageAlt="A corporate governance professional preparing a UAE board meeting">
        <p>Running a UAE company involves continuing record maintenance, regulatory filings, and reporting obligations. Zenesis supports companies across UAE jurisdictions, including businesses with international operations or more structured governance needs.</p>
        <DetailList items={["Ultimate Beneficial Owner identification, filings, and register maintenance", "Historical Economic Substance review for periods ending on or before 31 December 2022 and authority follow-up where applicable", "Statutory registers, shareholder resolutions, and board documentation", "Annual filings, authority submissions, and compliance tracking", "Proactive reminders and updates", "Accurate records that support audits, banking, and good standing"]} />
        <p><Link href="/document-attestation-services-in-uae" className="font-semibold text-[#ead5aa] underline decoration-[#ead5aa]/50 underline-offset-4">Document attestation and legalization</Link> supports this work when corporate or personal documents must be authenticated for company formation, visas, family sponsorship, professional licensing, or government use.</p>
      </DetailSection>

      <DetailSection id="branch-representative-office" eyebrow="International expansion" title="Branch and representative office registration" imageSrc={versionedAssetPath("/services/branch-and-representative-offices.webp")} imageAlt="International business leaders planning a UAE branch or representative office" imagePosition="left">
        <p>An established company can enter the UAE through an extension of its existing legal entity. A branch office can carry out approved activities aligned with the parent company and generate revenue. A representative office is intended for market research, promotion, and brand presence and cannot conduct revenue-generating commercial activity.</p>
        <DetailList items={["100% foreign ownership may be available", "Both structures remain extensions of the parent company", "Branch activities must align with the parent company", "A mainland route may require a Local Service Agent", "A branch can invoice for approved activities", "A representative office is suitable for testing the market"]} />
        <p>A branch suits an established international business that needs direct UAE operations, control, and local invoicing. A representative office suits a company that wants a lower-complexity presence before committing to full operations.</p>
        <p>Common documents include parent incorporation records, a board resolution for UAE expansion, power of attorney, memorandum and articles, audited financial statements, and directors&apos; passport copies. Foreign documents generally need notarization, attestation, and legalization in the required sequence.</p>
        <p>A typical setup may take 3 to 6 weeks. Timing and cost depend on the mainland or free zone jurisdiction, licensing authority, activity approvals, office requirements, and document attestation. UAE corporate tax and VAT obligations must also be assessed against the actual activities and taxable presence.</p>
      </DetailSection>

      <DetailSection id="document-attestation-legalization" eyebrow="Official UAE use" title="Document attestation and legalization" dark imageSrc={versionedAssetPath("/services/document-attestation-and-legalization.webp")} imageAlt="A corporate document being embossed for official use in the UAE">
        <p>Corporate and personal documents may need notarization, attestation, legalization, or certified translation before they can be accepted by a UAE authority. The required sequence depends on where the document was issued and how it will be used.</p>
        <p>Zenesis coordinates the applicable stages for company records, powers of attorney, board resolutions, educational certificates, family documents, and other supporting records.</p>
        <p><Link href="/document-attestation-services-in-uae" className="font-semibold text-[#ead5aa] underline decoration-[#ead5aa]/50 underline-offset-4">View the full document attestation service</Link> for the process, document categories, and common requirements.</p>
      </DetailSection>

      <ServiceAnswerSection title="Direct answers" description="Clear answers before a corporate action is scoped with the relevant authority." items={directAnswers} contained />

      <section id="process" className="relative -mt-px w-full scroll-mt-28 bg-[#f5efe4] py-16 md:py-20">
        <div className="w-full px-6 md:px-12 xl:px-16">
          <SectionHeading eyebrow="Working rhythm" title="Process" description="A case specific path from company record review through authority completion." />
          <div className="balanced-editorial-grid balanced-editorial-grid-4 mt-10 grid border-y-2 border-[#8d7453]/45 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <article key={item.step} className="border-b border-[#d8d0c2] py-7">
                <div className="text-sm font-semibold text-[#8d7453]">{item.step}</div>
                <h3 className="mt-4 text-[1.18rem] font-semibold">{item.title}</h3>
                <p className="mt-4 text-[1.02rem] leading-8 text-[#11232a]/74">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceCredibilityPanel path="/corporate-support" variant="sources" contained />
      </PageGuideLayout>
    </SiteShell>
  );
}
