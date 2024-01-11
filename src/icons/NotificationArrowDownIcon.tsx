import SvgIcon, { SvgIconProps } from "./SvgIcons";

const NotificationArrowDownIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      d="M6.10208 7.79584C6.37429 8.06805 6.82798 8.06805 7.10019 7.79584L12.9981 1.92817C13.2703 1.62571 13.2703 1.17202 12.9981 0.899811L12.3025 0.204159C12.0302 -0.0680529 11.5766 -0.0680529 11.2741 0.204159L6.61626 4.862L1.92817 0.204159C1.62571 -0.0680529 1.17202 -0.0680529 0.899811 0.204159L0.204159 0.899811C-0.0680529 1.17202 -0.0680529 1.62571 0.204159 1.92817L6.10208 7.79584Z"
      fill={props.fillColor}
    />
  </SvgIcon>
);

NotificationArrowDownIcon.defaultProps = {
  fillColor: "#263E61",
  width: "14",
  height: "8",
  viewBox: "0 0 14 8",
};

export default NotificationArrowDownIcon;
