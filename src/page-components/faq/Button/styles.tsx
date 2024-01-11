import styled from "styled-components";

export const HeaderCalculateBtnStyle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  text-decoration: none;
  padding: 10px;
  font-size: 18px;
  font-weight: 700;
  width: 280px;
  cursor: pointer;
`;

const BaseBtnBackgroundStyle = `
  z-index 1999;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: rgba(38, 61, 97, 0.1);
  border-radius: 10px;
`;

const BaseMidSectionBtnStyle = `
  text-decoration: none;
  width: 300px;
  height: 70px;
  border-radius: 10px;
  color: #263D61;
  display: flex;
  align-items: center;
`;
export const GetStartedBtnBackgroundStyle = styled.div`
  ${BaseBtnBackgroundStyle}
  width: 320px;
  height: 90px;
  @media screen and (max-width: 600px) {
    margin-bottom: 10px;
  }
`;

export const GetStartedBtnStyle = styled.a`
  ${BaseMidSectionBtnStyle}
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
  background: #00ccff;
`;

export const DownloadMobileAppBackgroundStyle = styled.div`
  ${BaseBtnBackgroundStyle}
  width: 320px;
  height: 90px;
`;

export const RewardCategoriesStyle = styled.div`
  ${BaseBtnBackgroundStyle}
  width: 460px;
  height: 180px;
`;

export const TotalEarningsStyle = styled.div`
  ${BaseBtnBackgroundStyle}
  width: 280px;
  height: 180px;
`;

export const DownloadMobileAppWrapper = styled.div`
  ${BaseMidSectionBtnStyle}
  justify-content: space-around;
  background: #ffffff;
`;

export const HeaderLinkStyle = styled.a`
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  cursor: pointer;
  color: #263e61;
`;

export const HeaderLinksWrapperStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
