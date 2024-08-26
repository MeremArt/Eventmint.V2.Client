"use client";

import dynamic from "next/dynamic";

import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { gridSpacing } from "../components/store/constant";
import Balance from "../components/cards/balance/Balance";
import Sales from "../components/cards/sales/Sales";
import Orders from "../components/cards/orders/Orders";
import Earning from "../components/cards/Earnings/Earning";
import Customers from "../components/cards/customers/Customers";
import CircularProgress from "@mui/material/CircularProgress";
import Revenue from "../components/cards/revenue/Revenue";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/navigation";
// Dynamically import Chart with SSR disabled
const Chart = dynamic(() => import("../components/chart/Chart"), {
  ssr: false,
});
const TransactionCard = dynamic(
  () => import("../components/cards/Transaction/TransactionCard"),
  { ssr: false }
);

const Page = () => {
  const [isLoading, setLoading] = useState(true);
  const { connected, publicKey } = useWallet();
  const router = useRouter();

  useEffect(() => {
    const storedPublicKey = localStorage.getItem("publicKey");

    if (publicKey) {
      localStorage.setItem("publicKey", publicKey.toString());
      setLoading(false); // Stop loading when the wallet is connected
    } else if (storedPublicKey) {
      // Use the public key from localStorage if it's available
      setLoading(false);
    } else {
      setLoading(false); // Stop loading and show error if wallet is not connected and no key in localStorage
      toast.error("Wallet not connected! Redirecting to the home page...");
      const timer = setTimeout(() => {
        router.push("/");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [publicKey, router]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <ToastContainer />
      <Grid className="mt-2" container spacing={gridSpacing}>
        <Grid item xs={12} sm={6} md={3}>
          <Balance />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Orders />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Sales />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Earning />
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={8}>
              <Chart />
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container direction="row" spacing={2}>
                <Grid item xs={6}>
                  <Customers />
                </Grid>
                <Grid item xs={6}>
                  <Revenue />
                </Grid>
              </Grid>
              <TransactionCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Page;
