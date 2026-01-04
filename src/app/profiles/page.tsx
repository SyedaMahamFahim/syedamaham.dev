import { Text, ProfileLink } from "@/components";
import { Metadata } from "next";
import { WEBSITE_NAME } from "@/constants/_APP_SETUP";
import { SanityDocument } from "@sanity/client";
import { getProfilesQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { AppWrapper } from "@/containers";
export const metadata: Metadata = {
    title: "Profiles",
    description: `Get to know the ${WEBSITE_NAME} team better through our profiles. Explore our expertise in technology, coding, and more.`,
    keywords: `profiles,${WEBSITE_NAME} team, technology, coding expertise`,
};

const Profiles = async () => {
    const profiles = await sanityFetch<SanityDocument>({
        query: getProfilesQuery,
    });
    return (
        <>
            <AppWrapper>
                <div className='container'>
                    <Text
                        title
                        className='mb-5 text-appPurple-100 dark:text-appRed-100'
                    >
                        Profiles
                    </Text>

                    <div className='grid'>
                        {profiles?.length === 0 && <p>No Profiles Found</p>}

                        {/* @ts-ignore */}
                        {profiles?.map((profile: any, index: number) => (
                            <ProfileLink
                                name={profile.name}
                                index={index}
                                key={index}
                                url={profile.url}
                            />
                        ))}
                    </div>
                </div>
            </AppWrapper>
        </>
    );
};

export default Profiles;
