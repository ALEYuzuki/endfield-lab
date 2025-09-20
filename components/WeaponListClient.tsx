"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

type Weapon = { _id:string; name:string; slug:string; type?:string; rarity?:number; image?:any; description?:string; traits?:string[]; };
const builder = imageUrlBuilder({ projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production" });
const urlFor = (src:any)=>{ try{ return builder.image(src).width(640).height(360).fit("crop").url(); }catch{return ""} };

export default function WeaponListClient({ items }: { items: Weapon[] }){
  const [q,setQ]=useState(""); const [types,setTypes]=useState<string[]>([]); const [rarities,setRarities]=useState<number[]>([]); const [traits,setTraits]=useState<string[]>([]);
  const allTypes   = useMemo(()=>Array.from(new Set(items.map(i=>i.type).filter(Boolean))) as string[],[items]);
  const allRaritys = useMemo(()=>Array.from(new Set(items.map(i=>i.rarity).filter((v):v is number=>typeof v==="number"))).sort((a,b)=>a-b),[items]);
  const allTraits  = useMemo(()=>Array.from(new Set(items.flatMap(i=>Array.isArray(i.traits)?i.traits:[]).filter(Boolean))) as string[],[items]);
  const toggle = <T,>(arr:T[], v:T, cmp:(a:T,b:T)=>boolean=(a,b)=>a===b)=> arr.some(x=>cmp(x,v)) ? arr.filter(x=>!cmp(x,v)) : [...arr,v];
  const hit = useMemo(()=>{
    const kw=q.trim().toLowerCase();
    return items.filter(w=>{
      if(types.length && (!w.type || !types.includes(w.type))) return false;
      if(rarities.length && (!w.rarity || !rarities.includes(w.rarity))) return false;
      if(traits.length){ const t=new Set((w.traits||[]).map(x=>x.toLowerCase())); for(const need of traits){ if(!t.has(need.toLowerCase())) return false; } }
      if(kw){ const bag=[w.name??"",w.type??"",String(w.rarity??""),(w.description??""),...(w.traits??[])].join(" ").toLowerCase(); if(!bag.includes(kw)) return false; }
      return true;
    });
  },[items,q,types,rarities,traits]);
  return (
    <section className="border border-neutral-800 bg-neutral-900/60 p-3 rounded-none">
      <div className="text-sm opacity-80 mb-2">Weapon search (client-side filter)</div>
      <form className="flex items-center gap-2 mb-3" onSubmit={e=>e.preventDefault()}>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Keyword (name/type/tags/desc)" className="w-full min-w-0 px-3 py-2 text-sm bg-neutral-800 border border-neutral-700 outline-none" />
        <button type="button" aria-label="Search" className="shrink-0 p-2 bg-neutral-800 border border-neutral-700">
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2"></circle><line x1="16.65" y1="16.65" x2="21" y2="21" stroke="currentColor" strokeWidth="2"></line></svg>
        </button>
      </form>
      <div className="space-y-3">
        {allTypes.length ? (<div><div className="text-xs opacity-70 mb-1">Type</div><div className="flex flex-wrap gap-2">{allTypes.map(t=>(<button key={t} onClick={()=>setTypes(v=>toggle(v,t))} className={"px-2 py-1 text-xs border "+(types.includes(t)?"border-neutral-500 bg-neutral-700":"border-neutral-700 bg-neutral-800 hover:bg-neutral-700")}>{t}</button>))}</div></div>):null}
        {allRaritys.length ? (<div><div className="text-xs opacity-70 mb-1">Rarity</div><div className="flex flex-wrap gap-2">{allRaritys.map(r=>(<button key={r} onClick={()=>setRarities(v=>toggle(v,r))} className={"px-2 py-1 text-xs border "+(rarities.includes(r)?"border-neutral-500 bg-neutral-700":"border-neutral-700 bg-neutral-800 hover:bg-neutral-700")}>{"★"+r}</button>))}</div></div>):null}
        {allTraits.length ? (<div><div className="text-xs opacity-70 mb-1">Tags</div><div className="flex flex-wrap gap-2">{allTraits.map(t=>(<button key={t} onClick={()=>setTraits(v=>toggle(v,t,(a,b)=>a.toLowerCase()===b.toLowerCase()))} className={"px-2 py-1 text-xs border "+(traits.map(x=>x.toLowerCase()).includes(t.toLowerCase())?"border-neutral-500 bg-neutral-700":"border-neutral-700 bg-neutral-800 hover:bg-neutral-700")}>{t}</button>))}</div></div>):null}
      </div>
      <div className="text-xs opacity-70 mt-3">{hit.length} matches</div>
      <div className="mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {hit.map(w=>{ const href=`/weapons/${w.slug}`; const imgSrc=w.image?urlFor(w.image):""; return (
          <Link key={w._id} href={href} className="group block rounded-none overflow-hidden border border-neutral-800 hover:border-neutral-700 bg-neutral-900/60">
            <div className="aspect-[16/9] bg-neutral-800 relative">
              {imgSrc && <Image src={imgSrc} alt={w.name} fill className="object-cover" sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" />}
            </div>
            <div className="p-2">
              <div className="text-sm font-medium group-hover:underline">{w.name}</div>
              <div className="mt-1 text-[11px] opacity-70 line-clamp-1">{[w.type,(w.rarity?`★${w.rarity}`:null),...(w.traits??[])].filter(Boolean).join(" · ")}</div>
            </div>
          </Link>
        )})}
      </div>
    </section>
  );
}