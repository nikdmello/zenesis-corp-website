import { versionedAssetPath } from "@/lib/asset-paths";

const insightImageVersion = "20260728a";

export type InsightSection = {
  title: string;
  paragraphs?: Array<
    | string
    | {
        text: string;
        sourceIndexes?: number[];
        inlineLinks?: Array<{
          text: string;
          href: string;
        }>;
      }
  >;
  bullets?: string[];
  numberedBullets?: string[];
  callout?: {
    type: "deadline" | "definition" | "warning" | "action";
    title: string;
    text: string;
  };
  table?: {
    columns: string[];
    rows: string[][];
  };
};

export type InsightPost = {
  slug: string;
  category: string;
  title: string;
  displayTitle?: string;
  description: string;
  dateLabel: string;
  author: string;
  heroImageSrc: string;
  heroImageAlt: string;
  heroImageClassName?: string;
  heroTitleClassName?: string;
  keyTakeaways?: string[];
  relatedServiceHrefs?: string[];
  relatedInsightSlugs?: string[];
  sections: InsightSection[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  closingParagraphs?: string[];
  closingTitle?: string;
  closingCta?: string;
};

export type InsightSource = {
  title: string;
  publisher: string;
  href: string;
};

export type InsightCredibility = {
  updatedLabel: string;
  sources: InsightSource[];
};

export const insightAuthorProfiles = {
  "Cecilia D'Cunha": {
    credentials: "BCom, LLB, ACS",
    role: "Founder, Zenesis Corporation",
    profileHref: "/about",
    imageSrc: versionedAssetPath("/people/Cecilia_DCunha.webp"),
    bio: "A qualified Chartered Secretary with degrees in Commerce and Law and more than 30 years of experience across offshore incorporation, UAE company setup, and corporate compliance.",
  },
  "Glenita D'Souza": {
    credentials: "CA Intermediate (IPCC), BCom",
    role: "Accounts Manager and Compliance Officer",
    profileHref: "/about",
    imageSrc: versionedAssetPath("/people/Glenita_D'Souza.webp"),
    bio: "Glenita oversees management accounts, bookkeeping, VAT and corporate tax compliance, UAE free zone company formations, and HR consultancy support for clients at Zenesis.",
  },
} as const;

const sourceLibrary = {
  corporateTaxGeneral: {
    title: "General Corporate Tax Guide",
    publisher: "UAE Federal Tax Authority",
    href: "https://tax.gov.ae/DataFolder/Files/Guides/CT/CT%20General%20Guide%20-%20EN%20-%2010%2009%202023.pdf",
  },
  corporateTaxReturns: {
    title: "Corporate Tax Guide: Tax Returns",
    publisher: "UAE Federal Tax Authority",
    href: "https://www.tax.gov.ae/Datafolder/Files/Guides/CT/CT-Returns-EN-11-11-2024.pdf",
  },
  corporateTaxRecords: {
    title: "FTA reminder on Corporate Tax records and filing obligations",
    publisher: "UAE Federal Tax Authority",
    href: "https://tax.gov.ae/en/media.centre/news/pr.28082025.aspx",
  },
  corporateTaxRegistrations: {
    title: "Corporate Tax registrations exceed 640,000",
    publisher: "UAE Federal Tax Authority",
    href: "https://tax.gov.ae/en/media.centre/news/federal.tax.authority.record.volume.of.corporate.tax.returns.reflects.efficiency.of.legislative.and.procedural.systems.aspx",
  },
  taxGroups: {
    title: "Corporate Tax Guide: Tax Groups",
    publisher: "UAE Federal Tax Authority",
    href: "https://tax.gov.ae/Datafolder/Files/Guides/CT/Tax%20Groups%20-%2008%2001%202024.pdf",
  },
  freeZoneTax: {
    title: "Corporate Tax Guide: Free Zone Persons",
    publisher: "UAE Federal Tax Authority",
    href: "https://tax.gov.ae/Datafolder/Files/Guides/CT/Free%20Zone%20Persons%20-%2020%2005%202024%20final%20for%20GCD.pdf",
  },
  mainlandSetup: {
    title: "Steps to start a business on the mainland",
    publisher: "The Official Platform of the UAE Government",
    href: "https://u.ae/en/information-and-services/business/doing-business-on-the-mainland/steps-to-start-a-business-on-the-mainland",
  },
  freeZoneSetup: {
    title: "Starting a business in a free zone",
    publisher: "The Official Platform of the UAE Government",
    href: "https://u.ae/en/information-and-services/business/doing-business-in-free-zones/starting-a-business-in-a-free-zone",
  },
  goldenVisa: {
    title: "Golden visa eligibility and benefits",
    publisher: "The Official Platform of the UAE Government",
    href: "https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa",
  },
  icpGoldenVisa: {
    title: "UAE Golden Residency categories and requirements",
    publisher: "Federal Authority for Identity, Citizenship, Customs & Port Security",
    href: "https://icp.gov.ae/en/uae-golden-residency/",
  },
  icpGreenResidency: {
    title: "Green Residency",
    publisher: "Federal Authority for Identity, Citizenship, Customs & Port Security",
    href: "https://icp.gov.ae/en/green-residency/",
  },
  eInvoicingPortal: {
    title: "UAE eInvoicing programme",
    publisher: "UAE Ministry of Finance",
    href: "https://mof.gov.ae/en/about-us/initiatives/einvoicing/",
  },
  eInvoicingImplementation: {
    title: "Ministerial Decision No. 244 of 2025",
    publisher: "UAE Ministry of Finance",
    href: "https://mof.gov.ae/wp-content/uploads/2025/09/Ministerial-Decision-No.-244-of-2025-on-the-Implementation-of-the-Electronic-Invoicing-System.pdf",
  },
  eInvoicingAmendment: {
    title: "Ministerial Resolution No. 66 of 2026",
    publisher: "UAE Ministry of Finance",
    href: "https://mof.gov.ae/wp-content/uploads/2026/05/Ministerial-Resolution-No.-66-of-2026-Amending-Certain-Provisions-of-Ministerial-Resolution-No.-244-of-2025-Regarding-the-Implementation-of-the-Electronic-Invoicing-System-En-20260514.pdf",
  },
  eInvoicingPenalties: {
    title: "Cabinet Decision No. 106 of 2025",
    publisher: "UAE Ministry of Finance",
    href: "https://mof.gov.ae/wp-content/uploads/2025/11/Cabinet-Decision-Violations-and-Penalties-eInvoicing-24.11.25.pdf",
  },
  eInvoicingProviders: {
    title: "Pre-approved eInvoicing Service Providers",
    publisher: "UAE Ministry of Finance",
    href: "https://mof.gov.ae/en/about-us/initiatives/einvoicing/pre-approved-einvoicing-service-providers/",
  },
  vatRegistration: {
    title: "Value Added Tax (VAT) Registration",
    publisher: "UAE Federal Tax Authority",
    href: "https://www.tax.gov.ae/en/services/vat.registration.aspx",
  },
  corporateTaxRegistration: {
    title: "Corporate Tax Registration",
    publisher: "UAE Federal Tax Authority",
    href: "https://tax.gov.ae/en/services/corporate.tax.registration.aspx",
  },
  corporateTaxRegistrationTimeline: {
    title: "Specified timeframes for Corporate Tax registration",
    publisher: "UAE Federal Tax Authority",
    href: "https://tax.gov.ae/en/media.centre/news/federal.tax.authority.issues.new.decision.on.specified.timeframes.for.corporate.tax.registration.aspx",
  },
  establishmentCard: {
    title: "Issuing an Establishment Card",
    publisher: "Federal Authority for Identity, Citizenship, Customs & Port Security",
    href: "https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e6d",
  },
  privateSectorResidencePermit: {
    title: "Issuing residence permits for the private sector",
    publisher: "General Directorate of Residency and Foreigners Affairs Dubai",
    href: "https://gdrfad.gov.ae/en/services/bf4095ea-56e2-11ea-0320-0050569629e8",
  },
  smallBusinessReliefFiling: {
    title: "Small Business Relief filing reminder",
    publisher: "UAE Federal Tax Authority",
    href: "https://tax.gov.ae/en/media.centre/news/fta.confirms.taxable.persons.eligible.for.the.small.business.relief.must.submit.simplified.corporate.tax.returns.within.prescribed.legal.deadline.aspx",
  },
  taxProceduresLaw: {
    title: "Federal Decree-Law No. 28 of 2022 on Tax Procedures",
    publisher: "UAE Ministry of Finance",
    href: "https://mof.gov.ae/wp-content/uploads/2025/07/Federal-Decree-Law-No.-28-of-2022.pdf",
  },
  taxProceduresRegulation: {
    title: "Cabinet Decision No. 74 of 2023 on the Executive Regulation of the Tax Procedures Law",
    publisher: "UAE Ministry of Finance",
    href: "https://mof.gov.ae/wp-content/uploads/2023/07/Cabinet-Decision-No-74-of-2023-On-Executive-Regulations-of-Federal-Decree-Law-No.-28-of-2023-Tax-Procedures-Law.pdf",
  },
  corporateTaxLaw: {
    title: "Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses",
    publisher: "UAE Ministry of Finance",
    href: "https://mof.gov.ae/wp-content/uploads/2022/12/Federal-Decree-Law-No.-47-of-2022-EN.pdf",
  },
  beneficialOwnerProcedures: {
    title: "Cabinet Decision No. 109 of 2023 on Regulating the Beneficial Owner Procedures",
    publisher: "UAE Ministry of Economy and Tourism",
    href: "https://www.moet.gov.ae/documents/20121/0/Cabinet%2BDecision%2B109-2023%2BEnglish%2BVersion%2B06062024.pdf/f7138fc2-fe12-cef3-077b-b4c49c12eabd",
  },
  economicSubstanceAmendment: {
    title: "Cancellation of Economic Substance reporting requirements after 2022",
    publisher: "UAE Ministry of Finance",
    href: "https://mof.gov.ae/en/news/ministry-of-finance-announces-amendment-to-cabinet-decision-on-economic-substance-requirements/",
  },
} satisfies Record<string, InsightSource>;

const insightCredibilityBySlug: Record<string, InsightCredibility> = {
  "just-registered-uae-company-what-comes-next": {
    updatedLabel: "August 12, 2026",
    sources: [
      sourceLibrary.vatRegistration,
      sourceLibrary.corporateTaxRegistration,
      sourceLibrary.corporateTaxRegistrationTimeline,
      sourceLibrary.establishmentCard,
      sourceLibrary.privateSectorResidencePermit,
      sourceLibrary.beneficialOwnerProcedures,
      sourceLibrary.economicSubstanceAmendment,
    ],
  },
  "uae-mandatory-e-invoicing-deadlines-guide": {
    updatedLabel: "July 29, 2026",
    sources: [
      sourceLibrary.eInvoicingPortal,
      sourceLibrary.eInvoicingImplementation,
      sourceLibrary.eInvoicingAmendment,
      sourceLibrary.eInvoicingPenalties,
      sourceLibrary.eInvoicingProviders,
    ],
  },
  "corporate-tax-mistakes-trigger-audits-uae": {
    updatedLabel: "August 17, 2026",
    sources: [
      sourceLibrary.taxProceduresLaw,
      sourceLibrary.taxProceduresRegulation,
      sourceLibrary.corporateTaxLaw,
      sourceLibrary.corporateTaxGeneral,
      sourceLibrary.corporateTaxReturns,
      sourceLibrary.corporateTaxRecords,
      sourceLibrary.freeZoneTax,
      sourceLibrary.taxGroups,
    ],
  },
  "business-consultant-beyond-company-registration": {
    updatedLabel: "August 10, 2026",
    sources: [sourceLibrary.mainlandSetup, sourceLibrary.freeZoneSetup, sourceLibrary.corporateTaxGeneral, sourceLibrary.beneficialOwnerProcedures, sourceLibrary.economicSubstanceAmendment],
  },
  "why-first-time-entrepreneurs-are-choosing-uae": {
    updatedLabel: "July 22, 2026",
    sources: [sourceLibrary.mainlandSetup, sourceLibrary.freeZoneSetup, sourceLibrary.icpGreenResidency],
  },
  "complete-guide-to-corporate-tax-groups-uae": {
    updatedLabel: "July 22, 2026",
    sources: [sourceLibrary.taxGroups, sourceLibrary.corporateTaxGeneral],
  },
  "financial-year-2026-uae-compliance-guide": {
    updatedLabel: "September 3, 2026",
    sources: [sourceLibrary.corporateTaxReturns, sourceLibrary.corporateTaxRecords, sourceLibrary.corporateTaxGeneral, sourceLibrary.smallBusinessReliefFiling],
  },
  "uae-corporate-tax-filing-deadlines-2026": {
    updatedLabel: "September 3, 2026",
    sources: [sourceLibrary.corporateTaxReturns, sourceLibrary.corporateTaxRecords, sourceLibrary.smallBusinessReliefFiling],
  },
  "uae-corporate-tax-record-keeping-requirements": {
    updatedLabel: "July 22, 2026",
    sources: [sourceLibrary.corporateTaxRecords, sourceLibrary.corporateTaxGeneral],
  },
  "uae-free-zone-corporate-tax-rules-clarified-2026": {
    updatedLabel: "July 22, 2026",
    sources: [sourceLibrary.freeZoneTax, sourceLibrary.freeZoneSetup],
  },
  "uae-corporate-tax-registrations-cross-640000-businesses": {
    updatedLabel: "July 22, 2026",
    sources: [sourceLibrary.corporateTaxRegistrations, sourceLibrary.corporateTaxGeneral, sourceLibrary.corporateTaxReturns],
  },
  "uae-visa-reforms-2025-entrepreneurs-expats": {
    updatedLabel: "July 22, 2026",
    sources: [sourceLibrary.icpGreenResidency, sourceLibrary.goldenVisa, sourceLibrary.icpGoldenVisa],
  },
  "business-setup-mistakes-dubai": {
    updatedLabel: "July 22, 2026",
    sources: [sourceLibrary.mainlandSetup, sourceLibrary.freeZoneSetup, sourceLibrary.corporateTaxGeneral],
  },
  "complete-dubai-golden-visa-guide": {
    updatedLabel: "July 31, 2026",
    sources: [sourceLibrary.icpGoldenVisa, sourceLibrary.goldenVisa],
  },
};

export function getInsightCredibility(slug: string) {
  return insightCredibilityBySlug[slug];
}

export const insightPosts: InsightPost[] = [
  {
    slug: "just-registered-uae-company-what-comes-next",
    category: "Business Setup",
    title: "Just Registered Your UAE Company? Here's What Comes Next",
    displayTitle: "What to Do After Registering Your UAE Company",
    description:
      "A first 90-day checklist for immigration, visas, banking, Corporate Tax, bookkeeping, VAT, and recurring obligations after UAE company registration.",
    dateLabel: "August 12, 2026",
    author: "Cecilia D'Cunha",
    heroImageSrc: versionedAssetPath("/insights/just-registered-uae-company-what-comes-next.webp"),
    heroImageAlt: "UAE business owner planning the first operational steps after company registration",
    heroImageClassName: "object-center",
    keyTakeaways: [
      "After the trade licence is issued, the operational sequence starts with the establishment card and visa process, followed by banking and Corporate Tax registration.",
      "Bookkeeping should begin with the first transaction so records remain complete and the business can monitor when taxable supplies cross the AED 375,000 VAT threshold.",
      "Keep the company's records and compliance calendar current after registration.",
    ],
    relatedServiceHrefs: [
      "/uae-company-visa",
      "/open-a-bank-account-easily",
      "/corporate-tax-registration-in-the-uae",
      "/professional-bookkeeping-services-in-dubai",
      "/vat-filing-services-in-the-uae",
      "/accounting-tax",
      "/corporate-support",
    ],
    relatedInsightSlugs: [
      "business-consultant-beyond-company-registration",
      "business-setup-mistakes-dubai",
      "uae-corporate-tax-filing-deadlines-2026",
      "uae-corporate-tax-record-keeping-requirements",
    ],
    sections: [
      {
        title: "The First 30 to 90 Days After UAE Company Registration",
        paragraphs: [
          "You have your UAE trade licence. The company name is registered, the paperwork is filed, and it finally feels real. Now comes the operational sequence that turns a licence into a working business. Some steps are mandatory, while others depend on your activity, turnover, staffing plans, and company structure. Getting the order wrong tends to cost more time than getting it right the first time.",
          "This is a checklist for the next 30 to 90 days, not a formation guide. If you are still deciding between mainland and free zone, see our guide on mainland versus free zone instead.",
        ],
      },
      {
        title: "Quick Answer",
        paragraphs: ["In this order:"],
        numberedBullets: [
          "Obtain the establishment card and start the visa process.",
          "Open the corporate bank account.",
          "Register for Corporate Tax within the deadline that applies to the entity.",
          "Maintain bookkeeping records from the first transaction.",
          "Register for VAT when taxable supplies and imports cross AED 375,000 or are expected to cross that threshold within the next 30 days.",
          "Keep renewals, amendments, and company records on the compliance calendar.",
        ],
      },
      {
        title: "Start With the Establishment Card and Visas",
        paragraphs: [
          {
            text: "The establishment card is issued by the Federal Authority for Identity, Citizenship, Customs and Port Security. This electronic card records your trade name, licence number, partners, and activity type, and is a prerequisite for visa processing. It requires a valid trade licence and the Emirates ID, or Unified Number for those without one yet, of an authorised signatory. For free zone companies, the application goes through the specific free zone authority rather than directly through ICP.",
            sourceIndexes: [4],
          },
          {
            text: "For the cited ICP private-establishment service route, published government fees run to roughly AED 2,300 in total, with application, annual issuance, smart services, and system subscription fees combined. ICP states a service completion time of two days. The applicable route, fees, and timing can differ for free zones and other establishment categories.",
            sourceIndexes: [4],
          },
        ],
        bullets: [
          "Obtain the establishment card through the applicable authority route.",
          "Confirm the labour quota and work permit requirements for the planned team.",
          "Complete the entry permit, medical fitness test, and Emirates ID application for each employee.",
          "Complete residence permit issuance through the authority responsible for the emirate and entity.",
        ],
      },
      {
        title: "Understand Residence Permit Fees and Timing",
        paragraphs: [
          "For budgeting, allow approximately AED 6,000 to AED 8,000 per person for the residence visa process. This planning range is based on indicative Meydan Free Zone costs of approximately AED 3,500 for the entry permit, AED 1,500 for an in-country change of status when required, and AED 1,000 for the medical examination and Emirates ID, plus applicable professional service fees. Without a change of status, the underlying process cost is lower. This is not a universal UAE price: the final amount depends on the free zone or authority, visa category, applicant circumstances, insurance and work-permit requirements, and the professional support required.",
          "Allow approximately two to four days for the residence visa process once the required application stages and documents are in place. This is an indicative working timeframe, not a guarantee. Timing remains authority and case dependent and can change.",
        ],
      },
      {
        title: "Open Your Corporate Bank Account",
        paragraphs: [
          "A trade licence does not come with a bank account attached. UAE banks commonly request documents such as your trade licence, Memorandum of Association, shareholder and signatory Emirates ID or passport copies, and an explanation of your business activity and expected source of funds as part of their KYC review. Exact requirements vary by bank, activity, ownership structure, and risk profile.",
          "Bank account approval is solely at the bank's discretion after KYC, compliance, and risk review. No adviser, including Zenesis, can guarantee approval or a fixed timeline, and a trade licence alone does not guarantee an account. Companies with a clear, well-documented business activity and complete KYC paperwork tend to move through review faster than companies that submit incomplete files.",
          "See our guide on opening a UAE business bank account for a fuller breakdown of what banks look for.",
        ],
        callout: {
          type: "warning",
          title: "A licence does not guarantee a bank account",
          text: "Prepare the KYC narrative and supporting evidence carefully, and avoid relying on guaranteed-approval claims.",
        },
      },
      {
        title: "Complete Corporate Tax Registration",
        paragraphs: [
          {
            text: "Every juridical person subject to UAE Corporate Tax must register with the FTA and obtain a Corporate Tax Registration Number. For newly incorporated UAE juridical persons, the general rule under FTA Decision No. 3 of 2024 is that an entity incorporated, established, or recognised on or after 1 March 2024 must apply within three months of incorporation, establishment, or recognition. Deadlines can vary by entity type and individual circumstance, so confirm the exact deadline that applies through EmaraTax.",
            sourceIndexes: [2, 3],
          },
          {
            text: "The FTA does not charge a government application fee for Corporate Tax registration, but professional service fees apply when Zenesis prepares and submits the application. The FTA states roughly 25 minutes to submit the application and 20 business days to process it, and missing the deadline carries an AED 10,000 administrative penalty. A separate FTA initiative waives that penalty if the first Tax Return, or Annual Declaration for exempt persons, is submitted within seven months of the end of the first tax period, whether or not the penalty has already been charged or paid.",
            sourceIndexes: [2],
          },
          {
            text: "For freelancers and sole establishments, natural persons must register for Corporate Tax only if business revenue exceeds AED 1,000,000 in a calendar year, excluding salary, private investment income, and real-estate investment income. UAE branches of a UAE parent company do not need to register separately because they are treated as an extension of the parent.",
            sourceIndexes: [2],
          },
        ],
      },
      {
        title: "Maintain Bookkeeping Records From Day One",
        paragraphs: [
          "It is tempting to treat bookkeeping as something to sort out later, once the business has real transaction volume. The problem is that VAT and Corporate Tax registration both depend on accurate revenue figures from your very first transaction, not from whenever you eventually get around to organising your records. Reconstructing six months of invoices under deadline pressure is a common and avoidable source of stress.",
          "Setting up clean records early, whether in QuickBooks, Zoho Books, Tally, or even a well-organised spreadsheet to start, makes the next steps considerably easier. See our bookkeeping services page for what ongoing support looks like.",
        ],
      },
      {
        title: "Know Your VAT Registration Trigger",
        paragraphs: [
          {
            text: "Per the Federal Tax Authority, VAT registration is mandatory for UAE-resident businesses once the value of taxable supplies and imports exceeds AED 375,000 over the past 12 months, or is expected to exceed that threshold within the next 30 days. Voluntary registration is available once taxable supplies, imports, or taxable expenses exceed AED 187,500. Non-resident businesses making taxable supplies in the UAE face a different, stricter rule with no threshold, unless another UAE party is responsible for settling the VAT.",
            sourceIndexes: [1],
          },
          {
            text: "Once the obligation to register arises, the application must be submitted within 30 days, or a late registration penalty applies. The FTA does not charge a government application fee for VAT registration, but professional service fees apply when Zenesis assesses, prepares, and submits the application. Registration is completed through the EmaraTax platform, and the FTA states an estimated 45 minutes to submit the application and 20 business days to process it.",
            sourceIndexes: [1],
          },
          "This is general information about the registration requirement itself, not a substitute for advice on your specific filing position. Zenesis offers VAT registration support alongside ongoing filing, from assessing whether the obligation applies through preparing and submitting the EmaraTax registration application itself.",
        ],
        callout: {
          type: "action",
          title: "Monitor turnover continuously",
          text: "VAT registration depends on taxable activity and expected turnover, not simply the date on which the company was incorporated.",
        },
      },
      {
        title: "Keep Renewals and Amendments on Your Calendar",
        paragraphs: [
          "Once the initial setup is done, a few things stay on a recurring clock: trade licence renewal, establishment card renewal, VAT and Corporate Tax filing cycles once registered, and any amendment, such as a change of activity, a new shareholder, or an address change, that needs to be reflected with the relevant authority.",
          "Some recurring renewals may fall later, but deadlines and company changes should be recorded from the outset because an amendment or filing obligation can require earlier action. See our accounting and tax page for how ongoing support is structured.",
        ],
      },
      {
        title: "Complete the Corporate Housekeeping",
        paragraphs: [
          {
            text: "The company's initial beneficial-owner information and KYC records are normally confirmed during the formation process before registration is completed. After registration, the ongoing task is to keep the UBO register and related company records accurate and update the relevant authority when ownership or control changes. Cabinet Decision No. 109 of 2023 sets out the UAE beneficial-owner procedures, including ownership or control tests and the records a legal person must maintain.",
            sourceIndexes: [6],
          },
          {
            text: "Economic Substance Regulations still appear in many older UAE setup checklists, but the Ministry of Finance cancelled ESR notification and reporting requirements for financial years ending after 31 December 2022. A company can still have unresolved obligations for earlier periods and must respond to authority information or amendment requests and settle any applicable penalties. For a newly registered 2026 company, ESR should therefore be checked for historical or exceptional relevance, not presented as a routine new filing.",
            sourceIndexes: [7],
          },
          "Zenesis supports beneficial-owner records and filings, corporate registers, resolutions, and case-specific compliance reviews through its corporate support service.",
        ],
        callout: {
          type: "warning",
          title: "Do not rely on an outdated ESR checklist",
          text: "Current UBO obligations and historical ESR matters are separate. Confirm the company's actual position rather than assuming both require a new filing.",
        },
      },
      {
        title: "Post-Registration Sequence at a Glance",
        table: {
          columns: ["Step", "What it covers", "Published fee or position", "Timing or trigger"],
          rows: [
            ["Establishment card", "Prerequisite for visa processing", "Approximately AED 2,300 total", "ICP states 2 days"],
            ["Residence visa process, per person", "Entry permit, status change when required, medical examination, Emirates ID, and professional support", "Approximately AED 6,000 to AED 8,000 based on an indicative Meydan Free Zone route", "2 to 4 days; authority and case dependent"],
            ["Corporate bank account", "KYC review and source of funds", "Bank dependent; not government set", "No fixed timeline; bank discretion"],
            ["Corporate Tax registration", "Newly incorporated entities: within 3 months of incorporation", "No FTA application fee; professional service fees apply (AED 10,000 penalty if late)", "Approximately 20 business days (FTA)"],
            ["Bookkeeping", "Maintain complete transaction and supporting records", "System and support dependent", "From the first transaction"],
            ["VAT registration", "Required once taxable supplies and imports cross AED 375,000 or are expected to do so within 30 days", "No FTA application fee; professional service fees apply", "Apply within 30 days once the obligation arises"],
            ["UBO records", "Maintain the beneficial-owner details completed during formation", "Authority dependent", "Update when ownership or control changes"],
            ["Economic Substance", "Earlier-period ESR obligations or authority follow-up", "Not applicable to a routine current filing", "Review only for historical or exceptional relevance"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "How long does it take to open a UAE corporate bank account?",
        answer:
          "There is no fixed or guaranteed timeline. The bank decides after completing its own KYC, compliance, and risk review, and a trade licence does not guarantee approval.",
      },
      {
        question: "Do I need to register for VAT immediately after incorporation?",
        answer:
          "Only if taxable supplies and imports already exceed AED 375,000 over the past 12 months, or are expected to cross that threshold within the next 30 days. Below that, voluntary registration is available from AED 187,500. If neither applies yet, immediate registration is not required.",
      },
      {
        question: "What happens if I miss the Corporate Tax registration deadline?",
        answer:
          "An AED 10,000 administrative penalty applies. The FTA's penalty-waiver initiative can exempt a person who submits the first Tax Return, or Annual Declaration where applicable, within seven months of the end of the first tax period.",
      },
      {
        question: "What do I need before I can apply for my first employee's visa?",
        answer:
          "A valid trade licence and an approved establishment card from ICP, or from the relevant free zone authority for free zone companies, come first. Labour quota, entry permit, medical test, and Emirates ID follow from there.",
      },
      {
        question: "How long is a UAE residence permit valid?",
        answer:
          "Validity depends on the permit category and sponsor. For the Dubai private-sector route described above, GDRFA publishes a two-year renewable permit; other UAE residence permits may have different validity periods.",
      },
      {
        question: "Does a newly registered UAE company still need to file an ESR notification or report?",
        answer:
          "Not for financial years ending after 31 December 2022. The UAE Ministry of Finance cancelled those ESR notification and reporting requirements. Earlier-period obligations, authority requests, amendments, and penalties can still need attention, so an older company should confirm its historical position.",
      },
    ],
    closingTitle: "Plan the first 90 days",
    closingParagraphs: [
      "Put immigration, banking, bookkeeping, tax, UBO records, and renewals on one dated plan after registration.",
    ],
    closingCta:
      "Book a consultation with Zenesis to walk through banking readiness, visas, bookkeeping, and your VAT and Corporate Tax registration timeline for your specific company.",
  },
  {
    slug: "uae-mandatory-e-invoicing-deadlines-guide",
    category: "Accounting and Tax",
    title: "UAE Mandatory E-Invoicing: Deadlines, Penalties, and What Businesses Need to Do Now",
    displayTitle: "UAE E-Invoicing Deadlines and Penalties",
    description:
      "UAE e-invoicing becomes mandatory in phases from 2027. See the confirmed deadlines, administrative penalties, scope, and preparation businesses should start now.",
    dateLabel: "July 29, 2026",
    author: "Glenita D'Souza",
    heroImageSrc: versionedAssetPath("/insights/uae-e-invoicing-guide.webp", insightImageVersion),
    heroImageAlt: "UAE finance professional reviewing structured electronic invoice data in a Dubai office",
    heroImageClassName: "object-[68%_center]",
    heroTitleClassName:
      "w-full text-[2.45rem] leading-[1.06] sm:text-[2.9rem] md:text-[3.25rem] xl:text-[3.4rem]",
    keyTakeaways: [
      "Businesses with annual revenue of AED 50 million or more must appoint an Accredited Service Provider by 30 October 2026 and implement e-invoicing by 1 January 2027.",
      "Businesses below the AED 50 million threshold must appoint a provider by 31 March 2027 and implement by 1 July 2027.",
      "A PDF or emailed invoice is not an e-invoice under the UAE system; the required invoice is structured data exchanged through accredited providers.",
    ],
    relatedServiceHrefs: [
      "/accounting-tax",
      "/vat-filing-services-in-the-uae",
      "/corporate-tax-filing-services-in-the-uae",
    ],
    relatedInsightSlugs: [
      "financial-year-2026-uae-compliance-guide",
      "uae-corporate-tax-record-keeping-requirements",
      "uae-corporate-tax-filing-deadlines-2026",
      "uae-free-zone-corporate-tax-rules-clarified-2026",
    ],
    sections: [
      {
        title: "UAE E-Invoicing in 2026 and 2027",
        paragraphs: [
          {
            text: "The UAE is rolling out mandatory electronic invoicing in phases between 2026 and 2027. The rules are set out in Ministerial Decision No. 244 of 2025, and the Ministry of Finance has since confirmed a change to one of the key dates. As of 29 July 2026, the first deadline is about three months away.",
            sourceIndexes: [2, 3],
          },
          "This guide sets out exactly what has been decided, what changed recently, what the penalties are for missing a deadline, and what to do depending on the size of your business. Where a figure is likely to change over time, the live official source should always be checked.",
        ],
      },
      {
        title: "Quick Answer",
        bullets: [
          "E-invoicing becomes mandatory for businesses with annual revenue of AED 50 million or more from 1 January 2027. These businesses must appoint an Accredited Service Provider by 30 October 2026.",
          "Businesses with revenue below AED 50 million have until 1 July 2027 to go live, with an Accredited Service Provider appointment deadline of 31 March 2027.",
          "Government entities go live from 1 October 2027, also with an Accredited Service Provider deadline of 31 March 2027.",
          "Business-to-consumer transactions are excluded for now, until a separate Ministerial decision brings them into scope.",
          "Missing a deadline carries administrative penalties starting at AED 5,000 per month of delay, with additional per-invoice and per-day penalties for other failures.",
          "The pilot programme began on 1 July 2026, and voluntary implementation became available from the same date. These are distinct routes.",
        ],
      },
      {
        title: "What Is E-Invoicing Under the UAE System?",
        paragraphs: [
          {
            text: "An e-invoice is not a PDF, a scanned copy, or an emailed invoice. Under the Ministry of Finance's definition, it is a structured invoice, issued and exchanged electronically, that can be processed automatically by both the buyer's and the supplier's systems, and reported electronically to the Federal Tax Authority.",
            sourceIndexes: [1],
          },
          {
            text: "The UAE has adopted a Decentralized Continuous Transaction Control and Exchange model built on the international Peppol network using a UAE-specific data format called PINT AE. Official materials describe the commercial exchange as a four-corner model, with the Federal Tax Authority acting as the reporting endpoint often referred to as the fifth corner. The process works as follows:",
            sourceIndexes: [1],
          },
        ],
        callout: {
          type: "definition",
          title: "A PDF is not an e-invoice",
          text: "The UAE requirement is for structured invoice data that systems can exchange and process automatically, not simply a digital-looking document.",
        },
        bullets: [
          "Corner 1 is the supplier, which sends invoice data to its Accredited Service Provider at Corner 2.",
          "Corner 2 validates and converts the data into the UAE's standard e-invoice format, then transmits it to the buyer's Accredited Service Provider at Corner 3.",
          "Corner 3 delivers the invoice to the buyer at Corner 4.",
          "In parallel, the required tax data is reported to the Federal Tax Authority, giving the authority visibility into transactions without placing it directly in the commercial exchange path.",
          "Businesses do not connect to the FTA directly. They connect through an Accredited Service Provider, which handles validation, transmission, and tax reporting.",
        ],
      },
      {
        title: "Who Does This Apply To, and From When?",
        paragraphs: [
          {
            text: "Mandatory implementation is set out in Article 5 of Ministerial Decision No. 244 of 2025 and is phased by annual revenue and entity type.",
            sourceIndexes: [2],
          },
          {
            text: "Revenue is defined as gross income for the most recent accounting period, based on financial statements prepared under applicable UAE legislation, or other documentation acceptable to the FTA if financial statements are not available.",
            sourceIndexes: [2],
          },
        ],
        callout: {
          type: "deadline",
          title: "The first appointment deadline is 30 October 2026",
          text: "Phase 1 businesses should have an Accredited Service Provider selected and appointed by this date. Their mandatory implementation date remains 1 January 2027.",
        },
        table: {
          columns: ["Phase", "Who It Covers", "ASP Appointment Deadline", "Mandatory Go-Live"],
          rows: [
            ["Phase 1", "Annual revenue of AED 50 million or more", "30 October 2026", "1 January 2027"],
            ["Phase 2", "Annual revenue below AED 50 million", "31 March 2027", "1 July 2027"],
            ["Phase 3", "Government entities", "31 March 2027", "1 October 2027"],
          ],
        },
      },
      {
        title: "What Changed Recently?",
        paragraphs: [
          {
            text: "The Phase 1 Accredited Service Provider deadline was originally set at 31 July 2026. Ministerial Resolution No. 66 of 2026 replaced that date with 30 October 2026. The mandatory 1 January 2027 go-live date for Phase 1 is unchanged.",
            sourceIndexes: [3],
          },
          {
            text: "Business-to-consumer transactions are not currently subject to the system. Article 5(2) of Ministerial Decision No. 244 of 2025 excludes them until a future decision issued by the Minister. This is a temporary carve-out, not a permanent exemption, so businesses that deal mostly with consumers should not assume it will remain indefinitely.",
            sourceIndexes: [2],
          },
          "Any business could begin voluntary implementation from 1 July 2026, which is also when the government's pilot programme began. Voluntary implementation and participation in the selected pilot group are separate.",
        ],
        callout: {
          type: "warning",
          title: "B2C is outside the system for now, not forever",
          text: "Consumer transactions are temporarily carved out until a future Ministerial decision. Businesses should not design a permanent compliance position around the current exclusion.",
        },
      },
      {
        title: "What Are the Penalties for Non-Compliance?",
        paragraphs: [
          {
            text: "Cabinet Decision No. 106 of 2025 sets out the administrative penalties for violations of the e-invoicing legislation. These do not apply to businesses participating on a voluntary basis before they become mandatorily subject to the system.",
            sourceIndexes: [4],
          },
          "These are administrative penalties specific to e-invoicing, separate from existing VAT and corporate tax penalty regimes.",
        ],
        table: {
          columns: ["Failure", "Administrative Penalty"],
          rows: [
            ["Failure to implement the system or appoint an ASP on time", "AED 5,000 for each month or part of a month of delay"],
            ["Failure to issue and transmit an e-invoice on time", "AED 100 per invoice, capped at AED 5,000 per calendar month"],
            ["Failure to issue and transmit an e-credit note on time", "AED 100 per credit note, capped at AED 5,000 per calendar month"],
            ["Issuer fails to notify the FTA of a system failure", "AED 1,000 for each day of delay"],
            ["Recipient fails to notify the FTA of a system failure", "AED 1,000 for each day of delay"],
            ["Failure to notify the ASP of changes to registered data", "AED 1,000 for each day of delay"],
          ],
        },
      },
      {
        title: "Where Things Stand as of Late July 2026",
        paragraphs: [
          {
            text: "The e-invoicing exchange is live, and businesses can select and onboard a pre-approved Accredited Service Provider through EmaraTax to begin exchanging invoices.",
            sourceIndexes: [1, 5],
          },
          {
            text: "The Ministry of Finance updates its provider list periodically. Because provider counts change, businesses should use the live accreditation list rather than rely on a dated number in an article.",
            sourceIndexes: [5],
          },
          "Amendments to the provider-accreditation framework also allow white-label solutions, giving local companies more ways to work with established international providers.",
        ],
      },
      {
        title: "What to Do Now, by Revenue Band",
        paragraphs: [
          "If your annual revenue is AED 50 million or more, the deadline to appoint an Accredited Service Provider is 30 October 2026. Confirm which billing systems issue invoices, identify which transactions fall in scope, and begin evaluating providers before the deadline.",
          "If your annual revenue is below AED 50 million, your deadlines are further out: appoint a provider by 31 March 2027 and go live by 1 July 2027. But the preparation work is the same regardless of company size. Mapping invoicing systems, understanding data gaps, and choosing a provider all take time. Starting now avoids a rushed decision under deadline pressure.",
          "For every business, regardless of phase:",
        ],
        bullets: [
          "Identify every system in your business that currently generates invoices.",
          "Determine which transactions are in scope for e-invoicing and which are, for now, business-to-consumer and excluded.",
          "Compare what those systems currently capture against the mandatory field requirements published by the Ministry.",
          "Identify who in your business is responsible for closing any data gaps.",
          "The work involves bookkeeping and invoice data as well as software. The accuracy of the underlying invoice and accounting data remains the business's responsibility.",
        ],
        callout: {
          type: "action",
          title: "Phase 1 businesses should begin provider selection now",
          text: "Map invoice-generating systems, identify in-scope transactions, review data gaps, and assign internal ownership before onboarding and testing begin.",
        },
      },
    ],
    faqs: [
      {
        question: "Is e-invoicing the same as sending a PDF invoice by email?",
        answer:
          "No. A PDF, scan, image, Word document, or emailed invoice does not meet the UAE Ministry of Finance definition. An e-invoice is structured data exchanged electronically through accredited service providers.",
      },
      {
        question: "When does UAE e-invoicing become mandatory?",
        answer:
          "Businesses with annual revenue of AED 50 million or more must implement by 1 January 2027. Businesses below AED 50 million must implement by 1 July 2027. Government entities follow from 1 October 2027.",
      },
      {
        question: "What is the first UAE e-invoicing deadline?",
        answer:
          "The first mandatory deadline is 30 October 2026, when businesses with annual revenue of AED 50 million or more must have appointed an Accredited Service Provider.",
      },
      {
        question: "Do businesses connect directly to the FTA?",
        answer:
          "Businesses exchange structured invoices through Accredited Service Providers. The required tax data is then reported electronically to the Federal Tax Authority through the system.",
      },
      {
        question: "Are business-to-consumer transactions included?",
        answer:
          "Business-to-consumer transactions are outside the mandatory scope for now. The legislation allows a future Ministerial decision to bring them into scope, so businesses should monitor official updates.",
      },
      {
        question: "Can a business implement e-invoicing voluntarily?",
        answer:
          "Yes. Voluntary implementation became available from 1 July 2026. The government pilot programme also began on that date, but participation in the pilot and voluntary implementation are distinct.",
      },
      {
        question: "Where is the current list of Accredited Service Providers?",
        answer:
          "The Ministry of Finance maintains a periodically updated list of pre-approved eInvoicing Service Providers on its official eInvoicing portal. Businesses should check that live list rather than rely on an older provider count.",
      },
    ],
    closingParagraphs: [
      "E-invoicing readiness starts with the same groundwork as any compliance deadline: knowing what your current systems capture, what is missing, and who is responsible for fixing it before the clock runs out.",
      "Connect system preparation with bookkeeping, VAT, and Corporate Tax compliance rather than treating e-invoicing as a standalone software purchase.",
    ],
    closingTitle: "Prepare for e-invoicing",
    closingCta:
      "If you want a second set of eyes on where your invoicing and bookkeeping stand against these requirements, Zenesis's accounting and tax team can help you work through it alongside your existing VAT and corporate tax compliance.",
  },
  {
    slug: "corporate-tax-mistakes-trigger-audits-uae",
    category: "Accounting and Tax",
    title: "UAE Corporate Tax Audit Guide: Triggers, Process and Preparation",
    description:
      "How UAE corporate tax audits work, the records the FTA can inspect, common risk indicators, and how businesses should prepare before and after an audit notice.",
    dateLabel: "June 5, 2026",
    author: "Glenita D'Souza",
    heroImageSrc: versionedAssetPath("/insights/corporate-tax-mistakes.webp", insightImageVersion),
    heroImageAlt: "UAE corporate tax compliance visual for common audit-triggering mistakes",
    keyTakeaways: [
      "The FTA may audit any person to verify compliance; UAE law does not publish a checklist of automatic audit triggers.",
      "Businesses should be able to reconcile their tax return to financial statements, ledgers, invoices, contracts, bank records, and related-party support.",
      "A standard audit notice is generally issued at least 10 business days before the audit, subject to limited statutory exceptions.",
    ],
    relatedServiceHrefs: [
      "/corporate-tax-registration-in-the-uae",
      "/corporate-tax-filing-services-in-the-uae",
      "/professional-bookkeeping-services-in-dubai",
    ],
    sections: [
      {
        title: "What a UAE Corporate Tax Audit Is",
        paragraphs: [
          {
            text: "A tax audit is the Federal Tax Authority's examination of a person's records, information, data, or goods to verify compliance with the Tax Procedures Law and the relevant tax law. The FTA may audit any person; the legislation does not limit audits to large companies or publish a fixed list of automatic audit triggers.",
            sourceIndexes: [1],
          },
          "A business should be able to trace each figure in its Corporate Tax return to accounting records and supporting evidence. The file should show how accounting profit became taxable income, why adjustments were made, and how the final tax payable was calculated.",
        ],
        callout: {
          type: "definition",
          title: "Audit risk is not the same as an official trigger list",
          text: "The risk indicators in this guide identify areas where records and filings can become difficult to defend. They are not a published FTA scoring model.",
        },
      },
      {
        title: "How the Audit Process Works",
        paragraphs: [
          {
            text: "Under the Tax Procedures Law, the FTA may conduct an audit at its own premises, at the person's place of business, or at another location where the person conducts business, stores goods, or keeps records. The standard rule is at least 10 business days' advance notice.",
            sourceIndexes: [1, 2],
          },
          "The notice should identify the audit and allow the business to organize the responsible people and requested records. The law contains limited exceptions allowing entry without the standard advance notice where the statutory conditions are met, including serious grounds relating to tax evasion or obstruction.",
        ],
        callout: {
          type: "deadline",
          title: "Standard notice period",
          text: "The standard statutory notice is at least 10 business days before the tax audit. Treat the date on any FTA notice as an immediate internal deadline and confirm the response plan promptly.",
        },
        numberedBullets: [
          "Read the notice carefully and identify the tax periods, taxes, locations, and records in scope.",
          "Appoint one internal owner and agree how requests will be logged, reviewed, and answered.",
          "Reconcile the filed return to the final financial statements and underlying ledger before submitting records.",
          "Provide complete, organized information and preserve a copy of everything supplied to the FTA.",
          "Record open questions, explanations, and follow-up dates so the response remains consistent.",
        ],
      },
      {
        title: "Records the Business Should Be Able to Produce",
        paragraphs: [
          {
            text: "Taxable Persons and Exempt Persons must retain the records and documents supporting their Corporate Tax position for seven years after the end of the relevant Tax Period. The FTA specifically points to transaction records, asset purchases and disposals, liabilities, and shares held at period end among the records that may be required.",
            sourceIndexes: [4, 6],
          },
        ],
        bullets: [
          "Final financial statements, trial balance, general ledger, and chart of accounts",
          "Sales invoices, purchase invoices, credit notes, contracts, and proof of delivery",
          "Corporate bank statements and completed bank reconciliations",
          "Fixed-asset register with acquisition and disposal support",
          "Schedules for accruals, provisions, related-party balances, and tax adjustments",
          "Corporate Tax return, working papers, elections, applications, and correspondence with the FTA",
          "VAT returns and reconciliations where the business is VAT registered",
        ],
        callout: {
          type: "warning",
          title: "Keep the evidence behind the return",
          text: "A filed return is the end result. The business must retain the records and working papers that show where every material figure came from.",
        },
      },
      {
        title: "Common Risk Area 1: The Return Does Not Reconcile",
        paragraphs: [
          "The Corporate Tax return should reconcile to the accounts after clearly documented tax adjustments. Unexplained differences between the return, financial statements, ledger, bank activity, and other filed information create questions that take longer to resolve.",
        ],
        bullets: [
          "Revenue in the ledger does not reconcile to the financial statements",
          "Bank deposits or payment-gateway settlements are not mapped to recorded sales",
          "Tax adjustments have no calculation or supporting explanation",
          "Prior-period corrections appear in the accounts without a clear audit trail",
        ],
      },
      {
        title: "Common Risk Area 2: Expenses Lack Support",
        paragraphs: [
          "A booked expense is not automatically deductible. The business should be able to show the commercial purpose, the recipient, the underlying supply, and the basis for its tax treatment. Personal costs, unsupported journal entries, and vague management charges deserve particular attention before filing.",
        ],
        bullets: [
          "Separate private and business expenditure",
          "Retain contracts and evidence for material professional or management fees",
          "Document the business purpose and participants for entertainment expenditure",
          "Review year-end accruals and provisions against the applicable deduction rules",
        ],
      },
      {
        title: "Common Risk Area 3: Related-Party Pricing Is Unsupported",
        paragraphs: [
          {
            text: "Transactions and arrangements with Related Parties must meet the arm's length standard. The issue is wider than having a Master File or Local File: every business with controlled transactions should be able to identify them, explain the pricing method, and retain proportionate support for the result.",
            sourceIndexes: [3, 4],
          },
        ],
        bullets: [
          "Intercompany service fees with no agreement or allocation basis",
          "Shareholder or group loans with undocumented terms",
          "Related-party sales priced differently from comparable third-party transactions without explanation",
          "Balances that do not agree between the records of the two parties",
        ],
      },
      {
        title: "Common Risk Area 4: Free Zone Conditions Are Assumed",
        paragraphs: [
          {
            text: "A free-zone licence does not by itself establish entitlement to the 0% Corporate Tax rate. A Qualifying Free Zone Person must satisfy the statutory conditions, determine which income is Qualifying Income, maintain the required records, and comply with the applicable filing obligations.",
            sourceIndexes: [7],
          },
        ],
        bullets: [
          "Document how each material income stream is classified",
          "Test adequate-substance and de minimis conditions rather than assuming them",
          "Separate permanent-establishment and non-qualifying income where applicable",
          "Retain evidence supporting transactions with free-zone and mainland customers",
        ],
      },
      {
        title: "Common Risk Area 5: VAT and Corporate Tax Tell Different Stories",
        paragraphs: [
          "VAT taxable supplies, accounting revenue, and Corporate Tax revenue are not identical concepts, so differences can be legitimate. Those differences still need a documented reconciliation. The problem is not that the totals differ; it is being unable to explain why.",
        ],
        bullets: [
          "Reconcile VAT returns to the sales ledger by tax period",
          "Explain out-of-scope, exempt, zero-rated, and timing differences",
          "Trace credit notes and prior-period adjustments across both tax records",
          "Investigate unexplained differences before submitting the Corporate Tax return",
        ],
      },
      {
        title: "Special Scenarios That Need Their Own Audit File",
        paragraphs: [
          "Some structures need more than the standard accounts-and-return pack. Prepare a separate schedule where the tax position depends on elections, group treatment, free-zone conditions, or transactions that are not obvious from the ledger alone.",
        ],
        table: {
          columns: ["Scenario", "Evidence to prepare"],
          rows: [
            ["SME or owner-managed business", "Owner transactions, private-use adjustments, cash controls, and complete expense support"],
            ["Qualifying Free Zone Person", "Income classification, substance, de minimis calculation, audited financial statements where required, and permanent-establishment analysis"],
            ["Tax Group", "Group eligibility, member reconciliations, eliminations, intra-group balances, and the group's consolidated tax working papers"],
            ["Related-party activity", "Related-party register, agreements, pricing method, comparables where relevant, and disclosure support"],
            ["Tax losses or relief claims", "Origin and continuity of losses, ownership records, calculations, elections, and evidence that each condition is met"],
          ],
        },
      },
      {
        title: "What to Do When an Audit Notice Arrives",
        numberedBullets: [
          "Verify the notice through the official FTA channel and note every response date.",
          "Inform the directors, finance lead, and appointed tax adviser or registered tax agent.",
          "Preserve relevant records and stop routine deletion or overwriting of files in scope.",
          "Build a request tracker showing the document owner, reviewer, submission date, and follow-up status.",
          "Reconcile the return and identify errors before sending explanations or schedules.",
          "Answer the request asked, keep explanations factual, and retain an exact submission copy.",
          "Escalate assessments, penalties, or disputed interpretations promptly because statutory review and objection periods may apply.",
        ],
        callout: {
          type: "action",
          title: "Do not improvise separate answers",
          text: "Use one controlled response file. Figures, explanations, and documents supplied by different team members should agree with each other and with the filed return.",
        },
      },
      {
        title: "Corporate Tax Audit Readiness Checklist",
        paragraphs: [
          "Audit readiness is a year-round accounting discipline. A short review before filing is useful, but it cannot reconstruct missing contracts, invoices, or reconciliations after the fact.",
        ],
        bullets: [
          "Monthly bookkeeping is complete and bank accounts are reconciled",
          "The return reconciles to signed-off financial statements and the ledger",
          "Every material tax adjustment has a calculation and supporting evidence",
          "Related parties and Connected Persons have been identified and reviewed",
          "VAT-to-revenue differences have been reconciled and explained",
          "Free-zone, tax-group, loss, and relief conditions have dedicated working papers",
          "Records are retained for at least seven years and can be retrieved promptly",
          "The filing calendar names an owner for returns, payments, notices, and renewals",
        ],
      },
    ],
    faqs: [
      {
        question: "Can the FTA audit any UAE business?",
        answer: "The Tax Procedures Law permits the FTA to audit any person to verify compliance. The legislation does not restrict audits to a particular company size or publish a guaranteed exemption from audit.",
      },
      {
        question: "How much notice does the FTA give before a tax audit?",
        answer: "The standard rule is at least 10 business days before the audit. The law provides limited exceptions where an audit may begin without the standard advance notice if the statutory conditions are met.",
      },
      {
        question: "How long must UAE Corporate Tax records be retained?",
        answer: "Taxable Persons and Exempt Persons must generally retain relevant records and documents for seven years after the end of the Tax Period to which they relate.",
      },
      {
        question: "Does a free-zone company need to prepare for a Corporate Tax audit?",
        answer: "Yes. Free-zone status does not remove record-keeping and filing obligations. A business claiming Qualifying Free Zone Person treatment should also retain evidence that it meets the applicable conditions and that its income has been classified correctly.",
      },
      {
        question: "What should a business do first after receiving an audit notice?",
        answer: "Confirm the notice, record every deadline, appoint one response owner, preserve the records in scope, and reconcile the filed return before supplying documents or explanations.",
      },
    ],
    closingParagraphs: [
      "A business cannot guarantee that it will never be audited. It can make sure that an audit does not begin with missing records, unexplained figures, and conflicting filings.",
      "The best preparation is a clean trail from each filed number to the accounts and evidence behind it, maintained throughout the year rather than assembled after an FTA notice arrives.",
    ],
    closingTitle: "Prepare Before the Notice",
    closingCta:
      "Zenesis can review the bookkeeping, return reconciliations, supporting schedules, and compliance calendar behind your Corporate Tax position before the next filing deadline or audit request.",
  },
  {
    slug: "business-consultant-beyond-company-registration",
    category: "Business Setup",
    title: "What a Business Consultant Handles After Registration",
    description:
      "What UAE businesses may need after registration, from banking and tax filings to visas, renewals, records, and changes to the company structure.",
    dateLabel: "May 21, 2026",
    author: "Cecilia D'Cunha",
    heroImageSrc: versionedAssetPath("/insights/strategic-role.webp", insightImageVersion),
    heroImageAlt: "Strategic business consulting visual for founders planning growth in the UAE",
    keyTakeaways: [
      "Registration is one part of a UAE setup. Banking, tax, visas, records, and renewals follow.",
      "Activity, jurisdiction, ownership, office, visa, and banking needs should be reviewed before the licence is issued.",
      "A low-cost setup can become expensive when the licence or structure does not match the way the business will operate.",
    ],
    relatedServiceHrefs: [
      "/business-setup",
      "/open-a-bank-account-easily",
      "/corporate-tax-registration-in-the-uae",
    ],
    sections: [
      {
        title: "What founders need after registration",
        paragraphs: [
          "A business setup consultant may handle the licence application, visa documents, and authority submissions. The company still has work to do after registration.",
          "Bank account preparation, bookkeeping, VAT and Corporate Tax obligations, renewals, ownership records, staff visas, and later amendments all depend on decisions made during setup.",
          "A consultant can help plan that sequence and identify where a licence, company structure, or document set may not support the intended operations.",
        ],
      },
      {
        title: "Requirements that follow company registration",
        paragraphs: [
          "A trade licence does not complete the company's banking, tax, immigration, or record-keeping work.",
          "Depending on its position, a business may need Corporate Tax registration and returns, VAT registration and returns, bookkeeping, shareholder and UBO records, visa applications, and bank KYC. Economic Substance notification and reporting requirements were cancelled for financial years ending after 31 December 2022, although unresolved earlier periods may still need review.",
          "These requirements should be placed on a compliance calendar with named owners and supporting records.",
        ],
      },
      {
        title: "Five areas to plan",
        paragraphs: [
          "The work can be grouped into five areas: structure, tax and records, banking, hiring and growth, and local follow-through.",
        ],
      },
      {
        title: "1. Structure planning before incorporation",
        bullets: [
          "Compare mainland and free-zone routes against where the company will operate and serve customers",
          "Select activities that cover the intended work and can be explained consistently to authorities and banks",
          "Set ownership and management arrangements with future investors or ownership changes in mind",
        ],
        callout: {
          type: "action",
          title: "Decide how the company will operate before choosing a licence",
          text: "Map the intended clients, UAE market access, visa needs, office position, ownership plan, and banking profile before comparing mainland and free-zone routes.",
        },
      },
      {
        title: "2. Tax and regulatory requirements",
        paragraphs: [
          {
            text: "UAE businesses operate within the Corporate Tax framework alongside VAT, accounting, and other regulatory obligations. Missed registrations, filings, or records can lead to penalties.",
            sourceIndexes: [3],
          },
        ],
        bullets: [
          "Maintain books, invoices, reconciliations, and supporting schedules for FTA review",
          "Track Corporate Tax registration and return deadlines",
          "Reconcile VAT returns with the accounting records used for annual Corporate Tax filings",
        ],
      },
      {
        title: "3. Corporate bank account preparation",
        paragraphs: [
          "Banks review the licence, ownership, business activity, source of funds, expected transactions, and supporting contracts before deciding whether to open an account. An introduction does not replace that review.",
        ],
        bullets: [
          "Assemble the company and shareholder KYC documents requested by the bank",
          "Prepare a corporate profile and support expected revenue and transaction information",
          "Compare banks against the activity, transaction currencies, risk profile, and minimum-balance requirements",
        ],
      },
      {
        title: "4. Planning for hiring and growth",
        paragraphs: [
          "Hiring, new shareholders, additional activities, office changes, and higher transaction volumes can affect the company licence, visas, banking, accounting, and tax position.",
        ],
        bullets: [
          "Plan employee visas and labour approvals before hiring",
          "Track licence amendments needed for new activities, managers, shareholders, or premises",
          "Use forecasts and current accounts to monitor cash needs and planned spending",
        ],
      },
      {
        title: "5. Local support for international founders",
        paragraphs: [
          "International founders may need local coordination with licensing authorities, immigration, banks, landlords, auditors, and other service providers.",
          "That support can continue through annual renewals, amendments, compliance deadlines, and document requests.",
        ],
      },
      {
        title: "The Cost of Cheap Setups",
        paragraphs: [
          "Opting for the cheapest available license without thinking through banking restrictions or tax consequences is one of the most common first-time founder mistakes.",
          {
            text: "Correcting the wrong structure, changing activities mid-year, or appealing compliance penalties often costs far more than structuring the business properly from the beginning. Compare what a realistic first-year budget looks like before choosing a setup from its headline price.",
            inlineLinks: [
              {
                text: "what a realistic first-year budget looks like",
                href: "/business-setup-cost-dubai",
              },
            ],
          },
        ],
      },
      {
        title: "What to look for in an adviser",
        bullets: [
          "Review tax and banking requirements before registration, alongside the licence timeline",
          "Build the structure around the operating plan instead of starting with a fixed package",
          "Provide support after setup through compliance, accounting, and renewals",
          "Understand digital, SaaS, and cross-border business models instead of treating every setup the same way",
        ],
      },
      {
        title: "How Zenesis supports the setup",
        paragraphs: [
          "Zenesis has supported UAE and international company formation for more than 20 years. The team covers route comparison, licensing, visas, banking documents, bookkeeping, tax, renewals, and corporate changes.",
          "The scope is based on the company's activity, ownership, customers, staff, premises, expected transactions, and filing obligations.",
        ],
      },
    ],
    closingParagraphs: [
      "Company registration should be planned together with banking, visas, tax, records, and renewals. Decisions made before licensing can affect each of those later applications.",
      "A consultant should explain those dependencies, prepare the required files, and confirm which decisions remain with the authority, bank, or regulator.",
    ],
    closingCta:
      "Zenesis can compare structures before filing and plan the setup around how the business will operate.",
  },
  {
    slug: "why-first-time-entrepreneurs-are-choosing-uae",
    category: "Business Setup",
    title: "Why First-Time Entrepreneurs Are Choosing the UAE",
    description:
      "Why first-time founders consider the UAE, including company setup routes, ownership, tax, residency, infrastructure, and access to regional markets.",
    dateLabel: "May 4, 2026",
    author: "Cecilia D'Cunha",
    heroImageSrc: versionedAssetPath("/insights/first-time-entrepreneurs.webp", insightImageVersion),
    heroImageAlt: "First-time entrepreneurs planning a new business launch in the UAE",
    heroImageClassName: "object-[82%_center]",
    keyTakeaways: [
      "The UAE offers mainland and free-zone company setup routes, digital government services, and residency options for eligible founders.",
      "The route should match where the company will operate, who it will serve, and what it needs from visas and banking.",
      "Banking, compliance, and visa planning still need to be built into the launch plan early.",
    ],
    relatedServiceHrefs: [
      "/business-setup",
      "/free-zones",
      "/uae-company-visa",
    ],
    sections: [
      {
        title: "Why founders consider the UAE",
        paragraphs: [
          "The UAE has company formation routes for first-time entrepreneurs, freelancers, technology businesses, trading companies, and international service firms, as well as larger established groups.",
          "Founders compare the UAE with other markets because of its ownership rules, tax framework, residency options, transport links, digital government services, and access to customers across the GCC and nearby regions.",
        ],
      },
      {
        title: "Company and SME activity in the UAE",
        paragraphs: [
          "Published government and entrepreneurship data show the scale of company and SME activity in the UAE.",
        ],
        bullets: [
          "More than 1.4 million active companies now operate within the UAE",
          "250,000 new business licenses were issued in 2025 alone",
          "94% to 95% of all corporate entities are SMEs",
          "1 in 5 adults in the UAE are engaged in launching or managing a new venture",
          "The UAE consistently ranks at the top globally for entrepreneurship in GEM rankings",
          "Major financial hubs such as DIFC have recorded near 40% growth in new company registrations",
        ],
      },
      {
        title: "1. Mainland and free-zone setup routes",
        paragraphs: [
          {
            text: "The UAE provides dedicated mainland and free-zone pathways for establishing a business, with digital services available across many licensing authorities. Founders should start by comparing mainland and free zone setup routes against how the business needs to operate.",
            sourceIndexes: [1, 2],
            inlineLinks: [
              {
                text: "comparing mainland and free zone setup routes",
                href: "/business-setup",
              },
            ],
          },
          "Digital applications can reduce the time spent on parts of company registration and residency processing. Banking remains a separate review, and timing depends on the authority, activity, approvals, documents, and applicant profile.",
        ],
        callout: {
          type: "action",
          title: "Speed should follow structure",
          text: "Before filing, confirm the activity, jurisdiction, ownership, visa requirements, office position, and banking plan. A fast application is only useful when the resulting company fits the operating model.",
        },
      },
      {
        title: "2. Access to regional and international markets",
        paragraphs: [
          "The UAE's location and transport links support trade and client relationships across the GCC, Asia, Africa, and Europe.",
          "Its time zone, airports, ports, and digital infrastructure can help companies coordinate suppliers, customers, and teams across several regions.",
        ],
      },
      {
        title: "3. Personal and corporate tax position",
        paragraphs: [
          "Founders should review the UAE tax position alongside the rules that apply in their home country and any other country where the business operates.",
        ],
        bullets: [
          "0% personal income tax",
          "A 9% Corporate Tax rate on taxable income above the applicable threshold under the standard framework",
          "A 0% rate may apply to Qualifying Income earned by a Qualifying Free Zone Person when the statutory conditions are met",
          "Tax registration, filing, bookkeeping, and transfer-pricing requirements still need to be assessed",
        ],
      },
      {
        title: "4. Options for digital and service businesses",
        paragraphs: [
          "Several UAE licensing authorities and free zones offer activities and packages for technology, e-commerce, media, consultancy, and other service businesses.",
          "Eligible founders and professionals may also consider longer-term residency categories such as the Golden Visa. Eligibility and evidence requirements depend on the category.",
        ],
        bullets: [
          "SaaS and AI startups",
          "E-commerce and D2C brands",
          "FinTech innovators and digital asset platforms",
          "Global consultants, coaches, and remote agencies",
          "Independent freelancers and content creators",
        ],
      },
      {
        title: "5. Access to investors and startup programmes",
        paragraphs: [
          "The UAE hosts venture funds, angel investors, family offices, accelerator programmes, and startup events. Hub71 in Abu Dhabi is one example of a programme built around technology companies.",
          "Location alone does not secure funding. Investors still assess the team, product, market, traction, governance, and financial plan.",
        ],
      },
      {
        title: "6. Infrastructure for small teams",
        paragraphs: [
          "Small teams can use co-working offices, payment providers, logistics services, telecommunications networks, and digital government platforms without building each function themselves.",
          "Availability, cost, and eligibility vary by jurisdiction, activity, and provider, so these services should be checked before choosing a setup package.",
        ],
      },
      {
        title: "7. Government policy on entrepreneurship",
        paragraphs: [
          "The UAE has made entrepreneurship and SME growth part of its economic policy.",
          "Its stated targets include expanding the SME sector to 1 million companies by 2030. Reforms have also introduced 100% foreign ownership for many mainland activities and longer-term residency options for eligible applicants.",
        ],
      },
      {
        title: "Decisions to make before applying",
        paragraphs: [
          "First-time founders still need to choose the jurisdiction, activity, legal form, ownership, visa allocation, office arrangement, and banking plan. A mismatch can require later licence amendments or a different structure.",
          "A corporate adviser can compare these requirements before the application starts.",
        ],
        bullets: [
          "Compare mainland and free-zone routes against customers, suppliers, premises, and market access",
          "Select licence activities that cover the intended work",
          "Prepare company and shareholder KYC documents for bank review",
          "Assess bookkeeping, VAT, Corporate Tax, UBO, and other applicable compliance work",
        ],
      },
    ],
    closingParagraphs: [
      "The UAE offers several formation routes, foreign-ownership options, residency categories, and digital services. The benefits depend on the activity, jurisdiction, tax position, visa needs, banking file, and intended market.",
      "Compare those factors before filing rather than choosing a package only by price or promised speed.",
    ],
    closingCta:
      "Zenesis can compare UAE setup routes against the company's operating model, visa needs, banking documents, and compliance requirements.",
  },
  {
    slug: "complete-guide-to-corporate-tax-groups-uae",
    category: "Accounting and Tax",
    title: "UAE Corporate Tax Groups: Eligibility and Filing",
    description:
      "How UAE Corporate Tax groups work, who can form them, the eligibility rules, and the filing and threshold effects to review before applying.",
    dateLabel: "April 20, 2026",
    author: "Glenita D'Souza",
    heroImageSrc: versionedAssetPath("/insights/corporate-tax-groups.webp", insightImageVersion),
    heroImageAlt: "UAE corporate tax groups visual showing structured group taxation and compliance",
    keyTakeaways: [
      "A tax group can simplify filing, but it also changes how the threshold benefit works across entities.",
      "The 95% ownership, voting, and profit tests are central to eligibility.",
      "A tax group changes the taxable-person structure and should be assessed before the application is filed.",
    ],
    relatedServiceHrefs: [
      "/corporate-tax-registration-in-the-uae",
      "/corporate-tax-filing-services-in-the-uae",
      "/accounting-tax",
    ],
    sections: [
      {
        title: "How a Corporate Tax group works",
        paragraphs: [
          "Eligible UAE juridical persons under common ownership can apply to be treated as a single Taxable Person for Corporate Tax purposes.",
          "The application depends on ownership, voting rights, entitlement to profits and net assets, tax residence, financial years, and accounting standards. Group treatment also changes how returns, losses, and the taxable-income threshold are handled.",
        ],
      },
      {
        title: "What is a Corporate Tax Group?",
        paragraphs: [
          {
            text: "A Corporate Tax Group is a structure where two or more eligible UAE juridical persons are treated as a single taxable person for corporate tax purposes.",
            sourceIndexes: [1],
          },
          "Instead of each company filing its own tax return, the group submits one consolidated tax return under a parent company.",
          "The companies remain separate legal entities, but the approved tax group files as one Taxable Person.",
        ],
        callout: {
          type: "definition",
          title: "A tax group is not the same as an accounting group",
          text: "Companies do not become a UAE Corporate Tax Group automatically because they share ownership or prepare consolidated accounts. The parent and subsidiaries must satisfy the tax-group conditions and apply through the required process.",
        },
      },
      {
        title: "Who Can Form a Tax Group?",
        paragraphs: [
          "A tax group can be formed by companies that have a parent-subsidiary relationship and meet specific regulatory conditions.",
        ],
        bullets: [
          "UAE-incorporated companies such as LLCs and corporations",
          "Groups with a clear ownership structure",
          "Businesses with multiple entities under one parent company",
          "Individuals or sole establishments generally cannot form a group",
          "Government or exempt entities are generally outside this structure",
          "Certain Free Zone companies, especially qualifying free zone persons, may not be able to join a group",
        ],
      },
      {
        title: "Why is a Corporate Tax Group Needed?",
        paragraphs: [
          "A tax group can reduce duplicate entity-level filings and allow qualifying profits and losses to be calculated together.",
        ],
        bullets: [
          "Simplified compliance through one single return instead of multiple entity-level filings",
          "Better tax planning by managing profits and losses across entities",
          "Reduced operational burden through centralized tax calculations and processes",
          "Alignment with global tax-grouping practices used in other business jurisdictions",
        ],
      },
      {
        title: "Criteria to Form a Corporate Tax Group",
        paragraphs: [
          "To form a tax group in the UAE, all of the following conditions must be met.",
        ],
        bullets: [
          "The parent company must own at least 95% of share capital",
          "The parent company must control at least 95% of voting rights",
          "The parent company must have rights to at least 95% of profits and net assets",
          "All entities must be UAE tax residents, either by incorporation or by management and control from the UAE",
          "All companies in the group must follow the same financial year",
          "All companies in the group must use the same accounting standards, such as IFRS",
          "Only juridical persons can form or join a tax group",
          "The tax group must be approved by the Federal Tax Authority before it becomes effective",
        ],
      },
      {
        title: "Benefits of Corporate Tax Groups",
        paragraphs: [
          "Forming a corporate tax group offers several strategic and financial advantages.",
        ],
        bullets: [
          "Losses from one entity can offset profits of another within the group",
          "The group files one consolidated return instead of multiple returns",
          "Intra-group transactions are generally ignored for tax purposes",
          "Combined profits and losses can change the timing and amount of tax payable",
          "Tax reporting and compliance can be centralized at group level",
        ],
      },
      {
        title: "Key Consideration Before Opting for a Tax Group",
        paragraphs: [
          "Before applying, compare the filing benefit with the effect of treating the companies as one Taxable Person.",
          "When companies form a tax group, they are treated as a single taxable entity. That means the AED 375,000 tax-free threshold applies to the entire group, not to each individual entity.",
          "For businesses operating multiple entities, this can reduce the benefit that might otherwise apply if the entities filed separately.",
          "Filing separately may preserve greater threshold benefit across entities, but it may also involve higher compliance and filing costs.",
          "A tax group can reduce duplicate filings, but the expected compliance cost should be compared with separate filing before applying.",
        ],
      },
    ],
    closingParagraphs: [
      "A Corporate Tax group can reduce duplicate returns and combine qualifying profits and losses. The AED 375,000 threshold applies to the group as one Taxable Person.",
      "Model the tax and filing position both ways before applying, and confirm that every proposed member meets the ownership, residence, financial-year, and accounting-standard conditions.",
    ],
    closingCta:
      "Zenesis can review the proposed group members, ownership tests, filing position, and application requirements before submission.",
  },
  {
    slug: "financial-year-2026-uae-compliance-guide",
    category: "Accounting and Tax",
    title: "Financial Year in UAE 2026: Compliance Deadlines, Tax Filing and VAT Guide",
    description:
      "UAE financial-year planning for 2026, including Corporate Tax deadlines, VAT cut-off, audit timing, record retention, and year-end work.",
    dateLabel: "April 15, 2026",
    author: "Glenita D'Souza",
    heroImageSrc: versionedAssetPath("/insights/financial-year-2026-compliance.webp", insightImageVersion),
    heroImageAlt: "Financial year 2026 compliance visual for UAE reporting, planning, and tax timing",
    keyTakeaways: [
      "For most UAE companies, the financial year is the accounting period that also drives the corporate tax period.",
      "The corporate tax return and payment are generally due within nine months after the end of the relevant tax period.",
      "A strong year-end file should connect bookkeeping, VAT reconciliation, audit support, corporate tax schedules, and seven-year record retention.",
    ],
    relatedServiceHrefs: [
      "/corporate-tax-filing-services-in-the-uae",
      "/vat-filing-services-in-the-uae",
      "/professional-bookkeeping-services-in-dubai",
    ],
    relatedInsightSlugs: [
      "uae-corporate-tax-filing-deadlines-2026",
      "uae-corporate-tax-record-keeping-requirements",
    ],
    sections: [
      {
        title: "How the financial year affects filing",
        paragraphs: [
          "The financial year in UAE is no longer just an accounting label. For companies operating in 2026, it affects corporate tax filing deadlines, VAT reconciliation, audit timing, accounting close, management reporting, and the record file a business may need to defend later.",
          "Most UAE businesses use a 12-month financial year, often the calendar year from 1 January to 31 December. Some companies use a different year-end to align with a parent company, group reporting cycle, or operating model. That choice affects filing deadlines, reporting, and audit timing.",
          "This guide explains how the financial year works in the UAE, how it connects to corporate tax and VAT, what deadlines usually follow, and what businesses should prepare before the year-end becomes urgent.",
        ],
      },
      {
        title: "Financial Year in UAE: Quick Answer",
        paragraphs: [
          "A financial year in the UAE is the accounting period used to record business activity, prepare financial statements, and calculate taxable income. For corporate tax, the tax period usually follows the financial year used by the business.",
          "The most common UAE financial year is 1 January to 31 December. If the financial year ends on 31 December 2026, the corporate tax return and payment would generally be due by 30 September 2027, subject to the company's exact tax position and any applicable FTA decision.",
        ],
        bullets: [
          "Calendar-year financial year: 1 January to 31 December",
          "Corporate tax period: usually aligned with the financial year",
          "Corporate tax return deadline: generally within nine months after the tax period ends",
          "Records: relevant tax and accounting records should be retained for at least seven years",
          "VAT: VAT return periods can overlap the financial year, so year-end cut-off and reconciliation matter",
        ],
      },
      {
        title: "What Is a Financial Year in the UAE?",
        paragraphs: [
          "A financial year is the 12-month period used to record activity, prepare financial statements, and calculate taxable income. Regulatory, audit, and tax deadlines are set against that reporting period.",
          "In the UAE, many companies follow the calendar year from January to December because it is simple, familiar, and easier to manage across bookkeeping, VAT, corporate tax, and audit planning. A different financial year can also be used where it fits the business or group reporting structure.",
          "The important point is consistency. Once the financial year is set, it becomes the anchor for accounting close, tax period, filing deadlines, audit planning, and the records that must be retained after the period ends.",
        ],
      },
      {
        title: "Choosing Your Financial Year at Incorporation",
        paragraphs: [
          "When setting up a company in the UAE, selecting a financial year is one of the first strategic decisions you will make.",
          "Many businesses default to the calendar year due to its simplicity and widespread use, while multinational groups often choose a custom financial year to align with global reporting cycles.",
          "In some cases, newly incorporated businesses may have their first financial year extended up to 18 months. This provides flexibility during the initial phase of operations, but it also requires careful planning because it directly impacts tax and reporting timelines.",
          "Changing a selected financial year can require regulatory approval and a valid business reason. Review the group reporting cycle, audit timing, and tax deadlines before setting it.",
        ],
      },
      {
        title: "Corporate Tax Period and Filing Deadlines",
        paragraphs: [
          "Under UAE Corporate Tax, the tax period generally follows the financial year used by the taxable person. This means the income earned during the financial year forms the basis of the corporate tax return for that period.",
          {
            text: "The Federal Tax Authority has repeatedly reminded businesses that corporate tax returns and any corporate tax payable should generally be submitted within nine months from the end of the relevant tax period. The actual calendar deadline therefore depends on the company's financial year-end.",
            sourceIndexes: [1],
          },
        ],
        callout: {
          type: "deadline",
          title: "Count nine months from the tax period end",
          text: "Do not assume every UAE company has the same filing date. Confirm the registered tax period, then work backward from the applicable nine-month deadline.",
        },
        table: {
          columns: [
            "Financial Year Period",
            "Financial Year-End",
            "Corporate Tax Filing Deadline",
            "Preparation point",
          ],
          rows: [
            ["1 Jan 2025 - 31 Dec 2025", "31 December 2025", "30 September 2026", "Complete the 2025 accounts, tax schedules, and return before the September 2026 deadline"],
            ["1 Jan 2026 - 31 Dec 2026", "31 December 2026", "30 September 2027", "Close 2026 books early enough to prepare tax schedules before September 2027"],
            ["1 Apr 2026 - 31 Mar 2027", "31 March 2027", "31 December 2027", "Plan audit, VAT cut-off, and corporate tax review around the March year-end"],
            ["1 Jul 2025 - 30 Jun 2026", "30 June 2026", "31 March 2027", "Use the second half of 2026 to clean ledgers and supporting records"],
            ["First or extended financial year", "Depends on chosen end date", "Generally 9 months from tax period end", "Confirm the first tax period and filing date before waiting for the deadline"],
          ],
        },
      },
      {
        title: "Small Business Relief still requires a return",
        paragraphs: [
          {
            text: "A business that qualifies for Small Business Relief must still submit its Corporate Tax return by the applicable deadline. The relief is elected through the return and does not remove the filing obligation.",
            sourceIndexes: [4],
          },
          {
            text: "The revenue threshold is AED 3 million for the relevant tax period and every previous tax period. The business should retain records that support its revenue and eligibility if the FTA asks for evidence.",
            sourceIndexes: [4],
          },
        ],
      },
      {
        title: "VAT Reconciliation and Year-End Cut-Off",
        paragraphs: [
          "Unlike Corporate Tax, VAT reporting does not follow your financial year. Businesses are required to file VAT returns either monthly or quarterly based on the schedule assigned by the tax authority.",
          "These VAT periods often overlap with the financial year-end, which introduces complexity in reconciliation.",
          "For example, a VAT quarter may extend across two financial years, and transactions recorded in one period may relate to another. Supplier invoices issued before the year-end may only be received after the books have been closed, and stock adjustments made at year-end can impact input VAT recovery.",
          "Such inconsistencies often raise concerns during audits and tax reviews. To avoid this, businesses must implement strong cut-off procedures, account for accruals related to late invoices, and reconcile VAT ledgers before finalising financial statements.",
        ],
      },
      {
        title: "Year-End Compliance Checklist for UAE Businesses",
        paragraphs: [
          "A good financial year-end process should make corporate tax filing easier, not merely close the accounts. The work should connect accounting, VAT, audit support, and corporate tax readiness into one file.",
          "The checklist should identify what needs to be closed, reconciled, reviewed, and retained before the return is prepared.",
        ],
        bullets: [
          "Confirm the financial year-end and corporate tax period",
          "Reconcile bank accounts, revenue, receivables, payables, and major balance sheet items",
          "Review VAT returns against the accounting records for the same period",
          "Check accruals, prepayments, stock, fixed assets, depreciation, and owner transactions",
          "Identify related-party transactions and connected-person payments before tax filing",
          "Separate qualifying and non-qualifying income where a free zone tax position is relevant",
          "Prepare audit support where the mainland authority, free zone, bank, or group requires audited accounts",
          "Save the final accounts, tax schedules, returns, and supporting documents in a seven-year record file",
        ],
      },
      {
        title: "Audit Deadlines Tied to Financial Year-End",
        paragraphs: [
          "Audit and financial-statement deadlines are linked to the financial year and the rules of the relevant licensing authority or regulator.",
          "Depending on the jurisdiction, whether mainland or free zone, audited financial statements are typically required within three to six months after the financial year-end.",
          "For example, a company with a financial year ending on 31 December 2026 may need to complete its audit by March or June 2027, depending on the applicable requirements. A delay can affect licence renewals, regulatory filings, or bank document requests.",
        ],
      },
      {
        title: "Record-Keeping After the Financial Year Ends",
        paragraphs: [
          "The financial year does not disappear once the return is filed. UAE corporate tax record-keeping expectations mean the business should retain relevant records and supporting documents for at least seven years after the end of the tax period.",
          "The record file should explain the return as well as store the invoices. If the FTA, an auditor, a bank, a buyer, or a group finance team asks for support, the business should be able to show how the figures were prepared.",
        ],
        table: {
          columns: ["Record Area", "Examples to Keep", "Why It Matters"],
          rows: [
            ["Financial statements", "Trial balance, ledgers, management accounts, final accounts", "Shows how the period was closed and reported"],
            ["Revenue and expenses", "Invoices, contracts, receipts, supplier bills, payment evidence", "Supports taxable income and deductible costs"],
            ["VAT", "VAT returns, reconciliations, tax invoices, adjustment support", "Helps explain differences between VAT reporting and annual accounts"],
            ["Corporate tax", "Tax computation, return copy, schedules, filing confirmation", "Supports the corporate tax position submitted"],
            ["Structure and free zone evidence", "License, lease, activity documents, ownership and substance support", "Helps defend entity status and free zone treatment where relevant"],
          ],
        },
      },
      {
        title: "Changing Your Financial Year",
        paragraphs: [
          "Although businesses can change their financial year, the process is regulated and requires approval from the relevant authorities.",
          "Companies must provide a valid business reason, such as aligning with a parent entity or restructuring operations, and frequent changes are not permitted.",
          "Because a change in financial year affects corporate tax periods, VAT reconciliation, and audit timelines, it must be carefully planned to avoid disruptions.",
        ],
      },
      {
        title: "Group Companies and Consolidation",
        paragraphs: [
          "For businesses operating multiple entities, aligning financial years across the group is essential for smooth consolidation.",
          "Aligned financial years make consolidated financial statements and group reporting easier to prepare.",
          "Different year-ends require separate closing schedules and can delay group reporting. UAE Corporate Tax groups must also meet the applicable financial-year conditions.",
        ],
      },
      {
        title: "Penalties and Compliance Risks",
        paragraphs: [
          "Improper management of the financial year can lead to a range of compliance issues. Late corporate tax filings, incorrect VAT reporting, delayed audits, and inconsistencies in financial statements are among the most common risks.",
          "These issues can lead to penalties, missed filings, delayed audits, or licence-renewal problems. Record each deadline against the company's approved financial year.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the financial year in UAE?",
        answer:
          "The financial year in UAE is the accounting period a business uses to record transactions, prepare financial statements, and calculate taxable income. Many UAE companies use 1 January to 31 December, but a different financial year can be used where it fits the business or group reporting cycle.",
      },
      {
        question: "Is the UAE financial year always January to December?",
        answer:
          "No. January to December is common because it is simple and aligns well with annual compliance planning, but UAE companies can use another financial year where appropriate. The chosen year-end should be managed consistently because it affects corporate tax, audit timing, and reporting.",
      },
      {
        question: "When is the UAE corporate tax return due after the financial year-end?",
        answer:
          "The corporate tax return and any corporate tax payable are generally due within nine months after the end of the relevant tax period. For a company with a 31 December 2026 year-end, that generally points to a 30 September 2027 filing deadline.",
      },
      {
        question: "Does VAT follow the same financial year as corporate tax?",
        answer:
          "No. VAT returns follow the monthly or quarterly VAT schedule assigned to the business, not the annual financial year. Because VAT periods can overlap the year-end, businesses should reconcile VAT returns against the accounts before finalising the year.",
      },
      {
        question: "How long should UAE businesses keep financial year records?",
        answer:
          "Relevant UAE corporate tax and accounting records should generally be retained for at least seven years after the end of the tax period. The record file should support the figures and tax position used in the return.",
      },
      {
        question: "Can a UAE company change its financial year?",
        answer:
          "A UAE company may be able to change its financial year, but the change should be planned carefully and may require approval or updates with the relevant authority. The business should consider corporate tax periods, VAT cut-off, audit timing, and group reporting before making a change.",
      },
    ],
    closingTitle: "Prepare the year-end file",
    closingParagraphs: [
      "A clear year-end plan keeps bookkeeping, VAT reconciliation, audit preparation, and Corporate Tax filing moving together instead of becoming separate last-minute problems.",
    ],
    closingCta:
      "Book a consultation with Zenesis to review your financial year, filing timeline, records, VAT reconciliation, and year-end compliance priorities.",
  },
  {
    slug: "uae-corporate-tax-filing-deadlines-2026",
    category: "Accounting and Tax",
    title: "UAE Corporate Tax Filing Deadlines 2026: What Businesses Should Prepare",
    description:
      "UAE Corporate Tax filing deadlines for 2026, with financial year-end timing, return preparation, payment planning, and common filing risks.",
    dateLabel: "July 15, 2026",
    author: "Glenita D'Souza",
    heroImageSrc: versionedAssetPath("/services/corporate-tax-filing.webp"),
    heroImageAlt: "Corporate tax filing preparation and deadline planning for UAE businesses",
    heroImageClassName: "object-center",
    keyTakeaways: [
      "The corporate tax return is generally due within nine months after the end of the relevant tax period.",
      "The deadline is only useful if the books, calculations, and supporting documents are ready before the filing window becomes urgent.",
      "Free zone companies, mainland companies, and group structures should all confirm filing readiness early.",
    ],
    relatedServiceHrefs: [
      "/corporate-tax-filing-services-in-the-uae",
      "/corporate-tax-registration-in-the-uae",
      "/professional-bookkeeping-services-in-dubai",
    ],
    sections: [
      {
        title: "Why Filing Deadlines Matter More in 2026",
        paragraphs: [
          "Corporate tax filing is now part of the normal UAE compliance calendar. For many businesses, 2026 is not about discovering the regime for the first time. It is about proving that the company can file accurately, on time, and with records that support the numbers submitted.",
          "The deadline itself is simple in outline, but the preparation behind it is where most problems begin. A company may know the return date and still be unready if bookkeeping, VAT reconciliations, free zone income classification, and supporting schedules are not complete.",
        ],
      },
      {
        title: "The General Corporate Tax Filing Rule",
        paragraphs: [
          {
            text: "As a general rule, a UAE corporate tax return is due within nine months after the end of the relevant tax period. For most companies, the tax period follows the financial year used for accounts and reporting.",
            sourceIndexes: [1],
          },
          {
            text: "That means the filing deadline changes depending on the company financial year-end. A calendar-year company with a 31 December 2025 year-end must submit its return and settle any Corporate Tax due by 30 September 2026.",
            sourceIndexes: [3],
          },
        ],
        callout: {
          type: "deadline",
          title: "The deadline follows the tax period",
          text: "Verify the tax period shown in the FTA record instead of relying on a generic calendar. A different year-end produces a different filing date.",
        },
        table: {
          columns: ["Financial Year-End", "Typical Filing Deadline", "What Should Be Ready Before Filing"],
          rows: [
            ["31 December 2025", "30 September 2026", "Final accounts, tax computation, supporting schedules, and portal readiness"],
            ["31 December 2026", "30 September 2027", "Final accounts, tax computation, supporting schedules, and portal readiness"],
            ["31 March 2026", "31 December 2026", "Closed books, reconciled VAT periods, and year-end adjustments"],
            ["30 June 2026", "31 March 2027", "Audit position, tax schedules, and free zone classification where relevant"],
            ["Custom first financial year", "9 months from the chosen year-end", "Confirmed tax period, bookkeeping cut-off, and filing calendar"],
          ],
        },
      },
      {
        title: "Small Business Relief does not remove the filing deadline",
        paragraphs: [
          {
            text: "Eligible businesses elect Small Business Relief through their Corporate Tax return. They still have to file by the prescribed deadline, even when the relief results in no taxable income for Corporate Tax purposes.",
            sourceIndexes: [3],
          },
          {
            text: "The AED 3 million revenue threshold applies to the relevant tax period and every previous tax period. Keep the accounting records and supporting evidence needed to show that revenue remained within the threshold.",
            sourceIndexes: [3],
          },
        ],
      },
      {
        title: "Filing Readiness Is More Than Portal Access",
        paragraphs: [
          "Having access to the tax portal does not mean the company is filing-ready. The return has to be supported by accounts, calculations, and evidence that explain how the taxable income was reached.",
          "Businesses should treat the filing deadline as the final step in a longer closing process. If the books are weak, the deadline becomes a pressure point rather than a routine compliance task.",
        ],
        bullets: [
          "Books closed for the correct tax period",
          "Revenue, cost, and expense classifications reviewed",
          "VAT returns reconciled against accounting records where applicable",
          "Related-party transactions and connected-person payments identified",
          "Free zone qualifying and non-qualifying income reviewed where relevant",
          "Tax adjustments and supporting schedules prepared before submission",
        ],
      },
      {
        title: "Where UAE Businesses Commonly Fall Behind",
        paragraphs: [
          "Most filing problems do not start on the filing date. They build slowly during the year when invoices, expenses, bank transactions, and VAT records are not kept clean enough to support a tax return.",
          "The businesses most exposed are usually fast-moving SMEs, founder-led companies, and groups that added entities without aligning financial years, accounting systems, or tax responsibilities.",
        ],
        bullets: [
          "Waiting until the final quarter to clean up the full year's accounts",
          "Treating corporate tax separately from VAT and bookkeeping",
          "Using generic expense categories that do not explain the business purpose clearly",
          "Missing contracts, invoices, bank statements, or ownership records",
          "Assuming a free zone position is obvious without documenting the income type",
        ],
      },
      {
        title: "2026 filing calendar",
        paragraphs: [
          "A smoother filing process starts months before the statutory deadline. The aim is to make the return a review-and-submit exercise rather than a last-minute reconstruction of the business.",
        ],
        table: {
          columns: ["Timing", "Action", "Why It Matters"],
          rows: [
            ["6-9 months before deadline", "Close bookkeeping gaps and confirm the tax period", "Prevents year-end cleanup from becoming a filing emergency"],
            ["3-6 months before deadline", "Prepare draft accounts and tax schedules", "Gives time to resolve missing support and classification issues"],
            ["1-3 months before deadline", "Review the final return position and payment readiness", "Reduces avoidable errors before portal submission"],
            ["After filing", "Retain the return, schedules, and supporting records", "Keeps the file ready if the FTA asks questions later"],
          ],
        },
      },
      {
        title: "How Zenesis Helps",
        paragraphs: [
          "Zenesis connects the filing deadline with bookkeeping, reconciliations, tax registration status, return preparation, and the evidence supporting each figure.",
          "The return should be submitted on time and supported by records that explain the company's tax position.",
        ],
      },
    ],
    closingParagraphs: [
      "The filing deadline is fixed by the Tax Period, while the books, reconciliations, and tax calculations must be prepared before submission.",
      "Businesses that close their books, review the tax position early, and retain supporting records have more time to resolve errors before the deadline.",
    ],
    closingCta:
      "If you know your UAE corporate tax filing deadline but are not sure whether the books and schedules are ready, Zenesis can help review the filing path before it becomes urgent.",
  },
  {
    slug: "uae-corporate-tax-record-keeping-requirements",
    category: "Accounting and Tax",
    title: "UAE Corporate Tax Record-Keeping Requirements: What to Keep for 7 Years",
    description:
      "UAE Corporate Tax record-keeping rules, the seven-year retention period, and the documents businesses should keep for review.",
    dateLabel: "July 15, 2026",
    author: "Glenita D'Souza",
    heroImageSrc: versionedAssetPath("/insights/corporate-tax.webp", insightImageVersion),
    heroImageAlt: "UAE corporate tax advisers reviewing financial records and supporting documents in Dubai",
    keyTakeaways: [
      "UAE taxable and exempt persons are expected to retain relevant corporate tax records for at least seven years after the tax period.",
      "The retained documents must support the figures and positions used in the return.",
      "Weak records make tax filing, audit response, banking reviews, and future restructuring harder.",
    ],
    relatedServiceHrefs: [
      "/professional-bookkeeping-services-in-dubai",
      "/corporate-tax-filing-services-in-the-uae",
      "/accounting-tax",
    ],
    sections: [
      {
        title: "Why Record-Keeping Has Become a Board-Level Issue",
        paragraphs: [
          "Corporate tax has made record-keeping a central compliance issue for UAE businesses. The tax return is only the final summary. The real strength of the filing position depends on the documents, accounts, and working papers behind it.",
          "For SMEs and founder-led companies, this can feel administrative, but it has commercial consequences. Weak records can delay filing, complicate bank reviews, create audit exposure, and make future restructuring or sale conversations harder.",
        ],
      },
      {
        title: "The Seven-Year Retention Rule",
        paragraphs: [
          {
            text: "UAE corporate tax record-keeping generally requires businesses to retain relevant records and documents for at least seven years after the end of the tax period to which they relate.",
            sourceIndexes: [1],
          },
          "That retention period applies because the FTA must be able to verify the taxable income, exemption position, filing position, and supporting calculations after the return has been submitted.",
        ],
        callout: {
          type: "deadline",
          title: "Retention period: at least seven years",
          text: "Keep the records from the end of the relevant tax period, not merely from the date the return was filed. Preserve readable source documents and the calculations that connect them to the return.",
        },
      },
      {
        title: "What Records Should a UAE Business Keep?",
        paragraphs: [
          "The exact file depends on the business model, tax position, and entity type. Keep the documents that explain revenue, expenses, assets, liabilities, ownership, and tax calculations.",
        ],
        bullets: [
          "Financial statements and management accounts for the relevant period",
          "Sales invoices, credit notes, contracts, and revenue support",
          "Purchase invoices, supplier statements, receipts, and expense support",
          "Bank statements, loan agreements, and financing documents",
          "Payroll records, employee cost support, and connected-person payment details",
          "Fixed asset registers, depreciation schedules, and disposal records",
          "VAT returns and reconciliations where the business is VAT registered",
          "Corporate tax calculations, adjustments, returns, and filing confirmations",
        ],
      },
      {
        title: "Evidence for free zone tax treatment",
        paragraphs: [
          "Free zone companies should be especially careful. A 0% corporate tax position, where available, depends on more than having a free zone license. The company may need to support its activity, income classification, substance, and customer or transaction profile.",
          "If the business has both free zone and mainland interaction, the records should make it easier to separate qualifying and non-qualifying income rather than leaving that analysis until filing time.",
        ],
        bullets: [
          "License and activity documents",
          "Lease, office, staff, or operational substance evidence",
          "Customer contracts and transaction flow by income type",
          "Evidence supporting qualifying income treatment where relevant",
          "Board, ownership, and management records where structure matters",
        ],
      },
      {
        title: "Common Record-Keeping Mistakes",
        paragraphs: [
          "Many businesses technically keep documents but still struggle when those documents need to support a filing position. The problem is usually organization, completeness, or unclear linkage between the records and the numbers in the accounts.",
        ],
        bullets: [
          "Keeping invoices but not matching them properly to bank payments",
          "Using broad expense categories with no clear business explanation",
          "Not retaining contracts or delivery evidence behind revenue",
          "Mixing owner, shareholder, and company expenses without clear treatment",
          "Leaving VAT, bookkeeping, and corporate tax files in separate disconnected folders",
        ],
      },
      {
        title: "How to organize the record file",
        paragraphs: [
          "Organize the file so a business owner, accountant, tax adviser, auditor, or authority reviewer can understand the period without reconstructing it from separate records.",
        ],
        table: {
          columns: ["Folder", "What It Should Contain", "Why It Helps"],
          rows: [
            ["Accounts", "Financial statements, ledgers, trial balance, and reconciliations", "Shows how the numbers were built"],
            ["Revenue", "Invoices, contracts, customer support, and receipts", "Supports taxable income and transaction timing"],
            ["Expenses", "Supplier invoices, payment proof, and business-purpose notes", "Supports deductions and reduces ambiguity"],
            ["Tax", "VAT returns, corporate tax return, tax computation, and filing evidence", "Keeps the compliance file complete"],
            ["Structure", "Licenses, ownership documents, board records, and free zone evidence", "Supports entity status and tax treatment"],
          ],
        },
      },
      {
        title: "How Zenesis Helps",
        paragraphs: [
          "Zenesis helps businesses organize their bookkeeping, accounting records, VAT files, and corporate tax support so the annual filing process becomes easier to manage.",
          "The record system should support filing and review while remaining usable for the people running the company.",
        ],
      },
    ],
    closingParagraphs: [
      "The retained records must support the figures and positions used in the Corporate Tax return.",
      "Organized source documents, reconciliations, and calculations reduce the time needed to prepare a filing or answer a later review request.",
    ],
    closingCta:
      "If your records are scattered across invoices, bank statements, VAT files, and accounting software, Zenesis can help organize the file before the next filing cycle.",
  },
  {
    slug: "uae-free-zone-corporate-tax-rules-clarified-2026",
    category: "Business Setup",
    title:
      "UAE Free Zone Corporate Tax Rules Clarified: What Businesses Need to Know in 2026",
    description:
      "How the 2025 clarifications on qualifying activities, economic substance, commodity trading, and mainland transactions affect 0% free zone treatment.",
    dateLabel: "January 20, 2026",
    author: "Cecilia D'Cunha",
    heroImageSrc: versionedAssetPath("/insights/free-zone-corporate-tax-rules.webp", insightImageVersion),
    heroImageAlt: "Business professionals in a Dubai advisory meeting",
    keyTakeaways: [
      "Free zone 0% treatment depends on qualifying activity, substance, and accurate income classification.",
      "Permitted mainland transactions still need to be classified and documented under the applicable rules.",
      "This is no longer a page where founders can rely on broad assumptions about free zone tax benefits.",
    ],
    relatedServiceHrefs: [
      "/free-zones",
      "/corporate-tax-registration-in-the-uae",
      "/corporate-tax-filing-services-in-the-uae",
    ],
    sections: [
      {
        title: "What changed for free zone businesses",
        paragraphs: [
          "Under Executive Council Resolution No. 11 of 2025, certain companies operating in Dubai free zones can apply for permits to conduct business in mainland Dubai.",
          "This landmark regulation, issued by the Government of Dubai and managed by the Department of Economy and Tourism, fundamentally changes how Free Zone Establishments and Free Zone Companies interact with the local market. For founders, startups, and SMEs, this offers an opportunity for regional growth and operational simplification.",
        ],
      },
      {
        title: "Understanding the Context",
        paragraphs: [
          "When the UAE introduced the federal corporate tax regime in 2023, free zone businesses were initially promised continued benefits under certain conditions.",
          "However, many grey areas remained, particularly around what counts as qualifying income, economic substance, and interactions with mainland entities.",
          "The 2025 Ministerial Decisions resolve much of this uncertainty by providing more specific rules, definitions, and compliance requirements.",
        ],
      },
      {
        title: "Key Highlights of Ministerial Decisions No. 229 and 230 (2025)",
        paragraphs: [
          "The Ministry's rulings address three areas that affect whether a business can continue applying the 0% Corporate Tax rate.",
        ],
        bullets: [
          "Qualifying activities are defined more tightly and typically include manufacturing, processing, re-export, holding company activities with qualifying income, commodity trading under recognised price benchmarks, and certain services provided between qualifying free-zone entities.",
          "Recognised price reporting is required for commodity traders, using internationally recognised benchmarks such as Platts or LME to support fair-value treatment.",
          "Economic substance requirements are strengthened, including physical presence, UAE-based employees or management, board decisions made in the UAE, and proper documentation of leases, staff, and business activity.",
        ],
      },
      {
        title: "Expanded Scope of Qualifying Commodity Trading",
        paragraphs: [
          "The UAE has expanded the definition of commodity trading to include sustainability-linked categories such as industrial chemicals, environmental commodities like carbon credits and energy certificates, and secondary or by-product materials.",
          "This expansion aligns with the UAE's broader green economy direction and reflects the country's focus on sustainable and circular-economy sectors.",
        ],
      },
      {
        title: "Who Still Qualifies for 0% Corporate Tax?",
        paragraphs: [
          {
            text: "The 0% rate is available only to a Qualifying Free Zone Person on Qualifying Income and remains subject to the statutory conditions, exclusions, and de minimis requirements.",
            sourceIndexes: [1],
          },
        ],
        callout: {
          type: "warning",
          title: "A free-zone licence does not guarantee 0% tax",
          text: "The entity, income, substance, transactions, and compliance position must all be tested. Non-qualifying income or a failed condition can change the tax outcome.",
        },
        table: {
          columns: ["Qualifying Activity", "Tax Rate", "Key Conditions"],
          rows: [
            ["Manufacturing, re-export, and distribution", "0%", "Must be conducted within a free zone"],
            ["Holding company operations", "0%", "Income must be from qualifying sources"],
            ["Commodity trading (expanded categories)", "0%", "Subject to recognised price benchmarks"],
            ["Services between free-zone entities", "0%", "Must meet economic substance criteria"],
          ],
        },
      },
      {
        title: "What Does Not Qualify for 0% Corporate Tax",
        bullets: [
          "Mainland-derived income, unless within approved frameworks or structures",
          "Passive income without sufficient UAE presence",
          "Non-qualifying business activities that do not appear on the approved list",
          "Paper entities or companies lacking real operational substance",
        ],
      },
      {
        title: "Pros and Cons of the New Free Zone Tax Clarifications",
        paragraphs: [
          "The framework gives eligible businesses a route to mainland activity, with additional permit and compliance requirements.",
        ],
        bullets: [
          "Regulatory clarity helps businesses plan tax strategy with greater confidence",
          "Fairer competition means only companies with real economic activities retain the benefit",
          "The framework improves global credibility by aligning more closely with OECD and international transparency standards",
          "The inclusion of sustainability-linked commodity categories supports newer green business models",
          "Compliance requirements are higher and demand better documentation",
          "Entities dealing with both mainland and free zone clients may face more complex reporting",
          "Non-qualifying income may become subject to the standard 9% corporate tax rate",
          "Smaller entities may need to increase their local footprint to maintain eligibility",
        ],
      },
    ],
  },
  {
    slug: "uae-corporate-tax-registrations-cross-640000-businesses",
    category: "Accounting and Tax",
    title: "UAE Corporate Tax Registrations Cross 640,000: What It Means for Businesses",
    description:
      "What rising Corporate Tax registrations mean for UAE compliance and the steps businesses should take now.",
    dateLabel: "January 20, 2026",
    author: "Glenita D'Souza",
    heroImageSrc: versionedAssetPath("/insights/640000-corporate-tax-registrations.webp", insightImageVersion),
    heroImageAlt: "Professionals reviewing UAE corporate tax documentation",
    keyTakeaways: [
      "Registration volume shows that corporate tax is now a normal operating requirement, not an early-transition issue.",
      "Many businesses are registered but still not filing-ready.",
      "Books, year-end timing, and free zone classification are where a lot of risk still sits.",
    ],
    relatedServiceHrefs: [
      "/corporate-tax-registration-in-the-uae",
      "/corporate-tax-filing-services-in-the-uae",
      "/professional-bookkeeping-services-in-dubai",
    ],
    sections: [
      {
        title: "What the registration milestone shows",
        paragraphs: [
          {
            text: "The UAE corporate tax regime is no longer an early-stage transition. The Federal Tax Authority reported more than 640,000 corporate tax registrations, showing how widely the system now reaches across the business market.",
            sourceIndexes: [1],
          },
          "For founders, SMEs, and established groups, that matters because the environment has shifted from observation to enforcement. Registration, record-keeping, and filing readiness are now baseline expectations rather than optional preparation work.",
        ],
        callout: {
          type: "action",
          title: "Registration is only the first control point",
          text: "Confirm the tax period, maintain the supporting records, close the accounts on time, and prepare the return before the filing window becomes urgent.",
        },
      },
      {
        title: "What the Registration Numbers Signal",
        paragraphs: [
          "The rising registration count signals that tax registration is becoming widely normalized across mainland and free zone businesses alike.",
          "It also shows that the tax authority's education, onboarding, and deadline-extension approach has succeeded in pulling a large part of the market into the system before more serious enforcement pressure begins.",
        ],
        bullets: [
          "Corporate tax compliance is now a mainstream operational requirement",
          "Businesses are expected to maintain current records and consistent reporting",
          "Free zone entities are not outside the framework just because they may qualify for 0% treatment",
          "Late preparation is more likely to create risk than before",
        ],
      },
      {
        title: "How the Rules Land on Different Business Types",
        table: {
          columns: ["Entity Type", "Typical Tax Position", "What Matters Most"],
          rows: [
            ["Mainland company", "9% above the relevant threshold", "Registration, return preparation, and payment readiness"],
            ["Qualifying Free Zone person", "0% on qualifying income", "Substance, activity scope, and segregation of qualifying vs. non-qualifying income"],
            ["Non-qualifying Free Zone business", "Standard corporate tax treatment", "Correct classification and documentation of income streams"],
            ["SMEs and founder-led businesses", "Depends on structure and profit profile", "Basic tax readiness, accounting discipline, and filing deadlines"],
          ],
        },
      },
      {
        title: "Where Businesses Are Still Struggling",
        paragraphs: [
          "Registration volume does not automatically mean filing readiness. Many businesses have completed the registration step but are still weak on the underlying accounting and documentation required to support future returns.",
        ],
        bullets: [
          "Limited internal tax knowledge in small and mid-sized companies",
          "Weak bookkeeping and chart-of-accounts discipline",
          "Unclear free zone substance evidence",
          "Confusion around financial-year timing and filing deadlines",
          "Insufficient review of related-party transactions and group structures",
        ],
      },
      {
        title: "Steps for UAE businesses",
        paragraphs: [
          "If your business is registered, the next phase is not waiting. It is making sure the registration sits on top of clean books, defensible records, and a filing calendar that the business can actually meet.",
        ],
        bullets: [
          "Confirm that your Tax Registration Number and portal access are in place",
          "Review whether your current bookkeeping is strong enough to support tax return preparation",
          "Check your financial year-end and calculate the eventual filing deadline now",
          "Document free zone substance properly if you expect 0% qualifying treatment",
          "Schedule periodic tax reviews instead of waiting until the return deadline",
        ],
      },
    ],
    closingParagraphs: [
      "More than 640,000 registrations show the scale of the Corporate Tax system across the UAE business market.",
      "Businesses that prepare early have more time to reconcile records and resolve filing issues before the deadline.",
    ],
    closingCta:
      "If your business is registered but not yet fully tax-ready, Zenesis can help you review the structure, records, and next compliance steps.",
  },
  {
    slug: "uae-visa-reforms-2025-entrepreneurs-expats",
    category: "Visa and Banking",
    title: "UAE Visa Reforms 2025: What Entrepreneurs and Expats Need to Know",
    description:
      "How the 2025 UAE visa changes affect founders, skilled professionals, and applicants planning a longer-term move.",
    dateLabel: "September 19, 2025",
    author: "Cecilia D'Cunha",
    heroImageSrc: versionedAssetPath("/insights/uae-visa-reforms.webp", insightImageVersion),
    heroImageAlt: "UAE visa reforms visual focused on residency changes for entrepreneurs and expats",
    keyTakeaways: [
      "The 2025 reforms make visa planning more category-specific, not more generic.",
      "Founders need to align visa planning with setup and relocation timing from the beginning.",
      "The wrong category choice still creates most of the avoidable delay.",
    ],
    relatedServiceHrefs: [
      "/visa-and-banking",
      "/uae-company-visa",
      "/golden-visa-services-in-the-uae",
    ],
    sections: [
      {
        title: "What Changed in 2025",
        paragraphs: [
          {
            text: "The UAE's long-term residency framework includes dedicated routes for investors, entrepreneurs, specialised talent, and skilled professionals, including Golden and Green Residency categories.",
            sourceIndexes: [1, 2, 3],
          },
          "The residency framework has several categories with different eligibility and evidence requirements. Applicants should identify the applicable category before preparing documents.",
        ],
        callout: {
          type: "definition",
          title: "Residency categories are evidence-based",
          text: "Eligibility depends on the specific route and supporting evidence. A company licence, job title, investment, or qualification should not be treated as automatic approval.",
        },
      },
      {
        title: "Why Entrepreneurs Should Pay Attention",
        paragraphs: [
          "For entrepreneurs, visa changes affect more than residency status. They influence how quickly a founder can relocate, how family sponsorship is handled, how employees are onboarded, and how the business sequences setup, licensing, and immigration steps.",
        ],
        bullets: [
          "Founders can plan relocation around the eligibility and timing of the selected residency route",
          "Business setup decisions and visa planning often need to be aligned from the beginning",
          "Longer-term residency options help founders plan beyond a short initial setup cycle",
          "Specialized categories can benefit professionals operating in innovation-led sectors",
        ],
      },
      {
        title: "What Expats and Skilled Professionals Should Watch",
        paragraphs: [
          "For expats, the most important question is not simply whether a new visa category exists. It is whether the category genuinely fits employment status, income profile, qualifications, and long-term residency goals.",
          "The application issues usually involve the sponsorship route, eligibility documents, medical examination, Emirates ID timing, and family sponsorship after the principal applicant is approved.",
        ],
      },
      {
        title: "Main Areas of Reform",
        bullets: [
          "Refinement of long-term residency categories such as Golden Visa pathways",
          "More flexibility for self-sponsored or independently qualifying profiles",
          "Continued focus on attracting specialised knowledge sectors and strategic talent",
          "Broader alignment between immigration policy and the UAE's economic-development goals",
        ],
      },
      {
        title: "What This Means in Practice",
        paragraphs: [
          "Applicants need to select the correct category. Applying through an inapplicable route, or assuming a category is broader than it is, creates delays and document rework.",
          "That matters most for founders and senior professionals who are trying to coordinate company setup, travel, family relocation, and banking or licensing activity at the same time.",
        ],
      },
      {
        title: "How to Approach Visa Planning Properly",
        bullets: [
          "Start with the right visa category rather than forcing documents into the wrong route",
          "Check whether the immigration path depends on company formation, employment, investment, or talent criteria",
          "Prepare supporting documents early, especially if attestations or overseas records are involved",
          "Sequence visa planning alongside business setup instead of treating it as a later admin step",
        ],
      },
    ],
    closingParagraphs: [
      "The 2025 reforms use category-specific eligibility and document requirements.",
      "Plan the visa category alongside company setup, employment, investment, relocation, and family sponsorship where those factors apply.",
    ],
    closingCta:
      "If you need help connecting company setup, residency planning, and the right visa route, Zenesis can help you map the next step clearly.",
  },
  {
    slug: "business-setup-mistakes-dubai",
    category: "Business Setup",
    title: "Business Setup Mistakes in Dubai: 7 Costly Errors to Avoid",
    description:
      "Business setup mistakes in Dubai, including unsuitable licence routes, incomplete banking preparation, visa issues, tax requirements, and renewal costs.",
    dateLabel: "September 18, 2025",
    author: "Cecilia D'Cunha",
    heroImageSrc: versionedAssetPath("/insights/mistakes-to-avoid.webp", insightImageVersion),
    heroImageAlt: "Dubai business setup visual representing common mistakes founders should avoid",
    keyTakeaways: [
      "Most business setup mistakes in Dubai happen before the application is filed, when founders choose route, activity, and cost assumptions too quickly.",
      "A cheap license can become expensive if it creates banking, visa, office, renewal, or tax problems later.",
      "The strongest setup plan connects company formation, visas, banking, bookkeeping, VAT, corporate tax, and renewals from the beginning.",
    ],
    relatedServiceHrefs: [
      "/business-setup",
      "/mainland-vs-free-zone-dubai",
      "/business-setup-cost-dubai",
    ],
    relatedInsightSlugs: [
      "business-consultant-beyond-company-registration",
      "uae-corporate-tax-filing-deadlines-2026",
    ],
    sections: [
      {
        title: "Business Setup Mistakes in Dubai: Quick Answer",
        paragraphs: [
          "The most common business setup mistakes in Dubai are choosing the wrong mainland or free zone route, selecting an activity that does not match the real business model, budgeting only for the license, ignoring visa and banking requirements, delaying tax and bookkeeping setup, and underestimating renewal or post-license costs.",
          "Before incorporation, decide who the company will serve, where it will invoice, whether it needs visas, which bank documents it can provide, and what compliance work begins after licensing.",
        ],
      },
      {
        title: "Why Founders Make These Mistakes",
        paragraphs: [
          "Dubai is attractive because the setup environment is fast, internationally connected, and commercially ambitious. That same speed is also why founders often make decisions too early, before they understand the local structure, cost base, and compliance consequences.",
          "Most expensive setup mistakes do not come from one dramatic error. They come from early assumptions that ripple into licensing, visas, banking, and tax treatment later.",
        ],
      },
      {
        title: "1. Choosing the Cheapest Setup Package Without Checking Fit",
        paragraphs: [
          {
            text: "The cheapest advertised business setup package in Dubai is not always the cheapest route once the company starts operating. Compare starting prices before choosing a route because a low headline price may exclude visas, establishment card steps, office upgrades, activity changes, attestation, banking preparation, tax registration, or renewal costs.",
            inlineLinks: [
              {
                text: "Compare starting prices before choosing a route",
                href: "/business-setup-cost-dubai",
              },
            ],
          },
          "A low-cost route can fail to support the founder's client model, visa needs, or bank account application. Compare the first-year and renewal costs with what the company can do after approval.",
        ],
        bullets: [
          "Compare first-year and renewal cost as well as the licence fee",
          "Check what is excluded from the advertised package",
          "Confirm whether the route supports visas, banking, and office requirements",
          "Avoid choosing a package before activity and market access are clear",
        ],
      },
      {
        title: "2. Choosing the Wrong Mainland, Free Zone, or Offshore Route",
        paragraphs: [
          "Mainland, free zone, and offshore structures are not interchangeable. The wrong route can create avoidable restrictions around market access, visas, banking expectations, office position, activity scope, or future operating flexibility.",
          {
            text: "Mainland is often better for direct UAE market access and local client work. Free zones can suit consulting, digital, trade, and international models when the zone and activity fit. Offshore is usually for holding or international structuring, not day-to-day UAE trading.",
            sourceIndexes: [1, 2],
          },
        ],
        callout: {
          type: "warning",
          title: "Do not choose the jurisdiction from price alone",
          text: "Test the route against the intended activity, clients, market access, visas, office needs, banking profile, renewal cost, and tax position before paying for a package.",
        },
        bullets: [
          "Use mainland when unrestricted local UAE operating activity matters",
          "Use free zone when the activity, package, client model, and banking profile fit",
          "Use offshore for holding or international use cases, not local operating activity",
          "Compare mainland vs free zone before committing to a license route",
        ],
      },
      {
        title: "3. Selecting the Wrong Business Activity or License Scope",
        paragraphs: [
          "The business activity is not a small form-field detail. It affects the authority or free zone, external approvals, bank review, client acceptance, invoices, and whether the company can legally carry out the work it plans to sell.",
          "A vague or narrow activity can create problems after incorporation. A broad activity can also create approval, cost, or banking issues if it does not match the real business model.",
        ],
        bullets: [
          "Map activity wording to the actual services or trading model",
          "Check whether external approvals or professional qualifications are needed",
          "Avoid activity choices that make banking harder to explain",
          "Make sure the activity supports the invoices and contracts the company expects",
        ],
      },
      {
        title: "4. Ignoring Visa, Office, and Establishment Requirements",
        paragraphs: [
          "Many founders treat visas as a later administrative step, but visa planning can affect the right package, office requirement, establishment steps, and total setup cost. The same is true for flexi-desk, shared office, Ejari, and immigration-file decisions.",
          "If the company needs founder visas, employee visas, or family sponsorship, that should be discussed before selecting the setup route. Otherwise the company may be licensed but not ready to support the people behind it.",
        ],
        bullets: [
          "Confirm founder and employee visa needs before choosing the package",
          "Check office or desk requirements linked to visa capacity",
          "Plan medical, Emirates ID, insurance, and family sponsorship timing",
          "Avoid setup routes that issue a license but do not support the real residency plan",
        ],
      },
      {
        title: "5. Leaving Business Banking Until After Incorporation",
        paragraphs: [
          "Corporate bank account opening in the UAE is often one of the slowest post-setup steps. Banks review the company structure, activity, shareholder profile, source of funds, expected transactions, and business rationale.",
          "If the company is formed without considering the banking file, the founder may discover too late that the activity, structure, documents, or business model explanation is weak for bank review.",
        ],
        bullets: [
          "Prepare KYC and source-of-funds context early",
          "Keep shareholder, license, office, and business-model documents organized",
          "Make expected clients, suppliers, currencies, and transaction flow easy to explain",
          "Choose a setup route that can support the bank account story",
        ],
      },
      {
        title: "6. Treating Tax, VAT, and Bookkeeping as a Later Problem",
        paragraphs: [
          "Registration, VAT, bookkeeping, and corporate tax readiness should not be deferred until after launch. Weak record-keeping early on makes later compliance more expensive and more error-prone.",
          "UAE businesses now need to think about accounting records, VAT registration where applicable, corporate tax registration, filing deadlines, and financial-year planning much earlier than many founders expect.",
        ],
        bullets: [
          "Set up bookkeeping before transactions become messy",
          "Confirm VAT registration exposure and invoicing requirements",
          "Track the financial year and future corporate tax filing deadline",
          "Keep bank, invoice, contract, and expense records organized from day one",
        ],
      },
      {
        title: "7. Underestimating Renewals and Post-License Follow-Through",
        paragraphs: [
          "Founders sometimes focus entirely on the legal setup and ignore the operational reality that follows: approvals, renewals, document handling, banking expectations, and relationship-driven business processes.",
          "A setup is only successful if the company can actually operate smoothly after incorporation.",
        ],
        bullets: [
          "Budget for renewals, amendments, and document updates",
          "Track license, establishment, visa, and tax deadlines in one calendar",
          "Keep authority documents, shareholder records, and bank documents easy to access",
          "Review the setup route if the business changes activity, ownership, or hiring plans",
        ],
      },
      {
        title: "What Founders Should Do Instead",
        paragraphs: [
          "The better approach is to start with the operating model rather than the cheapest license. Before filing, founders should understand who the company will serve, how it will invoice, whether it needs visas, what the bank will need to see, and what compliance starts after incorporation.",
        ],
        bullets: [
          "Choose structure based on how the business will operate after setup",
          "Plan visas, banking, and compliance together with formation",
          "Build a realistic setup budget and timeline",
          "Put accounting and tax discipline in place early",
          "Review operating, banking, visa, and tax requirements before choosing a low-cost setup",
        ],
      },
    ],
    faqs: [
      {
        question: "What are the most common business setup mistakes in Dubai?",
        answer:
          "The most common mistakes are choosing the cheapest setup package without checking fit, selecting the wrong mainland or free zone route, using the wrong business activity, ignoring visa and banking requirements, delaying bookkeeping and tax planning, and underestimating renewal or post-license costs.",
      },
      {
        question: "Is the cheapest business setup package in Dubai a bad idea?",
        answer:
          "Not always. A low-cost package can work when it fits the activity, visa needs, office position, banking file, renewal cost, and client model. It becomes risky when the low headline price creates restrictions or extra costs after the license is issued.",
      },
      {
        question: "Should I choose mainland or free zone for a Dubai business?",
        answer:
          "The right choice depends on how the business will operate. Mainland usually suits direct UAE market access and local client work. Free zone can suit consulting, digital, trade, and international models where the zone, activity, package, and banking profile fit.",
      },
      {
        question: "Why does business banking matter before company formation?",
        answer:
          "Banks review the activity, shareholder profile, source of funds, documents, expected transactions, and business model. If banking is considered only after incorporation, the company may have a license but a weak account-opening file.",
      },
      {
        question: "When should tax and bookkeeping be planned for a new UAE company?",
        answer:
          "Bookkeeping, VAT exposure, corporate tax registration, financial-year tracking, and record-keeping should be planned from the start. Waiting until the first filing deadline usually makes compliance more expensive and harder to clean up.",
      },
    ],
    closingParagraphs: [
      "A UAE setup should support what the founder needs to do after incorporation, including invoicing, visas, banking, tax, and renewals.",
      "Avoiding the common early mistakes usually saves more time and money than correcting them later.",
    ],
    closingCta:
      "Zenesis can compare the company structure against the intended activity, market, visas, banking, and first-year costs before filing.",
  },
  {
    slug: "complete-dubai-golden-visa-guide",
    category: "Visa and Banking",
    title: "Dubai Golden Visa Categories and Requirements",
    description:
      "A current guide to UAE Golden Residency categories, five-year and ten-year routes, key documents, and how to prepare for category-specific assessment.",
    dateLabel: "July 31, 2026",
    author: "Cecilia D'Cunha",
    heroImageSrc: versionedAssetPath("/services/golden-visa.webp"),
    heroImageAlt: "Dubai Golden Visa planning visual focused on residency and eligibility guidance",
    heroImageClassName: "object-[28%_82%]",
    keyTakeaways: [
      "Golden Residency is issued for five or ten years depending on the eligibility category.",
      "Investment, entrepreneurship, talent, student, humanitarian, and frontline categories follow different evidence routes.",
      "Eligibility and approval remain subject to the relevant authority and the applicant's supporting evidence.",
    ],
    relatedServiceHrefs: [
      "/golden-visa-services-in-the-uae",
      "/visa-and-banking",
      "/uae-company-visa",
    ],
    sections: [
      {
        title: "What the Golden Visa Is",
        paragraphs: [
          {
            text: "The UAE Golden Residency is a renewable long-term residence for eligible applicants. Depending on the category, it is issued for five or ten years without requiring a sponsor.",
            sourceIndexes: [1],
          },
          "Eligible holders can live, work, study, and invest in the UAE and may sponsor a spouse and children in accordance with the applicable requirements.",
        ],
        callout: {
          type: "definition",
          title: "Eligibility route first, document list second",
          text: "The required evidence changes by category. Confirm the qualifying route before collecting documents or relying on a generic application checklist.",
        },
      },
      {
        title: "Why It Gets So Much Attention",
        paragraphs: [
          "For many applicants, the Golden Visa is attractive because it sits at the intersection of residency, business planning, family stability, and long-term UAE presence.",
          "But the route only works well when the category selection is correct and the documentation is built around the actual basis of eligibility.",
        ],
      },
      {
        title: "Five-year and ten-year routes by category",
        table: {
          columns: ["Category", "Published duration", "Key starting point"],
          rows: [
            ["Public investment", "10 years", "Minimum AED 2 million qualifying investment or another published investment route"],
            ["Real estate investment", "5 years", "Qualifying UAE property ownership valued at AED 2 million or more"],
            ["Entrepreneurs", "5 years", "Innovative or technology-based project with the required valuation and authority or incubator letter"],
            ["Exceptional talent and specialised expertise", "10 years", "Category-specific accreditation, recommendation, experience, or qualification evidence"],
            ["Outstanding students", "5 or 10 years", "Academic excellence and the required school, university, or education recommendation"],
            ["Humanitarian pioneers and frontline heroes", "10 years", "Documented recognition, service, contribution, or relevant authority evidence"],
          ],
        },
      },
      {
        title: "What the main categories need to prove",
        paragraphs: [
          {
            text: "The official requirements are category-specific. The correct evidence route should be confirmed before an applicant relies on a generic document checklist.",
            sourceIndexes: [1],
          },
        ],
        bullets: [
          "Investors may need investment-fund, commercial-licence, tax-payment, or land-registration evidence depending on the route",
          "Entrepreneurs may need an auditor's project-value letter and confirmation from an accredited incubator or relevant emirate authority",
          "Doctors, scientists, inventors, creatives, executives, athletes, and specialists follow different accreditation or recommendation routes",
          "Outstanding students need the applicable academic results and recommendation evidence",
          "Passport, residence, insurance, qualification, employment, and family documents depend on the category and application stage",
        ],
      },
      {
        title: "Where Applications Often Go Wrong",
        bullets: [
          "Applying through the wrong eligibility category",
          "Using incomplete or weak supporting documents",
          "Assuming property, salary, or company status automatically guarantees approval",
          "Treating the process as simple form submission rather than category-based review",
          "Using requirements from one emirate or category as though they apply to every application",
        ],
      },
      {
        title: "Authority and application route",
        paragraphs: [
          "A strong application starts with the correct eligibility category, the current official service route, and the documents required by the responsible authority.",
          "ICP provides the federal Golden Residency framework and eligibility information. Application procedures and supporting approvals can also depend on the emirate and category, including GDRFA processes in Dubai.",
          "Zenesis can help organise the eligibility review and document sequence, but the relevant government authority makes the final eligibility and approval decision.",
        ],
        callout: {
          type: "warning",
          title: "Confirm requirements before applying",
          text: "Eligibility criteria, documents, service channels, fees, and processing requirements can change. Confirm the current authority requirements for the applicant's category and emirate before submission.",
        },
      },
    ],
    closingParagraphs: [
      "Golden Residency is issued for five or ten years depending on the approved category.",
      "Identify the category first, then prepare the evidence and follow the requirements published for that category and emirate.",
    ],
    closingCta:
      "If you want help understanding which Golden Visa route fits your profile, Zenesis can help you assess the category and prepare the next steps.",
  },
];

export function getInsightPost(slug: string) {
  return insightPosts.find((post) => post.slug === slug);
}
