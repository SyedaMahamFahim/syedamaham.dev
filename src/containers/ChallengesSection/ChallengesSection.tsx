import Link from "next/link";
import {
    FaInstagram,
    FaGithub,
    FaYoutube,
    FaLinkedin,
    FaGlobe,
} from "react-icons/fa";
import { HiOutlineNewspaper } from "react-icons/hi";
import { Challenge, getChallengeEntryCount } from "@/types/challenge";

const statusStyles: Record<string, string> = {
    completed:
        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
    "in-progress":
        "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
    paused: "bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-gray-300",
};

function PlatformBadge({ platform }: { platform: string }) {
    const key = platform.trim().toLowerCase();
    const iconClass = "text-sm";

    const icon = key.includes("instagram") ? (
        <FaInstagram className={iconClass} />
    ) : key.includes("github") ? (
        <FaGithub className={iconClass} />
    ) : key.includes("youtube") ? (
        <FaYoutube className={iconClass} />
    ) : key.includes("linkedin") ? (
        <FaLinkedin className={iconClass} />
    ) : key.includes("blog") || key.includes("article") ? (
        <HiOutlineNewspaper className={iconClass} />
    ) : (
        <FaGlobe className={iconClass} />
    );

    return (
        <span
            title={platform}
            aria-label={platform}
            className='inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-gray-300'
        >
            {icon}
        </span>
    );
}

const ChallengesSection = ({ challenges }: { challenges: Challenge[] }) => {
    if (!challenges?.length) return null;

    const sorted = [...challenges].sort((a, b) => {
        if (b.year !== a.year) return (b.year || 0) - (a.year || 0);
        return a.title.localeCompare(b.title);
    });

    return (
        <section className='px-3'>
            <div className='grid gap-6 sm:grid-cols-2'>
                {sorted.map((challenge) => {
                    const slug = challenge.slug?.current;
                    const path = `/challenges/${slug}`;
                    const entryCount = getChallengeEntryCount(challenge);
                    const statusKey = challenge.status || "completed";
                    const statusClass =
                        statusStyles[statusKey] || statusStyles.completed;

                    return (
                        <Link
                            key={challenge._id || slug}
                            href={path}
                            className='group flex h-full flex-col rounded-2xl border border-gray-200 bg-white/50 p-6 transition hover:-translate-y-0.5 hover:border-appPurple-100 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/50 dark:hover:border-appRed-100'
                        >
                            <div className='mb-4 flex flex-wrap items-center gap-2'>
                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusClass}`}
                                >
                                    {challenge.status}
                                </span>
                                {challenge.year && (
                                    <span className='rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-slate-800 dark:text-gray-300'>
                                        {challenge.year}
                                    </span>
                                )}
                                {challenge.platform && (
                                    <PlatformBadge
                                        platform={challenge.platform}
                                    />
                                )}
                            </div>

                            <h3 className='text-xl font-bold text-gray-900 transition group-hover:text-appPurple-100 dark:text-white dark:group-hover:text-appRed-100'>
                                {challenge.title}
                            </h3>

                            <p className='mt-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300'>
                                {challenge.summary}
                            </p>

                            <div className='mt-6 grid grid-cols-3 gap-3 border-t border-gray-100 pt-4 dark:border-slate-800'>
                                <div>
                                    <p className='text-[11px] uppercase tracking-wide text-gray-400'>
                                        Goal
                                    </p>
                                    <p className='mt-1 text-sm font-semibold text-gray-800 dark:text-gray-200'>
                                        {challenge.goal || "—"}
                                    </p>
                                </div>
                                <div>
                                    <p className='text-[11px] uppercase tracking-wide text-gray-400'>
                                        Duration
                                    </p>
                                    <p className='mt-1 text-sm font-semibold text-gray-800 dark:text-gray-200'>
                                        {challenge.duration || "—"}
                                    </p>
                                </div>
                                <div>
                                    <p className='text-[11px] uppercase tracking-wide text-gray-400'>
                                        Topics
                                    </p>
                                    <p className='mt-1 text-sm font-semibold text-gray-800 dark:text-gray-200'>
                                        {entryCount}
                                    </p>
                                </div>
                            </div>

                            <p className='mt-5 text-sm font-semibold text-appPurple-100 dark:text-appRed-100'>
                                View challenge →
                            </p>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default ChallengesSection;
