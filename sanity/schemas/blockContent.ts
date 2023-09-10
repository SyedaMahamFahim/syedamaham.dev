import { defineType, defineArrayMember } from "sanity";
import ExternalLinkRenderer from "../components/ExternalLinkRenderer";
import TitleStyle from "../components/TitleStyle";
/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
import { UserIcon } from "@sanity/icons";



export default defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {
          title: 'Title',
          value: 'title',
          component: TitleStyle
        },
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "H6", value: "h6" },
        { title: "Quote", value: "blockquote" },
        { title: 'Hidden', value: 'blockComment' },
        

      ],
      lists: [{ title: "Bullet", value: "bullet" },{title: 'Numbered', value: 'number'}],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { 
            title: 'Highlight',
            value: 'highlight',
            icon: () => 'H'
          },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: Rule =>
                Rule.regex(
                  /https:\/\/(www\.|)(portabletext\.org|sanity\.io)\/.*/gi,
                  {
                    name: 'internal url',
                    invert: true
                  }
                ).warning(
                  `This is not an external link. Consider using internal links instead.`
                )
              },
            ],
            components: {
              annotation: ExternalLinkRenderer,
            },
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            icon: UserIcon,
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  { type: 'post' },
                  {type: 'category'},
                  { type: 'openSource' },
                  { type: 'series' },
                  { type: 'tags' },
                  { type: 'author' },
                  // other types you may want to link to
                ]
              }
            ]
          }
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    {
      type: 'code'
    }
  ],
});
