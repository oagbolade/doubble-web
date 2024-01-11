import { CssProps, Size, BreakPoints } from "../types";

export const cssPropsFactory = (props: CssProps) => ({
  type: props.type,
  xs: props.xs,
  sm: props.sm,
  md: props.md,
  lg: props.lg,
  flexDirection: props.flexDirection,
  flexWrap: props.flexWrap,
  flex: props.flex,
  flexGrow: props.flexGrow,
  flexBasis: props.flexBasis,
  flexShrink: props.flexShrink,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  alignSelf: props.alignSelf,
  height: props.height,
  minHeight: props.minHeight,
  width: props.width,
  minWidth: props.minWidth,
  padding: props.padding,
  paddingTop: props.paddingTop,
  paddingBottom: props.paddingBottom,
  paddingLeft: props.paddingLeft,
  paddingRight: props.paddingRight,
  margin: props.margin,
  marginTop: props.marginTop,
  marginBottom: props.marginBottom,
  marginLeft: props.marginLeft,
  marginRight: props.marginRight,
  top: props.top,
  left: props.left,
  bottom: props.bottom,
  right: props.right,
  position: props.position,
  zIndex: props.zIndex,
  background: props.background,
  backdropFilter: props.backdropFilter,
  cursor: props.cursor,
  bgColor: props.bgColor,
  display: props.display,
  borderRadius: props.borderRadius,
  border: props.border,
  boxShadow: props.boxShadow,
  textDecoration: props.textDecoration,
  fontColor: props.fontColor,
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  transform: props.transform,
  boxSizing: props.boxSizing,
  overFlowY: props.overFlowY,
  overFlowX: props.overFlowX,
  overFlow: props.overFlow,
  opacity: props.opacity,
  mediaQueries: props.mediaQueries,
  backgroundImage: props.backgroundImage,
});

export function generateGridWidth(size: Size) {
  if (!size) return "max-width: 100%;";
  let width = (Number(size) / 12) * 100;
  return `
    max-width: ${width}%;
    width: ${width}%;
  `;
}

export function generateMediaQueries(breakpoints: BreakPoints) {
  const { xs, sm, md, lg } = breakpoints;
  return `
    ${
      xs
        ? `
        ${generateGridWidth(xs)}
        flex-basis: ${(Number(xs) / 12) * 100}%;
        box-sizing: border-box;
      `
        : ""
    }
    ${
      -sm
        ? `@media only screen and (min-width: 768px) {
        ${generateGridWidth(sm)}
        flex-basis: ${(Number(sm) / 12) * 100}%;
        box-sizing: border-box;
      }`
        : ""
    }
    ${
      md
        ? `@media only screen and (min-width: 992px) {
        ${generateGridWidth(md)}
        flex-basis: ${(Number(md) / 12) * 100}%;
        box-sizing: border-box;
      }`
        : ""
    }
    ${
      lg
        ? `@media only screen and (min-width: 1200px) {
        ${generateGridWidth(lg)}
        flex-basis: ${(Number(lg) / 12) * 100}%;
        box-sizing: border-box;
      }`
        : ""
    }
  `;
}
