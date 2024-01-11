import { ReactNode } from "react";

export interface SvgIconProps {
  className?: string;
  color?: string;
  fillColor?: string;
  fontSize?: string;
  viewBox?: string;
  children?: ReactNode;
  height?: string;
  width?: string;
  opacity?: string;
  style?: { [x: string]: string };
  onClick?: () => void;
}
const SvgIcon = (props: SvgIconProps) => {
  const {
    className,
    color,
    fontSize,
    viewBox,
    children,
    opacity,
    onClick,
  } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox={viewBox}
      className={className}
      fill={props.fillColor}
      onClick={onClick}
      opacity={opacity}
      style={{
        color,
        fontSize,
        ...props.style,
      }}
    >
      {children}
    </svg>
  );
};

SvgIcon.defaultProps = {
  color: "inherit",
  fontSize: "default",
  viewBox: "0 0 27 30",
  fillColor: "currentColor",
  width: "27",
  height: "30",
};

export default SvgIcon;
