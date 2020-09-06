import { put } from 'redux-saga/effects'
import * as actions from '../actions/counter'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* storeResultSaga (action) {
    yield delay(action.delay)
    yield localStorage.setItem('pippo', 'pluto')
    yield console.log('STORE RESULT SAGAS')
    yield put(actions.storeResultSucceed())
}
export function* deleteResultSaga (action) {
    yield delay(1000)
    yield localStorage.removeItem('pippo')
    yield console.log('REMOVE RESULT SAGAS', action.resElId);
    yield put(actions.deleteResultSucceed(action.resElId))
}