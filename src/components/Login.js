import {inject, observer} from "mobx-react";
import * as React from "react";
import {action, observable} from "mobx";

@observer
class Login extends React.Component {
    @observable email = '';
    @observable passwords = '';

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render(){
        const { email, password } = this;
        return (
            <div>
                <header>Login</header>
                <input name="email" placeholder="Email" onChange={this.onChange}
                       value={email} fluid/>
               <input name="password" type="password" placeholder="Password"
                      onChange={this.onChange} value={password} fluid/>
               <button onClick={this.onSubmit}> submit </button>


            </div>
        );
    }

    @action.bound
    onChange(event) {
        const { name, value } = event.target;
        debugger
        this[name] = value;
    }

    onSubmit() {
        const { email, password } = this;
        console.log('결과확인: ', email, password);
    }
}

export default Login;
