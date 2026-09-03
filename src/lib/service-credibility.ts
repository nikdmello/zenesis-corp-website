import { versionedAssetPath } from "@/lib/asset-paths";

export type CredibilitySource = {
  title: string;
  publisher: string;
  href: string;
};

export type ServiceCredibility = {
  expert: {
    name: string;
    credentials: string;
    role: string;
    bio: string;
    imageSrc: string;
    profileHref: string;
  };
  verificationLabel: string;
  note: string;
  sources: CredibilitySource[];
};

const experts = {
  cecilia: {
    name: "Cecilia D'Cunha",
    credentials: "BCom, LLB, ACS",
    role: "Founder, Zenesis Corporation",
    bio: "A qualified Chartered Secretary with more than 30 years of experience across offshore incorporation, UAE company setup, and corporate compliance.",
    imageSrc: versionedAssetPath("/people/Cecilia_DCunha.webp"),
    profileHref: "/about",
  },
  sajal: {
    name: "Sajal Arora",
    credentials: "BCom, CA, CFA",
    role: "Director - Accountancy and Taxation",
    bio: "A Dubai-based Chartered Accountant with more than 13 years of experience across finance, taxation, auditing, banking, treasury, costing, and project financing.",
    imageSrc: versionedAssetPath("/people/Sajal_Arora.webp"),
    profileHref: "/about",
  },
  glenita: {
    name: "Glenita D'Souza",
    credentials: "CA Intermediate (IPCC), BCom",
    role: "Accounts Manager and Compliance Officer",
    bio: "Glenita oversees management accounts, bookkeeping, VAT and corporate tax compliance, UAE free zone company formations, and HR consultancy support for clients at Zenesis.",
    imageSrc: versionedAssetPath("/people/Glenita_D'Souza.webp"),
    profileHref: "/about",
  },
} as const;

