import { GroupLinkButtons } from "../../shared-components";

const sideNavLinks = [
  { text: "Overview", url: "/overview" },
  { text: "Investment", url: "/investment" },
  { text: "Profile", url: "#" },
  { text: "Setting", url: "#" },
];

interface SideNavLinksProps {
  activeLink?: string;
}
const SideNavLinks = (props: SideNavLinksProps) => {
  return (
    <GroupLinkButtons
      width="70%"
      height="45%"
      justifyContent="space-evenly"
      flexDirection="column"
      alignItems="flex-start"
      data={sideNavLinks}
      fontColor="#ffffff"
      fontWeight="400"
      fontSize="18px"
      linkMargin="10px"
      activeFontColor="#263E61"
      activeFontSize="24px"
      activeFontWeight="700"
      activeLink={props.activeLink}
    />
  );
};

SideNavLinks.defaultProps = {
  activeLink: "/overview",
};

export default SideNavLinks;
