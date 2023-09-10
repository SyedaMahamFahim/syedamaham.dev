import React from 'react';

function ArticleCardSkeleton() {
  return (
    <div className="w-full lg:w-1/3 md:w-1/2 md:px-[15px] px-2 mb-[30px] h-fit "
    
    >
      <div className="border-b-[5px] border-gray-300 dark:bg-slate-800 dark:text-white dark:drop-shadow-lg flex flex-col justify-between pb-5">
        <div>
          <div className="rounded-t-[4px] overflow-hidden h-[200px] bg-gray-300 animate-pulse"></div>
          <div className="d-block px-[15px] py-0">
            <p className="font-bold text-xs pt-3 mb-0 md:mb-3 text-gray-300 animate-pulse">
              &nbsp;
            </p>
            <div className="bg-gray-300 animate-pulse">
              <h1 className="text-[16px] font-bold cursor-pointer tracking-wide hover:text-appPurple-100 transition-colors duration-300 md:text-[22px]">
                &nbsp;
              </h1>
            </div>
            <p className="text-sm font-normal mt-2 md:mt-1 bg-gray-300 animate-pulse">
              &nbsp;
            </p>
            {/* Add placeholder for tags */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCardSkeleton;
