import { getRandomGradientColor } from "@/utils/utils";
import Link from "next/link";
import Image from "next/legacy/image";
import ProfilePic from "./photo.jpg";

const MyInfoCard = () => {
    const styleCss =
        "flex items-center justify-center rounded-md from-blue-300 to-purple-300 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2 bg-gradient-to-r text-xl pt-2 cursor-pointer transform hover:scale-105 w-auto";
    return (
        <>
            <div className='flex flex-wrap items-center justify-center p-10'>
                <div className='mr-5'>
                    <Image
                        height={100}
                        width={100}
                        quality={100}
                        className='rounded-full'
                        src={ProfilePic}
                        alt='Syeda Maham Fahim'
                    />
                </div>
                <div className='ml-5'>
                    <h4 className='font-bold'>Syeda Maham Fahim 🇵🇰</h4>
                    <p className='line-clamp-1 text-xl'>💻 ✍ ℡ 🚀⚡️ </p>
                </div>
                
            </div>
            <div className='mt-5 flex flex-col md:mt-0 md:flex-row md:items-center'>
                <Link href='/about'>
                    <span
                        className={styleCss}
                        style={{ background: `${getRandomGradientColor()}` }}
                    >
                        About
                    </span>
                </Link>
                <Link href='/contact'>
                    <span
                        className={styleCss}
                        style={{ background: `${getRandomGradientColor()}` }}
                    >
                        Contact
                    </span>
                </Link>
                <a
                    href='https://www.linkedin.com/in/syedamahamfahim/'
                    target='_blank'
                    aria-label={`EXPERIENCE`}
                    rel='noopener noreferrer'
                >
                    <span
                        className={styleCss}
                        style={{ background: `${getRandomGradientColor()}` }}
                    >
                        Experience
                    </span>
                </a>

                <Link href='/profiles'>
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
