export default {
  name: "character",
  title: "Character",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
    { name: "rarity", title: "Rarity", type: "number" },
    { name: "role", title: "Role", type: "string" },
    { name: "icon", title: "Icon", type: "image", options: { hotspot: true } },
    { name: "portrait", title: "Portrait", type: "image", options: { hotspot: true } },
    { name: "attack", title: "Attack", type: "number" },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
    { name: "skills", title: "Skills", type: "array", of: [{ type: "object", fields: [
      { name: "name", title: "Name", type: "string" },
      { name: "ratio", title: "Ratio", type: "number" }
    ]}]},
    { name: "stats", title: "Stats", type: "array", of: [{ type: "object", fields: [
      { name: "key", title: "Key", type: "string" },
      { name: "value", title: "Value", type: "string" }
    ]}]},
    { name: "traits", title: "Traits", type: "array", of: [{ type: "string" }] },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }] }
  ]
};