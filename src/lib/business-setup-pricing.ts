export const businessSetupPricingDisclaimer =
  "Starting prices are indicative. Your confirmed quote will reflect the jurisdiction, business activity, visa requirements, government fees, office package, and approvals for your setup.";

export const businessSetupPricingLastUpdated = {
  label: "July 7, 2026",
  isoDate: "2026-07-07",
} as const;

export const businessSetupPricingSummary =
  "Zenesis business setup consultancy prices in Dubai and the UAE start from AED 4,000 for freelance permits, AED 7,000 for free zone company setup without visa, AED 15,000 for free zone company setup with visa, and AED 10,000 for mainland company setup.";

export const businessSetupPricingAnswer =
  `${businessSetupPricingSummary} Final pricing depends on jurisdiction, business activity, visa requirements, government fees, office package, and approvals.`;

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
] as const;

export const businessSetupPricingFaqs = [
  {
    question: "How much does business setup in Dubai cost with Zenesis?",
    answer: businessSetupPricingAnswer,
  },
  {
    question: "What are Zenesis business setup consultancy prices in Dubai?",
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
    question: "Why can the final business setup cost change?",
    answer: businessSetupPricingDisclaimer,
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
] as const;
