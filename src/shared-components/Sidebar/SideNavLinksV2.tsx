import React from "react";
import { FaWallet, FaChartLine, FaCogs, FaThLarge } from "react-icons/fa"


import LinkButton from "../../shared-components/Button/LinkButton";
import { FlexWrapper } from "../../shared-components";

interface GroupLinkBtnsProps {
  data: { text: string; url: string, icon: React.ReactElement }[];
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  fontColor?: string;
  activeLink?: string;
  activeFontColor?: string;
  activeFontWeight?: string;
  activeFontSize?: string;
  linkMargin?: string;
  linkMarginBottom?: string;
  linkMarginLeft?: string;
  linkMarginRight?: string;
}

const GroupLinkButtons = (props: GroupLinkBtnsProps) => {
  const links = props.data.map((link) => {
    const isActive = link.url.toLowerCase() === props.activeLink.toLowerCase();
    return (
      <FlexWrapper justifyContent="flex-start" width="100%" marginTop="50px" alignItems="center" marginLeft="75px">
        {React.cloneElement(link.icon, {
          color: `${isActive ? props.activeFontColor : props.fontColor}`
        })}
        <LinkButton
          text={link.text}
          url={link.url}
          key={link.text}
          margin={props.linkMargin}
          marginBottom={props.linkMarginBottom}
          marginLeft="20px"
          marginRight={props.linkMarginRight}
          fontWeight={isActive ? props.activeFontWeight : props.fontWeight}
          fontSize={isActive ? props.activeFontSize : props.fontSize}
          fontColor={isActive ? props.activeFontColor : props.fontColor}
        />
      </FlexWrapper>
    );
  });
  return <>{links}</>;
};

GroupLinkButtons.defaultProps = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  activeLink: "",
};

const sideNavLinks = [
  { text: "Overview", url: "/overview", icon: <FaThLarge /> },
  { text: "Investment", url: "/investment", icon: <FaChartLine /> },
  { text: "Payment", url: "/payment", icon: <FaWallet /> },
  { text: "Setting", url: "/settings", icon: <FaCogs /> },
];

interface SideNavLinksProps {
  activeLink?: string;
}
const SideNavLinks = (props: SideNavLinksProps) => {
  return (
    <GroupLinkButtons
      width="70%"
      height="45%"
      justifyContent="flex-start"
      flexDirection="column"
      alignItems="flex-start"
      data={sideNavLinks}
      fontColor="#E5E5E5"
      fontWeight="400"
      fontSize="16px"
      linkMargin="10px"
      activeFontColor="#263E61"
      activeFontSize="16px"
      activeFontWeight="700"
      activeLink={props.activeLink}
    />
  );
};

SideNavLinks.defaultProps = {
  activeLink: "/overview",
};

export default SideNavLinks;
