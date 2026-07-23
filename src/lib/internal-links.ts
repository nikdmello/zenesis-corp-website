import type { InsightPost } from "@/lib/insights";
import { versionedAssetPath } from "@/lib/asset-paths";

export type InternalLinkCard = {
  title: string;
  href: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  imageClassName?: string;
};

export const serviceLinksByCategory: Record<string, InternalLinkCard[]> = {
  "Business Setup": [
    {
      title: "Business setup",
      href: "/business-setup",
      description: "Compare mainland, free zone, and offshore routes before formation starts.",
      imageSrc: versionedAssetPath("/backgrounds/business-setup-bg.webp"),
      imageAlt: "Business setup advisory meeting in Dubai",
      imageClassName: "object-[78%_center]",
    },
    {
      title: "Company formation Dubai",
      href: "/company-formation-dubai",
      description: "Choose the right mainland, free zone, or offshore formation route in Dubai.",
      imageSrc: versionedAssetPath("/company-formation-dubai.webp"),
      imageAlt: "Company formation route planning in Dubai",
      imageClassName: "object-[82%_32%]",
    },
    {
      title: "Business setup services",
      href: "/business-setup-services-uae",
      description: "See the full setup path from licensing through visas, banking, tax, and renewals.",
      imageSrc: versionedAssetPath("/business-setup-services-uae.webp"),
      imageAlt: "Business setup services planning in the UAE",
      imageClassName: "object-[82%_32%]",
    },
    {
      title: "Business setup pricing",
      href: "/business-setup-cost-dubai",
      description: "Compare starting prices for freelance, free zone, and mainland setup routes.",
      imageSrc: versionedAssetPath("/business-setup-cost-uae.webp"),
      imageAlt: "Business setup pricing and free zone package review",
      imageClassName: "object-[82%_32%]",
    },
    {
      title: "Mainland vs free zone",
      href: "/mainland-vs-free-zone-dubai",
      description: "Compare market access, visas, banking, office needs, and setup cost tradeoffs.",
      imageSrc: versionedAssetPath("/mainland-vs-freezone.webp"),
      imageAlt: "Mainland and free zone setup comparison in Dubai",
      imageClassName: "object-[82%_34%]",
    },
    {
      title: "Low-cost setup routes",
      href: "/low-cost-business-setup-uae",
      description: "Compare the cheapest viable routes without choosing the wrong structure.",
      imageSrc: versionedAssetPath("/low-cost-setup.webp"),
      imageAlt: "Low-cost UAE business setup route planning",
      imageClassName: "object-[82%_34%]",
    },
    {
      title: "Mainland setup",
      href: "/mainland",
      description: "For broader UAE market access and direct local operating flexibility.",
      imageSrc: versionedAssetPath("/mainland.webp"),
      imageAlt: "Mainland company setup planning in Dubai",
      imageClassName: "object-[68%_24%]",
    },
    {
      title: "Free zone setup",
      href: "/free-zones",
      description: "For package-driven setup, foreign ownership, and zone-specific fit.",
      imageSrc: versionedAssetPath("/freezone.webp"),
      imageAlt: "Free zone company setup planning in Dubai",
      imageClassName: "object-[70%_24%]",
    },
    {
      title: "Offshore setup",
      href: "/offshore",
      description: "For holding, asset, or international structures that do not need a UAE operating office.",
      imageSrc: versionedAssetPath("/offshore.webp"),
      imageAlt: "Offshore company structure planning",
      imageClassName: "object-[72%_22%]",
    },
    {
      title: "Document attestation",
      href: "/document-attestation-services-in-uae",
      description: "Prepare commercial, education, and personal documents for UAE use.",
      imageSrc: versionedAssetPath("/document-attestation.webp"),
      imageAlt: "Document attestation support in the UAE",
      imageClassName: "object-[86%_36%]",
    },
  ],
  "Accounting and Tax": [
    {
      title: "Accounting and tax",
      href: "/accounting-tax",
      description: "Support across bookkeeping, VAT, registration, and annual tax filing.",
      imageSrc: versionedAssetPath("/accounting-and-tax.webp"),
      imageAlt: "Accounting and tax advisory support in Dubai",
      imageClassName: "object-[72%_center]",
    },
    {
      title: "Corporate tax registration",
      href: "/corporate-tax-registration-in-the-uae",
      description: "Get the registration position and EmaraTax process handled properly.",
      imageSrc: versionedAssetPath("/corporate-tax-registration.webp"),
      imageAlt: "Corporate tax registration support in the UAE",
      imageClassName: "object-[84%_30%]",
    },
    {
      title: "Corporate tax filing",
      href: "/corporate-tax-filing-services-in-the-uae",
      description: "Prepare annual returns with stronger calculations and supporting records.",
      imageSrc: versionedAssetPath("/corporate-tax-filing.webp"),
      imageAlt: "Corporate tax filing support in the UAE",
      imageClassName: "object-[84%_30%]",
    },
    {
      title: "VAT filing",
      href: "/vat-filing-services-in-the-uae",
      description: "Keep VAT returns accurate, timely, and supported by stronger reconciliations.",
      imageSrc: versionedAssetPath("/vat-filing.webp"),
      imageAlt: "VAT filing support in the UAE",
      imageClassName: "object-[84%_32%]",
    },
    {
      title: "Bookkeeping",
      href: "/professional-bookkeeping-services-in-dubai",
      description: "Keep books, reconciliations, and reporting in shape throughout the year.",
      imageSrc: versionedAssetPath("/bookkeeping.webp"),
      imageAlt: "Bookkeeping and reporting support in Dubai",
      imageClassName: "object-[84%_30%]",
    },
  ],
  "Visa and Banking": [
    {
      title: "Visa and banking",
      href: "/visa-and-banking",
      description: "Plan residency, visas, and banking in the right operating sequence.",
      imageSrc: versionedAssetPath("/backgrounds/visa-and-banking-bg.webp"),
      imageAlt: "Visa and banking support planning in the UAE",
      imageClassName: "object-[76%_center]",
    },
    {
      title: "Golden Visa",
      href: "/golden-visa-services-in-the-uae",
      description: "Review long-term residency routes and the right evidence path.",
      imageSrc: versionedAssetPath("/golden-visa.webp"),
      imageAlt: "Dubai Golden Visa eligibility planning",
      imageClassName: "object-[28%_82%]",
    },
    {
      title: "Bank account support",
      href: "/open-a-bank-account-easily",
      description: "Prepare KYC and account-opening support around the real company structure.",
      imageSrc: versionedAssetPath("/banking-support.webp"),
      imageAlt: "UAE business bank account support planning",
      imageClassName: "object-[82%_30%]",
    },
  ],
};

