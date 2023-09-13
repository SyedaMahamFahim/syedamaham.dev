import { groq } from "next-sanity";

// Snippets
export const snippetPathsQuery = groq`*[_type == "snippet" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

export const snippetQuery = groq`*[_type == "snippet" && slug.current == $slug][0]{
    _createdAt,
    _updatedAt,
  title,
  body,
  isSeries,
  tags,
  slug,
  meta_description,
  "tags": tags[]-> {title},
  "author": author -> {name,slug,image,designation,profiles,bio,about},
  "series":series -> {title,slug},
  "category": categories[]-> {title,slug},
  }`;

export const snippetsQuery = groq`*[_type == "snippet"]{
    _createdAt,
    _updatedAt,
  title,
  body,
  isSeries,
  tags,
  slug,
  meta_description,
  "tags": tags[]-> {title},
  "author": author -> {name,slug,image,designation,profiles,bio,about},
  "series":series -> {title,slug},
  "category": categories[]-> {title,slug},
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

export const postsQuery = groq`*[_type == "post"]{
    _createdAt,
    _updatedAt,
  title,
  body,
  isSeries,
  tags,
  meta_description,
  mainImage,
  slug,
  "tags": tags[]-> {title},
  "author": author -> {name,slug,image,designation,profiles,bio,about},
  "series":series -> {title,slug},
  "category": categories[]-> {title,slug},
}`;
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
    _createdAt,
    _updatedAt,
  title,
  body,
  isSeries,
  tags,
  meta_description,
  mainImage,
  slug,
  "tags": tags[]-> {title},
  "author": author -> {name,slug,image,designation,profiles,bio,about},
  "series":series -> {title,slug},
  "category": categories[]-> {title,slug},
}`;
