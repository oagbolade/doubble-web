import { Dispatch } from "react";
import { httpRequest } from "../../https/http";
import * as SearchTypes from "./SearchTypes";

export const searchMessage = (term: string) => async (dispatch: Dispatch<{ type: string; payload?: any }>) => {
    try {
        dispatch({ type: SearchTypes.SEARCHING_MESSAGE });
        const result: any = await httpRequest({ url: "" });

        if (result.status === true) {
            dispatch({ type: SearchTypes.SEARCH_MESSAGE_COMPLETE, payload: result.data });
        } else {
            dispatch({ type: SearchTypes.SEARCH_MESSAGE_FAILED });
        }
    } catch ({ message }) {
        dispatch({ type: SearchTypes.SEARCH_MESSAGE_FAILED });
    }
};

export const searchInvestment = (term: string) => async (dispatch: Dispatch<{ type: string; payload?: any }>) => {
    try {
        dispatch({ type: SearchTypes.SEARCHING_INVESTMENT });
        const result: any = await httpRequest({ url: "" });

        if (result.status === true) {
            dispatch({ type: SearchTypes.SEARCH_INVESTMENT_COMPLETE, payload: result.data });
        } else {
            dispatch({ type: SearchTypes.SEARCH_INVESTMENT_FAILED });
        }
    } catch ({ message }) {
        dispatch({ type: SearchTypes.SEARCH_INVESTMENT_FAILED });
    }
};