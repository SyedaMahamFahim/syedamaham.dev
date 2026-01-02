import { defineField, defineType } from "sanity";

export default defineType({
    name: "post",
    title: "Post",
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
        defineField({
            name: "writing_type",
            title: "Writing Type",
            type: "string",
            initialValue: "technical",
            options: {
                list: [
                    { title: "Technical", value: "technical" },
                    { title: "Reflection", value: "reflection" },
                ],
                layout: "dropdown",
            },
        }),

        defineField({
            name: "meta_description",
            title: "Meta Description",
            type: "text",
        }),
        defineField({
            name: "meta_tags",
            title: "Meta Tags",
            type: "string",
        }),
        defineField({
            name: "author",
            title: "Author",
            type: "reference",
            to: { type: "author" },
        }),
        defineField({
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
                    title: "Alternative Text",
                },
            ],
        }),
        defineField({
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
        }),
        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "reference", to: { type: "tags" } }],
        }),
        defineField({
            name: "isExternal",
            title: "Is External Article",
            type: "boolean",
            initialValue: false,
            options: {
                layout: "checkbox",
            },
        }),
        defineField({
            name: "platform",
            title: "Platform",
            type: "array",
            of: [{ type: "reference", to: { type: "platform" } }],
        }),
        defineField({
            name: "externalUrl",
            title: "External Blog URL",
            type: "url",
            hidden: ({ document }) =>
                !Array.isArray(document?.platform) ||
                document.platform.length === 0,
        }),

        defineField({
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
        }),
        // create a boolen field if it is an article is a part of any series if it is true then create another field which add series

        defineField({
            name: "isSeries",
            title: "Is Series",
            type: "boolean",
            initialValue: false,
            options: {
                layout: "checkbox",
            },
        }),
        defineField({
            name: "series",
            title: "Series",
            type: "reference",
            to: { type: "series" },
            hidden: ({ document }) => document?.isSeries !== true,
        }),

        defineField({
            name: "body",
            title: "Body",
            type: "blockContent",
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
