import { Text, Breadcrumbs } from "@/components";
import { HomeArticles } from "@/containers";
import { getSeriesRelatedPost} from "@/utils/sanity-utils";
import {slugToTitle} from "@/utils/utils";
import { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getSeriesRelatedPost(params.slug)
  if (!post)
    return {
      title: "Not Found",
      description: "The page is not found",
    };

  return {
    title: slugToTitle(params.slug),
    description: post?.meta_description,
  };
}
const SeriesDetail = async ({ params }: { params: { slug: string } }) => {
  const articles = await getSeriesRelatedPost(params.slug);
  const title=slugToTitle(params.slug)
  return (
    <section className="container px-3 md:pb-20 md:pt-10 pt-20">
      <div className="mt-19">
        <Breadcrumbs pageName="Series" pageSlug={title} pageLink="/series" />
        
        <Text
          title
          className="mb-8 mt-10 dark:text-appRed-100 text-appPurple-100 
          capitalize"
        >
          
          {title}
        </Text>
        <div className={"flex flex-wrap flex-col"}>
          <HomeArticles isArchive={false} noOfArticle={9} articles={articles}
          isSeries={false} isExternal={false}
           />
        </div>
      </div>
    </section>
  );
};

export default SeriesDetail;
