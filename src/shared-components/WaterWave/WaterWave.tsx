import React from "react";

import Wave from "./Wave";
import WaveBox from "./WaveBox";
import WaveBoxContent from "./WaveBoxContent";
import WaveBoxWater from "./WaveBoxWater";
import WaveBoxWaterWave from "./WaveBoxWaterWave";

interface WaterWaveProps {
  waveContent?: React.ReactNode;
  height?: string;
  width?: string;
  top?: string;
  left?: string;
  bgColor?: string;
  incrementValue?: number;
  fill?: string;
  mediaQueries?: string;
  waveBoxContentMediaQueries?: string;
  waveBoxContentTop?: string;
  waveBoxContentLeft?: string;
}
const WaterWave = (props: WaterWaveProps) => {
  return (
    <>
      <Wave />
      <WaveBox
        width={props.width}
        height={props.height}
        top={props.top}
        left={props.left}
        mediaQueries={props.mediaQueries}
      >
        <WaveBoxContent
          mediaQueries={props.waveBoxContentMediaQueries}
          top={props.waveBoxContentTop}
          left={props.waveBoxContentLeft}
        >
          {props.waveContent}
        </WaveBoxContent>
        <WaveBoxWater
          bgColor={props.bgColor}
          incrementValue={props.incrementValue}
        >
          <WaveBoxWaterWave fill={props.fill} />
        </WaveBoxWater>
      </WaveBox>
    </>
  );
};

export default WaterWave;
