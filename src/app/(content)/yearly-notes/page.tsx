import { Text } from "@/components";
import { YearlyNotesSection } from "@/containers";
import { Metadata } from "next";
import { WEBSITE_NAME, META_SEO_KEYWORDS } from "@/constants/_APP_SETUP";
import { SanityDocument } from "@sanity/client";
import { getYearlyNotesQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
    title: "Yearly Notes",
    description: `A running record of meaningful milestones, decisions, and transitions.`,
    keywords: META_SEO_KEYWORDS,
};

const YearlyNotes = async () => {
    const yearlyNotes = await sanityFetch<SanityDocument>({
        query: getYearlyNotesQuery,
    });

    return (
        <section className='container px-3 pt-20 md:pb-20 md:pt-10'>
            <div className='mt-19'>
                <div className={"flex flex-col flex-wrap"}>
                    <Text
                        title
                        className='mb-5 mt-2 text-appPurple-100 dark:text-appRed-100'
                    >
                        Yearly Notes 
                    </Text>
                    <Text
                        quote
                        className='mb-8 mt-2 text-black dark:text-white'
                    >
                        A running record of meaningful milestones, decisions, and transitions.
                    </Text>

                    <YearlyNotesSection
                    // @ts-ignore
                    yearlyNotes={yearlyNotes} />
                </div>
            </div>
        </section>
    );
};

export default YearlyNotes;
