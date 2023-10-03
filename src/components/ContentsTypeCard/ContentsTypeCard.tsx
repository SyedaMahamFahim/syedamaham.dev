import { getRandomGradientColor } from "@/utils/utils";
import Link from "next/link";
import { allTypesContent } from "@/data";

const ContentsTypeCard = () => {
    const styleCss =
        "flex items-center justify-center rounded-md from-blue-300 to-purple-300 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2 bg-gradient-to-r text-xl pt-2 cursor-pointer transform hover:scale-105 w-auto";
    return (
        <>
            {allTypesContent.map((content, index) => {
                return (
                    <Link href={content.url} key={index}>
                        <span
                            className={styleCss}
                            style={{
                                background: `${getRandomGradientColor()}`,
                            }}
                        >
                            {content.name}
                        </span>
                    </Link>
                );
            })}
            <a href={"https://github.com/SyedaMahamFahim"}
            target="_blank"
            rel="noreferrer"
            >
                <span
                    className={styleCss}
                    style={{ background: `${getRandomGradientColor()}` }}
                >
                    Open Source
                </span>
            </a>
            <Link href={"/external-articles"}>
                <span
                    className={styleCss}
                    style={{ background: `${getRandomGradientColor()}` }}
                >
                    External Articles
                </span>
            </Link>
        </>
    );
};

export default ContentsTypeCard;
