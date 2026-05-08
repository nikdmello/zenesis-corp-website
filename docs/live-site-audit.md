# Zenesis Live Site Audit

Date reviewed: 2026-04-21
Scope used for content decisions: rendered desktop content from the live `Home`, `About`, and `Contact` pages, plus the user's confirmation that the Alicante, Bogota, and Bangalore offices are verified.

## 1. Definite content and copy mistakes

- `Bookeeping` appears in navigation instead of `Bookkeeping`.
- `business transformationservices` is missing a space.
- `Dubai  headquartered` contains double spacing.
- `it's weaknesses` should be `its weaknesses`.
- `100 man years of experience` is awkward and outdated phrasing.
- `lead by highly trained` should be `led by highly trained`.
- `Message*` appears twice on the contact form.
- `its been a long journey` should be `it's been a long journey`.
- `no cause for complain` should be `no cause for complaint`.
- `plethora of services` and `High Net-worth Client` are awkwardly capitalized / phrased in testimonial-style copy.
- `p-logo-2.jpg` appears as literal rendered text instead of a proper partner logo.
- `Accounting & Tax -> Corporate Tax Filling Page` is itself a naming problem if used internally anywhere; the correct term is `Filing`.

## 2. Duplicated rendered content

- The `We Bring CLARITY!`, `We Deliver RESULTS!`, and `We Delve DEEP!` block repeats three times on the About page.
- The `CONTACT US` / `Contact Us` CTA pattern appears multiple times on the About page without adding new information.
- Several testimonials repeat on the homepage:
  - `Sabin Madhavan`
  - `Al Khayam Exhibition`
  - `Mohammed Muqthar`
  - `Shams Dharamshi`
  - `Simon Marriott`
  - `Mr Premnath Kapoor`
  - `Mr Martin Bruce`
  - `Rhea DSouza`
  - `Hoshedar Cooper`
- Contact details are repeated in page body and footer blocks.
- On service pages, nearly the entire lower half repeats from page to page:
  - `Trusted by Businesses Across the UAE`
  - `Why Outsource to Zenesis Corp?`
  - `What Clients Say`
  - `Related Articles`
  - `Schedule a Free Consultation`
  - footer company/about/contact blocks
- Many testimonial names are rendered twice in sequence, once as a heading and once again as plain text.

## 3. Content that feels unpolished or low-trust

- `Businesses need CLARITY over superiority.` reads more like internal slogan language than reassuring client-facing copy.
- `success isn’t just possible — it’s inevitable` is too absolute and can feel sales-heavy.
- `We have everything to make your business a success` is generic and unsupported.
- `some of the best minds in the business` is repeated praise language without evidence.
- `exciting array of services as a one-stop-shop solution` reads like generic marketing copy.
- `No challenge is too difficult for us` is overclaiming.
- `Stay Compliant. Stay In Control. Stay Focused on Growth.` is reused as a generic hero line on unrelated services like company formation, document attestation, and golden visa support.
- `Trusted by Businesses Across the UAE` is followed by the same chartered accountants / tax experts / legal advisors block on many pages regardless of the actual service.
- `Chat With Whatsapp` reads unpolished and should be `Chat on WhatsApp` or equivalent.
- Emoji-led formatting like `🕒 Filing Deadline:` and `📄 What’s Included in Your Filing:` feels inconsistent with the rest of the corporate site tone.

## 4. Positioning and scope confusion

- The homepage centers on business setup, corporate services, accounting, VAT, and tax planning.
- The About page then expands into:
  - Digital Transformation including Automation, Workflow, Content creation
  - Artificial Intelligence
  - Robotics
  - Mobility
  - Corporate Management & Training
  - Real Estate Management
- The Contact page footer/services list is narrower again.
- Result: the company can feel focused on UAE business setup in one section and like a broad transformation-and-tech consultancy in another.
- The company formation section adds useful business setup detail, but still drags in the same generic tax/compliance proof block and the same testimonial wall, which blurs page intent.
- Bank account, visa, attestation, and golden visa pages are more credible than the older transformation copy, but they still inherit the same template structure and repetitive trust blocks.
- The VAT filing page includes FAQ questions about industries, accounting software, package upgrades, and data safety. Those read like generic bookkeeping-package FAQs, not VAT filing FAQs.
- The bookkeeping page reuses a `Why Outsource to Zenesis Corp?` block that talks about `application filing`, `post-registration`, and `deadline tracking`, which fits corporate tax registration more than bookkeeping.

## 5. Structural and UX issues

- The homepage becomes very long before the user reaches contact information.
- High-value proof is buried inside a large testimonial wall.
- The About page mixes company history, team claims, credentials, values, office network, and promotional slogans without a clear narrative order.
- Repeated blocks make the site feel builder-generated rather than intentional.
- Header categories suggest more detailed service architecture, but the visible pages do not organize that information cleanly.
- The `Company Formation` FAQ renders six questions, but only the first one shows an answer. The rest appear unanswered or collapsed without useful on-page content.
- `Our Happy Partners` is visually broken when a filename is shown instead of a rendered logo block.
- Several service pages force users through a long testimonial section before related articles, forms, and contact details, which makes the pages feel repetitive and heavy.
- The accounting pages follow the same oversized template structure, so useful tax/compliance information is diluted by repeated proof, partner placeholders, and repeated lead forms.

