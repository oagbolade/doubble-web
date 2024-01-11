import DashboardStyles from "../../../styles/dashboard.module.css";
import SideNav from "../SideNav/SideNav";
import TopNav from "../TopNav/TopNav";

const DashboardLayout = ({ children }) => {
  return (
    <div className={DashboardStyles.dashboardlayout}>
      <SideNav />
      <div className={DashboardStyles.main}>
        <TopNav />
        <div className={DashboardStyles.maincontent}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout;
