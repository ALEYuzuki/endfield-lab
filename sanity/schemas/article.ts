export default {
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } },
    { name: "publishedAt", title: "Published At", type: "datetime" },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }] }
  ]
};