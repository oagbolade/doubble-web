import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


import { Container, FlexWrapper, Typography, FormInputV2 } from "../../shared-components";
import { useFormValidation, otpStateValidatorSchema, setEmptyField } from "../../utils";
import { SterlingLoadingIcon } from "../../icons";

import {
  _iv,
  _key,
  encryptData,
  decryptionData,
} from "../../utils";

const defaultOtpState = {
  otp: "",
};
const OtpWrapper = () => {

  const [isRequesting, setIsRequesting] = React.useState(false);
  const [apiError, setApiError] = React.useState("");
  const router = useRouter();
  const { handleChange, formValues, errors } = useFormValidation(
    defaultOtpState,
    otpStateValidatorSchema
  );

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { action, method } = e.currentTarget;
      const hasError = setEmptyField(formValues);
      if (!hasError) {
        setIsRequesting(true);
        const res = await fetch(action, {
          method,
          body: JSON.stringify(formValues),
          headers: {
            'Content-Type': 'application/json'
          },
        });

        const encrypt = await res.text();
        setIsRequesting(false);
        const responseData = JSON.parse(decryptionData(encrypt, _key, _iv));
        if (responseData.status === false) {
          setApiError(responseData.message);
        }

        if (responseData.status === true) {
          router.push("/overview");
        }
      } else {
        setApiError(`${hasError} cannot be empty`);
      }
    } catch (e) {
      setIsRequesting(false);
      console.error("Error:", e.message);
    }
  }
  return (
    <Container bgColor="#ffffff" height="100%">
      <FlexWrapper height="100%">
        <FlexWrapper
          type="item"
          lg="6"
          md="6"
          background="#00CCFF"
          mediaQueries={`
              @media screen and (max-width: 991px) {
                display: none;
              }
          `}
          justifyContent="flex-end"
          position="relative"
        >
          <FlexWrapper position="relative" width="60%">
            <FlexWrapper
              position="absolute"
              left="-60%"
              top="20%"
              width="100%"
              zIndex="999"
            >
              <Image
                src="/otp/main-image.png"
                alt="Doubble Logo"
                width={594}
                height={800}
              />
            </FlexWrapper>
            <FlexWrapper
              width="80%"
              flexDirection="column"
              top="35%"
              left="0%"
              position="absolute"
              alignItems="flex-start"
              justifyContent="center"
            >
              <Typography fontWeight="700" fontSize="32px">
                Savings that grows
              </Typography>
              <Typography fontSize="32px">with you</Typography>
              <FlexWrapper marginTop="50px">
                <Image
                  src="/login/doubble-logo.png"
                  alt="Doubble Logo"
                  width={127}
                  height={30}
                />
              </FlexWrapper>
            </FlexWrapper>
            <Image
              src="/login/background-mat.png"
              alt="Doubble Logo"
              width={490}
              height={1150}
            />
          </FlexWrapper>
        </FlexWrapper>
        <FlexWrapper
          type="item"
          lg="6"
          md="6"
          xs="12"
          sm="12"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          padding="30px"
          mediaQueries={`
              @media screen and (max-width: 991px) {
                width: 100%;
                padding: 15px
              }
          `}
        >
          <FlexWrapper
            padding="50px"
            marginTop="-100px"
            mediaQueries={`
              @media screen and (max-width: 991px) {
                width: 100%;
                padding: 5px
              }
          `}
            flexDirection="column"
          >
            <FlexWrapper
              position="absolute"
              top="20px"
              left="20px"
              mediaQueries={`
                  @media screen and (min-width: 1200px) {
                    display: none;
                  }
              `}
            >
              <Image
                src="/login/doubble-logo-dark.png"
                alt="Doubble Logo"
                width={63}
                height={15}
              />
            </FlexWrapper>

            <FlexWrapper display="flex" flexDirection="column">
              <Typography
                fontSize="42px"
                fontWeight="700"
                mediaQueries={`
                  @media screen and (max-width: 1200px) {
                    font-size: 28px;
                  }
              `}
              >
                Stay secured
              </Typography>
              {apiError && (
                <Typography
                  fontColor="#EB5757"
                  fontSize="12px"
                  fontWeight="400"
                  marginTop="10px"
                >
                  {apiError}
                </Typography>
              )}
            </FlexWrapper>

            <form method="POST" action="/api/auth/otp" onSubmit={handleSubmit}>
              <FlexWrapper>
                <FormInputV2
                  type="text"
                  placeholder="Enter OTP"
                  name="otp"
                  onChange={handleChange}
                  error={errors.otp}
                />
                <button
                  style={{
                    width: "100%",
                    height: "70px",
                    background: "#00CCFF",
                    color: "#263E61",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    borderRadius: "5px",
                    border: "none",
                    marginTop: "50px",
                  }}
                  type="submit"
                >
                  <Typography fontSize="24px">Verify Account</Typography>
                  {isRequesting && (
                    <FlexWrapper marginLeft="5px">
                      {/* <SterlingLoadingIcon /> */}
                      <Image
                        src="/loader.gif"
                        alt="loader"
                        width={30}
                        height={30}
                      />
                    </FlexWrapper>
                  )}
                </button>
                <FlexWrapper
                  width="100%"
                  justifyContent="flex-end"
                  marginTop="20px"
                >
                  <Link href="/register">
                    <a
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Typography
                        mediaQueries={`
                      @media screen and (max-width: 600px) {
                        font-size: 14px;
                      }
                    `}
                      >
                        I don’t have an account
                      </Typography>
                    </a>
                  </Link>
                </FlexWrapper>
              </FlexWrapper>
            </form>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  );
};

export default OtpWrapper;
