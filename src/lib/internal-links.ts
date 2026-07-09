import type { InsightPost } from "@/lib/insights";

export type InternalLinkCard = {
  title: string;
  href: string;
  description: string;
};

export const serviceLinksByCategory: Record<string, InternalLinkCard[]> = {
  "Business Setup": [
    {
      title: "Business setup",
      href: "/business-setup",
      description: "Compare mainland, free zone, and offshore routes before formation starts.",
    },
    {
      title: "Business setup pricing",
      href: "/business-setup-cost-dubai",
      description: "Compare starting prices for freelance, free zone, and mainland setup routes.",
    },
    {
      title: "Mainland vs free zone",
      href: "/mainland-vs-free-zone-dubai",
      description: "Compare market access, visas, banking, office needs, and setup cost tradeoffs.",
    },
    {
      title: "Low-cost setup routes",
      href: "/low-cost-business-setup-uae",
      description: "Compare the cheapest viable routes without choosing the wrong structure.",
    },
    {
      title: "Mainland setup",
      href: "/mainland",
      description: "For broader UAE market access and direct local operating flexibility.",
    },
    {
      title: "Free zone setup",
      href: "/free-zones",
      description: "For package-driven setup, foreign ownership, and zone-specific fit.",
    },
  ],
  "Accounting and Tax": [
    {
      title: "Accounting and tax",
      href: "/accounting-tax",
      description: "Support across bookkeeping, VAT, registration, and annual tax filing.",
    },
    {
      title: "Corporate tax registration",
      href: "/corporate-tax-registration-in-the-uae",
      description: "Get the registration position and EmaraTax process handled properly.",
    },
    {
      title: "Corporate tax filing",
      href: "/corporate-tax-filing-services-in-the-uae",
      description: "Prepare annual returns with stronger calculations and supporting records.",
    },
  ],
  "Visa and Banking": [
    {
      title: "Visa and banking",
      href: "/visa-and-banking",
      description: "Plan residency, visas, and banking in the right operating sequence.",
    },
    {
      title: "Golden Visa",
      href: "/golden-visa-services-in-the-uae",
      description: "Review long-term residency routes and the right evidence path.",
    },
    {
      title: "Bank account support",
      href: "/open-a-bank-account-easily",
      description: "Prepare KYC and account-opening support around the real company structure.",
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
    "corporate-tax-mistakes-trigger-audits-uae",
    "complete-guide-to-corporate-tax-groups-uae",
    "financial-year-2026-uae-compliance-guide",
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
