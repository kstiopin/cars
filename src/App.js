import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsAction } from './actions';
import { separateThousands } from './helpers';
import '../style/main.less';

const App = () => {
    const dispatch = useDispatch();
    const selectedCar = useSelector(({ cars, selectedCar }) => {
        if (selectedCar) {
            const carInfo = cars.find(car => car.id === selectedCar.id);
            if (carInfo) {
                return { ...selectedCar, ...carInfo };
            }
        }

        return null;
    });

    useEffect(() => {
        dispatch(getCarsAction());
    }, []);

    return (
        <div className='content'>
            { /* TODO: in the future probably here should be the cars selection block that would call selectCarAction */ }
            { selectedCar && <div className='content'>
                { selectedCar.manufacturer }&nbsp;{ selectedCar.model }&nbsp;({ selectedCar.engine },&nbsp;{ selectedCar.year })&nbsp;-&nbsp;<em>{ separateThousands(selectedCar.mileage) }&nbsp;km</em>
            </div> }
        </div>);
};

export default App;