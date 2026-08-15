import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/utils/sanity-utils";

type SessionLink = {
    title?: string;
    url?: string;
};

type TalkSession = {
    _id: string;
    title: string;
    slug?: { current?: string };
    date?: string;
    event?: string;
    location?: string;
    thumbnail?: any;
    excerpt?: string;
    sessionLinks?: SessionLink[];
};

function getYoutubeId(url?: string): string | null {
    if (!url) return null;
    try {
        const parsed = new URL(url);
        if (parsed.hostname.includes("youtu.be")) {
            return parsed.pathname.slice(1).split("/")[0] || null;
        }
        if (parsed.hostname.includes("youtube.com")) {
            return (
                parsed.searchParams.get("v") ||
                parsed.pathname.match(/\/embed\/([^/]+)/)?.[1] ||
                null
            );
        }
    } catch {
        return null;
    }
    return null;
}

function getYoutubeUrl(links?: SessionLink[]): string | undefined {
    return links?.find((link) => getYoutubeId(link.url))?.url;
}

const TalksSection = ({
    sessions,
    showYears = true,
}: {
    sessions: TalkSession[];
    showYears?: boolean;
}) => {
    if (!sessions?.length) {
        return null;
    }

    const grouped = sessions.reduce(
        (acc: Record<string, TalkSession[]>, session) => {
            const year = session.date
                ? String(new Date(session.date).getFullYear())
                : "Other";
            acc[year] = acc[year] || [];
            acc[year].push(session);
            return acc;
        },
        {}
    );

    const years = showYears
        ? Object.keys(grouped).sort((a, b) => {
              if (a === "Other") return 1;
              if (b === "Other") return -1;
              return Number(b) - Number(a);
          })
        : ["all"];

    const renderSession = (session: TalkSession) => {
        const path = `/talks/${session.slug?.current}`;
        const youtubeUrl = getYoutubeUrl(session.sessionLinks);
        const youtubeId = getYoutubeId(youtubeUrl);
        const mediaHref = youtubeUrl || path;
        const imageSrc = session.thumbnail
            ? urlFor(session.thumbnail).width(800).height(450).url()
            : youtubeId
              ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`
              : null;
        const truncatedExcerpt =
            session.excerpt && session.excerpt.length > 180
                ? `${session.excerpt.slice(0, 180).trim()}…`
                : session.excerpt;
        const subtitleParts = [session.event, session.location]
            .filter(Boolean)
            .join(", ");

        return (
            <li
                key={session._id}
                className='border-b border-gray-200 py-8 last:border-b-0 dark:border-slate-700'
            >
                <div className='flex flex-col gap-6 md:flex-row md:items-start md:gap-8'>
                    {imageSrc && (
                        <div className='w-full shrink-0 md:w-[42%]'>
                            <a
                                href={mediaHref}
                                target={youtubeUrl ? "_blank" : undefined}
                                rel={
                                    youtubeUrl
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                className='group relative block aspect-video w-full overflow-hidden rounded-md bg-gray-100 dark:bg-slate-900'
                            >
                                <Image
                                    src={imageSrc}
                                    alt={session.title}
                                    fill
                                    className='object-cover transition duration-300 group-hover:scale-[1.02]'
                                    sizes='(max-width: 768px) 100vw, 42vw'
                                />
                                {youtubeUrl && (
                                    <span className='absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover:bg-black/35'>
                                        <span className='flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg'>
                                            <svg
                                                viewBox='0 0 24 24'
                                                className='ml-1 h-6 w-6 fill-current'
                                                aria-hidden='true'
                                            >
                                                <path d='M8 5v14l11-7z' />
                                            </svg>
                                        </span>
                                    </span>
                                )}
                            </a>
                        </div>
                    )}

                    <div className='flex min-w-0 flex-1 flex-col justify-center'>
                        <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                            <Link
                                href={path}
                                className='hover:text-appPurple-100 dark:hover:text-appRed-100'
                            >
                                {session.title}
                            </Link>
                        </h3>

                        {session.event && (
                            <p className='mt-1 text-base italic text-gray-500 dark:text-gray-400'>
                                {session.event}
                            </p>
                        )}

                        {(truncatedExcerpt || subtitleParts) && (
                            <p className='mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300'>
                                {truncatedExcerpt || subtitleParts}
                            </p>
                        )}

                        <p className='mt-4 text-sm'>
                            <Link
                                href={path}
                                className='font-semibold text-appPurple-100 hover:underline dark:text-red-600'
                            >
                                [View Talk]
                            </Link>
                        </p>
                    </div>
                </div>
            </li>
        );
    };

    return (
        <section className='px-3'>
            <div className='space-y-10'>
                {years.map((year) => (
                    <div key={year}>
                        {showYears && year !== "all" && (
                            <div className='mb-2 flex items-center gap-4'>
                                <div className='h-px flex-1 bg-gradient-to-r from-transparent to-gray-300 dark:to-slate-600' />
                                <h2 className='shrink-0 text-2xl font-bold tracking-wide text-appPurple-100 dark:text-appRed-100 md:text-3xl'>
                                    {year}
                                </h2>
                                <div className='h-px flex-1 bg-gradient-to-l from-transparent to-gray-300 dark:to-slate-600' />
                            </div>
                        )}

                        <ul>
                            {(showYears ? grouped[year] : sessions).map(
                                renderSession
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TalksSection;
