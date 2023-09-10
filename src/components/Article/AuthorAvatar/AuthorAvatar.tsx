import { IAuthor } from "@/shared/interfaces";
import { combineClasses } from "@/utils/utils";
import { urlFor } from "@/utils/sanity-utils";
import Image from "next/legacy/image";
import MyImage from "../../SanityImageLoader/SanityImageLoader";

interface AuthorAvatarProps {
    author: IAuthor;
    height?: number;
    width?: number;
    quality?: number;
    className?: string;
    layout?: any;
}

const AuthorAvatar = ({
    author,
    height,
    width,
    quality,
    className,
    layout,
}: AuthorAvatarProps) => {
    return (
        <div
            className={combineClasses(
                `flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-blue-500 shadow-xl`,
                className
            )}
        >
            {author?.image?.asset?._ref ? (
                <Image
                    src={`${urlFor(author?.image?.asset?._ref)}`}
                    alt={author.name}
                    quality={quality}
                    height={height}
                    width={width}
                />
            ) : (
                <p className='text-center font-medium text-white'>
                    {author.name[0]}
                </p>
            )}
        </div>
    );
};

export default AuthorAvatar;
