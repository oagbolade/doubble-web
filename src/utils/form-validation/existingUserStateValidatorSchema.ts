import { isEmail, isEmpty } from "./helpers";

export const existingUserStateValidatorSchema = {
  emailAddress: {
    isEmpty: {
      func: isEmpty,
      error: "Must not be empty",
    },
    isEmail: {
      func: isEmail,
      error: "Invalid email format",
    },
  },
  username: {
    isEmpty: {
      func: isEmpty,
      error: "Username must not be empty",
    },
  },
  mobileNumber: {
    isEmpty: {
      func: isEmpty,
      error: "Mobile Number must not be empty",
    },
  },
  transactionPIN: {
    isEmpty: {
      func: isEmpty,
      error: "Transaction PIN must not be empty",
    },
  },
};
