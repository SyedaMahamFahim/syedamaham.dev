import Link from "next/link";
import dynamic from "next/dynamic";
import { Text } from "@/components";
import { AppWrapper } from "@/containers";
import { travelTripQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { TravelTrip } from "@/types/travel";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const trip = await sanityFetch<TravelTrip>({
        query: travelTripQuery,
        params,
    });

    if (!trip) {
        return { title: "Not Found" };
    }

    return {
        title: `${trip.title} • ${trip.year}`,
        description: `Travel photos from ${trip.title}, ${trip.month}.`,
    };
}

const TravelGallery = dynamic(
    () => import("@/components/Travel/TravelGallery"),
    { ssr: false }
);

const TravelTripPage = async ({ params }: Props) => {
    const trip = await sanityFetch<TravelTrip>({
        query: travelTripQuery,
        params,
    });

    if (!trip) {
        notFound();
    }

    return (
        <AppWrapper>
            <Link
                href='/travel'
                className='mb-6 inline-block text-sm text-gray-500 hover:text-appPurple-100 dark:hover:text-appRed-100'
            >
                ← Back to Travel
            </Link>

            <Text
                title
                className='mb-8 mt-2 text-center text-appPurple-100 dark:text-appRed-100'
            >
                {trip.title} • {trip.year}
            </Text>

            {trip.photos?.length ? (
                <TravelGallery photos={trip.photos} />
            ) : (
                <p className='text-center text-gray-500'>No photos yet.</p>
            )}
        </AppWrapper>
    );
};

export default TravelTripPage;
