"use client";
import React, { RefObject } from "react";

import classes from "./ArticleDetails.module.scss";
import { combineClasses } from "@/utils/utils";
import {
    ArticleHeader,
    ArticleContent,
    ArticelFooter,
    ReadingProgressLine,
} from "@/components";
import { AiOutlineArrowUp } from "react-icons/ai";

const Blog = ({ post, relatedPosts, isSnippet, isSeries }: any) => {
    const target: RefObject<HTMLDivElement> = React.createRef();
    const authorInfo = post.author;
    const isBrowser = () => typeof window !== "undefined";

    const [showScrollTop, setShowScrollTop] = React.useState(false);

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    React.useEffect(() => {
  const onScroll = () => {
    setShowScrollTop(window.scrollY > 300);
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);


    return (
        <>
            <ReadingProgressLine target={target} />
            <section
                className={combineClasses(
                    classes.centered_article_wrapper,
                    "dark:bg-slate-900 dark:text-white"
                )}
            >
                <div className='flex flex-row-reverse'>
                    <div className='container px-0 pb-[50px] pt-[50px] md:px-[15px]'>
                        <article
                            className={combineClasses(
                                classes.article_content,
                                "font-regular  post mx-auto px-3 pt-10 text-lg leading-relaxed dark:text-white md:pt-0"
                            )}
                            ref={target}
                        >
                            <ArticleHeader
                                ARTICLE_DETAILS={post}
                                isSnippet={isSnippet}
                            />
                            <div>
                                <ArticleContent ARTICLE_CONTENT={post.body} />
                            </div>
                        </article>

                        <div
                            className={combineClasses(
                                classes.author_and_more,
                                "mx-auto"
                            )}
                        >
                            <ArticelFooter
                                isSnippet={isSnippet}
                                authorInfo={authorInfo}
                                relatedPosts={relatedPosts}
                                isSeries={isSeries}
                            />
                        </div>
                    </div>

{showScrollTop && (
  <button
    onClick={scrollToTop}
    className="
      fixed
      bottom-6
      right-6
      z-50
      rounded-full
      bg-slate-900
      p-3
      text-white
      shadow-lg
      transition
      hover:scale-105
      dark:bg-white
      dark:text-slate-900
    "
    aria-label="Scroll to top"
  >
    <AiOutlineArrowUp className="text-xl" />
  </button>
)}

                </div>
            </section>
        </>
    );
};

export default Blog;
