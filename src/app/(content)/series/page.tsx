import { Text} from "@/components";
import { SeriesSection } from "@/containers";
import { WEBSITE_NAME } from "@/constants/_APP_SETUP";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { getSeriesQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { AppWrapper } from "@/containers";

export const metadata: Metadata = {
    title: "Series",
    description: `A connected set of posts originally shared on platforms like LinkedIn and Instagram.`,
    keywords: "tech series, coding, data engineering, in-depth exploration",
};

const Series = async () => {
    const articles = await sanityFetch<SanityDocument>({
        query: getSeriesQuery,
    });
    return (
        <AppWrapper>
            <div className='md:mx-20'>
                <Text
                    title
                    className='mb-5 mt-10 text-appPurple-100 dark:text-appRed-100'
                >
                    Series 🎢
                </Text>
                <Text quote className='mb-5 mt-2 text-black dark:text-white'>
                    A connected set of posts originally shared on platforms like LinkedIn and Instagram.
                </Text>
                <div className={"flex flex-col flex-wrap"}>
                    {articles?.length > 0 ? (
                        <SeriesSection
                            noOfArticle={6}
                            articles={articles} 
                            isSeries={true}                           
                        />
                    ) : (
                        <p>No Series Found</p>
                    )}
                </div>
            </div>
         </AppWrapper>
    );
};

export default Series;
