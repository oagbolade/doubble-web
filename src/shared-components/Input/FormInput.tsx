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
  paddingLeft?: string;
  value?: string;
  name?: string;
  onChange?: any;
  type?: string;
  maxLength?: number;
}

const Input = styled.input.attrs((props: FormInputProps) => ({
  variant: props.variant,
  borderRadius: props.borderRadius,
  border: props.border,
  bgColor: props.bgColor,
  width: props.width,
  height: props.height,
  borderLeft: props.borderLeft,
  borderRight: props.borderRight,
  mediaQueries: props.mediaQueries,
  paddingLeft: props.paddingLeft,
}))`
  ${(props) => {
    if (props.variant === "outline") {
      return `
        height: ${props.height};
        background: ${props.bgColor};
        border: ${props.border};
        box-sizing: border-box;
        border-radius: ${props.borderRadius};
        ${props.borderLeft ? `border-left: ${props.borderLeft};` : ""}
        ${props.borderRight ? `border-right: ${props.borderRight};` : ""}
        ${props.paddingLeft ? `padding-left: ${props.paddingLeft};` : ""}
      `;
    }
    if (props.variant === "standard") {
      return `
        border: none;
        border-bottom: 1px solid #bec5d0;
      `;
    }
  }}
  ${(props) => {
    return `${props.mediaQueries ? props.mediaQueries : ""}`;
  }}
  width: ${(props) => props.width};
  outline: none;
  padding: 10px;
  ::placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #999;
  }
`;

Input.defaultProps = {
  variant: "standard",
  borderRadius: "10px",
  bgColor: "#F8F9FA",
  border: "1px solid #E5E5E5",
  width: "100%",
  height: "50px",
};

const FormInput = (props: FormInputProps) => {
  const { error, helperText, ...others } = props;
  return (
    <FlexWrapper
      flexDirection="column"
      alignItems="flex-start"
      flex={props.flex}
      width={props.wrapperWidth}
    >
      <Input {...others} />
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
