import SvgIcon, { SvgIconProps } from "./SvgIcons";

const OpenMessageIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      d="M6.875 8.4375H13.125C13.4375 8.4375 13.75 8.16406 13.75 7.8125V7.1875C13.75 6.875 13.4375 6.5625 13.125 6.5625H6.875C6.52344 6.5625 6.25 6.875 6.25 7.1875V7.8125C6.25 8.16406 6.52344 8.4375 6.875 8.4375ZM6.25 11.5625C6.25 11.9141 6.52344 12.1875 6.875 12.1875H13.125C13.4375 12.1875 13.75 11.9141 13.75 11.5625V10.9375C13.75 10.625 13.4375 10.3125 13.125 10.3125H6.875C6.52344 10.3125 6.25 10.625 6.25 10.9375V11.5625ZM10 16.3281C9.33594 16.3281 8.71094 16.1328 8.16406 15.7031L0 9.80469V18.125C0 19.1797 0.820312 20 1.875 20H18.125C19.1406 20 20 19.1797 20 18.125V9.80469L11.7969 15.7031C11.25 16.1328 10.625 16.3281 10 16.3281ZM19.2578 6.36719C18.9062 6.13281 18.5938 5.85938 18.125 5.50781V3.75C18.125 2.73438 17.2656 1.875 16.25 1.875H13.2031C13.0859 1.79688 12.9688 1.71875 12.8516 1.64062C12.1875 1.17188 10.8984 0 10 0C9.0625 0 7.77344 1.17188 7.10938 1.64062C6.99219 1.71875 6.875 1.79688 6.75781 1.875H3.75C2.69531 1.875 1.875 2.73438 1.875 3.75V5.50781C1.36719 5.85938 1.05469 6.13281 0.703125 6.36719C0.273438 6.71875 0 7.26562 0 7.85156V8.28125L3.75 10.9766V3.75H16.25V10.9766L20 8.28125V7.85156C20 7.26562 19.7266 6.75781 19.2578 6.36719Z"
      fill={props.fillColor}
    />
  </SvgIcon>
);

OpenMessageIcon.defaultProps = {
  fillColor: "#00CCFF",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
};

export default OpenMessageIcon;
