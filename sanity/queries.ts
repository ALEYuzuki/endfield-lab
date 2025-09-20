import { groq } from "next-sanity";
export const weaponsAll = groq`*[_type=="weapon"]|order(name asc){
  _id, name, "slug": slug.current, rarity, type, image, description, stats, traits
}`;
export const weaponBySlug = groq`*[_type=="weapon" && slug.current==$slug][0]{
  _id, name, "slug": slug.current, rarity, type, image, description, stats, traits
}`;
export const characterBySlug = groq`*[_type=="character" && slug.current==$slug][0]{
  _id, name, "slug": slug.current, rarity, role, icon, portrait, attack, image, skills, stats, traits, body
}`;