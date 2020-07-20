import React from 'react';
import { useSelector } from 'react-redux';
import { selectedCar$ } from './selectors';

const Spares = () => {
    const { spares } = useSelector(selectedCar$);

    return (
        <div className='spares'>
            <table>
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Период</th>
                        <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    { spares.map(({ additional, mileage, spareId, spareName }) => <tr key={ spareId }>
                        <td>{ spareName }</td>
                        <td>{ mileage }</td>
                        <td>{ additional }</td>
                    </tr>) }
                </tbody>
            </table>
        </div>);
};

export default Spares;