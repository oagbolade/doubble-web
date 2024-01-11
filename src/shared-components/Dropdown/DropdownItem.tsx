import styled from "styled-components";

const DropdownItem = styled.div.attrs((props) => ({
  role: "menuitem",
}))`
  padding: 10px 10px;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  :hover {
    background: #263e61;
    color: #fff;
  }
`;
export default DropdownItem;
