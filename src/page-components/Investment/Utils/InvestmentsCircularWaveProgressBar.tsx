import { FlexWrapper, Typography, WaterWave } from "../../../shared-components";

interface InvestmentCircularWaveProgressBarProps {
  color: string;
  title: string;
  numOfDays: string;
  width?: string;
  height?: string;
  mobileWidth?: string;
  mobileHeight?: string;
  waveLargeText?: string;
  waveSmallText?: string;
  mobileWaveLargeText?: string;
  mobileWaveSmallText?: string;
  incrementValue?: number;
  top?: string;
  left?: string;
}

export const InvestmentCircularWaveProgressBarV2 = (
  props: InvestmentCircularWaveProgressBarProps
) => {
  return (
    <FlexWrapper top="60%" left="50%" position="absolute">
      <WaterWave
        incrementValue={100 - props.incrementValue}
        fill={props.color}
        bgColor={props.color}
        width={props.width}
        height={props.height}
        mediaQueries={`
          @media screen and (max-width: 600px) {
            height: ${props.mobileHeight ? props.mobileHeight : "150px"};
            width: ${props.mobileWidth ? props.mobileWidth : "150px"};
          }
        `}
        waveBoxContentMediaQueries={`
          @media screen and (max-width: 600px) {
            left: 22px;
          }
        `}
        waveBoxContentTop={props.top}
        waveBoxContentLeft={props.left}
        waveContent={
          <FlexWrapper
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              fontSize={props.waveSmallText}
              fontWeight="400"
              mediaQueries={`
                @media screen and (max-width: 600px) {
                  font-size: ${
                    props.mobileWaveSmallText
                      ? props.mobileWaveSmallText
                      : "14px"
                  };
                }
              `}
            >
              {props.title}
            </Typography>
            <div className="d-flex justify-content-center align-items-baseline">
              <Typography
                className="mr-1"
                fontSize={props.waveLargeText}
                fontWeight="700"
                mediaQueries={`
                @media screen and (max-width: 600px) {
                  font-size: ${
                    props.mobileWaveLargeText
                      ? props.mobileWaveLargeText
                      : "40px"
                  };
                }
              `}
              >
                {props.numOfDays === '-1' ? '' : props.numOfDays}
              </Typography>
              <Typography
                fontSize={props.waveSmallText}
                fontWeight="700"
                mediaQueries={`
                @media screen and (max-width: 600px) {
                  font-size: ${
                    props.mobileWaveSmallText
                      ? props.mobileWaveSmallText
                      : "14px"
                  };
                }
              `}
              >
                {props.numOfDays === '-1' ? 'Pending' : props.numOfDays === '0' ? 'day' : 'days'}
              </Typography>
            </div>
          </FlexWrapper>
        }
      />
    </FlexWrapper>
  );
};

InvestmentCircularWaveProgressBarV2.defaultProps = {
  width: "200px",
  height: "200px",
  waveLargeText: "61px",
  waveSmallText: "18px",
  incrementValue:'50'
};

const InvestmentCircularWaveProgressBar = (
  props: InvestmentCircularWaveProgressBarProps
) => {
  return (
    <FlexWrapper top="50%" left="50%" position="absolute">
      <WaterWave
        incrementValue={50}
        fill={props.color}
        bgColor={props.color}
        width="150px"
        height="150px"
        mediaQueries={`
          @media screen and (max-width: 600px) {
            height: 150px;
            width: 150px;
          }
        `}
        waveBoxContentMediaQueries={`
          @media screen and (max-width: 600px) {
            left: 22px;
          }
        `}
        waveContent={
          <FlexWrapper
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              fontSize="24px"
              fontWeight="400"
              mediaQueries={`
                @media screen and (max-width: 600px) {
                  font-size: 14px;
                }
              `}
            >
              {props.title}
            </Typography>
            <Typography
              fontSize="80px"
              fontWeight="700"
              mediaQueries={`
                @media screen and (max-width: 600px) {
                  font-size: 40px;
                }
              `}
            >
              {props.numOfDays}
            </Typography>
            <Typography
              fontSize="24px"
              fontWeight="700"
              mediaQueries={`
                @media screen and (max-width: 600px) {
                  font-size: 14px;
                }
              `}
            >
              days
            </Typography>
          </FlexWrapper>
        }
      />
    </FlexWrapper>
  );
};

export default InvestmentCircularWaveProgressBar;
