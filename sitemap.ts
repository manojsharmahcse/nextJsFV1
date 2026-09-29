import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://localhost:3000";
  return ["", "/about", "/contact", "/pricing"].map((path) => ({
    url: base + path,
    lastModified: new Date(),
  }));
}