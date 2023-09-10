
import { ArticleCard,SnippetCard } from "@/components";

interface RelatedArticleProps {
  relatedPosts:string[];
  isSnippet:boolean;
}

const RelatedArticles: React.FC<RelatedArticleProps> = ({
  relatedPosts,isSnippet
}) => {
  return (
    <>
      <div className="container mx-auto lg:px-[15px] px-0 mt-20">
        <div className={"flex flex-wrap"}>
          <h1 className="px-3 w-full mb-5 text-xl md:text-3xl font-bold dark:text-appRed-100 text-appPurple-100">
            READ MORE  {isSnippet ? "SNIPPETS" :"ARTICLES"}
          </h1>
          <hr className="border-1 mb-5 w-[98%] mx-auto" />
          {!isSnippet && relatedPosts?.length
            ? relatedPosts
                .slice(0, 3)
                .map((each: any, i: number) => (
                  <ArticleCard
                    article={each}
                    key={i + each._id}
                    isExternal={false}
                    path={`/articles/${each.slug.current}`}
                  />
                ))
            : null}
            {isSnippet && relatedPosts?.length
            ? relatedPosts
                .slice(0, 3)
                .map((each: any, i: number) => (
                  <SnippetCard
                  snippet={each}
                  key={i + each._id}
                  path={`/snippets/${each.slug.current}`}
                />
                ))
            : null}
            {/*  */}
        </div>
      </div>
    </>
  );
};

export default RelatedArticles;
