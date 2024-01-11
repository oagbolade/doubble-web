import { isEmail, isEmpty } from "./helpers";

export const sendMoneySchema = {

    fundingAcct1: {
        isEmpty: {
            func: isEmpty,
            error: "Funding account must not be empty",
        },
    },
    fundingAcct2: {
        isEmpty: {
            func: isEmpty,
            error: "Funding account must not be empty",
        },
    }

};
