import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "speaking",
  title: "Speaking",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "The title of the talk/session",
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
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
      description: "The date when the session took place",
    }),

    defineField({
      name: "event",
      title: "Event",
      type: "string",
      description:
        "The event, course, organisation, or platform where the session was delivered",
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "Physical or online location",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
      description: "Short description of what the session was about",
    }),

    defineField({
      name: "sessionLinks",
      title: "Session Links",
      type: "array",
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            {
              type: "string",
              name: "title",
              title: "Title",
              validation: (Rule) => Rule.required(),
            },
            {
              type: "url",
              name: "url",
              title: "URL",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "url",
            },
          },
        },
      ],
      description:
        "YouTube recordings, event pages, slides, resources, etc.",
    }),

    defineField({
      name: "speakers",
      title: "Speakers",
      type: "array",
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            {
              type: "string",
              name: "name",
              title: "Name",
              validation: (Rule) => Rule.required(),
            },
            {
              type: "string",
              name: "role",
              title: "Role",
            },
            {
              type: "url",
              name: "profileUrl",
              title: "Profile URL",
            },
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "role",
            },
          },
        },
      ],
      description:
        "People who co-presented or partnered during the session",
    }),

    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "topics",
      title: "Topics",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      description: "Topics/tags related to the session",
    }),

    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
      description: "Highlight this session on the homepage",
    }),
  ],

  preview: {
    select: {
      title: "title",
      date: "date",
      event: "event",
      media: "thumbnail",
    },
    prepare({ title, date, event, media }) {
      const subtitleParts = [date, event].filter(Boolean);
      return {
        title,
        subtitle: subtitleParts.join(" · "),
        media,
      };
    },
  },
});
