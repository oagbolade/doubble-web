import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import {
  Container,
  FlexWrapper,
  Typography,
  FormInputV2,
} from "../../shared-components";

import { httpRequest, HTTPResponse } from "../../https/http";
import { ITarget } from "../../types/Investment";
import { userInfo } from "../../redux/auth/authActions";

const OtpWrapper = () => {
  const dispatch = useAppDispatch();
  const [isRequesting, setIsRequesting] = React.useState(false);
  const [error, setError] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const router = useRouter();

  const { data } = useAppSelector(({ otp }) => otp);
  const { user } = useAppSelector((state) => state.auth);

  const { emailAddress, mobileNumber, userId, type } = data;

  async function handleEmailSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      if (!otp) return setError("Please enter the OTP sent to you!");
      setIsRequesting(true);
      const res: HTTPResponse<ITarget> = await httpRequest({
        url: "Account/ValidateEmailAddress",
        method: "POST",
        body: {
          platform: 1,
          imei: "string",
          deviceType: "1",
          deviceManufacturer: "string",
          deviceModel: "string",
          deviceIP: "string",
          deviceName: "string",
          identity: emailAddress,
          otp,
          // userId,
        },
      });
      if (res.status === true) {
        setOtp("");
        dispatch({ type: "OTP_RESET" });
        dispatch(userInfo({ isEmailAddressConfirmed: true }));
        setSuccess(res?.message || "Verified Successfully!");
        setIsRequesting(false);
        setTimeout(() => router.push("/overview"), 2000);
      } else {
        setIsRequesting(false);
        setError(res?.message || "Something went wrong!");
      }
    } catch (err) {
      setIsRequesting(false);
      setError(err.message || "Something went wrong!");
    }
  }

  async function handlePhoneSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      if (!otp) return setError("Please enter the OTP sent to you!");
      setIsRequesting(true);
      const res: HTTPResponse<ITarget> = await httpRequest({
        url: "Account/ValidatePhoneNumber",
        method: "POST",
        body: {
          platform: 1,
          imei: "string",
          deviceType: "1",
          deviceManufacturer: "string",
          deviceModel: "string",
          deviceIP: "string",
          deviceName: "string",
          identity: mobileNumber,
          otp,
          userId,
        },
      });

      if (res.status === true) {
        setOtp("");
        dispatch({ type: "OTP_RESET" });
        dispatch(userInfo({ isMobileNumberConfirmed: true }));
        setIsRequesting(false);
        setSuccess(res?.message || "Verified Successfully!");
        setTimeout(() => router.push("/overview"), 2000);
      } else {
        setIsRequesting(false);
        setError(res?.message || "Something went wrong!");
      }
    } catch (err) {
      setIsRequesting(false);
      setError(err.message || "Something went wrong!");
    }
  }

  const noOTPHandler = () => {
    dispatch({ type: "OTP_RESET" });
    router.push("/overview");
  };

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
                marginBottom="10px"
                mediaQueries={`
                  @media screen and (max-width: 1200px) {
                    font-size: 28px;
                  }
              `}
              >
                Stay secured
              </Typography>
            </FlexWrapper>
            {error.length > 0 && (
              <FlexWrapper
                /* marginBottom="200px" */
                marginTop="3%"
                width="90%"
                flexDirection="row"
                justifyContent="center"
                /*  alignItems="center" */
              >
                <Typography
                  marginTop="5px"
                  fontWeight="600"
                  fontColor="red"
                  fontSize="13px"
                >
                  {error}
                </Typography>
              </FlexWrapper>
            )}
            {success.length > 0 && (
              <FlexWrapper
                /* marginBottom="200px" */
                marginTop="3%"
                width="90%"
                flexDirection="row"
                justifyContent="center"
                /*  alignItems="center" */
              >
                <Typography
                  marginTop="5px"
                  fontWeight="600"
                  fontColor="green"
                  fontSize="14px"
                >
                  {success}
                </Typography>
              </FlexWrapper>
            )}
            <FlexWrapper>
              <FormInputV2
                type="password"
                placeholder="Enter OTP"
                maxLength={6}
                name="otp"
                value={otp}
                onChange={({ target }) => {
                  if (isNaN(Number(target.value))) return;
                  setOtp(target.value);
                }}
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
                  cursor: "pointer",
                }}
                onClick={
                  type === "email" ? handleEmailSubmit : handlePhoneSubmit
                }
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
                <a
                  style={{
                    textDecoration: "none",
                  }}
                  onClick={noOTPHandler}
                >
                  <Typography fontSize="14px">
                    Didn’t get OTP on my mobile number or email
                  </Typography>
                </a>
              </FlexWrapper>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  );
};

export default OtpWrapper;
