import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsAction } from './actions';
import { separateThousands } from './helpers';
import { selectedCar$ } from './selectors';
import Spares from './Spares';
import Repairs from './Repairs';

import '../style/main.less';

const App = () => {
    const dispatch = useDispatch();
    const selectedCar = useSelector(selectedCar$);

    useEffect(() => {
        dispatch(getCarsAction());
    }, []);

    return (
        <div className='content'>
            { /* TODO: in the future probably here should be the cars selection block that would call selectCarAction */ }
            { selectedCar && <div className='content'>
                { selectedCar.manufacturer }&nbsp;{ selectedCar.model }&nbsp;({ selectedCar.engine },&nbsp;{ selectedCar.year })&nbsp;-&nbsp;<em>{ separateThousands(selectedCar.mileage) }&nbsp;km</em>
                { (selectedCar.links.length > 0) && <div>
                    { selectedCar.links.map((link, index) => <div key={ `link${index}` }>
                        <a href={ link }>{ link }</a>
                    </div>)}
                </div> }
                <Repairs />
                <Spares />
            </div> }
        </div>);
};

export default App;