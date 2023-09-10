import React from "react";
import "./Loader.module.css";
const Loader = () => {
    return (
        <div className='flex items-center justify-center flex-col mt-20'>
            <div className='flex justify-center'>
                <span className='circle animate-loader dark:bg-appPurple-100'></span>
                <span className='circle animate-loader animation-delay-200 dark:bg-appPurple-100'></span>
                <span className='circle animate-loader animation-delay-400 dark:bg-appPurple-100'></span>
            </div>
            
            <h2 className='text-2xl'>Data is Loading, Please wait</h2>
        </div>
    );
};

export default Loader;
