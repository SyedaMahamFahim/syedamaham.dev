import Link from "next/link";

interface CategoryCardProps {
    name: string;
    url: string;
    total: number;
}
const CategoryCard: React.FC<CategoryCardProps> = ({ name, url, total }) => {
    return (
        <>
<Link href={`/categories/${url}`}>
    <div className="flex cursor-pointer items-center justify-between rounded-full bg-slate-900 px-5 py-3 font-semibold text-white transition hover:scale-95 dark:bg-white dark:text-black">
        <p className="whitespace-normal break-words">
            {name}
        </p>

        <p className="ml-3 rounded-full bg-white px-1.5 text-sm text-appPurple-100 dark:bg-slate-900 dark:text-appRed-100">
            {total}
        </p>
    </div>
</Link>

        </>
    );
};

export default CategoryCard;
