import { AppWrapper } from "@/containers";
import { travelTripQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import type { TravelTrip } from "@/types/travel";
import { mapTravelTrips } from "@/utils/travel";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import TravelTripDetail from "@/components/Travel/TravelTripDetail";

type Props = {
    params: { slug: string };
    searchParams?: { city?: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const raw = await sanityFetch<TravelTrip>({
        query: travelTripQuery,
        params,
    });

    if (!raw) return { title: "Travel" };

    return {
        title: `${raw.title} • ${raw.year}`,
        description: raw.blogIntro || `Travel story from ${raw.title}.`,
    };
}

const TravelTripPage = async ({ params, searchParams }: Props) => {
    const raw = await sanityFetch<TravelTrip>({
        query: travelTripQuery,
        params,
    });

    if (!raw) notFound();

    const trip = mapTravelTrips([raw])[0];
    if (!trip) notFound();

    return (
        <AppWrapper>
            <TravelTripDetail
                trip={trip}
                initialCityKey={searchParams?.city}
            />
        </AppWrapper>
    );
};

export default TravelTripPage;
