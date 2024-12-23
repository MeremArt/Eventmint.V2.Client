"use client";
import React, { useState } from "react";
import styles from "./order.module.css";
const Orders = () => {
  const [activeButton, setActiveButton] = useState("Month");
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };
  return (
    <section className={styles.orderContainer}>
      <div className="flex items-center gap-20">
        <div>
          <p className={styles.ordertext}>Total Orders</p>
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
              d="M16.0004 9.5V6.5C16.0004 4.29086 14.2095 2.5 12.0004 2.5C9.79123 2.5 8.00037 4.29086 8.00037 6.5V9.5M3.59237 10.852L2.99237 17.252C2.82178 19.0717 2.73648 19.9815 3.03842 20.6843C3.30367 21.3016 3.76849 21.8121 4.35839 22.1338C5.0299 22.5 5.94374 22.5 7.77142 22.5H16.2293C18.057 22.5 18.9708 22.5 19.6423 22.1338C20.2322 21.8121 20.6971 21.3016 20.9623 20.6843C21.2643 19.9815 21.179 19.0717 21.0084 17.252L20.4084 10.852C20.2643 9.31535 20.1923 8.54704 19.8467 7.96616C19.5424 7.45458 19.0927 7.04511 18.555 6.78984C17.9444 6.5 17.1727 6.5 15.6293 6.5L8.37142 6.5C6.82806 6.5 6.05638 6.5 5.44579 6.78984C4.90803 7.04511 4.45838 7.45458 4.15403 7.96616C3.80846 8.54704 3.73643 9.31534 3.59237 10.852Z"
              stroke="#B8A6FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="flex items-center mt-2 gap-2">
        <div className={styles.ordereamt}>
          <p>295</p>
        </div>
        <div className="flex mt-3 items-center gap-2">
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

          <p className={styles.orderPriceIndex}>1.02%</p>
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

export default Orders;
