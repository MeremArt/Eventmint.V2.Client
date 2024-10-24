"use client";
import React, { useEffect } from "react";
import { ticketDummy } from "@/component/ticketResult/ticketDataResult";
import TicketResult from "@/component/ticketResult";
import RegularTicket from "@/component/regular-ticket";
import RegularModal from "@/component/regular-ticket/regular-modal";
import { useDispatch } from "react-redux";
import { updateShowModal } from "@/mainStore/reduxSlices/modalSlice";
import axios from "axios";
const Page: React.FC = () => {
  const dispatch = useDispatch();
  const showModal = () => {
    dispatch(updateShowModal());
  };

  return (
    <div className="w-full h-full text-white">
      <div className="flex items-center content-center gap-6 self-stretch flex-wrap">
        {ticketDummy.map((item: any, index: any) => (
          <RegularTicket
            key={index}
            image={item.image}
            name={item.name}
            category={item.category}
            location={item.location}
            quantity={item.quantity}
            price={item.Amount}
            date={item.date}
            blink={item.blink}
            modal={<RegularModal onClick={showModal} />}
          />
        ))}
      </div>
    </div>
  );
};
//test

export default Page;
