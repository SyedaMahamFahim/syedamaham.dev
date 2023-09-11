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
    name: "OpenSource",
    url: "/open-source",
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
    name: "External Articles",
    url: "/external-articles",
  },
  // https://www.syedamaham.dev/external-articles
];

export default allTypesContent;
