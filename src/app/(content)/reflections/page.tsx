import { Text } from "@/components";
import { ReflectionsSection } from "@/containers";
import { Metadata } from "next";
import { WEBSITE_NAME, META_SEO_KEYWORDS } from "@/constants/_APP_SETUP";
import { Any, SanityDocument } from "@sanity/client";
import {
    reflectionWithoutSeriesQuery,
    getPlatformReflectionQuery,
    getTagsReflectionQuery,
    getYearsReflectionQuery,
} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
    title: "Reflections",
    description: `Personal thoughts on growth, uncertainty, and the journey behind the work.`,
    keywords: META_SEO_KEYWORDS,
};

const Reflection = async () => {
    const articles = await sanityFetch<any>({
        query: reflectionWithoutSeriesQuery,
    });

    const platforms = await sanityFetch<any[]>({
        query: getPlatformReflectionQuery,
    });

    const tags = await sanityFetch<any[]>({
        query: getTagsReflectionQuery,
    });

    const years = await sanityFetch<any[]>({
        query: getYearsReflectionQuery,
    });
    return (
        <section className='container px-3 pt-20 md:pb-20 md:pt-10'>
            <div className='mt-19'>
                <div className={"flex flex-col flex-wrap"}>
                    <Text
                        title
                        className='mb-5 mt-2 text-appPurple-100 dark:text-appRed-100'
                    >
                        Reflection 🌟
                    </Text>
                    <Text
                        quote
                        className='mb-5 mt-2 text-black dark:text-white'
                    >
                        Personal thoughts on growth, uncertainty, and the
                        journey behind the work.
                    </Text>
                    {articles?.length > 0 ? (
                        <ReflectionsSection
                            noOfArticle={6}
                            articles={articles}
                            platforms={platforms}
                            tags={tags}
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

export default Reflection;
