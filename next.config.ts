import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // 核心设置：忽略所有 TypeScript 错误
  typescript: {
    ignoreBuildErrors: true,
  },
  // 核心设置：忽略所有 ESLint 检查
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;