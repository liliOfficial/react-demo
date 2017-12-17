import { combineReducers } from "redux";

import authReducer from "./authReducer";
import languageReducer from "./languageReducer";
import tweetsReducer from "./tweetsReducer";

export default combineReducers ({
    authReducer,
    languageReducer,
    tweetsReducer
})