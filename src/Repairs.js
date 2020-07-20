import React from 'react';
import { useSelector } from 'react-redux';
import { selectedCar$ } from './selectors';

const Repairs = () => {
    const { repairs, spares } = useSelector(selectedCar$);
    const _spares = spares.reduce((result, spare) => ({ ...result, [spare.spareId]: spare }), {});

    return (
        <div className='repairs'>
            <table>
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Запчасть</th>
                        <th>Пробег</th>
                        <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    { repairs.map(({ date, details, mileage, spare_id }) => <tr key={ `${date}_${spare_id}` }>
                        <td>{ date }</td>
                        <td>{ _spares[spare_id].spareName }</td>
                        <td>{ mileage }</td>
                        <td>{ details }</td>
                    </tr>) }
                </tbody>
            </table>
        </div>);
};

export default Repairs;