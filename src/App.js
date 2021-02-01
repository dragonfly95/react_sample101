import Counter from './components/Counter'
import Button from "./components/Button";
import Option from "./components/Option";

import React, { Component } from 'react';

import './App.css';

/**
 * https://beomy.tistory.com/35
 */
class App extends Component {

    render() {
        return(
            <div>
                <Counter store={this.props.store}/>
                <Option store={this.props.store}/>
                <Button store={this.props.store}/>
            </div>
        )
    }
}

export default App;
