import { call, put, takeLatest } from 'redux-saga/effects';
import { setCarsAction } from './actions';
import { getCarsApi } from './api';
import * as actions from './consts';

function* getCarsSaga() {
    const cars = yield call(getCarsApi);
    yield put(setCarsAction(cars));
}

function* mainSaga() {
    yield takeLatest(actions.GET_CARS, getCarsSaga);
}

export default mainSaga;
