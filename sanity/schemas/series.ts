import { defineField, defineType } from "sanity";

export default defineType({
    name: "series",
    title: "Series",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),

        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        }),
        {
            name: "author",
            title: "Author",
            type: "reference",
            to: [{ type: "author" }],
        },
        defineField({
            name: "meta_description",
            title: "Meta Description",
            type: "text",
        }),

        {
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "category" }],
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "tags" }],
        },

        {
            name: "mainImage",
            title: "Main image",
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
            name: "body",
            title: "Body",
            type: "blockContent",
        }),
        defineField({
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
        }),
    ],
    preview: {
        select: {
            title: "title",
            author: "author.name",
            media: "mainImage",
        },
        prepare(selection) {
            const { author } = selection;
            return { ...selection, subtitle: author && `by ${author}` };
        },
    },
});
