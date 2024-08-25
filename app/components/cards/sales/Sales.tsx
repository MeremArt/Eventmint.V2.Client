"use client";
import React, { useState } from "react";
import styles from "./sales.module.css";
const Sales = () => {
  const [activeButton, setActiveButton] = useState("Year");
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };
  return (
    <section className={styles.balanceContainer}>
      <div className="flex items-center gap-24">
        <div>
          <p className={styles.balancetext}>Total Sales</p>
        </div>
        <div className={styles.svgcover}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M5.00014 14.5H18.1359C19.1487 14.5 19.6551 14.5 20.0582 14.3112C20.4134 14.1448 20.7118 13.8777 20.9163 13.5432C21.1485 13.1633 21.2044 12.66 21.3163 11.6534L21.9013 6.38835C21.9355 6.08088 21.9525 5.92715 21.9031 5.80816C21.8597 5.70366 21.7821 5.61697 21.683 5.56228C21.5702 5.5 21.4155 5.5 21.1062 5.5H4.50014M2 2.5H3.24844C3.51306 2.5 3.64537 2.5 3.74889 2.55032C3.84002 2.59463 3.91554 2.66557 3.96544 2.75376C4.02212 2.85394 4.03037 2.98599 4.04688 3.2501L4.95312 17.7499C4.96963 18.014 4.97788 18.1461 5.03456 18.2462C5.08446 18.3344 5.15998 18.4054 5.25111 18.4497C5.35463 18.5 5.48694 18.5 5.75156 18.5H19M7.5 22H7.51M16.5 22H16.51M8 22C8 22.2761 7.77614 22.5 7.5 22.5C7.22386 22.5 7 22.2761 7 22C7 21.7239 7.22386 21.5 7.5 21.5C7.77614 21.5 8 21.7239 8 22ZM17 22C17 22.2761 16.7761 22.5 16.5 22.5C16.2239 22.5 16 22.2761 16 22C16 21.7239 16.2239 21.5 16.5 21.5C16.7761 21.5 17 21.7239 17 22Z"
              stroke="#A7FFA7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="flex items-center mt-2 ">
        <div className={styles.balanceamt}>
          <p>$55,897</p>
        </div>
        <div className="flex mt-3 items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.00019 9.00005V15.0001M9.00019 15.0001H15.0002M9.00019 15.0001L15.0002 8.99994M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#F87171"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className={styles.priceIndex}>1.02%</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <button
          className={`${styles.button1} ${
            activeButton === "Day" ? styles.activeButton : ""
          }`}
          onClick={() => handleButtonClick("Day")}
        >
          Day
        </button>
        <button
          className={`${styles.button2} ${
            activeButton === "Month" ? styles.activeButton : ""
          }`}
          onClick={() => handleButtonClick("Month")}
        >
          Month
        </button>
        <button
          className={`${styles.button1} ${
            activeButton === "Year" ? styles.activeButton : ""
          }`}
          onClick={() => handleButtonClick("Year")}
        >
          Year
        </button>
      </div>
    </section>
  );
};

export default Sales;
