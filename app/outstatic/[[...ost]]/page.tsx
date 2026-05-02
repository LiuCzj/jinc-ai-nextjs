// @ts-nocheck
'use client'

import { Outstatic } from 'outstatic'
import 'outstatic/outstatic.css'
import { useEffect, useState, use } from 'react'

export default function Page({ params }: { params: Promise<{ ost: string[] }> }) {
  // 使用 React 19 的 use 钩子安全解构参数
  const resolvedParams = use(params)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-white">
      <Outstatic params={resolvedParams} />
    </div>
  )
}