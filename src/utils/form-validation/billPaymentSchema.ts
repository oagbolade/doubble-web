import { isEmail, isEmpty } from "./helpers";

export const billPaymentSchema = {

    phoneNo: {
        isEmpty: {
            func: isEmpty,
            error: "Phone number must not be empty",
        },
    },
    amount: {
        isEmpty: {
            func: isEmpty,
            error: "Amount must not be empty",
        },
    }

};
