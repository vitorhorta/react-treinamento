import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeTweet} from '../actions/index';

class Tweet extends Component {
	removeClicked(){
        this.props.removeTweet(this.props.id);
	}

	render(){
		var buttonStyle = {marginRight: '10px'}
		return <div>
			       <h2>
			       		{this.props.text}
			      	 	<button className="btn btn-danger pull-right" onClick={this.removeClicked.bind(this)} style={buttonStyle}>Remover</button>
   			       </h2>
			       <hr></hr>
			    </div>
	}
}

function mapStateToProps(state) {
    return {
        tweet: state.tweet
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({removeTweet: removeTweet}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Tweet);