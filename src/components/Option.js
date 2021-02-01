import React, { Component } from 'react';
import App from "../App";
import {setDiff} from "../actions";
import { connect } from 'react-redux';

class Option extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(event) {
        /*this.props.dispatch(setDiff(parseInt(event.target.value)));*/
        this.props.onUpdateDiff(setDiff(parseInt(event.target.value)));
    }
    render() {
        return (
            <div>
                {/*<input value={this.props.diff } onChange={this.onChange} />*/}
                <input value={this.props.diff } onChange={this.onChange} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        diff: state.counter.diff
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateDiff: (value) => dispatch(setDiff(value))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Option);
