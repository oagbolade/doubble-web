import styled, { ThemedStyledProps } from "styled-components";

interface SectionProps extends ThemedStyledProps<any, any> {
  bgColor: string;
  minHeight: string;
}
export const Section = styled.section.attrs((props: SectionProps) => ({
  bgColor: props.bgColor,
  minHeight: props.minHeight,
}))`
  position: relative;
  display: flex;
  flex: 1 1;
  flex-direction: column;
  min-width: 0;
  min-height: ${(props) => props.minHeight};
  background: ${(props) => props.bgColor};
`;

Section.defaultProps = {
  bgColor: "#D5E0FB",
  minHeight: "100vh",
};

export const HomeContainerStyle = styled.div`
  display: flex;
  flex: 1 1;
  flex-direction: column;
  min-width: 0;
  min-height: 100vh;
  background: #d5e0fb;
`;

export const TermsAndConditionsBackgroudImage = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  flex: 1 1;
  flex-direction: column;
  min-width: 0;
  background-image: url("/tcbanner.png");
  background-size: cover;
`;

export const TermsAndConditionsTxt = styled.div`
  display: flex;
  align-items: center
  flex: 1 1;
  flex-direction: column;
  widith: 70%;
`;
