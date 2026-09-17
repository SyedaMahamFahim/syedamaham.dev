export type TravelCityHighlight = {
    id: string;
    name: string;
    countryCode: string;
    image: string;
    caption?: string;
    lat?: number;
    lng?: number;
    /** Opens Instagram Highlight in a new tab */
    instagramHighlightUrl?: string;
};

export type TravelDraftTrip = {
    id: string;
    slug: string;
    title: string;
    year: number;
    month: string;
    coverImage: string;
    mapLabel: string;
    lat: number;
    lng: number;
    cities: TravelCityHighlight[];
    /** One blog per country */
    blog: {
        intro: string;
        paragraphs: string[];
    };
};

export type TravelMapPin = {
    id: string;
    slug: string;
    title: string;
    year: number;
    month: string;
    coverImage: string;
    mapLabel: string;
    lat: number;
    lng: number;
};

/** Flatten city pins for the map (falls back to trip pin) */
export function getTravelMapPins(trips: TravelDraftTrip[]): TravelMapPin[] {
    const pins: TravelMapPin[] = [];

    trips.forEach((trip) => {
        const cityPins = trip.cities.filter(
            (city) =>
                typeof city.lat === "number" && typeof city.lng === "number"
        );

        if (cityPins.length) {
            cityPins.forEach((city) => {
                pins.push({
                    id: `${trip.id}-${city.id}`,
                    slug: trip.slug,
                    title: trip.title,
                    year: trip.year,
                    month: trip.month,
                    coverImage: city.image || trip.coverImage,
                    mapLabel: city.name,
                    lat: city.lat as number,
                    lng: city.lng as number,
                });
            });
        } else {
            pins.push({
                id: trip.id,
                slug: trip.slug,
                title: trip.title,
                year: trip.year,
                month: trip.month,
                coverImage: trip.coverImage,
                mapLabel: trip.mapLabel,
                lat: trip.lat,
                lng: trip.lng,
            });
        }
    });

    return pins;
}

