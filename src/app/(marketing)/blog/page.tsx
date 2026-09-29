import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles, guides and updates from our team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>
      {posts.length === 0 && <p>No posts yet.</p>}
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <h2 className="text-xl font-semibold group-hover:underline">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="mt-1 text-gray-700">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
