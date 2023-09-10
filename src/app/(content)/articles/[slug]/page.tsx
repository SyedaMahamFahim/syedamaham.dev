import {
  getPost,
  getRandomPosts,
  getRelatedSeriesPostForSinglePost,
} from "@/utils/sanity-utils";
import { ArticleDetails } from "@/containers";
import { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug)
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

const SingleArticle = async ({ params }: Props) => {
  const post = await getPost(params.slug);

  const isSeries = post?.isSeries;
  let relatedPosts;
  if (isSeries) {
    const seriesName = post?.series.slug.current;
    relatedPosts = await getRelatedSeriesPostForSinglePost(seriesName);
  } else {
    relatedPosts = await getRandomPosts();
  }


  return (
    <ArticleDetails isSnippet={false} post={post} relatedPosts={relatedPosts} />
  );
};

export default SingleArticle;
