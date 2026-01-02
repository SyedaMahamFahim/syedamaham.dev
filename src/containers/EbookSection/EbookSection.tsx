import Link from "next/link";
import Image from "next/image";

import { urlFor } from "@/utils/sanity-utils";

const ebookStyles = {
    card: "flex flex-col border border-gray-200 dark:border-slate-800 overflow-hidden transition hover:shadow-md",
    imageWrapper:
        "relative w-full aspect-[3/4] bg-gray-100 dark:bg-slate-900 flex items-center justify-center",

    content: "flex flex-col p-5",
    title: "text-lg font-bold text-gray-900 dark:text-white",
    description: "mt-2 text-sm text-gray-700 dark:text-gray-300",
    meta: "mt-3 text-xs text-gray-500 dark:text-gray-400",
    badge: "mb-3 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold",
    link: "mt-4 text-appPurple-100 inline-block text-sm font-semibold hover:underline dark:text-appRed-100",
};

const statusBadge: Record<string, string> = {
    published:
        "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
    maintained:
        "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    in_progress:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
};

const EbookSection = ({ ebooks }: { ebooks: any[] }) => {
    return (
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {ebooks.map((ebook) => (
                <div key={ebook._id} className={ebookStyles.card}>
                    {ebook.coverImage && (
                        <div className={ebookStyles.imageWrapper}>
                            <Image
                                src={urlFor(ebook.coverImage)
                                    .width(800)
                                    .height(1100)
                                    .url()}
                                alt={ebook.title}
                                fill
                                className='object-contain'
                                sizes='(max-width: 768px) 100vw, 33vw'
                            />
                        </div>
                    )}

                    <div className={ebookStyles.content}>
                        {/* <span
                            className={`${ebookStyles.badge} ${
                                statusBadge[ebook.status]
                            }`}
                        >
                            {ebook.status.replace("_", " ")}
                        </span> */}

                        <h3 className={ebookStyles.title}>{ebook.title}</h3>

                        {/* <p className={ebookStyles.description}>
                            {ebook.description}
                        </p> */}

                        <p className={ebookStyles.meta}>
                            {ebook.docsType && <span>{ebook.docsType}</span>}
                            {ebook.audienceLevel && (
                                <span> • {ebook.audienceLevel}</span>
                            )}
                        </p>

                        <Link
                            href={ebook.docsUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={ebookStyles.link}
                        >
                            Read online →
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EbookSection;
