"use client";
import React from "react";
import { allTypesContent } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ContentsTypeTab = () => {
    const pathname = usePathname();
    return (
        <>
            <div className='mb-10 mt-10'>
                {/* <li
                    className={`mx-2 mb-3 w-auto transform cursor-pointer px-4 pb-2 text-2xl font-bold shadow-lg transition-all hover:scale-105 hover:text-appRed-100 hover:shadow-none md:mx-5`}
                >
                    Technical Writing
                </li> */}
                <ul className='flex flex-row flex-nowrap content-center items-center justify-start overflow-x-scroll md:flex-wrap md:justify-around md:overflow-x-hidden'>
                    {allTypesContent.map((content, index) => {
                        const isActive = pathname === content.url;

                        const linkClass = isActive
                            ? "border-2 border-black dark:border-white px-10 py-2 text-appPurple-100 dark:text-appRed-100"
                            : "";

                        return (
                            <li
                                className={`mx-2 mb-3 w-auto transform cursor-pointer px-4 pb-2 text-2xl font-bold shadow-lg transition-all hover:scale-105 hover:text-appRed-100 hover:shadow-none md:mx-5 ${linkClass}`}
                                key={index}
                            >
                                <Link href={content.url}>{content.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default ContentsTypeTab;
