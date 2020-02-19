import * as actions from './consts';

export const getCarsAction = () => ({ type: actions.GET_CARS });

export const setCarsAction = cars => ({ cars, type: actions.SET_CARS });

export const selectCarAction = carId => ({ carId, type: actions.SELECT_CAR });

export const setCarAction = car => ({ car, type: actions.SET_CAR });