import Link from "next/link";
import { IAuthor } from "@/shared/interfaces";
import AuthorAvatar from "../AuthorAvatar/AuthorAvatar";

const ArticleAuthorCard = ({ author}: { author: IAuthor}) => {
  const wrapperClasses =
    "bg-white dark:bg-slate-800 dark:border-none border-slate-100 shadow-lg border mb-4 mt-2 md:rounded-[8px] px-[15px] py-[10px] mb-[30px] overflow-hidden";
  return (
    <>
      
          <div className={wrapperClasses}>
            <div className="flex items-center">
              <AuthorAvatar 
              author={author}
              height={100}
              width={100}
              quality={100}
              layout='fill'
                            
              className="w-[60px] h-[60px] mr-3 text-xl" />
              <div className="font-semibold">
                <p className={"text-[20px]  mb-0 mt-0"}>{author?.name}</p>
                <p className="text-xs mt-0 mb-0">{author?.designation}</p>
              </div>
            </div>
            <p className="text-base mt-2">
              {author?.bio}
            </p>
            <div className="mt-5 flex justify-start items-center flex-col lg:flex-row">
              <div className="m-4 mr-4 mb-4 ml-0">
                <Link
                  href={`/author/${author?.slug?.current}`}
                  className="w-auto h-auto text-sm py-3 px-4 text-center dark:bg-appPurple-100 bg-appRed-100 rounded-full mx-auto text-white font-bold hover:!text-white dark:hover:!text-slate-400 transition-all transform hover:scale-105 md:px-10"
                >
                  View All My Articles
                  
                </Link>
              </div>
              <div className="m-4 mr-4 mb-4 ml-0">
                <Link
                  href={`/author/profiles/${author?.slug?.current}`}
                  className="
                                w-auto h-auto text-sm py-3 px-4 text-center dark:bg-appRed-100 bg-appPurple-100 rounded-full mx-auto text-white font-bold hover:!text-white dark:hover:!text-slate-400 transition-all transform hover:scale-105 md:px-10"
                >
                  View All My Profiles
                </Link>
              </div>
              <div className="m-4 mr-4 mb-4 ml-0">
                <Link
                  href={`/author/about/${author?.slug?.current}`}
                  className="w-auto h-auto text-sm py-3 px-4 text-center dark:bg-white bg-slate-800 rounded-full mx-auto text-white dark:text-black font-bold hover:!text-white dark:hover:!text-slate-400 transition-all transform hover:scale-105 md:px-10"
                >
                  
                  Learn More About Me
                </Link>
              </div>
            </div>
          </div>
        
    </>
  );
};

export default ArticleAuthorCard;
