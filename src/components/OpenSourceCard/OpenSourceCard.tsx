import React from "react";
import { FaGithub } from "react-icons/fa";


interface OpenSourceCardProps {
  title: string;
  url:string
}
const OpenSourceCard = ({ title,url }:OpenSourceCardProps) => {
  

  return (
    <>
      <a
        className="select-none transform transition ease-in-out duration-200 hover:scale-95"
        href={url}
        rel="noreferrer"
        target="_blank"
        aria-label={`${url}`}
      >
        <div className="bg-black p-3 md:p-4 text-black relative z-0 font-semibold overflow-hidden before::content-DEFAULT text-transparent h-full w-full top-0 left-0  bg-gradient-to-l  from-white to-black dark:opacity-50  opacity-100 rounded-xl dark:before:from-black">
          <div className="flex flex-row items-center justify-between text-normal md:text-lg lg:text-xl">
            <p className=" text-white text-xxl">{title}</p>
          </div>
          <p className="absolute left-0 bottom-0  text-white filter brightness-95 w-full whitespace-nowrap z-0 text-5xl flex justify-end">
            <FaGithub />
          </p>
        </div>
      </a>
    </>
  );
};

export default OpenSourceCard;
