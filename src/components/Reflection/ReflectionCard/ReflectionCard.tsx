import Link from "next/link";
import { IArticleHeaderData } from "@/shared/interfaces";
import { combineClasses } from "@/utils/utils";
import { urlFor } from "@/utils/sanity-utils";
import classes from "./ReflectionCard.module.scss";
import ReflectionTags from "../ReflectionTags/ReflectionTags";
import Image from "next/legacy/image";
import { format } from "date-fns";
import readingTime from "reading-time";

interface IProp {
    article: IArticleHeaderData;
    path: string;
}

const ReflectionCard = ({ article, path }: IProp) => {
    // set url and path
    const {
        title,
        body,
        tags,
        publishedAt,
        meta_description,
        estimatedReadingTime,
        isExternal,
        externalUrl,
        platform,
        mainImage: {
            alt,
            asset: { _ref },
        },
    } = article;
    const readTime = readingTime(body ? body : []);

    console.log();
    return (
        <div
            className={
                "mb-[30px] h-fit w-full px-2 md:w-1/2 md:px-[15px] lg:w-1/2"
            }
        >
            <div
                className={combineClasses(
                    classes.article_card,
                    "flex flex-col justify-between border-b-[5px] border-appRed-100 pb-5 dark:bg-slate-800 dark:text-white dark:drop-shadow-lg"
                )}
            >
                <div>
                    <div
                        className={
                            "relative h-[300px] overflow-hidden rounded-t-[4px]"
                        }
                    >
                        <Image
                            src={`${urlFor(_ref)}`}
                            alt={alt}
                            layout='fill'
                            quality={70}
                            priority={true}
                            blurDataURL={`${urlFor(_ref)}`}
                            placeholder='blur'
                        />
                    </div>

                    <div className={"d-block px-[15px] py-0"}>
                        <div className='flex items-center justify-between py-2'>
                            {/* LEFT SIDE: Date + reading time */}
                            <p className='mb-0 flex items-center gap-1 text-xs font-bold text-appRed-100'>
                                <span>
                                    {format(
                                        new Date(publishedAt),
                                        "MMMM d, yyyy"
                                    )}
                                </span>
                            </p>

                            {isExternal &&
                                Array.isArray(platform) &&
                                platform.length > 0 && (
                                    <span
                                        className='
                                            rounded-md border
                                            border-appPurple-100 px-2
                                            py-[2px]
                                            text-xs
                                            font-bold
                                            text-appPurple-100
                                            dark:border-appRed-100
                                            dark:text-appRed-100
                                          '
                                    >
                                        {platform[0].display_label ||
                                            platform[0].name}
                                    </span>
                                )}
                        </div>

                        {isExternal && externalUrl ? (
                            <a
                                href={externalUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label={title}
                            >
                                <h1
                                    className={
                                        "cursor-pointer text-[16px] font-bold tracking-wide transition-colors duration-300 hover:text-appPurple-100 md:text-[22px]"
                                    }
                                >
                                    {title}
                                </h1>
                            </a>
                        ) : (
                            <Link href={path}>
                                <h1
                                    className={
                                        "cursor-pointer text-[16px] font-bold tracking-wide transition-colors duration-300 hover:text-appPurple-100 md:text-[22px]"
                                    }
                                >
                                    {title}
                                </h1>
                            </Link>
                        )}
                        <ReflectionTags tags={tags} isLight={false} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReflectionCard;
