import { notFound } from "next/navigation";
import { Metadata } from "next";
import { AppWrapper } from "@/containers";
import TravelCountryPreview from "@/components/Travel/TravelCountryPreview";
import {
    getTravelCountryTripBySlug,
    getTravelCountryTrips,
} from "@/data/travelVisitsDraft";

type Props = {
    params: { slug: string };
    searchParams?: { city?: string };
};

export function generateStaticParams() {
    return getTravelCountryTrips().map((trip) => ({ slug: trip.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
    const trip = getTravelCountryTripBySlug(params.slug);
    if (!trip) return { title: "Travel Preview" };
    return {
        title: `${trip.country} · ${trip.year} (preview)`,
        description: `Travel preview for ${trip.country} — ${trip.visits.length} cities.`,
    };
}

const TravelCountryPreviewPage = ({ params, searchParams }: Props) => {
    const trip = getTravelCountryTripBySlug(params.slug);
    if (!trip) notFound();

    return (
        <AppWrapper>
            <TravelCountryPreview
                trip={trip}
                initialCitySlug={searchParams?.city}
            />
        </AppWrapper>
    );
};

export default TravelCountryPreviewPage;
