/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";
import {WEBSITE_NAME} from '@/constants/_APP_SETUP'

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/*";


export default async function og() {

    return new ImageResponse(
        (
            <div tw='relative flex items-center justify-center'>
                <img
                    src={`https://cdn.hashnode.com/res/hashnode/image/upload/v1683461988611/11b80afd-04fc-4eca-9c9b-a8792cdbd400.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp`}
                    alt={WEBSITE_NAME}
                />
            </div>
        )
    );
}
