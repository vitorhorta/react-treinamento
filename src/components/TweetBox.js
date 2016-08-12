import React, {Component} from 'react';
import OverflowAlert from "./OverflowAlert"

class TweetBox extends Component {
    mudancaTexto(e) {
        this.props.changeText(e.target.value);
    }

    cliquePhoto(e) {
        this.props.addedPhoto(!this.props.isPhotoAdded);
    }

    getLetrasRestantes(){
        if(this.props.isPhotoAdded){
            return 140 - 23 - this.props.text.length;
        }
        return 140 - this.props.text.length;
    }

    enviarTweetClique(e){
        console.log("clique")
        this.props.enviarTweet(this.props.text);
    }

    render() {
        return (
            <div className="well clearfix">
                <h1>{this.props.titulo}</h1>
                <OverflowAlert texto={this.props.text} maxLetras={140}/>
                <textarea className="form-control" onChange={this.mudancaTexto.bind(this)}></textarea><br/>
                <button className="btn btn-primary pull-right" disabled={this.props.text.length == 0 && !this.props.isPhotoAdded} onClick={this.enviarTweetClique.bind(this)}>Tweet</button>
                <button className="btn btn-primary pull-right" onClick={this.cliquePhoto.bind(this)}>{(this.props.isPhotoAdded) ? "Remover Photo" : "Add Photo" }</button>
                <span>{this.getLetrasRestantes()}</span>
            </div>
        );
    }
}

export default (TweetBox);
