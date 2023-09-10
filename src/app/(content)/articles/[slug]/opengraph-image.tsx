/* eslint-disable @next/next/no-img-element */
import { getPost } from "@/utils/sanity-utils";
import { ImageResponse } from "next/server";
import { urlFor } from "@/utils/sanity-utils";

export const size = {
    width: 900,
    height: 450,
};

export const contentType = "image/*";

interface Props {
    params: {
        slug: string;
    };
}

export default async function og({ params }: Props) {
    const post = await getPost(params.slug);

    return new ImageResponse(
        (
            <div tw='relative flex items-center justify-center'>
                <img
                    src={`${urlFor(post?.mainImage?.asset?._ref)}`}
                    alt={post?.title}
                />
            </div>
        )
    );
}
