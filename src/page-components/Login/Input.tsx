import styled from "styled-components";

export const Check = styled.input`
  width: 20px;
  height: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;
const Input = styled.input`
  width: 100%;
  margin-top: 30px;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px;

  ::placeholder {
    font-size: 18px;
    color: #c4c4c4;
  }

  :focus {
    outline: 1px solid #263d61;
    border: 1px solid #ffffff;
    box-shadow: 0px 4px 10px rgba(38, 61, 97, 0.2);
    border-radius: 5px;
  }

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export default Input;
