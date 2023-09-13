import { ArticleDetails } from "@/containers";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { postQuery,getRandomPostsQuery ,getRelatedSeriesPostForSinglePostQuery} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await sanityFetch<SanityDocument>({
        query: postQuery,
        params,
    });
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



const SingleArticle = async ({ params }: Props) => {
    const post = await sanityFetch<SanityDocument>({
        query: postQuery,
        params,
    });
    const isSeries = post?.isSeries;
    let relatedPosts;
    if (isSeries) {
        relatedPosts = await sanityFetch<SanityDocument>({
            query: getRelatedSeriesPostForSinglePostQuery,
            params,
        });
    } else {
        relatedPosts = await sanityFetch<SanityDocument>({
            query: getRandomPostsQuery,
            params,
        });
        
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
