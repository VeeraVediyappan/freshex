//import fetch from 'fetch';
import { TOGGLE_LOGIN_STATUS, REGISTER_USER, VERIFY_OTP, OPEN_REGISTER, OPEN_LOGIN, SELECT_CATEGORY, 
    AGREE_TERMS_CONDITIONS, LOG_USER_IN, SELECT_COMMODITTY } from '../../constants';

export const loginUser = status => dispatch => {
    console.log(status);
    dispatch({
        type: TOGGLE_LOGIN_STATUS,
        payload: !status
    });
};

export const register = registerObj => dispatch => {
    console.log('registerObj', registerObj);
    fetch('http://ec2-3-89-151-42.compute-1.amazonaws.com:5002/api/admin/register', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: "include", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        //redirect: "follow", // manual, *follow, error
        //referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(registerObj), // body data type must match "Content-Type" header
    })
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
    .catch(error => console.error(error));

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

export const selectCategory = category => dispatch => {
    dispatch({
        type: SELECT_CATEGORY,
        category
    });
};

export const agreeTermsConditions = () => dispatch => {
    dispatch({
        type: AGREE_TERMS_CONDITIONS
    });
};

export const processAndLogin = () => dispatch => {
    dispatch({
        type: LOG_USER_IN
    });
};

export const selectCommodity = commodity => dispatch => {
    dispatch({
        type: SELECT_COMMODITTY,
        commodity
    });
};


