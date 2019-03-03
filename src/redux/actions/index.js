import { TOGGLE_LOGIN_STATUS, REGISTER_USER, VERIFY_OTP, OPEN_REGISTER, OPEN_LOGIN } from '../../constants';

export const loginUser = status => dispatch => {
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

export const openRegister = () => dispatch => {
    console.log('openRegister');
    dispatch({
        type: OPEN_REGISTER
    });
};

export const openLogin = () => dispatch => {
    console.log('openLogin');
    dispatch({
        type: OPEN_LOGIN
    });
};