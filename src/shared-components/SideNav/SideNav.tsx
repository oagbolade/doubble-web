import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaThLarge, FaChartLine, FaWallet, FaCogs/*, FaQuestion */ } from "react-icons/fa";
import DashboardStyles from "../../../styles/dashboard.module.css";
import SidebarLogout from "../Sidebar/SidebarLogout";
import { logout } from "../../redux/auth/authActions";
import { useDispatch } from "react-redux";

const sideNavLinks = [
  { text: "Overview", url: "/overview", icon: <FaThLarge /> },
  { text: "Investments", url: "/investment", icon: <FaChartLine /> },
  { text: "Payment", url: "/payment", icon: <FaWallet /> },
  { text: "Settings", url: "/settings", icon: <FaCogs /> },
  // { text: "About Us", url: "/aboutus", icon: <FaQuestion /> },
];

const SideNav = () => {
  const router = useRouter();
  const dispatch = useDispatch()

  const determineActive = (url: string) => {
    const isActive = router.pathname.toLowerCase() === url.toLowerCase();
    return isActive ? "active-link" : "inactive-link";
  };

  return (
    <div className={`${DashboardStyles.sidenav}`}>
      <div className="d-flex justify-content-center" style={{ marginTop: "100px" }}>
        <Image src="/doubble-logo.png" width={43} height={50} />
      </div>
      <div className="d-flex flex-column">
        <ul>
          {sideNavLinks.map((item, i) => {
            return <li key={i} className={`${determineActive(item.url)} d-flex`} style={{ marginTop: "50px" }}>
              <span style={{ marginRight: "20px" }}>{item.icon}</span>
              <Link href={item.url}>
                <span
                  className={`${determineActive(item.url)} cursor-pointer`}
                >
                  {item.text}
                </span>
              </Link>
            </li>
          })}
        </ul>
        <div onClick={() => dispatch(logout())}>
          <SidebarLogout />
        </div>
      </div>
    </div>
  )
}

export default SideNav;
