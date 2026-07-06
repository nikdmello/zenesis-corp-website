import type { NextConfig } from "next";

const currentAssetVersion = "20260606b";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.8.67", "192.168.8.69"],
  images: {
    qualities: [68, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "/**",
      },
    ],
    localPatterns: [
      {
        pathname: "/**",
        search: "",
      },
      {
        pathname: "/**",
        search: `?v=${currentAssetVersion}`,
      },
      {
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about-us/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact-us/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/business-setup/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/business-setup/about-us/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/business-setup/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/business-setup/contact-us/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/business-setup/faqs",
        destination: "/business-setup",
        permanent: true,
      },
      {
        source: "/business-setup/faqs/",
        destination: "/business-setup",
        permanent: true,
      },
      {
        source: "/business-setup/ourservices/company-formation",
        destination: "/business-setup",
        permanent: true,
      },
      {
        source: "/business-setup/ourservices/company-formation/",
        destination: "/business-setup",
        permanent: true,
      },
      {
        source: "/company-formation",
        destination: "/business-setup",
        permanent: true,
      },
      {
        source: "/company-formation/",
        destination: "/business-setup",
        permanent: true,
      },
      {
        source: "/free-zone",
        destination: "/free-zones",
        permanent: true,
      },
      {
        source: "/free-zone/",
        destination: "/free-zones",
        permanent: true,
      },
      {
        source: "/mainland-company-setup",
        destination: "/mainland",
        permanent: true,
      },
      {
        source: "/mainland-company-setup/",
        destination: "/mainland",
        permanent: true,
      },
      {
        source: "/offshore/",
        destination: "/offshore",
        permanent: true,
      },
      {
        source: "/document-attestation-services-in-uae/",
        destination: "/document-attestation-services-in-uae",
        permanent: true,
      },
      {
        source: "/uae-business-bank-account",
        destination: "/open-a-bank-account-easily",
        permanent: true,
      },
      {
        source: "/uae-business-bank-account/",
        destination: "/open-a-bank-account-easily",
        permanent: true,
      },
      {
        source: "/uae-company-visa/",
        destination: "/uae-company-visa",
        permanent: true,
      },
      {
        source: "/uae-golden-visa",
        destination: "/golden-visa-services-in-the-uae",
        permanent: true,
      },
      {
        source: "/uae-golden-visa/",
        destination: "/golden-visa-services-in-the-uae",
        permanent: true,
      },
      {
        source: "/corporate-tax-filing",
        destination: "/corporate-tax-filing-services-in-the-uae",
        permanent: true,
      },
      {
        source: "/corporate-tax-filing/",
        destination: "/corporate-tax-filing-services-in-the-uae",
        permanent: true,
      },
      {
        source: "/corporate-tax-registration-in-the-uae/",
        destination: "/corporate-tax-registration-in-the-uae",
        permanent: true,
      },
      {
        source: "/vat-filing",
        destination: "/vat-filing-services-in-the-uae",
        permanent: true,
      },
      {
        source: "/vat-filing/",
        destination: "/vat-filing-services-in-the-uae",
        permanent: true,
      },
      {
        source: "/accounting-bookkeeping",
        destination: "/professional-bookkeeping-services-in-dubai",
        permanent: true,
      },
      {
        source: "/accounting-bookkeeping/",
        destination: "/professional-bookkeeping-services-in-dubai",
        permanent: true,
      },
      {
        source: "/contact-us-2",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact-us-2/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/uae-business-bank",
        destination: "/open-a-bank-account-easily",
        permanent: true,
      },
      {
        source: "/uae-business-bank/",
        destination: "/open-a-bank-account-easily",
        permanent: true,
      },
      {
        source: "/vat-filing-service",
        destination: "/vat-filing-services-in-the-uae",
        permanent: true,
      },
      {
        source: "/vat-filing-service/",
        destination: "/vat-filing-services-in-the-uae",
        permanent: true,
      },
      {
        source: "/topics/accounting/",
        destination: "/accounting-tax",
        permanent: true,
      },
      {
        source: "/topics/accounting",
        destination: "/accounting-tax",
        permanent: true,
      },
      {
        source: "/topics/business-growth/",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/topics/business-growth",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/topics/business-setup/",
        destination: "/business-setup",
        permanent: true,
      },
      {
        source: "/topics/business-setup",
        destination: "/business-setup",
        permanent: true,
      },
      {
        source: "/topics/business-visa/",
        destination: "/visa-and-banking",
        permanent: true,
      },
      {
        source: "/topics/business-visa",
        destination: "/visa-and-banking",
        permanent: true,
      },
      {
        source: "/topics/corporate-tax/",
        destination: "/accounting-tax",
        permanent: true,
      },
      {
        source: "/topics/corporate-tax",
        destination: "/accounting-tax",
        permanent: true,
      },
      {
        source: "/topics/uae-golden-visa/",
        destination: "/golden-visa-services-in-the-uae",
        permanent: true,
      },
      {
        source: "/topics/uae-golden-visa",
        destination: "/golden-visa-services-in-the-uae",
        permanent: true,
      },
      {
        source: "/topics/:path*",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/author/:path*",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/tag/:path*",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/thank-you",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/thank-you/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/thank-you-2",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/thank-you-2/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/thanks",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/thanks/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/public/blog",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/public/blog/",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/:slug(elementor-.*)",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/blogs/",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/landing",
        destination: "/",
        permanent: true,
      },
      {
        source: "/landing/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our_team",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/our_team/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/customerslider/:path*",
        destination: "/#client-reviews",
        permanent: true,
      },
      {
        source: "/employeeslider/:path*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/aboutslider/:path*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/cecilia-dcunha",
        destination: "/featured-profile",
        permanent: true,
      },
      {
        source: "/cecilia-dcunha/",
        destination: "/featured-profile",
        permanent: true,
      },
      {
        source: "/prof-jeevan-dmello",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/prof-jeevan-dmello/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/shams-dharamshi",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/shams-dharamshi/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/vasudevan-kidambi",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/vasudevan-kidambi/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/sajal-arora",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/sajal-arora/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/ray-hogan",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/ray-hogan/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/abdul-gaffar",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/abdul-gaffar/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/gnanasundaram-thanaseelan",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/gnanasundaram-thanaseelan/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/parag-paresh-and-co",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/parag-paresh-and-co/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/international-development-ireland",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/international-development-ireland/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/vat-registration-services",
        destination: "/vat-filing-services-in-the-uae",
        permanent: true,
      },
      {
        source: "/vat-registration-services/",
        destination: "/vat-filing-services-in-the-uae",
        permanent: true,
      },
      {
        source: "/corporate-tax-filing-2",
        destination: "/corporate-tax-filing-services-in-the-uae",
        permanent: true,
      },
      {
        source: "/corporate-tax-filing-2/",
        destination: "/corporate-tax-filing-services-in-the-uae",
        permanent: true,
      },
      {
        source: "/the-small-business-relief-program-in-the-uae-what-smes-need-to-know",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/the-small-business-relief-program-in-the-uae-what-smes-need-to-know/",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/business-setup/5-learning-platforms-to-boost-your-career",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/business-setup/5-learning-platforms-to-boost-your-career/",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/business-setup/can-women-sponsor-others-in-the-uae",
        destination: "/visa-and-banking",
        permanent: true,
      },
      {
        source: "/business-setup/can-women-sponsor-others-in-the-uae/",
        destination: "/visa-and-banking",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "query", key: "page_id", value: "2" }],
        destination: "/",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "query", key: "page_id", value: "1931" }],
        destination: "/featured-profile",
        permanent: true,
      },
      {
        source:
          "/uae-free-zone-corporate-tax-rules-clarified-what-businesses-need-to-know-in-2026",
        destination: "/insights/uae-free-zone-corporate-tax-rules-clarified-2026",
        permanent: true,
      },
      {
        source:
          "/uae-free-zone-corporate-tax-rules-clarified-what-businesses-need-to-know-in-2026/",
        destination: "/insights/uae-free-zone-corporate-tax-rules-clarified-2026",
        permanent: true,
      },
      {
        source:
          "/financial-year-2026-in-the-uae-a-complete-compliance-guide-for-businesses",
        destination: "/insights/financial-year-2026-uae-compliance-guide",
        permanent: true,
      },
      {
        source:
          "/financial-year-2026-in-the-uae-a-complete-compliance-guide-for-businesses/",
        destination: "/insights/financial-year-2026-uae-compliance-guide",
        permanent: true,
      },
      {
        source: "/a-complete-guide-to-corporate-tax-groups-in-the-uae",
        destination: "/insights/complete-guide-to-corporate-tax-groups-uae",
        permanent: true,
      },
      {
        source: "/a-complete-guide-to-corporate-tax-groups-in-the-uae/",
        destination: "/insights/complete-guide-to-corporate-tax-groups-uae",
        permanent: true,
      },
      {
        source:
          "/uae-corporate-tax-registrations-cross-640000-what-it-means-for-businesses",
        destination:
          "/insights/uae-corporate-tax-registrations-cross-640000-businesses",
        permanent: true,
      },
      {
        source:
          "/uae-corporate-tax-registrations-cross-640000-what-it-means-for-businesses/",
        destination:
          "/insights/uae-corporate-tax-registrations-cross-640000-businesses",
        permanent: true,
      },
      {
        source:
          "/uae-visa-reforms-2025-what-entrepreneurs-and-expats-need-to-know",
        destination: "/insights/uae-visa-reforms-2025-entrepreneurs-expats",
        permanent: true,
      },
      {
        source:
          "/uae-visa-reforms-2025-what-entrepreneurs-and-expats-need-to-know/",
        destination: "/insights/uae-visa-reforms-2025-entrepreneurs-expats",
        permanent: true,
      },
      {
        source: "/top-5-mistakes-to-avoid-when-starting-a-business-in-dubai",
        destination: "/insights/top-5-mistakes-starting-business-dubai",
        permanent: true,
      },
      {
        source: "/top-5-mistakes-to-avoid-when-starting-a-business-in-dubai/",
        destination: "/insights/top-5-mistakes-starting-business-dubai",
        permanent: true,
      },
      {
        source: "/your-gateway-to-business-success-in-the-uae/",
        destination: "/business-setup",
        permanent: true,
      },
      {
        source: "/5-ways-to-reduce-stress-at-work/",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/comprehensive-guide-on-dubai-golden-visa-2022",
        destination: "/insights/complete-dubai-golden-visa-guide",
        permanent: true,
      },
      {
        source: "/comprehensive-guide-on-dubai-golden-visa-2022/",
        destination: "/insights/complete-dubai-golden-visa-guide",
        permanent: true,
      },
      {
        source: "/the-ultimate-guide-to-the-upcoming-expo-2020-dubai/",
        destination: "/insights",
        permanent: true,
      },
      {
        source:
          "/why-continuous-learning-professional-and-personal-development-is-the-key-to-success/",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/top-secrets-of-successful-entrepreneurs/",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/do-you-hire-for-skills-or-attitude/",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/the-6-golden-rules-of-networking/",
        destination: "/insights",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
