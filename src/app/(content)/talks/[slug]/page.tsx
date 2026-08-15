import { ArticleContent } from "@/components";
import { AppWrapper } from "@/containers";
import { Metadata } from "next";
import Link from "next/link";
import { format } from "date-fns";
import { SanityDocument } from "@sanity/client";
import { speakingSessionQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { notFound } from "next/navigation";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const session = await sanityFetch<SanityDocument>({
        query: speakingSessionQuery,
        params,
    });

    if (!session) {
        return {
            title: "Not Found",
            description: "The page is not found",
        };
    }

    return {
        title: session?.title,
        description: session?.excerpt || session?.title,
    };
}

const TalkDetail = async ({ params }: Props) => {
    const session = await sanityFetch<SanityDocument>({
        query: speakingSessionQuery,
        params,
    });

    if (!session) {
        notFound();
    }

    const metaParts = [
        session.event,
        session.location,
        session.date
            ? format(new Date(session.date), "MMMM d, yyyy")
            : null,
    ].filter(Boolean);

    return (
        <AppWrapper>
            <p className='mb-6 text-sm'>
                <Link
                    href='/talks'
                    className='font-semibold text-appPurple-100 hover:underline dark:text-appRed-100'
                >
                    ← Talks
                </Link>
            </p>

            <h1 className='mb-3 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl'>
                {session.title}
            </h1>

            {metaParts.length > 0 && (
                <p className='mb-2 text-sm text-gray-600 dark:text-gray-400'>
                    {metaParts.join(" · ")}
                </p>
            )}

            {session.topics?.length > 0 && (
                <p className='mb-6 text-sm text-gray-500 dark:text-gray-500'>
                    {session.topics.join(", ")}
                </p>
            )}

            {session.sessionLinks?.length > 0 && (
                <p className='mb-8 text-sm'>
                    {session.sessionLinks.map(
                        (
                            link: { title?: string; url?: string },
                            index: number
                        ) =>
                            link?.url ? (
                                <a
                                    key={`${link.url}-${index}`}
                                    href={link.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={`${index > 0 ? "ml-3" : ""} font-semibold text-appPurple-100 hover:underline dark:text-red-600`}
                                >
                                    [{link.title || "Link"}]
                                </a>
                            ) : null
                    )}
                </p>
            )}

            {session.description && (
                <div className='mb-10 max-w-3xl text-gray-800 dark:text-gray-200'>
                    <ArticleContent ARTICLE_CONTENT={session.description} />
                </div>
            )}

            {session.speakers?.length > 0 && (
                <section className='mb-10 max-w-3xl'>
                    <h2 className='mb-3 text-lg font-bold text-gray-900 dark:text-white'>
                        Co-speakers
                    </h2>
                    <ul className='space-y-2'>
                        {session.speakers.map(
                            (
                                speaker: {
                                    name?: string;
                                    role?: string;
                                    profileUrl?: string;
                                },
                                index: number
                            ) => (
                                <li
                                    key={`${speaker.name}-${index}`}
                                    className='text-sm text-gray-700 dark:text-gray-300'
                                >
                                    {speaker.profileUrl ? (
                                        <a
                                            href={speaker.profileUrl}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='font-semibold text-appPurple-100 hover:underline dark:text-appRed-100'
                                        >
                                            {speaker.name}
                                        </a>
                                    ) : (
                                        <span className='font-semibold'>
                                            {speaker.name}
                                        </span>
                                    )}
                                    {speaker.role && (
                                        <span className='text-gray-500 dark:text-gray-400'>
                                            {" "}
                                            — {speaker.role}
                                        </span>
                                    )}
                                </li>
                            )
                        )}
                    </ul>
                </section>
            )}
        </AppWrapper>
    );
};

export default TalkDetail;
