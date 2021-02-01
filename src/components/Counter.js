import React, { Component } from 'react';
import App from "../App";

class Counter extends Component {
    debugger
    render() {
        return (
            <div>
                <h1>Value: {this.props.store.getState().counter.value}</h1>
            </div>
        )
    }
}
export default Counter;
