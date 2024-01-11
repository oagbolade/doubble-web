import {
  FlexWrapper,
  Typography,
  HorizontalProgressBar,
} from "../../../shared-components";

interface InvestmentModalHorizontalProgressBarProps {
  color: string;
  period: string;
  filledWidth: number;
  emptyWidth: number;
  fontColor?: string;
  justifyContent?: string;
  width?: string;
}
const InvestmentModalHorizontalProgressBar = (
  props: InvestmentModalHorizontalProgressBarProps
) => {
  return (
    <FlexWrapper
      width={props.width || "100%"}
      boxSizing="border-box"
      flexDirection="column"
    >
      <HorizontalProgressBar
        bgColor={props.color}
        filledWidth={props.filledWidth}
        emptyWidth={props.emptyWidth}
        height="5px"
      />
      <FlexWrapper justifyContent={props.justifyContent || "flex-end"} marginTop="5px">
        <Typography fontColor={props.fontColor} fontSize="8px">{props.period}</Typography>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default InvestmentModalHorizontalProgressBar;
