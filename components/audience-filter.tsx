'use client';

import { useState } from 'react';
import PostCard from './PostCard';
import { motion, AnimatePresence } from 'framer-motion';

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  audience: string;
  readingTime: number;
  category?: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const fadeInScale = {
  rest: { scale: 1, y: 0, boxShadow: "0 0 0 0 rgba(0,0,0,0)" },
  hover: { scale: 1.03, y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" },
  tap: { scale: 0.97 }
};

const categoryMap: Record<string, string> = {
  'public': '科普入门',
  'professional': '技术深潜',
  'projects': '项目展示',
};

export default function AudienceFilter({ posts }: { posts: Post[] }) {
  const [filter, setFilter] = useState<'all' | 'public' | 'professional' | 'projects'>('all');

  const filteredPosts =
    filter === 'all' ? posts : posts.filter((p) => p.audience === filter);

  const filterOptions = [
    { key: 'all', label: '全部' },
    { key: 'public', label: '科普入门' },
    { key: 'professional', label: '技术深潜' },
    { key: 'projects', label: '项目' },
  ];

  return (
    <>
      <div className="flex justify-center gap-4 my-10 flex-wrap">
        {filterOptions.map(({ key, label }) => (
          <motion.button
            key={key}
            variants={fadeInScale}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            onClick={() => setFilter(key as typeof filter)}
            className={`
              relative px-6 py-2.5 rounded-full font-semibold text-sm transition-all border-2
              ${filter === key
                ? 'bg-primary text-primary-foreground border-primary shadow-lg'
                : 'bg-card text-muted-foreground border-border hover:border-primary/30'
              }
            `}
          >
            {label}
          </motion.button>
        ))}
      </div>

      <motion.div layout className="grid gap-6">
        <AnimatePresence mode='popLayout'>
          {filteredPosts.map((post) => (
            <motion.div
              key={post.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <PostCard post={post} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}