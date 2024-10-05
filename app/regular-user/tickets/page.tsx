"use client";

import RegularTicket from "@/component/regular-ticket";
import React, { useEffect, useState } from "react";
import { ticketDummy } from "@/component/ticketResult/ticketDataResult";
import axios from "axios";

import BuyTicketModal from '@/component/regular-ticket/buy-ticket-modal';
import { useDispatch } from "react-redux";
import { updateShowModal } from "@/mainStore/reduxSlices/modalSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ColorRing } from "react-loader-spinner";

const Page: React.FC = () => {
  const dispatch = useDispatch();
  const showModal = () => {
    window.location.href = 'https://exchange.mercuryo.io/?fiat_currency=NGN&currency=USDT&amount=200&type=sell';
  };
  
  const [getEvents, setGetEvents] = useState<any[]>([]);

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        const response = await axios.get(
          "https://procyon-labs-server.onrender.com/api/v1/event/getevents"
        );
        const { events, message } = response.data;
        console.log(response.data);
        setGetEvents((prevEvents: any[]) => [...prevEvents, ...events]);
        toast.success(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (err) {}
    };
    getAllEvents();
  }, []);

  return (
    <div className=" w-full h-full text-white">
      {getEvents.length > 0 ? (
        <div className="flex  items-center content-center gap-6 self-stretch flex-wrap">
          {getEvents.map((item: any, index: any) => (
            <RegularTicket
              key={index}
              image={item.image}
              name={item.name}
              category={item.category}
              location={item.location}
              quantity={item.quantity}
              price={item.price}
              date={item.date}
              blink={item.blink}
              modal={<BuyTicketModal onClick={showModal} />}
             
            />
          ))}
        </div>
      ) : (
        <div className="w-full flex items-center justify-center h-screen">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      )}
    </div>
  );
};

export default Page;
