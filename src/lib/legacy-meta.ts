import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export type LegacyMeta = {
  title: string;
  description: string;
};

export const legacyRouteMeta = {
  home: {
    title: "Award-Winning Business Setup in Dubai & UAE | Zenesis Corp",
    description:
      "Zenesis Corp is an award-winning business setup firm in Dubai and the UAE, supporting formation, visas, banking, accounting, tax, and corporate support.",
  },
  about: {
    title: "Zenesis Corp | Award-Winning UAE Business Consultancy",
    description:
      "With over two decades in the UAE market, Zenesis Corp supports businesses through expert consulting, governance, and operational guidance.",
  },
  contact: {
    title: "Contact Zenesis Corp | Business Consultancy in UAE",
    description:
      "Get in touch with Zenesis Corp for expert business consultancy, company formation, accounting, and corporate services across the UAE.",
  },
  businessSetup: {
    title: "Business Setup Services in Dubai & UAE | Zenesis Corp",
    description:
      "Zenesis supports mainland, free zone, and offshore business setup in Dubai and the UAE, covering licensing, visas, banking, and post-formation support.",
  },
  accountingTax: {
    title: "Accounting Services Dubai | UAE Business Support",
    description:
      "Accounting services in Dubai for UAE businesses, covering bookkeeping, financial reporting, VAT, corporate tax, reconciliations, and ongoing compliance.",
  },
  visaAndBanking: {
    title: "UAE Business Visa & Residency Guide",
    description:
      "Get insights on UAE business visas, investor visas, residency options, and application processes for entrepreneurs.",
  },
  corporateSupport: {
    title: "Corporate Support Services UAE | Zenesis Corp",
    description:
      "UAE corporate support for company renewals, amendments, liquidation, restoration, branch offices, document attestation, UBO filings, and administration.",
  },
  goldenVisaServices: {
    title: "UAE Golden Visa Guide for Investors & Professionals",
    description:
      "Discover UAE Golden Visa eligibility, benefits, residency options, and application guidance for professionals and investors.",
  },
} satisfies Record<string, LegacyMeta>;

export const legacyServiceMeta = {
  mainland: {
    title: "Mainland Company Formation Dubai | Cost, Visas & Setup",
    description:
      "Plan mainland company formation in Dubai, including activities, legal structures, office requirements, visas, banking, approvals, costs, and renewals.",
  },
  "general-trading-license-dubai": {
    title: "General Trading License Dubai | Setup & Activity Guidance",
    description:
      "Plan a Dubai general trading licence with guidance on activities, jurisdiction, approvals, documents, customs, banking, tax, and ongoing compliance.",
  },
  "free-zones": {
    title: "Free Zone Company Formation Dubai | Costs, Visas & Banking",
    description:
      "Set up your free zone company in Dubai or RAK with Zenesis. Support for licensing, documentation, compliance, visas, and banking.",
  },
  offshore: {
    title: "Offshore Company Formation | UAE & International Options",
    description:
      "Compare UAE and international offshore company formation for holding companies, asset ownership, cross-border structures, and succession planning.",
  },
  "document-attestation-services-in-uae": {
    title: "Document Attestation Services in UAE | Zenesis Corp",
    description:
      "Zenesis Corp provides reliable document attestation services in the UAE, ensuring accurate processing and compliance for personal and business documents.",
  },
  "open-a-bank-account-easily": {
    title: "UAE Business Bank Account Opening Support | Zenesis Corp",
    description:
      "Prepare for UAE business bank account opening with KYC support, company documents, shareholder records, source-of-funds context, and banking route guidance.",
  },
  "uae-company-visa": {
    title: "UAE Business Visa Solutions | Zenesis Corp",
    description:
      "Get expert support for UAE business visas with structured processing and clear guidance, from eligibility checks through visa approval.",
  },
  "corporate-tax-registration-in-the-uae": {
    title: "Corporate Tax Registration UAE | Free Consultation",
    description:
      "Register for corporate tax in the UAE with expert guidance. Mandatory for eligible businesses. Free consultation and compliance support.",
  },
  "corporate-tax-filing-services-in-the-uae": {
    title: "Corporate Tax Filing Services UAE | Zenesis Corp",
    description:
      "Zenesis Corp offers reliable corporate tax filing services in the UAE, ensuring accurate submissions and regulatory compliance.",
  },
  "vat-filing-services-in-the-uae": {
    title: "VAT Filing Services UAE | Returns & Compliance",
    description:
      "Prepare UAE VAT returns with support for reconciliations, invoice checks, filing deadlines, payment follow-through, corrections, and audit-ready records.",
  },
  "vat-registration-services-uae": {
    title: "VAT Registration Services UAE | Zenesis Corp",
    description:
      "Get UAE VAT registration support with threshold assessment, document preparation, EmaraTax guidance, and handover into ongoing VAT compliance.",
  },
  "professional-bookkeeping-services-in-dubai": {
    title: "Bookkeeping Services Dubai | Outsourced Accounting",
    description:
      "Outsourced bookkeeping in Dubai for current books, bank reconciliations, management reporting, payroll, VAT, Corporate Tax, and audit preparation.",
  },
  "golden-visa-services-in-the-uae": {
    title: "UAE Golden Visa Guide for Investors & Professionals",
    description:
      "Discover UAE Golden Visa eligibility, benefits, residency options, and application guidance for professionals and investors.",
  },
} satisfies Record<string, LegacyMeta>;

