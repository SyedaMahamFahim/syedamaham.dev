import { Text } from "@/components";
import { HomeArticles } from "@/containers";
import { Metadata } from "next";
import { WEBSITE_NAME, META_SEO_KEYWORDS } from "@/constants/_APP_SETUP";
import {
    postsWithoutSeriesQuery,
    getPlatformPostQuery,
    getTagsPostQuery,
    getCategoriesPostQuery,
    getYearsPostQuery,
} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
    title: "Articles",
    description: `Dive into insightful articles by ${WEBSITE_NAME}. Explore tech, coding, and innovation through our expert perspectives.`,
    keywords: META_SEO_KEYWORDS,
};

const Article = async () => {
    const articles = await sanityFetch<any>({
        query: postsWithoutSeriesQuery,
    });

    const platforms = await sanityFetch<any[]>({
        query: getPlatformPostQuery,
    });

    const tags = await sanityFetch<any[]>({
        query: getTagsPostQuery,
    });

    const categories = await sanityFetch<any[]>({
        query: getCategoriesPostQuery,
    });

    const years = await sanityFetch<any[]>({
        query: getYearsPostQuery,
    });
    return (
        <section className='container px-3 pt-20 md:pb-20 md:pt-10'>
            <div className='mt-19'>
                {/* <ContentsTypeTab /> */}

                <div className={"flex flex-col flex-wrap"}>
                    <Text
                        title
                        className='mb-5 mt-2 text-appPurple-100 dark:text-appRed-100'
                    >
                        Article 📚
                    </Text>
                    <Text
                        quote
                        className='mb-5 mt-2 text-black dark:text-white'
                    >
                        Practical engineering write-ups, design decisions, and
                        systems thinking from real work.
                    </Text>
                    {articles?.length > 0 ? (
                        <HomeArticles
                            isArchive={false}
                            noOfArticle={6}
                            articles={articles}
                            isSeries={false}
                            platforms={platforms}
                            tags={tags}
                            categories={categories}
                            years={years}
                        />
                    ) : (
                        <p>No Article Found</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Article;
