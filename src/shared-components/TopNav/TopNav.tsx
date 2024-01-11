import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import DashboardStyles from "../../../styles/dashboard.module.css";
import { MenuIcon } from "../../icons";
import BellIcon from "../../icons/BellIcon";
import { IconButton } from "../../shared-components";
import { PowerIcon } from "../../icons";
import { useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/auth/authActions";

const sideNavLinks = [
  { text: "Overview", url: "/overview" },
  { text: "Investments", url: "/investment" },
  { text: "Payment", url: "/payment" },
  { text: "Settings", url: "/settings" },
];

const TopNav = () => {
  const [openNav, setOpenNav] = useState(false);
  const { user } = useAppSelector((state) => state.auth);

  const dispatch = useDispatch();

  const dropdownControl = useRef<HTMLDivElement>();

  useEffect(() => {
    const listener = (e) => {
      if (!dropdownControl.current?.contains(e.target)) {
        setOpenNav(false);
      }
    };

    document.addEventListener("click", listener);

    return () => document.removeEventListener("click", listener);
  }, [openNav]);

  const search = () => {
    // router.push({ pathname: "/search", query: { term } });
  };

  return (
    <div>
      <div className={DashboardStyles.topnav}>
        <div
          ref={dropdownControl}
          className="container-fluid d-flex align-items-center justify-content-between"
          style={{ position: "relative" }}
        >
          <div>
            {/* {router.pathname ==="/investment" && (
            <div className="d-lg-block d-none">
              <form className={DashboardStyles.searchcontainer} onSubmit={(e) => { e.preventDefault(); search() }}>
                <input
                  className={DashboardStyles.searchInput}
                  placeholder="Search"
                  value={term}
                  onChange={(e) => setTerm(e.currentTarget.value)}
                />
                <SearchIcon
                  className={DashboardStyles.inputicon}
                  fillColor="#E5E5E5"
                  onClick={search}
                />
              </form>
            </div>)} */}
            <div className="d-block d-lg-none">
              <MenuIcon
                className={DashboardStyles.menuicon}
                onClick={() => setOpenNav(!openNav)}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <div className="d-flex align-items-center">
            <Link href="/notifications">
              <div
                className={`${DashboardStyles.notificationcontainer} mx-2 mt-3`}
              >
                <BellIcon className="cursor-pointer" />
                {0 > 1 && (
                  <span className={DashboardStyles.notificationcount}>5</span>
                )}
              </div>
            </Link>
            <div
              className={`${DashboardStyles.divider} d-lg-block d-none`}
            ></div>
            <Link href="/settings">
              <div
                className={`${DashboardStyles.user} cursor-pointer d-flex justify-content-center align-items-center`}
              >
                {user?.firstName?.charAt(0)} {user?.lastName?.charAt(0)}
              </div>
            </Link>
            <Link href="/settings">
              <div
                className={`${DashboardStyles.username} cursor-pointer d-lg-block d-none ml-2`}
              >
                {user?.firstName?.charAt(0) +
                  user?.firstName.toLowerCase().substring(1)}{" "}
                {user?.lastName?.charAt(0) +
                  user?.lastName.toLowerCase().substring(1)}
              </div>
            </Link>
          </div>
          <div
            className={`${DashboardStyles.dropdownmenu} ${
              openNav ? "d-block" : "d-none"
            } d-lg-none`}
          >
            <ul className={`${DashboardStyles.dropdownitemscontainer} p-0`}>
              {sideNavLinks.map((item, i) => {
                return (
                  <li key={i} className={DashboardStyles.dropdownitem}>
                    <Link href={item.url}>
                      <span className={`cursor-pointer`}>{item.text}</span>
                    </Link>
                  </li>
                );
              })}
              <li
                onClick={() => dispatch(logout())}
                className="d-flex align-items-center justify-content-center cursor-pointer"
                style={{ marginTop: "50px", marginBottom: "20px" }}
              >
                <div className="d-flex align-items-center">
                  <span style={{ color: "var(--red)", fontSize: "18px" }}>
                    Logout
                  </span>
                  <IconButton>
                    <PowerIcon />
                  </IconButton>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
