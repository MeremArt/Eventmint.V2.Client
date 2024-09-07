import React from 'react'
import Image from 'next/image'
import { Typography } from '../typogrphy'
import Guide from './guide'
import HowItworks from "@/component/svgs/NewImages/Desktop-How-It-Works-Blur.png";
import arrow2 from '@/component/svgs/NewImages/arrow2.svg';
import ticket3 from '@/component/svgs/NewImages/ticket3.svg';
import micro4 from '@/component/svgs/NewImages/micro4.svg';
import giving5 from '@/component/svgs/NewImages/giving5.svg';
import coin6 from '@/component/svgs/NewImages/coin6.svg';

export default function FourthSection() {
  return (
    <section className="text-white relative h-full w-full pt-[40px] pb-[4rem] ">
        <Image
          className="absolute mx-auto z-[0] mxs:w-[200px] mxs:h-[200px]"
          src={HowItworks}
          alt="fourthImage"
          fill
        />
        <div className="px-[64px] mxs:px-[16px] mx-auto max-w-[1440px]">
          <div className="mx-auto pb-[3rem]">
            <div className="mx-auto text-center">
              <h2 className="text-h-l font-Ubuntu mmd:text-h-ls mxs:text-h-s">
                How it<span className="text-[#A7FFA7]"> Works</span>
              </h2>
            </div>
            <div className="mx-auto text-center">
              <Typography
                variant="body-l"
                font="Ubuntu"
                customClassName="font-Ubuntu text-center mmd:text-body-m  mxs:text-body-xxsx"
                color="fontBodyMGreyishColor"
              >
                Here’s is a detailed explanation of how EventMint works,
                with a detailed guide to its processes and functionalities
                for seamless event planning
              </Typography>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-3 gap-y-3 mxs:flex mxs:flex-col">
            <Guide header="Sign Up" icon="/signUp.svg" body="Participate in event activities, join group chats, and interact with sponsors" number="1" />
            <Guide header="Browse Events" icon={arrow2} body="Explore upcoming events and select the ones you’re interested in." number="2" /> 
            <Guide header="Puchase Tickets" icon={ticket3} body="Buy your tickets with ease and have them sent to your wallet." number="3" />
            <Guide header="Engage & Interact" icon={micro4} body="Participate in event activities, join group chats, and interact with sponsors" number="4" />
            <Guide header="Earn Rewards" icon={giving5} body="Collect points and rewards for your engagement and activities" number="5" />
            <Guide header="Plan Budgets" icon={coin6} body="Use our budget planning protocol to efficiently manage and allocate event funds" number="6" />
          </div>
        </div>
      </section>

  )
}
