"use client";
import React, { ReactNode } from "react";
import style from "./regular.module.css";
import Navbar from "../ui/dashboard/navBar/Navbar";
import { Button } from "@/component/button";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux"; 
import ChatRoom from "@/component/chat-modal";


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  const isModalOpen = useSelector((state:any) => state.modal.isModalOpen); 

  const isActive = (path: string) => path === pathname;
  const getState = isActive("/regular-user/tickets");

  return (
    <div className={style.container}>
      <div className="px-[96px]">
        <Navbar />
      </div>
      <div className="w-full flex gap-4 p-[24px_96px_0_96px]">
        {/* Left section with buttons */}
        <div className={`flex flex-col items-start gap-8 h-full shrink-0 transition-all duration-300 ${isModalOpen? "w-[calc(100%-800px)]":"w-full"}`}>
          <div className="flex items-center gap-6">
            <Button
              label="Tickets"
              customClassName={`flex justify-center items-center gap-1 p-[24px_48px] rounded-[12px] ${getState ? "text-white bg-[rgba(62,255,62,0.1)]" : "text-[#64748B]"}`}
              onClick={() => router.push("/regular-user/tickets")}
            />
            <Button
              label="My Tickets"
              customClassName={`flex justify-center items-center gap-1 p-[24px_48px] rounded-[12px] ${!getState ? "text-white bg-[rgba(62,255,62,0.1)]" : "text-[#64748B]"}`}
              onClick={() => router.push("/regular-user/my-tickets")}
            />
          </div>
          {/* Main content (children) */}
          <div className="w-full h-full">{children}</div>
        </div>
        {/* Popup Modal Section */}
        
          {isModalOpen && (
            <div className="w-[800px] h-[684px] bg-[#191D23]  ">
            <ChatRoom/>
          </div>
          )}
        
      </div>
    </div>
  );
};

export default Layout;
