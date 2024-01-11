import { isEmail, isEmpty } from "./helpers";

export const forgotStateValidatorSchema = {
  emailAddress: {
    isEmpty: {
      func: isEmpty,
      error: "Email must not be empty",
    },
    isEmail: {
      func: isEmail,
      error: "Invalid email format",
    },
  },
  transactionPIN: {
    isEmpty: {
      func: isEmpty,
      error: "Transaction PIN must not be empty",
    },
  },
};

export const resetStateValidatorSchema = {
  otp: {
    isEmpty: {
      func: isEmpty,
      error: "OTP must not be empty",
    },
  },
  emailAddress: {
    isEmpty: {
      func: isEmpty,
      error: "Email must not be empty",
    },
    isEmail: {
      func: isEmail,
      error: "Invalid email format",
    },
  },
  password: {
    isEmpty: {
      func: isEmpty,
      error: "Password must not be empty",
    },
  },
  confirmPassword: {
    isEmpty: {
      func: isEmpty,
      error: "Confirm password must not be empty",
    },
  },
};
