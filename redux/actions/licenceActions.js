import {
    LICENCE_CHANGE_VALUE,
    LICENCE_DECREMENT,
    LICENCE_INCREMENT,
} from '../types';

export const incremenentLicence = () => ({ type: LICENCE_INCREMENT });

export const decremenentLicence = () => ({ type: LICENCE_DECREMENT });

export const changeLicenceValue = (value) => ({
    type: LICENCE_CHANGE_VALUE,
    payload: value,
});
