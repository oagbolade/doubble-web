import styled, { ThemedStyledProps } from "styled-components";

interface WaveBoxProps extends ThemedStyledProps<any, any> {
  height?: string;
  width?: string;
  top?: string;
  left?: string;
  mediaQueries?: string;
}
const WaveBox = styled.div.attrs((props: WaveBoxProps) => ({
  height: props.height,
  width: props.width,
  top: props.top,
  left: props.left,
  mediaQueries: props.mediaQueries,
}))`
  ${(props) => (props.height ? `height: ${props.height};` : "")}
  ${(props) => (props.width ? `width: ${props.width};` : "")}
    transform: translate(-50%, -50%);
  background: #ffffff;
  box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
  border-radius: 100%;
  overflow: hidden;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  ${(props) => (props.mediaQueries ? `${props.mediaQueries}` : "")}
`;

WaveBox.defaultProps = {
  height: "120px",
  width: "120px",
  top: "20%",
  left: "50%",
};

export default WaveBox;
