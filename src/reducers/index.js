
import {combineReducers} from 'redux';
import ReducerTweet from './ReducerTweet';
import ReducerDebug from './ReducerDebug';
import ReducerProducts from './ReducerProducts';

const allReducers = combineReducers({
    tweet: ReducerTweet,
    debug: ReducerDebug,
    products: ReducerProducts
});

export default allReducers;
