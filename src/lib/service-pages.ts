import type { Metadata } from "next";
import type { ServiceSubpageLinkItem } from "@/components/service-subpage-links";
import { versionedAssetPath } from "@/lib/asset-paths";
import { legacyRouteMeta, legacyServiceMeta, toMetadata } from "@/lib/legacy-meta";

type ServiceKnowledgeSection = {
  title: string;
  intro?: string;
  items: string[];
};

export type ServiceDetailConfig = {
  slug: string;
  currentPath: "/business-setup" | "/accounting-tax" | "/visa-and-banking";
  title: string;
  eyebrow: string;
  description: string;
  backgroundImageSrc: string;
  backgroundImageAlt: string;
  introBackgroundImageSrc?: string;
  introBackgroundImageAlt?: string;
  introBackgroundImagePosition?: string;
  introAmbientImageClassName?: string;
  introTitle: string;
  introParagraphs: string[];
  subpageLinks?: ServiceSubpageLinkItem[];
  knowledgeSections?: ServiceKnowledgeSection[];
  pointsTitle: string;
  points: string[];
  supportTitle?: string;
  supportParagraphs?: string[];
  separateSupportSection?: boolean;
  hideBreadcrumb?: boolean;
  topLevelService?: boolean;
  backHref: "/business-setup" | "/accounting-tax" | "/visa-and-banking";
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
    backgroundImageSrc: versionedAssetPath("/business-setup.webp"),
    backgroundImageAlt: "Professionals reviewing mainland setup options in Dubai",
    introTitle: "Overview",
    introParagraphs: [
      "Mainland setup is the right route when your business needs to trade directly in the UAE, sign local contracts, hire staff, and operate with broader flexibility across the country.",
      "The most common mainland structures are LLCs, branch offices, representative offices, civil companies, sole proprietorships, and other forms used for more specific ownership or regulatory needs.",
      "Zenesis helps you choose the right mainland structure, align the business activity correctly, and handle the licensing steps so the company is built around how you actually plan to operate.",
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
      ...toMetadata(legacyServiceMeta.mainland),
    },
  },
  "free-zones": {
    slug: "free-zones",
    currentPath: "/business-setup",
    title: "Free zone setup",
    eyebrow: "Free Zones",
    description:
      "Compare the free zones that matter for your activity, package fit, ownership model, visas, and operating needs.",
    backgroundImageSrc: versionedAssetPath("/free-zone.webp"),
    backgroundImageAlt: "Business professionals discussing free zone setup options",
    introTitle: "Overview",
    introParagraphs: [
      "Free zone setup is often the best fit for founders who want a faster formation route, clearer package options, and a structure that matches consulting, digital, trade, or investor-led business models.",
      "Many UAE free zones are chosen for 100 per cent foreign ownership, easier setup packaging, repatriation flexibility, and infrastructure designed around trade, services, logistics, media, or international business.",
      "Zenesis helps you compare the zones that actually fit your business instead of choosing based on price alone. The right zone also affects visas, office requirements, banking documents, and how practical the business will be after setup.",
    ],
    knowledgeSections: [
      {
        title: "What usually makes a free zone attractive",
        intro:
          "Free zones are not interchangeable, but they are often chosen for a similar set of ownership, setup, and operating advantages.",
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
          "IFZA and Meydan for flexible licensing and popular founder-led setup packages",
          "RAKEZ, Shams, Ajman, Fujairah, Sharjah Airport, and Umm Al Quwain where activity fit, cost, or location can matter more than headline prestige",
        ],
      },
    ],
    pointsTitle: "What we handle",
    points: [
      "Compare zone options by activity, ownership needs, budget, and operational fit",
      "Review the practical differences between zones such as DMCC, Dubai South, IFZA, Meydan, Shams, RAKEZ, Fujairah, Ajman, Sharjah Airport, and Umm Al Quwain",
      "Review package differences around visas, offices, flexi-desks, and renewal costs",
      "Assess location and ecosystem fit for trade, logistics, aviation, e-commerce, media, consulting, and international holding activity",
      "Prepare the application, supporting documents, and follow-up required for approval",
      "Get help with the next steps after setup, including visas, banking documents, and renewals",
    ],
    supportTitle: "Talk to Zenesis",
    supportParagraphs: [
      "Reach out if you are comparing DMCC, IFZA, Meydan, Dubai South, RAKEZ, or other zones and want a recommendation based on how the business will function after formation.",
      "Zenesis can help you separate headline pricing from the real differences in visas, office requirements, licensing scope, banking expectations, and long-term operating fit.",
    ],
    backHref: "/business-setup",
    backLabel: "Back to Business Setup",
    metadata: {
      ...toMetadata(legacyServiceMeta["free-zones"]),
    },
  },
  offshore: {
    slug: "offshore",
    currentPath: "/business-setup",
    title: "Offshore setup",
    eyebrow: "Offshore",
    description:
      "Use offshore structures for holding, ownership, and international arrangements that do not depend on day-to-day local UAE operations.",
    backgroundImageSrc: versionedAssetPath("/business-setup.webp"),
    backgroundImageAlt: "Advisors discussing offshore structuring options",
    introTitle: "Overview",
    introParagraphs: [
      "Offshore setup is usually used for holding companies, asset ownership, succession planning, and international arrangements that do not depend on day-to-day trading inside the UAE.",
      "This route is often used by owners who want a tax-efficient holding structure, privacy around beneficial ownership at the registry level, and a company that is not designed for local UAE operating activity.",
      "Zenesis helps you decide whether offshore is the right route at all, then guides the jurisdiction choice and setup process so the structure matches the ownership objective behind it.",
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
          "The UAE offshore options are not identical, and the right one depends on what the company is meant to hold or do.",
        items: [
          "JAFZA is often chosen for stronger recognition and for structures that may need Dubai property ownership relevance",
          "RAK ICC is widely used for international business company registration and holding structures",
          "Ajman Offshore is often considered for a more cost-conscious offshore setup route",
          "All offshore structures need to be checked against their limits on local trading, visas, and physical UAE operating activity",
        ],
      },
    ],
    pointsTitle: "What we handle",
    points: [
      "Compare the offshore jurisdictions that suit holding, protection, or international ownership goals, including JAFZA, RAK ICC, and Ajman Offshore",
      "Handle incorporation documents, registered-agent coordination, and compliance paperwork",
      "Explain where offshore is suitable for international trading, commission income, consultancy income, property holding, or global asset ownership",
      "Structure the company around shareholders, assets, and planned international use",
      "Support related banking steps where the structure and use case allow for it",
      "Help you understand the limits of offshore structures where local UAE trading, visas, or physical operating activity are concerned",
    ],
    supportTitle: "Talk to Zenesis",
    supportParagraphs: [
      "Reach out if your priority is asset holding, group structuring, family ownership planning, or international arrangements rather than local UAE operating activity.",
      "Zenesis can help you choose between JAFZA, RAK ICC, and Ajman Offshore based on whether the main goal is ownership, protection, property, banking, or international commercial use.",
    ],
    backHref: "/business-setup",
    backLabel: "Back to Business Setup",
    metadata: {
      ...toMetadata(legacyServiceMeta.offshore),
    },
  },
  "document-attestation-services-in-uae": {
    slug: "document-attestation-services-in-uae",
    currentPath: "/business-setup",
    title: "Document attestation",
    eyebrow: "Document Attestation",
    description:
      "Get personal, educational, and commercial documents attested for UAE use with a process that is handled clearly from review through MOFA.",
    backgroundImageSrc: versionedAssetPath("/contact-consultation.webp"),
    backgroundImageAlt: "Professional document review for UAE attestation support",
    introTitle: "Overview",
    introParagraphs: [
      "If a document was issued outside the UAE, it often needs formal attestation before a UAE authority, employer, university, bank, or registry will accept it.",
      "The attestation requirement exists to confirm authenticity, reduce fraud risk, and ensure foreign documents can be used properly for work, study, immigration, legal, and business purposes in the UAE.",
      "Zenesis helps you understand which documents need attestation, what order the process should follow, and how to move them through the required legalization and MOFA steps without unnecessary rework.",
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
    backHref: "/business-setup",
    backLabel: "Back to Business Setup",
    metadata: {
      ...toMetadata(legacyServiceMeta["document-attestation-services-in-uae"]),
    },
  },
  "open-a-bank-account-easily": {
    slug: "open-a-bank-account-easily",
    currentPath: "/visa-and-banking",
    title: "Bank account support",
    eyebrow: "Bank Accounts",
    description:
      "Support for UAE and international bank account opening, with KYC preparation and practical coordination around the company structure.",
    backgroundImageSrc: versionedAssetPath("/professional-meeting.webp"),
    backgroundImageAlt: "Professional meeting about business banking support",
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
      ...toMetadata(legacyServiceMeta["open-a-bank-account-easily"]),
    },
  },
  "uae-company-visa": {
    slug: "uae-company-visa",
    currentPath: "/visa-and-banking",
    title: "Company visa",
    eyebrow: "Company Visa",
    description:
      "Plan company visa support in line with business setup, labor approvals, medical steps, Emirates ID, and residency needs.",
    backgroundImageSrc: versionedAssetPath("/contact-consultation.webp"),
    backgroundImageAlt: "Business visa consultation in the UAE",
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
      ...toMetadata(legacyServiceMeta["uae-company-visa"]),
    },
  },
  "visa-and-banking": {
    slug: "visa-and-banking",
    currentPath: "/visa-and-banking",
    title: "Visa and banking",
    eyebrow: "Visa and Banking",
    description:
      "Support across Golden Visa, company visas, and business banking, with the right sequence for residency, documentation, and account opening.",
    backgroundImageSrc: versionedAssetPath("/contact-consultation.webp"),
    backgroundImageAlt: "Client consultation about UAE visa and banking support",
    introBackgroundImageSrc: "/visa-and-banking-bg.webp",
    introBackgroundImageAlt: "Zenesis Visa and Banking page background",
    introBackgroundImagePosition: "!object-[100%_100%]",
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
      ...toMetadata(legacyRouteMeta.visaAndBanking),
    },
  },
  "golden-visa-services-in-the-uae": {
    slug: "golden-visa-services-in-the-uae",
    currentPath: "/visa-and-banking",
    title: "Golden Visa",
    eyebrow: "Golden Visa",
    description:
      "Support for Golden Visa eligibility, document planning, submissions, family sponsorship, and post-approval follow-through.",
    backgroundImageSrc: versionedAssetPath("/contact-consultation.webp"),
    backgroundImageAlt: "Client consultation about UAE Golden Visa support",
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
    ],
    backHref: "/visa-and-banking",
    backLabel: "Back to Visa and Banking",
    metadata: {
      ...toMetadata(legacyRouteMeta.goldenVisaServices),
    },
  },
  "corporate-tax-registration-in-the-uae": {
    slug: "corporate-tax-registration-in-the-uae",
    currentPath: "/accounting-tax",
    title: "Tax registration",
    eyebrow: "Corporate Tax Registration",
    description:
      "Get the corporate tax registration process organized correctly, from eligibility review and document collection through EmaraTax submission support.",
    backgroundImageSrc: versionedAssetPath("/corporate-tax.webp"),
    backgroundImageAlt: "Corporate tax registration review meeting",
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
      ...toMetadata(legacyServiceMeta["corporate-tax-registration-in-the-uae"]),
    },
  },
  "corporate-tax-filing-services-in-the-uae": {
    slug: "corporate-tax-filing-services-in-the-uae",
    currentPath: "/accounting-tax",
    title: "Tax filing",
    eyebrow: "Corporate Tax Filing",
    description:
      "Prepare annual corporate tax filings with cleaner records, clearer calculations, FTA portal submission support, and steadier deadline management.",
    backgroundImageSrc: versionedAssetPath("/corporate-tax.webp"),
    backgroundImageAlt: "Advisors reviewing corporate tax filing work",
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
      ...toMetadata(legacyServiceMeta["corporate-tax-filing-services-in-the-uae"]),
    },
  },
  "vat-filing-services-in-the-uae": {
    slug: "vat-filing-services-in-the-uae",
    currentPath: "/accounting-tax",
    title: "VAT filing",
    eyebrow: "VAT Filing",
    description:
      "Keep VAT returns accurate, timely, and better supported by reconciliations, invoice checks, payment follow-through, and audit-ready records.",
    backgroundImageSrc: versionedAssetPath("/financial-year.webp"),
    backgroundImageAlt: "Professionals handling VAT filing and reconciliation",
    introTitle: "Overview",
    introParagraphs: [
      "VAT filing becomes difficult when invoices, purchases, and records are not being reviewed in a consistent way before the return is due.",
      "Once a business is VAT registered, the filing cycle becomes recurring. Most businesses file quarterly, some monthly, and the work needs to stay organized between periods rather than only when the deadline approaches.",
      "Zenesis helps you build a steadier VAT process so returns are prepared from cleaner records, reconciliations are clearer, and the business is in a better position if the FTA asks questions later.",
    ],
    knowledgeSections: [
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
    pointsTitle: "What we handle",
    points: [
      "Prepare the VAT return from your sales, purchases, and supporting records",
      "Reconcile input and output VAT before filing so the position is clearer",
      "Review tax invoices and supporting documents for filing readiness",
      "Support filing deadlines, payment steps, and audit-related follow-up",
      "Help keep the filing cycle organized across monthly or quarterly VAT periods",
    ],
    supportTitle: "Talk to Zenesis",
    supportParagraphs: [
      "Reach out if VAT returns are becoming rushed, records are not staying organized between periods, or you want recurring support instead of treating each filing as a last-minute task.",
    ],
    backHref: "/accounting-tax",
    backLabel: "Back to Accounting & Tax",
    metadata: {
      ...toMetadata(legacyServiceMeta["vat-filing-services-in-the-uae"]),
    },
  },
  "professional-bookkeeping-services-in-dubai": {
    slug: "professional-bookkeeping-services-in-dubai",
    currentPath: "/accounting-tax",
    title: "Bookkeeping",
    eyebrow: "Bookkeeping",
    description:
      "Keep records cleaner and more usable with weekly or monthly bookkeeping, reconciliations, reporting, payroll support, and audit-ready organization.",
    backgroundImageSrc: versionedAssetPath("/accounting-and-tax.webp"),
    backgroundImageAlt: "Bookkeeping and reporting support in Dubai",
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
      ...toMetadata(legacyServiceMeta["professional-bookkeeping-services-in-dubai"]),
    },
  },
};
