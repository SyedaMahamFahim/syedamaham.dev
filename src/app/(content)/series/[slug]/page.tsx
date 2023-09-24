import { Text, Breadcrumbs } from "@/components";
import { HomeArticles } from "@/containers";
import {slugToTitle} from "@/utils/utils";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { getSeriesRelatedPostQuery} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await sanityFetch<SanityDocument>({
    query: getSeriesRelatedPostQuery,
    params,
  });
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
  const articles = await sanityFetch<SanityDocument>({
    query: getSeriesRelatedPostQuery,
    params,
  });
  const title=slugToTitle(params.slug)
  return (
    <section className="container px-3 md:pb-20 md:pt-10 pt-20">
      <div className="mt-19">
        <Breadcrumbs pageName="Series" pageSlug={title} pageLink="/series" />
        
        {
          !articles ? (
            <p>No Article Found</p>
          ) : (<>  <Text
            title
            className="mb-8 mt-10 dark:text-appRed-100 text-appPurple-100 
            capitalize"
          >
            
            {title}
          </Text>
          <div className={"flex flex-wrap flex-col"}>
            
             {articles ? (
                          <HomeArticles
                          isArchive={false} noOfArticle={9} articles={articles}
                          isSeries={false} isExternal={false}
                          />
                      ) : (
                          <p>No Article Found</p>
                      )}
          </div></>)
        }
       
      </div>
    </section>
  );
};

export default SeriesDetail;
