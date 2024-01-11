import { ReactNode } from "react";
import { Typography, FlexWrapper, Card } from "../../shared-components";
import { SterlingLoadingIcon } from "../../icons";

interface FormWrapperProps {
  children: ReactNode;
  top: string;
  left: string;
  btnBgColor: string;
  btnText: string;
  btnTextColor: string;
  formDescriptionText: string;
  formDescriptionTextcolor: string;
  cardJustifyContent: string;
  cardFlexDirection: string;
  cardHeight?: string;
  cardWidth?: string;
  isLoading?: string;
  handleClick?: () => void;
}
const FormWrapper = (props: FormWrapperProps) => {
  return (
    <>
      <FlexWrapper
        flexDirection="row"
        alignItems="flex-end"
        position="absolute"
        top={props.top}
        left="0"
        width="100%"
        justifyContent="center"
      >
        <FlexWrapper
          width="300px"
          mediaQueries={`
          @media screen and (max-width: 400px) {
            width: 225px;
          }
        `}
        >
          <button
            style={{
              width: "100%",
              height: "70px",
              background: `${props.btnBgColor}`,
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={props.handleClick}
          >
            <Typography
              fontColor={props.btnTextColor}
              fontWeight="700"
              fontSize="24px"
            >
              {props.btnText}
            </Typography>
          </button>
        </FlexWrapper>
      </FlexWrapper>

      <Typography
        fontSize="40px"
        fontWeight="700"
        fontColor={props.formDescriptionTextcolor}
        margin="0"
      >
        {props.formDescriptionText}
      </Typography>
      <Card
        width={props.cardWidth}
        height={props.cardHeight}
        bgColor="#ffffff"
        boxShadow="10px 10px 50px rgba(0, 0, 0, 0.25)"
        borderRadius="30px"
        flexDirection="column"
        marginTop="20px"
      >
        <FlexWrapper
          flexDirection={props.cardFlexDirection}
          justifyContent={props.cardJustifyContent}
          alignItems="center"
          width="70%"
          height="80%"
          mediaQueries={`
            @media screen and (max-width: 991px) {
              width: 90%;
            }
          `}
        >
          {props.children}
          {props.isLoading && (
            <FlexWrapper>
              <SterlingLoadingIcon />
            </FlexWrapper>
          )}
        </FlexWrapper>
      </Card>
    </>
  );
};

FormWrapper.defaultProps = {
  cardHeight: "420px",
  cardWidth: "580px",
  isLoading: false,
};

export default FormWrapper;
