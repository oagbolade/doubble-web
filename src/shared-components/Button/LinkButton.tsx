import Link from "next/link";

import styled from "styled-components";
import { cssPropsFactory } from "../../utils";

const LinkButtonStyle = styled.a.attrs(cssPropsFactory)`
  text-decoration: none;
  line-height: 1.5;
  cursor: pointer;
  ${(props) => (props.fontColor ? `color: ${props.fontColor};` : "")}
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize};` : "")}
  ${(props) => (props.fontWeight ? `font-weight: ${props.fontWeight};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) =>
    props.marginBottom ? `margin-bottom: ${props.marginBottom};` : ""}

  ${(props) => (props.marginLeft ? `margin-left: ${props.marginLeft};` : "")}
  ${(props) => (props.marginRight ? `margin-right: ${props.marginRight};` : "")}
  ${(props) => (props.marginTop ? `margin-top: ${props.marginTop};` : "")}
`;

LinkButtonStyle.defaultProps = {
  fontSize: "18px",
  fontWeight: "400",
  fontColor: "#263e61",
};

interface LinkButtonProps {
  url: string;
  text: string;
  fontSize?: string;
  fontWeight?: string;
  fontColor?: string;
  margin?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}
const LinkButton = (props: LinkButtonProps) => {
  return (
    <Link href={props.url}>
      <LinkButtonStyle
        fontSize={props.fontSize}
        fontColor={props.fontColor}
        fontWeight={props.fontWeight}
        margin={props.margin}
        marginBottom={props.marginBottom}
        marginLeft={props.marginLeft}
        marginRight={props.marginRight}
      >
        {props.text}
      </LinkButtonStyle>
    </Link>
  );
};

export default LinkButton;
