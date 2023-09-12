import { ArticleDetails ,} from "@/containers";
import {getSnippet,getRandomSnippets} from "@/utils/sanity-utils";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { snippetPathsQuery, snippetQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { client } from "@/sanity/lib/client";


interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getSnippet(params.slug)
  if (!post)
    return {
      title: "Not Found",
      description: "The page is not found",
    };

  return {
    title: post?.title,
    description: post?.meta_description,
    keywords:post?.meta_tags
  };
}

export async function generateStaticParams() {
  const posts = await client.fetch(snippetPathsQuery);

  return posts;
}
const SnippetsDetail = async ({ params }: { params: { slug: string } }) => {
  // const post = await getSnippet(params.slug);
  const post = await sanityFetch<SanityDocument>({
    query: snippetQuery,
    params,
});
  const relatedPosts = await getRandomSnippets();
  return (
    <ArticleDetails
     post={post} 
     isSnippet={true}
    relatedPosts={relatedPosts}
    />
  );
};

export default SnippetsDetail;
