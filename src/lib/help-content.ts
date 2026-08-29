export type HelpTopic = {
  id: string;
  title: string;
  shortLabel: string;
  answer: string;
  href: string;
  hrefLabel: string;
  keywords: string[];
};

export type HelpTopicMatch = HelpTopic & {
  score: number;
};

export const helpTopics: HelpTopic[] = [
  {
    id: "business-setup",
    title: "How do I start a business in the UAE?",
    shortLabel: "Start a business",
    answer:
      "Most founders start by choosing the operating model first, then the jurisdiction, license scope, visa plan, and banking path that follows. The main choice is usually mainland, free zone, or offshore depending on where the business will operate.",
    href: "/business-setup",
    hrefLabel: "View business setup",
    keywords: [
      "start business",
      "business setup",
      "company formation",
      "setup company",
      "launch company",
      "incorporation",
      "register company",
      "dubai business",
      "uae business",
    ],
  },
  {
    id: "mainland-vs-free-zone",
    title: "Should I choose mainland or free zone?",
    shortLabel: "Mainland vs free zone",
    answer:
      "Mainland usually fits businesses that need direct UAE market access and broader local operating flexibility. Free zone is often better for founder-led setups that want a simpler package, 100% foreign ownership, and a route aligned to services, trade, or international activity.",
    href: "/free-zones",
    hrefLabel: "Compare setup routes",
    keywords: [
      "mainland",
      "free zone",
      "freezone",
      "difference",
      "compare",
      "which route",
      "best option",
      "onshore",
    ],
  },
  {
    id: "offshore",
    title: "When is offshore setup used?",
    shortLabel: "Offshore setup",
    answer:
      "Offshore is typically used for holding structures, asset ownership, and international arrangements rather than day-to-day local UAE operating activity. It is usually the wrong route if the business needs local trading, office presence, or staff visas.",
    href: "/offshore",
    hrefLabel: "View offshore setup",
    keywords: [
      "offshore",
      "holding company",
      "asset ownership",
      "rak icc",
      "jafza",
      "ajman offshore",
      "international structure",
    ],
  },
  {
    id: "corporate-tax",
    title: "What help do you provide with corporate tax?",
    shortLabel: "Corporate tax",
    answer:
      "Zenesis supports corporate tax registration, return preparation, tax calculations, record review, and filing deadlines. The work connects the EmaraTax registration position with the accounting records used for each return.",
    href: "/accounting-tax",
    hrefLabel: "View accounting and tax",
    keywords: [
      "corporate tax",
      "tax filing",
      "tax registration",
      "fta",
      "compliance",
      "tax return",
      "emaratax",
    ],
  },
  {
    id: "vat-bookkeeping",
    title: "Do you help with VAT and bookkeeping too?",
    shortLabel: "VAT and bookkeeping",
    answer:
      "Yes. Zenesis provides bookkeeping, VAT return preparation, reconciliations, reporting, and record support for VAT and corporate tax compliance.",
    href: "/professional-bookkeeping-services-in-dubai",
    hrefLabel: "View bookkeeping support",
    keywords: [
      "vat",
      "bookkeeping",
      "accounting",
      "returns",
      "financial records",
      "reporting",
      "audit ready",
    ],
  },
  {
    id: "golden-visa",
    title: "Can Zenesis help with the Golden Visa?",
    shortLabel: "Golden Visa",
    answer:
      "Yes. Zenesis helps assess eligibility, prepare the document set, manage the submission sequence, and support the process after approval. It is usually best handled alongside the wider residency or business timeline rather than in isolation.",
    href: "/golden-visa-services-in-the-uae",
    hrefLabel: "View Golden Visa support",
    keywords: [
      "golden visa",
      "residency",
      "long term visa",
      "investor visa",
      "eligibility",
    ],
  },
  {
    id: "company-visa",
    title: "What about company visas for employees or founders?",
    shortLabel: "Company visa",
    answer:
      "Zenesis supports company visa applications after reviewing the company structure, establishment file, labour approvals, and quota position. The application timing depends on which formation and immigration steps have already been approved.",
    href: "/uae-company-visa",
    hrefLabel: "View company visa support",
    keywords: [
      "company visa",
      "employee visa",
      "partner visa",
      "founder visa",
      "residence visa",
      "establishment card",
    ],
  },
  {
    id: "banking",
    title: "Can you help open a business bank account?",
    shortLabel: "Business banking",
    answer:
      "Yes. Zenesis prepares the company profile, shareholder KYC, source-of-funds evidence, expected transaction information, and supporting company documents for bank review. The bank makes the final account-opening decision.",
    href: "/open-a-bank-account-easily",
    hrefLabel: "View banking support",
    keywords: [
      "bank account",
      "banking",
      "kyc",
      "compliance file",
      "business banking",
      "open bank account",
    ],
  },
  {
    id: "document-attestation",
    title: "Do you help with document attestation?",
    shortLabel: "Document attestation",
    answer:
      "Yes. Zenesis helps review which documents need attestation, how the home-country stages work, and what needs to happen before final MOFA handling in the UAE. It is useful when documents are needed for visas, education, or business use.",
    href: "/document-attestation-services-in-uae",
    hrefLabel: "View attestation support",
    keywords: [
      "attestation",
      "document attestation",
      "mofa",
      "embassy",
      "legalization",
      "certificate",
    ],
  },
];

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value: string) {
  return normalize(value).split(" ").filter(Boolean);
}

export function matchHelpTopics(query: string, limit = 4): HelpTopicMatch[] {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return [];
  }

  const queryTokens = Array.from(new Set(tokenize(normalizedQuery)));

  return helpTopics
    .map((topic) => {
      const haystack = normalize(
        [topic.title, topic.answer, topic.shortLabel, ...topic.keywords].join(" "),
      );

      let score = 0;

      for (const token of queryTokens) {
        if (haystack.includes(token)) {
          score += token.length > 4 ? 3 : 2;
        }

        if (normalize(topic.shortLabel).includes(token)) {
          score += 4;
        }

        if (topic.keywords.some((keyword) => normalize(keyword).includes(token))) {
          score += 5;
        }
      }

      if (haystack.includes(normalizedQuery)) {
        score += 8;
      }

      return {
        ...topic,
        score,
      };
    })
    .filter((topic) => topic.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
