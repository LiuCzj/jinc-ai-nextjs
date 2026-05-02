'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Code2, Cpu, Eye, Sparkles } from 'lucide-react'
import type { Post } from '@/lib/posts'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'Cpu': Cpu,
  'Eye': Eye,
  'Sparkles': Sparkles,
  'Code2': Code2,
};

// 若文章 frontmatter 中包含 icon 字段，可使用该映射，否则默认使用 Code2
function getIcon(post: Post) {
  // 你可以扩展：在 markdown 中添加 icon 字段，例如 icon: "Cpu"
  // 这里简单根据标题或标签返回
  if (post.tags.includes('Transformer')) return Cpu;
  if (post.tags.includes('YOLOv8')) return Eye;
  if (post.tags.includes('Streamlit')) return Sparkles;
  return Code2;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ProjectsPageContent({ projects }: { projects: Post[] }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
          <Code2 className="text-accent" />
          项目展示
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          这里记录了我最具代表性的几个开源与商业项目
        </p>
      </motion.div>

      {projects.length === 0 ? (
        <p className="text-center text-muted-foreground">项目即将上线...</p>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((post) => {
            const IconComponent = getIcon(post);
            return (
              <motion.div key={post.slug} variants={item}>
                <Link href={`/posts/${post.slug}`} className="block no-underline">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold px-2 py-0.5 rounded bg-secondary text-secondary-foreground border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      <div className="mt-16 text-center">
        <p className="text-muted-foreground text-sm">
          更多项目请关注我的
          <a
            href="https://github.com/LiuCzj"
            target="_blank"
            className="text-accent mx-1 hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}