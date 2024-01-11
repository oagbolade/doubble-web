import SvgIcon, { SvgIconProps } from "./SvgIcons";
const MinusIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <rect
      x="0.5"
      y="0.5"
      width="9"
      height="2"
      rx="1"
      fill={props.fillColor}
      stroke={props.fillColor}
    />
  </SvgIcon>
);

MinusIcon.defaultProps = {
  fillColor: "#bfd4df",
  width: "10",
  height: "3",
  viewBox: "0 0 10 3",
};

export default MinusIcon;

<svg
  width="10"
  height="3"
  viewBox="0 0 10 3"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
></svg>;
