import { Text } from "@/components";
import { TalksSection, AppWrapper } from "@/containers";
import { WEBSITE_NAME } from "@/constants/_APP_SETUP";
import { Metadata } from "next";
import { speakingSessionsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
    title: "Talks",
    description: `Public talks, workshops, and presentations by ${WEBSITE_NAME}.`,
    keywords: "talks, public talks, workshops, presentations, speaking",
};

const Talks = async () => {
    const sessions = await sanityFetch<any[]>({
        query: speakingSessionsQuery,
    });

    return (
        <AppWrapper>
            <Text
                title
                className='mb-5 mt-2 text-appPurple-100 dark:text-appRed-100'
            >
                Talks
            </Text>
            <Text quote className='mb-5 mt-2 text-black dark:text-white'>
                Public talks, workshops, and presentations.
            </Text>

            {sessions?.length > 0 ? (
                <TalksSection sessions={sessions} />
            ) : (
                <p>No Talks Found</p>
            )}
        </AppWrapper>
    );
};

export default Talks;
