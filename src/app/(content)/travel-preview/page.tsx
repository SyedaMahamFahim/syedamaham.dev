import dynamic from "next/dynamic";
import { AppWrapper } from "@/containers";
import {
    travelVisitsDraft,
    getCountryTripSlugForVisit,
} from "@/data/travelVisitsDraft";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Travel Preview (static)",
    description:
        "Static preview of city-visit based travel UI. Live /travel is unchanged.",
};

const TravelMap = dynamic(() => import("@/components/Travel/TravelMap"), {
    ssr: false,
    loading: () => (
        <div className='mb-10 h-[320px] w-full animate-pulse rounded-sm border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800 sm:h-[420px]' />
    ),
});

const TravelVisitsPreview = dynamic(
    () => import("@/components/Travel/TravelVisitsPreview"),
    { ssr: false }
);

const TravelPreviewPage = () => {
    const mapPins = travelVisitsDraft.map((visit) => ({
        id: visit.id,
        slug: `${getCountryTripSlugForVisit(visit)}?city=${visit.slug}`,
        title: visit.country,
        year: visit.year,
        month: visit.month,
        coverImage: visit.coverImage,
        mapLabel: visit.city,
        lat: visit.lat,
        lng: visit.lng,
    }));

    return (
        <AppWrapper>
            <TravelMap trips={mapPins} linkBase='/travel-preview' />
            <TravelVisitsPreview visits={travelVisitsDraft} />
        </AppWrapper>
    );
};

export default TravelPreviewPage;
