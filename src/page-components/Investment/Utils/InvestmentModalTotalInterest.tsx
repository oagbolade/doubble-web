import { FlexWrapper, Typography } from "../../../shared-components";

interface InvestModalTotalInterestProps {
  durationCovered: string;
  totalInterest: string;
}
const InvestmentModalTotalInterest = (props: InvestModalTotalInterestProps) => {
  return (
    <FlexWrapper justifyContent="space-between" margin="5px">
      <FlexWrapper flexDirection="column">
        <Typography fontSize="12px" fontWeight="400" fontColor="#263E61">
          Duration Covered
        </Typography>
        <Typography fontSize="12px" fontWeight="400" fontColor="#263E61">
          {props.durationCovered}
        </Typography>
      </FlexWrapper>

      <FlexWrapper flexDirection="column" alignItems="flex-end">
        <Typography fontSize="12px" fontWeight="400" fontColor="#263E61">
          Total Interest
        </Typography>
        <Typography fontSize="12px" fontWeight="400" fontColor="#263E61">
          {props.totalInterest}
        </Typography>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default InvestmentModalTotalInterest;
