import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TweetBox from "./components/TweetBox";
import TweetBoxContainer from "./containers/TweetBoxContainer"
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TweetBoxContainer titulo="Reload Teste"/>
        {(!this.props.tweet.fetching) ? this.props.tweet.ultimoTweet : "Carregando..."}
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
