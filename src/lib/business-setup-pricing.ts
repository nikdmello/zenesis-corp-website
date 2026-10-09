export const businessSetupPricingDisclaimer =
  "Starting prices are indicative. Your confirmed quote will reflect the jurisdiction, business activity, visa requirements, government fees, office package, approvals, and the exact sequence needed for your setup.";

export const businessSetupPricingLastUpdated = {
  label: "August 4, 2026",
  isoDate: "2026-08-04",
} as const;

export const businessSetupPricingSummary =
  "Zenesis business setup consultancy prices start from AED 4,000 for freelance permits, AED 7,000 for free zone company setup without visa, AED 15,000 for free zone company setup with visa, AED 10,000 for mainland company setup, AED 7,500 to AED 15,000 for UAE offshore company setup, and AED 8,000 to AED 15,000 for international offshore company setup.";

export const businessSetupPricingAnswer =
  `${businessSetupPricingSummary} Final pricing depends on jurisdiction, business activity, visa requirements, government fees, office package, and approvals.`;

export const marketCostGuideRows = [
  {
    route: "Freelance permit",
    typicalRange: "AED 4,000+",
    costDrivers:
      "Permit route, activity category, visa needs, authority requirements, and whether banking or compliance support is needed.",
    zenesisPosition: "Zenesis freelance permit support starts from AED 4,000.",
  },
  {
    route: "Free zone company without visa",
    typicalRange: "AED 7,000+",
    costDrivers:
      "Chosen free zone, license activity, office or flexi-desk package, renewal cost, and government or authority fees.",
    zenesisPosition: "Zenesis free zone company setup without visa starts from AED 7,000.",
  },
  {
    route: "Free zone company with visa",
    typicalRange: "AED 15,000+",
    costDrivers:
      "Visa allocation, establishment card, medical and Emirates ID steps, health insurance, office package, and free zone requirements.",
    zenesisPosition: "Zenesis free zone company setup with visa starts from AED 15,000.",
  },
  {
    route: "Mainland company setup",
    typicalRange: "AED 10,000+",
    costDrivers:
      "Business activity, legal form, trade name, approvals, office requirements, immigration file, and visa planning.",
    zenesisPosition: "Zenesis mainland company setup starts from AED 10,000.",
  },
  {
    route: "UAE offshore company setup",
    typicalRange: "AED 7,500 to AED 15,000",
    costDrivers:
      "Chosen UAE offshore jurisdiction, registered-agent requirements, intended use, documents, compliance work, and renewal position.",
    zenesisPosition:
      "Zenesis UAE offshore setup support for Ajman, RAK, and Jebel Ali routes starts from AED 7,500 to AED 15,000.",
  },
  {
    route: "International offshore company setup",
    typicalRange: "AED 8,000 to AED 15,000",
    costDrivers:
      "International jurisdiction, registry requirements, registered-agent requirements, documents, compliance work, and renewal position.",
    zenesisPosition:
      "Zenesis international offshore setup support for BVI, Nevis, Mauritius, Seychelles, and Hong Kong routes starts from AED 8,000 to AED 15,000.",
  },
] as const;

export const setupCostDecisionFactors = [
  {
    title: "Jurisdiction",
    description:
      "Mainland, free zone, and offshore routes have different authority fees, license rules, office requirements, and renewal costs.",
  },
  {
    title: "Business activity",
    description:
      "Regulated, professional, trading, consultancy, e-commerce, and industrial activities can need different approvals or documentation.",
  },
  {
    title: "Visa requirement",
    description:
      "A no-visa setup is usually leaner. Founder, employee, and family visa planning changes cost, timing, and document requirements.",
  },
  {
    title: "Office package",
    description:
      "Virtual office, flexi-desk, dedicated office, warehouse, and mainland Ejari requirements can change the real first-year budget.",
  },
  {
    title: "Banking readiness",
    description:
      "Bank account applications require company and shareholder KYC, a business profile, source-of-funds evidence, and information about the licensed activity and expected transactions.",
  },
  {
    title: "Post-setup compliance",
    description:
      "Corporate tax, VAT, bookkeeping, renewals, amendments, and records should be planned before they become urgent follow-up work.",
  },
] as const;

