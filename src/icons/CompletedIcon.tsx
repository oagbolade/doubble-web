import SvgIcon, { SvgIconProps } from "./SvgIcons";

const CompletedIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M10.75 0C4.9496 0 0.25 4.74194 0.25 10.5C0.25 16.3004 4.9496 21 10.75 21C16.5081 21 21.25 16.3004 21.25 10.5C21.25 4.74194 16.5081 0 10.75 0ZM10.75 2.03226C15.4073 2.03226 19.2177 5.84274 19.2177 10.5C19.2177 15.1996 15.4073 18.9677 10.75 18.9677C6.0504 18.9677 2.28226 15.1996 2.28226 10.5C2.28226 5.84274 6.0504 2.03226 10.75 2.03226ZM16.6774 7.57863L15.7036 6.60484C15.5343 6.39315 15.1956 6.39315 14.9839 6.60484L9.01411 12.5323L6.47379 9.99194C6.2621 9.78024 5.96573 9.78024 5.75403 9.99194L4.78024 10.9234C4.61089 11.1351 4.61089 11.4738 4.78024 11.6431L8.63306 15.5383C8.84476 15.75 9.14113 15.75 9.35282 15.5383L16.6774 8.29839C16.8468 8.08669 16.8468 7.74798 16.6774 7.57863Z" fill="#576984"/>
  </SvgIcon>
);

CompletedIcon.defaultProps = {
  fillColor: "#263E61",
  width: "22",
  height: "21",
  viewBox: "22 21",
};

export default CompletedIcon;

