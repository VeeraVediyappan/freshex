import { combineReducers } from 'redux';
import loginStatus  from './appReducer';
export default combineReducers({
    loggedIn: loginStatus
});