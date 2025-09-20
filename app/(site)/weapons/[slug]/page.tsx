export const dynamic = "force-dynamic";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "@/sanity/client";
import { weaponBySlug } from "@/sanity/queries";
export const revalidate = 60;
const builder = imageUrlBuilder(sanityClient);
const urlFor = (src:any)=>{ try{ return builder.image(src).width(1200).height(800).fit("crop").url(); }catch{return ""} };
export default async function WeaponDetailPage({ params }:{ params: Promise<{ slug: string }> }){
  const { slug } = await params;
  const data:any = await sanityClient.fetch(weaponBySlug, { slug }).catch(()=>null);
  if(!data) return <div className="text-sm opacity-60">Not Found</div>;
  return (
    <article className="space-y-4">
      <header className="space-y-1"><h1 className="text-xl font-bold">{data.name}</h1><p className="text-xs text-neutral-400">{data.type} · ★{data.rarity ?? "-"}</p></header>
      {data.image ? <img src={urlFor(data.image)} alt={data.name} className="rounded-xl border border-neutral-800/60" /> : null}
      {data.description ? <p className="text-sm leading-6 opacity-90 whitespace-pre-wrap">{data.description}</p> : null}
    </article>
  );
}