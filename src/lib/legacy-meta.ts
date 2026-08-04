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
      "Zenesis Corp is an award-winning business setup firm in Dubai and the UAE, supporting company formation, visa, banking, accounting, tax, and ongoing corporate support.",
  },
  about: {
    title: "About Zenesis Corp | Award-Winning Business Consultancy in UAE",
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
      "Business setup and company formation services in Dubai and the UAE for mainland, free zone, and offshore structures, including licensing, visas, banking, tax, renewals, and compliance.",
  },
  accountingTax: {
    title: "Accounting Services in UAE for Businesses",
    description:
      "Explore accounting services, bookkeeping, financial reporting, and compliance solutions for businesses in the UAE.",
  },
  visaAndBanking: {
    title: "UAE Business Visa & Residency Guide",
    description:
      "Get insights on UAE business visas, investor visas, residency options, and application processes for entrepreneurs.",
  },
  corporateSupport: {
    title: "Corporate Support Services UAE | Zenesis Corp",
    description:
      "Corporate support for UAE companies including renewals, amendments, liquidation, restoration, branch office support, document attestation, and ongoing company administration.",
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
      "Plan mainland company formation in Dubai with guidance on activity selection, legal structure, office needs, visas, banking, approvals, cost drivers, and renewals.",
  },
  "free-zones": {
    title: "Free Zone Company Formation Dubai | Costs, Visas & Banking",
    description:
      "Compare free zone company formation in Dubai and the UAE by activity, package, ownership, visas, office rules, banking practicality, renewal costs, and operating fit.",
  },
  offshore: {
    title: "Offshore Company Formation | UAE & International Options",
    description:
      "Compare Ajman, RAK, Jebel Ali, BVI, Nevis, Mauritius, Seychelles, and Hong Kong offshore company formation for holding, asset ownership, international structuring, or succession planning.",
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
    title: "UAE Business Visa Solutions | Trusted Advisors – Zenesis Corp",
    description:
      "Get expert support for UAE business visas with structured processing and transparent guidance. From eligibility checks to visa approvals, Zenesis Corp delivers reliable visa solutions.",
  },
  "corporate-tax-registration-in-the-uae": {
    title: "Register for Corporate Tax UAE | Mandatory Compliance | Free Consultation",
    description:
      "Register for corporate tax in the UAE with expert guidance. Mandatory for eligible businesses. Zenesis Corp offers free consultation and end-to-end compliance support.",
  },
  "corporate-tax-filing-services-in-the-uae": {
    title: "Corporate Tax Consultants in Dubai - File Returns Easily with Zenesis",
    description:
      "Zenesis Corp offers reliable corporate tax filing services in the UAE, ensuring accurate submissions, regulatory compliance, and expert tax support for businesses.",
  },
  "vat-filing-services-in-the-uae": {
    title: "VAT Registration and Filing Services UAE | Zenesis",
    description:
      "Get UAE VAT registration and filing support from Zenesis, including registration assessment, application preparation, accurate returns, reconciliations, and ongoing compliance.",
  },
  "professional-bookkeeping-services-in-dubai": {
    title: "Top Accounting & Bookkeeping Company in Dubai | Zenesis Corp",
    description:
      "Professional accounting and bookkeeping services in Dubai by Zenesis Corp. Accurate records, compliance-focused reporting, and expert financial support for UAE businesses.",
  },
  "golden-visa-services-in-the-uae": {
    title: "UAE Golden Visa Guide for Investors & Professionals",
    description:
      "Discover UAE Golden Visa eligibility, benefits, residency options, and application guidance for professionals and investors.",
  },
} satisfies Record<string, LegacyMeta>;

export const legacyInsightMetaBySlug = {
  "uae-mandatory-e-invoicing-deadlines-guide": {
    title: "UAE E-Invoicing Deadlines, Penalties & Guide 2026-27",
    description:
      "UAE e-invoicing becomes mandatory in phases from 2027. See the confirmed deadlines, AED penalties, scope, and practical steps businesses should take now.",
  },
  "complete-guide-to-corporate-tax-groups-uae": {
    title: "Complete Guide to UAE Corporate Tax Groups",
    description:
      "Learn how UAE corporate tax groups work, eligibility rules, benefits, and compliance requirements for businesses.",
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
      "Learn what UAE businesses should keep for corporate tax records, the seven-year retention rule, and how to prepare a cleaner compliance file.",
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
  "top-5-mistakes-starting-business-dubai": {
    title: "Business Setup Mistakes in Dubai | 7 Costly Errors to Avoid",
    description:
      "Avoid common business setup mistakes in Dubai, from choosing the wrong mainland or free zone route to underestimating license scope, visas, banking, tax, and renewal costs.",
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
