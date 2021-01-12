/** Redux Hooks example component */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LicencesWrapper, SubHeading } from './main-styles';
import {
    changeLicenceValue,
    decremenentLicence,
    incremenentLicence,
} from '../redux/actions/licenceActions';

const getLicenceAmount = ({ licenceReducer }) => {
    // hook selector fn does not need to return object but any value
    return licenceReducer.amount;
};

const Licences = () => {
    const amount = useSelector(getLicenceAmount);
    const dispatch = useDispatch();
    const increment = () => dispatch(incremenentLicence());
    const decrement = () => dispatch(decremenentLicence());
    const changeValue = (e) =>
        dispatch(changeLicenceValue(parseInt(e.currentTarget.value)));
    return (
        <>
            <SubHeading>Licences</SubHeading>
            <LicencesWrapper>
                <button onClick={increment}>+</button>
                <input type='number' value={amount} onChange={changeValue} />
                <button onClick={decrement}>-</button>
            </LicencesWrapper>
        </>
    );
};

export default Licences;
