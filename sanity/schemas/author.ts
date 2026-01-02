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

        {
            name: "profiles",
            title: "Profiles",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "inline",
                    fields: [
                        { type: "string", name: "platform" },
                        { type: "url", name: "url" },
                    ],
                },
            ],
        },

        defineField({
            name: "bio",
            title: "Bio",
            type: "text",
        }),

        {
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
                },
            ],
        },

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
