import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  Container,
  FlexWrapper,
  Typography,
  FormInputV2,
} from "../../shared-components";
import {
  useFormValidation,
  forgotStateValidatorSchema,
  setEmptyField,
} from "../../utils";

import { httpRequest } from "../../https/http";
import { changeErrorKeys } from "../../utils/form-validation/regOldUserValidator";

const defaultForgotPasswordState = {
  emailAddress: "",
  transactionPIN: "",
};
const ForgotPassword = () => {
  const [isRequesting, setIsRequesting] = React.useState(false);
  const router = useRouter();
  const { handleChange, formValues, errors } = useFormValidation(
    defaultForgotPasswordState,
    forgotStateValidatorSchema
  );

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const hasError = setEmptyField(formValues);
    if (!hasError) {
      try {
        setError("");
        setSuccess("");
        setIsRequesting(true);
        const result: any = await httpRequest({
          url: "Account/ForgotPassword",
          method: "POST",
          body: {
            platform: 1,
            imei: "string",
            deviceType: "1",
            deviceManufacturer: "string",
            deviceModel: "string",
            deviceIP: "string",
            deviceName: "string",
            emailAddress: formValues.emailAddress,
            isMobile: true,
            transactionPIN: formValues.transactionPIN,
          },
        });
        if (result?.status === true) {
          setSuccess(result.message);
          setIsRequesting(false);
          setTimeout(() => {
            setSuccess("");
            router.push("/reset-password");
          }, 5000);
        } else {
          setError(result.message);
          setIsRequesting(false);
          setTimeout(() => setError(""), 5000);
        }
      } catch (e) {
        setIsRequesting(false);
        setError(e.message || "Something went wrong!");
        setTimeout(() => setError(""), 5000);
      }
    } else {
      setError(`${changeErrorKeys(hasError)} cannot be empty`);
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
                Forgot Password
              </Typography>
            </FlexWrapper>
            <form method="POST" onSubmit={handleSubmit}>
              <FlexWrapper>
                <FormInputV2
                  type="email"
                  placeholder="Enter Email"
                  maxLength="30"
                  name="emailAddress"
                  onChange={handleChange}
                  error={errors.emailAddress}
                />
                <FormInputV2
                  type="number"
                  placeholder="Enter Transaction PIN"
                  name="transactionPIN"
                  maxLength={4}
                  onChange={(e) => {
                    if (isNaN(Number(e.target.value))) {
                      return false
                    }else {
                      handleChange(e)
                    }
                    
                  }}
                  error={errors.transactionPIN}
                />
                <div className="text-center col-12">
                  {success && (
                    <Typography
                      fontColor="green"
                      fontSize="14px"
                      fontWeight="400"
                      marginTop="20px"
                    >
                      <span className="w3-animate-top">{success}</span>
                    </Typography>
                  )}
                </div>
                <div className="text-center col-12">
                  {error && (
                    <Typography
                      fontColor="#EB5757"
                      fontSize="14px"
                      fontWeight="400"
                      marginTop="20px"
                    >
                      <span className="w3-animate-top">{error}</span>
                    </Typography>
                  )}
                </div>
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
                    marginTop: "30px",
                    cursor: "pointer",
                  }}
                  type="submit"
                >
                  <Typography fontSize="24px">Send Email</Typography>
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

export default ForgotPassword;
