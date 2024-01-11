import { Reducer } from "redux";
import * as OTPTypes from "./otpTypes";

interface OTPState {
  loading: boolean;
  error: string;
  success:string;
  data: {emailAddress:string,mobileNumber:string,userId:string,type:string}
}

const initialState: OTPState = {
  loading: false,
  error: "",
  success:"",
  data: { userId: "", mobileNumber: "", emailAddress: "",type:"" },
};

const reducer: Reducer<OTPState> = (state = initialState, action) => {
  switch (action.type) {
    case OTPTypes.FETCHING_OTP:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case OTPTypes.OTP_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case OTPTypes.OTP_SUCCESS:
      return {
        ...state,
        success: action.payload,
        loading: false,
      };
    case OTPTypes.OTP_COMPLETE:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case OTPTypes.OTP_RESET:
      return {
        ...state,
        loading: false,
        success:"",
        data: { userId: "", mobileNumber: "", emailAddress: "",type:"" },
      };
    default:
      return state;
  }
};

export default reducer;
