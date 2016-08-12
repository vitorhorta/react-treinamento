
import {combineReducers} from 'redux';
import ReducerTweet from './ReducerTweet';

const allReducers = combineReducers({
    tweet: ReducerTweet
});

export default allReducers;
