import Counter from './components/Counter'
import Button from "./components/Button";
import Option from "./components/Option";

import React, { Component } from 'react';

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            diff: 1
        }
    }

    onChange = (diff) => {
        this.setState({
            diff: diff
        });
    }

    onIncrement = () => {
        this.setState( prevState => ({
            value: prevState.value + Number(this.state.diff)
        }));
    }

    onDecrement = () => {
        this.setState(prevState => ({
            value: prevState.value - Number(this.state.diff)
        }))
    };
    render() {
        return(
            <div>
                <Counter value={this.state.value}/>
                <Option diff={this.state.diff} onChange={this.onChange}/>
                <Button onIncrement={this.onIncrement} onDecrement={this.onDecrement}/>
            </div>
        )
    }
}

export default App;
