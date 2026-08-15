import type { Metadata } from "next";
import type { ServiceSubpageLinkItem } from "@/components/service-subpage-links";
import { versionedAssetPath } from "@/lib/asset-paths";
import { legacyRouteMeta, legacyServiceMeta, toMetadata } from "@/lib/legacy-meta";

type ServiceKnowledgeSection = {
  title: string;
  intro?: string;
  items: string[];
};

type ServiceDirectAnswer = {
  question: string;
  answer: string;
};

export type ServiceDetailConfig = {
  slug: string;
  currentPath: "/business-setup" | "/accounting-tax" | "/visa-and-banking" | "/corporate-support";
  title: string;
  eyebrow: string;
  description: string;
  backgroundImageSrc: string;
  backgroundImageAlt: string;
  introBackgroundImageSrc?: string;
  introBackgroundImageAlt?: string;
  introBackgroundImageMode?: "full" | "ambient";
  introBackgroundImagePosition?: string;
  introAmbientImageClassName?: string;
  introContentClassName?: string;
  overviewImageSrc?: string;
  overviewImageAlt?: string;
  overviewImagePosition?: string;
  introTitle: string;
  introParagraphs: string[];
  subpageLinks?: ServiceSubpageLinkItem[];
  directAnswers?: ServiceDirectAnswer[];
  relatedInsightSlugs?: string[];
  knowledgeSections?: ServiceKnowledgeSection[];
  pointsTitle: string;
  points: string[];
  supportTitle?: string;
  supportParagraphs?: string[];
  separateSupportSection?: boolean;
  hideBreadcrumb?: boolean;
  topLevelService?: boolean;
  backHref: "/business-setup" | "/accounting-tax" | "/visa-and-banking" | "/corporate-support";
  backLabel: string;
  metadata: Metadata;
};

