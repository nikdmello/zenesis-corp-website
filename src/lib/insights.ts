export type InsightSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: {
    columns: string[];
    rows: string[][];
  };
};

export type InsightPost = {
  slug: string;
  category: string;
  title: string;
  description: string;
  dateLabel: string;
  author: string;
  heroImageSrc: string;
  heroImageAlt: string;
  sections: InsightSection[];
  closingParagraphs?: string[];
  closingCta?: string;
};

export const insightPosts: InsightPost[] = [
  {
    slug: "complete-guide-to-corporate-tax-groups-uae",
    category: "Corporate Tax",
    title: "A Complete Guide to Corporate Tax Groups in the UAE",
    description:
      "A practical overview of what corporate tax groups are, who can form them, why they matter, the core eligibility rules, and the tradeoffs businesses should weigh before choosing this structure.",
    dateLabel: "April, 2026",
    author: "Cecilia D'Cunha",
    heroImageSrc: "/corporate-tax.jpg",
    heroImageAlt: "Professionals reviewing finance and tax documents",
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "With the introduction of Corporate Tax in the UAE, businesses are now exploring smarter ways to structure their operations and manage tax efficiently. One of the most important concepts introduced is the Corporate Tax Group, a powerful tool for businesses operating multiple entities.",
          "This guide explains what corporate tax groups are, who can form them, why they matter, the eligibility criteria, their key benefits, and important considerations before opting for this structure.",
        ],
      },
      {
        title: "What is a Corporate Tax Group?",
        paragraphs: [
          "A Corporate Tax Group is a structure where two or more UAE-based companies are treated as a single taxable entity for corporate tax purposes.",
          "Instead of each company filing its own tax return, the group submits one consolidated tax return under a parent company.",
          "In simple terms: multiple companies operate independently, but for tax purposes, they are treated as one entity.",
        ],
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
          "Corporate tax grouping is designed to make taxation simpler, more efficient, and business-friendly.",
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
          "More efficient cash flow can result from optimized tax liability",
          "Tax reporting and compliance can be centralized at group level",
        ],
      },
      {
        title: "Key Consideration Before Opting for a Tax Group",
        paragraphs: [
          "While corporate tax grouping offers several advantages, businesses should also evaluate an important limitation before making a decision.",
          "When companies form a tax group, they are treated as a single taxable entity. That means the AED 375,000 tax-free threshold applies to the entire group, not to each individual entity.",
          "For businesses operating multiple entities, this can reduce the benefit that might otherwise apply if the entities filed separately.",
          "From a practical and commercial perspective, filing separately may preserve greater threshold benefit across entities, but it may also involve higher compliance and filing costs.",
          "Opting for a tax group can simplify compliance and reduce overall administrative effort, often leading to more efficient service costs.",
        ],
      },
    ],
    closingParagraphs: [
      "Corporate Tax Groups in the UAE provide a smart and efficient way for businesses with multiple entities to manage their tax obligations.",
      "While the benefits are significant, such as tax savings and simplified compliance, it is equally important to consider factors like the shared tax threshold and the overall cost-benefit analysis before opting for this structure.",
      "For businesses with a strong group structure, forming a tax group can be a strategic move toward better financial and operational efficiency when aligned with the right advisory.",
    ],
    closingCta:
      "Not sure if your business qualifies for a Corporate Tax Group? Connect with Zenesis Corp for guidance on structuring your business for tax efficiency and compliance.",
  },
  {
    slug: "financial-year-2026-uae-compliance-guide",
    category: "Compliance",
    title: "Financial Year 2026 in the UAE: A Complete Compliance Guide for Businesses",
    description:
      "How the financial year anchors corporate tax, VAT timing, audits, group reporting, and compliance planning for UAE businesses.",
    dateLabel: "April, 2026",
    author: "Cecilia D'Cunha",
    heroImageSrc: "/financial-year.jpg",
    heroImageAlt: "Business advisor discussing compliance planning",
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "With the introduction of Corporate Tax in the UAE, the concept of a financial year has evolved from being a simple accounting requirement into a critical pillar of business compliance. Today, your financial year determines not just how you report performance, but also how and when you meet your obligations related to corporate tax, VAT, and audits.",
          "Every major compliance requirement, from tax filings to financial reporting, flows from this 12-month cycle. Choosing the right financial year and managing it effectively is therefore essential to avoid penalties, ensure accuracy, and maintain operational stability.",
        ],
      },
      {
        title: "What Is a Financial Year in the UAE?",
        paragraphs: [
          "A financial year is the 12-month period during which a business records its financial activities, prepares its financial statements, and calculates its taxable income. It serves as the official reporting cycle for regulatory and tax purposes.",
          "In the UAE, most companies follow the calendar year from January to December because it aligns well with regulatory expectations and simplifies compliance. However, businesses are not restricted to this format. They can adopt a different financial year if it better suits their operational needs or aligns with a parent company's reporting structure.",
          "This flexibility allows businesses to structure their reporting efficiently, but it also means that the financial year becomes the anchor for all compliance timelines.",
        ],
      },
      {
        title: "Choosing Your Financial Year at Incorporation",
        paragraphs: [
          "When setting up a company in the UAE, selecting a financial year is one of the first strategic decisions you will make.",
          "Many businesses default to the calendar year due to its simplicity and widespread use, while multinational groups often choose a custom financial year to align with global reporting cycles.",
          "In some cases, newly incorporated businesses may have their first financial year extended up to 18 months. This provides flexibility during the initial phase of operations, but it also requires careful planning because it directly impacts tax and reporting timelines.",
          "Once a financial year is selected, changing it later is not straightforward. It requires regulatory approval and a valid business justification, which is why making the right choice at the beginning is crucial.",
        ],
      },
      {
        title: "Corporate Tax Period and Filing Deadlines",
        paragraphs: [
          "Under UAE Corporate Tax regulations, the financial year and the corporate tax period are effectively the same. This means that the income you earn during your financial year forms the basis of your taxable income, and your filing obligations are calculated accordingly.",
          "The UAE requires businesses to submit their Corporate Tax return within nine months from the end of their financial year. While this rule is simple in principle, the actual deadline varies depending on the financial year-end chosen by the company.",
        ],
        table: {
          columns: [
            "Financial Year Period",
            "Financial Year-End",
            "Corporate Tax Filing Deadline",
          ],
          rows: [
            ["1 Jan 2026 - 31 Dec 2026", "31 December 2026", "30 September 2027"],
            ["1 Apr 2026 - 31 Mar 2027", "31 March 2027", "31 December 2027"],
            ["1 Jul 2025 - 30 Jun 2026", "30 June 2026", "31 March 2027"],
            ["First / Extended FY (up to 18 months)", "Depends on chosen end date", "9 months from FY end"],
          ],
        },
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
        title: "Audit Deadlines Tied to Financial Year-End",
        paragraphs: [
          "Audit requirements in the UAE are closely linked to the financial year, and companies must ensure that their financial statements are reviewed and submitted within the prescribed timelines.",
          "Depending on the jurisdiction, whether mainland or free zone, audited financial statements are typically required within three to six months after the financial year-end.",
          "For example, a company with a financial year ending on 31 December 2026 may need to complete its audit by March or June 2027. These timelines are critical because delays can impact license renewals, regulatory standing, and even banking relationships.",
        ],
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
          "When financial years are aligned, companies can prepare consolidated financial statements more efficiently and ensure consistency in reporting.",
          "Misaligned financial years create unnecessary complexity, delays in reporting, and additional compliance challenges. This becomes even more critical for businesses operating under group structures or planning for corporate tax grouping.",
        ],
      },
      {
        title: "Penalties and Compliance Risks",
        paragraphs: [
          "Improper management of the financial year can lead to a range of compliance issues. Late corporate tax filings, incorrect VAT reporting, delayed audits, and inconsistencies in financial statements are among the most common risks.",
          "These issues can result in financial penalties, increased scrutiny from authorities, and operational disruptions. Since all compliance timelines are anchored to the financial year, even small errors in planning or execution can have a cascading effect across the business.",
        ],
      },
    ],
    closingParagraphs: [
      "The financial year is not merely an accounting requirement. It is a strategic decision that influences every aspect of your compliance framework.",
      "Businesses that plan their financial year carefully are better positioned to manage tax obligations, maintain accurate reporting, and operate efficiently.",
      "Choosing a financial year that aligns with your business model, planning for tax deadlines in advance, maintaining strong VAT reconciliation processes, and ensuring alignment across group entities are all critical steps toward long-term compliance success.",
    ],
  },
  {
    slug: "uae-free-zone-corporate-tax-rules-clarified-2026",
    category: "Free Zone",
    title:
      "UAE Free Zone Corporate Tax Rules Clarified: What Businesses Need to Know in 2026",
    description:
      "A founder-focused look at the 2025 clarifications around qualifying activity, economic substance, commodity trading, and the practical risks of losing 0% treatment.",
    dateLabel: "January, 2026",
    author: "Cecilia D'Cunha",
    heroImageSrc: "/free-zone.jpg",
    heroImageAlt: "Business professionals in a Dubai advisory meeting",
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "In a transformative move for the UAE's business landscape, the long-standing operational barrier between Dubai's Free Zones and its Mainland is dissolving. Under Executive Council Resolution No. 11 of 2025, certain companies operating in Free Zones can now apply for permits to conduct business directly within mainland Dubai.",
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
          "The Ministry's rulings bring clarity in three critical areas that determine whether a business can continue enjoying 0% corporate tax.",
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
          "The new framework offers clearer planning grounds for businesses, but it also brings tighter compliance expectations.",
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
];

export function getInsightPost(slug: string) {
  return insightPosts.find((post) => post.slug === slug);
}
