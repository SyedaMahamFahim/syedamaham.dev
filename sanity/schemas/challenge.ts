import { defineType, defineField } from "sanity";

export default defineType({
  name: "challenge",
  title: "Challenges",
  type: "document",

  fields: [
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
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule) => Rule.required().integer().min(2000),
      description: "Used to group challenges on the list page",
    }),

    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "platform",
      title: "Platform",
      type: "string",
      description: "e.g. Instagram, Blog, GitHub",
    }),

    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Completed", value: "completed" },
          { title: "In Progress", value: "in-progress" },
          { title: "Paused", value: "paused" },
        ],
        layout: "radio",
      },
      initialValue: "completed",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "goal",
      title: "Goal",
      type: "string",
      description: "e.g. 100 topics, 10 posts",
    }),

    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: "e.g. 10 weeks, Ongoing series",
    }),

    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),

    {
      name: "entries",
      title: "Topics (no subcategories)",
      type: "array",
      description:
        "Use this for flat challenges like Vue.js Directives. Skip Sections below.",
      of: [
        {
          type: "object",
          name: "entry",
          title: "Topic",
          fields: [
            {
              name: "title",
              title: "Topic Title",
              type: "string",
              validation: (Rule) => Rule.required(),
              description: "e.g. v-memo, Custom Directives",
            },
            {
              name: "note",
              title: "Main Line",
              type: "string",
              description:
                "Optional one-liner. Leave empty if the topic title is enough.",
            },
            {
              name: "url",
              title: "URL",
              type: "url",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "note",
              subtitle: "title",
            },
            prepare({ title, subtitle }) {
              return {
                title: title || subtitle || "Entry",
                subtitle: title ? subtitle : undefined,
              };
            },
          },
        },
      ],
    },

    {
      name: "sections",
      title: "Sections / Subcategories (optional)",
      type: "array",
      description:
        "Only use this when topics are grouped (e.g. Mental Pressure, Emotional Concern). Leave empty for Vue-style flat lists.",
      of: [
        {
          type: "object",
          name: "section",
          title: "Section",
          fields: [
            {
              name: "title",
              title: "Section Title",
              type: "string",
              validation: (Rule) => Rule.required(),
              description: "e.g. Mental Pressure, Emotional Concern",
            },
            {
              name: "entries",
              title: "Entries",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "entry",
                  title: "Entry",
                  fields: [
                    {
                      name: "title",
                      title: "Topic Title",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: "note",
                      title: "Main Line",
                      type: "string",
                    },
                    {
                      name: "url",
                      title: "URL",
                      type: "url",
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                  preview: {
                    select: {
                      title: "note",
                      subtitle: "title",
                    },
                    prepare({ title, subtitle }) {
                      return {
                        title: title || subtitle || "Entry",
                        subtitle: title ? subtitle : undefined,
                      };
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: "title",
              entries: "entries",
            },
            prepare({ title, entries }) {
              const count = Array.isArray(entries) ? entries.length : 0;
              return {
                title: title || "Section",
                subtitle: `${count} entries`,
              };
            },
          },
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
      year: "year",
      status: "status",
      platform: "platform",
    },
    prepare({ title, year, status, platform }) {
      return {
        title,
        subtitle: [year, status, platform].filter(Boolean).join(" · "),
      };
    },
  },
});
