import SvgIcon, { SvgIconProps } from "./SvgIcons";

const FacebookIcon = (props: SvgIconProps) => (
    <SvgIcon {...props}>
        <path d="M9.80859 10.375L10.3008 7.14062H7.17188V5.03125C7.17188 4.11719 7.59375 3.27344 9 3.27344H10.4414V0.496094C10.4414 0.496094 9.14062 0.25 7.91016 0.25C5.34375 0.25 3.65625 1.83203 3.65625 4.64453V7.14062H0.773438V10.375H3.65625V18.25H7.17188V10.375H9.80859Z" fill={props.fillColor} />
    </SvgIcon>
);

FacebookIcon.defaultProps = {
    fillColor: "#00CCFF",
    width: "21",
    height: "21",
};

export default FacebookIcon;
