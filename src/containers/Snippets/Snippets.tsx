"use client";
import { useState } from "react";
import { SnippetCard } from "@/components";
import ReactPaginate from "react-paginate";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

interface SnippetsProps {
    noOfSnippet?: number;
    snippets: any[];
}

const Snippets: React.FC<SnippetsProps> = ({
    noOfSnippet,
    snippets,
}) => {
    const snippetsPerPage = noOfSnippet || 9;

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + snippetsPerPage;
    const currentItems = snippets.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(snippets.length / snippetsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset =
            (event.selected * snippetsPerPage) % snippets.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="flex flex-wrap">
                {currentItems.map((each: any, i: number) => (
                    <SnippetCard
                        key={each._id || i}
                        snippet={each}
                        path={`/snippets/${each.slug.current}`}
                    />
                ))}
            </div>

            <br />

            {snippets.length > snippetsPerPage && (
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

export default Snippets;
