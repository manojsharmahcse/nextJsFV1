import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

// Pre-render every post at build time (fast + great for SEO)
export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound(); 

  return (
    <article className="prose prose-neutral mx-auto max-w-none">
      
      <Link href="/blog" className="text-sm no-underline">&larr; Back to blog</Link>
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">
        {post.date}
        {post.author ? ` · ${post.author}` : ""}
      </p>
      <p>{post.content}</p>
    </article>
  );
}
