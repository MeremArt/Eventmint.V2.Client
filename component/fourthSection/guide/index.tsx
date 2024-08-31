import { Typography } from '@/component/typogrphy'
import Image from 'next/image'
import React from 'react'
type GuideProps ={
    icon:string,
    number:string,
    header:string,
    body:string
}
export default function Guide(prop:GuideProps) {
    const {icon, number,header,body} = prop
  return (
    <div className='px-[24px]  pt-[32px] mxs:pt-[16px]  pb-[40px] mxs:pb-[32px] bg-custom-purple-transparent rounded-[24px] h-[324px] mxs:h-[191px] flex flex-col gap-[2rem] mmd:gap-2'>
        <div className='flex items-center justify-between mxs:flex-row-reverse'>
            <Image className='mxs:h-[50px] mxs:w-[50px]' src={icon} alt={icon && `icon-${icon}`} height={40} width={40}/>
            <Typography variant="number" color="numberPurple" customClassName='font-Ubuntu mmd:text-h-xl mxs:text-h-mx'>
                {number}
            </Typography>
        </div>
        <div className='mxs:flex mxs:flex-col mxs:gap-[8px]'>
            <Typography variant="h4" color="fontBodyWhiteishColor" customClassName="font-Ubuntu mmd:text-h-r mxs:text-h-xxs" >
            {header}
            </Typography>
            <Typography variant="body-m" color="fontBodyMGreyishColor" customClassName='font-Ubuntu mmd:text-body-r mxs:text-body-xxsx'>
                {body}
            </Typography>
        </div>
    </div>
  )
}
