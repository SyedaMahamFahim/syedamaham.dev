import { Text, ContentsTypeTab } from "@/components";
import {WEBSITE_NAME} from '@/constants/_APP_SETUP'
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { getOpenSourceQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import {OpenSourceSection} from "@/containers"

export const metadata: Metadata = {
  title:'Open Source Projects',
  description: `Explore ${WEBSITE_NAME} open-source contributions. Discover valuable resources, tools, and projects for the tech community`,
  keywords: 'open-source, contributions, resources, tools, projects, tech community',
};

const OpenSource = async () => {

  const openSourceProjects= await sanityFetch<SanityDocument>({
    query: getOpenSourceQuery,
});
  return (
    <>
    
      <section className="container px-3 md:pb-20 md:pt-10 pt-20">
        <div className="mt-19">
          <ContentsTypeTab />

          <Text
            title
            className="mb-5 mt-10 dark:text-appRed-100 text-appPurple-100"
          >
            Open Source 🔓 
          </Text>
          <OpenSourceSection
          OS={openSourceProjects}
          noOfOS={3}
          />
        </div>
      </section>
    </>
  );
};

export default OpenSource;
