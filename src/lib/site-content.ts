export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/#services",
    groups: [
      {
        title: "Business Setup",
        links: [
          { label: "Mainland setup", href: "/mainland" },
          { label: "Free zone setup", href: "/free-zones" },
          { label: "Offshore setup", href: "/offshore" },
          {
            label: "Document attestation",
            href: "/document-attestation-services-in-uae",
          },
        ],
      },
      {
        title: "Accounting and Tax",
        links: [
          {
            label: "Bookkeeping",
            href: "/professional-bookkeeping-services-in-dubai",
          },
          { label: "VAT filing", href: "/vat-filing-services-in-the-uae" },
          {
            label: "Corporate tax registration",
            href: "/corporate-tax-registration-in-the-uae",
          },
          {
            label: "Corporate tax filing",
            href: "/corporate-tax-filing-services-in-the-uae",
          },
        ],
      },
      {
        title: "Visa and Banking",
        links: [
          {
            label: "Golden Visa",
            href: "/golden-visa-services-in-the-uae",
          },
          {
            label: "Company visas",
            href: "/uae-company-visa",
          },
          {
            label: "Banking support",
            href: "/open-a-bank-account-easily",
          },
        ],
      },
    ],
  },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const whatsappHref =
  "https://wa.me/971589142200?text=Hello%20Zenesis%2C%20I%27d%20like%20to%20make%20an%20enquiry.";

export const googleReviewsHref =
  "https://www.google.com/search?q=Zenesis+Corp+Dubai+reviews#lrd=0x3e5f424123a5c10b:0x33eff26f706bc1c1,1,,,,";

export const googleWriteReviewHref =
  "https://www.google.com/maps?cid=3742476375809573313&action=openratings&ct=write-review";

export const googleMapsEmbedHref =
  "https://www.google.com/maps?q=Suite%201006%2C%20Tiffany%20Tower%2C%20Jumeirah%20Lake%20Towers%2C%20Dubai&z=15&output=embed";

export const googleMapsHref =
  "https://www.google.com/maps?q=Suite%201006%2C%20Tiffany%20Tower%2C%20Jumeirah%20Lake%20Towers%2C%20Dubai";

export const featuredProfile = {
  title: "Cecilia D'Cunha featured in Global Leaders Today",
  publication: "Global Leaders Today",
  dateLabel: "November 15, 2024",
  href: "/featured-profile",
  imageSrc: "/cecilia-dcunha-global-leaders.webp",
  imageAlt: "Global Leaders Today feature on Cecilia D'Cunha",
  summary:
    "A full-length profile on Cecilia D'Cunha covering her early offshore incorporation work, her move into the UAE in 1998, and the leadership path that led to Zenesis.",
} as const;

export const serviceGroups = [
  {
    title: "Business Setup",
    description:
      "Company formation support for mainland, offshore, and free zone structures, with practical guidance from incorporation through setup.",
  },
  {
    title: "Accounting & Tax",
    description:
      "Bookkeeping, VAT filing, corporate tax filing, and tax planning support to help businesses stay compliant and organized.",
  },
  {
    title: "Corporate Services",
    description:
      "Ongoing administrative and governance support including annual returns, company renewals, shareholder registers, and related corporate actions.",
  },
  {
    title: "Investor and Residency Support",
    description:
      "Business banking guidance and UAE visa-related support, including company visa and Golden Visa services for businesses and founders operating through the UAE.",
  },
] as const;

export const formationOptions = [
  {
    title: "Mainland / Onshore",
    description:
      "Mainland setup suits businesses that want broad UAE market access, office-location flexibility, and structures such as LLCs, branches, and representative offices.",
  },
  {
    title: "Free Zone",
    description:
      "Free zone setup suits founders who want 100% foreign ownership, simplified setup, and a choice of zones including DMCC, Dubai South, IFZA, Meydan, Shams, and RAKEZ.",
  },
  {
    title: "Offshore",
    description:
      "Offshore setup can fit international holdings, asset protection, and non-local trading activity through routes such as JAFZA, RAK ICC, and Ajman offshore.",
  },
] as const;

export const operationalServices = [
  {
    title: "Document Attestation",
    description:
      "Document attestation support covers personal, educational, and commercial records, including embassy and MOFA stages where required.",
  },
  {
    title: "Business Bank Accounts",
    description:
      "Zenesis presents UAE and international bank account setup support, including KYC preparation, bank coordination, and multi-currency account guidance.",
  },
  {
    title: "Company Visa",
    description:
      "The live service page lays out a four-step company visa process from registration and labor approvals through Emirates ID and visa stamping.",
  },
  {
    title: "Golden Visa",
    description:
      "Golden Visa support covers eligibility review, documentation, submissions, family sponsorship support, and post-approval assistance.",
  },
] as const;

