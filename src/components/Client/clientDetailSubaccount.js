import React, { Component } from 'react';
import { combineReducers, applyMiddleware, createStore } from "redux";
import { connect } from "react-redux";

import { fetchTweets } from "../../actions/action";

const counter = (state = 0, action) => {    
    switch (action.type) {
        case 'INC':
        
            return state + 1;
        case 'DEC':
        
            return state - 1;

        default:
            return state
    }
}
const store = createStore(counter);

export default class ClientLeads extends Component {
    // fetchTweets() {
    //     this.props.dispatch(fetchTweets())
    // }
    constructor() {
        super();
        this.state = {
            value: 0
        }
    }
    render() {
        

        const Counter = ({ value, onIncrement, onDecrement }) => (
            <div>
                <h1>{value}</h1>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        );

        

        const me = this;
        store.subscribe(() => {
            console.log("store changed", store.getState())
            me.setState({
                value:store.getState()
            });
        })

        const element = (
            <div>
                <Counter value={this.state.value} onIncrement={() => store.dispatch({ type: 'INC' })} onDecrement={() => store.dispatch({ type: 'DEC' })} />
                Sub Account
            </div>
        );
        return (
            element
        );
    }
}