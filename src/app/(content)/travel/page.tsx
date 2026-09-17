import dynamic from "next/dynamic";
import { AppWrapper } from "@/containers";
import { travelTripsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import type { TravelTrip } from "@/types/travel";
import { getTravelMapPins, mapTravelTrips } from "@/utils/travel";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Travel",
    description: "Travel stories by country — cities as story highlights.",
};

const TravelMap = dynamic(() => import("@/components/Travel/TravelMap"), {
    ssr: false,
    loading: () => (
        <div className='mb-10 h-[320px] w-full animate-pulse rounded-sm border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800 sm:h-[420px]' />
    ),
});

const TravelExplore = dynamic(
    () => import("@/components/Travel/TravelExplore"),
    { ssr: false }
);

const TravelPage = async () => {
    const rawTrips = await sanityFetch<TravelTrip[]>({
        query: travelTripsQuery,
    });
    const trips = mapTravelTrips(rawTrips);
    const mapPins = getTravelMapPins(trips);

    return (
        <AppWrapper>
            {trips.length > 0 ? (
                <>
                    <TravelMap trips={mapPins} />
                    <TravelExplore trips={trips} />
                </>
            ) : (
                <p className='text-gray-600 dark:text-gray-400'>
                    No trips yet. Add a Travel document in Sanity Studio and
                    publish it.
                </p>
            )}
        </AppWrapper>
    );
};

export default TravelPage;