## 6. Trust and credibility risks

- Duplicate testimonials can make social proof feel less credible.
- Some claims are broad but unsupported on-page, for example:
  - `award-winning team`
  - `collective 100 man years of experience`
  - `some of the best minds in the business`
  - `more than 150 specialists working across the world`
- Multiple tones coexist:
  - corporate advisory
  - business setup
  - technology transformation
  - leadership development
  - real estate management
  This weakens the main commercial story.
- The mainland company formation FAQ includes a legal/compliance statement that a trading company needs a UAE national partner owning 51 per cent. Current official UAE guidance says mainland foreign investors can own 100 per cent of many commercial companies, with limits mainly for strategic-impact activities. This means at least some rendered legal guidance on the live site may be outdated and should not be reused without current legal review.
- The corporate tax registration page says registration is required `whether or not your business earns more than AED 375,000 in annual profits`. Current FTA guidance says all taxable persons must register, but there are category-specific rules and natural persons have a separate revenue threshold. The rendered wording is too broad to reuse without legal review.
- The corporate tax filing page says businesses must maintain records for `5 years`. That may be correct in some contexts, but all tax-record retention claims should still be checked against current FTA guidance before reuse because these are compliance statements.

## 7. Content to avoid reusing directly

- Repeated `Clarity / Results / Deep` slogans as written.
- `100 man years of experience`.
- `Digital Workflow Automation, Artificial Intelligence, Robotics, and Mobility` as homepage positioning copy.
- `No challenge is too difficult for us`.
- `success isn’t just possible — it’s inevitable`.
- Generic filler like `one-stop-shop solution`, `best minds in the business`, and similar unsupported superlatives.
- Service-page testimonial walls copied wholesale across multiple pages.
- `Stay Compliant. Stay In Control. Stay Focused on Growth.` as a catch-all hero line.
- The outdated mainland local-partner / 51 per cent ownership explanation unless it is reviewed and rewritten against current law.
- Any tax/compliance copy that states thresholds, deadlines, registration scope, exemptions, or record-retention requirements without current-source validation.
- The VAT page FAQ block in its current form because it does not match the actual service page intent.
- The bookkeeping page `Why Outsource` block in its current form because it appears copied from tax-registration content.

## 8. Verified facts worth keeping

- Zenesis Corporation / Zenesis Corp
- Dubai, United Arab Emirates headquarters
- 20+ years of experience
- 1200+ companies registered worldwide
- Business Setup
- Company Formation
- Mainland / Onshore setup
- Free Zone setup
- Offshore setup
- Corporate Services
- Accounting / Accounting & Tax
- Corporate Tax Registration support
- VAT Filing
- Corporate Tax Filing
- Bookkeeping services
- Tax Planning
- Document Attestation Services
- UAE Business Bank Account support
- UAE Company Visa support
- UAE Golden Visa
- Originally incorporated in the UAE in 2005
- Later incorporated in the DMCC Free Zone in 2009
- Tax advisory and bookkeeping added in 2017
- Business setup types called out on rendered pages:
  - Sole Proprietorship
  - Limited Liability Company (LLC)
  - Partnership
  - Civil Company
  - Branch Foreign Company
  - Public Shareholding Company (PJSC)
  - Private Shareholding Company (PrJSC)
  - Joint Venture
- Free zone examples called out on rendered pages:
  - Umm Al Quwain Free Trade Zone
  - Ras Al Khaimah Economic Zone (RAKEZ)
  - International Free Trade Zone - Fujairah
  - Sharjah Airport International Free Zone
  - Ajman Free Zone
  - Dubai Multi Commodities Centre (DMCC)
  - Dubai South
  - IFZA Dubai
  - Meydan Free Zone
  - Shams
- Offshore options called out on rendered pages:
  - JAFZA
  - RAK Offshore / RAK ICC
  - Ajman Offshore
- Corporate tax page service elements visible on rendered pages:
  - annual return filing support
  - FTA portal submission support
  - deadline management
  - documentation / record support
  - guidance on deductions, exemptions, and credits
- VAT page service elements visible on rendered pages:
  - VAT return preparation
  - input/output VAT reconciliation
  - tax period management
  - VAT audit support
  - payment assistance
- Bookkeeping page service elements visible on rendered pages:
  - monthly and weekly bookkeeping
  - financial reporting
  - payroll support
  - audit support
  - support for QuickBooks, Zoho Books, Tally, and Excel
- Dubai address: Suite 1006, Tiffany Tower, Jumeirah Lake Towers, POB 476476, Dubai, United Arab Emirates
- Phone numbers:
  - `+971 58 914 2200`
  - `+971 4 4474997`
- Email: `info@zenesiscorp.com`
- Offices in:
  - Alicante, Spain
  - Bogota, Colombia
  - Bangalore, India

## 9. Recommended reporting summary

- The live site contains real business information, but the presentation quality is inconsistent.
- Main problems are duplication, awkward or outdated phrasing, broad unsupported claims, confused positioning, and some rendered legal/compliance guidance that may no longer reflect current UAE rules.
- The next site should preserve verified facts, concrete services, office/contact details, and proof signals while removing repetitive slogans, generic filler, duplicated testimonials, broken assets, template leakage across service pages, and overly broad transformation-tech messaging from the core commercial story.
