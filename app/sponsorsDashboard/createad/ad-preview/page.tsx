"use client";
import { Button } from "@/component/button";
import ArrowLeft from "@/component/svgs/arrowLeft";
import { Typography } from "@/component/typogrphy";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { sponsorTicketAction } from "@/mainStore/reduxSlices/sponsorticketdetails";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useWallet } from "@solana/wallet-adapter-react";
import { addEvent, clearEvents } from "@/mainStore/reduxSlices/sponsorAddEvent";
import cloudinaryInstance from "../../../../lib/cloudinary.configs";

export default function Page() {
  const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/dtfvdjvyr/image/upload`;
  const UPLOAD_PRESET = "ml_default"; // Replace with your Cloudinary upload preset
  const router = useRouter();
  const { publicKey } = useWallet();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<Boolean | undefined>(false);
  const placeholder = "/placeholder.jpg";
  const ticketState = useSelector((state: any) => state.sponsorTicketDetail);
  const [getUserid, setGetUserid] = useState<string | null>("");
  const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API;


  

  interface cloudinaryInstance {
    CLOUD_NAME: string;
    API_KEY_CLOUD: Number;
    API_KEY_SECRET: any;
    upload: any;
  }
  useEffect(() => {
    const getUserId = localStorage.getItem("publicKey");
    setGetUserid(getUserId);
  }, []);

  const {
  
    ticketDescription,
    category,
    amount,
    image,
    imageUrl,
    imageName,
    location,
    industry,
    date,
    KeyMessage
  } = ticketState;

  const checkstate = () => {
    return (
      KeyMessage &&
      ticketDescription &&
      category &&
      amount > 0 &&
      image &&
      imageName &&
      location &&
      date
    );
  };

  const getState = checkstate();

  const submitEventForm = async () => {
    setLoading(true);
    if (!getState) {
      console.error("Validation failed");
      setLoading(false);
      toast.error("nothing to send");
      return;
    }

    const _id = publicKey?.toString()
    console.log(publicKey?.toString(), "publickey");

    const formObject = {
      keymessage: KeyMessage,
      image: imageUrl,
      industry:industry,
      campaign:ticketDescription,
      gender: category,
      budget: amount,
      location: location,
      date: date,
    };

    try {
      const response = await axios.post(
        `${BACKEND_API}api/v1/sponsor/${getUserid}`,
        formObject,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
        console.log(response, 'let me see resres')
      const { sponsor, blink, message } = response.data;
      dispatch(addEvent({ sponsor, blink }));
      dispatch(sponsorTicketAction.resetTicketDetails());
      router.push("/sponsorsDashboard/tickets");
      setLoading(false);
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err: any) {
      const errorMessage = err?.message;
      console.log(err, "LETS SEE");

      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
      });
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="px-[32px] w-full flex gap-[48px]">
        <div className="w-1/2 flex flex-col items-start gap-[24px] py-[16px] flex-[1_0_0%] rounded-[16px] bg-[#191D23]">
          <div className="flex flex-col items-start gap-[16px] self-stretch px-[16px] pb-[16px] border-b border-[#323A46]">
            <Typography customClassName="text-body-xxsx font-open-sans text-[#64748B]">
            KeyMessage
            </Typography>
            <Typography customClassName="text-body-s font-open-sans text-[#E7EAEE]">
              {KeyMessage}
            </Typography>
          </div>
          <div className="flex flex-col items-start gap-[16px] self-stretch px-[16px] pb-[16px] border-b border-[#323A46]">
            <Typography customClassName="text-body-xxsx font-open-sans text-[#64748B]">
              Ad Campaign
            </Typography>
            <Typography customClassName="text-body-s font-open-sans text-[#E7EAEE]">
              {ticketDescription}
            </Typography>
          </div>
          <div className="flex flex-col items-start gap-[16px] self-stretch px-[16px] pb-[16px] border-b border-[#323A46]">
            <Typography customClassName="text-body-xxsx font-open-sans text-[#64748B]">
              Industry
            </Typography>
            <Typography customClassName="text-body-s font-open-sans text-[#E7EAEE]">
              {industry}
            </Typography>
          </div>
          <div className="flex flex-col items-start gap-[16px] self-stretch px-[16px] pb-[16px] border-b border-[#323A46]">
            <Typography customClassName="text-body-xxsx font-open-sans text-[#64748B]">
              Budget
            </Typography>
            <Typography customClassName="text-body-s font-open-sans text-[#E7EAEE]">
              {amount} SOL
            </Typography>
          </div>
          <div className="flex flex-col items-start gap-[16px] self-stretch px-[16px] pb-[16px] border-b border-[#323A46]">
            <Typography customClassName="text-body-xxsx font-open-sans text-[#64748B]">
              Gender
            </Typography>
            <Typography customClassName="text-body-s font-open-sans text-[#E7EAEE]">
              {category}
            </Typography>
          </div>
          <div className="flex flex-col items-start gap-[16px] self-stretch px-[16px] pb-[16px] border-b border-[#323A46]">
            <Typography customClassName="text-body-xxsx font-open-sans text-[#64748B]">
              Location
            </Typography>
            <Typography customClassName="text-body-s font-open-sans text-[#E7EAEE]">
              {location}
            </Typography>
          </div>
          <div className="flex flex-col items-start gap-[16px] self-stretch px-[16px] pb-[16px]">
            <Typography customClassName="text-body-xxsx font-open-sans text-[#64748B]">
              Date
            </Typography>
            <Typography customClassName="text-body-s font-open-sans text-[#E7EAEE]">
              {date}
            </Typography>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-4 items-start">
          <div>
            <Typography customClassName="text-body-xxsx font-open-sans text-[#64748B]">
              Ticket Image
            </Typography>
          </div>
          <div className="relative max-w-[400px] group max-h-[400px]">
            <Image
              className="relative rounded-[16px]"
              src={image ? image : placeholder}
              alt="ticket image"
              width={400}
              height={400}
            />
            <div className="absolute bottom-0 rounded-b-[16px] w-full h-[56px] px-[16px] py-[8px] justify-end items-center gap-[4px] flex flex-1 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Typography customClassName="text-body-xxsx font-open-sans text-[#E7EAEE]">
                {imageName}
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-end px-[24px] pt-[24px] pb-[32px] gap-[16px]">
        <Button
          leftIcon={<ArrowLeft />}
          label="Back"
          fit
          customClassName="font-open-sas text-body-s text-[#323A46]"
          size="smaller"
          onClick={() => router.push("/dashboard/create-ticket/ticket-details")}
        />
        <Button
          label="Submit"
          customClassName="text-body-xxs font-open-sans bg-gradient-to-b-custom rounded-[12px]"
          size="smaller"
          fit
          onClick={submitEventForm}
          loading={Boolean(loading)}
        />
      </div>
    </div>
  );
}
