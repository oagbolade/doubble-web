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
import { SterlingLoadingIcon } from "../../icons";
import {
  useFormValidation,
  loginStateValidatorSchema,
  setEmptyField,
} from "../../utils";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { login } from "../../redux/auth/authActions";

const defaultLoginState = {
  username: "",
  password: "",
};

const WelcomeBack = () => {
  const [apiError, setApiError] = useState("");
  const { handleChange, formValues, errors } = useFormValidation(
    defaultLoginState,
    loginStateValidatorSchema
  );

  const { loading, loginerror, auth } = useAppSelector((state) => state.auth);
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
    // dispatch(login(data));
  }

  // if (auth) {
  //   router.push("/overview");
  // }

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
                  DE
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
            >
              <Typography fontWeight="700" fontSize="40px">
                Welcome Back
              </Typography>
              <Typography fontSize="26px" marginTop="12px">
                Desmond Edward
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
                Move Account Here
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
                  placeholder="Username/Email Address"
                  onChange={handleChange}
                  error={errors.username}
                />
                <FormInputV2
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  error={errors.password}
                />

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
                      <SterlingLoadingIcon />
                    </FlexWrapper>
                  )}
                </button>
                <FlexWrapper
                  width="100%"
                  justifyContent="center"
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

export default WelcomeBack;
