"use client"
import SocialShare from "../../SocialShare/SocialShare";
import RelatedArticles from "../RelatedArticle/RelatedArticle";
import useDeviceSize from "@/hooks/useDeviceSize";
// import ArticleAuthorCard from '../ArticleAuthorCard/ArticleAuthorCard'
import GitHubComment from "@/components/GitHubComment/GitHubComment";
const ArticelFooter = ({ isSeries,relatedPosts,authorInfo,isSnippet }: any) => {
  const deviceSize:any = useDeviceSize();

  const wrapperClasses =
    "bg-white dark:bg-slate-800 dark:border-none border-slate-100 shadow-lg border md:rounded-[8px] px-[15px] py-[10px] mb-[30px] overflow-hidden";
  return (
    <>
     <div className="px-4">
     <div className="mx-auto lg:px-[15px] mt-20">
        <div className={"flex flex-wrap"}>
          <h1 className="px-3 w-full mb-5 text-xl md:text-3xl font-bold dark:text-appRed-100 text-appPurple-100">
            LEAVE A COMMENT
          </h1>
          <hr className="border-1 mb-5 w-[98%] mx-auto" />
          <GitHubComment/>
        </div>
    </div>
    {/* <div className="mx-auto lg:px-[15px] mt-20">
        <div className={"flex flex-wrap"}>
          <h1 className="px-3 w-full mb-5 text-xl md:text-3xl font-bold dark:text-appRed-100 text-appPurple-100">
            WRITTEN BY
          </h1>
          <hr className="border-1 mb-5 w-[98%] mx-auto" />
          <ArticleAuthorCard author={authorInfo}/>
        </div>
    </div> */}
    
      {deviceSize !== "desktop" ? (
        <div className={wrapperClasses}>
          <p className="border-b border-gray-300 pb-2 mb-3 font-medium w-full">
            Share this article
          </p>

          <SocialShare />
        </div>
      ) : (
        <SocialShare />
      )}

      <RelatedArticles relatedPosts={relatedPosts}
      isSnippet={isSnippet}
      isSeries={isSeries}
      />
      </div>
    </>
  );
};

export default ArticelFooter;
