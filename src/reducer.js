import * as actions from './consts';

const initialState = {
    cars: [],
    selectedCar: null
};

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SET_CARS:
            return { ...state, cars: action.cars };
        case actions.SET_CAR:
            return { ...state, selectedCar: action.car };
        default:
            return state;
    }
}

export default mainReducer;
