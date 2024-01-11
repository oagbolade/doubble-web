import SvgIcon, { SvgIconProps } from "./SvgIcons";

const CloseIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      d="M15.1504 10.9688L21.3915 4.72766C22.2028 3.97872 22.2028 2.7305 21.3915 1.98156L20.0184 0.608511C19.2695 -0.202837 18.0213 -0.202837 17.2723 0.608511L11.0312 6.84965L4.72766 0.608511C3.97872 -0.202837 2.7305 -0.202837 1.98156 0.608511L0.608511 1.98156C-0.202837 2.7305 -0.202837 3.97872 0.608511 4.72766L6.84965 10.9688L0.608511 17.2723C-0.202837 18.0213 -0.202837 19.2695 0.608511 20.0184L1.98156 21.3915C2.7305 22.2028 3.97872 22.2028 4.72766 21.3915L11.0312 15.1504L17.2723 21.3915C18.0213 22.2028 19.2695 22.2028 20.0184 21.3915L21.3915 20.0184C22.2028 19.2695 22.2028 18.0213 21.3915 17.2723L15.1504 10.9688Z"
      fill={props.fillColor}
    />
  </SvgIcon>
);

CloseIcon.defaultProps = {
  fillColor: "#263E61",
  width: "22",
  height: "22",
  viewBox: "0 0 22 22",
};

export default CloseIcon;