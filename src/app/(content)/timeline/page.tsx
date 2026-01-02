import { Text } from "@/components";
import { TimelineSection } from "@/containers";
import { Metadata } from "next";
import { WEBSITE_NAME, META_SEO_KEYWORDS } from "@/constants/_APP_SETUP";
import { SanityDocument } from "@sanity/client";
import { getTimelineQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
    title: "Timeline",
    description: `Dive into insightful articles by ${WEBSITE_NAME}. Explore tech, coding, and innovation through our expert perspectives.`,
    keywords: META_SEO_KEYWORDS,
};

const Timeline = async () => {
    const timeline = await sanityFetch<SanityDocument>({
        query: getTimelineQuery,
    });

    return (
        <section className='container px-3 pt-20 md:pb-20 md:pt-10'>
            <div className='mt-19'>
                <div className={"flex flex-col flex-wrap"}>
                    <Text
                        title
                        className='mb-5 mt-2 text-appPurple-100 dark:text-appRed-100'
                    >
                        Timeline 
                    </Text>
                    <Text
                        quote
                        className='mb-8 mt-2 text-black dark:text-white'
                    >
                        Structured, evolving documentation and learning
                        material.
                    </Text>

                    <TimelineSection
                    // @ts-ignore
                    timeline={timeline} />
                </div>
            </div>
        </section>
    );
};

export default Timeline;
