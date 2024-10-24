'use client'
import React, { useEffect ,useState} from 'react'
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import SearchTickets from "@/component/searchTickets";
import { ToastContainer, toast } from "react-toastify";
import { ticketDummy } from "@/component/ticketResult/ticketDataResult";
import "react-toastify/dist/ReactToastify.css";
import TableComp from '@/component/table-comp';
import { ColorRing } from "react-loader-spinner";


const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [resObj, setResObj] = useState<any[]>([]);
    const { publicKey } = useWallet();
    console.log(publicKey, 'public key')

  useEffect(()=>{
        const getPitchDeck =async() => {
          const walletKey = localStorage.getItem('walletKey')
            try{
              const response = await axios.get(`https://eventmint.fun/api/v1/sponsor/details/all/${walletKey?.toString()}`);
              console.log(response, 'response');
              const {data, message, success} = response.data;
              setResObj((prop:any)=>([...prop,...data]));
              setIsSuccess(success)
              if(data.length > 0){
                toast(message);
              }else{
                toast("no pitch deck found");
              }
            }catch(err){
              console.log(err);
              toast.error('something went wrong')
            }
        };
        setTimeout(() => {
          getPitchDeck()
        },2000);
    },[publicKey]);

    const handlePageChange = (event: any, value: any) => {
      setCurrentPage(value);
    };

    return (
      <div className="border  rounded-[24px] h-full bg-[rgba(25,29,35,0.5)] flex flex-col items-start gap-8 flex-[1_0_0%]">
        <div className="px-[32px] w-full border-b border-[#4B5768]">
          <SearchTickets />
        </div>
        {resObj.length > 0 ?(
          <div className="flex flex-col w-full">
          {isSuccess && (<TableComp pitchDeckObject={resObj}/>)}
        </div>
        ):(
          <div className="w-full flex items-center justify-center h-screen">
              <div className="text-white text-xl">No pitch-deck yet.</div>
        </div>
        )}
        <div className="flex px-6 py-8 justify-end items-center gap-8 self-stretch">
          <Pagination
            count={Math.ceil(ticketDummy.length / postPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </div>
      </div>
    );
}

export default Page