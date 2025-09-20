import type { ReactNode } from "react";
export default function Card({title, children}:{title:string; children?:ReactNode}){
  return (
    <section className="rounded-2xl border border-neutral-800/60 bg-neutral-900/40">
      <div className="px-4 pt-4 pb-3 text-sm text-neutral-300">{title}</div>
      <div className="px-4 pb-4">{children ?? <div className="h-40 rounded-xl bg-neutral-800/50"/>}</div>
    </section>
  );
}