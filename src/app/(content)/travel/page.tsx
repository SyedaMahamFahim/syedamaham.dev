import dynamic from "next/dynamic";
import { Text } from "@/components";
import { AppWrapper, TravelSection } from "@/containers";
import { travelTripsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { TravelTrip } from "@/types/travel";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Travel",
    description: "Places I've been — photos, cities, and trips.",
};

const TravelMap = dynamic(() => import("@/components/Travel/TravelMap"), {
    ssr: false,
    loading: () => (
        <div className='mb-10 h-[320px] w-full animate-pulse rounded-md border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800 sm:h-[420px]' />
    ),
});

const TravelPage = async () => {
    const trips = await sanityFetch<TravelTrip[]>({
        query: travelTripsQuery,
    });

    return (
        <AppWrapper>
            <Text
                title
                className='mb-5 mt-2 text-appPurple-100 dark:text-appRed-100'
            >
                Travel
            </Text>
            <Text quote className='mb-8 mt-2 text-black dark:text-white'>
                Places I&apos;ve been — photos from the road.
            </Text>

            {trips?.length > 0 ? (
                <>
                    <TravelMap trips={trips} />
                    <TravelSection trips={trips} />
                </>
            ) : (
                <p className='text-gray-600 dark:text-gray-400'>
                    No trips yet. Add Travel documents in Sanity Studio.
                </p>
            )}
        </AppWrapper>
    );
};

export default TravelPage;
