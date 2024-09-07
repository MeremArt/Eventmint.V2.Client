import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sideBar.module.css";
import { HiTicket } from "react-icons/hi2";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

interface MenuItem {
  title: string;
  path: string;
  icon: JSX.Element;
}

interface MenuCategory {
  title: string;
  list: MenuItem[];
}

const menuItems: MenuCategory[] = [
  {
    title: "Pages",
    list: [
      {
        title: "Create Event Ad",
        path: "/sponsorsDashboard/createad",
        icon: <MdDashboard />,
      },
      {
        title: "Profile",
        path: "/sponsorsDashboard/profile",
        icon: <MdSupervisedUserCircle />,
      },

      {
        title: "Ads",
        path: "/sponsorsDashboard/tickets",
        icon: <HiTicket />,
      },
    ],
  },
];

const Sidebar: React.FC = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={"/Logo.png"}
          alt=""
          width="50"
          height="50"
        />
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form className={styles.formHeight}>
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