/** Draft UI dummy data — replace with Sanity later */
export const travelDraftTrips: TravelDraftTrip[] = [
    {
        id: "croatia-2025",
        slug: "croatia-2025",
        title: "Croatia",
        year: 2025,
        month: "August 2025",
        coverImage:
            "https://images.unsplash.com/photo-1555990793-da11153b2473?w=900&q=80",
        mapLabel: "Split",
        lat: 43.5081,
        lng: 16.4402,
        cities: [
            {
                id: "mostar",
                name: "Mostar",
                countryCode: "BA",
                lat: 43.3438,
                lng: 17.8078,
                image:
                    "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=400&q=80",
                caption:
                    "Quick stop across the border — bridges and old stone streets.",
                instagramHighlightUrl:
                    "https://www.instagram.com/stories/highlights/18331635574263756/",
            },
            {
                id: "dubrovnik",
                name: "Dubrovnik",
                countryCode: "HR",
                lat: 42.6507,
                lng: 18.0944,
                image:
                    "https://images.unsplash.com/photo-1555990538-17392d5e1a4b?w=400&q=80",
                caption: "City walls at golden hour.",
                instagramHighlightUrl:
                    "https://www.instagram.com/stories/highlights/18331635574263756/",
            },
            {
                id: "brela",
                name: "Brela",
                countryCode: "HR",
                lat: 43.3689,
                lng: 16.9342,
                image:
                    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
                caption: "Quiet beach mornings.",
                instagramHighlightUrl:
                    "https://www.instagram.com/stories/highlights/18331635574263756/",
            },
            {
                id: "omis",
                name: "Omis",
                countryCode: "HR",
                lat: 43.4447,
                lng: 16.6886,
                image:
                    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400&q=80",
                caption: "Mountains meeting the sea.",
                instagramHighlightUrl:
                    "https://www.instagram.com/stories/highlights/18331635574263756/",
            },
            {
                id: "split",
                name: "Split",
                countryCode: "HR",
                lat: 43.5081,
                lng: 16.4402,
                image:
                    "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&q=80",
                caption: "Diocletian's Palace and evening walks.",
                instagramHighlightUrl:
                    "https://www.instagram.com/stories/highlights/18331635574263756/",
            },
        ],
        blog: {
            intro:
                "Croatia was the trip where the Adriatic stopped being a postcard and started feeling like a rhythm — early ferries, stone alleys, and long blue evenings.",
            paragraphs: [
                "I didn’t plan this as a checklist of cities. It started with a few days by the water and turned into a slow loop along the coast: walls, harbours, and tiny places that felt quieter than their names suggested.",
                "Mostar was a short detour, but it stayed with me — the bridge, the heat, and that strange feeling of crossing into another pace of life in under an hour. Then Dubrovnik hit hard: crowded, beautiful, and somehow still worth walking the walls at sunset.",
                "Brela and Omiš slowed everything down again. Swimming before breakfast. Coffee with nowhere to be. Split felt like the right ending — old palace courtyards, laundry lines, and the soft chaos of a city that lives for the sea.",
                "This is the story of that route: not every photo, just the feeling of moving through Croatia one harbour at a time.",
            ],
        },
    },
    {
        id: "germany-2025",
        slug: "germany-2025",
        title: "Germany",
        year: 2025,
        month: "March 2025",
        coverImage:
            "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=900&q=80",
        mapLabel: "Berlin",
        lat: 52.52,
        lng: 13.405,
        cities: [
            {
                id: "berlin",
                name: "Berlin",
                countryCode: "DE",
                lat: 52.52,
                lng: 13.405,
                image:
                    "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400&q=80",
                caption: "Cold mornings and museum islands.",
            },
            {
                id: "luebbenau",
                name: "Lübbenau",
                countryCode: "DE",
                lat: 51.8667,
                lng: 13.9667,
                image:
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
                caption: "Spreewald canals and quiet green.",
            },
            {
                id: "munich",
                name: "Munich",
                countryCode: "DE",
                lat: 48.1351,
                lng: 11.582,
                image:
                    "https://images.unsplash.com/photo-1595867818085-2729b6847fd1?w=400&q=80",
                caption: "Parks, plazas, and soft spring light.",
            },
        ],
        blog: {
            intro:
                "Germany this year felt less like tourism and more like learning how a place breathes — trains, parks, and the comfort of returning to familiar streets.",
            paragraphs: [
                "Berlin is always a little unfinished in the best way. I walked more than I planned, collected small moments between stations, and let the city set the tempo.",
                "Lübbenau was the surprise: waterways, trees, and a weekend that felt like pressing pause. Munich closed the trip with warmer evenings and that easy southern German calm.",
                "One country, three moods — and a reminder that travel writing doesn’t need a dramatic plot. Sometimes the story is simply how the days felt.",
            ],
        },
    },
    {
        id: "saudi-2024",
        slug: "saudi-2024",
        title: "Saudi Arabia",
        year: 2024,
        month: "May 2024",
        coverImage:
            "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=900&q=80",
        mapLabel: "Makkah",
        lat: 21.4225,
        lng: 39.8262,
        cities: [
            {
                id: "makkah",
                name: "Makkah",
                countryCode: "SA",
                lat: 21.4225,
                lng: 39.8262,
                image:
                    "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=400&q=80",
                caption: "Nights around the Haram.",
            },
            {
                id: "madina",
                name: "Madina",
                countryCode: "SA",
                lat: 24.4672,
                lng: 39.6111,
                image:
                    "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&q=80",
                caption: "Quieter streets, softer evenings.",
            },
        ],
        blog: {
            intro:
                "This trip wasn’t about collecting places. It was about presence — walking, waiting, and noticing how time stretches in sacred cities.",
            paragraphs: [
                "Makkah arrives all at once: light, sound, and that immediate sense of being part of something larger than your itinerary.",
                "Madina felt different — slower, softer, the kind of place where you remember to breathe between every plan. Together they made one story: movement and stillness in the same journey.",
            ],
        },
    },
    {
        id: "austria-2024",
        slug: "austria-2024",
        title: "Austria",
        year: 2024,
        month: "June 2024",
        coverImage:
            "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
        mapLabel: "Vienna",
        lat: 48.2082,
        lng: 16.3738,
        cities: [
            {
                id: "vienna",
                name: "Vienna",
                countryCode: "AT",
                lat: 48.2082,
                lng: 16.3738,
                image:
                    "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&q=80",
                caption: "Palaces and long avenues.",
            },
            {
                id: "salzburg",
                name: "Salzburg",
                countryCode: "AT",
                lat: 47.8095,
                lng: 13.055,
                image:
                    "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&q=80",
                caption: "Fortress views above the old town.",
            },
        ],
        blog: {
            intro:
                "Austria was classical façades, tram bells, and mountain air just beyond the city edges.",
            paragraphs: [
                "Vienna felt grand without rushing you. Salzburg was the contrast — compact, dramatic, and easy to fall into for a couple of days.",
            ],
        },
    },
    {
        id: "prague-2025",
        slug: "prague-2025",
        title: "Prague",
        year: 2025,
        month: "April 2025",
        coverImage:
            "https://images.unsplash.com/photo-1541849546-216549ae216d?w=900&q=80",
        mapLabel: "Prague",
        lat: 50.0755,
        lng: 14.4378,
        cities: [
            {
                id: "prague",
                name: "Prague",
                countryCode: "CZ",
                lat: 50.0755,
                lng: 14.4378,
                image:
                    "https://images.unsplash.com/photo-1541849546-216549ae216d?w=400&q=80",
                caption: "Charles Bridge at dusk.",
            },
        ],
        blog: {
            intro:
                "Prague was one city, many moods — bridges at dusk, castle views, and riverside walks that never felt finished.",
            paragraphs: [
                "Even as a single-city trip, it earned its own page. Sometimes the country label is the city itself.",
            ],
        },
    },
];

export function getTravelDraftBySlug(slug: string) {
    return travelDraftTrips.find((trip) => trip.slug === slug);
}
