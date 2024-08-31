import React from "react";
import Image from "next/image";
import { Typography } from "../typogrphy";
import Subscribe from "./subscribe";
import FooterSection from "@/component/svgs/NewImages/Desktop-Footer-Blur.png";

export default function FifthSection() {
  return (
    <section className="relative h-full w-full pb-[72px] ">
      <Image
        className="absolute lg:left-[35%]"
        src={FooterSection}
        alt="fifthBlurImage"
        width={400}
        height={400}
      />
      <div className="px-[64px]  w-full flex items-center gap-[3rem] mx-auto max-w-[1440px] mxs:flex-col-reverse mxs:px-[16px]">
        <div className="flex flex-col gap-[48px] mxs:gap-[32px]  mxs:w-full  lg:w-1/2">
          <div className="flex flex-col gap-4 mxs:gap-2">
            <Image
              src={
                "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1719802304/event-logo_iyl1ec.png"
              }
              className="mxs:w-[120px] mxs:h-[120px] "
              alt="logo"
              width={100}
              height={100}
            />
            <div className="flex items-center gap-4">
              <Image className="mxs:w-[48px] mxs:h-[48px]" src={"/Instagram.svg"} alt="logo" width={56} height={56} />
              <Image className="mxs:w-[48px] mxs:h-[48px]" src={"/twitter.svg"} alt="logo" width={56} height={56} />
              <Image className="mxs:w-[48px] mxs:h-[48px]" src={"/Github.svg"} alt="logo" width={56} height={56} />
              <Image className="mxs:w-[48px] mxs:h-[48px]" src={"/Linkedin.svg"} alt="logo" width={56} height={56} />
            </div>
          </div>
          <div className="flex justify-between  w-full mxs:flex mxs:flex-col mxs:gap-[24px]">
            <div className="flex flex-col gap-4">
              <Typography
                variant="h6"
                color="fontBodyWhiteishColor"
                customClassName="font-Ubuntu mmd:text-h-xxs mxs:text-body-xxss"
              >
                Quick Links
              </Typography>
              <Typography
                variant="body-s"
                color="fontAvatarGreyishColor"
               customClassName="font-open-sas mmd:text-eventMint mxs:text-small"
              >
                Home
              </Typography>
              <Typography
                variant="body-s"
                color="fontAvatarGreyishColor"
                customClassName="font-open-sas mmd:text-eventMint mxs:text-small"
              >
                Features
              </Typography>
              <Typography
                variant="body-s"
                color="fontAvatarGreyishColor"
               customClassName="font-open-sas mmd:text-eventMint mxs:text-small"
              >
                Benefits
              </Typography>
              <Typography
                variant="body-s"
                color="fontAvatarGreyishColor"
                customClassName="font-open-sas mmd:text-eventMint mxs:text-small"
              >
                Events
              </Typography>
            </div>
            <div className="flex flex-col gap-4">
              <Typography
                variant="h6"
                color="fontBodyWhiteishColor"
                customClassName="font-Ubuntu mmd:text-h-xxs mxs:text-body-xxss"
              >
                Legal
              </Typography>
              <Typography
                variant="body-s"
                color="fontAvatarGreyishColor"
                customClassName="font-open-sas mmd:text-eventMint mxs:text-small"
              >
                Terms of Use
              </Typography>
              <Typography
                variant="body-s"
                color="fontAvatarGreyishColor"
                customClassName="font-open-sas mmd:text-eventMint mxs:text-small"
              >
                Privacy Policy
              </Typography>
            </div>
            <div className="flex flex-col gap-4">
              <Typography
                variant="h6"
                color="fontBodyWhiteishColor"
                 customClassName="font-Ubuntu mmd:text-h-xxs mxs:text-body-xxss"
              >
                Need Help?
              </Typography>
              <Typography
                variant="body-s"
                color="fontAvatarGreyishColor"
                 customClassName="font-open-sas mmd:text-eventMint mxs:text-small"
              >
                Contact Support
              </Typography>
              <Typography
                variant="body-s"
                color="fontAvatarGreyishColor"
                customClassName="font-open-sas mmd:text-eventMint mxs:text-small"
              >
                Help Center
              </Typography>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2  mxs:w-full">
          <Subscribe />
        </div>
      </div>
    </section>
  );
}
