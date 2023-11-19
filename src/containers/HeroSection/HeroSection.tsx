import React from "react";
import { ContentsTypeCard, MyInfoCard } from "@/components/index";
import Image from "next/legacy/image";
import PalestinFlag from '../../app/free-palestine/images/Palestine.jpg'
import Link from "next/link";


const HeroSection = () => {
  return (
    <>
     
     <section className="w-full md:pt-[100px] md:pb-[70px] pt-[90px] pb-20 mb-10 dark:bg-slate-800 bg-slate-200">
     
          <div className="container px-3">
         <div  className="flex flex-wrap items-start md:flex-nowrap justify-center">
         <Link href="/free-palestine">
          <h1 className='mb-5 px-3 text-xl font-bold md:text-3xl text-center cursor-pointer'>
                                I 
                                <strong style={{
                                  color:"#149954"
                                }}> SUPPORT</strong>  
                                <strong className="text-appRed-100"> PALESTINE</strong> | 
                                READ WHY
                            </h1></Link>
                            <Image
                                    alt={"palestini-flag"}
                                    loading='lazy'
                                    src={PalestinFlag}
                                    height={40}
                                    width={40}
                                    objectFit='contain'
                                />
</div>

            <div className="flex flex-wrap md:flex-nowrap justify-center items-center">
            
              <div className="flex flex-col md:items-center justify-between h-full shadow-sm bg-white  dark:bg-slate-900 dark:text-white text-black rounded-lg">
                <MyInfoCard />
              </div>

              <div className="flex flex-col md:flex-row md:items-center mt-5 md:mt-0">
                <div className="flex justify-center mt-5 flex-wrap ">
                  <ContentsTypeCard />
                </div>
              </div>
            </div>
          </div>
        </section>
      
    </>
  );
};

export default HeroSection;
