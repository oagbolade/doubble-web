import { Reducer } from "redux";
import * as SearchTypes from "./SearchTypes";

export type Message = { id: string; title: string; message: string };

interface SearchState {
    messages: {
        loading: boolean;
        data: Message[]
    }
    investment: {
        loading: boolean;
        data: any[]
    }
    selectedMessage: Message
    selectedInvestment: any;
}

const initalState: SearchState = {
    messages: {
        loading: false,
        data: [
            {
                id: `mes${Math.random()}`,
                title: "Message 1",
                message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, con"
            },
            {
                id: `mes${Math.random()}`,
                title: "Message 2",
                message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, con making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
            },
            {
                id: `mes${Math.random()}`,
                title: "Message 3",
                message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, con"
            },
            {
                id: `mes${Math.random()}`,
                title: "Message 4",
                message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, con"
            },
            {
                id: `mes${Math.random()}`,
                title: "Message 5",
                message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, con"
            },
            {
                id: `mes${Math.random()}`,
                title: "Message 6",
                message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, con"
            },
            {
                id: `mes${Math.random()}`,
                title: "Message 7",
                message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, con"
            },
            {
                id: `mes${Math.random()}`,
                title: "Message 8",
                message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, con"
            },
            {
                id: `mes${Math.random()}`,
                title: "Message 9",
                message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, con"
            },
            {
                id: `mes${Math.random()}`,
                title: "Message 10",
                message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, con"
            },
            {
                id: `mes${Math.random()}`,
                title: "Message 11",
                message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, con"
            },
            {
                id: `mes${Math.random()}`,
                title: "Message 12",
                message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, con"
            }
        ]
    },
    investment: {
        loading: false,
        data: []
    },
    selectedMessage: null,
    selectedInvestment: null
};

const reducer: Reducer<SearchState> = (state = initalState, action) => {
    switch (action.type) {
        case SearchTypes.SEARCHING_MESSAGE:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    loading: true
                }
            };
        case SearchTypes.SEARCH_MESSAGE_COMPLETE:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    loading: false,
                    data: action.payload
                }
            };
        case SearchTypes.SEARCH_MESSAGE_FAILED:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    loading: false
                }
            };

        case SearchTypes.SELECT_MESSAGE:
            return {
                ...state,
                selectedMessage: action.payload
            };

        case SearchTypes.CLEAR_SELECTED_MESSAGE:
            return {
                ...state,
                selectedMessage: null
            };

        case SearchTypes.SEARCHING_INVESTMENT:
            return {
                ...state,
                investment: {
                    ...state.investment,
                    loading: true
                }
            };
        case SearchTypes.SEARCH_INVESTMENT_COMPLETE:
            return {
                ...state,
                investment: {
                    ...state.investment,
                    loading: false,
                    data: action.payload
                }
            };
        case SearchTypes.SEARCH_INVESTMENT_FAILED:
            return {
                ...state,
                investment: {
                    ...state.investment,
                    loading: false
                }
            };
        case SearchTypes.SELECT_INVESTMENT:
            return {
                ...state,
                selectedInvestment: action.payload
            };

        case SearchTypes.CLEAR_SELECTED_INVESTMENT:
            return {
                ...state,
                selectedInvestment: null
            };
        default:
            return state;
    }
};

export default reducer;
