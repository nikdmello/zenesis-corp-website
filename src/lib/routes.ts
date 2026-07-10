import { insightPosts } from "@/lib/insights";
import { serviceDetailPages } from "@/lib/service-pages";

export type IndexableRoute = {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly";
};

export const coreIndexableRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/business-setup", priority: 0.9, changeFrequency: "weekly" },
  { path: "/business-setup-services-uae", priority: 0.9, changeFrequency: "weekly" },
  { path: "/business-setup-cost-dubai", priority: 0.9, changeFrequency: "weekly" },
  { path: "/mainland-vs-free-zone-dubai", priority: 0.85, changeFrequency: "monthly" },
  { path: "/low-cost-business-setup-uae", priority: 0.85, changeFrequency: "monthly" },
  { path: "/accounting-tax", priority: 0.9, changeFrequency: "weekly" },
  { path: "/visa-and-banking", priority: 0.9, changeFrequency: "weekly" },
  { path: "/insights", priority: 0.8, changeFrequency: "weekly" },
  { path: "/featured-profile", priority: 0.7, changeFrequency: "monthly" },
] as const satisfies ReadonlyArray<IndexableRoute>;

export function getServiceIndexableRoutes(): IndexableRoute[] {
  return Object.values(serviceDetailPages).map((service) => ({
    path: `/${service.slug}`,
    priority: service.topLevelService ? 0.9 : 0.8,
    changeFrequency: "monthly",
  }));
}

export function getInsightIndexableRoutes(): IndexableRoute[] {
  return insightPosts.map((post) => ({
    path: `/insights/${post.slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
  }));
}
