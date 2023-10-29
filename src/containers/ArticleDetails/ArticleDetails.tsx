"use client"
import React, { RefObject } from "react";

import classes from "./ArticleDetails.module.scss";
import { combineClasses } from "@/utils/utils";
import {
  Seperator,
  ArticleHeader,
  ArticleContent,
  ArticelFooter,
  ReadingProgressLine,

} from "@/components";
import { AiOutlineArrowUp } from "react-icons/ai";

const Blog = ({ post, relatedPosts, isSnippet,isSeries }: any) => {
  const target: RefObject<HTMLDivElement> = React.createRef();
  const authorInfo=post.author
  const isBrowser = () => typeof window !== 'undefined';

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <ReadingProgressLine target={target} />
      <section
        className={combineClasses(
          classes.centered_article_wrapper,
          "dark:bg-slate-900 dark:text-white"
        )}
      >
        <div className="flex flex-row-reverse">
          <div className="container px-0 md:px-[15px] pt-[50px] pb-[50px]">
            <article
              className={combineClasses(
                classes.article_content,
                "px-3  dark:text-white pt-10 md:pt-0 mx-auto font-regular text-lg leading-relaxed post"
              )}
              ref={target}
            >
              <ArticleHeader ARTICLE_DETAILS={post} isSnippet={isSnippet} />
              <div>
                <ArticleContent ARTICLE_CONTENT={post.body} />
              </div>
            </article>
            <Seperator />
            <p className="my-8 text-lg text-center">
              Hope this helps, Save and Share <br /> If you have any doubts ask in
              the comments below 👇.
            </p>
            <Seperator />
            
            <div className={combineClasses(classes.author_and_more, "mx-auto")}>
              
              <ArticelFooter
              isSnippet={isSnippet}
              authorInfo={authorInfo}
              relatedPosts={relatedPosts}
              isSeries={isSeries}
              />
            </div>
          </div>

          <button className="fixed bottom-0 py-10 px-40" onClick={scrollToTop}>
            <AiOutlineArrowUp className="text-[26px]" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Blog;
