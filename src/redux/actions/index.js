import { TOGGLE_LOGIN_STATUS } from '../../constants';

export const toggleLogin = status => dispatch => {
    console.log(status);
    dispatch({
        type: TOGGLE_LOGIN_STATUS,
        payload: !status
    });
};