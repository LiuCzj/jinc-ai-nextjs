// @ts-nocheck
'use client'
import { Outstatic } from 'outstatic'
import 'outstatic/outstatic.css'
import { use, useState, useEffect } from 'react'

export default function Page({ params }) {
  const resolvedParams = use(params)
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  return (
    <div className="min-h-screen bg-white text-black">
      <Outstatic params={resolvedParams} />
    </div>
  )
}