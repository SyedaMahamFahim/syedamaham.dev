"use client"
import { useEffect, useState } from "react";
import { OpenSourceCard} from "@/components/";
import ReactPaginate from "react-paginate";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

interface OpenSourceSectionProps {
    noOfOS: number;
    OS: any;
}

const OpenSourceSection: React.FC<OpenSourceSectionProps> =  ({
    noOfOS,
    OS,
}) => {
    const OSPerPage = noOfOS || 3;
    const [currentItems, setCurrentItems] = useState(OS || []);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + OSPerPage;
        setCurrentItems(OS.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(OS.length / OSPerPage));
    }, [itemOffset, OSPerPage, OS]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * OSPerPage) % OS.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className='xs:grid-cols-1 xs:gap-5 grid grid-cols-1 gap-3 pb-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:pb-8'>
                {currentItems
                    ? (currentItems as any)
                          .slice(0, OSPerPage)
                          .map((each: any, i: number) => (
                            <OpenSourceCard
                            key={i}
                            url={each.url}
                            title={each.title}
                          />
                          ))
                    : null}
</div>
                <div className='flex flex-row justify-center mt-4'>
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
            
        </>
    );
};

export default OpenSourceSection;
