import { TOGGLE_LOGIN_STATUS } from '../../constants';

const loginStatus = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_LOGIN_STATUS:
        console.log(action);
            //return action.payload;
            return {
                ...state,
                loggedIn : action.payload
            };
        default:
            return state;
    }
}

export default loginStatus;