export const accountingServices = [
  {
    title: "Corporate Tax Registration",
    description:
      "Corporate tax registration support includes eligibility checks, EmaraTax setup, submission tracking, and post-registration guidance.",
  },
  {
    title: "Corporate Tax Filing",
    description:
      "The filing page adds annual return preparation, FTA portal filing, tax calculations, deadline management, and documentation support.",
  },
  {
    title: "VAT Filing",
    description:
      "The VAT page provides a clearer compliance service story around return preparation, VAT reconciliation, tax-period management, audit support, and payment assistance.",
  },
  {
    title: "Bookkeeping",
    description:
      "The bookkeeping page expands the accounting offer into weekly or monthly bookkeeping, reporting, payroll support, and audit-ready records.",
  },
] as const;

export const principles = [
  {
    title: "Clarity first",
    description:
      "Zenesis works best when the message stays clear: explain the process well, reduce uncertainty, and help clients make better decisions.",
  },
  {
    title: "Results grounded in delivery",
    description:
      "Zenesis is better presented as a firm that executes company setup, compliance, and corporate support work carefully rather than as a broad transformation brand.",
  },
  {
    title: "Depth where it matters",
    description:
      "Client needs should be understood in depth and translated into direct, practical guidance rather than repeated slogans.",
  },
] as const;

export const officeLocations = [
  "Dubai, United Arab Emirates",
] as const;

export const contactDetails = [
  { label: "Main line", value: "+971 4 4474997" },
  { label: "Mobile / WhatsApp", value: "+971 58 914 2200" },
  { label: "Email", value: "info@zenesiscorp.com" },
  {
    label: "Office",
    value:
      "Suite 1006, Tiffany Tower, Jumeirah Lake Towers, POB 476476, Dubai, United Arab Emirates",
  },
] as const;

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/ZenesisCorp/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/zenesiscorp/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/zenesiscorp",
  },
] as const;

export const testimonials = [
  {
    name: "Mr Martin Bruce",
    quote:
      "They were extremely helpful and efficient in setting up my company and getting my visa processed in time.",
  },
  {
    name: "Mr Ramzi Ghurani",
    quote:
      "Zenesis gave our family a clear understanding of the process, timing, and costs involved and got everything ready in time.",
  },
  {
    name: "Mr Premnath Kapoor",
    quote:
      "Their response to our queries was very quick and their services were prompt and efficient.",
  },
  {
    name: "Mr Rajiv Shah",
    quote:
      "Their advice is impartial, informative and, most importantly, tailored to the client’s specific needs.",
  },
  {
    name: "Mr Divakar Rao",
    quote:
      "Their professionalism and efficiency can be trusted, which also reflects in the cost-effective services they provide.",
  },
  {
    name: "Hoshedar Cooper",
    quote:
      "A very reliable and efficient service provider for offshore company requirements in the United Arab Emirates.",
  },
  {
    name: "Thanseer Alifca",
    quote:
      "It was so helpful to create a plan for new company formation in Dubai’s JLT Free Zone and map out the actions needed for the startup.",
  },
  {
    name: "Simon Marriott",
    quote:
      "Their knowledge of requirements, procedures, and timescales was entirely accurate and they clearly had a strong working relationship with the Free Zone.",
  },
  {
    name: "Rhea DSouza",
    quote:
      "The team at Zenesis are knowledgeable and reliable consultants to work with.",
  },
  {
    name: "Ray Hogan",
    quote:
      "Cecilia and the team really take the time to understand our clients' individual needs and deliver a first-class solution.",
  },
  {
    name: "Parag Paresh And Co",
    quote:
      "We are very happy with the consistently good services of the Zenesis team.",
  },
  {
    name: "Veronica Odeja",
    quote:
      "The ideas, expertise, and skills they brought to our project gave our team immense knowledge and know-how.",
  },
  {
    name: "Shams Dharamshi",
    quote:
      "The Zenesis team is efficient and knowledgeable, reducing the hassle and burden on us.",
  },
  {
    name: "D Singh",
    quote:
      "The Zenesis team is accessible and responsive and always provides an effective solution for clients’ needs.",
  },
  {
    name: "Mohammed Muqthar",
    quote:
      "They were transparent throughout my Dubai Free Zone company formation and offered a good quote too.",
  },
  {
    name: "Gnanasundaram Thanaseelan",
    quote: "Best and prompt service within a committed time frame.",
  },
  {
    name: "Al Khayam Exhibition",
    quote:
      "Highly recommended for company formation services, with economical charges and very well-trained consultants.",
  },
  {
    name: "Ajay Gupta",
    quote: "Work ethics, proper guidance, and timely service.",
  },
  {
    name: "Nisha Vs",
    quote:
      "Excellent consultants who have never disappointed us over the last three years.",
  },
  {
    name: "Hasan Rangoonwalla",
    quote:
      "They have a good understanding of the client's requirements and are a good team to work with.",
  },
] as const;

