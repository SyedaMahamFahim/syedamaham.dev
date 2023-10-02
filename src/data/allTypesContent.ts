interface ContentType {
  name: string;
  url: string;
}

const allTypesContent: ContentType[] = [
  {
    name: "Articles",
    url: "/articles",
  },
  {
    name: "Snippets",
    url: "/snippets",
  },
  {
    name: "Tags",
    url: "/tags",
  },
  {
    name: "Categories",
    url: "/categories",
  },
  {
    name: "Series",
    url: "/series",
  },
  {
    name: "OpenSource",
    url: "/open-source",
  },
];

export default allTypesContent;
