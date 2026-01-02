"use client";
import { useEffect, useState } from "react";

import { ArticleCard} from "@/components";
import ReactPaginate from "react-paginate";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

interface SeriesSectionProps {
    noOfArticle?: number;
    articles: any;
    isSeries: boolean;
}

const SeriesSection: React.FC<SeriesSectionProps> = ({
    noOfArticle,
    articles,
    isSeries,
}) => {
    const articlesPerPage = noOfArticle || 9;

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



    return (
        <>


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

            {articles?.length > articlesToDisplay && (
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

        </>
    );
};

export default SeriesSection;
