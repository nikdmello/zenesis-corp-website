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
    keywords: [
      "business setup",
      "company formation",
      "mainland",
      "free zone",
      "offshore",
    ],
    searchText:
      "business setup company formation mainland free zone offshore document attestation uae dubai",
  },
  {
    href: "/business-setup-cost-dubai",
    title: "Pricing",
    description:
      "Zenesis business setup consultancy prices in Dubai, including freelance permits from AED 4,000, free zone setup from AED 7,000, free zone with visa from AED 15,000, and mainland setup from AED 10,000.",
    type: "Page",
    section: "Main navigation",
    keywords: [
      "business setup cost dubai",
      "company formation cost dubai",
      "dubai business setup prices",
      "free zone setup cost",
      "mainland setup cost",
      "freelance permit cost",
    ],
    searchText:
      "business setup cost in dubai company formation cost dubai business setup consultancy prices zenesis AED 4000 freelance permit AED 7000 free zone setup without visa AED 15000 free zone setup with visa AED 10000 mainland company setup pricing comparison",
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

function getTokenVariants(token: string) {
  const normalizedToken = normalizeText(token);
  const variants = new Set<string>();

  if (!normalizedToken) {
    return [];
  }

  variants.add(normalizedToken);

  if (normalizedToken.endsWith("ies") && normalizedToken.length > 3) {
    variants.add(`${normalizedToken.slice(0, -3)}y`);
  }

  if (normalizedToken.endsWith("es") && normalizedToken.length > 3) {
    variants.add(normalizedToken.slice(0, -2));
  }

  if (normalizedToken.endsWith("s") && normalizedToken.length > 2) {
    variants.add(normalizedToken.slice(0, -1));
  }

  if (!normalizedToken.endsWith("s")) {
    variants.add(`${normalizedToken}s`);
  }

  return Array.from(variants).filter(Boolean);
}

function includesSearchToken(value: string, token: string) {
  const normalizedValue = normalizeText(value);

  if (!normalizedValue) {
    return false;
  }

  return getTokenVariants(token).some((variant) => normalizedValue.includes(variant));
}

export function tokenizeSearchQuery(value: string) {
  return Array.from(new Set(tokenize(value)));
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function getHighlightParts(text: string, query: string): HighlightPart[] {
  const tokens = Array.from(
    new Set(tokenizeSearchQuery(query).flatMap((token) => getTokenVariants(token))),
  )
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
    .flatMap((token) => getTokenVariants(token))
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
      let primaryFieldMatches = 0;
      let bodyFieldMatches = 0;

      const queryVariants = Array.from(
        new Set([normalizedQuery, ...queryTokens.flatMap((token) => getTokenVariants(token))]),
      );

      if (queryVariants.includes(title)) {
        score += 140;
      } else if (queryVariants.some((variant) => title.startsWith(variant))) {
        score += 95;
      } else if (queryVariants.some((variant) => title.includes(variant))) {
        score += 70;
      }

      if (queryVariants.some((variant) => description.includes(variant))) {
        score += 24;
      }

      let matchedTokens = 0;

      for (const token of queryTokens) {
        let tokenMatched = false;
        let matchedPrimary = false;
        let matchedBody = false;

        if (includesSearchToken(title, token)) {
          score += 36;
          tokenMatched = true;
          matchedPrimary = true;
        }
        if (includesSearchToken(section, token)) {
          score += 18;
          tokenMatched = true;
          matchedPrimary = true;
        }
        if (includesSearchToken(keywordText, token)) {
          score += 22;
          tokenMatched = true;
          matchedPrimary = true;
        }
        if (includesSearchToken(description, token)) {
          score += 9;
          tokenMatched = true;
          matchedBody = true;
        }
        if (includesSearchToken(haystack, token)) {
          score += 2;
          tokenMatched = true;
          matchedBody = true;
        }

        if (tokenMatched) {
          matchedTokens += 1;
        }
        if (matchedPrimary) {
          primaryFieldMatches += 1;
        }
        if (matchedBody) {
          bodyFieldMatches += 1;
        }
      }

      if (matchedTokens === queryTokens.length) {
        score += 14;
      } else if (matchedTokens === 0) {
        score = 0;
      }

      if (primaryFieldMatches > 0) {
        score += 18 + primaryFieldMatches * 8;
      } else if (bodyFieldMatches > 0) {
        score -= 18;
      }

      if (primaryFieldMatches === 0 && bodyFieldMatches > 0 && queryTokens.length <= 2) {
        score -= 12;
      }

      if (document.type === "Service" && primaryFieldMatches > 0) {
        score += 10;
      }

      if (document.type === "Page" && primaryFieldMatches > 0) {
        score += 6;
      }

      if (document.type === "Insight" && primaryFieldMatches > 0) {
        score += 8;
      }

      if (document.type === "Insight" && primaryFieldMatches === 0 && bodyFieldMatches > 0) {
        score -= 8;
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
