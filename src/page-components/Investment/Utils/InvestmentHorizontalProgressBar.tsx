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
}
const InvestmentModalHorizontalProgressBar = (
  props: InvestmentModalHorizontalProgressBarProps
) => {
  return (
    <FlexWrapper
      width="100%"
      boxSizing="border-box"
      flexDirection="column"
    >
      <HorizontalProgressBar
        bgColor={props.color}
        filledWidth={props.filledWidth}
        emptyWidth={props.emptyWidth}
        height="5px"
      />
      <FlexWrapper justifyContent="flex-end" marginTop="5px">
        <Typography fontSize="8px">{props.period}</Typography>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default InvestmentModalHorizontalProgressBar;
