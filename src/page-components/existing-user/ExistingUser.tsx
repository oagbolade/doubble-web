import { useState } from "react";
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
  existingUserStateValidatorSchema,
  setEmptyField,
} from "../../utils";
import { useAppSelector } from "../../redux/hooks";
import { httpRequest } from "../../https/http";

const ExistingUser = () => {
  const [apiError, setApiError] = useState("");
  const [isRequesting, setIsRequesting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { user } = useAppSelector((state) => state.auth);

  const defaultExistingUserState = {
    username: user.username || "",
    emailAddress: "",
    mobileNumber: "",
    transactionPIN: "",
  };

  const { handleChange, formValues, errors } = useFormValidation(
    defaultExistingUserState,
    existingUserStateValidatorSchema
  );

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    formValues.emailAddress = user.emailAddress;
    formValues.mobileNumber = user.mobileNumber;
    const hasError = setEmptyField(formValues);
    if (hasError) {
      setApiError(`${hasError} cannot be empty`);
      setTimeout(() => setApiError(""), 5000);
      return;
    }

    try {
      setError("");
      setApiError("");
      setSuccess("");
      setIsRequesting(true);
      const result: any = await httpRequest({
        url: "Account/MigrationSetup",
        method: "POST",
        body: {
          platform: 1,
          imei: "string",
          deviceType: "1",
          deviceManufacturer: "string",
          deviceModel: "string",
          deviceIP: "string",
          deviceName: "string",
          userId: user?.userId,
          emailAddress: formValues.emailAddress,
          mobileNumber: formValues.mobileNumber,
          username: formValues.username,
          transactionPIN: formValues.transactionPIN,
        },
      });

      if (result?.status === true) {
        setSuccess(result.message);
        setIsRequesting(false);
        setTimeout(() => {
          setSuccess("Updated Successfully");
          router.push("/overview");
        }, 3000);
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
              left="-35%"
              top="35%"
              width="100%"
              zIndex="999"
            >
              <FlexWrapper
                background="#9B51E0"
                padding="20px"
                borderRadius="100%"
              >
                <Typography
                  fontWeight="500"
                  fontColor="white"
                  fontSize="36px"
                  padding="4px 0"
                >
                  {user.firstName.charAt(0).toUpperCase()}{" "}
                  {user.lastName.charAt(0).toUpperCase()}
                </Typography>
              </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper
              width="80%"
              flexDirection="column"
              top="35%"
              left="-10%"
              position="absolute"
              alignItems="flex-start"
              justifyContent="center"
              mediaQueries={`
              @media screen and (max-width: 1200px) {
                left: -2%;
                width: 100%;
              }
          `}
            >
              <Typography fontWeight="700" fontSize="40px">
                Welcome Back
              </Typography>
              <Typography fontSize="26px" marginTop="12px">
                {user.firstName.charAt(0).toUpperCase() +
                  user.firstName.substring(1)}{" "}
                {user.lastName.charAt(0).toUpperCase() +
                  user.lastName.substring(1)}
              </Typography>
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
          paddingBottom="180px"
          mediaQueries={`
              @media screen and (max-width: 991px) {
                width: 100%;
                padding: 15px
              }
          `}
        >
          <FlexWrapper
            padding="80px"
            mediaQueries={`
              @media screen and (max-width: 991px) {
                width: 100%;
                padding: 5px
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
                Verify Your Account
              </Typography>
            </FlexWrapper>
            <form method="POST" onSubmit={handleSubmit}>
              <FlexWrapper>
                <FormInputV2
                  name="emailAddress"
                  type="email"
                  maxLenght={30}
                  placeholder="Email Address"
                  onChange={handleChange}
                  value={user?.emailAddress}
                  error={errors.emailAddress}
                />
                <FormInputV2
                  name="username"
                  maxLength={30}
                  type="text"
                  placeholder="Username"
                  onChange={handleChange}
                  value={user?.username}
                  error={!user.username && errors.username}
                />
                <FormInputV2
                  name="mobileNumber"
                  type="number"
                  maxLength={11}
                  placeholder="Mobile Number"
                  onChange={handleChange}
                  value={user.mobileNumber}
                  error={errors.mobileNumber}
                />
                <FormInputV2
                  name="transactionPIN"
                  type="password"
                  maxLength={4}
                  placeholder="Transaction PIN"
                  onChange={(e) => {
                    if (isNaN(Number(e.target.value))) return;
                    handleChange(e);
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
                <button
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
                  <Typography fontSize="24px">Sign Up</Typography>
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
                  justifyContent="center"
                  marginTop="20px"
                  paddingBottom="50px"
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
                        font-size: 12px;
                      }
                    `}
                      >
                        Login a different account
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

export default ExistingUser;