export const legacyInsightMetaBySlug = {
  "just-registered-uae-company-what-comes-next": {
    title: "UAE Company Registration: What Comes Next?",
    description:
      "A 90-day UAE company checklist covering immigration, visas, banking, Corporate Tax, bookkeeping, VAT, UBO filings, ESR, and renewals.",
  },
  "business-consultant-beyond-company-registration": {
    title: "Business Consultant Support After Registration | Zenesis",
    description:
      "What UAE businesses may need after registration, including banking, tax, visas, records, renewals, and changes to the company structure.",
  },
  "corporate-tax-mistakes-trigger-audits-uae": {
    title: "UAE Corporate Tax Audit Guide 2026 | Zenesis",
    description:
      "How UAE Corporate Tax audits work, records the FTA can inspect, common risk areas, notice procedures, and steps to prepare.",
  },
  "why-first-time-entrepreneurs-are-choosing-uae": {
    title: "Why First-Time Entrepreneurs Are Choosing the UAE",
    description:
      "Why first-time founders consider the UAE, including setup routes, ownership, tax, residency, infrastructure, and regional market access.",
  },
  "uae-mandatory-e-invoicing-deadlines-guide": {
    title: "UAE E-Invoicing Deadlines, Penalties & Guide 2026-27",
    description:
      "UAE e-invoicing becomes mandatory in phases from 2027. See the confirmed deadlines, administrative penalties, scope, and preparation steps.",
  },
  "complete-guide-to-corporate-tax-groups-uae": {
    title: "UAE Corporate Tax Groups: Eligibility and Filing",
    description:
      "How UAE Corporate Tax groups work, who can form them, the eligibility rules, and the filing and threshold effects to review.",
  },
  "financial-year-2026-uae-compliance-guide": {
    title: "Financial Year in UAE 2026 | Tax, VAT & Filing Deadlines",
    description:
      "Understand the financial year in UAE for 2026, including corporate tax filing deadlines, VAT cut-off, audits, record-keeping, and year-end compliance.",
  },
  "uae-corporate-tax-filing-deadlines-2026": {
    title: "UAE Corporate Tax Filing Deadlines 2026",
    description:
      "Plan UAE corporate tax filing deadlines for 2026 with guidance on tax periods, return timing, records, and filing readiness.",
  },
  "uae-corporate-tax-record-keeping-requirements": {
    title: "UAE Corporate Tax Record-Keeping Requirements",
    description:
      "Learn which UAE Corporate Tax records to retain for seven years and how to organize the supporting file.",
  },
  "uae-free-zone-corporate-tax-rules-clarified-2026": {
    title: "UAE Free Zone Corporate Tax Rules Explained",
    description:
      "Understand UAE free zone corporate tax rules, qualifying income, exemptions, and compliance updates for 2026.",
  },
  "uae-corporate-tax-registrations-cross-640000-businesses": {
    title: "UAE Corporate Tax Registrations Cross 640,000",
    description:
      "Explore what rising UAE corporate tax registrations mean for businesses and how companies can stay compliant.",
  },
  "uae-visa-reforms-2025-entrepreneurs-expats": {
    title: "UAE Visa Reforms 2025: Key Updates",
    description:
      "Stay updated on UAE visa reforms 2025, residency changes, and opportunities for entrepreneurs and expats.",
  },
  "business-setup-mistakes-dubai": {
    title: "Business Setup Mistakes in Dubai | 7 Costly Errors to Avoid",
    description:
      "Avoid common Dubai business setup mistakes involving route selection, licence scope, visas, banking, tax readiness, renewals, and hidden costs.",
  },
  "complete-dubai-golden-visa-guide": {
    title: "Complete Dubai Golden Visa Guide",
    description:
      "Explore Dubai Golden Visa eligibility, benefits, application process, and UAE residency opportunities.",
  },
} satisfies Record<string, LegacyMeta>;

export function toMetadata(
  meta: LegacyMeta,
  path: string,
  options?: {
    type?: "website" | "article";
    image?: string;
    noIndex?: boolean;
  },
): Metadata {
  return buildPageMetadata({
    title: meta.title,
    description: meta.description,
    path,
    type: options?.type,
    image: options?.image,
    noIndex: options?.noIndex,
  });
}
