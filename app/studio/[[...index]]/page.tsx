"use client";
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

const pid = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const ds  = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

function isValidId(x?: string){ return !!x && /^[a-z0-9][a-z0-9-]{2,}$/.test(x); }
function isValidDataset(x?: string){ return !!x && /^[a-z0-9][a-z0-9-_]{0,}$/.test(x); }

export default function Studio(){
  if(!isValidId(pid) || !isValidDataset(ds)){
    return (
      <main style={{maxWidth:720,margin:"40px auto",padding:"0 16px",lineHeight:1.6}}>
        <h1 style={{fontSize:20,marginBottom:12}}>Sanity env is missing or invalid</h1>
        <p>Set the following in <code>.env.local</code> and restart the dev server:</p>
        <pre style={{background:"#111",border:"1px solid #333",padding:12,overflow:"auto"}}>
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
        </pre>
        <p>Current values:</p>
        <pre style={{background:"#111",border:"1px solid #333",padding:12,overflow:"auto"}}>
NEXT_PUBLIC_SANITY_PROJECT_ID={String(pid || "(empty)")}
NEXT_PUBLIC_SANITY_DATASET={String(ds || "(empty)")}
        </pre>
        <p>Also add CORS origin in Sanity: <code>http://localhost:3000</code>.</p>
      </main>
    );
  }
  return <NextStudio config={config} />;
}