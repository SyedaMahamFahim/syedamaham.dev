import { Text ,ArticleAuthorCard} from "@/components";
import { HomeArticles } from "@/containers";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { getAuthorQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const author = await sanityFetch<SanityDocument>({
    query: getAuthorQuery,
    params,
  });

  if (!author)
    return {
      title: "Not Found",
      description: "The page is not found",
    };

  return {
    title: author?.name,
    description: author?.meta_description,
  };
}

const AuthorDetails = async ({ params }: { params: { slug: string } }) => {
  const author= await sanityFetch<SanityDocument>({
    query: getAuthorQuery,
    params,
  });
  return (
    <section className="container px-3 md:pb-20 md:pt-10 pt-20">
      <div className="mt-19">
        {/* @ts-ignore */}
      <ArticleAuthorCard author={author}/>

        <Text
          title
          className="mb-5 mt-10 dark:text-appRed-100 text-appPurple-100 center"
        >
          Articles✨
        </Text>
        <div className={"flex flex-wrap flex-col"}>
        {author?.posts?.length > 0 ? (
                        <HomeArticles
                        isArchive={false} noOfArticle={6} 
                        articles={author?.posts} 
                        isSeries={false}
                        isExternal={false}
                        />
                    ) : (
                        <h1>No Articles Found </h1>
                    )}
          
        </div>
      </div>
    </section>
  );
};

export default AuthorDetails;
