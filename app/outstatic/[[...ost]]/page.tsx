// @ts-nocheck
import { Outstatic } from 'outstatic'
import 'outstatic/outstatic.css'

export default async function Page({ params }) {
  const resolvedParams = await params
  return <Outstatic params={resolvedParams} />
}