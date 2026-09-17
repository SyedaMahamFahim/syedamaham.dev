export type TravelCity = {
    _key?: string;
    name: string;
    countryCode: string;
    image?: any;
    /** Resolved URL for display */
    imageUrl?: string;
    caption?: string;
    lat?: number;
    lng?: number;
    instagramHighlightUrl?: string;
    blogIntro?: string;
    blogBody?: any[];
    /** Optional in-app link when no Instagram highlight is set */
    href?: string;
};

export type TravelTrip = {
    _id: string;
    title: string;
    slug?: { current?: string };
    year: number;
    month: string;
    coverImage?: any;
    /** Resolved URL for display */
    coverImageUrl?: string;
    mapLabel: string;
    lat: number;
    lng: number;
    cities?: TravelCity[];
    blogIntro?: string;
    blogBody?: any[];
    featured?: boolean;
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

/** Gallery photo type used by TravelGallery */
export type TravelPhoto = {
    _key?: string;
    city: string;
    caption?: string;
    image?: any;
    src?: string;
};
