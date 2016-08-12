import React, {Component} from 'react';
import TweetBox from "../components/TweetBox"
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeText,addedPhoto} from '../actions/index';

class TweetBoxContainer extends Component {

    render() {
        return (
            <div className="well clearfix">
                <TweetBox text={this.props.text} isPhotoAdded={this.props.isPhotoAdded} changeText={this.props.changeText} addedPhoto={this.props.addedPhoto} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      text: state.tweet.text,
      isPhotoAdded: state.tweet.isPhotoAdded
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({changeText: changeText,addedPhoto: addedPhoto}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(TweetBoxContainer)
