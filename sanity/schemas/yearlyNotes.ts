import { defineType, defineField, defineArrayMember } from "sanity";



export default defineType({
    name: "yearlyNotes",
    title: "Yearly Notes",
    type: "document",

    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        {
            name: "highlights",
            title: "Highlights",
            type: "array",
            of: [
                defineArrayMember({
                    type: "string",
                }),
            ],
            validation: (Rule) => Rule.required().min(1),
        },

        {
            name: "links",
            title: "Links",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "inline",
                    fields: [
                        { type: "string", name: "label" },
                        { type: "url", name: "url" },
                    ],
                },
            ],
        },

        defineField({
            name: "order",
            title: "Order / Priority",
            type: "number",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "visible",
            title: "Visible",
            type: "boolean",
            initialValue: true,
        }),
    ],

    preview: {
        select: {
            title: "title",
        },
    },
});
