import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/search"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/search"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/search"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/search"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
