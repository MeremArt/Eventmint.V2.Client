import React from "react";
import { Button } from "../button";

type buttonprops = {
  onClick: () => void;
};
export default function BuyTicketModal({ onClick }: buttonprops) {
  return (
    <div
      className="p-[32px] px-[48px] flex items-center gap-[16px] rounded-[16px] 
                border-t-2 border-r-4 border-b-8 border-l-4 
                border-neutral-800 bg-neutral-700 
                shadow-[0px_-8px_40px_0px_rgba(0,0,0,0.50)]"
    >
      <Button
        label={"Buy Ticket"}
        customClassName="flex h-[48px] p-[8px_32px] justify-center items-center gap-[8px] 
               rounded-[12px] border-r-[2px] border-b-[4px] border-l-[2px] border-[#00B300] 
               bg-gradient-to-b from-[#A7FFA7] to-[#00D300]"
        onClick={onClick}
      />
      <Button
        label={"close"}
        customClassName="flex h-12 px-8 py-2 justify-center items-center gap-2 rounded-xl border-r-2 border-b-4 border-l-2 border-[#C21417] bg-gradient-to-b from-[#FF6F72] to-[#FC1723]"
        onClick={onClick}
      />
    </div>
  );
}
