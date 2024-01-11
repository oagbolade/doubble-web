import React from "react";
import { useRouter } from "next/router";
import { SidebarCustomerInfo } from "./SidebarCustomerInfo";
import { useClickOutside } from "../../utils";

import SidebarContainer from "./SidebarContainer";
import SideNavLinks from "./SidenavLinks";
import SidebarLogout from "./SidebarLogout";

interface SidebarProps {
  isOpen?: boolean;
  ref?: React.Ref<HTMLDivElement>;
  closeSidebar?: () => void;
}
export const Sidebar = (props: SidebarProps) => {
  const router = useRouter();
  const sidebarRef = React.useRef(null);
  useClickOutside(sidebarRef, props.closeSidebar);
  return (
    <SidebarContainer ref={sidebarRef} isOpen={props.isOpen}>
      <SidebarCustomerInfo />
      <SideNavLinks activeLink={router.pathname} />
      <SidebarLogout />
    </SidebarContainer>
  );
};

export default Sidebar;
