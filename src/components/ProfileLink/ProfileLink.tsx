"use client";
import React from "react";
import useDeviceSize from "@/hooks/useDeviceSize";
interface ProfileLinksType {
    name: string;
    index: number;
    url: string;
}

const ProfileLink = ({ name, index, url }: ProfileLinksType) => {
    const deviceSize: any = useDeviceSize();
    return (
        <>
        
            {deviceSize === "desktop" ? (
                <h3 className='my-4 text-md font-semibold leading-tight'>
                    {index}. {name} <span className="opacity-50">{">"}{" "}</span>
                    <a
                        href={url}
                        aria-label={`${url}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-appPurple-100'
                    >
                        {url}
                    </a>
                </h3>
            ) : (
                <a
                    href={url}
                    aria-label={`${url}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='my-4 text-md font-semibold leading-tight'
                >
                    {index}. {name}
                </a>
            )}
        </>
    );
};

export default ProfileLink;
