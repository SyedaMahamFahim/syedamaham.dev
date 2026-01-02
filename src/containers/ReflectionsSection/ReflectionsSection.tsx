"use client";
import { useEffect, useMemo, useState } from "react";

import { ReflectionCard, RFilters } from "@/components";
import ReactPaginate from "react-paginate";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

interface ReflectionsArticlesProps {
    noOfArticle?: number;
    articles: any[];
    platforms: any[];
    tags: any[];
    years: any[];
}

const ReflectionsSection: React.FC<ReflectionsArticlesProps> = ({
    noOfArticle,
    articles,
    platforms,
    tags,
    years,
}) => {
    const articlesPerPage = noOfArticle || 9;

    const [itemOffset, setItemOffset] = useState(0);

    const [filters, setFilters] = useState<{
        tag: string | null;
        platform: string | null;
        year: string | null;
    }>({
        tag: null,
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
            <RFilters
                // @ts-ignore
                onChange={setFilters}
                platforms={platforms}
                tags={tags}
                years={years}
            />

            <div className="flex flex-wrap">
                {currentItems
                    .slice(0, articlesToDisplay)
                    .map((each: any, i: number) => (
                        <ReflectionCard
                            key={i}
                            article={each}
                            path={`/articles/${each.slug.current}`}
                        />
                    ))}
            </div>

            <br />

            {filteredArticles.length > articlesToDisplay && (
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
        </>
    );
};

export default ReflectionsSection;
