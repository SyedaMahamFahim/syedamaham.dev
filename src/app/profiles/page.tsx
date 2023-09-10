import { getProfiles } from "@/utils/sanity-utils";
import { Text, ProfileLink } from "@/components";
import { Metadata } from "next";
import {WEBSITE_NAME} from '@/constants/_APP_SETUP'

export const metadata: Metadata = {
  title:'Profiles',
  description: `Get to know the ${WEBSITE_NAME} team better through our profiles. Explore our expertise in technology, coding, and more.`,
  keywords: `profiles,${WEBSITE_NAME} team, technology, coding expertise`,
};

interface Profile {
  name: string;
  url: string;
}
const Profiles = async () => {
  const profiles: Profile[] = await getProfiles();
  return (
    <>
      <section className="dark:bg-slate-900 dark:text-white my-14 mx-4">
        <div className="container px-0 md:px-[15px] pt-[10px] pb-[20px]">
        
          <Text
            title
            className="mb-5 mt-10 dark:text-appRed-100 text-appPurple-100"
          >
            Profiles
          </Text>

          <div className="grid">
            {
              profiles?.map((profile,index)=><ProfileLink
              name={profile.name}
              index={index}
              key={index}
              url={profile.url}
              />) 
            }
           
          </div>
        </div>
      </section>

     
    </>
  );
};

export default Profiles;
