import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { SidebarCustomerInfo } from "./SidebarCustomerInfo";
import { useClickOutside } from "../../utils";

import SidebarContainer from "./SidebarContainerV2";
import SideNavLinks from "./SideNavLinksV2";
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
      <Image src="/doubble-logo.png" width={43} height={50} />
      <SideNavLinks activeLink={router.pathname} />
      <SidebarLogout />
    </SidebarContainer>
  );
};

export default Sidebar;
