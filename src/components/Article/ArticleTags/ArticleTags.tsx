import { combineClasses } from "@/utils/utils";
import Link from "next/link";

const ArticleTags = ({
    tags,
    center = false,
    isLight = false,
}: {
    tags: string[];
    center?: boolean;
    isLight?: boolean;
}) => {
    const conditionalClass = !isLight
        ? "bg-gray-200 text-black dark:bg-slate-900 dark:text-white"
        : "bg-slate-900 text-white dark:bg-gray-200 dark:text-black ";

    return (
        <div
            className={combineClasses(
                "mb-4 mt-2 flex flex-wrap",
                center && "justify-center"
            )}
        >
            {tags.slice(0, 5).map((each: any, i) => (
                <Link
                    href={`/tags/${each?.slug?.current}`}
                    key={i}
                    className={`mb-1  mr-2 inline-block bg-gray-200
                    px-2.5 py-1.5 text-[10px] font-bold lowercase text-black
                   ${conditionalClass} md:text-[12px]`}
                >
                    #{each.title}
                </Link>
            ))}

        </div>
    );
};

export default ArticleTags;
