import { Text, ArticleContent } from "@/components";
import { Metadata } from "next";
import { META_DESCRIPTION, META_SEO_KEYWORDS } from "@/constants/_APP_SETUP";
import Image from "next/legacy/image";
import ChildHoldPalestiniFlag from "./images/child-hold-palestini-flag.jpg";
import FreePalestinCollage from './images/FreePalestinCollage.png'
import FreePalestineCollage2 from './images/FreePalestineCollage2.png'

export const metadata: Metadata = {
    title: "Free Palestine",
    description: META_DESCRIPTION,
    keywords: META_SEO_KEYWORDS,
};

const FreePalestine = async () => {
    return (
        <>
            <section className='m-4 mt-20 dark:bg-slate-900 dark:text-white'>
                <div className='container px-0 pb-[20px] pt-[10px] md:px-[15px]'>
                    <Text
                        title
                        className='text-appPurple-100 dark:text-appRed-100'
                    >
                        Free Palestine
                    </Text>

                    <div className='grid'>
                        <div className='dark:text-gray-300'>
                            <p className='my-8 text-lg'>
                            Many companies show support for a country during wars and put it on their websites. I thought, why not do the same? I want to support my beloved Muslim country, Palestine. They are going through a tough time, people are suffering and dying. That is why I am showing my support on my website. I believe it is important to express solidarity through my own platfrom.
                            </p>
                            <p className='my-8 text-lg'>
                            The world is divided into two parts: Palestinian Supporters and Israeli Supporters. I am a <strong>Palestinian Supporter</strong>. If you support Israel, feel free to express your support. I am not here to argue; everyone has different perspectives, and thats okay. On this platform, I will share pictures and other content that are extremely important to bring awareness to the world.
                            </p>
                            <div className='flex flex-col justify-center'>
                                <Image
                                    alt={"child-hold-palestini-flag"}
                                    loading='lazy'
                                    src={ChildHoldPalestiniFlag}
                                    height={400}
                                    width={600}
                                    objectFit='contain'
                                />

                                <i className='flex justify-center text-center text-gray-600'>
                                Small girl from Palestine holding Palestinian flag.
                                </i>
                            </div>
                            <p className='my-8 text-lg'>
                            The Western media does not show the whole truth. Pictures and stuff that reveal how badly Palestinians are being hurt during the war are getting deleted on different platforms. I have seen thousands of pictures since I was a kid about Palestinians, and there is never been peace in Gaza. The Western media does not really share that
                            </p>
                            <p className='my-8 text-lg'>
                            Here are some pictures that I put together in a collage. I hope you will realize how badly Palestini is being hurt and killed

</p>
                            <div className='flex flex-col justify-center'>
                                <Image
                                    alt={"child-hold-palestini-flag"}
                                    loading='lazy'
                                    src={FreePalestinCollage}
                                    height={768}
                                    width={1366}
                                    objectFit='contain'
                                />

                                <i className='flex justify-center text-center text-gray-600'>
                                Some different pictures of Palestinian children during the war.
                                </i>
                            </div>
                            <p className='my-8 text-lg bold'>
                                <i>
                            <strong>Imagine your children here. They are fighting for their country. They are fighting for their lives. They are dyinggggggg</strong> </i>
                            </p>
                            <div className='flex flex-col justify-center'>
                                <Image
                                    alt={"child-hold-palestini-flag"}
                                    loading='lazy'
                                    src={FreePalestineCollage2}
                                    height={768}
                                    width={1366}
                                    objectFit='contain'
                                />

                                <i className='flex justify-center text-center text-gray-600'>
                                A girl is holding her little brother and shouting desperately.
                                </i>
                            </div>
                            <p className='my-8 text-lg bold'>
                            A girl is holding her little brother and shouting desperately. Her scream has the power to shake the world. This video can literally make you cry. The world is cruel. Just imagine a little girl looking at the sky and asking God for help. Her single scream can make the whole world shake. Have you ever wondered why tragedies are so common? Natural disasters are becoming very common. How can they not be? How can people live in peace when little girls in Palestine are crying like that? </p>
                            <p className='my-8 text-lg bold'>
                            I am not here to argue or defend the entire country for Palestinians; I just want a separate individual country for Palestinian people where they can express their support. I just want peace. I just want peace for both people. I just do not want any children to die. Please, open your mind. They are dying. All over the world, only Muslims are dying, whether it is in Kashmir, Iran, Iraq, Palestine, or any other Muslim country with oil or gas. Just think about it; if there is oil or gas, then it must be considered a terrorist country for the West, WHYYYYYYY, THINK ABOUT IT</p>
                            <p className='my-8 text-lg bold'>
                            Instead of believing the media, please search for yourself. Do you believe children deserve to die? Search; there are many children who have lost their lives since 2000. Please open your mind and search. Sit in a quiet place and think about what is going on. This is all I want to say. You may agree or not, but think from your heart and see what is actually happening right now, whether it is right or wrong. Do not watch nonsense from Western media</p>
                            <p className='my-8 text-lg bold'>
                            <i>
                            <strong>Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine,Free Palestine</strong> </i></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FreePalestine;
