import React from "react";
import styled, { ThemedStyledProps } from "styled-components";
interface TypographyProps extends ThemedStyledProps<any, any> {
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  fontSize?: string;
  fontWeight?: string;
  fontColor?: string;
  fontWidth?: string;
  height?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  marginTop?: string;
  margin?: string;
  padding?: string;
  position?: "absolute" | "relative" | "fixed" | "sticky";
  top?: string;
  width?: string;
  left?: string;
  right?: string;
  bottom?: string;
  letterSpacing?: string;
  textAlign?: string;
  background?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  textTransform?: "none" | "capitalize" | "lowercase" | "uppercase";
  borderRadius?: string;
  mediaQueries?: string;
}
const CustomPropsFunction = (props: TypographyProps) => ({
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  fontColor: props.fontColor,
  marginTop: props.marginTop,
  marginBottom: props.marginBottom,
  marginLeft: props.marginLeft,
  marginRight: props.marginRight,
  margin: props.margin,
  padding: props.padding,
  letterSpacing: props.letterSpacing,
  position: props.position,
  top: props.top,
  left: props.left,
  right: props.right,
  bottom: props.bottom,
  width: props.width,
  height: props.height,
  textAlign: props.textAlign,
  textTransform: props.textTransform,
  display: props.display,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  mediaQueries: props.mediaQueries,
  background: props.background,
  borderRadius: props.borderRadius,
  cursor: props.cursor,
});
const CustomStyleFunction = (props: TypographyProps) => {
  return `
    font-size: ${props.fontSize};
    font-weight: ${props.fontWeight};
    color: ${props.fontColor};
    margin-top: ${props.marginTop};
    margin-bottom: ${props.marginBottom};
    ${props.marginLeft ? `margin-left: ${props.marginLeft};` : ""}
    ${props.marginRight ? `margin-right: ${props.marginRight};` : ""}
    ${props.letterSpacing ? `letter-spacing: ${props.letterSpacing};` : ""}
    ${props.position ? `position: ${props.position};` : ""}
    ${props.top ? `top: ${props.top};` : ""}
    ${props.left ? `left: ${props.left};` : ""}
    ${props.right ? `right: ${props.right};` : ""}
    ${props.bottom ? `right: ${props.bottom};` : ""}
    ${props.height ? `height: ${props.height};` : ""}
    ${props.width ? `width: ${props.width};` : ""}
    ${props.textAlign ? `text-align: ${props.textAlign};` : ""}
    ${props.padding ? `padding: ${props.padding};` : ""}
    ${props.background ? `background: ${props.background};` : ""}
    ${props.borderRadius ? `border-radius: ${props.borderRadius};` : ""}
    ${props.textTransform ? `text-transform: ${props.textTransform};` : ""}
    ${props.mediaQueries ? props.mediaQueries : ""}
    ${props.cursor ? `cursor: ${props.cursor};` : ""}
    ${props.display ? `display: ${props.display};` : ""}
    ${props.alignItems ? `align-items: ${props.alignItems};` : ""}
  `;
};
const Paragraph = styled.p.attrs(CustomPropsFunction)`
  ${(props) => {
    return CustomStyleFunction(props);
  }}
`;

const Span = styled.span.attrs(CustomPropsFunction)`
  ${(props) => {
    return CustomStyleFunction(props);
  }}
`;

const H1 = styled.h1.attrs(CustomPropsFunction)`
  ${(props) => {
    return CustomStyleFunction(props);
  }}
`;

const mapVariantsToComponent = {
  p: Paragraph,
  h1: H1,
  span: Span,
};

const Typography = React.forwardRef((props: TypographyProps, ref) => {
  const Component = mapVariantsToComponent[props.variant];
  return <Component {...props} ref={ref} />;
});

Typography.defaultProps = {
  fontColor: "#263D61",
  fontWeight: "400",
  fontSize: "18px",
  marginTop: "0",
  marginBottom: "0",
  variant: "p",
};

export default Typography;
