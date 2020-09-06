import { takeEvery } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
import { storeResultSaga, deleteResultSaga} from './counter'

/* Watch Sagas */
export function* watchStoreResult() {
    yield takeEvery(actionTypes.STORE_RESULT_INIT, storeResultSaga)
    yield takeEvery(actionTypes.DELETE_RESULT_INIT, deleteResultSaga)
}
