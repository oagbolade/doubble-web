import SvgIcon, { SvgIconProps } from "./SvgIcons";

const RightArrowIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} fillColor="none">
    <path
      d="M5.03418 4.58496C5.20996 4.40918 5.20996 4.11621 5.03418 3.94043L1.24512 0.131836C1.0498 -0.0439453 0.756836 -0.0439453 0.581055 0.131836L0.131836 0.581055C-0.0439453 0.756836 -0.0439453 1.0498 0.131836 1.24512L3.13965 4.25293L0.131836 7.28027C-0.0439453 7.47559 -0.0439453 7.76855 0.131836 7.94434L0.581055 8.39355C0.756836 8.56934 1.0498 8.56934 1.24512 8.39355L5.03418 4.58496Z"
      fill="#263E61"
    />
  </SvgIcon>
);

RightArrowIcon.default = {
  width: "6",
  height: "9",
  viewBox: "0 0 6 9",
};

export default RightArrowIcon;
