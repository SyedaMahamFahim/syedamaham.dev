"use client";
import SocialShare from "../../SocialShare/SocialShare";
import RelatedArticles from "../RelatedArticle/RelatedArticle";
import GitHubComment from "@/components/GitHubComment/GitHubComment";

const ArticelFooter = ({
    isSeries,
    relatedPosts,
    authorInfo,
    isSnippet,
}: any) => {
    const contentWrapper = "mx-auto w-full max-w-3xl px-4";

    const cardWrapper =
        "bg-white dark:bg-slate-800 border border-slate-100 dark:border-none shadow-lg rounded-lg px-4 py-3 mb-8";

    return (
        <>
            {/* Comments */}
            <div className={contentWrapper}>
                <div className='mt-20'>
                    <h1 className='mb-5 text-xl font-bold text-appPurple-100 dark:text-appRed-100 md:text-3xl'>
                        LEAVE A COMMENT
                    </h1>
                    <hr className='mb-5' />
<div className="giscus-wrapper">
  <GitHubComment />
</div>

                </div>
            </div>

            {/* Share */}
            <div className={contentWrapper}>
                <div className={cardWrapper}>
                    <p className='mb-3 border-b border-gray-300 pb-2 font-medium'>
                        Share this article
                    </p>
                    <SocialShare />
                </div>
            </div>

            {/* Related */}
            <div className={contentWrapper}>
                <RelatedArticles
                    relatedPosts={relatedPosts}
                    isSnippet={isSnippet}
                    isSeries={isSeries}
                />
            </div>
        </>
    );
};

export default ArticelFooter;
