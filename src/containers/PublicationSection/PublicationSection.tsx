import Link from "next/link";

type Publication = {
    year: number;
    title: string;
    authors: string[];
    venue: string;
    publisher: string;
    links?: {
        arxiv?: string;
        pdf?: string;
        code?: string;
        doi?: string;
        publisher?: string;
    };
};

const PublicationSection = ({
    publications,
}: {
    publications: Publication[];
}) => {
    const grouped = publications.reduce((acc: any, pub) => {
        acc[pub.year] = acc[pub.year] || [];
        acc[pub.year].push(pub);
        return acc;
    }, {});

    const years = Object.keys(grouped)
        .map(Number)
        .sort((a, b) => b - a);

    return (
        <section className='container px-3'>
            <div className='space-y-2'>
                {years.map((year) => (
                    <div key={year}>
                        <h2 className='mb-4 text-xl font-bold text-gray-900 dark:text-white'>

                            {year}
                        </h2>

                        <ul className='space-y-6'>
                            {grouped[year].map(
                                (pub: Publication, i: number) => (
                                    <li key={i} className='space-y-1'>
                                        <p className='font-semibold text-gray-900 dark:text-white'>

                                            {pub.title}
                                        </p>

                                        <p className='text-sm text-gray-700 dark:text-gray-300'>

                                            {pub.authors.join(", ")}
                                        </p>

                                        <p className='text-sm text-gray-600 dark:text-gray-400'>

                                            {pub.venue} ({pub.publisher}) |{" "}
                                            {pub.year} | [{pub.links?.doi}]

                                        </p>
                                        <p className='text-sm text-gray-400'>
                                            {pub.links && (
                                                <>
                                                    {pub.links?.publisher && (
                                                        <Link
                                                            href={
                                                                pub.links
                                                                    .publisher
                                                            }
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                            className=' text-appPurple-100 font-semibold
                                                            hover:underline dark:text-red-600'

                                                        >
                                                            [View Paper]
                                                        </Link>
                                                    )}
                                                    {pub.links?.arxiv && (
                                                        <Link
                                                            href={
                                                                pub.links.arxiv
                                                            }
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                            className='ml-2 text-appRed-100 hover:underline'
                                                        >
                                                            [arXiv]
                                                        </Link>
                                                    )}
                                                    {pub.links?.pdf && (
                                                        <Link
                                                            href={pub.links.pdf}
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                            className='ml-2 text-appRed-100 hover:underline'
                                                        >
                                                            [PDF]
                                                        </Link>
                                                    )}
                                                    {pub.links?.code && (
                                                        <Link
                                                            href={
                                                                pub.links.code
                                                            }
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                            className='ml-2 text-appRed-100 hover:underline'
                                                        >
                                                            [Code]
                                                        </Link>
                                                    )}
                                                </>
                                            )}

                                        </p>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PublicationSection;
