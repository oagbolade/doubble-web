import styled, { ThemedStyledProps } from "styled-components";

interface WaveBoxWaterProps extends ThemedStyledProps<any, any> {
  bgColor?: string;
  incrementValue?: number;
}

const WaveBoxWater = styled.div.attrs((props: WaveBoxWaterProps) => ({
  bgColor: props.bgColor,
  incrementValue: props.incrementValue,
}))`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  transform: translate(0, ${(props) => 100 - props.incrementValue}%);
  ${(props) => (props.bgColor ? `background: ${props.bgColor};` : "")}
  transition: all 0.3s;
`;

WaveBoxWater.defaultProps = {
  bgColor: "#4D6DE3",
  incrementValue: 0,
};

export default WaveBoxWater;
