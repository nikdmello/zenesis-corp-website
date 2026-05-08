import type { Metadata } from "next";

export type ServiceDetailConfig = {
  slug: string;
  currentPath: "/business-setup" | "/accounting-tax";
  title: string;
  eyebrow: string;
  description: string;
  backgroundImageSrc: string;
  backgroundImageAlt: string;
  introTitle: string;
  introParagraphs: string[];
  pointsTitle: string;
  points: string[];
  supportTitle?: string;
  supportParagraphs?: string[];
  backHref: "/business-setup" | "/accounting-tax";
  backLabel: string;
  metadata: Metadata;
};

export const serviceDetailPages: Record<string, ServiceDetailConfig> = {
  mainland: {
    slug: "mainland",
    currentPath: "/business-setup",
    title: "Mainland Companies in Dubai.",
    eyebrow: "Mainland",
    description:
      "Support for businesses that want UAE market access, local operating flexibility, and the right mainland structure from the start.",
    backgroundImageSrc: "/business-setup.jpg",
    backgroundImageAlt: "Professionals reviewing mainland setup options in Dubai",
    introTitle: "Mainland setup for direct UAE market access.",
    introParagraphs: [
      "Mainland setup is the right route when your business needs to trade directly in the UAE, sign local contracts, hire staff, and operate with broader flexibility across the country.",
      "Zenesis helps you choose the right mainland structure, align the business activity correctly, and handle the licensing steps so the company is built around how you actually plan to operate.",
    ],
    pointsTitle: "How Zenesis helps with mainland setup",
    points: [
      "Choose the right activity, legal structure, and trade name before the application starts",
      "Prepare the license application, supporting documents, and authority submissions properly",
      "Plan office requirements, establishment steps, and any related visa needs",
      "Stay supported after formation with renewals, amendments, banking, and compliance follow-through",
    ],
    supportTitle: "When to reach out",
    supportParagraphs: [
      "Reach out if you expect local UAE clients, wider commercial activity, staff visas, or a business model that needs direct presence inside the UAE market.",
    ],
    backHref: "/business-setup",
    backLabel: "Back to Business Setup",
    metadata: {
      title: "Mainland | Zenesis Corporation",
      description:
        "Mainland company setup support in Dubai and the UAE through Zenesis Corporation.",
    },
  },
  "free-zones": {
    slug: "free-zones",
    currentPath: "/business-setup",
    title: "Free Zone Companies in Dubai.",
    eyebrow: "Free Zones",
    description:
      "Compare the free zones that matter for your activity, package fit, ownership model, visas, and operating needs.",
    backgroundImageSrc: "/free-zone.jpg",
    backgroundImageAlt: "Business professionals discussing free zone setup options",
    introTitle: "Free zone setup for flexible company formation.",
    introParagraphs: [
      "Free zone setup is often the best fit for founders who want a faster formation route, clearer package options, and a structure that matches consulting, digital, trade, or investor-led business models.",
      "Zenesis helps you compare the zones that actually fit your business instead of choosing based on price alone. The right zone also affects visas, office requirements, banking documents, and how practical the business will be after setup.",
    ],
    pointsTitle: "What Zenesis helps compare",
    points: [
      "Compare zone options by activity, ownership needs, budget, and operational fit",
      "Review package differences around visas, offices, flexi-desks, and renewal costs",
      "Prepare the application, supporting documents, and follow-up required for approval",
      "Get help with the next steps after setup, including visas, banking documents, and renewals",
    ],
    supportTitle: "When to reach out",
    supportParagraphs: [
      "Reach out if you are comparing DMCC, IFZA, Meydan, Dubai South, RAKEZ, or other zones and want a recommendation based on how the business will function after formation.",
    ],
    backHref: "/business-setup",
    backLabel: "Back to Business Setup",
    metadata: {
      title: "Free Zones | Zenesis Corporation",
      description:
        "Free zone company setup support across DMCC, Dubai South, IFZA, Meydan, Shams, RAKEZ, and other UAE free zones.",
    },
  },
  offshore: {
    slug: "offshore",
    currentPath: "/business-setup",
    title: "Offshore Company Setup.",
    eyebrow: "Offshore",
    description:
      "Use offshore structures for holding, ownership, and international arrangements that do not depend on day-to-day local UAE operations.",
    backgroundImageSrc: "/business-setup.jpg",
    backgroundImageAlt: "Advisors discussing offshore structuring options",
    introTitle: "Offshore structures for ownership and international use cases.",
    introParagraphs: [
      "Offshore setup is usually used for holding companies, asset ownership, succession planning, and international arrangements that do not depend on day-to-day trading inside the UAE.",
      "Zenesis helps you decide whether offshore is the right route at all, then guides the jurisdiction choice and setup process so the structure matches the ownership objective behind it.",
    ],
    pointsTitle: "How Zenesis helps with offshore setup",
    points: [
      "Compare the offshore jurisdictions that suit holding, protection, or international ownership goals",
      "Handle incorporation documents, registered-agent coordination, and compliance paperwork",
      "Structure the company around shareholders, assets, and planned international use",
      "Support related banking steps where the structure and use case allow for it",
    ],
    supportTitle: "When to reach out",
    supportParagraphs: [
      "Reach out if your priority is asset holding, group structuring, family ownership planning, or international arrangements rather than local UAE operating activity.",
    ],
    backHref: "/business-setup",
    backLabel: "Back to Business Setup",
    metadata: {
      title: "Offshore | Zenesis Corporation",
      description:
        "Offshore company setup support through JAFZA, RAK ICC, and Ajman offshore routes.",
    },
  },
  "document-attestation-services-in-uae": {
    slug: "document-attestation-services-in-uae",
    currentPath: "/business-setup",
    title: "Document Attestation Services in UAE.",
    eyebrow: "Document Attestation",
    description:
      "Get personal, educational, and commercial documents attested for UAE use with a process that is handled clearly from review through MOFA.",
    backgroundImageSrc: "/contact-consultation.jpg",
    backgroundImageAlt: "Professional document review for UAE attestation support",
    introTitle: "Attestation support for documents that need to be accepted in the UAE.",
    introParagraphs: [
      "If a document was issued outside the UAE, it often needs formal attestation before a UAE authority, employer, university, bank, or registry will accept it.",
      "Zenesis helps you understand which documents need attestation, what order the process should follow, and how to move them through the required legalization and MOFA steps without unnecessary rework.",
    ],
    pointsTitle: "What Zenesis can help process",
    points: [
      "Personal records such as birth, marriage, divorce, police clearance, and death certificates",
      "Educational documents such as degrees, diplomas, transcripts, and training certificates",
      "Commercial documents such as incorporation papers, board resolutions, POAs, invoices, and constitutional records",
    ],
    supportTitle: "When to reach out",
    supportParagraphs: [
      "Reach out before submitting documents to a UAE authority if you want clarity on the attestation path, expected steps, and whether home-country, embassy, or MOFA action is required.",
    ],
    backHref: "/business-setup",
    backLabel: "Back to Business Setup",
    metadata: {
      title: "Document Attestation Services in UAE | Zenesis Corporation",
      description:
        "UAE document attestation support for personal, educational, and commercial records.",
    },
  },
  "open-a-bank-account-easily": {
    slug: "open-a-bank-account-easily",
    currentPath: "/business-setup",
    title: "Open a Bank Account Easily.",
    eyebrow: "Bank Accounts",
    description:
      "Support for UAE and international bank account opening, with KYC preparation and practical coordination around the company structure.",
    backgroundImageSrc: "/professional-meeting.jpg",
    backgroundImageAlt: "Professional meeting about business banking support",
    introTitle: "Bank account support for UAE and international business needs.",
    introParagraphs: [
      "Banking is often where founders lose time after incorporation. The structure may be ready, but the account opening process depends on how clearly the business model, shareholders, documents, and KYC profile are presented.",
      "Zenesis helps you prepare for the account opening process properly, so you approach the bank with cleaner documentation and a stronger explanation of the business.",
    ],
    pointsTitle: "How Zenesis helps with banking support",
    points: [
      "Prepare the company profile, shareholder documents, and KYC pack before submission",
      "Support UAE business account applications and related personal banking requirements",
      "Coordinate with bank relationship teams and help respond to document follow-up",
      "Align the banking approach with mainland, free zone, or offshore company structures",
    ],
    supportTitle: "When to reach out",
    supportParagraphs: [
      "Reach out if you want the formation and banking process handled as one flow rather than dealing with bank requirements after the company is already formed.",
    ],
    backHref: "/business-setup",
    backLabel: "Back to Business Setup",
    metadata: {
      title: "Open a Bank Account Easily | Zenesis Corporation",
      description:
        "UAE and international bank account support through Zenesis Corporation.",
    },
  },
  "uae-company-visa": {
    slug: "uae-company-visa",
    currentPath: "/business-setup",
    title: "UAE Company Visa.",
    eyebrow: "Company Visa",
    description:
      "Plan company visa support in line with business setup, labor approvals, medical steps, Emirates ID, and residency needs.",
    backgroundImageSrc: "/contact-consultation.jpg",
    backgroundImageAlt: "Business visa consultation in the UAE",
    introTitle: "Company visa support tied to how the business will operate.",
    introParagraphs: [
      "A company visa is often one of the first operational priorities after setup because founders and employees need legal residency before the business can function smoothly on the ground.",
      "Zenesis helps you plan the visa process in line with the company structure, labor approvals, medical steps, Emirates ID, and the practical timing of when people need to enter and start operating.",
    ],
    pointsTitle: "How Zenesis helps with company visas",
    points: [
      "Align the visa plan with the trade license, establishment setup, and quota requirements",
      "Manage work permit, entry permit, medical, and Emirates ID coordination",
      "Support founders and employees through residency issuance and follow-through",
      "Help you understand family sponsorship, insurance, and renewal implications after approval",
    ],
    supportTitle: "When to reach out",
    supportParagraphs: [
      "Reach out if the business needs founder or employee residency quickly, or if you want the setup and visa process managed together instead of as separate tasks.",
    ],
    backHref: "/business-setup",
    backLabel: "Back to Business Setup",
    metadata: {
      title: "UAE Company Visa | Zenesis Corporation",
      description:
        "UAE company visa support from setup through approvals, medical, Emirates ID, and visa stamping.",
    },
  },
  "golden-visa-services-in-the-uae": {
    slug: "golden-visa-services-in-the-uae",
    currentPath: "/business-setup",
    title: "Golden Visa Services in the UAE.",
    eyebrow: "Golden Visa",
    description:
      "Support for Golden Visa eligibility, document planning, submissions, family sponsorship, and post-approval follow-through.",
    backgroundImageSrc: "/contact-consultation.jpg",
    backgroundImageAlt: "Client consultation about UAE Golden Visa support",
    introTitle: "Golden Visa support for investors, founders, and professionals.",
    introParagraphs: [
      "Golden Visa applications work best when the category is identified correctly from the start and the documents are built around the real eligibility basis, not assumptions.",
      "Zenesis helps investors, entrepreneurs, professionals, and families understand which route fits, what evidence is needed, and how to move the application forward with fewer delays.",
    ],
    pointsTitle: "How Zenesis helps with Golden Visa support",
    points: [
      "Review eligibility across investor, entrepreneur, professional, and other qualifying categories",
      "Prepare the document set and submission path around the correct category",
      "Support application follow-up, status tracking, and approval steps",
      "Help with family sponsorship and post-approval residency follow-through",
    ],
    supportTitle: "When to reach out",
    supportParagraphs: [
      "Reach out if you want long-term residency in the UAE and need clarity on whether your investment, business role, or professional profile is likely to qualify.",
    ],
    backHref: "/business-setup",
    backLabel: "Back to Business Setup",
    metadata: {
      title: "Golden Visa Services in the UAE | Zenesis Corporation",
      description:
        "Golden Visa support for investors, entrepreneurs, professionals, and families in the UAE.",
    },
  },
  "corporate-tax-registration-in-the-uae": {
    slug: "corporate-tax-registration-in-the-uae",
    currentPath: "/accounting-tax",
    title: "Corporate Tax Registration in the UAE.",
    eyebrow: "Corporate Tax Registration",
    description:
      "Get the corporate tax registration process organized correctly, from eligibility review and document collection through EmaraTax submission support.",
    backgroundImageSrc: "/corporate-tax.jpg",
    backgroundImageAlt: "Corporate tax registration review meeting",
    introTitle: "Registration support before the filing cycle begins.",
    introParagraphs: [
      "Corporate tax registration is more than an online form. The business should first confirm its position, gather the right documents, and register in a way that fits what the company is actually doing.",
      "Zenesis helps you complete registration properly and understand what comes next, so you are not registered without being ready for the filing and record-keeping work that follows.",
    ],
    pointsTitle: "How Zenesis helps with tax registration",
    points: [
      "Review whether the business should register now and what information needs to support that position",
      "Prepare and check the documents needed for EmaraTax registration",
      "Handle portal setup, application submission, and follow-up on status",
      "Explain the filing, record-keeping, and deadline obligations that begin after registration",
    ],
    supportTitle: "When to reach out",
    supportParagraphs: [
      "Reach out if the company is newly formed, operating already, or sitting in a free zone and you want the registration completed cleanly before filing deadlines become an issue.",
    ],
    backHref: "/accounting-tax",
    backLabel: "Back to Accounting & Tax",
    metadata: {
      title: "Corporate Tax Registration in the UAE | Zenesis Corporation",
      description:
        "Corporate tax registration support through eligibility review, EmaraTax setup, submission support, and post-registration guidance.",
    },
  },
  "corporate-tax-filing-services-in-the-uae": {
    slug: "corporate-tax-filing-services-in-the-uae",
    currentPath: "/accounting-tax",
    title: "Corporate Tax Filing Services in the UAE.",
    eyebrow: "Corporate Tax Filing",
    description:
      "Prepare annual corporate tax filings with cleaner records, clearer calculations, FTA portal submission support, and steadier deadline management.",
    backgroundImageSrc: "/corporate-tax.jpg",
    backgroundImageAlt: "Advisors reviewing corporate tax filing work",
    introTitle: "Filing support built around clean calculations and records.",
    introParagraphs: [
      "Corporate tax filing depends on more than sending a return through the portal. The business needs clean figures, defensible calculations, supporting records, and a filing position that can stand up to review.",
      "Zenesis helps you prepare the return around the actual books and tax position of the company, so the filing is accurate, on time, and better supported if questions come later.",
    ],
    pointsTitle: "How Zenesis helps with corporate tax filing",
    points: [
      "Prepare and file the annual corporate tax return through the FTA system",
      "Review taxable income, deductions, and supporting calculations before submission",
      "Track deadlines, payment timing, and filing follow-through",
      "Organize the working papers and records needed to support the filing position",
    ],
    supportTitle: "When to reach out",
    supportParagraphs: [
      "Reach out if the business is already registered and you want a cleaner annual filing process instead of rushing through the return at the deadline.",
    ],
    backHref: "/accounting-tax",
    backLabel: "Back to Accounting & Tax",
    metadata: {
      title: "Corporate Tax Filing Services in the UAE | Zenesis Corporation",
      description:
        "Corporate tax filing support across calculations, FTA portal filing, deadline management, and documentation support.",
    },
  },
  "vat-filing-services-in-the-uae": {
    slug: "vat-filing-services-in-the-uae",
    currentPath: "/accounting-tax",
    title: "VAT Filing Services in the UAE.",
    eyebrow: "VAT Filing",
    description:
      "Keep VAT returns accurate, timely, and better supported by reconciliations, invoice checks, payment follow-through, and audit-ready records.",
    backgroundImageSrc: "/financial-year.jpg",
    backgroundImageAlt: "Professionals handling VAT filing and reconciliation",
    introTitle: "VAT return support for businesses that need steadier compliance.",
    introParagraphs: [
      "VAT filing becomes difficult when invoices, purchases, and records are not being reviewed in a consistent way before the return is due.",
      "Zenesis helps you build a steadier VAT process so returns are prepared from cleaner records, reconciliations are clearer, and the business is in a better position if the FTA asks questions later.",
    ],
    pointsTitle: "How Zenesis helps with VAT filing",
    points: [
      "Prepare the VAT return from your sales, purchases, and supporting records",
      "Reconcile input and output VAT before filing so the position is clearer",
      "Review tax invoices and supporting documents for filing readiness",
      "Support filing deadlines, payment steps, and audit-related follow-up",
    ],
    supportTitle: "When to reach out",
    supportParagraphs: [
      "Reach out if VAT returns are becoming rushed, records are not staying organized between periods, or you want recurring support instead of treating each filing as a last-minute task.",
    ],
    backHref: "/accounting-tax",
    backLabel: "Back to Accounting & Tax",
    metadata: {
      title: "VAT Filing Services in the UAE | Zenesis Corporation",
      description:
        "VAT filing support for UAE businesses across return preparation, reconciliations, payment support, and audit documentation.",
    },
  },
  "professional-bookkeeping-services-in-dubai": {
    slug: "professional-bookkeeping-services-in-dubai",
    currentPath: "/accounting-tax",
    title: "Professional Bookkeeping Services in Dubai.",
    eyebrow: "Bookkeeping",
    description:
      "Keep records cleaner and more usable with weekly or monthly bookkeeping, reconciliations, reporting, payroll support, and audit-ready organization.",
    backgroundImageSrc: "/accounting-and-tax.jpg",
    backgroundImageAlt: "Bookkeeping and reporting support in Dubai",
    introTitle: "Bookkeeping that supports compliance and day-to-day control.",
    introParagraphs: [
      "Bookkeeping is the base layer for VAT, corporate tax, reporting, and daily financial control. If the books are weak, every filing and management decision on top of them becomes harder.",
      "Zenesis helps you keep records current, reconcile accounts properly, and produce reports that are actually useful for compliance and running the business.",
    ],
    pointsTitle: "How Zenesis helps with bookkeeping",
    points: [
      "Maintain weekly or monthly books and reconcile the main bank activity",
      "Prepare reporting such as profit and loss, balance sheet, and cash flow views",
      "Support payroll records and the documentation needed for reviews or audits",
      "Work with the accounting tools your business already uses, including QuickBooks, Zoho Books, Tally, and Excel",
    ],
    supportTitle: "When to reach out",
    supportParagraphs: [
      "Reach out if the business has outgrown ad hoc spreadsheets, the books are always behind, or you want cleaner records before tax filings and reporting pressure build up.",
    ],
    backHref: "/accounting-tax",
    backLabel: "Back to Accounting & Tax",
    metadata: {
      title: "Professional Bookkeeping Services in Dubai | Zenesis Corporation",
      description:
        "Professional bookkeeping support in Dubai across recurring records, reporting, payroll, and audit-ready organization.",
    },
  },
};
