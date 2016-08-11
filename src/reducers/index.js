
import {combineReducers} from 'redux';
import UserReducer from './userReducer';
import ActiveUserReducer from './ReducerActiveUser';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer
});

export default allReducers;