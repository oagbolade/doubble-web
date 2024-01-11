import SvgIcon, { SvgIconProps } from "./SvgIcons";

const ChevronRight = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <rect y="0.876953" width="40" height="40" rx="20" fill={props.fillColor} />
    <g clipPath="url(#clip0)" opacity={props.opacity}>
      <path
        d="M17.843 16.3018L17.386 16.7588C17.2779 16.867 17.2779 17.0424 17.386 17.1506L21.557 21.3315L17.386 25.5124C17.2779 25.6206 17.2779 25.7959 17.386 25.9041L17.843 26.3611C17.9512 26.4693 18.1266 26.4693 18.2348 26.3611L23.0685 21.5273C23.1767 21.4192 23.1767 21.2438 23.0685 21.1356L18.2348 16.3018C18.1266 16.1937 17.9512 16.1937 17.843 16.3018Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="5.90909"
          height="11.8182"
          fill="white"
          transform="translate(17.2727 15.4229)"
        />
      </clipPath>
    </defs>
  </SvgIcon>
);

ChevronRight.defaultProps = {
  fillColor: "#00CCFF",
  width: "40",
  height: "41",
  viewBox: "0 0 40 41",
  opacity: "0.1",
};

export default ChevronRight;