export const serviceLinkIndex: Record<string, InternalLinkCard> = Object.values(
  serviceLinksByCategory,
)
  .flat()
  .reduce<Record<string, InternalLinkCard>>((accumulator, item) => {
    accumulator[item.href] = item;
    return accumulator;
  }, {});

export const defaultInsightSlugsByCategory: Record<string, string[]> = {
  "Business Setup": [
    "why-first-time-entrepreneurs-are-choosing-uae",
    "business-consultant-beyond-company-registration",
    "top-5-mistakes-starting-business-dubai",
  ],
  "Accounting and Tax": [
    "uae-corporate-tax-filing-deadlines-2026",
    "uae-corporate-tax-record-keeping-requirements",
    "corporate-tax-mistakes-trigger-audits-uae",
  ],
  "Visa and Banking": [
    "complete-dubai-golden-visa-guide",
    "uae-visa-reforms-2025-entrepreneurs-expats",
  ],
};

export function pickInsightLinks(
  posts: readonly InsightPost[],
  category: string,
  preferredSlugs?: readonly string[],
) {
  const selectedSlugs = preferredSlugs?.length
    ? preferredSlugs
    : defaultInsightSlugsByCategory[category] ?? [];

  return selectedSlugs
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter((post): post is InsightPost => Boolean(post));
}

export function pickServiceLinks(category: string, hrefs?: readonly string[]) {
  if (hrefs?.length) {
    return hrefs
      .map((href) => serviceLinkIndex[href])
      .filter((item): item is InternalLinkCard => Boolean(item));
  }

  return serviceLinksByCategory[category] ?? [];
}
