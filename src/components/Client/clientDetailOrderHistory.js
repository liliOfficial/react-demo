import React, { Component } from 'react';
import { combineReducers, applyMiddleware, createStore } from "redux";
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null,
}

export default class ClientLeads extends Component {
    render() {
        const userReducer = (state = initialState, action) => {
            switch (action.type) {
                case "FETCH_USERS_PENDING": {
                    return { ...state, fetching: true }
                    break;
                }
                case "FETCH_USERS_FULFILLED": {
                    return {
                        ...state,
                        fetching: false,
                        fetched: true,
                        user: action.payload
                    }
                    break;
                }
                case "FETCH_USERS_REJECTED": {
                    return { ...state, fetching: false, error: action.payload }
                    break;
                }
            }
            return state;
        }

        const tweetsReducer = (state = [], action) => {
            return state;
        }

        const reducers = combineReducers({
            user: userReducer,
            tweets: tweetsReducer
        })

        const middleware = applyMiddleware(thunk, logger,promise());
        const store = createStore(reducers, middleware);

        store.subscribe(() => {
            console.log("store changed", store.getState())
        })

        // store.dispatch((dispatch) => {
        //     dispatch({ type: "FETCH_USERS_PENDING" })
        //     axios.get("http://rest.learncode.academy/api/wstern/users")
        //         .then((response) => {
        //             dispatch({ type: "FETCH_USERS_FULFILLED", payload: response.data })
        //         })
        //         .catch((err) => {
        //             dispatch({ type: "FETCH_USERS_REJECTED", payload: err })
        //         })
        // })

        store.dispatch({
            type:"FETCH_USERS",
            payload:axios.get("http://rest.learncode.academy/api/wstern/users")
        })

        const element = (
            <div>
                Order History
            </div>
        );
        return (
            
            element
        );
    }
}