import Image from 'next/image'
import React from 'react'
import xcancel from '@/component/svgs/NewImages/xcancel.svg';
import EventMintLogo from '@/component/svgs/NewImages/EventMintLogo.svg';

type smallNavProps = {
    onClick : () => void;
}
export default function SmallNavBar({onClick}:smallNavProps) {
  return (
    <div className='fixed top-0 left-0 w-full bg-black bg-opacity-1 z-10 animate-slide-up-fade-in'>
        <div className="flex w-full p-[12px_16px] justify-between items-center">
            <Image src={EventMintLogo} alt='EventMint' width={40.79} height={19.64}/>
            <Image src={xcancel} alt='xcancel' width={32} height={32} onClick={onClick}/>
        </div>
        <div className='flex w-full p-[24px_16px] flex-col items-start gap-[8px]'>
            <div className='text-white'>Home</div>
            <div className='text-white'>Features</div>
            <div className='text-white'>Benefits</div>
            <div className='text-white'>How It Works</div>
        </div>
    </div>
  )
}
