import { FlexWrapper, Typography } from "../../../shared-components";

interface InvestmentModalInvestmentDurationProps {
  startDate: string;
  endDate: string;
}
const InvestmentModalInvestmentDuration = (
  props: InvestmentModalInvestmentDurationProps
) => {
  return (
    <FlexWrapper justifyContent="space-between" margin="5px">
      <FlexWrapper flexDirection="column">
        <Typography fontSize="12px" fontWeight="400" fontColor="#263E61">
          Start Date
        </Typography>
        <Typography fontSize="12px" fontWeight="400" fontColor="#263E61">
          {props.startDate}
        </Typography>
      </FlexWrapper>

      <FlexWrapper flexDirection="column" alignItems="flex-end">
        <Typography fontSize="12px" fontWeight="400" fontColor="#263E61">
          End Date
        </Typography>
        <Typography fontSize="12px" fontWeight="400" fontColor="#263E61">
          {props.endDate}
        </Typography>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default InvestmentModalInvestmentDuration;
