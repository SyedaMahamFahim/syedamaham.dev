import { AppWrapper } from "@/containers";
import { challengeQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import {
    Challenge,
    ChallengeEntry,
    toSectionId,
} from "@/types/challenge";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    FaInstagram,
    FaGithub,
    FaYoutube,
    FaLinkedin,
    FaGlobe,
} from "react-icons/fa";
import { HiOutlineNewspaper } from "react-icons/hi";

interface Props {
    params: { slug: string };
}

function PlatformIcon({ platform }: { platform: string }) {
    const key = platform.trim().toLowerCase();
    const className = "text-base";

    if (key.includes("instagram")) return <FaInstagram className={className} />;
    if (key.includes("github")) return <FaGithub className={className} />;
    if (key.includes("youtube")) return <FaYoutube className={className} />;
    if (key.includes("linkedin")) return <FaLinkedin className={className} />;
    if (key.includes("blog") || key.includes("article"))
        return <HiOutlineNewspaper className={className} />;
    return <FaGlobe className={className} />;
}

function TopicGrid({
    entries,
    startNumber = 0,
}: {
    entries: ChallengeEntry[];
    startNumber?: number;
}) {
    return (
        <ol className='grid gap-6 sm:grid-cols-2'>
            {entries.map((entry, index) => {
                const number = startNumber + index + 1;

                return (
                    <li
                        key={`${entry.title}-${entry.url}-${number}`}
                        className='flex h-full flex-col justify-between rounded-xl border border-gray-100 p-5 dark:border-slate-800'
                    >
                        <div>
                            <p className='text-xs font-semibold text-gray-400'>
                                {number}
                            </p>
                            <p className='mt-2 text-base font-semibold text-gray-900 dark:text-white'>
                                {entry.note || entry.title}
                            </p>
                            {entry.note && (
                                <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
                                    {entry.title}
                                </p>
                            )}
                        </div>
                        <a
                            href={entry.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='mt-5 text-sm font-semibold text-appPurple-100 hover:underline dark:text-red-600'
                        >
                            [Open]
                        </a>
                    </li>
                );
            })}
        </ol>
    );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const challenge = await sanityFetch<Challenge>({
        query: challengeQuery,
        params,
    });

    if (!challenge) {
        return { title: "Not Found" };
    }

    return {
        title: challenge.title,
        description: challenge.summary,
    };
}

const ChallengeDetailPage = async ({ params }: Props) => {
    const challenge = await sanityFetch<Challenge>({
        query: challengeQuery,
        params,
    });

    if (!challenge) {
        notFound();
    }

    const flatEntries = challenge.entries || [];
    const sections = (challenge.sections || []).filter(
        (section) => (section.entries?.length || 0) > 0
    );
    const hasSections = sections.length > 0;
    let entryNumber = 0;

    return (
        <AppWrapper>
            <p className='mb-8 text-sm'>
                <Link
                    href='/challenges'
                    className='font-semibold text-appPurple-100 hover:underline dark:text-appRed-100'
                >
                    ← Challenges
                </Link>
            </p>

            <header className='mb-14 flex flex-col gap-8 border-b border-gray-200 pb-10 dark:border-slate-700 md:flex-row md:items-start md:justify-between'>
                <div className='min-w-0 max-w-2xl'>
                    <h1 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl'>
                        {challenge.title}
                    </h1>
                    <p className='mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300'>
                        {challenge.summary}
                    </p>

                    <div className='mt-5 flex flex-wrap items-center gap-3'>
                        <span className='rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold capitalize text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300'>
                            {challenge.status}
                        </span>

                        {challenge.platform && (
                            <span
                                title={challenge.platform}
                                aria-label={challenge.platform}
                                className='inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-gray-300'
                            >
                                <PlatformIcon platform={challenge.platform} />
                            </span>
                        )}
                    </div>
                </div>

                {(challenge.goal || challenge.duration) && (
                    <aside className='shrink-0 rounded-xl bg-gray-50 px-5 py-4 md:min-w-[11rem] md:text-right dark:bg-slate-900/60'>
                        {challenge.goal && (
                            <p className='text-sm text-gray-700 dark:text-gray-300'>
                                <span className='text-gray-400'>Goal · </span>
                                {challenge.goal}
                            </p>
                        )}
                        {challenge.duration && (
                            <p className='mt-2 text-sm text-gray-700 dark:text-gray-300'>
                                <span className='text-gray-400'>Duration · </span>
                                {challenge.duration}
                            </p>
                        )}
                    </aside>
                )}
            </header>

            {flatEntries.length > 0 && (
                <section className='mb-16'>
                    <div className='mb-8 flex items-end justify-between gap-4 border-b border-gray-200 pb-4 dark:border-slate-700'>
                        <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
                            Topics
                        </h2>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>
                            {flatEntries.length} topics
                        </p>
                    </div>
                    <TopicGrid entries={flatEntries} />
                </section>
            )}

            {hasSections && sections.length > 1 && (
                <section className='mb-16'>
                    <h2 className='mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400'>
                        Categories
                    </h2>
                    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                        {sections.map((section) => (
                            <a
                                key={section.title}
                                href={`#${toSectionId(section.title)}`}
                                className='rounded-xl border border-gray-200 bg-white/40 p-5 transition hover:border-appPurple-100 hover:shadow-sm dark:border-slate-700 dark:bg-slate-900/40 dark:hover:border-appRed-100'
                            >
                                <p className='text-lg font-bold text-gray-900 dark:text-white'>
                                    {section.title}
                                </p>
                                <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
                                    {section.entries?.length || 0} topics
                                </p>
                            </a>
                        ))}
                    </div>
                </section>
            )}

            {hasSections && (
                <div className='space-y-20'>
                    {sections.map((section) => {
                        const sectionId = toSectionId(section.title);
                        const entries = section.entries || [];
                        const startNumber = entryNumber;
                        entryNumber += entries.length;

                        return (
                            <section
                                key={section.title}
                                id={sectionId}
                                className='scroll-mt-24'
                            >
                                <div className='mb-8 flex items-end justify-between gap-4 border-b border-gray-200 pb-4 dark:border-slate-700'>
                                    <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
                                        {section.title}
                                    </h2>
                                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                                        {entries.length} topics
                                    </p>
                                </div>
                                <TopicGrid
                                    entries={entries}
                                    startNumber={startNumber}
                                />
                            </section>
                        );
                    })}
                </div>
            )}

            {flatEntries.length === 0 && !hasSections && (
                <p className='text-gray-500 dark:text-gray-400'>
                    No topics added yet.
                </p>
            )}
        </AppWrapper>
    );
};

export default ChallengeDetailPage;
