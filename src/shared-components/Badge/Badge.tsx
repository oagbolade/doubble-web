import styled, { ThemedStyledProps } from "styled-components";

interface BadgeProps extends ThemedStyledProps<any, any> {
  badgeHeight?: string;
  badgeWidth?: string;
  bgColor?: string;
  borderRadius?: string;
  badgeFontColor?: string;
  badgeFontSize?: string;
  badgeFontWeight?: string;
  badgePadding?: string;
  badgeTextAlign?: string;
}

const Badge = styled.span.attrs((props: BadgeProps) => ({
  badgeHeight: props.badgeHeight,
  badgeWidth: props.badgeWidth,
  bgColor: props.bgColor,
  borderRadius: props.borderRadius,
  badgeFontColor: props.badgeFontColor,
  badgeFontSize: props.badgeFontSize,
  badgeFontWeight: props.badgeFontWeight,
  badgePadding: props.badgePadding,
  badgeTextAlign: props.badgeTextAlign,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.badgeWidth};
  height: ${(props) => props.badgeHeight};
  background: ${(props) => props.bgColor};
  border-radius: ${(props) => props.borderRadius};
  ${(props) => (props.badgeFontColor ? `color: ${props.badgeFontColor};` : "")}
  ${(props) =>
    props.badgeFontSize ? `font-size: ${props.badgeFontSize};` : ""}
  ${(props) =>
    props.badgeFontWeight ? `font-weight: ${props.badgeFontWeight};` : ""}
  ${(props) => (props.badgePadding ? `padding: ${props.badgePadding};` : "")}
  ${(props) =>
    props.badgeTextAlign ? `text-align: ${props.badgeTextAlign};` : ""}
`;
Badge.defaultProps = {
  badgeHeight: "60px",
  badgeWidth: "15px",
  bgColor: "#E5E5E5",
  borderRadius: "2px",
  badgePadding: "5px",
};

export default Badge;
