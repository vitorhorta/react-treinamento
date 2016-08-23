import React, {Component} from 'react';
import OverflowAlert from "./OverflowAlert"

var ReactDOM = require('react-dom');    

class TweetBox extends Component {

    textChanged(e) {
        this.props.changeText(e.target.value);
    }

    photoClicked(e) {
        this.props.addedPhoto(!this.props.isPhotoAdded);
    }

    getRemainingChars(){
        if(this.props.isPhotoAdded){
            return 140 - 23 - this.props.text.length;
        }
        return 140 - this.props.text.length;
    }

    submitClicked(e){
        if(this.getRemainingChars() > 0){
            this.props.sendTweet(this.props.text);
            this.props.changeText('');
        }

        ReactDOM.findDOMNode(this.refs.twitTextarea).focus();     
    }

    render() {
        return (
            <div className="well clearfix">
                <h1>{this.props.titulo}</h1>
                <OverflowAlert texto={this.props.text} maxLetras={140}/>
                <textarea ref="twitTextarea" className="form-control" onChange={this.textChanged.bind(this)} value={this.props.text}></textarea><br/>
                <button className="btn btn-primary pull-right" disabled={this.props.text.length == 0 && !this.props.isPhotoAdded} onClick={this.submitClicked.bind(this)}>Tweet</button>
                <button className="btn btn-primary pull-right" onClick={this.photoClicked.bind(this)}>{(this.props.isPhotoAdded) ? "Remover Photo" : "Add Photo" }</button>
                <span>{this.getRemainingChars()}</span>
            </div>
        );
    }
}

export default (TweetBox);
