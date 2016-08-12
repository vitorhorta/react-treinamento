import React, {Component} from 'react';
import TweetBox from "../components/TweetBox"
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeText,addedPhoto,sendTweet} from '../actions/index';

class TweetBoxContainer extends Component {

    render() {
        return (
            <div className="well clearfix">
                <TweetBox text={this.props.text} isPhotoAdded={this.props.isPhotoAdded} changeText={this.props.changeText} addedPhoto={this.props.addedPhoto} sendTweet={this.props.sendTweet} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      text: state.tweet.text,
      isPhotoAdded: state.tweet.isPhotoAdded,
      ultimoTweet: state.tweet.ultimoTweet
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({changeText: changeText,addedPhoto: addedPhoto,sendTweet: sendTweet}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(TweetBoxContainer)
