import React, {Component} from 'react';
import TweetBox from "../components/TweetBox";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeText,addedPhoto,sendTweet,fetchProducts} from '../actions/index';

class TweetBoxContainer extends Component {
    constructor(props){
      super(props);
      this.props.fetchProducts();
    }

    render() {
        return (
            <TweetBox text={this.props.text} products={this.props.products} fetchProducts={this.props.fetchProducts} isPhotoAdded={this.props.isPhotoAdded} changeText={this.props.changeText} addedPhoto={this.props.addedPhoto} sendTweet={this.props.sendTweet} />
        );
    }
}

function mapStateToProps(state) {
    return {
      text: state.tweet.text,
      isPhotoAdded: state.tweet.isPhotoAdded,
      ultimoTweet: state.tweet.ultimoTweet,
      products: state.products
      tweets: state.tweet.tweets
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({changeText: changeText,addedPhoto: addedPhoto,sendTweet: sendTweet,fetchProducts:fetchProducts}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(TweetBoxContainer)
