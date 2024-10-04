"use client";
import Image from "next/image";
import React, { useState } from "react";
import EyeIcon from "../svgs/eyeIcon";
import { Typography } from "../typogrphy";
import { Button } from "../button";
import CopyIcon from "../svgs/copyIcon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Barcode from "../svgs/barcode";
import RegularModal from "./regular-modal";
import {
  mainTicketDummyProps,
  ticketDummyProps,
} from "../ticketResult/ticketDataResult";
import style from "./regular-style.module.css";
import { updateShowModal } from "@/mainStore/reduxSlices/modalSlice";
import { useDispatch, UseDispatch } from "react-redux";
import BuyTicketModal from "./buy-ticket-modal";

export default function RegularTicket(prop: ticketDummyProps) {
  function formatDate(dateString: any) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const { image, name, category, location, quantity, price, date, modal } =
    prop;
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    dispatch(updateShowModal());
  };
  return (
    <div
      className="relative cursor-pointer opacity-60 transition-transform duration-300 hover:scale-120 hover:opacity-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={style.backdrop}>{isHovered && modal}</div>
      <div className="relative h-[544px] shrink-0 rounded-t-[16px]">
        <Image
          className="absolute object-cover w-full h-full rounded-t-[24px]"
          src={"/Subtract.svg"}
          alt={"image"}
          fill
          priority
        />
        <div className="relative flex flex-col items-start gap-4 h-[224px] px-4 self-stretch">
          {image && (
            <Image
              className="absolute inset-0 w-full h-full object-cover rounded-t-[24px]"
              src={image}
              alt={"image"}
              fill
            />
          )}
        </div>
        <div className="relative flex items-center gap-4 px-[24px] pl-[16px] py-4 self-stretch">
          <div className="flex flex-col items-start gap-4 flex-[1_0_0]">
            <div>
              <Typography customClassName="text-[20px] font-medium leading-[24px] text-[#D9D0FF] font-open-sans">
                {name}
              </Typography>
            </div>
            <div className="flex flex-col gap-2">
              <Typography customClassName="text-[14px] font-semibold leading-[17px] text-[#A0ABBB] font-open-sans">
                STARTS
              </Typography>
              <Typography customClassName="text-[18px] font-medium leading-[21.6px] text-[#E7EAEE] font-open-sans">
                {formatDate(date)}
              </Typography>
            </div>
            <div className="flex flex-col gap-2">
              <Typography customClassName="text-[14px] font-semibold leading-[17px] text-[#A0ABBB] font-open-sans">
                LOCATION
              </Typography>
              <Typography customClassName="text-[18px] font-medium leading-[21.6px] text-[#E7EAEE] font-open-sans">
                {location}
              </Typography>
            </div>
            <div>
              <Typography customClassName="text-[14px] font-semibold leading-[17px] text-[#A0ABBB] font-open-sans">
                TICKET PRICE
              </Typography>
              <Typography customClassName="text-[23px] font-medium leading-[28px] text-[#E7EAEE] font-Ubuntu">
                {price} SOL
              </Typography>
            </div>
          </div>
          <div>
            <Barcode />
          </div>
        </div>
        <div className="relative bottom-0 top-2 border-t border-dashed border-[#64748B] flex py-[20px] px-[10px] justify-center items-center gap-[4px] self-stretch">
          <Typography customClassName="text-[12px] font-medium leading-[15px] text-[#64748B] font-open-sans">
            EVENTMINT
          </Typography>
        </div>
      </div>
    </div>
  );
}
