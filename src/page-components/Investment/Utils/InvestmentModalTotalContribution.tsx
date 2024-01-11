import { FlexWrapper, Typography } from "../../../shared-components";

interface InvestmentModalTotalContributionProps {
  deposit: string;
  totalContribution: string;
}

const InvestmentModalTotalContribution = (
  props: InvestmentModalTotalContributionProps
) => {
  return (
    <FlexWrapper justifyContent="space-between" margin="5px">
      <FlexWrapper flexDirection="column">
        <Typography fontSize="12px" fontWeight="400" fontColor="#263E61">
          Deposit
        </Typography>
        <Typography fontSize="12px" fontWeight="400" fontColor="#263E61">
          {props.deposit}
        </Typography>
      </FlexWrapper>

      <FlexWrapper flexDirection="column" alignItems="flex-end">
        <Typography fontSize="12px" fontWeight="400" fontColor="#263E61">
          Total Contribution
        </Typography>
        <Typography fontSize="12px" fontWeight="400" fontColor="#263E61">
          {props.totalContribution}
        </Typography>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default InvestmentModalTotalContribution;
