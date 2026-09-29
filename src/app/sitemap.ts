import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE = "https://yourdomain.com"; // TODO: change to your real domain

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/pricing", "/blog"].map((p) => ({
    url: BASE + p,
    lastModified: new Date(),
  }));
  const posts = getAllPosts().map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));
  return [...pages, ...posts];
}
