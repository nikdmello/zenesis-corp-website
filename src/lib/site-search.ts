import { featuredProfile } from "@/lib/site-content";
import { insightPosts } from "@/lib/insights";
import { serviceDetailPages } from "@/lib/service-pages";

export type SearchDocumentType = "Page" | "Service" | "Insight" | "Profile";

export type SearchDocument = {
  href: string;
  title: string;
  description: string;
  type: SearchDocumentType;
  section?: string;
  keywords?: string[];
  searchText: string;
};

export type SearchResult = SearchDocument & {
  score: number;
};

export type HighlightPart = {
  text: string;
  match: boolean;
};

const topLevelPages: SearchDocument[] = [
  {
    href: "/",
    title: "Home",
    description:
      "Overview of Zenesis services across business setup, accounting and tax, visa and banking, and ongoing UAE corporate support.",
    type: "Page",
    section: "Main navigation",
    keywords: ["zenesis", "dubai", "uae", "services", "home"],
    searchText:
      "home zenesis dubai uae services business setup accounting tax visa banking corporate support",
  },
  {
    href: "/about",
    title: "About",
    description:
      "Firm background, leadership team, and how Zenesis works with founders and businesses operating in the UAE.",
    type: "Page",
    section: "Main navigation",
    keywords: ["about", "team", "leadership", "cecilia", "jeevean", "history"],
    searchText:
      "about zenesis leadership founder cecilia team how we work dubai uae",
  },
  {
    href: "/business-setup",
    title: "Business setup",
    description:
      "Mainland, free zone, offshore, and related company formation support in the UAE.",
    type: "Page",
    section: "Services",
    keywords: ["business setup", "company formation", "mainland", "free zone", "offshore"],
    searchText:
      "business setup company formation mainland free zone offshore document attestation uae dubai",
  },
  {
    href: "/accounting-tax",
    title: "Accounting and tax",
    description:
      "Corporate tax, VAT, bookkeeping, reporting, and compliance support for UAE businesses.",
    type: "Page",
    section: "Services",
    keywords: ["accounting", "tax", "vat", "bookkeeping", "corporate tax"],
    searchText:
      "accounting tax corporate tax vat bookkeeping reporting compliance uae dubai",
  },
  {
    href: "/visa-and-banking",
    title: "Visa and banking",
    description:
      "Golden Visa, company visa, and business bank-account support aligned to the company setup timeline.",
    type: "Page",
    section: "Services",
    keywords: ["visa", "banking", "golden visa", "company visa", "bank account"],
    searchText:
      "visa banking golden visa company visa bank account support residency kyc uae dubai",
  },
  {
    href: "/insights",
    title: "Insights",
    description:
      "Article archive across accounting and tax, business setup, and visa and banking in the UAE.",
    type: "Page",
    section: "Main navigation",
    keywords: ["insights", "articles", "blog", "guides"],
    searchText:
      "insights articles blog guides accounting tax business setup visa banking uae dubai",
  },
  {
    href: "/contact",
    title: "Contact",
    description:
      "Contact details, office location in Jumeirah Lake Towers, and enquiry options for Zenesis.",
    type: "Page",
    section: "Main navigation",
    keywords: ["contact", "office", "jlt", "tiffany tower", "email", "phone"],
    searchText:
      "contact office jlt tiffany tower dubai zenesis email phone whatsapp map",
  },
];

const serviceDocuments: SearchDocument[] = Object.values(serviceDetailPages).map((service) => {
  const searchFields = [
    service.title,
    service.description,
    ...service.introParagraphs,
    ...service.points,
    ...(service.knowledgeSections?.flatMap((section) => [
      section.title,
      section.intro ?? "",
      ...section.items,
    ]) ?? []),
    ...(service.subpageLinks?.flatMap((item) => [item.label, item.description ?? ""]) ?? []),
  ]
    .filter(Boolean)
    .join(" ");

  return {
    href: `/${service.slug}`,
    title: service.title,
    description: service.description,
    type: "Service",
    section: service.backLabel.replace(/^Back to /, ""),
    keywords: [service.eyebrow, service.pointsTitle, service.supportTitle ?? ""].filter(Boolean),
    searchText: searchFields,
  };
});

const insightDocuments: SearchDocument[] = insightPosts.map((post) => ({
  href: `/insights/${post.slug}`,
  title: post.title,
  description: post.description,
  type: "Insight",
  section: post.category,
  keywords: [post.author, post.category, ...post.sections.map((section) => section.title)],
  searchText: [
    post.title,
    post.description,
    post.author,
    post.category,
    ...post.sections.flatMap((section) => [
      section.title,
      ...(section.paragraphs ?? []),
      ...(section.bullets ?? []),
      ...(section.table?.rows.flat() ?? []),
    ]),
    ...(post.closingParagraphs ?? []),
    post.closingCta ?? "",
  ]
    .filter(Boolean)
    .join(" "),
}));

