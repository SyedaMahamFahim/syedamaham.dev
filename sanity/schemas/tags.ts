import { defineField, defineType } from "sanity"

export default defineType({
  name: "tags",
  title: "Tags",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "tagType",
      title: "Tag Type",
      type: "string",
      options: {
        list: [
          { title: "Capability", value: "capability" },
          { title: "Tool", value: "tool" },
          { title: "Vendor", value: "vendor" },
          { title: "Context", value: "context" },
        ],
        layout: "dropdown",
      },
    }),
  ],
})
