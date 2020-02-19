import { defaultFetch } from './helpers';

export const getCarsApi = () => defaultFetch('get_cars.php');

export const getCarApi = carId => defaultFetch(`get_car.php?carId=${carId}`);