export const serviceDetailPages: Record<string, ServiceDetailConfig> = {
  mainland: {
    slug: "mainland",
    currentPath: "/business-setup",
    title: "Mainland setup",
    eyebrow: "Mainland",
    description:
      "Support for businesses that want UAE market access, local operating flexibility, and the right mainland structure from the start.",
    backgroundImageSrc: versionedAssetPath("/services/mainland.webp"),
    backgroundImageAlt: "Professionals reviewing mainland setup options in Dubai",
    introBackgroundImageSrc: versionedAssetPath("/services/mainland.webp"),
    introBackgroundImageAlt: "Professionals reviewing mainland setup options in Dubai",
    introBackgroundImageMode: "ambient",
    introBackgroundImagePosition: "!object-[68%_24%]",
    introAmbientImageClassName: "!w-[78%] md:!w-[64%] lg:!w-[66%] xl:!w-[68%]",
    overviewImageSrc: versionedAssetPath("/services/mainland.webp"),
    overviewImageAlt: "Professionals reviewing mainland setup options in Dubai",
    overviewImagePosition: "object-[68%_24%]",
    introTitle: "Overview",
    introParagraphs: [
      "Mainland setup is the right route when your business needs to trade directly in the UAE, sign local contracts, hire staff, and operate with broader flexibility across the country.",
      "The most common mainland structures are LLCs, branch offices, representative offices, civil companies, sole proprietorships, and other forms used for more specific ownership or regulatory needs.",
      "Zenesis helps you choose the right mainland structure, align the business activity correctly, and handle the licensing steps so the company is built around how you actually plan to operate.",
    ],
    subpageLinks: [
      {
        label: "Mainland vs free zone",
        href: "/mainland-vs-free-zone-dubai",
        description: "Compare market access, visas, office needs, banking, and cost before choosing a route.",
      },
      {
        label: "Business setup cost",
        href: "/business-setup-cost-dubai",
        description: "Check starting prices and the cost drivers behind mainland and free zone setup.",
      },
      {
        label: "Business setup",
        href: "/business-setup",
        description: "See how licensing, visas, banking, tax, and renewals fit into the full setup path.",
      },
    ],
    knowledgeSections: [
      {
        title: "Common mainland structures",
        intro:
          "Mainland setup is not one legal form. The structure should match what the business actually needs to do, who owns it, and how it will operate after licensing.",
        items: [
          "LLCs are the most common route for broader operating activity, multiple shareholders, and day-to-day commercial work inside the UAE",
          "Branch offices are used when an existing foreign or UAE company wants a local operating presence under the parent structure",
          "Representative offices are usually limited to promotion, liaison, and administrative presence rather than full commercial activity",
          "Civil companies and sole establishments are often used for professional services, depending on the activity and ownership structure",
        ],
      },
      {
        title: "Why mainland is usually chosen",
        intro:
          "Mainland tends to suit businesses that want fewer restrictions on where they operate and who they can serve in the UAE.",
        items: [
          "Direct access to the UAE market and local client work",
          "Flexible office location choices across Dubai and the wider UAE",
          "Broader visa planning once the structure and office position are clear",
          "Potential suitability for government-linked or locally awarded work depending on the activity and setup",
        ],
      },
      {
        title: "Cost, visas, and banking",
        intro:
          "Mainland cost is shaped by the activity, legal form, office position, approvals, visa planning, and how clearly the company can explain its operating model to banks.",
        items: [
          "License and approval costs can change when the activity needs external authority clearance or a specific legal form",
          "Office or Ejari requirements should be planned before comparing mainland against a cheaper package route",
          "Visa capacity depends on the structure, immigration file, office position, and the founder or employee plan",
          "Banks usually look for a clear activity, shareholder profile, office position, source of funds, and expected transaction model",
        ],
      },
      {
        title: "Documents and common delays",
        intro:
          "The mainland route is smoother when the structure, documents, and post-approval steps are prepared before the application begins.",
        items: [
          "Typical inputs include passport copies, Emirates ID where applicable, shareholder details, trade name options, activity selection, and initial approval requirements",
          "Foreign company branches can need parent-company documents, board resolutions, POAs, and attestation steps",
          "Delays often come from unclear activity selection, missing approvals, office planning, or banking and visa steps being handled too late",
          "A low mainland quote is only useful if it includes the practical follow-through needed to start operating",
        ],
      },
    ],
    directAnswers: [
      {
        question: "When is mainland usually the better route?",
        answer:
          "Mainland is usually the better route when the business needs direct UAE market access, local client work, wider operating flexibility, or a structure that is not meant to stay inside one free zone ecosystem.",
      },
      {
        question: "Does mainland still mean mandatory UAE local ownership?",
        answer:
          "Not always. The current UAE position allows full foreign ownership across many commercial activities, while some strategic or specially regulated activities still follow separate rules. The exact activity matters more than the old one-rule-fits-all assumption.",
      },
      {
        question: "What usually has to be decided before the mainland application starts?",
        answer:
          "The business activity, legal form, trade name, office plan, and expected visa path should all be clear first. Those decisions affect the licence route, the authority steps, and what the company can realistically do after approval.",
      },
      {
        question: "Why do some mainland setups slow down after approval?",
        answer:
          "The delays usually come from the follow-through work: office formalities, establishment setup, banking expectations, visas, and later tax or compliance steps. A mainland licence on its own does not solve those operational steps unless they are planned early.",
      },
    ],
    relatedInsightSlugs: [
      "why-first-time-entrepreneurs-are-choosing-uae",
      "business-consultant-beyond-company-registration",
      "business-setup-mistakes-dubai",
    ],
    pointsTitle: "What we handle",
    points: [
      "Choose the right activity, legal structure, and trade name before the application starts",
      "Compare structures such as LLCs, branch offices, representative offices, civil companies, and sole establishments based on the business model",
      "Prepare the license application, supporting documents, and authority submissions properly",
      "Plan office requirements, establishment steps, visa capacity, and the practical setup sequence after approval",
      "Help you understand mainland advantages such as broader UAE market access, flexible office location choices, and eligibility for local operating activity",
      "Stay supported after formation with renewals, amendments, banking, and compliance follow-through",
    ],
    supportTitle: "Talk to Zenesis",
    supportParagraphs: [
      "Reach out if you expect local UAE clients, wider commercial activity, staff visas, or a business model that needs direct presence inside the UAE market.",
      "If you are weighing an LLC against a branch, representative office, or another mainland structure, Zenesis can help you narrow the route before you commit.",
    ],
    backHref: "/business-setup",
    backLabel: "Back to Business Setup",
    metadata: {
      ...toMetadata(legacyServiceMeta.mainland, "/mainland"),
    },
  },
  "free-zones": {
    slug: "free-zones",
    currentPath: "/business-setup",
    title: "Free zone company formation",
    eyebrow: "Free Zones",
    description:
      "Compare free zone company formation in Dubai and the UAE by activity, package fit, ownership model, visas, and operating needs.",
    backgroundImageSrc: versionedAssetPath("/services/freezone.webp"),
    backgroundImageAlt: "Business professionals discussing free zone setup options",
    introBackgroundImageSrc: versionedAssetPath("/services/freezone.webp"),
    introBackgroundImageAlt: "Business professionals discussing free zone setup options",
    introBackgroundImageMode: "ambient",
    introBackgroundImagePosition: "!object-[70%_24%]",
    introAmbientImageClassName: "!w-[78%] md:!w-[64%] lg:!w-[66%] xl:!w-[68%]",
    overviewImageSrc: versionedAssetPath("/services/freezone.webp"),
    overviewImageAlt: "Business professionals discussing free zone setup options",
    overviewImagePosition: "object-[70%_24%]",
    introTitle: "Overview",
    introParagraphs: [
      "Free zone company formation in Dubai is often the best fit for founders who want a faster formation route, clearer package options, and a structure that matches consulting, digital, trade, or investor-led business models.",
      "Many UAE free zones are chosen for 100 per cent foreign ownership, easier setup packaging, repatriation flexibility, and infrastructure designed around trade, services, logistics, media, or international business.",
      "Zenesis helps you compare the zones that actually fit your business instead of choosing based on price alone. The right zone also affects visas, office requirements, banking documents, and how practical the business will be after setup.",
    ],
    subpageLinks: [
      {
        label: "Mainland vs free zone",
        href: "/mainland-vs-free-zone-dubai",
        description: "Compare route tradeoffs before choosing a free zone package.",
      },
      {
        label: "Business setup cost",
        href: "/business-setup-cost-dubai",
        description: "Compare starting prices across freelance, free zone, and mainland routes.",
      },
      {
        label: "Business setup",
        href: "/business-setup",
        description: "Place free zone setup in the wider mainland, offshore, and Dubai formation picture.",
      },
    ],
    knowledgeSections: [
      {
        title: "What usually makes a free zone attractive",
        intro:
          "Free zones are not interchangeable, but they are often chosen for a similar set of ownership, formation, and operating advantages.",
        items: [
          "100% foreign ownership in the relevant free zone structure",
          "Simplified setup packages that can be easier to start with than mainland routes",
          "Repatriation flexibility for capital and profits",
          "Infrastructure geared around trade, logistics, services, media, or international business depending on the zone",
        ],
      },
      {
        title: "Zones businesses often compare",
        intro:
          "The right choice depends less on brand recognition and more on activity fit, visas, office rules, banking expectations, and long-term cost.",
        items: [
          "DMCC for a premium Dubai ecosystem and strong trade positioning",
          "Dubai South for logistics, aviation, and regional connectivity near Al Maktoum Airport",
          "IFZA for flexible Dubai licensing packages across common consulting, service, and trading activities",
          "Meydan Free Zone for Dubai based founder led and digital business packages",
          "RAKEZ for Ras Al Khaimah industrial, commercial, service, and cost conscious setup routes",
          "Shams for media, creative, consulting, and founder led businesses in Sharjah",
          "Ajman Free Zone for trading, service, industrial, and ecommerce routes in Ajman",
          "Sharjah Airport International Free Zone for trade, logistics, and industrial access near the airport",
          "Fujairah Free Zone for east coast trade, logistics, and port connected activity",
          "Umm Al Quwain Free Trade Zone for lean service, consultancy, and commercial setup packages",
        ],
      },
      {
        title: "Cost, visas, and banking",
        intro:
          "Free zone packages can look simple, but the real fit depends on what is included, what renews later, and whether the company can satisfy banking and visa expectations.",
        items: [
          "A low package may exclude visa allocation, establishment card, office upgrades, activity changes, or renewal charges",
          "Visa availability depends on the package, office type, immigration file, and the zone's current rules",
          "Banking can depend on the zone, activity wording, shareholder profile, source of funds, contracts, and expected trade flow",
          "The cheapest free zone is not always the best route when the business needs stronger reputation, office substance, or sector fit",
        ],
      },
      {
        title: "Documents and common mistakes",
        intro:
          "The strongest free zone choice is usually the one that still works after licensing, when the founder needs visas, banking, renewals, and client acceptance.",
        items: [
          "Typical inputs include passport copies, shareholder details, proposed activities, company names, address information, and KYC declarations",
          "Some activities need extra documents, qualifications, third-party approvals, or clearer business-model explanations",
          "Common mistakes include choosing by price only, picking the wrong activity scope, ignoring visa limits, and underestimating renewal cost",
          "Free zone setup should be checked against where clients are, whether mainland access is needed, and how the company will invoice and bank",
        ],
      },
      {
        title: "How Zenesis supports different jurisdictions",
        intro:
          "The delivery model depends on the authority involved, so Zenesis makes the distinction clear before an application begins.",
        items: [
          "Zenesis acts as an agent in Ajman and Ras Al Khaimah",
          "For Abu Dhabi and ADGM requirements, Zenesis can assess the need and coordinate a referral to an appropriately licensed consultant",
          "For Jebel Ali requirements, Zenesis can assess the need and coordinate a referral to an appropriately licensed consultant",
          "Partner supported assistance is not presented as direct Zenesis agency representation",
        ],
      },
    ],
    directAnswers: [
      {
        question: "When is a free zone usually the better route?",
        answer:
          "Free zone company formation is usually the better route when founders want a structured package, 100% foreign ownership in the relevant free zone vehicle, and a route that fits consulting, digital, trade, media, logistics, or international business models.",
      },
      {
        question: "What is included in free zone company formation in Dubai?",
        answer:
          "Free zone company formation usually includes zone comparison, activity and license selection, trade name steps, application documents, authority submissions, visa planning, and guidance on banking, office options, renewals, and follow-through after approval.",
      },
      {
        question: "Can one free zone fit every business equally well?",
        answer:
          "No. The right zone depends on the activity, licence scope, visa needs, office rules, banking expectations, and what the business needs to do after formation. A popular zone is not automatically the right zone for the operating model.",
      },
      {
        question: "Can a free zone company sell directly into the UAE mainland?",
        answer:
          "Not automatically. Free zone companies are generally built to operate within the free zone and internationally, and direct mainland selling can require an additional structure, permit, or local distribution arrangement depending on the activity and the emirate rules involved.",
      },
      {
        question: "What do founders usually miss when comparing free zones?",
        answer:
          "They often compare only setup price. The more important differences are licence fit, visa allocation, office requirements, renewal costs, banking practicality, and whether the zone still works once the business is actually operating.",
      },
    ],
    relatedInsightSlugs: [
      "uae-free-zone-corporate-tax-rules-clarified-2026",
      "why-first-time-entrepreneurs-are-choosing-uae",
      "business-setup-mistakes-dubai",
    ],
    pointsTitle: "What we handle",
    points: [
      "Compare free zone company formation options by activity, ownership needs, budget, and operational fit",
      "Review the practical differences between zones such as DMCC, Dubai South, IFZA, Meydan, Shams, RAKEZ, Fujairah, Ajman, Sharjah Airport, and Umm Al Quwain",
      "Review package differences around visas, offices, flexi-desks, and renewal costs",
      "Assess location and ecosystem fit for trade, logistics, aviation, e-commerce, media, consulting, and international holding activity",
      "Prepare the application, supporting documents, and follow-up required for approval",
      "Get help with the next steps after setup, including visas, banking documents, and renewals",
    ],
    supportTitle: "Talk to Zenesis",
    supportParagraphs: [
      "Reach out if you are comparing DMCC, IFZA, Meydan, Dubai South, RAKEZ, or other zones and want a free zone company formation recommendation based on how the business will function after approval.",
      "Zenesis can help you separate headline pricing from the real differences in visas, office requirements, licensing scope, banking expectations, and long-term operating fit.",
    ],
    backHref: "/business-setup",
    backLabel: "Back to Business Setup",
    metadata: {
      ...toMetadata(legacyServiceMeta["free-zones"], "/free-zones"),
    },
  },
  offshore: {
    slug: "offshore",
    currentPath: "/business-setup",
    title: "Offshore setup",
    eyebrow: "Offshore",
    description:
      "Compare UAE and international offshore structures for holding, ownership, and international arrangements that do not depend on day-to-day local UAE operations.",
    backgroundImageSrc: versionedAssetPath("/services/offshore.webp"),
    backgroundImageAlt: "Advisors discussing offshore structuring options",
    introBackgroundImageSrc: versionedAssetPath("/services/offshore.webp"),
    introBackgroundImageAlt: "Advisors discussing offshore structuring options",
    introBackgroundImageMode: "ambient",
    introBackgroundImagePosition: "!object-[68%_24%]",
    introAmbientImageClassName: "!w-[78%] md:!w-[64%] lg:!w-[66%] xl:!w-[68%]",
    overviewImageSrc: versionedAssetPath("/services/offshore.webp"),
    overviewImageAlt: "Advisors discussing offshore structuring options",
    overviewImagePosition: "object-[72%_22%]",
    introTitle: "Overview",
    introParagraphs: [
      "Offshore setup is usually used for holding companies, asset ownership, succession planning, and international arrangements that do not depend on day-to-day trading inside the UAE.",
      "This route is often used by owners who want a tax-efficient holding structure, privacy around beneficial ownership at the registry level, and a company that is not designed for local UAE operating activity.",
      "Zenesis helps you decide whether offshore is the right route at all, then guides the jurisdiction choice and setup process so the structure matches the ownership objective behind it. UAE offshore setup for Ajman, RAK, and Jebel Ali routes starts from AED 7,500 to AED 15,000, while international offshore setup for BVI, Nevis, Mauritius, Seychelles, and Hong Kong routes starts from AED 8,000 to AED 15,000.",
    ],
    subpageLinks: [
      {
        label: "Business setup",
        href: "/business-setup",
        description: "See how structure choice connects to documents, banking, tax, and renewals.",
      },
      {
        label: "Banking support",
        href: "/open-a-bank-account-easily",
        description: "Prepare the KYC and structure explanation needed for bank account review.",
      },
      {
        label: "Document attestation",
        href: "/document-attestation-services-in-uae",
        description: "Plan legalization for POAs, board resolutions, and company documents where needed.",
      },
    ],
    knowledgeSections: [
      {
        title: "Why offshore is used",
        intro:
          "Offshore structures are usually chosen for ownership and international planning rather than local UAE operating activity.",
        items: [
          "Holding investments, property, or shares under a dedicated structure",
          "International ownership arrangements, succession planning, or asset protection needs",
          "Commission income or consultancy income generated outside local UAE onshore operations where the structure fits",
          "Banking support where the use case, due diligence profile, and jurisdiction make that practical",
        ],
      },
      {
        title: "Common offshore routes",
        intro:
          "UAE offshore and international offshore options are not identical, and the right one depends on what the company is meant to hold or do.",
        items: [
          "Jebel Ali offshore is often chosen for stronger recognition and for structures that may need Dubai property ownership relevance",
          "RAK ICC is widely used for international business company registration and holding structures",
          "Ajman Offshore is often considered for a more cost-conscious offshore setup route",
          "BVI, Nevis, Mauritius, Seychelles, and Hong Kong are international offshore options where the ownership, holding, or cross-border use case calls for a non-UAE registry",
          "All offshore structures need to be checked against their limits on local trading, visas, and physical UAE operating activity",
        ],
      },
      {
        title: "Cost, banking, and documents",
        intro:
          "Offshore setup should be evaluated by use case, jurisdiction recognition, document needs, and banking practicality rather than headline incorporation cost alone.",
        items: [
          "UAE offshore company setup for Ajman, RAK, and Jebel Ali routes starts from AED 7,500 to AED 15,000",
          "International offshore company setup for BVI, Nevis, Mauritius, Seychelles, and Hong Kong routes starts from AED 8,000 to AED 15,000",
          "Cost can vary by jurisdiction, registered-agent requirements, document preparation, compliance work, and renewal position",
          "Banking is not automatic and usually depends on the ownership profile, source of funds, intended use, counterparties, and jurisdiction",
          "Common documents include passport copies, proof of address, shareholder details, structure charts, business rationale, POAs, and board resolutions where applicable",
          "Some documents may need notarization, attestation, or legalization before they can be used for incorporation, banking, or asset holding",
        ],
      },
      {
        title: "When offshore is not the right route",
        intro:
          "Offshore can be useful, but it should not be treated as a cheaper substitute for an operating UAE company.",
        items: [
          "It is not the normal route for local UAE trading, employee visas, retail operations, or office-based activity",
          "It may not fit founders who need local contracts, UAE market access, or visible operating substance",
          "It can create banking friction if the business model, funds flow, or ownership purpose is not clear",
          "A free zone or mainland company may be better when the business needs to invoice, hire, bank, and operate from the UAE",
        ],
      },
    ],
    directAnswers: [
      {
        question: "When is offshore usually the right route?",
        answer:
          "Offshore is usually the right route when the main goal is holding assets, shares, property-related structures, or international ownership planning rather than running day-to-day operating activity inside the UAE.",
      },
      {
        question: "Can an offshore company trade directly inside the UAE mainland?",
        answer:
          "No, not as a normal operating route. Offshore structures are generally not designed for day-to-day local UAE trading, staffing, or office-based operating activity, so they should be chosen for ownership and structuring reasons rather than local market access.",
      },
      {
        question: "What usually drives the choice between UAE offshore routes and BVI?",
        answer:
          "The choice depends on what the company is meant to hold, whether a UAE or international registry is more suitable, whether Dubai property relevance matters, how the structure will be presented to banks or counterparties, and the cost, administration, and recognition tradeoffs behind the setup. Zenesis UAE offshore setup for Ajman, RAK, and Jebel Ali routes starts from AED 7,500 to AED 15,000, while international offshore setup for BVI, Nevis, Mauritius, Seychelles, and Hong Kong routes starts from AED 8,000 to AED 15,000.",
      },
      {
        question: "What do people most often misunderstand about offshore structures?",
        answer:
          "The biggest misunderstanding is treating offshore like a cheaper version of an operating UAE company. Offshore can be useful, but only when the ownership objective actually fits its limits around local trading, visas, and physical operating presence.",
      },
    ],
    relatedInsightSlugs: [
      "business-consultant-beyond-company-registration",
      "why-first-time-entrepreneurs-are-choosing-uae",
      "business-setup-mistakes-dubai",
    ],
    pointsTitle: "What we handle",
    points: [
      "Compare offshore jurisdictions that suit holding, protection, or international ownership goals, including Ajman, RAK, Jebel Ali, BVI, Nevis, Mauritius, Seychelles, and Hong Kong",
      "Handle incorporation documents, registered-agent coordination, and compliance paperwork",
      "Explain where offshore is suitable for international trading, commission income, consultancy income, property holding, or global asset ownership",
      "Structure the company around shareholders, assets, and planned international use",
      "Support related banking steps where the structure and use case allow for it",
      "Help you understand the limits of offshore structures where local UAE trading, visas, or physical operating activity are concerned",
    ],
    supportTitle: "Talk to Zenesis",
    supportParagraphs: [
      "Reach out if your priority is asset holding, group structuring, family ownership planning, or international arrangements rather than local UAE operating activity.",
      "Zenesis can help compare UAE offshore routes such as Ajman, RAK, and Jebel Ali, plus international offshore routes such as BVI, Nevis, Mauritius, Seychelles, and Hong Kong, based on whether the main goal is ownership, protection, property, banking, or international commercial use.",
    ],
    backHref: "/business-setup",
    backLabel: "Back to Business Setup",
    metadata: {
      ...toMetadata(legacyServiceMeta.offshore, "/offshore"),
    },
  },
  "document-attestation-services-in-uae": {
    slug: "document-attestation-services-in-uae",
    currentPath: "/corporate-support",
    title: "Document attestation and legalization",
    eyebrow: "Attestation and Legalization",
    description:
      "Authenticate personal, educational, and corporate documents for UAE business setup, visas, family sponsorship, professional licensing, and government use.",
    backgroundImageSrc: versionedAssetPath("/services/document-attestation.webp"),
    backgroundImageAlt: "Professional document attestation support in the UAE",
    introBackgroundImageSrc: versionedAssetPath("/services/document-attestation.webp"),
    introBackgroundImageAlt: "Document attestation support background",
    introBackgroundImageMode: "ambient",
    introBackgroundImagePosition: "!object-[86%_36%]",
    overviewImageSrc: versionedAssetPath("/services/document-attestation.webp"),
    overviewImageAlt: "Professional document attestation support in the UAE",
    overviewImagePosition: "object-[86%_36%]",
    introTitle: "Overview",
    introParagraphs: [
      "If a document was issued outside the UAE, it often needs formal attestation before a UAE authority, employer, university, bank, or registry will accept it.",
      "The attestation requirement exists to confirm authenticity, reduce fraud risk, and ensure foreign documents can be used properly for work, study, immigration, legal, and business purposes in the UAE.",
      "Zenesis handles personal certificates and corporate documents through the required issuing-country, embassy or consulate, and UAE Ministry of Foreign Affairs steps, based on the document and its intended use.",
    ],
    knowledgeSections: [
      {
        title: "Why attestation matters",
        intro:
          "Without proper legalization, a foreign-issued document can be rejected even if the document itself is genuine.",
        items: [
          "UAE authorities may refuse documents that have not passed the required attestation stages",
          "Residency, employment, education, legal, and business applications can be delayed or rejected if attestation is incomplete",
          "The process exists to confirm authenticity and reduce fraud risk across personal, educational, and commercial records",
        ],
      },
      {
        title: "How the process usually moves",
        intro:
          "The sequence matters. Skipping a stage or starting in the wrong country can create rework and delay the final UAE submission.",
        items: [
          "Document review and pre-checks to confirm whether pre-legalization is required in the issuing country",
          "Home-country attestation through notary, public authority, or ministry channels where applicable",
          "UAE embassy or consulate attestation in the issuing country if required",
          "Final MOFA legalization in the UAE so the document can be used officially",
        ],
      },
    ],
    directAnswers: [
      {
        question: "How do you know whether a document needs attestation for UAE use?",
        answer:
          "It depends on what the document is for and where it was issued. Personal, educational, and commercial documents are often rejected by UAE authorities if the required legalization chain has not been completed, so the intended use should be checked before the process starts.",
      },
      {
        question: "Why do attestation cases usually get delayed?",
        answer:
          "The biggest delays usually come from starting in the wrong sequence, missing a home-country legalization step, or assuming every document follows the same path. The process becomes much smoother when the required chain is confirmed before the first submission is made.",
      },
      {
        question: "Is MOFA enough on its own?",
        answer:
          "Not always. MOFA is often the final UAE step, but many documents first need the correct home-country and embassy or consulate actions before MOFA will recognize the document properly. The full path depends on the issuing country and document type.",
      },
      {
        question: "Which documents most often need this process?",
        answer:
          "The most common cases include degrees, diplomas, transcripts, birth and marriage certificates, police clearance documents, powers of attorney, and company records such as incorporation papers or board resolutions. The exact path still depends on the document type and intended use.",
      },
    ],
    relatedInsightSlugs: [
      "business-consultant-beyond-company-registration",
      "uae-visa-reforms-2025-entrepreneurs-expats",
      "complete-dubai-golden-visa-guide",
    ],
    pointsTitle: "What we handle",
    points: [
      "Document review and eligibility checks before submission, including any home-country pre-legalization requirements",
      "Home-country attestation steps, public authority legalization, and embassy or consulate handling where required",
      "Final MOFA attestation in the UAE so the document can be used officially",
      "Personal records such as birth, marriage, divorce, police clearance, death, and transfer certificates",
      "Educational documents such as degrees, diplomas, transcripts, mark sheets, and training certificates",
      "Commercial documents such as incorporation papers, board resolutions, POAs, invoices, trade agreements, and MOA or AOA records",
    ],
    supportTitle: "Talk to Zenesis",
    supportParagraphs: [
      "Reach out before submitting documents to a UAE authority if you want clarity on the attestation path, expected steps, and whether home-country, embassy, or MOFA action is required.",
      "Zenesis can help you avoid rejected submissions by checking the legalization path first and handling the process in the right order.",
    ],
    backHref: "/corporate-support",
    backLabel: "Back to Corporate Support",
    metadata: {
      ...toMetadata(
        legacyServiceMeta["document-attestation-services-in-uae"],
        "/document-attestation-services-in-uae",
      ),
    },
  },
  "open-a-bank-account-easily": {
    slug: "open-a-bank-account-easily",
    currentPath: "/visa-and-banking",
    title: "UAE business bank account support",
    eyebrow: "Bank Accounts",
    description:
      "Support for UAE business bank account opening, international banking routes, KYC preparation, and practical coordination around the company structure.",
    backgroundImageSrc: versionedAssetPath("/services/banking-support.webp"),
    backgroundImageAlt: "UAE business banking support and KYC planning",
    introBackgroundImageSrc: versionedAssetPath("/services/banking-support.webp"),
    introBackgroundImageAlt: "UAE business banking support background",
    introBackgroundImageMode: "ambient",
    introBackgroundImagePosition: "!object-[82%_30%]",
    overviewImageSrc: versionedAssetPath("/services/banking-support.webp"),
    overviewImageAlt: "UAE business banking support and KYC planning",
    overviewImagePosition: "object-[82%_30%]",
    introTitle: "Overview",
    introParagraphs: [
      "Banking is often where founders lose time after incorporation. The structure may be ready, but the account opening process depends on how clearly the business model, shareholders, documents, and KYC profile are presented.",
      "Businesses may need UAE corporate banking, personal banking support linked to relocation, or international account opening where currency, trade flow, or holding structures make that necessary.",
      "Zenesis helps you prepare for the account opening process properly, so you approach the bank with cleaner documentation and a stronger explanation of the business.",
    ],
    knowledgeSections: [
      {
        title: "UAE and international banking serve different needs",
        intro:
          "The right banking setup depends on where the business operates, which currencies it uses, how shareholders are structured, and what banks will expect from the KYC profile.",
        items: [
          "UAE account opening is often tied closely to the trade license, business activity, shareholder profile, and source-of-funds clarity",
          "International accounts can make sense when the business needs wider currency access, cross-border collections, or financial-center coverage outside the UAE",
          "Corporate and personal accounts are usually assessed differently, even when the same founder is involved in both",
          "Multi-currency banking becomes more important when the business expects AED, USD, EUR, GBP, SGD, or other cross-border flows",
        ],
      },
      {
        title: "Where preparation usually matters most",
        intro:
          "Bank delays usually happen because the documentation is incomplete, the business explanation is weak, or the account request does not match the company structure.",
        items: [
          "A cleaner company profile and business explanation before submission",
          "KYC and compliance documentation prepared properly before the bank asks for revisions",
          "Better alignment between mainland, free zone, or offshore structure and the proposed banking route",
          "Clearer coordination with relationship managers once follow-up questions begin",
        ],
      },
    ],
    directAnswers: [
      {
        question: "Can Zenesis help with corporate USD and AED account setup?",
        answer:
          "Yes. Zenesis supports corporate USD and AED account applications by helping identify a suitable banking route, organize company and shareholder documents, and prepare the compliance, KYC, and source-of-funds information banks typically review. Final account approval remains at the bank's discretion.",
      },
      {
        question: "Why do some business bank applications take much longer than expected?",
        answer:
          "Banks usually slow down when the KYC pack is weak, the business explanation is vague, the shareholder profile is unclear, or the requested account does not match the company structure. The delay is often less about the form itself and more about how credible and complete the file looks to the bank.",
      },
      {
        question: "Does having the company licence guarantee account approval?",
        answer:
          "No. A licence is only one part of the banking review. Banks still assess business activity, shareholder profile, source of funds, expected transaction flow, geography, and the overall KYC risk position before deciding whether to proceed.",
      },
      {
        question: "When does international banking make sense instead of only UAE banking?",
        answer:
          "International banking can make sense when the business needs wider currency access, cross-border collections, non-UAE counterparties, or coverage tied to holding and international trade structures. The best route depends on how the company will actually receive, hold, and move funds.",
      },
      {
        question: "What should be prepared before approaching a bank?",
        answer:
          "At minimum, the company structure, trade licence, shareholder documents, business profile, source-of-funds explanation, and expected transaction story should be clear. Approaching a bank before those are properly aligned usually creates more rounds of follow-up and delay.",
      },
    ],
    relatedInsightSlugs: [
      "complete-dubai-golden-visa-guide",
      "uae-visa-reforms-2025-entrepreneurs-expats",
      "business-consultant-beyond-company-registration",
    ],
    pointsTitle: "What we handle",
    points: [
      "Support UAE bank account opening across corporate and related personal banking requirements where applicable",
      "Help with international banking routes where the business model, geography, or currency profile supports that need",
      "Prepare the company profile, shareholder documents, and KYC pack before submission",
      "Coordinate with bank relationship teams and help respond to document follow-up",
      "Align the banking approach with mainland, free zone, or offshore company structures",
      "Support multi-currency account planning where AED, USD, EUR, GBP, or other practical currency needs matter",
    ],
    supportTitle: "Talk to Zenesis",
    supportParagraphs: [
      "Reach out if you want the formation and banking process handled as one flow rather than dealing with bank requirements after the company is already formed.",
    ],
    backHref: "/visa-and-banking",
    backLabel: "Back to Visa and Banking",
    metadata: {
      ...toMetadata(
        legacyServiceMeta["open-a-bank-account-easily"],
        "/open-a-bank-account-easily",
      ),
    },
  },
  "uae-company-visa": {
    slug: "uae-company-visa",
    currentPath: "/visa-and-banking",
    title: "Company visa",
    eyebrow: "Company Visa",
    description:
      "Plan company visa support in line with business setup, labor approvals, medical steps, Emirates ID, and residency needs.",
    backgroundImageSrc: versionedAssetPath("/services/company-visas.webp"),
    backgroundImageAlt: "Company visa support and residency planning in the UAE",
    introBackgroundImageSrc: versionedAssetPath("/services/company-visas.webp"),
    introBackgroundImageAlt: "Company visa support background",
    introBackgroundImageMode: "ambient",
    introBackgroundImagePosition: "!object-[80%_28%]",
    overviewImageSrc: versionedAssetPath("/services/company-visas.webp"),
    overviewImageAlt: "Company visa support and residency planning in the UAE",
    overviewImagePosition: "object-[80%_28%]",
    introTitle: "Overview",
    introParagraphs: [
      "A company visa is often one of the first operational priorities after setup because founders and employees need legal residency before the business can function smoothly on the ground.",
      "A valid company visa is what allows founders and employees to live and work in the UAE, complete Emirates ID formalities, access local services, and start operating with the right residency position in place.",
      "Zenesis helps you plan the visa process in line with the company structure, labor approvals, medical steps, Emirates ID, and the practical timing of when people need to enter and start operating.",
    ],
    knowledgeSections: [
      {
        title: "Why the company visa matters",
        intro:
          "For many businesses, incorporation is only the first step. The operating reality starts once the founder or team has the residency position needed to work in the UAE properly.",
        items: [
          "Legal residency for founders and employees who need to live and work in the UAE",
          "Access to Emirates ID, health insurance, banking, and day-to-day local administration",
          "Potential family sponsorship for spouse, children, and in some cases parents, depending on the situation",
          "Renewable residency that supports longer-term operating continuity once the business is established",
        ],
      },
      {
        title: "How the process usually moves",
        intro:
          "The visa process is sequential, and delays often come from trying to move before the company, establishment, or quota position is ready.",
        items: [
          "Company registration and trade license in place first",
          "Establishment card, labor quota, and work permit steps prepared correctly",
          "Entry permit, medical testing, and Emirates ID typing handled in the right order",
          "Final visa stamping and post-issuance follow-through after approvals",
        ],
      },
    ],
    directAnswers: [
      {
        question: "How long is a normal company-sponsored residence visa usually valid?",
        answer:
          "The official UAE position is that sponsored residence visas can vary by type and sponsor, and normal employment residence visas are commonly issued on renewable terms. The exact duration and process depend on the issuing authority, emirate, and visa type attached to the company setup.",
      },
      {
        question: "What usually has to be in place before the company visa can move?",
        answer:
          "The company registration, trade licence, establishment file, and quota or labour position usually have to be in order first. Trying to push entry permits, medical, or Emirates ID steps before the company-side setup is ready is one of the most common causes of delay.",
      },
      {
        question: "Can founders and employees follow the same visa path?",
        answer:
          "Not always in exactly the same way. The broad company-sponsored process can look similar, but the supporting documents, sequencing, and practical follow-through can differ depending on whether the applicant is an owner, partner, manager, or employee.",
      },
      {
        question: "What follow-through work usually gets missed after visa approval?",
        answer:
          "The visa itself is only part of the operating setup. Emirates ID, health insurance, banking, family sponsorship where relevant, and renewal tracking all matter if the person is actually going to live and work in the UAE without disruption.",
      },
    ],
    relatedInsightSlugs: [
      "corporate-tax-mistakes-trigger-audits-uae",
      "uae-corporate-tax-registrations-cross-640000-businesses",
      "financial-year-2026-uae-compliance-guide",
    ],
    pointsTitle: "What we handle",
    points: [
      "Align the visa plan with the trade license, establishment setup, and quota requirements",
      "Manage work permit, entry permit, medical, and Emirates ID coordination",
      "Support founders and employees through residency issuance and follow-through",
      "Help you understand family sponsorship, insurance, and renewal implications after approval",
      "Coordinate the visa timeline with business setup and banking steps so the operating sequence makes sense",
    ],
    supportTitle: "Talk to Zenesis",
    supportParagraphs: [
      "Reach out if the business needs founder or employee residency quickly, or if you want the setup and visa process managed together instead of as separate tasks.",
    ],
    backHref: "/visa-and-banking",
    backLabel: "Back to Visa and Banking",
    metadata: {
      ...toMetadata(legacyServiceMeta["uae-company-visa"], "/uae-company-visa"),
    },
  },
  "visa-and-banking": {
    slug: "visa-and-banking",
    currentPath: "/visa-and-banking",
    title: "Visa and banking",
    eyebrow: "Visa and Banking",
    description:
      "Support across Golden Visa, company visas, and business banking, with the right sequence for residency, documentation, and account opening.",
    backgroundImageSrc: versionedAssetPath("/services/visa-and-banking.webp"),
    backgroundImageAlt: "Business traveler receiving UAE visa and banking support",
    introBackgroundImageSrc: versionedAssetPath("/services/visa-and-banking.webp"),
    introBackgroundImageAlt: "Business traveler arriving in Dubai for visa and banking support",
    introBackgroundImagePosition: "!object-[58%_16%]",
    introTitle: "Overview",
    introParagraphs: [
      "Visa and banking needs usually begin as soon as the company structure is clear. Founders may need residency, teams may need company visas, and banks may need a stronger KYC pack before an account can move forward.",
      "Zenesis helps connect those steps properly so residency planning, company visa support, and business banking are handled as one practical flow instead of separate delays after setup.",
    ],
    subpageLinks: [
      {
        label: "Bank account support",
        href: "/open-a-bank-account-easily",
        description:
          "Prepare KYC and account-opening support around the actual company structure.",
      },
      {
        label: "Company visa",
        href: "/uae-company-visa",
        description:
          "Handle founder and employee residency steps, medicals, and Emirates ID follow-through.",
      },
      {
        label: "Golden Visa",
        href: "/golden-visa-services-in-the-uae",
        description:
          "Review eligibility routes and document planning for long-term UAE residency.",
      },
    ],
    directAnswers: [
      {
        question: "Which usually comes first: residency planning or banking?",
        answer:
          "Usually the company structure comes first, then the visa and banking path is sequenced around it. Banks often want a clear license, shareholder documents, and a stronger KYC pack, while founders and staff may need residency steps moving at the same time.",
      },
      {
        question: "Who usually needs a company visa instead of a Golden Visa?",
        answer:
          "A company visa is the normal route for founders and employees who need UAE residency through the business. A Golden Visa is a separate long-term route with five- or ten-year terms depending on the qualifying category and evidence basis.",
      },
      {
        question: "Why do business bank applications get delayed?",
        answer:
          "Delays usually come from weak KYC preparation, unclear business activity, missing shareholder documents, or a company structure that does not match how the business is actually meant to operate. The cleaner the file is upfront, the fewer rounds of bank questions follow.",
      },
      {
        question: "What should be ready before starting this process?",
        answer:
          "The business activity, ownership structure, passport and company documents, and the practical operating plan should all be clear first. That makes it easier to line up bank expectations, visa requirements, and the order in which the follow-through work should happen.",
      },
    ],
    relatedInsightSlugs: [
      "corporate-tax-mistakes-trigger-audits-uae",
      "financial-year-2026-uae-compliance-guide",
      "complete-guide-to-corporate-tax-groups-uae",
    ],
    pointsTitle: "What we handle",
    points: [
      "Guide Golden Visa planning for investors, founders, professionals, and qualifying family applications",
      "Support company visa processing through permits, medical steps, Emirates ID, and residency issuance",
      "Prepare KYC packs and business documents for UAE and international banking requirements",
      "Sequence setup, residency, and banking tasks so the business can start operating with fewer delays",
    ],
    supportTitle: "Talk to Zenesis",
    supportParagraphs: [
      "Reach out if your next step after setup involves long-term residency, employee visas, or getting the business banking process started properly.",
    ],
    separateSupportSection: true,
    topLevelService: true,
    backHref: "/business-setup",
    backLabel: "Back to Business Setup",
    metadata: {
      ...toMetadata(legacyRouteMeta.visaAndBanking, "/visa-and-banking"),
    },
  },
  "golden-visa-services-in-the-uae": {
    slug: "golden-visa-services-in-the-uae",
    currentPath: "/visa-and-banking",
    title: "Golden Visa",
    eyebrow: "Golden Visa",
    description:
      "Support for Golden Visa eligibility, document planning, submissions, family sponsorship, and post-approval follow-through.",
    backgroundImageSrc: versionedAssetPath("/services/golden-visa.webp"),
    backgroundImageAlt: "Golden Visa planning and long-term UAE residency support",
    introBackgroundImageSrc: versionedAssetPath("/services/golden-visa.webp"),
    introBackgroundImageAlt: "Golden Visa support background",
    introBackgroundImageMode: "ambient",
    introBackgroundImagePosition: "!object-[28%_82%]",
    overviewImageSrc: versionedAssetPath("/services/golden-visa.webp"),
    overviewImageAlt: "Golden Visa planning and long-term UAE residency support",
    overviewImagePosition: "object-[28%_82%]",
    introTitle: "Overview",
    introParagraphs: [
      "Golden Visa applications work best when the category is identified correctly from the start and the documents are built around the real eligibility basis, not assumptions.",
      "The route can be relevant to investors, entrepreneurs, specialists, researchers, creatives, high-performing graduates, and qualifying family applications, but the documentation path depends heavily on category.",
      "Zenesis helps investors, entrepreneurs, professionals, and families understand which route fits, what evidence is needed, and how to move the application forward with fewer delays.",
    ],
    knowledgeSections: [
      {
        title: "Who usually explores the Golden Visa route",
        intro:
          "The category matters because each route has different evidence requirements, approval logic, and supporting documents.",
        items: [
          "Investors and entrepreneurs",
          "Scientists, researchers, and certain specialist professionals",
          "Medical, engineering, and technology professionals where the profile aligns with the category rules",
          "Creative and cultural talent categories, as well as outstanding students and graduates where relevant",
        ],
      },
      {
        title: "What the service is really for",
        intro:
          "The main value is not just form filing. It is choosing the right category, preparing the right support, and using the proper channels instead of relying on unreliable shortcuts.",
        items: [
          "Eligibility review before documents are prepared",
          "Document strategy across evidence, attestations, financial support, and category-specific submissions",
          "Submission and follow-up through the proper UAE authority channels such as ICP, GDRFA, or TAMM where applicable",
          "Post-approval help around Emirates ID, family sponsorship, and later changes or renewals",
        ],
      },
      {
        title: "Corporate document attestation",
        intro:
          "Foreign companies may need legalized corporate records before they can establish operations, appoint representatives, or complete authority filings in the UAE.",
        items: [
          "Certificates of incorporation and commercial register extracts",
          "Memorandum and articles of association",
          "Board resolutions and powers of attorney",
          "Shareholder records and good standing certificates",
          "Other corporate documents required for UAE business setup or ongoing filings",
        ],
      },
      {
        title: "Personal document attestation",
        intro:
          "Personal certificates are commonly required for employment, professional licensing, family sponsorship, and official registrations.",
        items: [
          "Degrees, diplomas, school certificates, and professional qualifications",
          "Marriage certificates for spouse visas and family sponsorship",
          "Birth certificates for child visas and official registrations",
          "Police clearance certificates, affidavits, and personal declarations",
        ],
      },
      {
        title: "Current five-year and ten-year routes",
        intro:
          "Golden Residency duration and evidence depend on the category. The route should be identified before documents are prepared.",
        items: [
          "Five-year routes include qualifying real-estate investors, entrepreneurs, and outstanding high-school students",
          "Ten-year routes include qualifying public investors, exceptional talents and specialists, outstanding university students, humanitarian pioneers, and frontline heroes",
          "Each category follows its own investment, valuation, accreditation, recommendation, education, or service evidence",
          "The relevant authority makes the final eligibility and approval decision",
        ],
      },
      {
        title: "Evidence checked before submission",
        intro:
          "Zenesis helps organise the file around the selected route rather than relying on one generic checklist.",
        items: [
          "Investment, property, company, tax-payment, or project-valuation evidence where the selected route requires it",
          "Professional accreditation, recommendation letters, qualifications, experience, employment, or salary records for specialist routes",
          "Academic results and education recommendations for outstanding-student routes",
          "Passport, residence, insurance, family, attestation, medical, and Emirates ID documents as applicable to the stage",
        ],
      },
    ],
    directAnswers: [
      {
        question: "Is the Golden Visa always a 10-year visa?",
        answer:
          "No. The current official position includes both five-year and ten-year Golden Residency routes depending on the category. For example, entrepreneur and some real-estate routes can differ from investor or specialist routes, so the category has to be checked properly first.",
      },
      {
        question: "Who usually qualifies to explore the Golden Visa route?",
        answer:
          "The main categories currently include investors, real-estate investors, entrepreneurs, exceptional talents and rare specializations, outstanding students, and certain humanitarian pioneers or frontline heroes. Each route has its own evidence requirements and approval logic.",
      },
      {
        question: "What usually makes a Golden Visa application weak?",
        answer:
          "The most common issue is choosing the wrong category or trying to force a profile into a route without the right evidence. Applications work better when the category, supporting documents, and issuing authority path are aligned from the start.",
      },
      {
        question: "What is the practical benefit of the Golden Residency?",
        answer:
          "The main benefit is longer-term UAE residency without the normal short-cycle company sponsorship dependency, plus clearer stability for living, working, studying, investing, and planning family residency in the UAE where the category is approved.",
      },
    ],
    relatedInsightSlugs: [
      "complete-dubai-golden-visa-guide",
      "uae-visa-reforms-2025-entrepreneurs-expats",
      "business-consultant-beyond-company-registration",
    ],
    pointsTitle: "What we handle",
    points: [
      "Review eligibility across investor, entrepreneur, professional, and other qualifying categories",
      "Prepare the document set and submission path around the correct category",
      "Support application follow-up, status tracking, and approval steps",
      "Help with family sponsorship and post-approval residency follow-through",
      "Coordinate medical, Emirates ID, and later post-approval practical steps where needed",
    ],
    supportTitle: "Talk to Zenesis",
    supportParagraphs: [
      "Reach out if you want long-term residency in the UAE and need clarity on whether your investment, business role, or professional profile is likely to qualify.",
      "For the complete category-by-category requirements, read the linked UAE Golden Residency guide before starting an application.",
    ],
    backHref: "/visa-and-banking",
    backLabel: "Back to Visa and Banking",
    metadata: {
      ...toMetadata(
        legacyRouteMeta.goldenVisaServices,
        "/golden-visa-services-in-the-uae",
      ),
    },
  },
  "corporate-tax-registration-in-the-uae": {
    slug: "corporate-tax-registration-in-the-uae",
    currentPath: "/accounting-tax",
    title: "Tax registration",
    eyebrow: "Corporate Tax Registration",
    description:
      "Get the corporate tax registration process organized correctly, from eligibility review and document collection through EmaraTax submission support.",
    backgroundImageSrc: versionedAssetPath("/services/corporate-tax-registration.webp"),
    backgroundImageAlt: "Corporate tax registration support and EmaraTax planning",
    introBackgroundImageSrc: versionedAssetPath("/services/corporate-tax-registration.webp"),
    introBackgroundImageAlt: "Corporate tax registration background",
    introBackgroundImageMode: "ambient",
    introBackgroundImagePosition: "!object-[84%_30%]",
    overviewImageSrc: versionedAssetPath("/services/corporate-tax-registration.webp"),
    overviewImageAlt: "Corporate tax registration support and EmaraTax planning",
    overviewImagePosition: "object-[84%_30%]",
    introTitle: "Overview",
    introParagraphs: [
      "Corporate tax registration is more than an online form. The business should first confirm its position, gather the right documents, and register in a way that fits what the company is actually doing.",
      "Registration is not only relevant to larger profit-making businesses. Mainland companies, many free zone entities, branches, freelancers, startups, and other businesses with a UAE tax footprint may still need to register or assess whether they must notify the FTA of an exemption position.",
      "Zenesis helps you complete registration properly and understand what comes next, so you are not registered without being ready for the filing and record-keeping work that follows.",
    ],
    knowledgeSections: [
      {
        title: "Who usually needs to think about registration",
        intro:
          "Corporate tax registration is not just a profit-threshold question. The business type, tax position, and UAE presence all matter.",
        items: [
          "Mainland companies and many free zone businesses",
          "Foreign branches and other structures with a UAE taxable presence",
          "Freelancers, self-employed operators, startups, and SMEs where the activity falls into scope",
          "Entities that may be exempt in principle but still need to assess whether an FTA notification or supporting filing position is required",
        ],
      },
      {
        title: "How the process usually moves",
        intro:
          "The cleanest registration process starts with confirming the position first, then preparing the submission around the real structure of the business.",
        items: [
          "Eligibility and scope review before portal work begins",
          "Document collection and validation before submission",
          "EmaraTax account setup and application preparation",
          "Post-registration guidance so the business understands the filing, deadline, and record-keeping work that starts next",
        ],
      },
    ],
    directAnswers: [
      {
        question: "Is corporate tax registration only for large profitable companies?",
        answer:
          "No. The current UAE corporate tax framework reaches far beyond only large companies. Mainland businesses, many free zone entities, branches, freelancers, startups, and SMEs may still need to assess whether they must register or notify the FTA of a specific position.",
      },
      {
        question: "What usually goes wrong in the registration stage?",
        answer:
          "The most common problems are starting the portal process before the tax position is properly reviewed, using incomplete supporting documents, or treating registration as an isolated form rather than the start of an ongoing filing and record-keeping obligation.",
      },
      {
        question: "What platform is used for UAE corporate tax registration and filing?",
        answer:
          "The UAE uses the EmaraTax platform for tax registration, filing returns, making payments, and related Federal Tax Authority digital services. The portal step is important, but the accuracy of the data and documents behind it matters just as much.",
      },
      {
        question: "What should the business understand immediately after registration?",
        answer:
          "Registration is not the finish line. Once registered, the business should understand its filing deadlines, supporting records, financial reporting discipline, and the practical compliance work that will be expected when the first return becomes due.",
      },
    ],
    relatedInsightSlugs: [
      "financial-year-2026-uae-compliance-guide",
      "corporate-tax-mistakes-trigger-audits-uae",
      "uae-corporate-tax-registrations-cross-640000-businesses",
    ],
    pointsTitle: "What we handle",
    points: [
      "Review whether the business should register now and what information needs to support that position",
      "Prepare and check the documents needed for EmaraTax registration",
      "Handle portal setup, application submission, and follow-up on status",
      "Explain the filing, record-keeping, and deadline obligations that begin after registration",
      "Support exemption-position notifications where the entity may qualify but still needs the process handled properly",
    ],
    supportTitle: "Talk to Zenesis",
    supportParagraphs: [
      "Reach out if the company is newly formed, operating already, or sitting in a free zone and you want the registration completed cleanly before filing deadlines become an issue.",
    ],
    backHref: "/accounting-tax",
    backLabel: "Back to Accounting & Tax",
    metadata: {
      ...toMetadata(
        legacyServiceMeta["corporate-tax-registration-in-the-uae"],
        "/corporate-tax-registration-in-the-uae",
      ),
    },
  },
  "corporate-tax-filing-services-in-the-uae": {
    slug: "corporate-tax-filing-services-in-the-uae",
    currentPath: "/accounting-tax",
    title: "Tax filing",
    eyebrow: "Corporate Tax Filing",
    description:
      "Prepare annual corporate tax filings with cleaner records, clearer calculations, FTA portal submission support, and steadier deadline management.",
    backgroundImageSrc: versionedAssetPath("/services/corporate-tax-filing.webp"),
    backgroundImageAlt: "Corporate tax filing support and annual return preparation",
    introBackgroundImageSrc: versionedAssetPath("/services/corporate-tax-filing.webp"),
    introBackgroundImageAlt: "Corporate tax filing background",
    introBackgroundImageMode: "ambient",
    introBackgroundImagePosition: "!object-[84%_30%]",
    overviewImageSrc: versionedAssetPath("/services/corporate-tax-return.webp"),
    overviewImageAlt: "Corporate tax return review and annual filing support",
    overviewImagePosition: "object-[84%_30%]",
    introTitle: "Overview",
    introParagraphs: [
      "Corporate tax filing depends on more than sending a return through the portal. The business needs clean figures, defensible calculations, supporting records, and a filing position that can stand up to review.",
      "Once a business is registered and has its TRN, it must file annually with the Federal Tax Authority. The timing, working papers, payment position, and record retention all matter just as much as the return itself.",
      "Zenesis helps you prepare the return around the actual books and tax position of the company, so the filing is accurate, on time, and better supported if questions come later.",
    ],
    knowledgeSections: [
      {
        title: "What the filing really covers",
        intro:
          "A proper filing is built around the taxable position of the business, not just an accounting export pushed through the portal.",
        items: [
          "Taxable income and allowable expenses",
          "Net profit subject to corporate tax",
          "Available credits, deductions, exemptions, or reliefs where the facts support them",
          "The final payable or refundable tax position and the records behind it",
        ],
      },
      {
        title: "What businesses need to stay aware of",
        intro:
          "The filing obligation continues beyond registration, and poor timing or weak records can create avoidable penalties.",
        items: [
          "Returns are filed electronically through the FTA system",
          "The annual return is generally due within 9 months after the end of the financial year",
          "Any tax liability needs to be paid by the deadline to reduce penalty and interest risk",
          "Detailed records and supporting documentation should be retained for the required audit window",
        ],
      },
    ],
    directAnswers: [
      {
        question: "When is a UAE corporate tax return usually due?",
        answer:
          "The general rule is that the annual corporate tax return is due within nine months after the end of the relevant financial year. That deadline is easier to meet when the books, calculations, and supporting papers are prepared before the filing window becomes urgent.",
      },
      {
        question: "Is corporate tax filing just uploading numbers to the portal?",
        answer:
          "No. The portal submission is only the last step. A proper filing depends on clean books, a defensible taxable position, supporting calculations, and documentation that can stand up to later review if the FTA asks questions.",
      },
      {
        question: "What usually creates filing risk even when a business is registered?",
        answer:
          "The main risks are weak bookkeeping, rushed year-end calculations, unclear deduction treatment, and missing support behind the return. Registration does not make the annual filing safe if the numbers underneath it are not properly prepared.",
      },
      {
        question: "What should be ready before the return is submitted?",
        answer:
          "The financial statements, taxable income review, deduction analysis, any relevant relief or exemption treatment, and the working papers behind the final position should all be ready before the return is filed. Filing first and explaining later is the weak approach.",
      },
    ],
    pointsTitle: "What we handle",
    points: [
      "Prepare and file the annual corporate tax return through the FTA system",
      "Review taxable income, deductions, and supporting calculations before submission",
      "Track deadlines, payment timing, and filing follow-through",
      "Organize the working papers and records needed to support the filing position",
      "Help identify reliefs, exemptions, credits, and deduction treatment where the facts support them",
    ],
    supportTitle: "Talk to Zenesis",
    supportParagraphs: [
      "Reach out if the business is already registered and you want a cleaner annual filing process instead of rushing through the return at the deadline.",
    ],
    backHref: "/accounting-tax",
    backLabel: "Back to Accounting & Tax",
    metadata: {
      ...toMetadata(
        legacyServiceMeta["corporate-tax-filing-services-in-the-uae"],
        "/corporate-tax-filing-services-in-the-uae",
      ),
    },
  },
  "vat-filing-services-in-the-uae": {
    slug: "vat-filing-services-in-the-uae",
    currentPath: "/accounting-tax",
    title: "VAT registration and filing",
    eyebrow: "VAT Registration and Filing",
    description:
      "Get support with VAT registration, accurate recurring returns, reconciliations, invoice checks, payment follow-through, and audit-ready records.",
    backgroundImageSrc: versionedAssetPath("/services/vat-filing.webp"),
    backgroundImageAlt: "VAT filing support and reconciliation review in the UAE",
    introBackgroundImageSrc: versionedAssetPath("/services/vat-filing.webp"),
    introBackgroundImageAlt: "VAT filing support background",
    introBackgroundImageMode: "ambient",
    introBackgroundImagePosition: "!object-[84%_32%]",
    overviewImageSrc: versionedAssetPath("/services/vat-filing.webp"),
    overviewImageAlt: "VAT filing support and reconciliation review in the UAE",
    overviewImagePosition: "object-[84%_32%]",
    introTitle: "Overview",
    introParagraphs: [
      "Zenesis supports both VAT registration and ongoing VAT filing. For a new or growing business, that starts with reviewing whether the mandatory or voluntary registration rules apply and preparing the information and supporting documents for the application.",
      "VAT filing becomes difficult when invoices, purchases, and records are not being reviewed in a consistent way before the return is due.",
      "Once a business is VAT registered, the filing cycle becomes recurring. Most businesses file quarterly, some monthly, and the work needs to stay organized between periods rather than only when the deadline approaches.",
      "Zenesis helps you build a steadier VAT process so returns are prepared from cleaner records, reconciliations are clearer, and the business is in a better position if the FTA asks questions later.",
    ],
    knowledgeSections: [
      {
        title: "When VAT registration becomes relevant",
        intro:
          "Registration depends on taxable activity and turnover rather than company age alone, so the position should be monitored as the business starts trading.",
        items: [
          "Review whether the mandatory registration threshold has been reached or is expected within the applicable period",
          "Assess whether voluntary registration may be available and commercially appropriate",
          "Prepare the turnover evidence, licence documents, ownership information, and supporting records required for the application",
          "Set up the filing calendar and record-keeping process once registration is approved",
        ],
      },
      {
        title: "What a VAT return usually needs",
        intro:
          "The return is only as strong as the supporting invoice trail and the reconciliations behind it.",
        items: [
          "Taxable sales and supplies",
          "Output VAT charged on sales",
          "Eligible purchases and expenses used for input VAT recovery",
          "The final payable or refundable VAT position after reconciliation",
        ],
      },
      {
        title: "Where businesses usually get exposed",
        intro:
          "VAT problems usually come from rushed filings, weak invoice review, or leaving the payment position too late.",
        items: [
          "Late filing or payment can trigger penalties and interest exposure",
          "Incorrect declarations can create avoidable compliance issues",
          "Weak invoice support can affect recoverability and audit readiness",
          "A recurring process is usually safer than treating each return as a last-minute project",
        ],
      },
    ],
    directAnswers: [
      {
        question: "Does Zenesis provide VAT registration support?",
        answer:
          "Yes. Zenesis can assess the business's VAT registration position, help prepare the application information and supporting documents, and support the transition into recurring VAT filing once registration is approved.",
      },
      {
        question: "Do all UAE businesses file VAT on the same schedule?",
        answer:
          "No. Many businesses file quarterly, while some file monthly depending on their FTA-assigned VAT period. The practical point is that the records have to stay ready throughout the period instead of being rebuilt only when the filing deadline arrives.",
      },
      {
        question: "What usually causes VAT mistakes?",
        answer:
          "Most VAT mistakes come from poor invoice control, weak reconciliations, late review of purchases and sales, or leaving the filing too close to the deadline. The return is only as reliable as the records and checks behind it.",
      },
      {
        question: "Why do VAT returns become stressful for some businesses?",
        answer:
          "They become stressful when the business treats each return as a one-off deadline instead of a recurring process. A steadier month-by-month or quarter-by-quarter rhythm makes the return easier to prepare and less exposed to avoidable errors.",
      },
      {
        question: "What should be checked before a VAT return is filed?",
        answer:
          "Sales, purchases, tax invoices, input VAT recovery position, output VAT calculations, and the final payable or refundable balance should all be reviewed and reconciled before submission. That is what makes the return more defensible if the FTA asks questions later.",
      },
    ],
    pointsTitle: "What we handle",
    points: [
      "Assess whether mandatory or voluntary VAT registration applies",
      "Prepare VAT registration information and supporting documents",
      "Prepare the VAT return from your sales, purchases, and supporting records",
      "Reconcile input and output VAT before filing so the position is clearer",
      "Review tax invoices and supporting documents for filing readiness",
      "Support filing deadlines, payment steps, and audit-related follow-up",
      "Help keep the filing cycle organized across monthly or quarterly VAT periods",
    ],
    supportTitle: "Talk to Zenesis",
    supportParagraphs: [
      "Reach out if you need to establish your VAT registration position, prepare a registration application, or keep recurring returns and records organized after registration.",
    ],
    backHref: "/accounting-tax",
    backLabel: "Back to Accounting & Tax",
    metadata: {
      ...toMetadata(
        legacyServiceMeta["vat-filing-services-in-the-uae"],
        "/vat-filing-services-in-the-uae",
      ),
    },
  },
  "professional-bookkeeping-services-in-dubai": {
    slug: "professional-bookkeeping-services-in-dubai",
    currentPath: "/accounting-tax",
    title: "Bookkeeping",
    eyebrow: "Bookkeeping",
    description:
      "Keep records cleaner and more usable with weekly or monthly bookkeeping, reconciliations, reporting, payroll support, and audit-ready organization.",
    backgroundImageSrc: versionedAssetPath("/services/bookkeeping.webp"),
    backgroundImageAlt: "Bookkeeping and financial reporting support in Dubai",
    introBackgroundImageSrc: versionedAssetPath("/services/bookkeeping.webp"),
    introBackgroundImageAlt: "Bookkeeping support background",
    introBackgroundImageMode: "ambient",
    introBackgroundImagePosition: "!object-[84%_30%]",
    overviewImageSrc: versionedAssetPath("/services/bookkeeping.webp"),
    overviewImageAlt: "Bookkeeping and financial reporting support in Dubai",
    overviewImagePosition: "object-[84%_30%]",
    introTitle: "Overview",
    introParagraphs: [
      "Bookkeeping is the base layer for VAT, corporate tax, reporting, and daily financial control. If the books are weak, every filing and management decision on top of them becomes harder.",
      "Clean books are what help a business stay audit-ready, understand cash flow, catch financial issues earlier, and avoid last-minute accounting pressure before VAT or corporate tax deadlines.",
      "Zenesis helps you keep records current, reconcile accounts properly, and produce reports that are actually useful for compliance and running the business.",
    ],
    knowledgeSections: [
      {
        title: "Why bookkeeping matters beyond data entry",
        intro:
          "Good bookkeeping is what turns financial records into something the business can actually rely on.",
        items: [
          "Stronger VAT and corporate tax readiness",
          "Better visibility over cash flow and operating performance",
          "Earlier detection of reporting gaps or financial red flags",
          "Cleaner year-round records instead of last-minute reconstruction work",
        ],
      },
      {
        title: "What businesses usually expect from outsourced bookkeeping",
        intro:
          "The value is not only transaction recording. It is having the books, reports, payroll support, and audit trail in a usable shape throughout the year.",
        items: [
          "Weekly or monthly posting and reconciliations",
          "Financial reporting such as P&L, balance sheet, and cash flow views",
          "Support for payroll records and tax-linked readiness",
          "Work within the tools the business already uses, including QuickBooks, Zoho Books, Tally, and Excel",
        ],
      },
    ],
    directAnswers: [
      {
        question: "How often should bookkeeping usually be updated?",
        answer:
          "That depends on transaction volume and reporting needs, but the practical answer is that the books should be updated regularly enough that VAT, corporate tax, management reporting, and reconciliations never become a year-end reconstruction exercise.",
      },
      {
        question: "What usually goes wrong when bookkeeping is left too late?",
        answer:
          "The common problems are missing invoices, unclear bank reconciliations, poor visibility on cash flow, and weak records for VAT or tax filings. Once the books fall behind, every later compliance task becomes slower and more expensive to clean up.",
      },
      {
        question: "Is bookkeeping only about entering transactions?",
        answer:
          "No. Good bookkeeping is what makes the records usable for reporting, VAT, corporate tax, audits, and management decisions. The real value is not just posting entries but keeping the financial picture reliable enough to act on.",
      },
      {
        question: "What should a business expect from outsourced bookkeeping?",
        answer:
          "A good outsourced setup should keep the books current, reconcile the main accounts, support payroll records where needed, and produce reports that are actually usable for compliance and decision-making rather than just existing for formality.",
      },
    ],
    pointsTitle: "What we handle",
    points: [
      "Maintain weekly or monthly books and reconcile the main bank activity",
      "Prepare reporting such as profit and loss, balance sheet, and cash flow views",
      "Support payroll records and the documentation needed for reviews or audits",
      "Work with the accounting tools your business already uses, including QuickBooks, Zoho Books, Tally, and Excel",
      "Help keep the records in shape for VAT, corporate tax, audits, and management reporting",
    ],
    supportTitle: "Talk to Zenesis",
    supportParagraphs: [
      "Reach out if the business has outgrown ad hoc spreadsheets, the books are always behind, or you want cleaner records before tax filings and reporting pressure build up.",
    ],
    backHref: "/accounting-tax",
    backLabel: "Back to Accounting & Tax",
    metadata: {
      ...toMetadata(
        legacyServiceMeta["professional-bookkeeping-services-in-dubai"],
        "/professional-bookkeeping-services-in-dubai",
      ),
    },
  },
};
