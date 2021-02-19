import React, { Component } from 'react';
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

// https://medium.com/@jsh901220/mobx-%EC%B2%98%EC%9D%8C-%EC%8B%9C%EC%9E%91%ED%95%B4%EB%B3%B4%EA%B8%B0-a768f4aaa73e

@observer
class Login extends React.Component {
    // @observable emails = '';
    // @observable passwords = '';

    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    render() {
        const { email, password } = this

        return (
            <div className="App">
                <header>Login</header>
                <input name="email" placeholder="Email" onChange={this.onChange} value={email} fluid />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={this.onChange}
                    value={password}
                    fluid
                />
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        );
    }


    onChange (event) {
        const { name, value } = event.target;
        this[name] = value;
    }

    onSubmit() {
        const { email, password } = this
        console.log('결과확인 : ', email, password);
    }
}

export default Login;
