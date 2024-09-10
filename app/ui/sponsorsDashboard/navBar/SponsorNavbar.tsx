"use client";
import { usePathname } from "next/navigation";
import styles from "./sponsornavbar.module.css";
import { useEffect,useState } from "react";
import Image from "next/image";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import styled from "styled-components";

const SponsorNavbar = () => {
  const pathname = usePathname();


  const [profile, setProfile] = useState<string | any>('')
  useEffect(()=>{
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
    },[])

  const StyledIcon = styled(MdSearch)`
    color: red;
    font-size: 40px;
    margin: 15px;
  `;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M16 2.66666C17.751 2.66666 19.4848 3.01153 21.1025 3.6816C22.7201 4.35166 24.19 5.33379 25.4281 6.5719C26.6662 7.81002 27.6484 9.27987 28.3184 10.8975C28.9885 12.5152 29.3334 14.249 29.3334 16M16 2.66666V16M16 2.66666C8.63622 2.66666 2.66669 8.63619 2.66669 16C2.66669 23.3638 8.63622 29.3333 16 29.3333C23.3638 29.3333 29.3334 23.3638 29.3334 16M16 2.66666C23.3638 2.66666 29.3334 8.6362 29.3334 16M29.3334 16L16 16M29.3334 16C29.3334 18.1041 28.8354 20.1784 27.8801 22.0532C26.9248 23.928 25.5394 25.5501 23.8372 26.7869L16 16"
            stroke="#A7FFA7"
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {pathname.split("/").pop()}
      </div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." className={styles.input} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M28 28L22.2 22.2M25.3333 14.6667C25.3333 20.5577 20.5577 25.3333 14.6667 25.3333C8.77563 25.3333 4 20.5577 4 14.6667C4 8.77563 8.77563 4 14.6667 4C20.5577 4 25.3333 8.77563 25.3333 14.6667Z"
              stroke="#A7FFA7"
              strokeWidth="2.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={styles.icons}>
          <div className={styles.notfication}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M12.4724 28.0001C13.4126 28.8299 14.6476 29.3334 16.0002 29.3334C17.3528 29.3334 18.5878 28.8299 19.528 28.0001M24.0002 10.6667C24.0002 8.54502 23.1573 6.51018 21.657 5.00989C20.1568 3.5096 18.1219 2.66675 16.0002 2.66675C13.8785 2.66675 11.8436 3.5096 10.3433 5.00989C8.84304 6.51018 8.00019 8.54502 8.00019 10.6667C8.00019 14.787 6.96081 17.608 5.79974 19.474C4.82036 21.0479 4.33067 21.8349 4.34862 22.0544C4.3685 22.2975 4.42 22.3902 4.61589 22.5355C4.7928 22.6667 5.59031 22.6667 7.18533 22.6667H24.815C26.4101 22.6667 27.2076 22.6667 27.3845 22.5355C27.5804 22.3902 27.6319 22.2975 27.6518 22.0544C27.6697 21.8349 27.18 21.0479 26.2006 19.474C25.0396 17.608 24.0002 14.787 24.0002 10.6667Z"
                stroke="#A7FFA7"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.profile}>
          <div className={styles.picture}>
              <Image
              className="rounded-full"
              src={
              profile?.image
                ? profile?.image
                : `https://res.cloudinary.com/dtfvdjvyr/image/upload/v1724090383/Profile_Picture_dykec6.png`
            } alt="" height={48} width={48} />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M8 12L16 20L24 12"
                stroke="#A7FFA7"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorNavbar;
