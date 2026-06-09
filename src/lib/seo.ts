import type { Metadata } from "next";
import {
  contactDetails,
  featuredProfile,
  googleMapsHref,
  socialLinks,
} from "@/lib/site-content";

export const siteName = "Zenesis Corporation";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://www.zenesiscorp.com");

export const defaultSocialImage = "/opengraph-image.png";
export const defaultTwitterImage = "/twitter-image.png";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  noIndex?: boolean;
};

type BreadcrumbItem = {
  name: string;
  url: string;
};

type ArticleSchemaInput = {
  title: string;
  description: string;
  path: string;
  image: string;
  publishedTime?: string;
  authorName?: string;
};

type ServiceSchemaInput = {
  title: string;
  description: string;
  path: string;
};

function getContactValue(label: string) {
  return contactDetails.find((item) => item.label === label)?.value ?? "";
}

export function getAbsoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function toIsoDate(dateLabel?: string) {
  if (!dateLabel) {
    return undefined;
  }

  const parsed = new Date(dateLabel);

  if (Number.isNaN(parsed.getTime())) {
    return undefined;
  }

  return parsed.toISOString();
}

export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
  image = defaultSocialImage,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      type,
      images: [
        {
          url: image,
          width: 1132,
          height: 311,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image === defaultSocialImage ? defaultTwitterImage : image],
    },
  };
}

export function stringifyJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function getOrganizationSchemas() {
  const phone = getContactValue("Main line");
  const whatsapp = getContactValue("Mobile / WhatsApp");
  const email = getContactValue("Email");
  const officeAddress = getContactValue("Office");

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
      logo: getAbsoluteUrl("/icon.png"),
      email,
      telephone: phone,
      sameAs: socialLinks.map((item) => item.href),
      founder: {
        "@type": "Person",
        name: "Cecilia D'Cunha",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: siteName,
      url: siteUrl,
      image: getAbsoluteUrl(defaultSocialImage),
      telephone: phone,
      email,
      address: {
        "@type": "PostalAddress",
        streetAddress: officeAddress,
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "United Arab Emirates",
        },
      ],
      foundingDate: "2005",
      founder: {
        "@type": "Person",
        name: "Cecilia D'Cunha",
      },
      sameAs: socialLinks.map((item) => item.href),
      hasMap: googleMapsHref,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: phone,
          email,
          areaServed: "AE",
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          contactType: "WhatsApp",
          telephone: whatsapp,
          areaServed: "AE",
          availableLanguage: ["English"],
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildArticleSchema({
  title,
  description,
  path,
  image,
  publishedTime,
  authorName = "Cecilia D'Cunha",
}: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [getAbsoluteUrl(image)],
    mainEntityOfPage: getAbsoluteUrl(path),
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: getAbsoluteUrl("/icon.png"),
      },
    },
    ...(publishedTime ? { datePublished: publishedTime, dateModified: publishedTime } : {}),
  };
}

export function buildServiceSchema({ title, description, path }: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    url: getAbsoluteUrl(path),
    provider: {
      "@type": "ProfessionalService",
      name: siteName,
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
  };
}

export function buildFaqSchema(
  items: ReadonlyArray<{
    question: string;
    answer: string;
  }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildFeaturedProfileSchema() {
  return buildArticleSchema({
    title: "Cecilia D'Cunha in Global Leaders Today",
    description: featuredProfile.summary,
    path: featuredProfile.href,
    image: featuredProfile.imageSrc,
    publishedTime: toIsoDate(featuredProfile.dateLabel),
    authorName: featuredProfile.publication,
  });
}
