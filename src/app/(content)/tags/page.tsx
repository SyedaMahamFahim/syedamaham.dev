import { Text, ContentsTypeTab } from "@/components";
import Link from "next/link";
import {getTags } from "@/utils/sanity-utils";
import {WEBSITE_NAME} from '@/constants/_APP_SETUP'
import { Metadata } from "next";

export const metadata: Metadata = {
  title:'Tags',
  description: `Explore ${WEBSITE_NAME} tagged content. Navigate through our tech insights and coding expertise based on specific tags.`,
  keywords: 'tags, tech insights, coding expertise, specific topics',
};



interface Tag {
  publishedAt: string;
  _createdAt: string;
  _rev: string;
  _type: string;
  _id: string;
  title: string;
  slug: {
    current: string;
  }
  _updatedAt: string;
}


const Tags = async () => {
  const getAllTags: Tag[]=await getTags()
  return (
    <section className="container px-3 md:pb-20 md:pt-10 pt-20">
      <div className="mt-19">
        <ContentsTypeTab />

        <Text
          title
          className="mb-5 mt-10 dark:text-appRed-100 text-appPurple-100"
        >
          Tags 💡
        </Text>
        <div className="flex flex-wrap justify-start items-center">
          {getAllTags?.map((tag, index) => {
            const tagSlug= tag?.slug?.current
            return (
              <Link href={`/tags/${tagSlug}`} key={index} className="m-2">
                <div
                  className={`flex items-center font-semibold py-1 px-2 mx-2 transform transition ease-in-out duration-200 hover:scale-95
                dark:bg-white  bg-slate-900 text-white dark:text-black
                cursor-pointer
                `}
                >
                  <p className="line-clamp-1 uppercase text-sm py-1 px-2">
                    # {tag.title}
                  </p>
                </div>
            </Link>
            );
          })}
         
        </div>
      </div>
    </section>
  );
};

export default Tags;
