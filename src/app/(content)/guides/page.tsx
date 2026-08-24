import { Text } from "@/components";
import { GuidesSection, AppWrapper } from "@/containers";
import { Metadata } from "next";
import { META_SEO_KEYWORDS } from "@/constants/_APP_SETUP";
import {
    guideWithoutSeriesQuery,
    getPlatformGuideQuery,
    getTagsGuideQuery,
    getYearsGuideQuery,
} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
    title: "Guides",
    description:
        "Practical guides on visas, admissions, jobs, and questions people ask me often.",
    keywords: META_SEO_KEYWORDS,
};

const Guides = async () => {
    const articles = await sanityFetch<any>({
        query: guideWithoutSeriesQuery,
    });

    const platforms = await sanityFetch<any[]>({
        query: getPlatformGuideQuery,
    });

    const tags = await sanityFetch<any[]>({
        query: getTagsGuideQuery,
    });

    const years = await sanityFetch<any[]>({
        query: getYearsGuideQuery,
    });

    return (
        <AppWrapper>
            <div className='flex flex-col flex-wrap'>
                <Text
                    title
                    className='mb-5 mt-2 text-appPurple-100 dark:text-appRed-100'
                >
                    Guides
                </Text>
                <Text quote className='mb-5 mt-2 text-black dark:text-white'>
                    Practical answers to questions I get asked often — visas,
                    admissions, jobs, and more.
                </Text>
                {articles?.length > 0 ? (
                    <GuidesSection
                        noOfArticle={6}
                        articles={articles}
                        platforms={platforms}
                        tags={tags}
                        years={years}
                    />
                ) : (
                    <p>No Guides Found</p>
                )}
            </div>
        </AppWrapper>
    );
};

export default Guides;
