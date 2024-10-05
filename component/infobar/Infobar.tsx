import React from "react";
import onlineIcon from "../icons/onlineIcon.png";
import closeIcon from "../icons/closeIcon.png";
import Image from "next/image";
import { Button } from "../button";
import Door from "../svgs/door";

interface InfoBarProps {
  room: string;
}

const InfoBar: React.FC<InfoBarProps> = ({ room }) => (
  <div className="flex items-center justify-between bg-[#191D23] rounded-t h-15 w-full">
    <div className="flex px-12 py-[1rem] justify-center items-center gap-8 rounded-[24px] bg-[rgba(167,255,167,0.2)]">
      <Image className="mr-5" src={onlineIcon} alt="online icon" />
      <h3 className="text-[#A7FFA7] text-[16px] font-medium leading-[19px]">{room}</h3>
    </div>
    <div className="flex-1/2 flex justify-end mr-5">
      <a href="/">
        <Button
         leftIcon={<Door/>} 
         label="Leave Chat"
         customClassName=" text-white px-[16px] py-[8px] rounded-[12px] border-r-[2px] border-b-[4px] border-l-[2px] border-[#C21417] bg-gradient-to-b from-[#FF6F72] to-[#FC1723]"
         />
      </a>
    </div>
  </div>
);

export default InfoBar;
