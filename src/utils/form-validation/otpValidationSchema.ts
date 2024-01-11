import { isEmail, isEmpty } from "./helpers";

export const otpStateValidatorSchema = {
  otp: {
    isEmpty: {
      func: isEmpty,
      error: "Must not be empty",
    },
  },
};
