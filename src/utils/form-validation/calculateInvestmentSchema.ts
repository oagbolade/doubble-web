import { isEmail, isEmpty } from "./helpers";

export const calculateInvestmentSchema = {

  title: {
    isEmpty: {
      func: isEmpty,
      error: "Title must not be empty",
    },
  },
  amount: {
    isEmpty: {
      func: isEmpty,
      error: "Amount must not be empty",
    },
  },
  type: {
    isEmpty: {
      func: isEmpty,
      error: "Type must not be empty",
    },
  },
  duration: {
    isEmpty: {
      func: isEmpty,
      error: "Duration must not be empty",
    },
  },
};
