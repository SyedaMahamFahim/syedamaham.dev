import { Text, ContentsTypeTab,ArticleAuthorCard } from "@/components";
import {getAuthors} from "@/utils/sanity-utils";
import { IAuthor } from "@/shared/interfaces";
import { Metadata } from "next";
import {WEBSITE_NAME} from '@/constants/_APP_SETUP'

export const metadata: Metadata = {
  title:'Authors',
  description: `Discover the collective expertise of ${WEBSITE_NAME}' authors. Explore insights, articles, and tech perspectives from our diverse team`,
  keywords: 'authors, collective expertise, insights, articles, tech perspectives, diverse team',
};

const Authors = async () => {
  const authors:IAuthor[] = await getAuthors()
  return (
    <section className="container px-3 md:pb-20 md:pt-10 pt-20">
      <div className="mt-19">
        <ContentsTypeTab />

        <Text
          title
          className="mb-5 mt-10 dark:text-appRed-100 text-appPurple-100"
        >
          Authors 🎨 
        </Text>
        <div className="flex flex-wrap justify-start items-center">
          {
            authors?.map((author,index)=> <ArticleAuthorCard
            author={author} key={index}
            />)
          }
         
         
        </div>
      </div>
    </section>
  );
};

export default Authors;
