import { sanityClient } from "@/sanity/client";
import { characterBySlug } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import ptComponents from "@/lib/portableText";
export default async function CharacterDetail({ params }:{ params: Promise<{ slug:string }> }){
  const { slug } = await params;
  const data:any = await sanityClient.fetch(characterBySlug, { slug }).catch(()=>null);
  if(!data) return <div className="text-sm opacity-60">Not Found</div>;
  return (
    <article className="space-y-4">
      <h1 className="text-xl font-bold">{data.name}</h1>
      <div className="text-sm opacity-70">Role: {data.role ?? "-"}</div>
      {Array.isArray(data.body) && data.body.length ? <PortableText value={data.body} components={ptComponents} /> : null}
    </article>
  );
}