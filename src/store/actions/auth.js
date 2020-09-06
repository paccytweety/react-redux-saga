import * as actionTypes from './actionTypes'

export const userLogin = () => {
    return {
        type: actionTypes.CHANGE_USER_LOGIN
    };
};

export const userLogout = () => {
    return {
        type: actionTypes.CHANGE_USER_LOGOUT
    };
};