import styled, { ThemedStyledProps } from "styled-components";

interface WaveBoxContentProps extends ThemedStyledProps<any, any> {
  mediaQueries?: string;
  top?: string;
  left?: string;
}
const WaveBoxContent = styled.div.attrs((props: WaveBoxContentProps) => ({
  mediaQueries: props.mediaQueries,
  top: props.top,
  left: props.left
}))`
  position: absolute;
  z-index: 3;
  width: 70%;
  height: 70%;
  display: flex;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  align-items: center;
  justify-content: center;
  ${(props) => (props.mediaQueries ? props.mediaQueries : "")}
`;

WaveBoxContent.defaultProps = {
  top: "50px",
  left: "30px"
}

export default WaveBoxContent;
