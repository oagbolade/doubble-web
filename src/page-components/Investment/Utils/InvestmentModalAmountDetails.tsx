import { FlexWrapper, Typography } from "../../../shared-components";

interface InvestmentModalAmountDetailsProps {
  title: string;
  amount: string;
}
const InvestmentModalAmountDetails = (
  props: InvestmentModalAmountDetailsProps
) => {
  return (
    <FlexWrapper
      bottom="10%"
      position="absolute"
      flexDirection="column"
      alignItems="center"
      width="100%"
      mediaQueries={`
        @media screen and (max-width: 600px) {
          bottom: 3%;
        }
      `}
    >
      <Typography
        fontWeight="700"
        fontColor="#263E61"
        fontSize="24px"
        mediaQueries={`
          @media screen and (max-width: 600px) {
            font-size: 14px;
          }
        `}
      >
        {props.title}
      </Typography>
      <Typography
        fontWeight="400"
        fontColor="#263E61"
        fontSize="28px"
        mediaQueries={`
          @media screen and (max-width: 600px) {
            font-size: 16px;
          }
        `}
      >
        {props.amount}
      </Typography>
    </FlexWrapper>
  );
};

export default InvestmentModalAmountDetails;
