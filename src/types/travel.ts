export type TravelPhoto = {
    _key?: string;
    caption: string;
    city: string;
    image?: any;
    /** Resolved URL for display */
    src?: string;
};

export type TravelTrip = {
    _id: string;
    title: string;
    slug?: { current?: string };
    year: number;
    month: string;
    coverImage?: any;
    mapLabel: string;
    lat: number;
    lng: number;
    photos?: TravelPhoto[];
    featured?: boolean;
};
