import { isEmail, isEmpty } from "./helpers";

export const signupStateValidatorSchema = {
  username: {
    isEmpty: {
      func: isEmpty,
      error: "Username Must not be empty",
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
      error: "Confirm Password must not be empty",
    },
  },
};
