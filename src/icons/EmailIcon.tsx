import SvgIcon, { SvgIconProps } from "./SvgIcons";

const EmailIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <rect
      width={props.width}
      height={props.height}
      fill=""
    />
    <defs>
      <pattern
        id=""
        /* patternContentUnits="objectBoundingBox" */
        width="1"
        height="1"
      >
        <use
          xlinkHref=""
          transform="translate(-0.4 -0.164557) scale(0.00116829 0.00140491)"
        />
      </pattern>
      <image
        id=""
        width="1501"
        height="901"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </SvgIcon>
);

EmailIcon.defaultProps = {
  width: "45",
  height: "40",
  viewBox: "0 0 45 40",
};

export default EmailIcon;