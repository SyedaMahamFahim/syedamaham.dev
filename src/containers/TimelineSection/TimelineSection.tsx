import Link from "next/link";

type TimelineItem = {
    _id: string;
    title: string;
    yearLabel: string;
    summary?: string;
    highlights: string[];
    links?: {
        label: string;
        url: string;
    }[];
};

const styles = {
    container: "space-y-10",
    item: "relative pl-6",
    line: "absolute left-1 top-0 h-full w-px bg-gray-300 dark:bg-slate-700",
    dot: "absolute left-0 top-1.5 h-2 w-2 rounded-full bg-gray-500 dark:bg-slate-400",
    year: "text-sm font-semibold text-gray-500 dark:text-gray-400",
    title: "mt-1 text-lg font-semibold text-gray-900 dark:text-white",
    summary: "mt-1 text-sm text-gray-700 dark:text-gray-300",
    list: "mt-3 space-y-1 text-sm text-gray-800 dark:text-gray-300",
    link: "text-sm text-red-600 hover:underline dark:text-appRed-100",
};

const TimelineSection = ({ timeline }: { timeline: TimelineItem[] }) => {
    return (
        <div className={styles.container}>
            {timeline.map((item, index) => (
                <div key={item._id} className={styles.item}>
                    <span className={styles.dot} />
                    {index !== timeline.length - 1 && (
                        <span className={styles.line} />
                    )}

                    <p className={styles.year}>{item.yearLabel}</p>

                    <h3 className={styles.title}>{item.title}</h3>

                    {item.summary && (
                        <p className={styles.summary}>{item.summary}</p>
                    )}

                    <ul className={styles.list}>
                        {item.highlights.map((point, i) => (
                            <li key={i} className='flex gap-2'>
                                <span className='text-gray-500 dark:text-gray-400'>
                                    ↳
                                </span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    {item.links && item.links.length > 0 && (
                        <div className='mt-3 space-x-3'>
                            {item.links.map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={styles.link}
                                >
                                    [{link.label}]
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TimelineSection;
