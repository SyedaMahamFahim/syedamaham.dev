"use client";
import { useEffect, useMemo, useState } from "react";

import { ArticleCard, ArticleFilters } from "@/components";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

interface HomeArticleProps {
    isArchive: boolean;
    noOfArticle?: number;
    articles: any[];
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

    const [itemOffset, setItemOffset] = useState(0);

    const [filters, setFilters] = useState<{
        tag: string | null;
        category: string | null;
        platform: string | null;
        year: string | null;
    }>({
        tag: null,
        category: null,
        platform: null,
        year: null,
    });

    const filteredArticles = useMemo(() => {
        return articles.filter((article: any) => {
            if (
                filters.tag &&
                !article.tags?.some(
                    (t: any) => t.slug.current === filters.tag
                )
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
    }, [articles, filters]);

    const endOffset = itemOffset + articlesPerPage;
    const currentItems = filteredArticles.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredArticles.length / articlesPerPage);

    useEffect(() => {
        setItemOffset(0);
    }, [filters]);

    const handlePageClick = (event: any) => {
        const newOffset =
            (event.selected * articlesPerPage) % filteredArticles.length;
        setItemOffset(newOffset);
    };

    const articlesToDisplay = noOfArticle || 3;

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

            <div className="flex flex-wrap">
                {currentItems
                    .slice(0, articlesToDisplay)
                    .map((each: any, i: number) => (
                        <ArticleCard
                            key={i}
                            article={each}
                            path={`${
                                isSeries ? "/series/" : "/articles/"
                            }${each.slug.current}`}
                        />
                    ))}
            </div>

            <br />

            {!isArchive && filteredArticles.length > articlesToDisplay && (
                <div className="flex flex-col justify-center">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel={<AiFillCaretRight />}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={1}
                        pageCount={pageCount}
                        previousLabel={<AiFillCaretLeft />}
                        containerClassName="pagination"
                        activeClassName="active"
                    />
                </div>
            )}

            {isArchive && (
                <div className="flex w-full items-center">
                    <Link
                        href="/articles"
                        className="mx-auto transform rounded-full bg-appRed-100 px-10 py-3 text-center text-sm font-bold text-white transition-all hover:scale-105 hover:!text-white dark:bg-slate-800 dark:hover:!text-slate-400"
                    >
                        View All Articles
                    </Link>
                </div>
            )}
        </>
    );
};

export default HomeArticles;
