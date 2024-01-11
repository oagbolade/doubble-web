import styled, { ThemedStyledProps } from "styled-components";

interface SectionProps extends ThemedStyledProps<any, any> {
  bgColor: string;
  minHeight: string;
  padding: string;
}
const Section = styled.section.attrs((props: SectionProps) => ({
  bgColor: props.bgColor,
  minHeight: props.minHeight,
  padding: props.padding,
}))`
  position: relative;
  display: flex;
  flex: 1 1;
  flex-direction: column;
  min-width: 0;
  min-height: ${(props) => props.minHeight};
  background: ${(props) => props.bgColor};
  padding: ${(props) => props.padding};
`;

Section.defaultProps = {
  bgColor: "#D5E0FB",
  minHeight: "100vh",
};

export default Section;
