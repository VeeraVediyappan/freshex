import { TOGGLE_LOGIN_STATUS, REGISTER_USER,  VERIFY_OTP, OPEN_REGISTER,
    OPEN_LOGIN, AGREE_TERMS_CONDITIONS, LOG_USER_IN } from '../../constants';

export default (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_LOGIN_STATUS:
            //return action.payload;
            return {
                ...state,
                loggedIn : true,
                openLogin: false,
                userType: 'admin'
            }
        case REGISTER_USER:  
            return {
                ...state,
                 registered : true
            }
        case OPEN_REGISTER:  
            return {
                ...state,
                openRegister : true,
                openLogin: false
            }
        case OPEN_LOGIN:
            return {
                ...state,
                openLogin : true,
                openRegister: false
            }      
        case VERIFY_OTP:
            return {
                ...state,
                otpVerified: true
            }
        case AGREE_TERMS_CONDITIONS:
            return {
                ...state,
                agreedTerms_conditions: true
            }
        case LOG_USER_IN:
            return {
                ...state,
                loggedIn : true,
                openLogin: false,
                openRegister: false    
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