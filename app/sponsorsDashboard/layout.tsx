import React, { ReactNode } from "react";
import Sidebar from "../ui/sponsorsDashboard/sideBar/SideBar";
import Navbar from "../ui/dashboard/navBar/Navbar";
import styles from "./sponsorsDashboard.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
