'use client'

import { motion } from 'framer-motion'
import { Code2, Cpu, Eye, Sparkles } from 'lucide-react'

const projects = [
  {
    title: '时间序列预测平台',
    description: '使用自研Transformer模型，应用于供应链需求预测，支持多步预测与不确定性分析。',
    icon: Cpu,
    tags: ['Transformer', '时序预测', '供应链']
  },
  {
    title: '工业缺陷检测系统',
    description: '基于YOLOv8与异常检测算法，部署至边缘设备，实时检测产品表面缺陷。',
    icon: Eye,
    tags: ['YOLOv8', '边缘计算', '缺陷检测']
  },
  {
    title: '交互式数据分析看板',
    description: '集成Streamlit与Plotly，用于快速探索和可视化时间序列异常模式。',
    icon: Sparkles,
    tags: ['Streamlit', '可视化', '异常检测']
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function ProjectsPage() {
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

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={item}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
              <project.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="text-[10px] font-bold px-2 py-0.5 rounded bg-secondary text-secondary-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

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
  )
}

export const metadata = { title: '项目展示' };