export type Testimonial = (typeof testimonials)[number];

export const articleHighlights = [
  {
    category: "Corporate Tax",
    title: "A Complete Guide to Corporate Tax Groups in the UAE",
    summary:
      "A practical overview of when multiple UAE entities can be treated as one taxable group, what the ownership requirements look like, and where grouping can simplify compliance.",
    href: "/accounting-tax",
    imageSrc: "/corporate-tax.webp",
    imageAlt: "Professionals reviewing finance and tax documents",
  },
  {
    category: "Compliance",
    title: "Financial Year 2026 in the UAE: A Complete Compliance Guide for Businesses",
    summary:
      "A breakdown of how the financial year drives filing cadence, reporting rhythm, and the timing of tax obligations across the UAE compliance cycle.",
    href: "/accounting-tax",
    imageSrc: "/financial-year.webp",
    imageAlt: "Business advisor discussing compliance planning",
  },
  {
    category: "Free Zone",
    title:
      "UAE Free Zone Corporate Tax Rules Clarified: What Businesses Need to Know in 2026",
    summary:
      "A focused look at qualifying activity, mainland interaction, and the practical implications of updated free zone tax treatment for founders and operating companies.",
    href: "/business-setup",
    imageSrc: "/free-zone.webp",
    imageAlt: "Business professionals in a Dubai advisory meeting",
  },
] as const;

