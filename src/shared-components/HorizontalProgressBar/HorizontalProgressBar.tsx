import styled, { ThemedStyledProps } from "styled-components";

import { FlexWrapper } from "../";

interface HorizontProgressBarProps extends ThemedStyledProps<any, any> {
  height?: string;
  filledWidth?: number;
  emptyWidth?: number;
  bgColor?: string;
  mediaQueries?: string;
}

const FilledHorizontalProgressBar = styled.div.attrs(
  (props: HorizontProgressBarProps) => ({
    filledWidth: props.filledWidth,
    bgColor: props.bgColor,
  })
)`
  background: ${(props) => props.bgColor};
  width: ${(props) => props.filledWidth}%;
  height: 100%;
  border-radius: ${(props) =>
    props.filledWidth === 100 ? "10px" : "10px 0px 0px 10px"};
`;

FilledHorizontalProgressBar.defaultProps = {
  filledWidth: 100,
  bgColor: "#62DFFF",
};

const EmptyHorizontalProgressBar = styled.div.attrs(
  (props: HorizontProgressBarProps) => ({
    emptyWidth: props.emptyWidth,
    bgColor: props.bgColor,
  })
)`
  background: #ffffff;
  width: ${(props) => props.emptyWidth}%;
  height: 100%;
  border-radius: ${(props) =>
    props.emptyWidth === 100 ? "10px" : "0px 10px 10px 0px"};
`;

EmptyHorizontalProgressBar.defaultProps = {
  emptyWidth: 0,
  bgColor: "#FFFFFF",
};

const HorizontalProgressBar = (props: HorizontProgressBarProps) => {
  return (
    <FlexWrapper
      height={props.height}
      width="100%"
      boxShadow="1px 1px 5px rgba(0, 0, 0, 0.1)"
      borderRadius="10px"
      mediaQueries={props.mediaQueries}
      background="#fff"
    >
      <FilledHorizontalProgressBar {...props} />
      <EmptyHorizontalProgressBar {...props} />
    </FlexWrapper>
  );
};

HorizontalProgressBar.defaultProps = {
  height: "20px",
};

export default HorizontalProgressBar;
