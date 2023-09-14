/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";
import { urlFor } from "@/utils/sanity-utils";
import { snippetQuery} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "@sanity/client";

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
    const post = await sanityFetch<SanityDocument>({
        query: snippetQuery,
        params,
    });

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
