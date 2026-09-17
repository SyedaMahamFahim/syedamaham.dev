import { defineType, defineField } from "sanity";

export default defineType({
  name: "travel",
  title: "Travel",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Country / Trip title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "e.g. Croatia, Germany, Saudi Arabia",
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
      description: 'e.g. "August 2025"',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      description: "Card image on /travel list + map popup",
    }),

    defineField({
      name: "mapLabel",
      title: "Map pin label (fallback)",
      type: "string",
      description: "Used if a city has no own pin label",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "lat",
      title: "Latitude (fallback)",
      type: "number",
      validation: (Rule) => Rule.required().min(-90).max(90),
      description: "Trip-level pin if cities have no lat/lng",
    }),

    defineField({
      name: "lng",
      title: "Longitude (fallback)",
      type: "number",
      validation: (Rule) => Rule.required().min(-180).max(180),
    }),

    {
      name: "cities",
      title: "Cities (story circles)",
      type: "array",
      description:
        "Instagram-style circles on the country page. Add Instagram Highlight URL per city (or later).",
      of: [
        {
          type: "object",
          name: "travelCity",
          fields: [
            {
              name: "name",
              title: "City name",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "countryCode",
              title: "Country code",
              type: "string",
              description: "e.g. HR, BA, DE",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "image",
              title: "Circle image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "instagramHighlightUrl",
              title: "Instagram Highlight URL",
              type: "url",
              description:
                "Optional. Shown as Photographs link for this city tab.",
            },
            {
              name: "blogIntro",
              title: "City story intro",
              type: "text",
              description:
                "Optional. Story shown when this city tab is selected. Falls back to country blog if empty.",
            },
            {
              name: "blogBody",
              title: "City story body",
              type: "blockContent",
              description: "Optional story for this city — text and images.",
            },
            {
              name: "caption",
              title: "Short caption",
              type: "string",
            },
            {
              name: "lat",
              title: "Latitude",
              type: "number",
              description: "For map clustering",
            },
            {
              name: "lng",
              title: "Longitude",
              type: "number",
            },
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "countryCode",
              media: "image",
            },
          },
        },
      ],
    },

    defineField({
      name: "blogIntro",
      title: "Blog intro",
      type: "text",
      description: "Opening paragraph — used as fallback when a city has no own story",
    }),

    defineField({
      name: "blogBody",
      title: "Blog body",
      type: "blockContent",
      description:
        "Country-level story fallback when a city has no own story — text and images.",
    }),

    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
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
