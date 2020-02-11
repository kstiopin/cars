import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCarsAction } from './actions';
import '../style/main.less';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCarsAction());
    }, []);

    return (
        <div className='content'>test</div>);
};

export default App;