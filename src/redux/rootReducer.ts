import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import investmentReducer from './investment/investmentReducer'
import otpReducer from './otp/otpReducer'
import settingsReducer from './settings/settingsReducer'
import searchReducer from "./search/SearchReducer";

export default combineReducers({
    auth: authReducer,
    investment: investmentReducer,
    otp: otpReducer,
    settings: settingsReducer,
    search: searchReducer
})