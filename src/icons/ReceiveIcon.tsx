import SvgIcon, { SvgIconProps } from "./SvgIcons";

const ReceiveIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} fillColor="none">
    <path
      d="M1.24707 14.903L17.5596 7.08195C18.1924 6.78903 18.1221 6.02742 17.4893 5.82238L13.7275 4.50422L3.6377 11.9152C3.46192 12.0617 3.18067 11.8566 3.35645 11.6809L11.7939 3.09818V0.725495C11.7939 0.0224771 10.8096 -0.241155 10.3174 0.256817L8.06739 2.54163L3.70801 0.989127C3.21582 0.813373 2.61817 1.077 2.54786 1.54568L0.0166054 14.2C-0.12402 14.7859 0.649418 15.196 1.24707 14.903Z"
      fill="#6FCF97"
    />
  </SvgIcon>
);

ReceiveIcon.default = {
  width: "18",
  height: "15",
  viewBox: "0 0 18 15",
};

export default ReceiveIcon;
