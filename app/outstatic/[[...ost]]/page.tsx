import { Outstatic } from 'outstatic'
import 'outstatic/outstatic.css'

export default async function Page(props: { params: Promise<{ ost: string[] }> }) {
  const params = await props.params;
  return <Outstatic params={params} />
}