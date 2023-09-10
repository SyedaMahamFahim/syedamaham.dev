import { ArticleDetails ,} from "@/containers";
import {getSnippet,getRandomSnippets} from "@/utils/sanity-utils";
import { Metadata } from "next";

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
const SnippetsDetail = async ({ params }: { params: { slug: string } }) => {
  const post = await getSnippet(params.slug);
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
