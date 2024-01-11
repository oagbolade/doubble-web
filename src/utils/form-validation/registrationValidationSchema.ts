import { isEmpty, isEmail } from "./helpers";
export const registerStateValidatorSchema = {
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
  bvn: {
    isEmpty: {
      func: isEmpty,
      error: "BVN must not be empty",
    },
  },
  lastName: {
    isEmpty: {
      func: isEmpty,
      error: "Last name must not be empty",
    },
  },
  firstName: {
    isEmpty: {
      func: isEmpty,
      error: "First Name must not be empty",
    },
  },
  dateOfBirth: {
    isEmpty: {
      func: isEmpty,
      error: "Date of birth must not be empty",
    },
  },
  mobilePhoneNumber: {
    isEmpty: {
      func: isEmpty,
      error: "Mobile Phone number must not be empty",
    },
  },
  gender: {
    isEmpty: {
      func: isEmpty,
      error: "Gender must not be empty",
    },
  },
  password: {
    isEmpty: {
      func: isEmpty,
      error: "password must not be empty",
    },
  },
  transactionPIN: {
    isEmpty: {
      func: isEmpty,
      error: "Transaction PIN must not be empty",
    },
  },
  username: {
    isEmpty: {
      func: isEmpty,
      error: "Username must not be empty",
    },
  },
};
