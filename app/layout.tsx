import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import store from "@/mainStore/store";
import AppWalletProvider from "./components/AppWalletProvider";
import { ToastContainer } from "react-toastify";
import ReduxProvider from "@/mainStore/provider";
import MobileWarning from "./components/MobileWarning/MobileWarning";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eventmint",
  description: "Enhancing Events with interactions",
  openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1719802304/event-logo_iyl1ec.png",
        width: 1200,
        height: 630,
        alt: "Eventmint Logo",
      },
    ],
  },
  twitter: {
    title: "Eventmint",
    description: "Enhancing Events with interactions",
    images: [
      {
        url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1719802304/event-logo_iyl1ec.png",
        alt: "Eventmint Logo",
      },
    ],
    creator: "@eventmint_",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          <AppWalletProvider>
            {/* <MobileWarning /> */}
            {children}
            <ToastContainer />
          </AppWalletProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
