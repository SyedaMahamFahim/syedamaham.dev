"use client";
import { useEffect, useState } from "react";

import { ArticleCard, ArticleFilters } from "@/components";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

interface HomeArticleProps {
    isArchive: boolean;
    noOfArticle?: number;
    articles: any;
    isSeries: boolean;
    platforms?: any[];
    tags?: any[];
    categories?: any[];
    years?: any[];
    showFilters?: boolean;
}

const HomeArticles: React.FC<HomeArticleProps> = ({
    isArchive,
    noOfArticle,
    articles,
    isSeries,
    platforms,
    tags,
    categories,
    years,
    showFilters = true,
}) => {
    const articlesPerPage = noOfArticle || 6;

    const [currentItems, setCurrentItems] = useState(articles || []);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + articlesPerPage;
        setCurrentItems(articles.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(articles.length / articlesPerPage));
    }, [itemOffset, articlesPerPage, articles]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * articlesPerPage) % articles.length;
        setItemOffset(newOffset);
    };
    // console.log(articles,'articles')

    const articlesToDisplay = noOfArticle || 3;

    // filter
    const [filters, setFilters] = useState({
        tag: null,
        category: null,
        platform: null,
        year: null,
    });
    const [allArticles] = useState(articles || []);

    const filteredArticles = allArticles.filter((article: any) => {
        if (
            filters.tag &&
            !article.tags?.some((t: any) => t.slug.current === filters.tag)
        ) {
            return false;
        }

        if (
            filters.category &&
            !article.category?.some(
                (c: any) => c.slug.current === filters.category
            )
        ) {
            return false;
        }

        if (
            filters.platform &&
            !article.platform?.some(
                (p: any) => p.slug.current === filters.platform
            )
        ) {
            return false;
        }

        if (filters.year) {
            const year = new Date(article.publishedAt).getFullYear();
            if (year !== Number(filters.year)) return false;
        }

        return true;
    });

    useEffect(() => {
        const endOffset = itemOffset + articlesPerPage;
        setCurrentItems(filteredArticles.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(filteredArticles.length / articlesPerPage));
    }, [itemOffset, articlesPerPage, filteredArticles]);
    useEffect(() => {
        setItemOffset(0);
    }, [filters]);

    return (
        <>
            {showFilters && platforms && years && tags && categories && (
                <ArticleFilters
                    // @ts-ignore
                    onChange={setFilters}
                    platforms={platforms}
                    tags={tags}
                    categories={categories}
                    years={years}
                />
            )}
            <div className='flex flex-wrap'>
                {currentItems
                    ? (currentItems as any)
                          .slice(0, articlesToDisplay)
                          .map((each: any, i: number) => (
                              <ArticleCard
                                  article={each}
                                  key={i}
                                  path={`${isSeries ? "/series/" : "/articles/"}${each.slug.current}`}
                              />
                          ))
                    : null}
            </div>

            <br />

            {!isArchive && articles?.length > articlesToDisplay && (
                <div className='flex flex-col justify-center'>
                    <ReactPaginate
                        breakLabel='...'
                        nextLabel={<AiFillCaretRight />}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={1}
                        pageCount={pageCount}
                        previousLabel={<AiFillCaretLeft />}
                        containerClassName='pagination'
                        activeClassName='active'
                    />
                </div>
            )}

            {isArchive && (
                <div className='flex w-full items-center'>
                    <Link
                        href={"/articles"}
                        className='
                                mx-auto h-auto w-auto transform rounded-full bg-appRed-100 px-10 py-3 text-center text-sm font-bold text-white transition-all hover:scale-105 hover:!text-white dark:bg-slate-800 dark:hover:!text-slate-400'
                    >
                        View All Articles
                    </Link>
                </div>
            )}
        </>
    );
};

export default HomeArticles;
