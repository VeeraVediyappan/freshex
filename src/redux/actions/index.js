import { TOGGLE_LOGIN_STATUS, REGISTER_USER, VERIFY_OTP } from '../../constants';

export const toggleLogin = status => dispatch => {
    console.log(status);
    dispatch({
        type: TOGGLE_LOGIN_STATUS,
        payload: !status
    });
};

export const register = () => dispatch => {
    dispatch({
        type: REGISTER_USER
    });
};

export const verifyOtp = otp => dispatch => {
    console.log('came');
    dispatch({
        type: VERIFY_OTP
    });
};