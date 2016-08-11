import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import OverflowAlert from "./components/OverflowAlert"

class TweetBox extends Component {
    constructor(props) {
        super(props);
        this.state = {text: "",addedPhoto: false}
    }

    mudancaTexto(e) {
        this.setState({text: e.target.value}, function () {
            console.log(this.state.text);
        });

    }

    cliquePhoto(e) {
        this.setState({addedPhoto: !this.state.addedPhoto});
    }

    getLetrasRestantes(){
        if(this.state.addedPhoto){
            return 140 - 23 - this.state.text.length;
        }
        return 140 - this.state.text.length;
    }

    render() {
        return (
            <div className="well clearfix">
                <h1>{this.props.titulo}</h1>
                <OverflowAlert texto={this.state.text} maxLetras={140}/>
                <textarea className="form-control" onChange={this.mudancaTexto.bind(this)}></textarea><br/>
                <button className="btn btn-primary pull-right" disabled={this.state.text.length == 0 && !this.state.addedPhoto}>Tweet</button>
                <button className="btn btn-primary pull-right" onClick={this.cliquePhoto.bind(this)}>{(this.state.addedPhoto) ? "Remover Photo" : "Add Photo" }</button>
                <span>{this.getLetrasRestantes()}</span>
            </div>
        );
    }
}

export default TweetBox;
