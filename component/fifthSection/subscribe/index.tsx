import { Button } from '@/component/button'
import SubscribeIcon from '@/component/svgs/subscribeIcon'
import { Typography } from '@/component/typogrphy'
import React from 'react'

export default function Subscribe() {
  return (
    <div className='flex flex-col gap-[32px] mxs:gap-[16px] w-full px-[32px] pt-[24px] mxs:pt-[24px] pb-[40px] mxs:pb-[24px] border rounded-[24px] relative bg-subscribe-radial backdrop-blur-subscribe mxs:px-[16px]'>
        <div className='flex flex-col gap-2'>
            <Typography variant='h5' customClassName='font-Ubuntu text-white mxs:text-h-xxs ' >
            Don’t miss a spot!
            </Typography>
            <Typography variant="body-s" color="fontBodyMGreyishColor" customClassName='font-Ubuntu mxs:text-body-msx'>
            Join our newsletter
            </Typography>
        </div>
        <div className='flex gap-4 mmd:flex-col'>
            <input className='w-full px-[16px] py-[8px] h-[72px] bg-[rgba(255,255,255,0.15)] rounded-[12px] border border-[#F7F8F9]' placeholder='Enter your email address' type='text'/>
        <Button
              label="subscribe"
              customClassName="text-body-xxs font-open-sans bg-gradient-to-b-custom rounded-[12px] mmd:w-full mxs:w-fit mxs:py-[10px] mxs:px-[32px]"
              size="footer"
              leftIcon={<SubscribeIcon/>}
              fit
            />
        </div>
    </div>
  )
}
