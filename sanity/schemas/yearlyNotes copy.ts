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

        defineField({
            name: "highlights",
            title: "Highlights",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule) => Rule.required().min(1),
        }),


        defineField({
          name: "links",
          title: "Links",
          type: "array",
          of: [
            defineField({
              name: "link",
              title: "Link",
              type: "object",
              fields: [
                defineField({
                  name: "label",
                  title: "Label",
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
        },{ strict: false }),

// defineField(
//   {
//     name: "links",
//     title: "Links",
//     type: "array",
//     of: [
      
//     ],
//   },
//   { strict: false }
// ),


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
            year: "yearLabel",
        },
        prepare({ title, year }) {
            return {
                title,
                subtitle: year,
            };
        },
    },
});
