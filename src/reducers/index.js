
import {combineReducers} from 'redux';
import UserReducer from './userReducer';
import ActiveUserReducer from './ReducerActiveUser';
import ReducerTweet from './ReducerTweet';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    tweet: ReducerTweet
});

export default allReducers;
