import SvgIcon, { SvgIconProps } from "./SvgIcons";

const FacebookIcon = (props: SvgIconProps) => (
    <SvgIcon {...props}>
        <path d="M8.875 4.20703C6.625 4.20703 4.83203 6.03516 4.83203 8.25C4.83203 10.5 6.625 12.293 8.875 12.293C11.0898 12.293 12.918 10.5 12.918 8.25C12.918 6.03516 11.0898 4.20703 8.875 4.20703ZM8.875 10.8867C7.43359 10.8867 6.23828 9.72656 6.23828 8.25C6.23828 6.80859 7.39844 5.64844 8.875 5.64844C10.3164 5.64844 11.4766 6.80859 11.4766 8.25C11.4766 9.72656 10.3164 10.8867 8.875 10.8867ZM14.0078 4.06641C14.0078 3.53906 13.5859 3.11719 13.0586 3.11719C12.5312 3.11719 12.1094 3.53906 12.1094 4.06641C12.1094 4.59375 12.5312 5.01562 13.0586 5.01562C13.5859 5.01562 14.0078 4.59375 14.0078 4.06641ZM16.6797 5.01562C16.6094 3.75 16.3281 2.625 15.4141 1.71094C14.5 0.796875 13.375 0.515625 12.1094 0.445312C10.8086 0.375 6.90625 0.375 5.60547 0.445312C4.33984 0.515625 3.25 0.796875 2.30078 1.71094C1.38672 2.625 1.10547 3.75 1.03516 5.01562C0.964844 6.31641 0.964844 10.2188 1.03516 11.5195C1.10547 12.7852 1.38672 13.875 2.30078 14.8242C3.25 15.7383 4.33984 16.0195 5.60547 16.0898C6.90625 16.1602 10.8086 16.1602 12.1094 16.0898C13.375 16.0195 14.5 15.7383 15.4141 14.8242C16.3281 13.875 16.6094 12.7852 16.6797 11.5195C16.75 10.2188 16.75 6.31641 16.6797 5.01562ZM14.9922 12.8906C14.7461 13.5938 14.1836 14.1211 13.5156 14.4023C12.4609 14.8242 10 14.7188 8.875 14.7188C7.71484 14.7188 5.25391 14.8242 4.23438 14.4023C3.53125 14.1211 3.00391 13.5938 2.72266 12.8906C2.30078 11.8711 2.40625 9.41016 2.40625 8.25C2.40625 7.125 2.30078 4.66406 2.72266 3.60938C3.00391 2.94141 3.53125 2.41406 4.23438 2.13281C5.25391 1.71094 7.71484 1.81641 8.875 1.81641C10 1.81641 12.4609 1.71094 13.5156 2.13281C14.1836 2.37891 14.7109 2.94141 14.9922 3.60938C15.4141 4.66406 15.3086 7.125 15.3086 8.25C15.3086 9.41016 15.4141 11.8711 14.9922 12.8906Z" fill={props.fillColor} />
    </SvgIcon>
);

FacebookIcon.defaultProps = {
    fillColor: "#00CCFF",
    width: "21",
    height: "21",
};

export default FacebookIcon;