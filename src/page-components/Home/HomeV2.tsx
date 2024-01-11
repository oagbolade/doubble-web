import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HomeHeaderStyle,
  HomeHeaderImageContainer,
  FirstSection,
  NavBarBurgerContainer,
  HomeHeaderContainerNavbar,
  FirstSectionContainer,
  SecondSection,
  SecondSectionContainer,
  ThirdSection,
  ThirdSectionContainer,
  FooterSection,
  FooterSectionContainer,
  FourthSection,
  FourthSectionContainer,
} from "./Header/styles";
import { Carousel } from "antd";
import {
  GroupLinkButtons,
  FlexWrapper,
  Typography,
  Container,
  LinkButtons,
} from "../../shared-components";
import {
  ArrowRightIcon,
  ArrowDownIcon,
  MinusIcon,
  MenuIcon,
} from "../../icons";
import { headerLinkTexts, footerLinkTexts } from "../../utils/utilities";
import GetStartedModal from "../Overview/GetStartedModal";
import styles from "./Home.module.css";

const HomeV2 = () => {
  const [headerMenuIsOpen, setHeaderMenuOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Container bgColor="#FFFFFF">
        
      
      <HomeHeaderStyle>
        <FlexWrapper
          width="100%"
          margin="auto 60px auto 60px"
          display="flex"
          alignItems="center"
          mediaQueries={`
            @media screen and (max-width: 600px) {
              margin: auto 20px auto 20px;
            }
          `}
        >
          <HomeHeaderImageContainer>

            <Image
              src="/home/first-section/doubble-logo-1.png"
              alt="Doubble Logo"
              width={212}
              height={50}
              layout="fixed"
            />
          </HomeHeaderImageContainer>
          <HomeHeaderContainerNavbar>
            <NavBarBurgerContainer>
              <GroupLinkButtons
                width="100%"
                justifyContent="space-between"
                data={headerLinkTexts}
                linkMarginLeft="30px"
                fontSize="24px"
              />
            </NavBarBurgerContainer>
          </HomeHeaderContainerNavbar>
          <FlexWrapper
            marginLeft="1rem"
            mediaQueries={`
              @media screen and (min-width: 600px) {
                display: none;
              }
            `}
          >
            <MenuIcon
              onClick={() => {
                setHeaderMenuOpen(!headerMenuIsOpen);
              }}
            />
          </FlexWrapper>
        </FlexWrapper>
      </HomeHeaderStyle>
      {headerMenuIsOpen && (
        <FlexWrapper
          flexDirection="column"
          position="fixed"
          width="100%"
          top="150px"
          background="#263e61"
          zIndex="50"
          alignItems="center"
          padding="10px"
          mediaQueries={`
              @media screen and (min-width: 1200px) {
                display: none;
              }
            `}
        >
          <GroupLinkButtons
            width="100%"
            flexDirection="column"
            justifyContent="space-between"
            data={headerLinkTexts}
            fontColor="#fff"
            linkMargin="10px"
          />
        </FlexWrapper>
      )}
      <FirstSection>
        <FirstSectionContainer>
          <FlexWrapper
            type="item"
            sm="12"
            xs="12"
            md="6"
            lg="6"
            paddingTop="100px"
            flexDirection="column"
            justifyContent="space-evenly"
            mediaQueries={`
              @media screen and (max-width: 600px) {
                height: 50%;
              }
            `}
          >
            <FlexWrapper>
              <Typography
                fontSize="42px"
                mediaQueries={`
                  @media screen and (max-width: 600px) {
                    font-size: 24px;
                    width: 100%;
                    text-align: center;
                  }
                `}
              >
                Welcome to the future Of
              </Typography>
              <Typography
                fontSize="80px"
                fontWeight="700"
                mediaQueries={`
                  @media screen and (max-width: 600px) {
                    font-size: 48px;
                    width: 100%;
                    text-align: center;
                    margin-top: 3rem;
                    margin-bottom: 3rem;
                  }
                `}
              >
                INVESTING
              </Typography>
              <Typography
                fontSize="30px"
                mediaQueries={`
                  @media screen and (max-width: 600px) {
                    font-size: 24px;
                    width: 100%;
                    text-align: center;
                  }
                `}
              >
                Stay ahead of the market and enjoy up to 60% returns on your
                Naira and Dollar investments.
              </Typography>
            </FlexWrapper>
            <FlexWrapper
              flexDirection="column"
              justifyContent="space-evenly"
              position="relative"
              marginTop="75px"
              mediaQueries={`
                @media screen and (max-width: 600px) {
                  align-items: center;
                }
              `}
            >
              <Link href="/register">
                <a
                  style={{
                    width: "240px",
                    height: "70px",
                    background: "#00CCFF",
                    color: "#263E61",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    borderRadius: "5px",
                    border: "none",
                    textDecoration: "none",
                  }}
                >
                  <Typography fontSize="24px">Get Started</Typography>
                  <ArrowRightIcon />
                </a>
              </Link>
              <FlexWrapper
                marginTop="60px"
                mediaQueries={`
                  @media screen and (max-width: 600px) {
                    display: none;
                  }
                `}
              >
                <FlexWrapper
                  flexDirection="column"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <ArrowDownIcon />
                  <MinusIcon />
                </FlexWrapper>
                <FlexWrapper
                  flexDirection="column"
                  flex="1 auto"
                  marginLeft="20px"
                >
                  <Link href="#benefits">
                    <a style={{ textDecoration: "none" }}>
                      <Typography fontSize="24px" fontColor="#bfd4df">
                        Scroll For
                      </Typography>
                      <Typography fontSize="24px" fontColor="#bfd4df">
                        Benefits
                      </Typography>
                    </a>
                  </Link>
                </FlexWrapper>
              </FlexWrapper>
            </FlexWrapper>

            <FlexWrapper
              justifyContent="center"
              marginTop="3rem"
              width="100%"
              height="313px"
              position="relative"
              mediaQueries={`
                @media screen and (min-width: 991px) {
                  display: none;
                }
              `}
            >
              <FlexWrapper
                width="200px"
                height="200px"
                position="absolute"
                top="50%"
                borderRadius="50%"
                background="#00CCFF"
              />
              <FlexWrapper zIndex="888" position="absolute" top="15%">
                <Image
                  src="/home/first-section/lady-with-phone-1.png"
                  alt="Lady With A Phone"
                  width={231}
                  height={313}
                  className="lady-with-phone"
                />
              </FlexWrapper>
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper
            type="item"
            sm="12"
            xs="12"
            md="6"
            lg="6"
            position="relative"
            justifyContent="center"
            mediaQueries={`
            @media screen and (max-width: 991px) {
              height: 50%;
            }
          `}
          >
            <FlexWrapper
              width="575px"
              height="575px"
              position="absolute"
              top="270px"
              borderRadius="50%"
              background="#00CCFF"
              mediaQueries={`
                @media screen and (max-width: 991px) {
                  display: none;
                }
              `}
            />
            <FlexWrapper
              position="absolute"
              top="0"
              zIndex="888"
              mediaQueries={`
                @media screen and (max-width: 991px) {
                  display: none;
                }
              `}
            >
              <Image
                src="/home/first-section/lady-with-phone-1.png"
                alt="Lady With A Phone"
                width={700}
                height={805}
                className="lady-with-phone"
                layout="fixed"
              />
            </FlexWrapper>
          </FlexWrapper>
        </FirstSectionContainer>
      </FirstSection>
      <SecondSection>
        <SecondSectionContainer id="benefits">
          <FlexWrapper
            type="item"
            sm="12"
            xs="12"
            md="7"
            lg="7"
            flexDirection="column"
            justifyContent="space-evenly"
            mediaQueries={`
              @media screen and (max-width: 600px) {
                height: 100%;
              }
            `}
          >
            <FlexWrapper flexDirection="column">
              <Typography
                fontSize="52px"
                fontWeight="700"
                mediaQueries={`
                  @media screen and (max-width: 600px) {
                    font-size: 28px;
                    text-align: center;
                  }
                `}
              >
                Savings that grows
              </Typography>
              <Typography
                fontSize="52px"
                mediaQueries={`
                  @media screen and (max-width: 600px) {
                    font-size: 28px;
                    text-align: center;
                  }
                `}
              >
                with you
              </Typography>
            </FlexWrapper>
            <FlexWrapper
              position="relative"
              flex="1 1"
              mediaQueries={`
                @media screen and (max-width: 1200px) {
                  display: none;
                }
              `}
            >
              <FlexWrapper position="absolute" zIndex="888">
                <Image
                  src="/home/first-section/phone.png"
                  alt="Lady With A Phone"
                  width={800}
                  height={720}
                  className="lady-with-phone"
                  layout="fixed"
                />
              </FlexWrapper>
              <FlexWrapper
                width="400px"
                height="400px"
                position="absolute"
                top="5%"
                left="22%"
                borderRadius="50%"
                background="#00CCFF"
                // mediaQueries={`
                //   @media screen and (max-width: 991px) {
                //     top: 214px;
                //   }
                // `}
              />
            </FlexWrapper>

            <FlexWrapper
              flexDirection="column"
              justifyContent="space-evenly"
              position="relative"
              flex="1 1"
              mediaQueries={`
                @media screen and (max-width: 991px) {
                  display: none;
                }
              `}
            >
              <button
                style={{
                  width: "240px",
                  height: "70px",
                  background: "#00CCFF",
                  color: "#263E61",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  borderRadius: "5px",
                  border: "none",
                  position: "absolute",
                  bottom: "10%",
                }}
              >
                <Typography fontSize="24px">Download App</Typography>
                <ArrowRightIcon />
              </button>
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper
            type="item"
            sm="12"
            xs="12"
            md="5"
            lg="5"
            position="relative"
            flexDirection="column"
            justifyContent="space-evenly"
            mediaQueries={`
            @media screen and (max-width: 991px) {
              height: 50%;
            }
          `}
          >
            <FlexWrapper
              flexDirection="column"
              marginTop="3rem"
              mediaQueries={`
                @media screen and (max-width: 991px) {
                  width: 100%;
                  align-items: center;
                }
              `}
            >
              <Image
                src="/home/first-section/percent.png"
                alt="Lady With A Phone"
                width={43}
                height={50}
                className="percent"
                layout="fixed"
              />
              <FlexWrapper marginTop="20px">
                <Typography
                  fontSize="24px"
                  mediaQueries={`
                    @media screen and (max-width: 991px) {
                      font-size: 16px;
                      text-align: center;
                    }
                  `}
                >
                  Interest of up to 60% of savings
                </Typography>
              </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper
              flexDirection="column"
              marginTop="3rem"
              mediaQueries={`
                @media screen and (max-width: 991px) {
                  width: 100%;
                  align-items: center;
                }
              `}
            >
              <Image
                src="/home/first-section/currency.png"
                alt="Lady With A Phone"
                width={83}
                height={50}
                className="percent"
                layout="fixed"
              />
              <FlexWrapper marginTop="20px">
                <Typography
                  fontSize="24px"
                  mediaQueries={`
                    @media screen and (max-width: 991px) {
                      font-size: 16px;
                      text-align: center;
                    }
                  `}
                >
                  Earn monthly for up to 5years
                </Typography>
              </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper
              flexDirection="column"
              marginTop="3rem"
              mediaQueries={`
                @media screen and (max-width: 991px) {
                  width: 100%;
                  align-items: center;
                }
              `}
            >
              <img
                src="/home/first-section/pin.png"
                alt="Lady With A Phone"
                width={28}
                height={50}
                className="percent"
                loading="lazy"
              />
              <FlexWrapper marginTop="20px">
                <Typography
                  fontSize="24px"
                  mediaQueries={`
                    @media screen and (max-width: 991px) {
                      font-size: 16px;
                      text-align: center;
                    }
                  `}
                >
                  Set target and stash your savings in bits
                </Typography>
              </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper
              flexDirection="column"
              marginTop="3rem"
              mediaQueries={`
                @media screen and (max-width: 991px) {
                  width: 100%;
                  align-items: center;
                }
              `}
            >
              <img
                src="/home/first-section/coin-stack.png"
                alt="Lady With A Phone"
                width={50}
                height={50}
                className="percent"
                loading="lazy"
              />
              <FlexWrapper marginTop="20px">
                <Typography
                  fontSize="24px"
                  mediaQueries={`
                    @media screen and (max-width: 991px) {
                      font-size: 16px;
                      text-align: center;
                    }
                  `}
                >
                  Save less and get more by fixing your savings
                </Typography>
              </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper
              marginTop="3rem"
              justifyContent="center"
              mediaQueries={`
                @media screen and (min-width: 600px) {
                  display: none;
                }
              `}
            >
              <button
                style={{
                  width: "240px",
                  height: "70px",
                  background: "#00CCFF",
                  color: "#263E61",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  borderRadius: "5px",
                  border: "none",
                }}
              >
                <Typography fontSize="24px">Download App</Typography>
                <ArrowRightIcon />
              </button>
            </FlexWrapper>
          </FlexWrapper>
        </SecondSectionContainer>
      </SecondSection>

      <div id="product-section" style={{ background: "#F9F9F9" }}>
        <Carousel autoplay dots={{ className: styles.dots }}>
          <div className={styles.carouselitems}>
            <div className="container row px-lg-5">
              <div className="col-md-4 d-flex flex-column justify-content-center align-items-center p-4">
                <img src="/home/first-section/dart-board.png" />
                <div className={styles.itemtitle}>Target</div>
              </div>
              <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
                <p>
                  Doubble Target option allows you save a sizeable amount
                  towards achieving a target and then your interest is paid as
                  markup to help hit the target.
                </p>
                <p>
                  Voluntary additional contributions can be made into the
                  investment account apart from the regular contributions based
                  on the initial set date as well as multiple plans purchased.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.carouselitems}>
            <div className="container row px-lg-5">
              <div className="col-md-4 d-flex flex-column justify-content-center align-items-center p-4">
                <img src="/home/first-section/cactus.png" />
                <div className={styles.itemtitle}>Fixed</div>
              </div>
              <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
                Doubble fixed investment allows you to fix a set amount of funds
                for at least 30 days and earn up to 5% per annum interest rate
                at maturity.
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      <FourthSection>
        <FourthSectionContainer>
          <FlexWrapper justifyContent="center" position="relative" flex="1 1">
            <button
              style={{
                width: "240px",
                height: "70px",
                background: "#00CCFF",
                color: "#263E61",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                border: "none",
                bottom: "10%",
              }}
            >
              <GetStartedModal type="fixed" closeTargetModal={handleCancel}>
                <Typography fontSize="24px" cursor="pointer">
                  Calculate Investment
                </Typography>
              </GetStartedModal>
            </button>
          </FlexWrapper>
        </FourthSectionContainer>
      </FourthSection>
      <FooterSection>
        <FooterSectionContainer>
          <FlexWrapper
            width="100%"
            flexDirection="column"
            flexGrow="1"
            justifyContent="space-evenly"
          >
            <FlexWrapper
              justifyContent="space-between"
              padding="25px"
              mediaQueries={`
                @media screen and (max-width: 991px) {
                  padding: 0;
                  margin-bottom: 20px;
                  margin-top: 20px;
                }
              `}
            >
              <Typography
                fontSize="36px"
                fontWeight="700"
                margin="0"
                mediaQueries={`
                  @media screen and (max-width: 600px) {
                    font-size: 24px;
                  }
                `}
              >
                Doubble
              </Typography>
              <FlexWrapper
                alignItems="flex-end"
                mediaQueries={`
                    @media screen and (max-width: 600px) {
                      display: none;
                    }
                  `}
              >
                <Typography
                  fontSize="18px"
                  fontWeight="400"
                  margin="0"
                  marginRight="10px"
                >
                  Product of
                </Typography>
                <Image
                  src="/home/sterling-logo.png"
                  alt="Doubble Logo"
                  width={97}
                  height={30}
                />
              </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper
              justifyContent="space-between"
              padding="25px"
              mediaQueries={`
                @media screen and (max-width: 991px) {
                  padding: 0;
                }
              `}
            >
              <FlexWrapper
                type="item"
                xs="12"
                sm="12"
                md="6"
                lg="6"
                alignItems="center"
              >
                {footerLinkTexts.map((link, i) => (
                  <FlexWrapper
                    type="item"
                    xs="12"
                    sm="12"
                    md="2"
                    lg="2"
                    marginBottom="10px"
                    key={i}
                  >
                    <LinkButtons
                      text={link.text}
                      url={link.url}
                      key={link.text}
                      fontSize="14px"
                    />
                  </FlexWrapper>
                ))}
              </FlexWrapper>
              <FlexWrapper
                alignItems="center"
                mediaQueries={`
                  @media screen and (max-width: 600px) {
                    display: none;
                  }
                `}
              >
                <Typography
                  fontSize="16px"
                  fontWeight="700"
                  mediaQueries={`
                    @media screen and (max-width: 991px) {
                      padding-top: 20px;
                    }
                  `}
                >
                  © Copyright 2019 Sterling Bank Plc. All Rights Reserved.
                </Typography>
              </FlexWrapper>

              <FlexWrapper
                width="100%"
                position="absolute"
                bottom="15px"
                right="3px"
                alignItems="flex-end"
                flexDirection="column"
                justifyContent="flex-end"
                mediaQueries={`
                  @media screen and (min-width: 600px) {
                    display: none;
                  }
                `}
              >
                <FlexWrapper alignItems="flex-end">
                  <Typography
                    fontSize="12px"
                    fontWeight="400"
                    margin="0"
                    marginRight="10px"
                  >
                    Product of
                  </Typography>
                  <Image
                    src="/home/sterling-logo.png"
                    alt="Doubble Logo"
                    width={97}
                    height={30}
                  />
                </FlexWrapper>
                <Typography
                  fontSize="16px"
                  fontWeight="700"
                  mediaQueries={`
                    @media screen and (max-width: 991px) {
                      font-size: 10px;
                      font-weight: 700;
                    }
                  `}
                >
                  © Copyright 2019
                </Typography>
              </FlexWrapper>
            </FlexWrapper>
          </FlexWrapper>
        </FooterSectionContainer>
      </FooterSection>
    </Container>
  );
};

export default HomeV2;
