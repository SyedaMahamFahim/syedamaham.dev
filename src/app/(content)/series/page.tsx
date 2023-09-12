import { Text, ContentsTypeTab } from "@/components";
import { HomeArticles } from "@/containers";
import {getSeries} from "@/utils/sanity-utils";
import {WEBSITE_NAME} from '@/constants/_APP_SETUP'
import { Metadata } from "next";

export const metadata: Metadata = {
  title:'Series',
  description: `Dive into tech series by ${WEBSITE_NAME}. Follow our in-depth explorations of coding, data engineering, and more.`,
  keywords: 'tech series, coding, data engineering, in-depth exploration',
};

const Series = async() => {
  const articles= await getSeries()

  return (
    <section className="container px-3 md:pb-20 md:pt-10 pt-20">
      <div className="mt-19">
        <ContentsTypeTab />

        <Text
          title
          className="mb-5 mt-10 dark:text-appRed-100 text-appPurple-100"
        >
          Series 🎢 
        </Text>
        <div className={"flex flex-wrap flex-col"}>
          <HomeArticles isArchive={false} noOfArticle={6} articles={articles}
          isSeries={true} isExternal={false}/>
        </div>
      </div>
    </section>
  );
};

export default Series;
