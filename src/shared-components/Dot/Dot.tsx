import styled, { ThemedStyledProps } from "styled-components";

interface DotProps extends ThemedStyledProps<any, any> {
  dotColor: string;
  height?: string;
  width?: string;
}

const Dot = styled.span.attrs((props: DotProps) => ({
  dotColor: props.dotColor,
  width: props.width,
  height: props.height,
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  background: ${(props) => props.dotColor};
`;

Dot.defaultProps = {
  dotColor: "#ABEEFF",
  height: "20px",
  width: "20px",
};

export default Dot;
