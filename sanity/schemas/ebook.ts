import { defineType, defineField } from "sanity";

export default defineType({
  name: "ebook",
  title: "eBooks (Docs)",
  type: "document",

  fields: [
    // ─────────────────────────────
    // Core
    // ─────────────────────────────
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "coverImage",
      title: "Cover / Hero Image",
      type: "image",
      options: { hotspot: true },
      description: "Used only on the /ebooks listing page",
    }),

    defineField({
      name: "docsUrl",
      title: "Docs URL",
      type: "url",
      description: "Main entry point for reading the eBook",
      validation: (Rule) => Rule.required(),
    }),

    // ─────────────────────────────
    // Status & lifecycle
    // ─────────────────────────────
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "In Progress", value: "in_progress" },
          { title: "Published", value: "published" },
          { title: "Maintained", value: "maintained" },
          { title: "Archived", value: "archived" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
    }),

    defineField({
      name: "updatedAt",
      title: "Last Updated Date",
      type: "datetime",
    }),

    // ─────────────────────────────
    // Audience clarity (optional)
    // ─────────────────────────────
    defineField({
      name: "audienceLevel",
      title: "Audience Level",
      type: "string",
      options: {
        list: [
          { title: "Beginner", value: "beginner" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Advanced", value: "advanced" },
        ],
        layout: "dropdown",
      },
    }),

    defineField({
      name: "docsType",
      title: "Docs Type",
      type: "string",
      options: {
        list: [
          { title: "Guide", value: "guide" },
          { title: "Handbook", value: "handbook" },
          { title: "Reference", value: "reference" },
          { title: "Learning Path", value: "learning_path" },
        ],
        layout: "dropdown",
      },
    }),
  ],

  preview: {
    select: {
      title: "title",
      status: "status",
    },
    prepare({ title, status }) {
      return {
        title,
        subtitle: status,
      };
    },
  },
});
