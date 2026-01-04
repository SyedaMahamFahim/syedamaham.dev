import { Text } from "@/components";
import { YearlyNotesSection } from "@/containers";
import { Metadata } from "next";
import { META_SEO_KEYWORDS } from "@/constants/_APP_SETUP";
import { SanityDocument } from "@sanity/client";
import { getYearlyNotesQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { AppWrapper } from "@/containers";
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
        <AppWrapper>
            <div className={"flex flex-col flex-wrap"}>
                <Text
                    title
                    className='mb-5 mt-2 text-appPurple-100 dark:text-appRed-100'
                >
                    Yearly Notes
                </Text>
                <Text quote className='mb-8 mt-2 text-black dark:text-white'>
                    A running record of meaningful milestones, decisions, and
                    transitions.
                </Text>

                <YearlyNotesSection
                    // @ts-ignore
                    yearlyNotes={yearlyNotes}
                />
            </div>
        </AppWrapper>
    );
};

export default YearlyNotes;
