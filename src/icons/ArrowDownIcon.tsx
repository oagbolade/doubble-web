import SvgIcon, { SvgIconProps } from "./SvgIcons";
const ArrowDownIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      d="M7.29289 20.7071C7.68342 21.0976 8.31658 21.0976 8.70711 20.7071L15.0711 14.3431C15.4616 13.9526 15.4616 13.3195 15.0711 12.9289C14.6805 12.5384 14.0474 12.5384 13.6569 12.9289L8 18.5858L2.34315 12.9289C1.95262 12.5384 1.31946 12.5384 0.928932 12.9289C0.538408 13.3195 0.538408 13.9526 0.928932 14.3431L7.29289 20.7071ZM7 0L7 20H9L9 0L7 0Z"
      fill="#bfd4df"
    />
  </SvgIcon>
);

ArrowDownIcon.defaultProps = {
  fillColor: "#bfd4df",
  width: "16",
  height: "21",
  viewBox: "0 0 16 21",
};

export default ArrowDownIcon;
