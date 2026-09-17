import React from "react";
import { urlFor } from "@/utils/sanity-utils";
import Image from "next/legacy/image";

const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = 600;

/** Try to read "640x1138" from a Sanity CDN filename */
function dimensionsFromRef(ref) {
    if (!ref || typeof ref !== "string") return null;
    const match = ref.match(/-(\d+)x(\d+)-/);
    if (!match) return null;
    return { width: Number(match[1]), height: Number(match[2]) };
}

const ImagePortableCom = ({ value }) => {
    if (!value?.asset?._ref) {
        return null;
    }

    const fromAsset = dimensionsFromRef(value.asset._ref);
    const width = value.imageWidth || fromAsset?.width || DEFAULT_WIDTH;
    const height = value.imageHeight || fromAsset?.height || DEFAULT_HEIGHT;

    // Cap display width for readable blog layout; keep aspect ratio
    const displayWidth = Math.min(width, DEFAULT_WIDTH);
    const displayHeight = Math.round((height / width) * displayWidth);

    return (
        <div className='my-8 flex flex-col items-center'>
            <Image
                alt={value.alt || "Image"}
                loading='lazy'
                src={`${urlFor(value).width(displayWidth).url()}`}
                height={displayHeight}
                width={displayWidth}
                objectFit='contain'
            />
            {value.alt ? (
                <i className='mt-2 text-center text-gray-600 dark:text-gray-400'>
                    {value.alt}
                </i>
            ) : null}
        </div>
    );
};

export default ImagePortableCom;
