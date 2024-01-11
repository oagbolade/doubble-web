import { IRegister } from "../../types/registerType";
import { isEmail, isEmpty } from "./helpers";

export const loginStateValidatorSchema = {
  email: {
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
  password: {
    isEmpty: {
      func: isEmpty,
      error: "Password must not be empty",
    },
  },
  transactionID: {
    isEmpty: {
      func: isEmpty,
      error: "Transaction ID must not be empty",
    },
  },
};

export const changeErrorKeys = (key) => {
  switch (key) {
    case "bvn":
      return "BVN";
    case "firstName":
      return "First Name";
    case "lastName":
      return "Last Name";
    case "mobileNumber":
      return "Phone Number";
    case "emailAddress":
      return "Email Address";
    case "transactionPIN":
      return "Transaction PIN";
    case "startDate":
      return "Start Date";
    case "endDate":
      return "End Date";
    case "fundingAccount":
      return "Funding Account";
    case "beneficiaryAccount":
      return "Beneficiary Account";
    case "rollover":
      return "Rollover";

    default:
      return key;
  }
};

export const validateOldUser = (user: IRegister) => {
  let err = {};
  let isValid = true;
  for (let key in user) {
    if (user[key] === "") {
      isValid = false;
      err = { ...err, [key]: `${changeErrorKeys(key)} is required` };
    }
  }

  return { err, isValid };
};
