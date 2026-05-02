import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  audience: string;
  readingTime: number;
  content: string;
}

const contentDir = path.join(process.cwd(), "content");

function estimateReadingTime(text: string): number {
  const charCount = text.replace(/\s/g, "").length;
  return Math.max(1, Math.ceil(charCount / 400));
}

export function getAllPosts(): Post[] {
  const dirs = ["popular", "pro", "projects"]; // 新增 projects
  const posts: Post[] = [];

  dirs.forEach((dir) => {
    const dirPath = path.join(contentDir, dir);
    if (!fs.existsSync(dirPath)) return;

    const files = fs.readdirSync(dirPath).filter((f) => f.endsWith(".md"));
    files.forEach((file) => {
      const fullPath = path.join(dirPath, file);
      const raw = fs.readFileSync(fullPath, "utf-8");
      const { data, content } = matter(raw);

      posts.push({
        slug: file.replace(/\.md$/, ""),
        title: data.title || file,
        date: data.date ? new Date(data.date).toISOString().split("T")[0] : "",
        description: data.description || "",
        tags: data.tags || [],
        audience: data.audience || "public",
        readingTime: estimateReadingTime(content),
        content,
      });
    });
  });

  posts.sort((a, b) => (b.date > a.date ? 1 : -1));
  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug) || null;
}