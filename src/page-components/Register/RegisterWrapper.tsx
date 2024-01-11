import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import {
  Container,
  FlexWrapper,
  Typography,
  FormInputV2,
  SelectInput,
} from "../../shared-components";
import { ArrowRightIcon } from "../../icons";
import { setEmptyField } from "../../utils";

import { register } from "../../redux/auth/authActions";
import { httpRequest } from "../../https/http";
import { IRegister, ISterling } from "../../types/registerType";
import { validateOldUser } from "../../utils/form-validation/regOldUserValidator";

const genderInfo = ["male", "female"];

const RegisterWrapper = () => {
  const dispatch = useAppDispatch();
  const [isRequesting, setIsRequesting] = React.useState(false);
  const [isStepTwo, setIsStepTwo] = React.useState(false);
  const [apiError, setApiError] = React.useState("");
  const [error, setError] = React.useState({
    bvn: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    mobileNumber: "",
    emailAddress: "",
    gender: "",
    username: "",
    password: "",
    transactionPIN: "",
  });
  const [user, setUser] = React.useState({
    bvn: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "2000-01-01",
    mobileNumber: "",
    emailAddress: "",
    gender: "male",
    username: "",
    password: "",
    transactionPIN: "",
  });
  const router = useRouter();

  const { regerror, regsuccess, loading } = useAppSelector(({ auth }) => auth);

  const { loading: otpLoader, data } = useAppSelector(({ otp }) => otp);

  useEffect(() => {
    if (!otpLoader && data.type.length && regsuccess) {
      router.push("/otp");
    }
  }, [data, regsuccess]);

  async function handleSubmit(e) {
    setApiError("");
    e.preventDefault();
    try {
      const modifiedFormValues = {
        ...user,
        dateOfBirth: new Date(user.dateOfBirth).toISOString(),
        platform: 1,
        gender: genderInfo.indexOf(user.gender),
        imei: "string",
        deviceType: "1",
        deviceManufacturer: "string",
        deviceModel: "string",
        deviceIP: "string",
        deviceName: "string",
        channel: "string",
      };
      const hasError = setEmptyField(user);
      if (!hasError) {
        dispatch(register(modifiedFormValues));
      } else {
        setApiError(`${hasError} cannot be empty`);
      }
    } catch (e) {
      setIsRequesting(false);
      console.error("Error::", e.message);
    }
  }

  const handleSterling = async () => {
    setApiError("");
    const { username, password, transactionPIN, ...stepOne } = user;
    let { err, isValid }: { err: any; isValid: boolean } = validateOldUser(
      stepOne
    );
    if (stepOne.bvn.trim().length !== 11) {
      if (!err?.bvn) err.bvn = "BVN must be 11 digits!";
      isValid = false;
    }
    if (!isValid) {
      setError({ ...error, ...err });
      return false;
    }
    setIsRequesting(true);
    try {
      const result: ISterling = await httpRequest({
        url: "Account/IsSterlingByBVN",
        method: "POST",
        body: {
          platform: 1,
          imei: "string",
          deviceType: "1",
          deviceManufacturer: "string",
          deviceModel: "string",
          deviceIP: "string",
          deviceName: "string",
          bvn: user.bvn,
        },
      });
      if (result.message.length > 0) {
        setIsRequesting(false);
        if (result.status === true) {
          if (
            result.data.firstName.toLowerCase() !== user.firstName.toLowerCase()
          )
            return setApiError("First Name does not match name in BVN");
          if (
            result.data.lastName.toLowerCase() !== user.lastName.toLowerCase()
          )
            return setApiError("Last Name does not match name in BVN");
          if (result.data.phoneNumber !== user.mobileNumber)
            return setApiError("Phone Number does not match phone in BVN");
          if (
            result.data.emailAddress.toLowerCase() !==
            user.emailAddress.toLowerCase()
          )
            return setApiError("Email address does not match email in BVN");
        }
        setIsStepTwo(true);
      }
    } catch (err) {
      console.log("isSterling", err.message);
    }
  };

  return (
    <Container bgColor="#ffffff">
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
          position="relative"
          justifyContent="flex-end"
        >
          <FlexWrapper
            position="absolute"
            bottom="10%"
            width="100%"
            zIndex="999"
          >
            <Image
              src="/register/main-image.png"
              alt="Doubble Logo"
              width={854}
              height={780}
            />
          </FlexWrapper>
          <FlexWrapper position="relative" width="60%">
            <FlexWrapper
              width="80%"
              flexDirection="column"
              top="10%"
              left="-50%"
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
          justifyContent="flex-start"
          padding="30px"
          mediaQueries={`
              @media screen and (max-width: 991px) {
                width: 100%;
                padding: 15px
              }
          `}
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
          <FlexWrapper
            padding="50px"
            mediaQueries={`
              @media screen and (max-width: 991px) {
                width: 100%;
                padding: 20px;
                margin-top: 30px;
              }
          `}
          >
            {!isStepTwo ? (
              <>
                <FlexWrapper
                  display="flex"
                  flexDirection="column"
                  marginBottom="20px"
                >
                  <Typography
                    fontSize="42px"
                    fontWeight="700"
                    mediaQueries={`
                        @media screen and (max-width: 1200px) {
                          font-size: 28px;
                        }
                    `}
                  >
                    Let’s Get Started
                  </Typography>
                </FlexWrapper>
                <FlexWrapper>
                  <FormInputV2
                    type="text"
                    name="bvn"
                    maxLength="11"
                    placeholder="BVN"
                    value={user.bvn}
                    error={error.bvn}
                    onChange={({ target }) => {
                      if (isNaN(Number(target.value))) return;
                      setUser({ ...user, [target.name]: target.value });
                      error.bvn && setError({ ...error, [target.name]: "" });
                    }}
                  />
                  <FormInputV2
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={user.firstName}
                    maxLength="30"
                    error={error.firstName}
                    onChange={({ target }) => {
                      if (/[0-9]+$/.test(target.value)) return;
                      setUser({ ...user, [target.name]: target.value });
                      error.firstName &&
                        setError({ ...error, [target.name]: "" });
                    }}
                  />
                  <FormInputV2
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    maxLength="30"
                    value={user.lastName}
                    error={error.lastName}
                    onChange={({ target }) => {
                      if (/[0-9]+$/.test(target.value)) return;
                      setUser({ ...user, [target.name]: target.value });
                      error.lastName &&
                        setError({ ...error, [target.name]: "" });
                    }}
                  />
                  <FormInputV2
                    type="date"
                    name="dateOfBirth"
                    placeholder="Date Of Birth"
                    value={user.dateOfBirth}
                    error={error.dateOfBirth}
                    onChange={({ target }) => {
                      setUser({ ...user, [target.name]: target.value });
                      error.dateOfBirth &&
                        setError({ ...error, [target.name]: "" });
                    }}
                  />
                  <FormInputV2
                    type="text"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    maxLength="11"
                    value={user.mobileNumber}
                    error={error.mobileNumber}
                    onChange={({ target }) => {
                      if (isNaN(Number(target.value))) return;
                      setUser({ ...user, [target.name]: target.value });
                      error.mobileNumber &&
                        setError({ ...error, [target.name]: "" });
                    }}
                  />
                  <FormInputV2
                    type="email"
                    name="emailAddress"
                    minLength="6"
                    maxLength="30"
                    placeholder="Email"
                    error={error.emailAddress}
                    value={user.emailAddress}
                    onChange={({ target }) => {
                      setUser({ ...user, [target.name]: target.value });
                      error.emailAddress &&
                        setError({ ...error, [target.name]: "" });
                    }}
                  />
                  <SelectInput
                    onChange={({ target }) => {
                      setUser({ ...user, [target.name]: target.value });
                      error.gender && setError({ ...error, [target.name]: "" });
                    }}
                    name="gender"
                    value={user.gender}
                    placeholder="Gender"
                    className="pr-3"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </SelectInput>
                </FlexWrapper>
              </>
            ) : (
              <>
                <FlexWrapper
                  display="flex"
                  flexDirection="column"
                  marginBottom="20px"
                  marginTop="100px"
                >
                  <Typography
                    fontSize="42px"
                    fontWeight="700"
                    mediaQueries={`
                  @media screen and (max-width: 1200px) {
                    font-size: 28px;
                  }
              `}
                  >
                    Almost There
                  </Typography>
                </FlexWrapper>
                <FlexWrapper>
                  <FormInputV2
                    type="text"
                    name="username"
                    minLength="6"
                    maxLength="30"
                    placeholder="Username"
                    value={user.username}
                    error={error.username}
                    onChange={({ target }) => {
                      setUser({ ...user, [target.name]: target.value });
                      error.username &&
                        setError({ ...error, [target.name]: "" });
                    }}
                  />
                  <FormInputV2
                    type="password"
                    name="password"
                    minLength="8"
                    maxLength="30"
                    value={user.password}
                    placeholder="Password"
                    error={error.password}
                    onChange={({ target }) => {
                      setUser({ ...user, [target.name]: target.value });
                      error.password &&
                        setError({ ...error, [target.name]: "" });
                    }}
                  />
                  <FormInputV2
                    type="password"
                    name="transactionPIN"
                    placeholder="Transaction PIN"
                    minLength="4"
                    maxLength="4"
                    error={error.transactionPIN}
                    value={user.transactionPIN}
                    onChange={({ target }) => {
                      if (isNaN(Number(target.value))) return;
                      setUser({ ...user, [target.name]: target.value });
                      error.transactionPIN &&
                        setError({ ...error, [target.name]: "" });
                    }}
                  />
                </FlexWrapper>
              </>
            )}
            <div className="text-center col-12">
              {regsuccess && (
                <Typography
                  fontColor="green"
                  fontSize="14px"
                  fontWeight="400"
                  marginTop="20px"
                >
                  <span className="w3-animate-top">{regsuccess}</span>
                </Typography>
              )}
            </div>
            <div className="text-center col-12">
              {apiError && (
                <Typography
                  fontColor="#EB5757"
                  fontSize="14px"
                  fontWeight="400"
                  marginTop="20px"
                >
                  <span className="w3-animate-top">{apiError}</span>
                </Typography>
              )}
            </div>
            <div className="text-center col-12">
              {regerror && (
                <Typography
                  fontColor="#EB5757"
                  fontSize="14px"
                  fontWeight="400"
                  marginTop="20px"
                >
                  <span className="w3-animate-top">{regerror}</span>
                </Typography>
              )}
            </div>
            <button
              onClick={isStepTwo ? handleSubmit : handleSterling}
              style={{
                width: "100%",
                height: "70px",
                background: "#00CCFF",
                color: "#263E61",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                border: "none",
                marginTop: "20px",
                cursor: "pointer",
              }}
              type="submit"
            >
              {!isStepTwo ? (
                <>
                  <Typography fontSize="24px" marginRight="20px">
                    Next
                  </Typography>
                  <ArrowRightIcon />
                </>
              ) : (
                <Typography fontSize="24px" marginRight="20px">
                  Sign me Up
                </Typography>
              )}
              {loading && (
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
              <Link href="/login">
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
                    I have an account
                  </Typography>
                </a>
              </Link>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  );
};

export default RegisterWrapper;
