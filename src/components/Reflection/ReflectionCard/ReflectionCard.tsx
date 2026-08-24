import Link from "next/link";
import Image from "next/legacy/image";
import { format } from "date-fns";
import { urlFor } from "@/utils/sanity-utils";
import ReflectionTags from "../ReflectionTags/ReflectionTags";

interface IProp {
    article: any;
    path: string;
}

const ReflectionCard = ({ article, path }: IProp) => {
    const {
        title,
        tags,
        publishedAt,
        meta_description,
        isExternal,
        externalUrl,
        platform,
        mainImage,
    } = article;

    const imageRef = mainImage?.asset?._ref;
    const href = isExternal && externalUrl ? externalUrl : path;
    const isExternalLink = Boolean(isExternal && externalUrl);
    const platformLabel =
        isExternal && platform?.[0]
            ? platform[0].display_label || platform[0].name
            : null;

    const excerpt =
        meta_description && meta_description.length > 110
            ? `${meta_description.slice(0, 110).trim()}…`
            : meta_description;

    const inner = (
        <article className='group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-gradient-to-b from-white/80 to-white/40 transition hover:-translate-y-1 hover:border-appPurple-100/40 hover:shadow-lg dark:border-slate-700 dark:from-slate-900/70 dark:to-slate-900/40 dark:hover:border-appRed-100/40'>
            {imageRef && (
                <div className='relative h-44 w-full overflow-hidden'>
                    <Image
                        src={`${urlFor(imageRef)}`}
                        alt={mainImage?.alt || title}
                        layout='fill'
                        quality={70}
                        objectFit='cover'
                        className='opacity-90 transition duration-500 group-hover:scale-[1.03]'
                        blurDataURL={`${urlFor(imageRef)}`}
                        placeholder='blur'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent' />
                </div>
            )}

            <div className='flex flex-1 flex-col p-5'>
                <div className='mb-3 flex flex-wrap items-center gap-2'>
                    {publishedAt && (
                        <span className='text-xs text-gray-500 dark:text-gray-400'>
                            {format(new Date(publishedAt), "MMMM d, yyyy")}
                        </span>
                    )}
                    {platformLabel && (
                        <>
                            <span className='text-gray-300 dark:text-slate-600'>
                                ·
                            </span>
                            <span className='text-xs text-gray-500 dark:text-gray-400'>
                                {platformLabel}
                            </span>
                        </>
                    )}
                </div>

                <h3 className='text-xl font-semibold leading-snug tracking-tight text-gray-900 transition group-hover:text-appPurple-100 dark:text-white dark:group-hover:text-appRed-100 md:text-[22px]'>
                    {title}
                </h3>

                {excerpt && (
                    <p className='mt-3 line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300'>
                        {excerpt}
                    </p>
                )}

                {tags?.length > 0 && (
                    <div className='mt-4'>
                        <ReflectionTags tags={tags} isLight={false} />
                    </div>
                )}
            </div>
        </article>
    );

    return (
        <div className='mb-8 h-fit w-full px-2 md:w-1/2 md:px-[15px]'>
            {isExternalLink ? (
                <a
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={title}
                    className='block h-full'
                >
                    {inner}
                </a>
            ) : (
                <Link href={href} className='block h-full' aria-label={title}>
                    {inner}
                </Link>
            )}
        </div>
    );
};

export default ReflectionCard;
