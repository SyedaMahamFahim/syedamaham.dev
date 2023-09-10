import { getRandomGradientColor } from "@/utils/utils";
import Link from "next/link";
import Image from "next/legacy/image";

const MyInfoCard = () => {
  const styleCss =
    "flex items-center justify-center rounded-md from-blue-300 to-purple-300 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2 bg-gradient-to-r text-xl pt-2 cursor-pointer transform hover:scale-105 w-auto";
  return (
    <>
      <div className="flex flex-wrap justify-center items-center p-10">
        <div>
          <Image
          height={100}
          width={100}
          quality={100}
          layout="responsive"
          objectFit="cover"
            className="w-[100px] h-[100px] rounded-full"
            src="/images/photo.jpg"
            alt="Syeda Maham Fahim"
          />
        </div>
        <div className="ml-5">
          <h4 className="font-bold">Syeda Maham Fahim 🇵🇰</h4>
          <p className="text-xl line-clamp-1">💻 ✍ ℡ 🚀⚡️ </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center mt-5 md:mt-0">
        <a
          href="https://www.syeda-maham-fahim.engineer/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`ME`}
        >
          <span
            className={styleCss}
            style={{ background: `${getRandomGradientColor()}` }}
          >
            Me
          </span>
        </a>
        <Link href="/about">
          <span
            className={styleCss}
            style={{ background: `${getRandomGradientColor()}` }}
          >
            About
          </span>
        </Link>
        <a href="https://www.linkedin.com/in/syedamahamfahim/"
          target="_blank"
          aria-label={`EXPERIENCE`}
          rel="noopener noreferrer">
          <span
            className={styleCss}
            style={{ background: `${getRandomGradientColor()}` }}
          >
            Experience
          </span>
        </a>
       
        <Link href="/profiles">
          <span
            className={styleCss}
            style={{ background: `${getRandomGradientColor()}` }}
          >
            Profiles
          </span>
        </Link>
      </div>
    </>
  );
};

export default MyInfoCard;
