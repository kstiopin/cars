import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { selectCarAction, setCarAction, setCarsAction } from './actions';
import { getCarApi, getCarsApi } from './api';
import * as actions from './consts';

function* getCarsSaga() {
    const cars = yield call(getCarsApi);
    yield put(setCarsAction(cars));
    yield put(selectCarAction(cars[0].id));
}

function* selectCarSaga(action) {
    const { carId } = action;
    const car = yield call(getCarApi, carId);
    yield put(setCarAction({ id: carId, ...car }));
}

function* mainSaga() {
    yield all([
        takeLatest(actions.GET_CARS, getCarsSaga),
        takeEvery(actions.SELECT_CAR, selectCarSaga)
    ]);
}

export default mainSaga;
