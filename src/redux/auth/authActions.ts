import { sendOTP } from "./../otp/otpAction";
import { Dispatch } from "react";
import { httpRequest } from "../../https/http";
import { AuthAction } from "../../interfaces/IUser";
import { IRegister } from "../../types/registerType";
import * as AuthTypes from "./authTypes";

interface AuthData {
  username: string;
  password: string;
}

interface newDeviceData {
  question: string;
  answer: string;
}

export const register = (data: IRegister) => async (
  dispatch: Dispatch<AuthAction | any>
) => {
  try {
    dispatch({ type: AuthTypes.REGISTERING });
    const result = await httpRequest({
      url: "Account/Register",
      method: "POST",
      body: data,
    });
    if (result.status === true) {
      dispatch({
        type: "OTP_COMPLETE",
        payload: {
          emailAddress: data.emailAddress,
          mobileNumber: data.mobilePhoneNumber,
          userId: "",
          type: "email",
        },
      });
      dispatch({ type: AuthTypes.REGISTER_SUCCESS, payload: result.message });
      setTimeout(() => dispatch({ type: AuthTypes.REGISTER_RESET }), 6000);
    } else {
      dispatch({
        type: AuthTypes.REGISTER_FAILED,
        payload: result.message || "Something went wrong, please try again",
      });
      setTimeout(() => dispatch({ type: AuthTypes.CLEAR_LOGIN_ERROR }), 5000);
    }
  } catch ({ message }) {
    dispatch({
      type: AuthTypes.REGISTER_FAILED,
      payload: message || "oops !!! something went wrong, please try again.",
    });
  }
};

export const login = (data: AuthData, router) => async (
  dispatch: Dispatch<AuthAction>
) => {
  try {
    dispatch({ type: AuthTypes.LOGGING_IN });
    const result: any = await httpRequest({
      url: "Account/Login",
      method: "POST",
      body: data,
    });

    if (result.status === true) {
      dispatch({ type: AuthTypes.LOGIN_SUCCESS, payload: result.data });
      localStorage.setItem("dd-user", data.username);
      if (result?.data?.isUserMigrated === true) {
        router.push("/existing-user");
      }
    } else {
      if (result.message === "Unidentified device") {
        dispatch({ type: AuthTypes.LOGIN_SUCCESS, payload: result.data });
        localStorage.setItem("dd-user", data.username);
        if (result?.data?.isUserMigrated === true) {
          return router.push("/existing-user");
        }
      } else {
        dispatch({ type: AuthTypes.LOGIN_FAILED, payload: result.message });
        localStorage.removeItem("dd-user");
      }
    }
  } catch ({ message }) {
    dispatch({
      type: AuthTypes.LOGIN_FAILED,
      payload: "oops !!! something went wrong, please try again.",
    });
    localStorage.removeItem("dd-user");
  } finally {
    dispatch({ type: AuthTypes.LOGIN_COMPLETED });
  }
};

export const newDevice = (data: newDeviceData) => async (
  dispatch: Dispatch<AuthAction>
) => {
  try {
    dispatch({ type: AuthTypes.LOGGING_IN });
    const result = await httpRequest({
      url: "Account/Login",
      method: "POST",
      body: data,
    });
    if (result.status) {
      dispatch({ type: AuthTypes.LOGIN_SUCCESS, payload: result.data });
    } else {
      if (result.message === "Unidentified device") {
        dispatch({ type: AuthTypes.LOGIN_SUCCESS, payload: result.data });
      } else {
        dispatch({ type: AuthTypes.LOGIN_FAILED, payload: result.message });
      }
    }
  } catch ({ message }) {
    dispatch({
      type: AuthTypes.LOGIN_FAILED,
      payload: "oops, something went wrong, please try again!!.",
    });
  } finally {
    dispatch({ type: AuthTypes.LOGIN_COMPLETED });
  }
};
export const userInfo = (obj) => async (
  dispatch: Dispatch<AuthAction>,
  getState: any
) => {
  dispatch({
    type: AuthTypes.LOGIN_SUCCESS,
    payload: { ...getState().auth.user, ...obj },
  });
};

export const logout = () => (
  dispatch: Dispatch<{ type: string; payload?: any }>
) => {
  dispatch({ type: AuthTypes.LOGOUT });
};
