"use client";

import React, { useState } from "react";
import { Typography } from "@/component/typogrphy";
import Image from "next/image";
import sponsorr from "@/component/svgs/NewImages/boy-dynamic-color.png";
import createEVentt from "@/component/svgs/NewImages/new-folder-dynamic-color.png";
import inEventt from "@/component/svgs/NewImages/chat-text-dynamic-color.png";
import colorSponsor from "@/component/svgs/NewImages/boy-color.png";
import createColor from "@/component/svgs/NewImages/new-folder-color.png";
import isEventColor from "@/component/svgs/NewImages/inevent-color.png";
import TicketContain from "@/component/svgs/NewImages/Ticket-Container.png";

const Page: React.FC = () => {
  const [isPageRoute, setpageRoute] = useState({
    sponsor: false,
    createEvent: false,
    inEvent: false,
  });

  const { sponsor, createEvent, inEvent } = isPageRoute;

  const [clicked, setClicked] = useState("");

  const toSponsorPage = () => {
    setpageRoute({ sponsor: true, createEvent: false, inEvent: false });
    setClicked("sponsor");
  };

  const toCreateEventPage = () => {
    setpageRoute({ sponsor: false, createEvent: true, inEvent: false });
    setClicked("createEvent");
  };

  const toInEventPage = () => {
    setpageRoute({ sponsor: false, createEvent: false, inEvent: true });
    setClicked("inEvent");
  };

  return (
    <div className="h-screen bg-[#191D23] flex items-center justify-center">
      <div className="flex w-[1142px] h-[680px] px-[48px] py-[32px] flex-col justify-center items-center gap-[64px] flex-shrink-0">
        <div>
          <Typography
            variant="h4"
            font="Ubuntu"
            color="fontBodyRGreyishColor"
            customClassName="text-center font-Ubuntu"
          >
            Choose your preferred option
          </Typography>
        </div>
        <div className="flex items-center gap-[64px]">
          {/* Sponsor Card */}
          <div
            className={`group flex w-[280px] py-[40px] flex-col items-center gap-[14px] relative ${
              sponsor
                ? "bg-[var(--Neutral-Neutral-700,#323A46)] rounded-xl shadow-[0px_0px_72px_0px_rgba(0,0,0,0.70)]"
                : ""
            }`}
            onClick={toSponsorPage}
            style={{
              transform: clicked === "sponsor" ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          >
            <Image
              className="absolute z-0"
              src={TicketContain}
              alt="ticket-container"
              fill
            />
            <div>
              <Image
                src={sponsor ? colorSponsor : sponsorr}
                alt="sponsor"
                height={182.857}
                width={182.857}
              />
            </div>
            <div>
              <Typography
                customClassName={`${
                  sponsor
                    ? "text-[var(--Neutral-Neutral-400,#A0ABBB)]"
                    : "text-[var(--Neutral-Neutral-600,#4B5768)]"
                }  text-center font-ubuntu text-[25.6px] font-normal leading-[31.086px]`}
              >
                Sponsor
              </Typography>
            </div>
          </div>

          {/* Create Event Card */}
          <div
            className={`flex w-[280px] py-[40px] flex-col items-center gap-[14px] relative ${
              createEvent
                ? "bg-[var(--Neutral-Neutral-700,#323A46)] rounded-xl shadow-[0px_0px_72px_0px_rgba(0,0,0,0.70)]"
                : ""
            }`}
            onClick={toCreateEventPage}
            style={{
              transform: clicked === "createEvent" ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          >
            <Image
              className="absolute z-0"
              src={TicketContain}
              alt="ticket-container"
              fill
            />
            <div>
              <Image
                src={createEvent ? createColor : createEVentt}
                alt="create event"
                height={182.857}
                width={182.857}
              />
            </div>
            <div>
              <Typography
                customClassName={`${
                  createEvent
                    ? "text-[var(--Neutral-Neutral-400,#A0ABBB)]"
                    : "text-[var(--Neutral-Neutral-600,#4B5768)]"
                } text-center font-ubuntu text-[25.6px] font-normal leading-[31.086px]`}
              >
                Create Event
              </Typography>
            </div>
          </div>

          {/* In Event Card */}
          <div
            className={`flex w-[280px] py-[40px] flex-col items-center gap-[14px] relative ${
              inEvent
                ? "bg-[var(--Neutral-Neutral-700,#323A46)] rounded-xl shadow-[0px_0px_72px_0px_rgba(0,0,0,0.70)]"
                : ""
            }`}
            onClick={toInEventPage}
            style={{
              transform: clicked === "inEvent" ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          >
            <Image
              className="absolute z-0"
              src={TicketContain}
              alt="ticket-container"
              fill
            />
            <div>
              <Image
                src={inEvent ? isEventColor : inEventt}
                alt="in event"
                height={182.857}
                width={182.857}
              />
            </div>
            <div>
              <Typography
                customClassName={`${
                  inEvent
                    ? "text-[var(--Neutral-Neutral-400,#A0ABBB)]"
                    : "text-[var(--Neutral-Neutral-600,#4B5768)]"
                }  text-center font-ubuntu text-[25.6px] font-normal leading-[31.086px]`}
              >
                In-event Chat
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

