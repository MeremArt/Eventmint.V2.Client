'use client'

import React, { useState } from 'react'
import NavBar from '../navBar';
import FirstHero from './firstHero';
import SmallNavBar from '../smallNavBar';

type OpenHandlerProps ={
    openHandler : ()=> void;
}

export default function FirstSection({openHandler}:OpenHandlerProps) {

  const [isSmallNav , setIsSmallNav] = useState(false);
const CloseHandler =()=>{
  setIsSmallNav((prev)=> !prev)
}
const OpenHan = () =>{
  setIsSmallNav((prev)=> !prev)
}
  return (
    <section className="mx-auto h-full relative">
        <div className="py-[16px] mxs:py-0 relative ">
          <NavBar openModal={openHandler} openSmallNav={OpenHan}/>
        </div>
        {isSmallNav && <SmallNavBar onClick={CloseHandler}/>}
        <div className="p-[64px] mxs:px-[16px] mxs:py-[16px] mx-auto max-w-[1440px]">
          <FirstHero openModal={openHandler} />
        </div>

      </section>
  )
}
