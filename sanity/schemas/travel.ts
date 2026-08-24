import { defineType, defineField } from "sanity";

export default defineType({
  name: "travel",
  title: "Travel",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "Country or city name shown on the card (e.g. Italy, Prague)",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule) => Rule.required().min(1990).max(2100),
      description: "Used for grouping (Travel • 2025)",
    }),

    defineField({
      name: "month",
      title: "Month label",
      type: "string",
      description: 'Shown under the card, e.g. "March 2025"',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "mapLabel",
      title: "Map pin label",
      type: "string",
      description: "Short label on the map (often a city name)",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "lat",
      title: "Latitude",
      type: "number",
      validation: (Rule) => Rule.required().min(-90).max(90),
      description: "Map pin latitude (e.g. 50.0755 for Prague)",
    }),

    defineField({
      name: "lng",
      title: "Longitude",
      type: "number",
      validation: (Rule) => Rule.required().min(-180).max(180),
      description: "Map pin longitude (e.g. 14.4378 for Prague)",
    }),

    {
      name: "photos",
      title: "Photos",
      type: "array",
      of: [
        {
          type: "object",
          name: "travelPhoto",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "caption",
              title: "Caption",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "city",
              title: "City",
              type: "string",
              validation: (Rule: any) => Rule.required(),
              description:
                "Used for gallery tabs (e.g. Verona, Bertinoro). Use the same city name for photos that belong together.",
            },
          ],
          preview: {
            select: {
              title: "caption",
              subtitle: "city",
              media: "image",
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    },

    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
      description: "Optional highlight for homepage later",
    }),
  ],

  preview: {
    select: {
      title: "title",
      year: "year",
      month: "month",
      media: "coverImage",
    },
    prepare({ title, year, month, media }) {
      return {
        title,
        subtitle: [month, year].filter(Boolean).join(" · "),
        media,
      };
    },
  },

  orderings: [
    {
      title: "Year (Newest)",
      name: "yearDesc",
      by: [{ field: "year", direction: "desc" }],
    },
  ],
});
