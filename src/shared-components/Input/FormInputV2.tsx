import styled, { ThemedStyledProps } from "styled-components";
import { FlexWrapper, Typography } from "..";
interface FormInputProps extends ThemedStyledProps<any, any> {
  error?: string;
  helperText?: React.ReactNode;
  variant?: "outline" | "standard";
  placeholder?: string;
  borderRadius?: string;
  border?: string;
  borderLeft?: string;
  borderRight?: string;
  bgColor?: string;
  width?: string;
  height?: string;
  flex?: string;
  wrapperWidth?: string;
  mediaQueries?: string;
  value?: string;
  type?: string;
  title?: string;
  autoComplete?: string;
  min?: string;
  max?: string;
}

const Label = styled.label`
  position: absolute;
  top: 30px;
  left: 15px;
  padding: 0px 1px;
  transition: all 0.3s ease-in-out;
  color: #999;
  pointer-events: none;
`;

const Input = styled.input`
  width: 100%;
  margin-top: 15px;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 15px 20px;
  color: #000000 !important;

  ::placeholder {
    font-size: 16px;
    color: #999;
  }

  :focus {
    outline: 1px solid #263d61;
    border: 1px solid #ffffff;
    box-shadow: 0px 4px 10px rgba(38, 61, 97, 0.2);
    border-radius: 5px;
  }

  &:focus + ${Label},
  &:valid + ${Label},
  &:-webkit-autofill ~ ${Label}
  {
    color: #000000;
    top: 8px;
    background-color: white;
    padding: 0px 1px;
  }

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

const FormInput = (props: FormInputProps) => {
  const { error, helperText, placeholder, ...others } = props;
  return (
    <FlexWrapper flexDirection="column" width="100%" position="relative">
      <Input {...others} required />
      <Label>{placeholder}</Label>
      <Typography
        fontColor="#EB5757"
        fontSize="12px"
        fontWeight="400"
        marginTop="10px"
      >
        {error}
      </Typography>
    </FlexWrapper>
  );
};
FormInput.defaultProps = {
  wrapperWidth: "90%",
};
export default FormInput;
