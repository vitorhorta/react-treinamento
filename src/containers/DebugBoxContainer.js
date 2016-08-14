import React, {Component} from 'react';
import DebugBox from "../components/DebugBox"
import {connect} from 'react-redux';

class DebugBoxContainer extends Component {

    render() {
        return (
            <DebugBox view={this.props.view} viewMethod={this.props.viewMethod} actionMethod={this.props.actionMethod} reducerCase={this.props.reducerCase}/>
        );
    }
}

function mapStateToProps(state) {
    return {
      view: state.debug.view,
      viewMethod: state.debug.viewMethod,
      actionMethod: state.debug.actionMethod,
      reducerCase: state.debug.reducerCase,
    };
}

export default connect(mapStateToProps)(DebugBoxContainer)
