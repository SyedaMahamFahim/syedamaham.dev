import { defineField, defineType } from "sanity";

export default defineType({
  name: "profiles",
  title: "Profiles",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "name",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "string",
    }),
    defineField({
      name: "meta_description",
      title: "Meta Description",
      type: "text",
    }),
  ],
});
