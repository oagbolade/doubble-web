import SvgIcon, { SvgIconProps } from "./SvgIcons";

const NavPayment = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      d="M14.4062 3H2.5C2.21875 3 2 2.78125 2 2.5C2 2.25 2.21875 2 2.5 2H14.5C14.75 2 15 1.78125 15 1.5C15 0.6875 14.3125 0 13.5 0H2C0.875 0 0 0.90625 0 2V12C0 13.125 0.875 14 2 14H14.4062C15.2812 14 16 13.3438 16 12.5V4.5C16 3.6875 15.2812 3 14.4062 3ZM13 9.5C12.4375 9.5 12 9.0625 12 8.5C12 7.96875 12.4375 7.5 13 7.5C13.5312 7.5 14 7.96875 14 8.5C14 9.0625 13.5312 9.5 13 9.5Z"
      fill={props.fillColor}
    />
  </SvgIcon>
);

NavPayment.defaultProps = {
  fillColor: "#263E61",
  width: "25",
  height: "25",
};

export default NavPayment;
