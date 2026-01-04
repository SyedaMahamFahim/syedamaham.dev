import { Text } from "@/components";
import { Snippets as SnippetsContainer } from "@/containers";
import { WEBSITE_NAME } from "@/constants/_APP_SETUP";
import { Metadata } from "next";
import { snippetsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { AppWrapper } from "@/containers";

export const metadata: Metadata = {
    title: "Snippets",
    description: `Explore tech snippets by ${WEBSITE_NAME}. Discover quick tips, code examples, and insights for your coding journey.`,
    keywords: "tech snippets, quick tips, code examples, coding insights",
};

const Snippets = async () => {
    const allSnippets = await sanityFetch<any>({
        query: snippetsQuery,
    });

    return (
        <AppWrapper>
            <Text
                title
                className='mb-8 mt-2 text-appPurple-100 dark:text-appRed-100'
            >
                Snippets 🚀
            </Text>
            <Text quote className='mb-5 mt-2 text-black dark:text-white'>
                Short, focused code ideas and patterns I use often.
            </Text>

            {allSnippets?.length > 0 ? (
                <SnippetsContainer snippets={allSnippets} noOfSnippet={9} />
            ) : (
                <p>No Snippets Found</p>
            )}
        </AppWrapper>
    );
};

export default Snippets;
