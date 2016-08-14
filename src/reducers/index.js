
import {combineReducers} from 'redux';
import ReducerTweet from './ReducerTweet';
import ReducerDebug from './ReducerDebug';

const allReducers = combineReducers({
    tweet: ReducerTweet,
    debug: ReducerDebug
});

export default allReducers;
