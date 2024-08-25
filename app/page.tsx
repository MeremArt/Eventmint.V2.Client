"use client";
import { useState } from "react";
import MainModal from "@/component/Modal/MainModal";
import FirstSection from "@/component/firstSection";
import SecondSection from "@/component/secondSection";
import ThirdSection from "@/component/thirdSection";
import FourthSection from "@/component/fourthSection";
import FifthSection from "@/component/fifthSection";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openHandler = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeHandler = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <main className="relative  bg-[var(--Shades-Black,#000)]">
      {/* Mobile view coming soon message */}
      <div className="md:hidden h-full w-full absolute bg-white dark:bg-slate-800 text-black dark:text-white z-50 flex items-center justify-center">
        <div className="px-4">
          <h1 className="text-xl lg:text-2xl font-bold text-action mb-2">
            Mobile view coming soon
          </h1>
          <p className="text-base lg:text-xl max-w-xs">
            For Best experience, use a desktop device
          </p>
        </div>
      </div>

      {isModalOpen && <MainModal closeModal={closeHandler} />}
      <FirstSection openHandler={openHandler} />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </main>
  );
}