const sources = {
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
  freeZoneOperations: {
    title: "Running a business in a free zone",
    publisher: "The Official Platform of the UAE Government",
    href: "https://u.ae/en/information-and-services/business/doing-business-in-free-zones/running-a-business-in-a-free-zone-",
  },
  freeZoneMainlandPermit: {
    title: "Dubai launches the Free Zone Mainland Operating Permit",
    publisher: "Government of Dubai Media Office",
    href: "https://www.mediaoffice.ae/en/news/2025/october/08-10/dubai-launches-free-zone-mainland-operating-permit",
  },
  dubaiBusinessLicensing: {
    title: "Business licensing in Dubai",
    publisher: "Dubai Department of Economy and Tourism",
    href: "https://www.dubaidet.gov.ae/en/licences-and-permits/business-licensing",
  },
  offshoreRegistry: {
    title: "RAK ICC regulations and policies",
    publisher: "RAK International Corporate Centre",
    href: "https://www.rakicc.com/guidance/rules-regulations/",
  },
  corporateTaxGeneral: {
    title: "General Corporate Tax Guide",
    publisher: "UAE Federal Tax Authority",
    href: "https://tax.gov.ae/DataFolder/Files/Guides/CT/CT%20General%20Guide%20-%20EN%20-%2010%2009%202023.pdf",
  },
  corporateTaxRegistration: {
    title: "Corporate Tax registration service",
    publisher: "UAE Federal Tax Authority",
    href: "https://tax.gov.ae/en/services/corporate.tax.registration.aspx",
  },
  corporateTaxReturns: {
    title: "Corporate Tax Guide: Tax Returns",
    publisher: "UAE Federal Tax Authority",
    href: "https://www.tax.gov.ae/Datafolder/Files/Guides/CT/CT-Returns-EN-11-11-2024.pdf",
  },
  vatRegistration: {
    title: "Value Added Tax registration service",
    publisher: "UAE Federal Tax Authority",
    href: "https://www.tax.gov.ae/en/services/vat.registration.aspx",
  },
  vatReturns: {
    title: "Value Added Tax Returns User Guide",
    publisher: "UAE Federal Tax Authority",
    href: "https://tax.gov.ae/-/media/Files/EN/PDF/Guides/VAT-Returns-User-Guide.pdf",
  },
  documentAttestation: {
    title: "Attestation of official documents and certificates",
    publisher: "UAE Ministry of Foreign Affairs",
    href: "https://www.mofa.gov.ae/Services/Attestation",
  },
  businessClosure: {
    title: "Closing a business on the mainland",
    publisher: "The Official Platform of the UAE Government",
    href: "https://u.ae/en/information-and-services/business/doing-business-on-the-mainland/closing-a-business-on-the-mainland-",
  },
  foreignBranches: {
    title: "Branches of foreign company services",
    publisher: "UAE Ministry of Economy and Tourism",
    href: "https://www.moet.gov.ae/en/w/foreign-company-services-beta-version",
  },
  foreignBranchRequirements: {
    title: "Requirements for establishing a branch of a foreign company",
    publisher: "UAE Ministry of Economy and Tourism",
    href: "https://www.moet.gov.ae/en/-/what-are-the-requirements-for-establishing-a-branch-of-a-foreign-company-",
  },
  beneficialOwnerProcedures: {
    title: "Cabinet Decision No. 109 of 2023 on beneficial-owner procedures",
    publisher: "UAE Ministry of Economy and Tourism",
    href: "https://www.moet.gov.ae/documents/20121/0/Cabinet%2BDecision%2B109-2023%2BEnglish%2BVersion%2B06062024.pdf/f7138fc2-fe12-cef3-077b-b4c49c12eabd",
  },
  economicSubstanceAmendment: {
    title: "Cancellation of Economic Substance reporting requirements after 2022",
    publisher: "UAE Ministry of Finance",
    href: "https://mof.gov.ae/en/news/ministry-of-finance-announces-amendment-to-cabinet-decision-on-economic-substance-requirements/",
  },
  establishmentCard: {
    title: "Issuing an Establishment Card",
    publisher: "Federal Authority for Identity, Citizenship, Customs & Port Security",
    href: "https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e6d",
  },
  privateSectorResidence: {
    title: "Issuing residence permits for the private sector",
    publisher: "General Directorate of Identity and Foreigners Affairs - Dubai",
    href: "https://gdrfad.gov.ae/en/services/bf4095ea-56e2-11ea-0320-0050569629e8",
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
  bankingKyc: {
    title: "Guidance on customer due diligence, KYC, and record-keeping",
    publisher: "Central Bank of the UAE Rulebook",
    href: "https://rulebook.centralbank.ae/en/rulebook/guidance-licensed-financial-institutions-customer-due-diligenceknow-your-customer-and",
  },
  emiratesNbdBusiness: {
    title: "Business Banking account packages",
    publisher: "Emirates NBD",
    href: "https://www.emiratesnbd.com/en/business-banking/open-business-bank-account-online",
  },
  mashreqNeoBiz: {
    title: "NEO BIZ Business Account",
    publisher: "Mashreq",
    href: "https://www.mashreq.com/en/uae/neobiz/banking-solution/daily-banking-solutions/business-account/neo-biz/",
  },
  adcbBusinessAccounts: {
    title: "Business account key facts",
    publisher: "ADCB",
    href: "https://www.adcb.com/en/multimedia/kfs/business-choice-account-kfs.pdf",
  },
  wioBusiness: {
    title: "Wio Business plans",
    publisher: "Wio Bank",
    href: "https://wio.io/business",
  },
  rakstarter: {
    title: "RAKstarter business account",
    publisher: "RAKBANK",
    href: "https://www.rakbank.ae/en/business/everyday-banking/accounts/rakstarter-account",
  },
} satisfies Record<string, CredibilitySource>;

const checkedLabel = "Sources checked July 31, 2026";
const setupNote =
  "Licensing routes, permitted activities, documents, government fees, and processing requirements vary by authority and can change. Confirm the exact route before filing.";
const taxNote =
  "Tax treatment depends on the facts of each business. This page provides general information and is not a substitute for advice on a specific filing position.";
const visaNote =
  "Eligibility, documents, fees, and processing remain subject to the relevant immigration authority's assessment and can change.";

const setupPaths = new Set([
  "/business-setup",
  "/mainland-vs-free-zone-dubai",
]);

const taxPaths = new Set([
  "/accounting-tax",
  "/corporate-tax-registration-in-the-uae",
  "/corporate-tax-filing-services-in-the-uae",
  "/vat-registration-services-uae",
  "/vat-filing-services-in-the-uae",
  "/professional-bookkeeping-services-in-dubai",
]);

export function getServiceCredibility(path: string): ServiceCredibility | undefined {
  if (setupPaths.has(path)) {
    return {
      expert: experts.cecilia,
      verificationLabel: checkedLabel,
      note: setupNote,
      sources: path === "/mainland-vs-free-zone-dubai"
        ? [sources.mainlandSetup, sources.freeZoneSetup, sources.freeZoneMainlandPermit]
        : [sources.mainlandSetup, sources.freeZoneSetup],
    };
  }

  if (taxPaths.has(path)) {
    return {
      expert: experts.glenita,
      verificationLabel:
        path === "/vat-filing-services-in-the-uae" || path === "/vat-registration-services-uae"
          ? "Sources checked August 3, 2026"
          : checkedLabel,
      note: taxNote,
      sources: path === "/vat-filing-services-in-the-uae"
        ? [sources.vatReturns]
        : path === "/vat-registration-services-uae"
          ? [sources.vatRegistration]
        : path === "/corporate-tax-registration-in-the-uae"
          ? [sources.corporateTaxRegistration, sources.corporateTaxGeneral]
          : [sources.corporateTaxReturns, sources.corporateTaxGeneral],
    };
  }

  const routeSpecific: Record<string, ServiceCredibility> = {
    "/mainland": {
      expert: experts.cecilia,
      verificationLabel: checkedLabel,
      note: setupNote,
      sources: [sources.mainlandSetup],
    },
    "/general-trading-license-dubai": {
      expert: experts.cecilia,
      verificationLabel: "Sources checked August 21, 2026",
      note: "A general trading licence is not blanket permission to trade every product. Activity wording, regulated goods, external approvals, customs requirements, office needs, and government fees must be confirmed for the proposed business before filing.",
      sources: [sources.mainlandSetup, sources.dubaiBusinessLicensing],
    },
    "/free-zones": {
      expert: experts.cecilia,
      verificationLabel: checkedLabel,
      note: setupNote,
      sources: [sources.freeZoneSetup, sources.freeZoneOperations],
    },
    "/offshore": {
      expert: experts.cecilia,
      verificationLabel: checkedLabel,
      note: "Offshore structures are not substitutes for a UAE operating licence. Registry rules, permitted uses, tax treatment, and banking acceptance require case-specific review.",
      sources: [sources.offshoreRegistry, sources.corporateTaxGeneral],
    },
    "/business-setup-cost-dubai": {
      expert: experts.cecilia,
      verificationLabel: "Zenesis starting prices and sources checked July 22, 2026",
      note: "Published figures are starting prices, not universal authority quotes. Final cost depends on activity, jurisdiction, approvals, visas, office needs, government fees, and selected support.",
      sources: [sources.mainlandSetup, sources.freeZoneSetup],
    },
    "/document-attestation-services-in-uae": {
      expert: experts.cecilia,
      verificationLabel: checkedLabel,
      note: "The required attestation chain depends on where the document was issued, its type, and where it will be used. The issuing and receiving authorities make the final determination.",
      sources: [sources.documentAttestation],
    },
    "/corporate-support": {
      expert: experts.cecilia,
      verificationLabel: "Sources checked August 10, 2026",
      note: "Renewal, amendment, liquidation, restoration, branch, and attestation requirements vary by legal form and jurisdiction. Timelines and document lists are confirmed case by case with the relevant authority before work begins.",
      sources: [sources.businessClosure, sources.foreignBranches, sources.foreignBranchRequirements, sources.beneficialOwnerProcedures, sources.economicSubstanceAmendment, sources.documentAttestation],
    },
    "/uae-company-visa": {
      expert: experts.cecilia,
      verificationLabel: checkedLabel,
      note: visaNote,
      sources: [sources.establishmentCard, sources.privateSectorResidence],
    },
    "/golden-visa-services-in-the-uae": {
      expert: experts.cecilia,
      verificationLabel: checkedLabel,
      note: visaNote,
      sources: [sources.goldenVisa, sources.icpGoldenVisa],
    },
    "/visa-and-banking": {
      expert: experts.cecilia,
      verificationLabel: checkedLabel,
      note: "Visa eligibility is determined by the relevant authority. Bank account approval is solely at the bank's discretion after KYC, compliance, and risk review; no adviser can guarantee approval.",
      sources: [sources.establishmentCard, sources.goldenVisa, sources.bankingKyc],
    },
    "/open-a-bank-account-easily": {
      expert: experts.cecilia,
      verificationLabel: "Sources checked September 3, 2026",
      note: "Zenesis can help prepare and explain the application file, but bank account approval, timing, account type, and minimum-balance terms remain solely at the bank's discretion.",
      sources: [
        sources.bankingKyc,
        sources.emiratesNbdBusiness,
        sources.mashreqNeoBiz,
        sources.adcbBusinessAccounts,
        sources.wioBusiness,
        sources.rakstarter,
      ],
    },
  };

  return routeSpecific[path];
}
