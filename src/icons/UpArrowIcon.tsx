import SvgIcon, { SvgIconProps } from "./SvgIcons";

const UpArrowIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      d="M16.134 0.463918C15.5155 -0.154639 14.4845 -0.154639 13.866 0.463918L0.463919 13.7973C-0.154638 14.4845 -0.154638 15.5155 0.463919 16.134L2.04467 17.7148C2.66323 18.3333 3.69416 18.3333 4.38144 17.7148L15.0344 7.13058L25.6186 17.7148C26.3058 18.3333 27.3368 18.3333 27.9553 17.7148L29.5361 16.134C30.1546 15.5155 30.1546 14.4845 29.5361 13.7973L16.134 0.463918Z"
      fill={props.fillColor}
    />
  </SvgIcon>
);

UpArrowIcon.defaultProps = {
  fillColor: "#00CCFF",
  width: "30",
  height: "19",
  viewBox: "0 0 30 19",
};

export default UpArrowIcon;