export const businessSetupStartingPrices = [
  {
    title: "Free Zone Company Setup",
    price: "AED 7,000",
    numericPrice: 7000,
    qualifier: "without visa",
    href: "/business-setup",
    description:
      "For founders who need a company without a residence visa. Selected partner packages offer up to 10 shareholders, 10 business activities, and 24/7 flexi-desk access. Availability depends on the free zone and package.",
    highlights: [
      "Company registration and trade licence",
      "No initial visa",
      "Shareholder and activity options",
      "Flexi-desk options",
    ],
  },
  {
    title: "Free Zone Company Setup + Visa",
    price: "AED 15,000",
    numericPrice: 15000,
    qualifier: "with visa",
    href: "/business-setup",
    description:
      "For founders who need a company and UAE residency. Selected partner packages offer one or two visas, up to 10 shareholders, 10 business activities, and 24/7 flexi-desk access. Zenesis confirms visa costs and package inclusions before you proceed.",
    highlights: [
      "Company registration and trade licence",
      "One- or two-visa package options",
      "Establishment card and e-channel options",
      "Flexi-desk options",
    ],
  },
  {
    title: "Mainland Company Setup",
    price: "AED 10,000",
    numericPrice: 10000,
    qualifier: "mainland route",
    href: "/business-setup",
    description:
      "For businesses that will operate directly across the UAE, need local premises, or require mainland licensing for their activity.",
    highlights: [
      "UAE mainland licence",
      "Direct UAE operating access",
      "Activity, premises, and visa needs reviewed",
    ],
  },
  {
    title: "Freelance Permit",
    price: "AED 4,000",
    numericPrice: 4000,
    qualifier: "permit route",
    href: "/business-setup",
    description:
      "For eligible independent professionals applying from inside or outside the UAE, with an optional linked residence visa where available.",
    highlights: [
      "Remote application available",
      "UAE residence visa option where eligible",
      "Profession and activity eligibility reviewed",
    ],
  },
  {
    title: "UAE Offshore Company Setup",
    price: "AED 7,500-15,000",
    numericPrice: 7500,
    maxNumericPrice: 15000,
    qualifier: "UAE offshore",
    href: "/offshore",
    description:
      "For founders who want a UAE-registered Ajman, RAK, or Jebel Ali offshore structure for holding, ownership, or approved international use.",
    highlights: [
      "Ajman, RAK, or Jebel Ali",
      "UAE registry",
      "No normal local trading or residence visas",
    ],
  },
  {
    title: "International Offshore Company Setup",
    price: "AED 8,000-15,000",
    numericPrice: 8000,
    maxNumericPrice: 15000,
    qualifier: "international offshore",
    href: "/offshore",
    description:
      "For cross-border ownership, assets, or international business where a non-UAE registry such as BVI, Nevis, Mauritius, Seychelles, or Hong Kong fits.",
    highlights: [
      "BVI, Nevis, Mauritius, Seychelles, or Hong Kong",
      "Non-UAE registry",
      "Jurisdiction, banking, and use reviewed",
    ],
  },
] as const;

