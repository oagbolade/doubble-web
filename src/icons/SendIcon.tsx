import SvgIcon, { SvgIconProps } from "./SvgIcons";

const SendIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} fillColor="none">
    <path
      d="M16.7532 0.0969725L0.440671 7.91805C-0.192142 8.21097 -0.121829 8.97258 0.510983 9.17762L4.2727 10.4958L14.3625 3.0848C14.5383 2.93834 14.8196 3.14338 14.6438 3.31914L6.2063 11.9018V14.2745C6.2063 14.9775 7.19067 15.2412 7.68286 14.7432L9.93286 12.4584L14.2922 14.0109C14.7844 14.1866 15.3821 13.923 15.4524 13.4543L17.9836 0.799991C18.1243 0.214142 17.3508 -0.195952 16.7532 0.0969725Z"
      fill="#B04AFF"
    />
  </SvgIcon>
);

SendIcon.default = {
  width: "18",
  height: "15",
  viewBox: "0 0 18 15",
};

export default SendIcon;
