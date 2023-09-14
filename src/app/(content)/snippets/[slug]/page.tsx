import { ArticleDetails ,} from "@/containers";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import {  getRandomSnippetsQuery,snippetQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";


interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await sanityFetch<SanityDocument>({
    query: snippetQuery,
    params,
});
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


const SnippetsDetail = async ({ params }: { params: { slug: string } }) => {
  // const post = await getSnippet(params.slug);
  const post = await sanityFetch<SanityDocument>({
    query: snippetQuery,
    params,
});
  const relatedPosts = await sanityFetch<SanityDocument>({
    query: getRandomSnippetsQuery,
    params,
});
  return (
    <ArticleDetails
     post={post} 
     isSnippet={true}
    relatedPosts={relatedPosts}
    />
  );
};

export default SnippetsDetail;
