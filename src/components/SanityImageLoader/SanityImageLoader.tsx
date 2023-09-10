import Image, { ImageProps } from "next/image";
import { builder } from "@/utils/sanity-utils";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

// import sanityImage from '@sanity/image-url'
// export const imageBuilder = sanityImage(client)

interface MyImageProps extends Omit<ImageProps, "src"> {
    src: SanityImageSource;
    quality?: number;
    blur?: number;
}

export default function MyImage({
    quality = 80,
    blur = 0,
    src,
    alt,
    ...props
}: MyImageProps) {
    const baseURL = "https://cdn.sanity.io/images/";

    return (
        <Image
            alt={alt}
            {...props}
            loader={({ width: srcWidth }) => {
                let url =
                builder
                        .image(src)
                        .width(srcWidth)
                        .height(Number(props.height) || 256)
                        .auto("format")
                        .quality(quality)
                        .fit("clip")
                        .url() ?? "";

                if (blur) {
                    url += `&blur=${blur}`;
                }

                return url;
            }}
            src={
                builder
                    .image(src)
                    .url()
                    ?.toString()
                    .replace(baseURL, "") ?? ""
            }
        />
    );
}
