import Script from "next/script";

const GoogleAdsAnalytics = () => (
    <>
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GoogleAdsAnalytics_TOKEN}`}
            crossOrigin='anonymous'
        ></Script>
    </>
);
export default GoogleAdsAnalytics;
