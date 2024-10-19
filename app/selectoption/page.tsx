"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Typography } from "@/component/typogrphy";
import Image from "next/image";
import sponsorr from "@/component/svgs/NewImages/boy-dynamic-color.png";
import colorSponsor from "@/component/svgs/NewImages/boy-color.png";
import TicketContain from "@/component/svgs/NewImages/Ticket-Container.png";
import noSuitMan from "@/component/svgs/NewImages/noColorSuitMan.svg";
import yesSuitMan from "@/component/svgs/NewImages/pngSuitMan.png";
import Folder from "@/component/svgs/NewImages/colorFolder.png";
import noFolder from '@/component/svgs/NewImages/noColorFolder.png';


const Page: React.FC = () => {
  const router = useRouter();
  const [isPageRoute, setpageRoute] = useState({
    sponsor: false,
    createEvent: false,
    inEvent: false,
  });

  const { sponsor, createEvent, inEvent } = isPageRoute;

  const [hovered, setHovered] = useState("");

  const handleMouseEnter = (route: string) => {
    setpageRoute({
      sponsor: route === "sponsor",
      createEvent: route === "createEvent",
      inEvent: route === "inEvent",
    });
    setHovered(route);
  };

  const handleMouseLeave = () => {
    setHovered("");
  };

  return (
    <div className="h-full bg-[#191D23] flex items-center justify-center">
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
            onMouseEnter={() => handleMouseEnter("sponsor")}
            onMouseLeave={handleMouseLeave}
            onClick={() => router.push("/sponsorsDashboard/createad")}
            style={{
              transform: hovered === "sponsor" ? "scale(1.1)" : "scale(1)",
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
                src={sponsor ? yesSuitMan : noSuitMan}
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
            onMouseEnter={() => handleMouseEnter("createEvent")}
            onMouseLeave={handleMouseLeave}
            onClick={() => router.push('/dashboard')}
            style={{
              transform: hovered === "createEvent" ? "scale(1.1)" : "scale(1)",
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
                src={createEvent ? Folder : noFolder}
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
                Event Manager
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
            onMouseEnter={() => handleMouseEnter("inEvent")}
            onMouseLeave={handleMouseLeave}
            onClick={() => router.push("/regular-user")}
            style={{
              transform: hovered === "inEvent" ? "scale(1.1)" : "scale(1)",
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
                src={inEvent ? colorSponsor : sponsorr}
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
                Regular User
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
