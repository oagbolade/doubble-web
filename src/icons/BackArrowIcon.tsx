import SvgIcon, { SvgIconProps } from "./SvgIcons";
const BackArrowIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      d="M0.463918 13.866C-0.154639 14.4845 -0.154639 15.5155 0.463918 16.134L13.7973 29.5361C14.4845 30.1546 15.5155 30.1546 16.134 29.5361L17.7148 27.9553C18.3333 27.3368 18.3333 26.3058 17.7148 25.6186L7.13058 14.9656L17.7148 4.38144C18.3333 3.69416 18.3333 2.66323 17.7148 2.04467L16.134 0.463918C15.5155 -0.154639 14.4845 -0.154639 13.7973 0.463918L0.463918 13.866Z"
      fill={props.fillColor}
    />
  </SvgIcon>
);

BackArrowIcon.defaultProps = {
  fillColor: "#F8F9FA",
};

export default BackArrowIcon;
