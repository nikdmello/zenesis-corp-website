export const businessSetupPricingDisclaimer =
  "Starting prices are indicative. Your confirmed quote will reflect the jurisdiction, business activity, visa requirements, government fees, office package, approvals, and the exact sequence needed for your setup.";

export const businessSetupPricingLastUpdated = {
  label: "July 7, 2026",
  isoDate: "2026-07-07",
} as const;

export const businessSetupPricingSummary =
  "Zenesis business setup consultancy prices start from AED 4,000 for freelance permits, AED 7,000 for free zone company setup without visa, AED 15,000 for free zone company setup with visa, AED 10,000 for mainland company setup, and AED 7,500 for offshore company setup.";

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
      "Bank account opening is not just an introduction. KYC files, business profiles, shareholder documents, and activity clarity all matter.",
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
      "For founders who want a UAE free zone company route without an initial visa requirement.",
  },
  {
    title: "Free Zone Company Setup + Visa",
    price: "AED 15,000",
    numericPrice: 15000,
    qualifier: "with visa",
    href: "/business-setup",
    description:
      "For entrepreneurs who need company formation aligned with UAE residency planning.",
  },
  {
    title: "Mainland Company Setup",
    price: "AED 10,000",
    numericPrice: 10000,
    qualifier: "starting from",
    href: "/business-setup",
    description:
      "For businesses that need mainland licensing and broader access to the UAE market.",
  },
  {
    title: "Freelance Permit",
    price: "AED 4,000",
    numericPrice: 4000,
    qualifier: "starting from",
    href: "/business-setup",
    description:
      "For independent professionals who need a lean UAE permit route before expanding.",
  },
  {
    title: "Offshore Company Setup",
    price: "AED 7,500",
    numericPrice: 7500,
    qualifier: "starting from",
    href: "/offshore",
    description:
      "For holding, ownership, and international structures where an offshore route fits the intended use.",
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
      "Zenesis free zone company setup starts from AED 7,000 without visa and AED 15,000 with visa. The final cost depends on the selected free zone, activity, visa requirement, office package, government fees, and approvals.",
  },
  {
    question: "How much does mainland company setup cost with Zenesis?",
    answer:
      "Zenesis mainland company setup starts from AED 10,000. The final cost depends on the business activity, license requirements, government fees, approvals, office needs, and visa planning.",
  },
  {
    question: "How much does a freelance permit cost with Zenesis?",
    answer:
      "Zenesis freelance permit support starts from AED 4,000. The final cost depends on the relevant permit route, activity, authority requirements, visa needs, and approvals.",
  },
  {
    question: "How much does offshore company setup cost with Zenesis?",
    answer:
      "Zenesis offshore company setup starts from AED 7,500. The confirmed quote depends on whether the suitable route is JAFZA, RAK ICC, Ajman Offshore, BVI, or another supported jurisdiction, along with the intended use, registered agent, documentation, compliance, and renewal requirements.",
  },
  {
    question: "Why can the final business setup cost change?",
    answer: businessSetupPricingDisclaimer,
  },
  {
    question: "What is the cheapest way to set up a business in Dubai or the UAE?",
    answer:
      "The cheapest viable route is usually a lean freelance permit or a low-cost free zone setup, but the lowest headline price is not always the safest option. The right route still needs to fit the activity, visa plan, banking expectations, renewal costs, and how the business will operate after setup.",
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
    bestFor: "Independent professionals who need a lean UAE permit route.",
    includes: "Permit-route guidance and documentation support.",
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
    bestFor: "Entrepreneurs who need company formation aligned with UAE residency planning.",
    includes: "Company setup support with visa-route planning.",
    finalCostDependsOn: "Free zone, visa requirements, office package, medical/ID steps, and approvals.",
  },
  {
    setupType: "Mainland Company Setup",
    startingPrice: "AED 10,000",
    bestFor: "Businesses that need mainland licensing and broader UAE market access.",
    includes: "Mainland setup route guidance, activity review, and documentation support.",
    finalCostDependsOn: "Business activity, license requirements, government fees, office needs, and visa planning.",
  },
  {
    setupType: "Offshore Company Setup",
    startingPrice: "AED 7,500",
    bestFor: "Holding, ownership, and international structures that do not need day-to-day UAE operating activity.",
    includes: "Jurisdiction review, structure guidance, and incorporation-document support.",
    finalCostDependsOn: "Jurisdiction, including JAFZA, RAK ICC, Ajman, or BVI, intended use, registered agent, documents, compliance, and renewals.",
  },
] as const;
