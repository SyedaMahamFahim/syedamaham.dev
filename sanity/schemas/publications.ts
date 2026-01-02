import { defineType, defineField } from "sanity";

export default defineType({
  name: "publication",
  title: "Publications",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    {
      name: "authors",
      title: "Authors",
      type: "array",
      of: [{ type: "string" }],
      description: "Ordered list of authors",
      validation: (Rule) => Rule.required().min(1),
    },

    defineField({
      name: "highlightedAuthor",
      title: "Your Name (Highlight)",
      type: "string",
      description: "Your name exactly as it appears in authors list",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule) =>
        Rule.required().min(1900).max(new Date().getFullYear() + 1),
    }),

    defineField({
      name: "venue",
      title: "Venue",
      type: "string",
      description: "Journal or conference name",
      validation: (Rule) => Rule.required(),
    }),

        defineField({
      name: "publisher",
      title: "Publisher",
      type: "string",
      description: "Publisher",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "publicationType",
      title: "Publication Type",
      type: "string",
      options: {
        list: [
          { title: "Journal", value: "journal" },
          { title: "Conference", value: "conference" },
          { title: "Workshop", value: "workshop" },
          { title: "Preprint", value: "preprint" },
          { title: "Thesis", value: "thesis" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Published", value: "published" },
          { title: "Under Review", value: "under_review" },
          { title: "In Revision", value: "in_revision" },
          { title: "Preprint", value: "preprint" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "abstract",
      title: "Abstract",
      type: "text",
    }),

    {
      name: "links",
      title: "Links",
      type: "object",
      fields: [
        { name: "doi", title: "DOI", type: "string" },
        { name: "publisher", title: "Publisher Page", type: "url" },
        { name: "pdf", title: "PDF", type: "url" },
        { name: "arxiv", title: "arXiv", type: "url" },
        { name: "code", title: "Code Repository", type: "url" },
      ],
    },

    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      description: "3–5 research keywords",
      validation: (Rule) => Rule.max(5),
    },
  ],

  preview: {
    select: {
      title: "title",
      venue: "venue",
      year: "year",
      status: "status",
    },
    prepare({ title, venue, year, status }) {
      return {
        title,
        subtitle: `${venue} • ${year} • ${status}`,
      };
    },
  },
});
