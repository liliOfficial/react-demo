import { combineReducers, applyMiddleware, createStore } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "./../reducers";

const middleware = applyMiddleware(thunk, logger, promise());

export default createStore(reducer,middleware);