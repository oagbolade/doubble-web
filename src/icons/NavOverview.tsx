import SvgIcon, { SvgIconProps } from "./SvgIcons";

const NavOverview = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <rect width="6.81816" height="6.81816" rx="1" fill={props.fillColor} />
    <rect
      y="8.18066"
      width="6.81816"
      height="6.81816"
      rx="1"
      fill={props.fillColor}
    />
    <rect
      x="8.18042"
      y="11.5908"
      width="6.81816"
      height="3.40908"
      rx="1"
      fill={props.fillColor}
    />
    <rect
      x="8.18042"
      width="6.81816"
      height="10.2272"
      rx="1"
      fill={props.fillColor}
    />
  </SvgIcon>
);

NavOverview.defaultProps = {
  fillColor: "#263E61",
  width: "25",
  height: "25",
};

export default NavOverview;
