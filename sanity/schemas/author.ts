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
        {
          type: "object", // This specifies the type of values in the array
          fields: [
            {
              name: "platform",
              type: "string",
              title: "Platform",
            },
            {
              name: "url",
              type: "url",
              title: "URL",
            },
          ],
        },
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
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
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
