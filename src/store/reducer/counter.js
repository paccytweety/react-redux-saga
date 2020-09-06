import * as actionType from '../actions/actionTypes'

const initialState = {
    counter : 0,
    result: []
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INC_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionType.ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionType.DECREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter -1
            }
        case actionType.SUBSTRACT_COUNTER:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionType.STORE_RESULT:
            return {
                ...state,
                // NON usare push per gli ARRAY ma concat per l'immutabilità
                result: state.result.concat({ id: new Date(), value: state.counter})
            }
        case actionType.DELETE_RESULT:
            // Creare una copia dell'array prima di procedere per l'immutabilità
            // Soluzione 1 con spread operator
            const newArray = [...state.result]
            newArray.splice(action.id, 1)
            // Soluzione 2 con filter
            const newArrayWithFilter = state.result.filter((result) => result.id !== action.id)
            return {
                ...state,
                result: newArrayWithFilter
            }
        case actionType.RESET_STORE:
            return {
                ...state,
                counter: 0,
                result: []
            }
    }
    return state;
}

export default counterReducer;
