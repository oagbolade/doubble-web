import { FlexWrapper, Typography } from "../../../shared-components";

interface InvestmentModalTitleProps {
  title: string;
}
const InvestmentModalTitle = (props: InvestmentModalTitleProps) => {
  return (
    <FlexWrapper marginTop="10px">
      <Typography fontSize="32px" fontColor="#263E61" fontWeight="700">
        {props.title}
      </Typography>
    </FlexWrapper>
  );
};

export default InvestmentModalTitle;
