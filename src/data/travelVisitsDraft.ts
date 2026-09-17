export type TravelVisitDraft = {
    id: string;
    slug: string;
    city: string;
    country: string;
    countryCode: string;
    year: number;
    month: string;
    coverImage: string;
    lat: number;
    lng: number;
    instagramHighlightUrl?: string;
    blog: {
        intro: string;
        paragraphs: string[];
    };
};

/** Static preview only — does not touch Sanity */
export const travelVisitsDraft: TravelVisitDraft[] = [
    {
        id: "dubrovnik-2026",
        slug: "dubrovnik-2026",
        city: "Dubrovnik",
        country: "Croatia",
        countryCode: "HR",
        year: 2026,
        month: "September 2026",
        coverImage:
            "https://images.unsplash.com/photo-1555990793-da11162e95d1?w=900&q=80",
        lat: 42.6507,
        lng: 18.0944,
        instagramHighlightUrl:
            "https://www.instagram.com/stories/highlights/18331635574263756/",
        blog: {
            intro:
                "Dubrovnik this September felt louder and brighter than I expected — walls at dusk, cruise crowds, and that thin strip of sea that makes everything softer.",
            paragraphs: [
                "I walked the walls later than planned and stayed longer than planned. The stones held the heat; the water kept flashing silver under the last light.",
                "This visit was less about collecting landmarks and more about noticing pace — when to push into the old town, when to sit still and let the city move past me.",
            ],
        },
    },
    {
        id: "split-2026",
        slug: "split-2026",
        city: "Split",
        country: "Croatia",
        countryCode: "HR",
        year: 2026,
        month: "September 2026",
        coverImage:
            "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=900&q=80",
        lat: 43.5081,
        lng: 16.4402,
        blog: {
            intro:
                "Split felt like a living courtyard — laundry lines, palace stones, and evenings that spill into the waterfront.",
            paragraphs: [
                "Diocletian’s Palace doesn’t feel like a museum here. People live inside it. That changes how you walk.",
            ],
        },
    },
    {
        id: "brela-2026",
        slug: "brela-2026",
        city: "Brela",
        country: "Croatia",
        countryCode: "HR",
        year: 2026,
        month: "September 2026",
        coverImage:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        lat: 43.3689,
        lng: 16.9342,
        blog: {
            intro:
                "Brela was the quiet reset — pines, clear water, and mornings with nowhere urgent to be.",
            paragraphs: [
                "After Dubrovnik’s intensity, Brela felt like exhaling. Same country, completely different tempo.",
            ],
        },
    },
    {
        id: "prague-2025",
        slug: "prague-2025",
        city: "Prague",
        country: "Czechia",
        countryCode: "CZ",
        year: 2025,
        month: "April 2025",
        coverImage:
            "https://images.unsplash.com/photo-1541849546-216549ae216d?w=900&q=80",
        lat: 50.0755,
        lng: 14.4378,
        blog: {
            intro:
                "First Prague visit: cold mornings, bridge fog, and that first-time hunger to see everything.",
            paragraphs: [
                "I rushed more than I should have. The city was beautiful anyway — maybe especially because everything still felt new.",
            ],
        },
    },
    {
        id: "prague-2026",
        slug: "prague-2026",
        city: "Prague",
        country: "Czechia",
        countryCode: "CZ",
        year: 2026,
        month: "March 2026",
        coverImage:
            "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=900&q=80",
        lat: 50.0755,
        lng: 14.4378,
        blog: {
            intro:
                "Back in Prague a year later — same streets, different feeling. Less checklist, more wandering.",
            paragraphs: [
                "I returned to old corners on purpose and left new ones empty on purpose. That was the whole point of coming back.",
                "Same city, new visit, new story. This is why visits matter more than a single country page.",
            ],
        },
    },
    {
        id: "berlin-2025",
        slug: "berlin-2025",
        city: "Berlin",
        country: "Germany",
        countryCode: "DE",
        year: 2025,
        month: "March 2025",
        coverImage:
            "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=900&q=80",
        lat: 52.52,
        lng: 13.405,
        blog: {
            intro:
                "Berlin in March: unfinished in the best way — stations, museums, and long walks between plans.",
            paragraphs: [
                "I didn’t try to summarize Berlin. I just followed the days and let the city set the tempo.",
            ],
        },
    },
];

export function getTravelVisitDraftBySlug(slug: string) {
    return travelVisitsDraft.find((visit) => visit.slug === slug);
}

export type TravelCountryTripDraft = {
    id: string;
    slug: string;
    country: string;
    countryCode: string;
    year: number;
    month: string;
    coverImage: string;
    visits: TravelVisitDraft[];
};

/** Group visits into country+year trips (one pin card per trip) */
export function getTravelCountryTrips(
    visits: TravelVisitDraft[] = travelVisitsDraft
): TravelCountryTripDraft[] {
    const map = new Map<string, TravelCountryTripDraft>();

    visits.forEach((visit) => {
        const key = `${visit.countryCode}-${visit.year}`.toLowerCase();
        const existing = map.get(key);
        if (existing) {
            existing.visits.push(visit);
            return;
        }
        map.set(key, {
            id: key,
            slug: `${visit.country.toLowerCase().replace(/\s+/g, "-")}-${visit.year}`,
            country: visit.country,
            countryCode: visit.countryCode,
            year: visit.year,
            month: visit.month,
            coverImage: visit.coverImage,
            visits: [visit],
        });
    });

    return Array.from(map.values()).sort((a, b) => b.year - a.year);
}

export function getTravelCountryTripBySlug(slug: string) {
    return getTravelCountryTrips().find((trip) => trip.slug === slug);
}

export function getCountryTripSlugForVisit(visit: TravelVisitDraft) {
    return `${visit.country.toLowerCase().replace(/\s+/g, "-")}-${visit.year}`;
}
