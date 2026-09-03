import type { MetadataRoute } from "next";
import { getInsightCredibility, insightPosts } from "@/lib/insights";
import { coreIndexableRoutes, getServiceIndexableRoutes } from "@/lib/routes";
import { siteUrl, toIsoDate } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = coreIndexableRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const services = getServiceIndexableRoutes().map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const insights = insightPosts.map((post) => {
    const updatedLabel = getInsightCredibility(post.slug)?.updatedLabel;

    return {
      url: `${siteUrl}/insights/${post.slug}`,
      lastModified: toIsoDate(updatedLabel ?? post.dateLabel) ?? now.toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [post.heroImageSrc.startsWith("http") ? post.heroImageSrc : `${siteUrl}${post.heroImageSrc}`],
    };
  });

  return [...pages, ...services, ...insights];
}
