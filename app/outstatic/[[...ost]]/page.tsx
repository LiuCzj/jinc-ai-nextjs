import { Outstatic } from 'outstatic'
import 'outstatic/outstatic.css'

export default async function Page({ params }: { params: Promise<{ ost: string[] }> }) {
  const resolvedParams = await params;
  return <Outstatic params={resolvedParams} />
}