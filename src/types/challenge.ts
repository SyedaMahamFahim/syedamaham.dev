export type ChallengeEntry = {
    title: string;
    url: string;
    note?: string;
};

export type ChallengeSection = {
    title: string;
    entries?: ChallengeEntry[];
};

export type Challenge = {
    _id?: string;
    title: string;
    slug?: { current?: string };
    year: number;
    summary: string;
    platform?: string;
    status: "completed" | "in-progress" | "paused" | string;
    goal?: string;
    duration?: string;
    featured?: boolean;
    entries?: ChallengeEntry[];
    sections?: ChallengeSection[];
};

export function getChallengeEntryCount(challenge: Challenge) {
    const flatCount = challenge.entries?.length || 0;
    const sectionCount =
        challenge.sections?.reduce(
            (total, section) => total + (section.entries?.length || 0),
            0
        ) || 0;
    return flatCount + sectionCount;
}

export function toSectionId(title: string) {
    return title.toLowerCase().replace(/\s+/g, "-");
}
