import * as actionType from '../actions/actionTypes'

const initialState = {
    isLoggedIn : false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CHANGE_USER_LOGIN:
            return {
                ...state,
                isLoggedIn: true
            }
        case actionType.CHANGE_USER_LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            }
    }
    return state;
}

export default authReducer;
