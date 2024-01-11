import styled from "styled-components";

import { cssPropsFactory, generateMediaQueries } from "../../utils";

export const FlexWrapper = styled.div.attrs(cssPropsFactory)`
  display: flex;
  box-sizing: border-box;
  ${(props) =>
    props.flexDirection ? `flex-direction: ${props.flexDirection};` : ""}
  ${(props) => (props.flex ? `flex: ${props.flex};` : "")}
  ${(props) => (props.flexGrow ? `flex-grow: ${props.flexGrow};` : "")}
  ${(props) => (props.flexBasis ? `flex-basis: ${props.flexBasis};` : "")}
  ${(props) => (props.flexShrink ? `flex-shrink: ${props.flexShrink};` : "")}
  ${(props) => (props.flexWrap ? `flex-wrap: ${props.flexWrap};` : "")}
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent};` : ""}
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems};` : "")}
  ${(props) => (props.alignSelf ? `align-self: ${props.alignSelf};` : "")}
  ${(props) => (props.height ? `height: ${props.height};` : "")}
  ${(props) => (props.minHeight ? `min-height: ${props.minHeight};` : "")}
  ${(props) => (props.width ? `width: ${props.width};` : "")}
  ${(props) => (props.minWidth ? `min-width: ${props.minWidth};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.paddingTop ? `padding-top: ${props.paddingTop};` : "")}
  ${(props) => (props.paddingLeft ? `padding-left: ${props.paddingLeft};` : "")}
  ${(props) =>
    props.paddingRight ? `padding-right: ${props.paddingRight};` : ""}
  ${(props) =>
    props.paddingBottom ? `padding-bottom: ${props.paddingBottom};` : ""}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.marginTop ? `margin-top: ${props.marginTop};` : "")}
  ${(props) => (props.marginLeft ? `margin-left: ${props.marginLeft};` : "")}
  ${(props) => (props.marginRight ? `margin-right: ${props.marginRight};` : "")}
  ${(props) =>
    props.marginBottom ? `margin-bottom: ${props.marginBottom};` : ""}
  ${(props) => (props.top ? `top: ${props.top};` : "")}
  ${(props) => (props.left ? `left: ${props.left};` : "")}
  ${(props) => (props.bottom ? `bottom: ${props.bottom};` : "")}
  ${(props) => (props.right ? `right: ${props.right};` : "")}
  ${(props) => (props.position ? `position: ${props.position};` : "")}
  ${(props) => (props.zIndex ? `z-index: ${props.zIndex};` : "")}
  ${(props) =>
    props.backdropFilter ? `backdrop-filter: ${props.backdropFilter};` : ""}
  ${(props) => (props.background ? `background: ${props.background};` : "")}
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : "")}
  ${(props) =>
    props.borderRadius ? `border-radius: ${props.borderRadius};` : ""}

  ${(props) => (props.border ? `border: ${props.border};` : "")}

  ${(props) => (props.boxSizing ? `box-sizing: ${props.boxSizing};` : "")}
  ${(props) => (props.overFlowY ? `overflow-y: ${props.overFlowY};` : "")}
  ${(props) => (props.overFlowX ? `overflow-x: ${props.overFlowX};` : "")}
  ${(props) => (props.overFlow ? `overflow: ${props.overFlow};` : "")}
  ${(props) => (props.opacity ? `opacity: ${props.opacity};` : "")}
  ${(props) => (props.boxShadow ? `box-shadow: ${props.boxShadow};` : "")}
  ${(props) => {
    return `${props.mediaQueries ? props.mediaQueries : ""}`;
  }}
  ${(props) => {
    if (props.type === "container") {
      return `
        flex-wrap: ${props.flexWrap};

      `;
    }
    if (props.type === "item") {
      const q = generateMediaQueries({
        ...(props.xs && { xs: props.xs }),
        ...(props.sm && { sm: props.sm }),
        ...(props.md && { md: props.md }),
        ...(props.lg && { lg: props.lg }),
      });

      return q;
    }
  }}
`;

FlexWrapper.defaultProps = {
  type: "container",
  flexWrap: "wrap",
};

export default FlexWrapper;
