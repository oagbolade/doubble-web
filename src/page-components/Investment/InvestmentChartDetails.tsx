import { FlexWrapper, Dot, Typography } from "../../shared-components";

const rewardsDetails = [
  {
    dotColor: "#F8AB08",
    rewardType: "Total Earnings",
    rewardAmount: "₦390,000",
  },
  {
    dotColor: "#ADE194",
    rewardType: "Earnings To Date",
    rewardAmount: "₦468,000",
  },
];

interface DoubbleRewardsDetailProps {
  dotColor?: string;
  rewardType?: string;
  rewardAmount?: string;
}

const InvestmentChartDetail = (props: DoubbleRewardsDetailProps) => {
  return (
    <FlexWrapper justifyContent="space-between">
      <FlexWrapper width="50%">
        <Dot dotColor={props.dotColor} height="10.39px" width="10.39px" />
        <Typography fontWeight="700" fontSize="14px" marginLeft="20px">
          {props.rewardType}
        </Typography>
      </FlexWrapper>
      <Typography fontSize="13px" fontWeight="400">
        {props.rewardAmount}
      </Typography>
    </FlexWrapper>
  );
};

const InvestmentChartDetails = () => {
  return (
    <FlexWrapper
      marginTop="50px"
      marginBottom="50px"
      width="100%"
      justifyContent="center"
    >
      <FlexWrapper
        type="item"
        xs="10"
        sm="10"
        md="10"
        lg="10"
        flexDirection="column"
      >
        {rewardsDetails.map((detail) => {
          return (
            <InvestmentChartDetail
              key={`${detail.dotColor}`}
              dotColor={detail.dotColor}
              rewardType={detail.rewardType}
              rewardAmount={detail.rewardAmount}
            />
          );
        })}
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default InvestmentChartDetails;
