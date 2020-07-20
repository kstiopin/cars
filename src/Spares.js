import React from 'react';
import { useSelector } from 'react-redux';
import { selectedCar$ } from './selectors';

const Spares = () => {
    const { mileage, repairs, spares } = useSelector(selectedCar$);

    const renderSpareRow = spare => {
        const lastRepair = repairs.find(({ spare_id }) => spare_id === spare.spareId);

        return (
            <tr key={ spare.spareId }>
                <td>{ spare.spareName }</td>
                <td>{ spare.mileage }</td>
                <td>{ lastRepair && lastRepair.mileage }</td>
                <td>{ (lastRepair ? lastRepair.mileage * 1 : 0) + spare.mileage * 1 - mileage * 1 }</td>
                <td>{ spare.additional }</td>
            </tr>);
    };

    return (
        <div className='spares'>
            <table>
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Период</th>
                        <th>Последняя замена</th>
                        <th>До замены</th>
                        <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    { spares.map(renderSpareRow) }
                </tbody>
            </table>
        </div>);
};

export default Spares;