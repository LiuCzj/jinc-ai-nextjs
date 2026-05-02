// @ts-nocheck
'use client'

import { Outstatic } from 'outstatic'
import 'outstatic/outstatic.css'
import { useEffect, useState, use } from 'react'

export default function Page({ params }: { params: Promise<{ ost: string[] }> }) {
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