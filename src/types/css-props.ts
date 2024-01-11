import { ThemedStyledProps } from "styled-components";
export type Size =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

export interface BreakPoints {
  xs?: Size;
  sm?: Size;
  md?: Size;
  lg?: Size;
}
export interface CssProps extends ThemedStyledProps<any, any> {
  xs?: Size;
  sm?: Size;
  md?: Size;
  lg?: Size;
  type?: "container" | "item";
  flexDirection?: string;
  flexWrap?: string;
  flex?: string;
  flexBasis?: string;
  flexGrow?: string;
  flexShrink?: string;
  justifyContent?: string;
  alignItems?: string;
  alignSelf?: string;
  height?: string;
  minHeight?: string;
  width?: string;
  minWidth?: string;
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  position?: string;
  zIndex?: string;
  background?: string;
  backdropFilter?: string;
  cursor?: string;
  bgColor: string;
  display?: string;
  borderRadius?: string;
  boxShadow?: string;
  textDecoration?: string;
  fontSize?: string;
  fontWeight?: string;
  fontColor?: string;
  border?: string;
  transform?: string;
  boxSizing?: string;
  overFlowY?: string;
  overFlowX?: string;
  overFlow?: string;
  opacity?: string;
  mediaQueries?: string;
  backgroundImage?: string;
}
