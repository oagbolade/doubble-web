import { AppDispatchProps } from "./../../types/index";
import { Dispatch } from "redux";
import * as otpTypes from "./otpTypes";
import { httpRequest } from "../../https/http";
import { IOPT } from "../../shared-components/IdentityVerification/VerifyEmail";

export const sendOTP = ({
  emailAddress,
  mobileNumber,
  userId,
  type,
  url,
}: IOPT) => async (dispatch: Dispatch<AppDispatchProps>) => {
  try {
    dispatch({ type: otpTypes.FETCHING_OTP });
    const result: any = await httpRequest({
      url,
      method: "POST",
      body: {
        platform: 1,
        imei: "string",
        deviceType: "1",
        deviceManufacturer: "string",
        deviceModel: "string",
        deviceIP: "string",
        deviceName: "string",
        userId,
        mobileNumber,
        emailAddress,
      },
    });

    if (result?.status === true) {
      dispatch({
        type: otpTypes.OTP_SUCCESS,
        payload: result?.message,
      });
      dispatch({
        type: otpTypes.OTP_COMPLETE,
        payload: { emailAddress, mobileNumber, userId, type },
      });
    } else {
      dispatch({
        type: otpTypes.OTP_ERROR,
        payload: result?.message || "Something went wrong!",
      });
    }
  } catch ({ message }) {
    dispatch({
      type: otpTypes.OTP_ERROR,
      payload: message || "Something went wrong!",
    });
  }
};
