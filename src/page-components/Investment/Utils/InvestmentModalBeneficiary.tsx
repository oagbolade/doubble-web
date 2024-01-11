import { FlexWrapper, Typography, Card } from "../../../shared-components";

interface InvestmentModalBeneficiaryProps {
  name: string;
  bank: string;
  accountNumber: string;
}
const InvestmentModalBeneficiary = (props: InvestmentModalBeneficiaryProps) => {
  return (
    <FlexWrapper flexDirection="column" padding="10px">
      <Typography fontSize="12px">Beneficiary</Typography>
      <Card
        padding="10px"
        width="90%"
        borderRadius="10px"
        bgColor="#F4FFF9"
        boxShadow=""
        justifyContent="space-between"
      >
        <FlexWrapper flexDirection="column">
          <Typography fontSize="18px" fontWeight="400" fontColor="#27AE60">
            {props.name}
          </Typography>
          <Typography fontSize="10px" fontWeight="400" fontColor="#27AE60">
            {props.bank}
          </Typography>
        </FlexWrapper>

        <FlexWrapper flexDirection="column" alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="700" fontColor="#27AE60">
            {props.accountNumber}
          </Typography>
          <Typography fontSize="8px" fontWeight="700" fontColor="#263E61">
            Change Beneficiary
          </Typography>
        </FlexWrapper>
      </Card>
    </FlexWrapper>
  );
};

export default InvestmentModalBeneficiary;
