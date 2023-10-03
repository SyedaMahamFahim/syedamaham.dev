"use client"
import React from "react";
import { allTypesContent } from "@/data";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const ContentsTypeTab = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="mt-10 mb-10">
        <ul className="flex flex-row flex-nowrap content-center justify-start items-center overflow-x-scroll md:flex-wrap md:justify-around md:overflow-x-hidden">
          {allTypesContent.map((content, index) => {
            const isActive = pathname === content.url;

            const linkClass = isActive
              ? "border-2 border-black dark:border-white px-10 py-2 text-appPurple-100 dark:text-appRed-100"
              : "";

            return (
              <li className={`px-4 pb-2 hover:text-appRed-100 shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2 transform hover:scale-105 w-auto text-2xl font-bold cursor-pointer ${linkClass}`} key={index}>
                <Link href={content.url}>{content.name}</Link>
              </li>
            );
          })}
          <li className={`px-4 pb-2 hover:text-appRed-100 shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2 transform hover:scale-105 w-auto text-2xl font-bold cursor-pointer`} >
                <a href={"https://github.com/SyedaMahamFahim"}
            target="_blank"
            rel="noreferrer">Open Source</a>
              </li>
          
        </ul>
      </div>
    </>
  );
};

export default ContentsTypeTab;
