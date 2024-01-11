import Image from "next/image";

import HeaderCalculateBtn from "../Button/HeaderCalculateBtn";
import HeaderLinks from "../Button/HeaderLinks";
import { HeaderTexts } from "../constants";
import {
  Typography,
  FlexWrapper,
  IconButton,
} from "../../../shared-components";
import {
  ResponsiveWrapper,
  ResponsiveMenuIconWrapper,
} from "../../../util-components/ResponsiveWrappers";
import { MenuIcon } from "../../../icons";

interface HeaderProps {
  handleClick?: () => void;
}
const Header = (props: HeaderProps) => (
  <FlexWrapper
    position="fixed"
    top="0"
    flexDirection="row"
    flexWrap="wrap"
    flexShrink="0"
    minHeight="56px"
    background="rgba(248, 249, 250, 0.3)"
    backdropFilter="blur(20px)"
    justifyContent="space-between"
    alignItems="center"
    padding="40px"
    mediaQueries={`
      @media screen and (max-width: 400px) {
        padding: 30px
      }
    `}
    zIndex="2000"
    width="100%"
  >
    <FlexWrapper>
      <Image
        src="/home/first-section/doubble-logo.png"
        alt="Doubble Logo"
        width={120}
        height={30}
        layout="fixed"
      />
    </FlexWrapper>
    <FlexWrapper width="20%" position="absolute" left="40%">
      <ResponsiveWrapper>
        <HeaderCalculateBtn>
          <Typography fontSize="18px" fontWeight="700">
            {HeaderTexts.CalculateBtn}
          </Typography>
          <Image
            src="/home/first-section/money-tree.gif"
            alt="Calculate btn"
            width={30}
            height={40}
          />
        </HeaderCalculateBtn>
      </ResponsiveWrapper>
    </FlexWrapper>
    <FlexWrapper width="25%" marginRight="50px">
      <HeaderLinks />
    </FlexWrapper>
    <ResponsiveMenuIconWrapper>
      <IconButton onClick={props.handleClick}>
        <MenuIcon />
      </IconButton>
    </ResponsiveMenuIconWrapper>
  </FlexWrapper>
);

export default Header;
