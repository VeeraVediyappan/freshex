import { TOGGLE_LOGIN_STATUS, REGISTER_USER,  VERIFY_OTP } from '../../constants';

export default (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_LOGIN_STATUS:
            //return action.payload;
            return {
                ...state,
                loggedIn : action.payload
            }
        case REGISTER_USER:  
            return {
                ...state,
                 registered : true
            }
        case VERIFY_OTP:
        console.log(action);
            return {
                ...state,
                otpVerified: true
            }    
        default:
            return state;
    }
}

export const registerUser = (state = false, action) => {
    switch (action.type) {
        case REGISTER_USER:
        console.log(action);
            //return action.payload;
            return {
                ...state,
                registered : true
            };
        default:
            return state;
    }
}

//export default loginStatus;