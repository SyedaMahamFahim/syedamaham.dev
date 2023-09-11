"use client";
import { BsLinkedin, BsLink45Deg, BsXLg } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillFacebook } from "react-icons/ai";
import { WEBSITE_URL } from "@/constants/_APP_SETUP";
import { combineClasses } from "@/utils/utils";
import { useEffect, useState } from "react";
import { GAEvent } from "@/google";
import useDeviceSize from "@/hooks/useDeviceSize";

const SocialShare = () => {
  const deviceSize: any = useDeviceSize();

  const url =
    typeof window !== "undefined" ? window.location.href : WEBSITE_URL;

  const twitterShare = `http://twitter.com/share?text=Check out this article!! &url=${url}&hashtags=webdevelopment,javacript,javascriptdaily,webdevelopmenttutorial,tutorial`;
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const linkedinShare = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=Check out this article!!&source=LinkedIn`;

  const trackShareEvent = (social: string) => {
    GAEvent({
      action: "share_clicked",
      event_category: "click",
      label: social,
      value: null,
    });
  };
  const [showCopiedAlert, setShowCopiedAlert] = useState(false);

  const copyLink = () => {
    if (typeof window !== "undefined" && navigator) {
      navigator.clipboard.writeText(url);
      setShowCopiedAlert(true);
    }
    trackShareEvent("copy_clipboard_clicked");
  };


  useEffect(() => {
    if (showCopiedAlert) {
      setTimeout(() => {
        setShowCopiedAlert(false);
      }, 1000);
    }
  }, [showCopiedAlert]);

  const inlineWrapper= deviceSize === "desktop" ? "12%" :"1px"
  const wrapper =
    deviceSize === "desktop"
      ? "fixed right-12 top-1/2 transform -translate-y-1/2 flex flex-col "
      : "flex flex-wrap items-center";

  const onShare = (
    nameShare: string,

    cssStyle: string,
    shareEvent: string
  ): boolean => {
    window.open(nameShare, "popup", cssStyle);
    trackShareEvent(shareEvent);
    return false;
  };

  return (
    <>
      <div className={wrapper}
      style={{
        right:inlineWrapper
      }}
      >
        <p className={`${deviceSize !== "desktop" && "hidden"}`}>Share</p>
        <a
           className={`m-2 p-2 ${deviceSize && "rounded-full border-2"}`}
          aria-label="facebook-share"
          href={facebookShare}
          onClick={() =>
            onShare(
              facebookShare,
              "width=300,height=500",
              "facebook_share_clicked"
            )
          }
          target="popup"
          title="Share on Facebook"

        >
          <AiFillFacebook className="text-[26px]" />
        </a>
        <a
          className={`m-2 p-2 ${deviceSize && "rounded-full border-2"}`}
          aria-label="twitter-share"
          href={twitterShare}
          onClick={() =>
            onShare(
              twitterShare,
              "width=600,height=500",
              "twitter_share_clicked"
            )
          }
          target="popup"
          title="Share on Twitter"
        >
          <AiFillTwitterCircle className="text-[26px]" />
        </a>
        <a
        
          className={`m-2 p-2 ${deviceSize && "rounded-full border-2"}`}
          aria-label="linkedin-share"
          href={linkedinShare}
          onClick={() =>
            onShare(
              linkedinShare,
              "width=600,height=500",
              "linkedin_share_clicked"
            )
          }
          title="Share on Linkedin"
          target="popup"
        >
          <BsLinkedin className="text-[23px]" />
        </a>
        <button
          className={`m-2 p-2 ${deviceSize && "rounded-full border-2"}`}
          name="copy-link"
          aria-label="copy-link"
          onClick={copyLink}
          title="Copy Link"
        >
          <BsLink45Deg className="text-[26px]" />
        </button>
      </div>
      <div
        className={combineClasses(
          "bg-[#f5f7fa] border border-appRed-100 text-appRed-100 px-4 py-3 rounded z-[9999] fixed flex transition-all right-[10px]",
          showCopiedAlert
            ? "bottom-[10%] opacity-100"
            : "-bottom-20 opacity-0"
        )}
        role="alert"
      >
        <strong className="font-bold">Link Copied</strong>
        <span className="pl-5">
          <BsXLg className="pt-1 text-[18px] cursor-pointer" />
        </span>
      </div>
    </>
  );
};

export default SocialShare;
