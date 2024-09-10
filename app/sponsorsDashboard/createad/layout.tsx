"use client";
import Link from "next/link";
import styles from "./ad.module.css";
import { Typography } from "@/component/typogrphy";
import { Button } from "@/component/button";
import ArrowLeft from "@/component/svgs/arrowLeft";
import ArrowRight from "@/component/svgs/arrowRight";
import AppWalletProvider from "@/app/components/AppWalletProvider";
import { usePathname, useRouter } from "next/navigation";

import clsx from "clsx";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  const router = useRouter();

  const isActive = (path: string) => pathname === path;

  const isTicketDetailsPage = () => {
    return isActive("/dashboard/create-ticket/ticket-details");
  };

  const redirectToDetailPage = () => {
    router.push("/dashboard/create-ticket/ticket-details");
  };

  const GetTicketPage = isTicketDetailsPage();

  return (
    <div className={styles.container}>
      <nav className={styles.navBar}>
        <ul className={styles.navContext}>
          <li
            className={
              isActive("/sponsorsDashboard/createad/ad-details")
                ? styles.list
                : undefined
            }
          >
            <Link href="/sponsorsDashboard/createad/ad-details">
              <Typography
                variant="body-m"
                customClassName={clsx("font-Ubuntu", {
                  "text-[#323A46]": !isActive(
                    "/dashboard/create-ticket/ticket-details"
                  ),
                  "text-[#D0D5DD]": isActive(
                    "/sponsorsDashboard/createad/ad-details"
                  ),
                })}
              >
                Ticket Details
              </Typography>
            </Link>
          </li>
          <li
            className={
              isActive("/sponsorsDashboard/createad/ad-preview")
                ? styles.list
                : undefined
            }
          >
            <Link href="/sponsorsDashboard/createad/ad-preview">
              <Typography
                variant="body-m"
                customClassName={clsx("font-Ubuntu", {
                  "text-[#323A46]": !isActive(
                    "/sponsorsDashboard/createad/ad-preview"
                  ),
                  "text-[#D0D5DD]": isActive(
                    "/sponsorsDashboard/createad/ad-preview"
                  ), // Active style
                })}
              >
                Ticket Preview
              </Typography>
            </Link>
          </li>
        </ul>
        <div>
          {GetTicketPage ? (
            <div className="flex items-center justify-center px-[16px] py-[7px] rounded-[12px] bg-[#3EFF3E]">
              <Typography>1</Typography>
            </div>
          ) : (
            <div className="flex items-center justify-center px-[16px] py-[7px] rounded-[12px] bg-[#3EFF3E]">
              <Typography>2</Typography>
            </div>
          )}
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
