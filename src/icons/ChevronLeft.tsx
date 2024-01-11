import SvgIcon, { SvgIconProps } from "./SvgIcons";

const ChevronLeft = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <g opacity={props.opacity}>
      <rect
        width="40"
        height="40"
        rx="20"
        transform="matrix(-1 0 0 1 40 0.876953)"
        fill={props.fillColor}
      />
      <g clipPath="url(#clip0)">
        <rect
          width="5.90909"
          height="11.8182"
          transform="matrix(-1 0 0 1 22.7273 15.4229)"
          fill={props.fillColor}
        />
        <path
          d="M22.157 16.3018L22.614 16.7588C22.7222 16.867 22.7222 17.0424 22.614 17.1506L18.443 21.3315L22.614 25.5124C22.7222 25.6206 22.7222 25.7959 22.614 25.9041L22.157 26.3611C22.0488 26.4693 21.8735 26.4693 21.7653 26.3611L16.9315 21.5273C16.8233 21.4192 16.8233 21.2438 16.9315 21.1356L21.7653 16.3018C21.8735 16.1937 22.0488 16.1937 22.157 16.3018Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="5.90909"
          height="11.8182"
          fill="white"
          transform="matrix(-1 0 0 1 22.7273 15.4229)"
        />
      </clipPath>
    </defs>
  </SvgIcon>
);

ChevronLeft.defaultProps = {
  fillColor: "#00CCFF",
  width: "40",
  height: "41",
  viewBox: "0 0 40 41",
  opacity: "0.1",
};

export default ChevronLeft;
