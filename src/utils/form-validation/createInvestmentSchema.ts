import { isEmail, isEmpty } from "./helpers";

export const createInvestmentSchema = {

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
  month: {
    isEmpty: {
      func: isEmpty,
      error: "Duration must not be empty",
    },
  },
  frequency: {
    isEmpty: {
      func: isEmpty,
      error: "Frequency must not be empty",
    },
  },
  fundingAccount: {
    isEmpty: {
      func: isEmpty,
      error: "Funding Account is required",
    },
  },
  fundingBank: {
    isEmpty: {
      func: isEmpty,
      error: "Funding Bank is required",
    },
  },
  beneficiaryAcct: {
    isEmpty: {
      func: isEmpty,
      error: "Beneficiary Account is required",
    },
  },
  beneficiaryBank: {
    isEmpty: {
      func: isEmpty,
      error: "Beneficiary Bank is required",
    },
  },
};
