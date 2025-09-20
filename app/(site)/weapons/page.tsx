export const dynamic = "force-dynamic";
import WeaponListClient from "@/components/WeaponListClient";
import { sanityClient } from "@/sanity/client";
import { weaponsAll } from "@/sanity/queries";
export const revalidate = 60;
export default async function WeaponsPage(){
  const items:any[] = await sanityClient.fetch(weaponsAll).catch(()=>[]);
  return (<div className="space-y-4"><h1 className="text-xl font-semibold">Weapons</h1><WeaponListClient items={items} /></div>);
}