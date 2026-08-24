import Link from "next/link";
import { format } from "date-fns";

interface GuideCardProps {
    article: {
        title: string;
        meta_description?: string;
        publishedAt?: string;
        tags?: { title?: string; slug?: { current?: string } }[];
        isExternal?: boolean;
        externalUrl?: string;
        platform?: { name?: string; display_label?: string }[];
        slug?: { current?: string };
    };
    path: string;
}

const GuideCard = ({ article, path }: GuideCardProps) => {
    const {
        title,
        meta_description,
        publishedAt,
        tags,
        isExternal,
        externalUrl,
        platform,
    } = article;

    const href = isExternal && externalUrl ? externalUrl : path;
    const isExternalLink = Boolean(isExternal && externalUrl);
    const platformLabel =
        platform?.[0]?.display_label || platform?.[0]?.name || null;

    const content = (
        <article className='group flex h-full flex-col rounded-2xl border border-gray-200 bg-white/50 p-6 transition hover:-translate-y-0.5 hover:border-appPurple-100 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/50 dark:hover:border-appRed-100'>
            <div className='mb-4 flex flex-wrap items-center gap-2'>
                <span className='rounded-full bg-appPurple-100/10 px-3 py-1 text-xs font-semibold text-appPurple-100 dark:bg-appRed-100/10 dark:text-appRed-100'>
                    Guide
                </span>
                {platformLabel && (
                    <span className='rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-600 dark:border-slate-600 dark:text-gray-300'>
                        {platformLabel}
                    </span>
                )}
                {publishedAt && (
                    <span className='text-xs font-semibold text-appRed-100'>
                        {format(new Date(publishedAt), "MMMM d, yyyy")}
                    </span>
                )}
            </div>

            <h3 className='text-xl font-bold text-gray-900 transition group-hover:text-appPurple-100 dark:text-white dark:group-hover:text-appRed-100'>
                {title}
            </h3>

            {meta_description && (
                <p className='mt-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300'>
                    {meta_description}
                </p>
            )}

            {tags && tags.length > 0 && (
                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <span
                            key={tag.slug?.current || tag.title}
                            className='rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-slate-800 dark:text-gray-300'
                        >
                            #{tag.title}
                        </span>
                    ))}
                </div>
            )}

            <p className='mt-5 text-sm font-semibold text-appPurple-100 dark:text-appRed-100'>
                Read guide →
            </p>
        </article>
    );

    if (isExternalLink) {
        return (
            <div className='mb-6 w-full px-2 md:w-1/2'>
                <a
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={title}
                    className='block h-full'
                >
                    {content}
                </a>
            </div>
        );
    }

    return (
        <div className='mb-6 w-full px-2 md:w-1/2'>
            <Link href={href} className='block h-full' aria-label={title}>
                {content}
            </Link>
        </div>
    );
};

export default GuideCard;
