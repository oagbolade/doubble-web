import Image from "next/image";

import GetStartedBtn from "../Button/HeaderGetStartedBtn";
import DownloadMobileApp from "../Button/HeaderDownloadApp";
import { RewardCategoriesStyle, TotalEarningsStyle } from "../Button/styles";
import { FirstSectionTexts } from "../constants";
import { FlexWrapper, Typography } from "../../../shared-components";
import { ResponsiveWrapper } from "../../../util-components/ResponsiveWrappers";
import { InvestTextIcon, AndroidLogoIcon, AppleLogoIcon } from "../../../icons";
const FirstSection = () => (
  <>
    <FlexWrapper
      flexDirection="row"
      justifyContent="center"
      height="100vh"
      position="relative"
    >
      <FlexWrapper position="absolute" width="100%" top="30%">
        <InvestTextIcon />
      </FlexWrapper>
      <FlexWrapper
        z-index="1000"
        flexDirection="row"
        justifyContent="center"
        position="absolute"
        top="0"
        height="100%"
      >
        <Image
          src="/home/first-section/lady-with-a-phone.png"
          alt="Lady With A Phone"
          width={661}
          height={895}
        />
      </FlexWrapper>

      <FlexWrapper
        flexDirection="row"
        justifyContent="center"
        position="absolute"
        minWidth="100%"
      >
        <Image
          src="/home/first-section/coins.png"
          alt="Lady With A Phone"
          width={1000}
          height={700}
        />
      </FlexWrapper>

      <ResponsiveWrapper>
        <FlexWrapper
          flexDirection="row"
          justifyContent="space-around"
          alignItems="flex-end"
          position="absolute"
          minWidth="100%"
          bottom="20%"
        >
          <RewardCategoriesStyle>
            <Image
              src="/home/first-section/reward-categories.png"
              alt="Lady With A Phone"
              width={414}
              height={140}
            />
          </RewardCategoriesStyle>
          <TotalEarningsStyle>
            <Image
              src="/home/first-section/total-earnings.png"
              alt="Lady With A Phone"
              width={254}
              height={147}
            />
          </TotalEarningsStyle>
        </FlexWrapper>
      </ResponsiveWrapper>

      <FlexWrapper
        flexDirection="row"
        justifyContent="space-around"
        alignItems="flex-end"
        position="absolute"
        minWidth="100%"
        bottom="-5%"
      >
        <GetStartedBtn>{FirstSectionTexts.GetStarted}</GetStartedBtn>
        <DownloadMobileApp>
          <Typography fontSize="14px">
            {FirstSectionTexts.DownloadMobileApp}
          </Typography>
          <div
            style={{
              width: "120px",
              height: "50px",
              borderRadius: "10px",
              background: "#00CCFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <AndroidLogoIcon />
            <AppleLogoIcon />
          </div>
        </DownloadMobileApp>
      </FlexWrapper>
    </FlexWrapper>
  </>
);

export default FirstSection;
