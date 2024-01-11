import { isEmail, isEmpty } from "./helpers";

export const loginStateValidatorSchema = {
  // email: {
  //   isEmpty: {
  //     func: isEmpty,
  //     error: "Must not be empty",
  //   },
  //   isEmail: {
  //     func: isEmail,
  //     error: "Invalid email format",
  //   },
  // },
  username: {
    isEmpty: {
      func: isEmpty,
      error: "Username must not be empty",
    },
  },
  password: {
    isEmpty: {
      func: isEmpty,
      error: "Password must not be empty",
    },
  },
};
