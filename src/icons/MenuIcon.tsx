import SvgIcon, { SvgIconProps } from "./SvgIcons";

const MenuIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <rect width="30" height="5" rx="2.5" fill="#263D61" />
    <rect y="10" width="20" height="5" rx="2.5" fill="#263D61" />
    <rect y="20" width="25" height="5" rx="2.5" fill="#263D61" />
  </SvgIcon>
);

MenuIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
};

export default MenuIcon;
