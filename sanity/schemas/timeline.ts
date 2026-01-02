import { defineType, defineField } from "sanity";

export default defineType({
  name: "timeline",
  title: "Timeline",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "yearLabel",
      title: "Year / Range",
      type: "string",
      description: "Examples: 2023, 2023–2024, 2025–Present",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "summary",
      title: "One-line Summary",
      type: "string",
    }),

    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        defineField({
          name: "link",
          title: "Link",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "order",
      title: "Order / Priority",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "visible",
      title: "Visible",
      type: "boolean",
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: "title",
      year: "yearLabel",
    },
    prepare({ title, year }) {
      return {
        title,
        subtitle: year,
      };
    },
  },
});
