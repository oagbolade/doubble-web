import styled from "styled-components";

const InnerCircleIconStyle = styled.svg.attrs((props) => ({
  viewBox: "0 0 24 24",
}))`
  fill: currentColor;
  position: absolute;
  width: 18px;
  height: 18px;
  display: inline-block;
  color: #00ccff;
`;

const InnerCircleIcon = () => (
  <InnerCircleIconStyle>
    <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z" />
  </InnerCircleIconStyle>
);

export default InnerCircleIcon;
