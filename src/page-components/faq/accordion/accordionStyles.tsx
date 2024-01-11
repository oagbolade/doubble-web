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

export const Accordion = styled.div`
    max-width: 100%;
`;

export const AccordionTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    background-color: #F9F9F9;
    padding: 1rem;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-top: 30px;
    color: #263D61;
    font-weight: 700;
`;

export const AccordionContent = styled.div`
    background-color: #F9F9F9;
    padding: 1rem;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 100%;
    color: #263D61;
`;




/*
  .accordion-title:hover {
    background-color: #3ab4cc;
  }

  .accordion-title,
  .accordion-content {
    padding: 1rem;
  }

  .accordion-content {
    background-color: #39b9d2;
  }

  @media screen and (max-width: 700px) {
    body {
      font-size: 18px;
    }

    .accordion {
      width: 90%;
    }
  } */