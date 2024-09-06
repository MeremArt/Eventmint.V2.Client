import Image from "next/image";
import MenuLink from "../../dashboard/sideBar/menuLInk/menuLink";
import styles from './sideBar.module.css'
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
        title: "Dashboard",
        path: "/sponsorsDashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Profile",
        path: "/sponsorsDashboard/profile",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Create Event",
        path: "/sponsorsDashboard/create-ticket/ticket-details",
        icon: <MdShoppingBag />,
      },
      {
        title: "Tickets",
        path: "/sponsorsDashboard/tickets",
        icon: <HiTicket />,
      },
    ],
  },
  {
    title: "Premium",
    list: [
      {
        title: "Event Analytics",
        path: "/sponsorsDashboard/event-analytics",
        icon: <MdWork />,
      },
      {
        title: "Smart Fundraising",
        path: "/sponsorsDashboard/smart-fundraising",
        icon: <MdAnalytics />,
      },
      {
        title: "Budget Planning Protocol",
        path: "/sponsorsDashboard/budget-protocol",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/sponsorsDashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/sponsorsDashboard/help",
        icon: <MdHelpCenter />,
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