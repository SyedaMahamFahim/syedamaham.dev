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
  GitHubComment
} from "@/components";

const Blog = ({ post, relatedPosts, isSnippet }: any) => {
  const target: RefObject<HTMLDivElement> = React.createRef();
  const authorInfo=post.author
  return (
    <>
      <ReadingProgressLine target={target} />
      <section
        className={combineClasses(
          classes.centered_article_wrapper,
          "dark:bg-slate-900 dark:text-white"
        )}
      >
        <div className="container px-0 md:px-[15px] pt-[50px] pb-[50px]">
          <article
            className={combineClasses(
              classes.article_content,
              "pb-[30px] px-3  dark:text-white pt-10 md:pt-0 mx-auto font-regular text-lg leading-relaxed post"
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
            relatedPosts={relatedPosts} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
