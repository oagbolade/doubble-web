import styled from "styled-components";

import { cssPropsFactory } from "../../utils";

const Card = styled.div.attrs(cssPropsFactory)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.paddingTop ? `padding-top: ${props.paddingTop};` : "")}
  ${(props) =>
    props.paddingBottom ? `padding-bottom: ${props.paddingBottom};` : ""}
  ${(props) => (props.marginTop ? `margin-top: ${props.marginTop};` : "")}
  ${(props) =>
    props.marginBottom ? `margin-bottom: ${props.marginBottom};` : ""}
  border-radius: ${(props) => props.borderRadius};
  display: flex;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.flexDirection};
  background: ${(props) => props.bgColor};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.position ? `position: ${props.position};` : "")}
  background: ${(props) => props.bgColor};
  box-shadow: ${(props) => props.boxShadow};
  ${(props) => (props.zIndex ? `z-index: ${props.zIndex};` : "")}
  ${(props) => (props.top ? `top: ${props.top};` : "")}
  ${(props) => (props.left ? `left: ${props.left};` : "")}
  ${(props) => (props.border ? `border: ${props.border};` : "")}
  ${(props) => (props.transform ? `transform: ${props.transform};` : "")}
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : "")}
  ${(props) => (props.mediaQueries ? props.mediaQueries : "")}
`;

Card.defaultProps = {
  bgColor: "#FFFFFF",
  alignItems: "center",
  justifyContent: "center",
  width: "640px",
  height: "100px",
  borderRadius: "20px",
  boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.1)",
  flexDirection: "row",
};

export default Card;
