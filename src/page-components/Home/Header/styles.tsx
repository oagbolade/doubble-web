import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
`;

export const HomeHeaderStyle = styled.header`
  top: 0;
  position: fixed;
  width: 100%;
  height: 150px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 888;
  background: rgb(230 250 255 / 75%);
  backdrop-filter: blur(100px);
  z-index: 999;
`;

export const HomeHeaderImageContainer = styled.div`
  width: calc(3vw + 6rem);
`;

export const HomeHeaderContainerNavbar = styled.nav`
  flex: 1 0 auto;
`;

export const NavBarBurgerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const NavBarBurgerContainerList = styled.div`
  top: 0;
  left: 0;
  right: 0;
  width: auto;
  height: 100%;
  background: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  transform-origin: none;
  transform: none;
  transition: none;
  text-align: center;
  padding: 0;
  margin: 0;
`;

export const FirstSection = styled.div`
  margin-top: 150px;
  width: 100%;
  height: 100%;
  max-height: 700px;
  min-height: 250px;
  display: flex;
  position: relative;
  justify-content: center;
  background: #e6faff;
  @media screen and (max-width: 991px) {
    max-height: 1042px;
  }
`;

export const FirstSectionContainer = styled.div`
  width: 90%;
  height: 100%;
  padding: 20px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
`;

export const SecondSection = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  position: relative;
  background: #ffffff;
  height: 1052px;
  @media screen and (max-width: 991px) {
    margin-top: 0;
  }

  @media screen and (min-width: 991px) {
  }
`;

export const SecondSectionContainer = styled.div`
  width: 90%;
  padding: 20px;
  display: flex;
  margin: auto;
  position: relative;
  flex-wrap: wrap;
  margin-top: 200px !important;

  @media screen and (min-width: 991px) {
    height: 80%;
    margin-top: 200px !important;
  }
`;

export const ThirdSection = styled.div`
  width: 100%;
  min-height: 250px;
  display: flex;
  position: relative;
  background: #ffffff;
`;

export const ThirdSectionContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  margin: auto;
  position: relative;
  flex-wrap: wrap;
  @media screen and (max-width: 991px) {
    padding: 0;
  }
`;

export const FourthSection = styled.div`
  width: 100%;
  max-height: 100px;
  display: flex;
  position: relative;
  background: #ffffff;
  @media screen and (max-width: 600px) {
    margin-top: 0px;
  }
  @media screen and (max-width: 991px) {
  }
`;

export const FourthSectionContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  margin: auto;
  position: relative;
  justify-content: center;
`;

export const FooterSection = styled.div`
  width: 100%;
  height: 100%;
  min-height: 250px;
  display: flex;
  position: relative;
  background: #e6faff;
  justify-content: center;
  margin-top: 30px;
  @media screen and (max-width: 991px) {
    margin-top: 15px;
  }
`;

export const FooterSectionContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  position: relative;
  flex-wrap: wrap;
`;
