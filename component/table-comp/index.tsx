import React from "react";
import { Typography } from "@/component/typogrphy";
import { Button } from "../button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CopyIcon from "@/component/svgs/copyIcon";

type TableCompProps = {
  pitchDeckObject?: any[]; 
};

export default function TableComp(prop: TableCompProps) {
  const { pitchDeckObject } = prop;

  const copyToClipboard = (blink: string) => {
    if (blink) {
      navigator.clipboard.writeText(blink)
        .then(() => {
          toast("Copied");
        })
        .catch(() => {
          toast("Failed to copy");
        });
    } else {
      toast("No link available to copy");
    }
  };

  return (
    <div className="w-full">
      <div className="flex gap-11 h-16 px-8 py-4 items-center self-stretch border w-full">
        <div>
          <Typography customClassName="text-[#D0FFD1] font-Ubuntu text-[23px] font-medium leading-[28px]">
            Ad url
          </Typography>
        </div>
      </div>
      {pitchDeckObject?.map((el, index) => (
        <div key={index} className="flex p-4 gap-11 w-full items-center self-stretch border border-[#DFDFDF]">
          <div className="flex items-center justify-center">
            <Typography customClassName="text-[#F7F8F9] font-open-sans text-[18px] font-medium leading-[21.6px]">
              {el}
            </Typography>
          </div>
          <Button
            rightIcon={<CopyIcon />}
            label="Copy Link"
            fit
            size="total"
            customClassName="text-white border border-[#A7FFA7] rounded-[24px]"
            onClick={() => copyToClipboard(el)} 
          />
        </div>
      ))}
      <ToastContainer /> 
    </div>
  );
}

export function shortenString(str: string | undefined) {
  if (str && str.length > 5) {
    return str.slice(0, 5) + "...";
  }
  return str; // Return the string as is if it's shorter than 5 characters
}
