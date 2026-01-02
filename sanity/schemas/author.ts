import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  title: "Author",
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
      name: "designation",
      title: "Designation",
      type: "string",
    }),

    defineField({
      name: "meta_description",
      title: "Meta Description",
      type: "text",
    }),

    defineField({
      name: "profiles",
      title: "Profiles",
      type: "array",
      of: [
        defineField({
          name: "profile",
          title: "Profile",
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
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
      name: "bio",
      title: "Bio",
      type: "text",
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "about",
      title: "Full About",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
