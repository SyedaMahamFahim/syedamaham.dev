import {
    getPost,
    getRandomPosts,
    getRelatedSeriesPostForSinglePost,
} from "@/utils/sanity-utils";
import { ArticleDetails } from "@/containers";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { client } from "@/sanity/lib/client";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await getPost(params.slug);
    if (!post)
        return {
            title: "Not Found",
            description: "The page is not found",
        };

    return {
        title: post?.title,
        description: post?.meta_description,
        keywords: post?.meta_tags,
    };
}

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
    const posts = await client.fetch(postPathsQuery);

    return posts;
}

const SingleArticle = async ({ params }: Props) => {
    const post = await sanityFetch<SanityDocument>({
        query: postQuery,
        params,
    });
    const isSeries = post?.isSeries;
    let relatedPosts;
    if (isSeries) {
        const seriesName = post?.series.slug.current;
        relatedPosts = await getRelatedSeriesPostForSinglePost(seriesName);
    } else {
        relatedPosts = await getRandomPosts();
    }

    return (
        <ArticleDetails
            isSnippet={false}
            post={post}
            relatedPosts={relatedPosts}
        />
    );
};

export default SingleArticle;
