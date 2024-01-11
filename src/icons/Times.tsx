import SvgIcon, { SvgIconProps } from "./SvgIcons";

const TimesIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fill-rule="evenodd" clip-rule="evenodd" d="M4.99997 5.70748L8.64597 9.35448L9.35397 8.64748L5.70697 5.00048L9.35397 1.35448L8.64697 0.646484L4.99997 4.29348L1.35397 0.646484L0.646973 1.35448L4.29297 5.00048L0.646973 8.64648L1.35397 9.35448L4.99997 5.70748Z"
      fill={props.fillColor}
    />
  </SvgIcon>
);

TimesIcon.defaultProps = {
  fillColor: "#263E61",
  width: "22",
  height: "22",
  viewBox: "0 0 22 22",
};

export default TimesIcon;
