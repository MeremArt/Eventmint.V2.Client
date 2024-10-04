import Image from "next/image";
import React from "react";
import EyeIcon from "../svgs/eyeIcon";
import { Typography } from "../typogrphy";
import { Button } from "../button";
import CopyIcon from "../svgs/copyIcon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { mainTicketDummyProps, ticketDummyProps, sponsorDummyProps } from "./ticketDataResult";

export default function SponsorResult(prop: sponsorDummyProps) {
  function formatDate(dateString: string) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }
  const { image, name, location,campaign,gender, price, date, blink } = prop;
  const copyToClipboard = () => {
    if (blink) {
      navigator.clipboard.writeText(blink).then(() => {
        toast("Copied");
      }).catch(() => {
        toast("Failed to copy");
      });
    } else {
      toast("No link available to copy");
    }
  };
  

  const shortenedUrl = `${blink?.slice(0, 20)}...`;
  return (
    <div className="text-white flex w-fit flex-col items-start gap-2 border border-[#323A46] rounded-[24px] bg-[#0D0F11]">
      <div className=" relative flex h-[168px] justify-end items-end gap-1 self-stretch">
      {image && (
          <Image
            className="absolute inset-0 w-full h-full object-cover rounded-t-[24px]"
            src={image}
            alt={"image"}
            fill
          />
        )}
        <div className="absolute bottom-0 w-full h-[56px] px-[16px] py-[8px] justify-end items-center gap-[4px] flex flex-1 bg-black bg-opacity-50 opacity-1 group-hover:opacity-100 transition-opacity duration-300">
          <EyeIcon />
        </div>
      </div>
      <div className="flex px-4 pb-4 pt-0 flex-col items-start gap-2 self-stretch">
        <div className=" flex flex-col items-start gap-2 self-stretch">
          <Typography
            variant="body-xxs"
            font="open-sans"
            customClassName="text-[#D0FFD1]"
          >
            key message
          </Typography>
          <Typography customClassName="text-body-xxsx" font="open-sans">
            {name}
          </Typography>
        </div>
        <div className=" flex flex-col items-start gap-2 self-stretch">
          <Typography
            variant="body-xxs"
            font="open-sans"
            customClassName="text-[#D0FFD1]"
          >
            campaign
          </Typography>
          <Typography customClassName="text-body-xxsx" font="open-sans">
            {campaign}
          </Typography>
        </div>
        <div className=" flex flex-col items-start gap-2 self-stretch">
          <Typography
            variant="body-xxs"
            font="open-sans"
            customClassName="text-[#D0FFD1]"
          >
            Location
          </Typography>
          <Typography customClassName="text-body-xxsx" font="open-sans">
            {location}
          </Typography>
        </div>
        <div className="flex items-start gap-1 self-stretch">
          <div className="flex flex-col items-start gap-2 flex-[1_0_0%]">
            <Typography
              variant="body-xxs"
              font="open-sans"
              customClassName="text-[#D0FFD1]"
            >
              Gender
            </Typography>
            <Typography customClassName="text-body-xxsx" font="open-sans">
              {gender}
            </Typography>
          </div>
          <div className="flex flex-col items-start gap-2 flex-[1_0_0%]">
            <Typography
              variant="body-xxs"
              font="open-sans"
              customClassName="text-[#D0FFD1]"
            >
              Budget
            </Typography>
            <Typography customClassName="text-body-xxsx" font="open-sans">
              {price} SOL
            </Typography>
          </div>
          <div className="flex flex-col items-start gap-2 flex-[1_0_0%]">
            <Typography
              variant="body-xxs"
              font="open-sans"
              customClassName="text-[#D0FFD1]"
            >
              Date
            </Typography>
            <Typography customClassName="text-body-xxsx" font="open-sans">
              {date && formatDate(date)}
            </Typography>
          </div>
        </div>
        <div className=" flex flex-col items-start gap-2 self-stretch">
          <Typography
            variant="body-xxs"
            font="open-sans"
            customClassName="text-[#D0FFD1]"
          >
            Blink URL
          </Typography>
          <div className="flex justify-between items-center gap-2">
            <Typography customClassName="text-body-xxsx" font="open-sans">
              {shortenedUrl}
            </Typography>
            <Button
              rightIcon={<CopyIcon />}
              label="Copy Link"
              fit
              size="total"
              customClassName="text-[#A7FFA7] border border-[#A7FFA7] rounded-[24px] text-small "
              onClick={copyToClipboard}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
