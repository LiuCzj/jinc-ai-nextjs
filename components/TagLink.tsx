'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
}

export default function TagLink({ tag, index }: { tag: string; index: number }) {
  return (
    <motion.div
      variants={item}
      initial="hidden"
      animate="show"
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={`/?search=${encodeURIComponent(tag)}`}
        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium border border-border hover:bg-primary/10 hover:text-primary transition-colors"
      >
        {tag}
      </Link>
    </motion.div>
  )
}