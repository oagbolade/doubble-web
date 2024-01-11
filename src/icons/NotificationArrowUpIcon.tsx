import SvgIcon, { SvgIconProps } from "./SvgIcons";

const NotificationArrowUpIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      d="M7.10019 0.204159C6.82798 -0.0680523 6.37429 -0.0680523 6.10208 0.204159L0.204161 6.07183C-0.0680504 6.37429 -0.0680504 6.82798 0.204161 7.10019L0.899814 7.79584C1.17202 8.06805 1.62571 8.06805 1.92817 7.79584L6.58601 3.138L11.2741 7.79584C11.5766 8.06805 12.0302 8.06805 12.3025 7.79584L12.9981 7.10019C13.2703 6.82798 13.2703 6.37429 12.9981 6.07183L7.10019 0.204159Z"
      fill={props.fillColor}
    />
  </SvgIcon>
);

NotificationArrowUpIcon.defaultProps = {
  fillColor: "#263E61",
  width: "14",
  height: "8",
  viewBox: "0 0 14 8",
};

export default NotificationArrowUpIcon;
