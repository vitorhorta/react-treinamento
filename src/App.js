import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TweetBox from "./components/TweetBox";
import Tweet from "./components/Tweet";
import TweetBoxContainer from "./containers/TweetBoxContainer"
import DebugBoxContainer from "./containers/DebugBoxContainer"
import ProductsTableContainer from "./containers/ProductsTableContainer";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class App extends Component {

  render() {
    const tweets = this.props.tweet.tweets.map(function(tweet) {
          return <Tweet text={tweet.text} id={tweet.id}></Tweet>;
    })

    return (
      <div className="App">
        <TweetBoxContainer />
        {(this.props.tweet.tweets.length) ? tweets : null}
        <DebugBoxContainer />
        <ProductsTableContainer />
      </div>
    );
  }
}


function mapStateToProps(state) {
    return {
        tweet: state.tweet
    };
}

export default connect(mapStateToProps)(App);
