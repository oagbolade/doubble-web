import React, {useState} from "react";
import Image from "next/image";
import {
  HomeHeaderStyle,
  HomeHeaderImageContainer,
  FirstSection,
  NavBarBurgerContainer,
  HomeHeaderContainerNavbar,
  FooterSection,
  FooterSectionContainer,
} from "./Header/styles";

import { TermsAndConditionsBackgroudImage } from './styles'

import { AccordionComponent } from './accordion/accordion'

import {
  GroupLinkButtons,
  FlexWrapper,
  Typography,
  Container,
  LinkButtons
} from "../../shared-components";

import { SearchInputV2 } from "./Header/SearchInput";
import { accordionData } from "./utils/contentFaq";
import { headerLinkTexts, footerLinkTexts } from "../../utils/utilities";

const FAQ = () => {

  const [data, SetData] = useState(accordionData);
  const [search, setSearch] = useState<string>("");

  const handleSearch = ({ target }) => {
    setSearch(target.value);
    if (search) {
      const newData = accordionData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      // console.log(newData);
      SetData(newData);
    } else {
      SetData(accordionData);
    }
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
          ></FlexWrapper>
        </FlexWrapper>
      </HomeHeaderStyle>
      <FirstSection>
        <TermsAndConditionsBackgroudImage>
          <Typography
            fontSize="42px"
            fontWeight="700"
            margin="0"
            color="#263D61"
            font="Product Sans"
            mediaQueries={`
                  @media screen and (max-width: 600px) {
                    font-size: 24px;
                  }
                `}
          >
            Frequently Asked Questions
          </Typography>
        </TermsAndConditionsBackgroudImage>
      </FirstSection>
      <div className="d-flex justify-content-center">
        <SearchInputV2
          placeholder="Search"
          value={search}
          onChange={handleSearch}
        />
      </div>

      <AccordionComponent data={data}/>

      <FooterSection className="d-none d-md-block">
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

export default FAQ;
