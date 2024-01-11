import styled, { ThemedStyledProps } from "styled-components";

interface WaveBoxWaterWaveStyleProps extends ThemedStyledProps<any, any> {
  fill?: string;
}

const WaveBoxWaterWaveStyle = styled.svg.attrs(
  (props: WaveBoxWaterWaveStyleProps) => ({
    fill: props.fill,
    viewBox: "0 0 560 20",
  })
)`
  left: 0;
  ${(props) => (props.fill ? `fill: ${props.fill};` : "")}
  margin-bottom: -1px;
  -webkit-animation: wave-front 0.7s infinite linear;
  animation: wave-front 0.7s infinite linear;
  width: 200%;
  position: absolute;
  bottom: 100%;
  @-webkit-keyframes wave-front {
    100% {
      transform: translate(-50%, 0);
    }
  }

  @keyframes wave-front {
    100% {
      transform: translate(-50%, 0);
    }
  }
`;

WaveBoxWaterWaveStyle.defaultProps = {
  fill: "#4D6DE3",
};

interface WaveBoxWaterWaveProps {
  fill?: string;
}
const WaveBoxWaterWave = (props: WaveBoxWaterWaveProps) => {
  return (
    <WaveBoxWaterWaveStyle fill={props.fill}>
      <use xlinkHref="#wave" />
    </WaveBoxWaterWaveStyle>
  );
};

export default WaveBoxWaterWave;
