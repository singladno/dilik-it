import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["", "/privacy", "/cookie-policy", "/offer"];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    priority: path === "" ? 1 : 0.4,
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
  }));
}
