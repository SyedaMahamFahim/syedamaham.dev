import Link from "next/link";
import { getRandomHexColor } from "@/utils/utils";

interface CategoryCardProps {
  name: string;
  url: string;

  total: number;
}
const CategoryCard: React.FC<CategoryCardProps> =  ({ name, url, total }) => {
  const color = getRandomHexColor();
  return (
    <>
      <Link href={`/categories/${url}`} >
        <div
          className={`bg-gradient-to-bl text-white flex items-center font-semibold py-3 px-5  rounded-full justify-between transform transition ease-in-out duration-200 hover:scale-95 cursor-pointer`}
          style={{
            backgroundColor: `${color}`,
          }}

        >
          <p className="line-clamp-1">{name}</p>
          <p className="bg-white text-sm px-1.5 text-center rounded-full" style={{
            color: `${color}`,
          }}>
            {total}
          </p>
        </div>
      </Link>
    </>
  );
};

export default CategoryCard;
