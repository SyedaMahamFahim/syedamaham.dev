import { Text, ProfileLink } from "@/components";
import { SanityDocument } from "@sanity/client";
import { getAuthorProfilesQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const author = await sanityFetch<SanityDocument>({
    query: getAuthorProfilesQuery,
    params,
  });
  if (!author)
    return {
      title: "Not Found",
      description: "The page is not found",
    };

  return {
    title: author?.name,
    description: author?.meta_description,
  };
}


const AuthorProfiles = async ({ params }: Props ) => {
  const authorProfile=await sanityFetch<SanityDocument>({
    query: getAuthorProfilesQuery,
    params,
  });
  return (
    <>
      

      <section className="dark:bg-slate-900 dark:text-white my-14 mx-4">
        <div className="container px-0 md:px-[15px] pt-[10px] pb-[20px]">
        
          <Text
            title
            className="mb-5 mt-10 dark:text-appRed-100 text-appPurple-100"
          >
            {authorProfile?.name} Profiles
          </Text>

          <div className="grid">
       
            {authorProfile?.profiles?.map((profile: { platform: string; url: string; }, index: number) => (
              <ProfileLink
                name={profile.platform}
                index={index}
                key={index}
                url={profile.url}
              />
            ))}
           
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthorProfiles;
