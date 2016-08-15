import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TweetBox from "./components/TweetBox";
import TweetBoxContainer from "./containers/TweetBoxContainer"
import DebugBoxContainer from "./containers/DebugBoxContainer"
import ProductsTableContainer from "./containers/ProductsTableContainer";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class App extends Component {
  getLastTweet() {
    var text = 'My Last Tweet:  ' + this.props.tweet.lastTweet;
    return <h4>{text}</h4>;
  }
  render() {
    return (
      <div className="App">
        <TweetBoxContainer />
        {(this.props.tweet.lastTweet) ? this.getLastTweet() : null}
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
