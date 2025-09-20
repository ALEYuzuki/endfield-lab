export default {
  name: "weapon",
  title: "Weapon",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
    { name: "rarity", title: "Rarity", type: "number" },
    { name: "type", title: "Type", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
    { name: "stats", title: "Stats", type: "array", of: [{ type: "object", fields: [
      { name: "key", title: "Key", type: "string" },
      { name: "value", title: "Value", type: "string" }
    ]}]},
    { name: "traits", title: "Traits", type: "array", of: [{ type: "string" }] }
  ]
};