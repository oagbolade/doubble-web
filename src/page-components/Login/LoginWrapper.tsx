import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Container,
  FlexWrapper,
  Typography,
  FormInputV2,
} from "../../shared-components";
import { SterlingLoadingIcon } from "../../icons";
import {
  useFormValidation,
  loginStateValidatorSchema,
  setEmptyField,
} from "../../utils";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { login } from "../../redux/auth/authActions";
import { Check } from "./Input";
import { CLEAR_LOGIN_ERROR } from "../../redux/auth/authTypes";

const defaultLoginState = {
  username: typeof window !== "undefined" && localStorage.getItem("dd-user") || "",
  password: "",
};

const LoginWrapper = () => {
  const [apiError, setApiError] = useState("");
  const { handleChange, formValues, errors } = useFormValidation(
    defaultLoginState,
    loginStateValidatorSchema
  );

  const { loading, loginerror, auth, user } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const hasError = setEmptyField(formValues);
    if (hasError) {
      setApiError(`${hasError} cannot be empty`);
      return;
    }

    const data = {
      username: formValues.username,
      password: formValues.password,
    };
    dispatch(login(data, router));
  }

  useEffect(() => {
    dispatch({ type: CLEAR_LOGIN_ERROR });
    return () => {
      dispatch({ type: CLEAR_LOGIN_ERROR });
    };
  }, []);

  if (auth && !user.isUserMigrated) {
    router.push("/overview");
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
                src="/login/main-image.png"
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
          // justifyContent="center"
          paddingTop="120px"
          paddingLeft="30px"
          paddingRight="30px"
          mediaQueries={`
              @media screen and (max-width: 991px) {
                width: 100%;
                padding: 15px
              }
          `}
        >
          <FlexWrapper
            padding="50px"
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
                Welcome Back
              </Typography>
              {(loginerror || apiError) && (
                <Typography
                  fontColor="#EB5757"
                  fontSize="12px"
                  fontWeight="400"
                  marginTop="10px"
                >
                  {loginerror || apiError}
                </Typography>
              )}
            </FlexWrapper>
            <form
              method="POST"
              action="/api/auth/login"
              onSubmit={handleSubmit}
            >
              <FlexWrapper>
                <FormInputV2
                  name="username"
                  type="text"
                  minLength="6"
                  maxLength="30"
                  placeholder="Username/Email Address"
                  defaultValue={localStorage.getItem("dd-user") || ""}
                  onChange={handleChange}
                  error={errors.username !== defaultLoginState.username  ? errors.username : ""}
                />
                <FormInputV2
                  name="password"
                  type="password"
                  minLength="8"
                  maxLength="30"
                  placeholder="Password"
                  onChange={handleChange}
                  error={errors.password}
                />
                <FlexWrapper
                  width="100%"
                  marginTop="5px"
                  // marginBottom="20px"
                  justifyContent="flex-end"
                  // justifyContent="space-between"
                >
                  <FlexWrapper
                    type="item"
                    lg="6"
                    md="6"
                    xs="6"
                    sm="6"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Link href="/forgot-password">
                      <a
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        <Typography
                          fontWeight="700"
                          mediaQueries={`
                          @media screen and (max-width: 600px) {
                            font-size: 10px;
                          }
                        `}
                        >
                          Forgot Password?
                        </Typography>
                      </a>
                    </Link>
                  </FlexWrapper>
                </FlexWrapper>
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
                    marginTop: "50px",
                    cursor: "pointer",
                  }}
                  type="submit"
                >
                  <Typography fontSize="24px">Login</Typography>
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
                </button>
                <FlexWrapper
                  width="100%"
                  justifyContent="flex-end"
                  marginTop="20px"
                  // marginBottom="50px"

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

export default LoginWrapper;
