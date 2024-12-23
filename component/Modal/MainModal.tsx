import Image from "next/image";
import React, { useEffect } from "react";
import smiley from "@/component/svgs/NewImages/smiling-face-with-smiling-eyes.png";
import SecondModal from "@/component/svgs/NewImages/secongModal.png";
import { Button } from "../button";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typography } from "../typogrphy";
import { MdCancel } from "react-icons/md";
import ModalBlur from "@/component/svgs/NewImages/Modal-Blur.png";
import axios from "axios";

type MainModalProps = {
  closeModal: () => void;
};

export default function MainModal({ closeModal }: MainModalProps) {
  const { connected, publicKey } = useWallet();
  const router = useRouter();
  

  
  const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API;
  console.log(BACKEND_API);

  useEffect(() => {
    const checkIfUserExists = async () => {
      if (connected && publicKey) {
        localStorage.setItem('walletKey', publicKey.toString());
        try {
          const response = await axios.get(
            `${BACKEND_API}api/v1/user/exists/${publicKey.toString()}`
          );

          console.log(response, "let see if user exist");

          if (response.data.data) {
            toast.success("Welcome back!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
              router.push(`/selectoption`);
            }, 3000);
          } else {
            toast.error("No profile found. Please create one.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
              router.push(`/createprofile`);
            }, 3000);
          }
        } catch (error: any) {
          if (error.response && error.response.status === 404) {
            toast.error("No profile found. Redirecting to create profile...", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
              router.push(`/createprofile`);
            }, 3000);
          } else {
            console.error("Error checking user existence:", error);
            toast.error("An error occurred. Please try again.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        }
      }
    };

    checkIfUserExists();
  }, [connected, publicKey, router, BACKEND_API]);

  return (
    <div className="backdrop">
      <div className="modal-content">
        <div className="relative mxs:hidden">
          <Image
            className="mxs:hidden"
            src={SecondModal}
            alt="Modal"
            width={415}
            height={140}
          />
        </div>
        <div className="relative px-[32px] mxs:px-0 py-[24px] mxs:py-[12px] flex flex-col gap-[24px] items-center justify-center bg-white-opacity-20 backdrop-blur-75 rounded-r-[12px]">
          <Image
            className="absolute rounded-r-[12px] mxs:rounded-[12px]"
            src={ModalBlur}
            alt="modal-blur"
            fill
          />

          <div className="flex justify-center relative">
            <Image
              className="relative"
              src={smiley}
              alt="smiley"
              width={120}
              height={120}
            />
          </div>
          <div className=" relative text-center mt-4 text-white flex flex-col gap-4">
            <Typography customClassName="font-Ubuntu text-modal-head text-[#150069] text-center">
              Hey there! We’ve been waiting for you.
            </Typography>
            <Typography customClassName="font-open-sas text-body-xs text-[#191D23] text-center">
              Step into a realm of limitless opportunities, connect your wallet
              and let’s get started.
            </Typography>
          </div>
          <div className=" relative flex justify-center mt-4 space-x-4 mxxxs:flex-col-reverse mxxxs:items-center mxxxs:gap-2">
            <WalletMultiButton className="bg-[#c2c2cccb] hover:bg-black transition-all duration-200 rounded-lg relative " />

            <Link href="">
              <Button
                label="Leave"
                customClassName="text-body-xxs font-open-sans bg-gradient-to-b-custom rounded-[12px]"
                size="moreMedium"
                onClick={closeModal}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