export const teamMembers = [
  {
    name: "Cecilia D'Cunha",
    title: "Founder",
    credentials: "BCom, LLB, ACS",
    imageSrc: "/Cecilia_DCunha.webp",
    summary:
      "A qualified Chartered Secretary with degrees in Commerce and Law, with more than 30 years of experience across offshore incorporation, UAE company setup, and corporate compliance.",
    paragraphs: [
      "Cecilia's early career included training with multinational companies in India before moving to Hong Kong, where she worked on offshore companies and trusts across jurisdictions including the UK, British Virgin Islands, Mauritius, Seychelles, Anguilla, and Hong Kong.",
      "In 1998, she moved to the UAE to establish operations for a Hong Kong-based company. That period gave her first-hand experience with the licensing, visa, banking, and regulatory issues international businesses faced as the UAE emerged as a global business hub.",
      "She later helped pioneer early offshore incorporation work in the UAE and built her practice around onshore and offshore structuring, free zone setup, and compliance support. In 2005, she founded Zenesis Corporation to provide boutique corporate services with a more practical, hands-on approach.",
      "Her work sits at the intersection of company incorporation, corporate structuring, and legal compliance. She is also known for mentoring younger professionals and for sharing practical guidance through speaking, training, and long-form advisory content.",
    ],
    skills: [
      "Offshore Incorporation",
      "Onshore and Free Zone Setup",
      "UAE Free Zone Incorporation",
      "Corporate Compliance",
      "International Incorporation",
      "Corporate Services",
    ],
  },
  {
    name: "Prof. Jeevan D'Mello",
    title: "Chief Executive Officer",
    credentials: "GDArch, CMCA, AMS, LSM, PCAM, D. Litt.",
    imageSrc: "/Jeevan_DMello.webp",
    summary:
      "Chief Executive Officer with an international, award-winning career across architectural design, customer experience, community management, real estate management, and international relations.",
    paragraphs: [
      "Jeevan is widely regarded as a foundational figure in community management in the Middle East. Across major roles with Emaar Properties and Nakheel Properties, he managed large-scale portfolios including Burj Khalifa, Downtown Dubai, Palm Jumeirah, Jumeirah Islands, International City, and Nad Al Sheba villas.",
      "His professional record includes multiple international firsts in community association management certifications, senior institute roles in the USA, and recognition across the UAE, USA, India, Italy, Spain, Argentina, Chile, Cuba, and Colombia. He also received a Doctor of Letters from Azteca University in Mexico and was appointed Full Professor of Real Estate Management.",
    ],
    skills: [
      "Real Estate Management",
      "Business Transformation",
      "Customer Experience",
      "Business Incubation",
      "Training and Mentoring",
    ],
  },
  {
    name: "Glenita D'Souza",
    title: "Accounts Manager and Compliance Officer",
    credentials: "CA Intermediate (IPCC), BCom",
    imageSrc: "/Glenita_D'Souza.webp",
    summary:
      "Accounts Manager and Compliance Officer with more than 6 years of hands-on experience across accounting, taxation, company administration, VAT, corporate tax, and UAE free zone setup.",
    paragraphs: [
      "Glenita oversees management accounts, bookkeeping, VAT and corporate tax compliance, UAE free zone company formations, and HR consultancy support for clients at Zenesis.",
      "Her background combines strong academic performance in accountancy with practical delivery across compliance management, cash flow control, audit support, and NRI tax advisory.",
    ],
    skills: [
      "Financial Reporting",
      "VAT and Corporate Tax",
      "Bookkeeping and Reconciliation",
      "UAE Free Zone Setup",
      "Company Secretarial",
      "Compliance Management",
      "HR Consultancy",
      "Cash Flow Management",
      "Audit Support",
      "NRI Tax Advisory",
    ],
  },
  {
    name: "Emma Magati",
    title: "Business Setup Expert and Accounts Manager",
    credentials: "MBA, ACCA Finalist, CPA Finalist, BCom Finance",
    imageSrc: "/Emma_Magati.webp",
    summary:
      "Business Setup Expert and Accounts Manager with extensive experience across UAE free zone, mainland, and offshore company formation, regulatory compliance, and financial reporting.",
    paragraphs: [
      "Emma manages end-to-end company incorporation, regulatory compliance, and client portfolios across jurisdictions including IFZA, DMCC, Meydan, RAKICC, BVI, Cayman Islands, Panama, and Seychelles.",
      "Her background combines business setup execution with financial reporting, UAE corporate tax, VAT filing, bank account opening support, offshore structuring, payroll, and process improvement.",
    ],
    skills: [
      "Company Formation",
      "Regulatory Compliance",
      "Corporate Tax",
      "VAT Filing",
      "Financial Reporting",
      "Bank Account Opening",
      "Offshore Structuring",
      "Client Management",
      "Payroll Processing",
      "Business Process Improvement",
    ],
  },
  {
    name: "Sajal Arora",
    title: "Director - Accountancy and Taxation",
    credentials: "BCom, CA, CFA",
    imageSrc: "/Sajal_Arora.webp",
    summary:
      "A Dubai-based Chartered Accountant with more than 13 years of experience across integrated finance, taxation, auditing, banking, treasury, costing, and project financing.",
    paragraphs: [
      "Sajal has worked across multiple industries and organizational levels, helping companies strengthen systems, processes, and long-term financial discipline. His experience includes work with Eagle Hills Properties, Drake and Scull International, Grand Hotel India, Walmart India, and Bharti Airtel.",
      "He brings particular depth in tax structuring and statutory compliance, and he is also the author of the Middle East's first published book on VAT.",
    ],
    skills: [
      "Accounting and Auditing",
      "Costs and Budgeting",
      "VAT Services",
      "Reviews and Due Diligence",
      "Training",
    ],
  },
] as const;

export const freeZoneExamples = [
  "Dubai Multi Commodities Centre (DMCC)",
  "Dubai South",
  "IFZA Dubai",
  "Meydan Free Zone",
  "Shams",
  "Ras Al Khaimah Economic Zone (RAKEZ)",
  "Ajman Free Zone",
  "Sharjah Airport International Free Zone",
  "International Free Trade Zone - Fujairah",
  "Umm Al Quwain Free Trade Zone",
] as const;

export const offshoreOptions = [
  "JAFZA",
  "RAK Offshore / RAK ICC",
  "Ajman Offshore",
] as const;

export const setupStructures = [
  "Sole Proprietorship",
  "Limited Liability Company (LLC)",
  "Partnership",
  "Civil Company",
  "Branch Foreign Company",
  "Public Shareholding Company (PJSC)",
  "Private Shareholding Company (PrJSC)",
  "Joint Venture",
] as const;
