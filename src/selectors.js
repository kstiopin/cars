export const selectedCar$ = ({ cars, selectedCar }) => {
    if (selectedCar) {
        const carInfo = cars.find(car => car.id === selectedCar.id);
        if (carInfo) {
            return { ...selectedCar, ...carInfo };
        }
    }

    return null;
};