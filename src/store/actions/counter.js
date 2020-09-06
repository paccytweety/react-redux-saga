
import * as actionTypes from './actionTypes'

/* STORE COUNTER OPERATION */
export const increment = () => {
    return {
        type: actionTypes.INC_COUNTER
    };
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT_COUNTER
    };
};

export const add = (value) => {
    return {
        type: actionTypes.ADD_COUNTER,
        value: value
    };
};

export const subtract = (value) => {
    return {
        type: actionTypes.SUBSTRACT_COUNTER,
        value: value
    };
};

/* STORE RESULT */
export const storeResult = (delay = 1000) => {
    return {
        type: actionTypes.STORE_RESULT_INIT,
        delay
    }
}

export const storeResultSucceed = () => {
    return {
        type: actionTypes.STORE_RESULT
    };
}

/* DELETE RESULT */
export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT_INIT,
        resElId
    };
};

export const deleteResultSucceed = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        id: resElId
    };
}

/* RESET STORE */
export const resetStore = () => {
    return {
        type: actionTypes.RESET_STORE
    };
};