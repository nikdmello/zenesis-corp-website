import type { MetadataRoute } from "next";
import { insightPosts } from "@/lib/insights";
import { siteUrl, toIsoDate } from "@/lib/seo";
import { serviceDetailPages } from "@/lib/service-pages";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/business-setup", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/business-setup-cost-dubai", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/accounting-tax", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/visa-and-banking", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/insights", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/featured-profile", priority: 0.7, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const services = Object.values(serviceDetailPages).map((service) => ({
    url: `${siteUrl}/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: service.topLevelService ? 0.9 : 0.8,
  }));

  const insights = insightPosts.map((post) => ({
    url: `${siteUrl}/insights/${post.slug}`,
    lastModified: toIsoDate(post.dateLabel) ?? now.toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: [post.heroImageSrc.startsWith("http") ? post.heroImageSrc : `${siteUrl}${post.heroImageSrc}`],
  }));

  return [...pages, ...services, ...insights];
}
