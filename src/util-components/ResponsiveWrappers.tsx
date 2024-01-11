import styled, { ThemedStyledProps } from "styled-components";

export const ResponsiveWrapper = styled.div`
  width: 100%;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ResponsiveMenuIconWrapper = styled.div`
  @media screen and (max-width: 1200px) {
    display: flex;
  }

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

interface ResponsiveSecondSectionWrapperProps
  extends ThemedStyledProps<any, any> {
  bgColor: string;
  minHeight: string;
  padding: string;
  mediaQueries?: string;
}
export const ResponsiveSecondSectionWrapper = styled.section.attrs(
  (props: ResponsiveSecondSectionWrapperProps) => ({
    bgColor: props.bgColor,
    minHeight: props.minHeight,
    padding: props.padding,
    mediaQueries: props.mediaQueries,
  })
)`
  position: relative;
  display: flex;
  flex: 1 1;
  flex-direction: column;
  min-width: 0;
  min-height: ${(props) => props.minHeight};
  background: ${(props) => props.bgColor};
  padding: ${(props) => props.padding};
  ${(props) => (props.mediaQueries ? props.mediaQueries : "")}
`;

ResponsiveSecondSectionWrapper.defaultProps = {
  bgColor: "#D5E0FB",
  minHeight: "100vh",
};
