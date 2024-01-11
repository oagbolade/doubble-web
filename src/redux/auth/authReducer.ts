import { Reducer } from "redux";
import { IUser } from "../../interfaces/IUser";
import * as AuthTypes from "./authTypes";

interface AuthState {
  auth: boolean;
  loading: boolean;
  loginerror: string;
  regerror:string;
  regsuccess:string;
  user: IUser ;
}

const initalState: AuthState = {
  auth: false,
  loading: false,
  loginerror: "",
  regerror: "",
  regsuccess:"",
  user: null,
};

const reducer: Reducer<AuthState> = (state = initalState, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN_SUCCESS:
      return {
        ...state,
        auth: true,
        loading: false,
        loginerror: "",
        user: action.payload,
      };
    case AuthTypes.LOGGING_IN:
      return {
        ...state,
        auth: false,
        loading: true,
        loginerror: "",
        user: null,
      };
    case AuthTypes.LOGIN_COMPLETED:
      return {
        ...state,
        loading: false,
      };
    case AuthTypes.LOGIN_FAILED:
      return {
        ...state,
        auth: false,
        loading: false,
        user: null,
        loginerror: action.payload,
      };
    case AuthTypes.REGISTER_SUCCESS:
      return {
        ...state,
        auth: false,
        loading: false,
        regerror: "",
        regsuccess:action.payload
      };
    case AuthTypes.REGISTER_RESET:
      return {
        ...state,
        regerror: "",
        regsuccess:""
      };
    case AuthTypes.REGISTERING:
      return {
        ...state,
        auth: false,
        loading: true,
        regerror: "",
        user: null,
      };
    case AuthTypes.REGISTER_FAILED:
      return {
        ...state,
        auth: false,
        loading: false,
        user: null,
        regerror: action.payload,
      };
    case AuthTypes.LOGOUT:
      return {
        ...state,
        auth: false,
        loading: false,
        user: {bvn:"",
          dob:"",
          emailAddress:"",
          firstName:"",
          gender:"",
          isEmailAddressConfirmed:false,
          isMobileNumberConfirmed:false,
          isPINConfirmed:false,
          isSecurityQuestionConfirmed:false,
          isUserMigrated:false,
          lastLogin: "",
          lastName:"",
          mobileNumber:"",
          refCode:"",
          userId:"",
          username:"",},
        loginerror: "",
      };
    case AuthTypes.CLEAR_LOGIN_ERROR:
      return {
        ...state,
        loginerror: "",
        regerror:"",
      }

    default:
      return state;
  }
};

export default reducer;
