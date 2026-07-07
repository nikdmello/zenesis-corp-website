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
    title: "Business Setup in Dubai & UAE | Zenesis Corp",
    description:
      "Zenesis supports mainland, free zone, and offshore business setup in Dubai and the UAE, including licensing, documentation, visas, banking, and post-formation support.",
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
  goldenVisaServices: {
    title: "UAE Golden Visa Guide for Investors & Professionals",
    description:
      "Discover UAE Golden Visa eligibility, benefits, residency options, and application guidance for professionals and investors.",
  },
} satisfies Record<string, LegacyMeta>;

export const legacyServiceMeta = {
  mainland: {
    title: "Mainland Company Formation in Dubai | Zenesis Corp",
    description:
      "With over 20 years of experience, Zenesis Corp specializes in Dubai mainland company setup, delivering complete compliance guidance.",
  },
  "free-zones": {
    title: "Freezone Company Setup in Dubai & RAK | Zenesis Corp",
    description:
      "Set up your Freezone company in Dubai or RAK with Zenesis Corp. End-to-end support for licensing, documentation, compliance, visas, and banking for global entrepreneurs.",
  },
  offshore: {
    title: "Offshore Company Formation in Dubai & RAK | Zenesis Corp",
    description:
      "Zenesis Corp provides offshore company formation services in Dubai and RAK, supporting compliant structuring, documentation, and advisory for global businesses.",
  },
  "document-attestation-services-in-uae": {
    title: "Document Attestation Services in UAE | Zenesis Corp",
    description:
      "Zenesis Corp provides reliable document attestation services in the UAE, ensuring accurate processing and compliance for personal and business documents.",
  },
  "open-a-bank-account-easily": {
    title: "Open a UAE Business Bank Account - Zenesis Corp",
    description:
      "Professional support for opening a business bank account in the UAE, tailored for startups, SMEs, and international companies.",
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
    title: "Best VAT Consultants in UAE | Filing & Compliance",
    description:
      "Zenesis Corp provides professional VAT filing services in the UAE, ensuring accurate returns, timely submissions, and full compliance with UAE tax regulations.",
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
  "complete-guide-to-corporate-tax-groups-uae": {
    title: "Complete Guide to UAE Corporate Tax Groups",
    description:
      "Learn how UAE corporate tax groups work, eligibility rules, benefits, and compliance requirements for businesses.",
  },
  "financial-year-2026-uae-compliance-guide": {
    title: "Financial Year 2026 UAE Compliance Guide",
    description:
      "Discover key UAE business compliance requirements for FY 2026 including corporate tax, VAT, and reporting obligations.",
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
    title: "Top 5 Mistakes When Starting a Business in Dubai",
    description:
      "Avoid costly mistakes when starting a business in Dubai with expert tips on licensing and company setup.",
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
