import Link from "next/link";
import { IArticleHeaderData } from "@/shared/interfaces";
import { combineClasses } from "@/utils/utils";
import { urlFor } from "@/utils/sanity-utils";
import classes from "./ArticleCard.module.scss";
import ArticleTags from "../ArticleTags/ArticleTags";
import Image from "next/legacy/image";
import { format } from "date-fns";
import readingTime from "reading-time";

interface IProp {
  article: IArticleHeaderData;
  path: string;
  isExternal: boolean;
}

const ArticleCard = ({ article, path, isExternal }: IProp) => {
  // set url and path
  const {
    _createdAt,
    title,
    body,
    tags,
    meta_description,
    estimatedReadingTime,
    mainImage: {
      alt,
      asset: { _ref },
    },
  } = article;
  const readTime = readingTime(body ? body :[]);

  return (
    <div
      className={"w-full lg:w-1/3 md:w-1/2 md:px-[15px] px-2 mb-[30px] h-fit"}
    >
      <div
        className={combineClasses(
          classes.article_card,
          "border-b-[5px] border-appRed-100 dark:bg-slate-800 dark:text-white dark:drop-shadow-lg flex flex-col justify-between pb-5"
        )}
      >
        <div>
          <div className={"rounded-t-[4px] overflow-hidden h-[200px] relative"}>
            <Image
              src={`${urlFor(_ref)}`}
              alt={alt}
              layout="fill"
              quality={70}
              priority={true}
              blurDataURL={`${urlFor(_ref)}`}
              placeholder="blur"
              // objectFit="cover"
              // loader={"loading"}
            />
          </div>

          <div className={"d-block px-[15px] py-0"}>
            <p
              className={"font-bold text-xs pt-3 mb-0 md:mb-3 text-appRed-100"}
            >
              <span className="pr-1">
                {format(new Date(_createdAt), "MMMM d, yyyy")}
              </span>{" "}
              {readTime.text !== "0 min read" && (
                <>
                  {" "}
                  |{" "}
                  <span className="pl-1 text-transfrom-capitalize">
                    {" "}
                    {estimatedReadingTime ? estimatedReadingTime : '2'} mins
                  </span>{" "}
                </>
              )}
            </p>

            {isExternal ? (
              <a href={path} target="_blank"
              rel="noopener noreferrer" 
              aria-label={`${title}`}
              >
                <h1
                  className={
                    "text-[16px] font-bold cursor-pointer tracking-wide hover:text-appPurple-100 transition-colors duration-300 md:text-[22px]"
                  }
                >
                  {title}
                </h1>
              </a>
            ) : (
              <Link href={path}>
                <h1
                  className={
                    "text-[16px] font-bold cursor-pointer tracking-wide hover:text-appPurple-100 transition-colors duration-300 md:text-[22px]"
                  }
                >
                  {title}
                </h1>
              </Link>
            )}
            
            <p
              className={combineClasses(
                classes.article_card__intro,
                "text-sm font-normal mt-2 md:mt-1"
              )}
            >
              {meta_description.slice(0, 150)} ...
            </p>
            <ArticleTags tags={tags} isLight={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
