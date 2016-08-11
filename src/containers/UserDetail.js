import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';


class UserDetail extends Component {
    render() {
        if(!this.props.user){
            return (<h2>Seelct a user...</h2>);
        }
        return (
            <div>
                <img src={this.props.user.thumbnail} />
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>{this.props.user.age}</h3>
                <h3>{this.props.user.description}</h3>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);
