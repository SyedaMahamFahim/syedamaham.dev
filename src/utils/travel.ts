import type { TravelMapPin, TravelTrip } from "@/types/travel";
import { urlFor } from "@/utils/sanity-utils";

const MONTH_ORDER: Record<string, number> = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12,
};

/** Parse "March 2026" / "Mar 2026" into a sortable month index (1–12). */
export function travelMonthIndex(monthLabel?: string): number {
    if (!monthLabel) return 0;
    const first = monthLabel.trim().split(/\s+/)[0]?.toLowerCase() || "";
    if (MONTH_ORDER[first]) return MONTH_ORDER[first];
    const short = Object.keys(MONTH_ORDER).find((m) => m.startsWith(first));
    return short ? MONTH_ORDER[short] : 0;
}

/** Oldest → newest within a year (March, April, May…). */
export function sortTripsByMonth(trips: TravelTrip[]): TravelTrip[] {
    return [...trips].sort(
        (a, b) => travelMonthIndex(a.month) - travelMonthIndex(b.month)
    );
}

function imageUrl(source: any, width = 800): string | undefined {
    if (!source) return undefined;
    try {
        return urlFor(source).width(width).url();
    } catch {
        return undefined;
    }
}

/** Normalize Sanity travel docs for UI components */
export function mapTravelTrips(trips: TravelTrip[] = []): TravelTrip[] {
    return trips
        .filter((trip) => trip?.slug?.current && trip.coverImage)
        .map((trip) => ({
            ...trip,
            coverImageUrl: imageUrl(trip.coverImage, 900),
            cities: (trip.cities || [])
                .filter((city) => city?.name && city?.image)
                .map((city) => ({
                    ...city,
                    imageUrl: imageUrl(city.image, 400),
                })),
        }));
}

/** Flatten city pins for map clustering (fallback to trip pin) */
export function getTravelMapPins(trips: TravelTrip[]): TravelMapPin[] {
    const pins: TravelMapPin[] = [];

    trips.forEach((trip) => {
        const slug = trip.slug?.current;
        if (!slug) return;

        const cityPins = (trip.cities || []).filter(
            (city) =>
                typeof city.lat === "number" &&
                typeof city.lng === "number" &&
                city.imageUrl
        );

        if (cityPins.length) {
            cityPins.forEach((city, index) => {
                pins.push({
                    id: `${trip._id}-${city._key || city.name}-${index}`,
                    slug: `${slug}?city=${encodeURIComponent(
                        city._key || city.name
                    )}`,
                    title: trip.title,
                    year: trip.year,
                    month: trip.month,
                    coverImage: city.imageUrl as string,
                    mapLabel: city.name,
                    lat: city.lat as number,
                    lng: city.lng as number,
                });
            });
        } else if (
            typeof trip.lat === "number" &&
            typeof trip.lng === "number" &&
            trip.coverImageUrl
        ) {
            pins.push({
                id: trip._id,
                slug,
                title: trip.title,
                year: trip.year,
                month: trip.month,
                coverImage: trip.coverImageUrl,
                mapLabel: trip.mapLabel || trip.title,
                lat: trip.lat,
                lng: trip.lng,
            });
        }
    });

    return pins;
}