const profileDocument: SearchDocument = {
  href: featuredProfile.href,
  title: featuredProfile.title,
  description: featuredProfile.summary,
  type: "Profile",
  section: featuredProfile.publication,
  keywords: [featuredProfile.publication, "Cecilia D'Cunha", "leadership", "founder"],
  searchText: [
    featuredProfile.title,
    featuredProfile.summary,
    featuredProfile.publication,
    "Cecilia D'Cunha founder leadership profile Global Leaders Today",
  ].join(" "),
};

export const searchDocuments: SearchDocument[] = [
  ...topLevelPages,
  ...serviceDocuments,
  ...insightDocuments,
  profileDocument,
];

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value: string) {
  return normalizeText(value)
    .split(" ")
    .map((token) => token.trim())
    .filter(Boolean);
}

export function tokenizeSearchQuery(value: string) {
  return Array.from(new Set(tokenize(value)));
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function getHighlightParts(text: string, query: string): HighlightPart[] {
  const tokens = tokenizeSearchQuery(query)
    .filter((token) => token.length >= 2)
    .sort((a, b) => b.length - a.length);

  if (!text || tokens.length === 0) {
    return [{ text, match: false }];
  }

  const pattern = new RegExp(`(${tokens.map(escapeRegExp).join("|")})`, "ig");
  const segments = text.split(pattern);

  return segments
    .filter((segment) => segment.length > 0)
    .map((segment) => ({
      text: segment,
      match: tokens.some((token) => segment.toLowerCase() === token.toLowerCase()),
    }));
}

export function getSearchExcerpt(text: string, query: string, maxLength = 160) {
  const normalizedText = text.replace(/\s+/g, " ").trim();

  if (!normalizedText) {
    return "";
  }

  const tokens = tokenizeSearchQuery(query).filter((token) => token.length >= 2);

  if (tokens.length === 0) {
    return normalizedText.length > maxLength
      ? `${normalizedText.slice(0, maxLength).trimEnd()}...`
      : normalizedText;
  }

  const lowerText = normalizedText.toLowerCase();
  const matchIndexes = tokens
    .map((token) => lowerText.indexOf(token))
    .filter((index) => index >= 0)
    .sort((a, b) => a - b);

  if (matchIndexes.length === 0) {
    return normalizedText.length > maxLength
      ? `${normalizedText.slice(0, maxLength).trimEnd()}...`
      : normalizedText;
  }

  const start = Math.max(0, matchIndexes[0] - 48);
  const end = Math.min(normalizedText.length, start + maxLength);
  const excerpt = normalizedText.slice(start, end).trim();

  return `${start > 0 ? "... " : ""}${excerpt}${end < normalizedText.length ? " ..." : ""}`;
}

export function searchSite(query: string, limit = 24): SearchResult[] {
  const normalizedQuery = normalizeText(query);
  const queryTokens = tokenizeSearchQuery(query);

  if (!normalizedQuery || queryTokens.length === 0) {
    return [];
  }

  const scoredResults = searchDocuments
    .map((document) => {
      const title = normalizeText(document.title);
      const description = normalizeText(document.description);
      const section = normalizeText(document.section ?? "");
      const keywordText = normalizeText(document.keywords?.join(" ") ?? "");
      const haystack = normalizeText(document.searchText);

      let score = 0;

      if (title === normalizedQuery) {
        score += 140;
      } else if (title.startsWith(normalizedQuery)) {
        score += 95;
      } else if (title.includes(normalizedQuery)) {
        score += 70;
      }

      if (description.includes(normalizedQuery)) {
        score += 24;
      }

      let matchedTokens = 0;

      for (const token of queryTokens) {
        let tokenMatched = false;

        if (title.includes(token)) {
          score += 24;
          tokenMatched = true;
        }
        if (section.includes(token)) {
          score += 12;
          tokenMatched = true;
        }
        if (keywordText.includes(token)) {
          score += 12;
          tokenMatched = true;
        }
        if (description.includes(token)) {
          score += 10;
          tokenMatched = true;
        }
        if (haystack.includes(token)) {
          score += 5;
          tokenMatched = true;
        }

        if (tokenMatched) {
          matchedTokens += 1;
        }
      }

      if (matchedTokens === queryTokens.length) {
        score += 18;
      } else if (matchedTokens === 0) {
        score = 0;
      }

      return { ...document, score };
    })
    .filter((document) => document.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return a.title.localeCompare(b.title);
    });

  const uniqueResults = new Map<string, SearchResult>();

  for (const result of scoredResults) {
    const existing = uniqueResults.get(result.href);

    if (!existing || result.score > existing.score) {
      uniqueResults.set(result.href, result);
    }
  }

  return Array.from(uniqueResults.values()).slice(0, limit);
}

export function getSearchSuggestions(limit = 8) {
  return [
    ...topLevelPages.filter((page) => page.href !== "/"),
    ...serviceDocuments.filter((document) =>
      [
        "/mainland",
        "/free-zones",
        "/offshore",
        "/golden-visa-services-in-the-uae",
        "/corporate-tax-registration-in-the-uae",
      ].includes(document.href),
    ),
    insightDocuments[0],
    insightDocuments[1],
  ].slice(0, limit);
}