export const businessSetupPricingFaqs = [
  {
    question: "How much does business setup in Dubai cost with Zenesis?",
    answer: businessSetupPricingAnswer,
  },
  {
    question: "How much does free zone company setup cost with Zenesis?",
    answer:
      "Zenesis free zone company setup starts from AED 7,000 without a visa and AED 15,000 when the founder needs both a registered company and a UAE residence visa. The final cost depends on the selected free zone, activity, visa requirement, office package, government fees, and approvals.",
  },
  {
    question: "How much does mainland company setup cost with Zenesis?",
    answer:
      "Zenesis mainland company setup starts from AED 10,000. Mainland is often considered when the business will operate directly across the UAE, needs local premises, plans to pursue local contracts, or carries out an activity that requires mainland licensing. The final cost depends on the activity, licence requirements, government fees, approvals, office needs, and visa planning.",
  },
  {
    question: "How much does a freelance permit cost with Zenesis?",
    answer:
      "Zenesis freelance permit support starts from AED 4,000. Eligible applicants can apply remotely from outside the UAE for a freelance permit and, where the selected route allows it, a linked UAE residence visa. The final cost depends on the profession, activity, authority requirements, visa choice, and approvals.",
  },
  {
    question: "Can I apply for a UAE freelance permit from outside the country?",
    answer:
      "Yes. Eligible applicants can apply remotely from outside the UAE for a freelance permit and, where the selected route allows it, a linked UAE residence visa. Eligibility depends on the profession, approved activity, documents, authority rules, and visa requirements.",
  },
  {
    question: "How much does offshore company setup cost with Zenesis?",
    answer:
      "Zenesis UAE offshore company setup for Ajman, RAK, and Jebel Ali routes starts from AED 7,500 to AED 15,000 and suits founders who want a UAE registry for an eligible holding, ownership, or international use. International offshore setup for BVI, Nevis, Mauritius, Seychelles, and Hong Kong starts from AED 8,000 to AED 15,000 and uses a non-UAE registry for suitable cross-border ownership, assets, or business. The confirmed quote depends on the jurisdiction, intended use, registered agent, documentation, compliance, and renewal requirements.",
  },
  {
    question: "Why can the final business setup cost change?",
    answer: businessSetupPricingDisclaimer,
  },
  {
    question: "What is the cheapest way to set up a business in Dubai or the UAE?",
    answer:
      "It depends on whether you need a registered company or a permit to work independently. The cheapest option overall is the Freelance Permit, starting from AED 4,000. Eligible applicants can apply remotely from outside the UAE and may add a linked residence visa where the selected route allows it. A freelance permit is not a registered company. If you need a company, Zenesis Free Zone Company Setup without a visa starts from AED 7,000. The final cost depends on the selected free zone, activity, office or flexi-desk package, government fees, approvals, and any additional visa or banking support required.",
  },
  {
    question: "Is mainland or free zone setup cheaper in Dubai?",
    answer:
      "A free zone setup can be cheaper for founders who do not need direct mainland operating access, especially when no initial visa is required. Mainland setup can cost more when office, approvals, and visa planning are included, but it may be the better route for local UAE market access.",
  },
] as const;

export const businessSetupCostComparisonRows = [
  {
    setupType: "Freelance Permit",
    startingPrice: "AED 4,000",
    bestFor: "Eligible independent professionals applying from inside or outside the UAE, with or without a linked residence visa.",
    includes: "Eligibility review, permit-route guidance, and remote application support.",
    finalCostDependsOn: "Activity, authority requirements, visa needs, and approvals.",
  },
  {
    setupType: "Free Zone Company Setup",
    startingPrice: "AED 7,000",
    bestFor: "Founders who want a UAE free zone company without an initial visa.",
    includes: "Free zone route guidance, activity fit, and setup documentation support.",
    finalCostDependsOn: "Free zone, business activity, office package, government fees, and approvals.",
  },
  {
    setupType: "Free Zone Company Setup + Visa",
    startingPrice: "AED 15,000",
    bestFor: "Founders who need both a UAE free zone company and a UAE residence visa.",
    includes: "Company setup support and the linked residence visa route.",
    finalCostDependsOn: "Free zone, visa requirements, office package, medical/ID steps, and approvals.",
  },
  {
    setupType: "Mainland Company Setup",
    startingPrice: "AED 10,000",
    bestFor: "Businesses operating directly across the UAE, using local premises, or carrying out activities that require mainland licensing.",
    includes: "Mainland setup route guidance, activity review, and documentation support.",
    finalCostDependsOn: "Business activity, license requirements, government fees, office needs, and visa planning.",
  },
  {
    setupType: "UAE Offshore Company Setup",
    startingPrice: "AED 7,500-15,000",
    bestFor: "Founders who want a UAE registry for holding, ownership, eligible property structures, or approved international use.",
    includes: "Jurisdiction review, structure guidance, and incorporation-document support.",
    finalCostDependsOn: "UAE offshore jurisdiction, intended use, registered agent, documents, compliance, and renewals.",
  },
  {
    setupType: "International Offshore Company Setup",
    startingPrice: "AED 8,000-15,000",
    bestFor: "Cross-border ownership, assets, or international business where a non-UAE registry fits the intended use.",
    includes: "Jurisdiction review, structure guidance, and incorporation-document support.",
    finalCostDependsOn: "International jurisdiction, intended use, registry and agent requirements, documents, compliance, and renewals.",
  },
] as const;
