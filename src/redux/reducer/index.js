import { combineReducers } from 'redux';
import AuthReducer  from './appReducer';
export default combineReducers({
    userAuth : AuthReducer,
    
});