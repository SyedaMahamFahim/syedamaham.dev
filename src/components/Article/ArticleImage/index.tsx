import classes from "./Images.module.scss";
import { ImageSize } from "@/shared/enums";
import { combineClasses } from "@/utils/utils";
import { urlFor } from "@/utils/sanity-utils";

import Image from "next/legacy/image";
interface IArticleImage {
    src: string;
    caption?: string;
    size?: ImageSize;
    alt?: string;
    className?: string;
    imageWidth?: number;
    imageHeight?: number;
}
const ImageArticle = ({
    src,
    caption,
    size = ImageSize.DEFAULT,
    alt,
    className,
    imageWidth,
    imageHeight,
}: IArticleImage) => {
    return (
        <div
            className={combineClasses(
                classes.article_image,
                classes.article_image__wrapper,
                className,
                classes["size_" + size],
                "display-block mx-auto"
            )}
        >
            <Image
                alt={alt}
                loading='lazy'
                src={`${urlFor(src)}`}
                objectFit='contain'
                height={imageHeight}
                width={imageWidth}
            />
            {caption && (
                <p
                    className={combineClasses(
                        classes.article_image__caption,
                        "mb-0 mt-2 w-full text-center text-sm"
                    )}
                >
                    {caption}
                </p>
            )}
        </div>
    );
};

export default ImageArticle;
