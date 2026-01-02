import { defineField, defineType } from "sanity"

export default defineType({
  name: "platform",
  title: "Platform",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "display_label",
      title: "Display Label",
      type: "string",
      description: "Short label shown in UI",
    }),
    defineField({
      name: "is_internal",
      title: "Is Internal",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
})
