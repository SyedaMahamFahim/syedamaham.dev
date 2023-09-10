import { getAbout } from "@/utils/sanity-utils";
import { Text, ArticleContent  } from "@/components";
import { Metadata } from "next";
import {META_DESCRIPTION,META_SEO_KEYWORDS} from '@/constants/_APP_SETUP'

export const metadata: Metadata = {
  title:'About',
  description: META_DESCRIPTION,
  keywords: META_SEO_KEYWORDS,
};


const About = async () => {
  const about= await getAbout()
  const getFirstAbout=about[0]
  return (
    <>
      <section className="dark:bg-slate-900 dark:text-white m-4 mt-20">
        <div className="container px-0 md:px-[15px] pt-[10px] pb-[20px]">
         
          <Text
            title
            className="dark:text-appRed-100 text-appPurple-100"
          >
            {getFirstAbout?.title}
            
          </Text>

          <div className="grid">
         
            <ArticleContent ARTICLE_CONTENT={getFirstAbout?.body}/>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
