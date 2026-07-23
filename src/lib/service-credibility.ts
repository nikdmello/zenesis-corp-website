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
    imageSrc: "/people/Cecilia_DCunha.webp",
    profileHref: "/about",
  },
  sajal: {
    name: "Sajal Arora",
    credentials: "BCom, CA, CFA",
    role: "Director - Accountancy and Taxation",
    bio: "A Dubai-based Chartered Accountant with more than 13 years of experience across finance, taxation, auditing, banking, treasury, costing, and project financing.",
    imageSrc: "/people/Sajal_Arora.webp",
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
    title: "Golden Visa services",
    publisher: "Federal Authority for Identity, Citizenship, Customs & Port Security",
    href: "https://icp.gov.ae/en/services/golden-visa/",
  },
  bankingKyc: {
    title: "Guidance on customer due diligence, KYC, and record-keeping",
    publisher: "Central Bank of the UAE Rulebook",
    href: "https://rulebook.centralbank.ae/en/rulebook/guidance-licensed-financial-institutions-customer-due-diligenceknow-your-customer-and",
  },
} satisfies Record<string, CredibilitySource>;

const checkedLabel = "Official guidance checked July 22, 2026";
const setupNote =
  "Licensing routes, permitted activities, documents, government fees, and processing requirements vary by authority and can change. Confirm the exact route before filing.";
const taxNote =
  "Tax treatment depends on the facts of each business. This page provides general information and is not a substitute for advice on a specific filing position.";
const visaNote =
  "Eligibility, documents, fees, and processing remain subject to the relevant immigration authority's assessment and can change.";

const setupPaths = new Set([
  "/business-setup",
  "/business-setup-services-uae",
  "/company-formation-dubai",
  "/mainland-vs-free-zone-dubai",
  "/low-cost-business-setup-uae",
]);

const taxPaths = new Set([
  "/accounting-tax",
  "/corporate-tax-registration-in-the-uae",
  "/corporate-tax-filing-services-in-the-uae",
  "/vat-filing-services-in-the-uae",
  "/professional-bookkeeping-services-in-dubai",
]);

export function getServiceCredibility(path: string): ServiceCredibility | undefined {
  if (setupPaths.has(path)) {
    return {
      expert: experts.cecilia,
      verificationLabel: checkedLabel,
      note: setupNote,
      sources: [sources.mainlandSetup, sources.freeZoneSetup],
    };
  }

  if (taxPaths.has(path)) {
    return {
      expert: experts.sajal,
      verificationLabel: checkedLabel,
      note: taxNote,
      sources: path === "/vat-filing-services-in-the-uae"
        ? [sources.vatReturns, sources.vatRegistration]
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
      verificationLabel: "Zenesis starting prices and official guidance checked July 22, 2026",
      note: "Published figures are starting prices, not universal authority quotes. Final cost depends on activity, jurisdiction, approvals, visas, office needs, government fees, and selected support.",
      sources: [sources.mainlandSetup, sources.freeZoneSetup],
    },
    "/document-attestation-services-in-uae": {
      expert: experts.cecilia,
      verificationLabel: checkedLabel,
      note: "The required attestation chain depends on where the document was issued, its type, and where it will be used. The issuing and receiving authorities make the final determination.",
      sources: [sources.documentAttestation],
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
      verificationLabel: checkedLabel,
      note: "Zenesis can help prepare and explain the application file, but bank account approval, timing, account type, and minimum-balance terms remain solely at the bank's discretion.",
      sources: [sources.bankingKyc],
    },
  };

  return routeSpecific[path];
}
