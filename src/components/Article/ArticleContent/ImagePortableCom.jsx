import React from 'react'
import { urlFor } from "@/utils/sanity-utils";
import Image from "next/legacy/image";

const ImagePortableCom = ({ value }) => {
    if (!value?.asset?._ref) {
        return value;
    }
    return (
        <>
            <div className='flex justify-center flex-col'>
               
                <div className="w-full relative pt-[50%]">
                    <Image
                        alt={value.alt || "Image"}
                        loading="lazy"
                        src={`${urlFor(value)}`}
                        // objectFit="cover"
                        // layout="fill"
                        objectFit='contain'
                    layout='fill'
                    className='h-auto w-full'
                    />
                </div>
                <i className='text-gray-600 flex justify-center text-center'>{value.alt || "Blog Content Image"}</i>


            </div>
        </>
    );
}

export default ImagePortableCom