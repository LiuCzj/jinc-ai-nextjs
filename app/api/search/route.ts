import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/posts";

export async function GET() {
  const posts = getAllPosts();
  const data = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    content: p.content.substring(0, 300),
    tags: p.tags,
  }));
  return NextResponse.json(data);
}