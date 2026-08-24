import { Text } from "@/components";
import { AppWrapper, ChallengesSection } from "@/containers";
import { challengesQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { Challenge } from "@/types/challenge";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Challenges",
    description:
        "Consistency projects I committed to — writing streaks, topic series, and learning sprints.",
};

const ChallengesPage = async () => {
    const challenges = await sanityFetch<Challenge[]>({
        query: challengesQuery,
    });

    return (
        <AppWrapper>
            <Text
                title
                className='mb-5 mt-2 text-appPurple-100 dark:text-appRed-100'
            >
                Challenges
            </Text>
            <Text quote className='mb-8 mt-2 text-black dark:text-white'>
                Consistency projects I committed to — and the proof behind them.
            </Text>

            {challenges?.length > 0 ? (
                <ChallengesSection challenges={challenges} />
            ) : (
                <p>No Challenges Found</p>
            )}
        </AppWrapper>
    );
};

export default ChallengesPage;
