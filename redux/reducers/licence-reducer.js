import {
    LICENCE_CHANGE_VALUE,
    LICENCE_DECREMENT,
    LICENCE_INCREMENT,
    LICENCE_CHANGE_TYPE,
} from '../types';

const initialState = {
    amount: 0,
    type: ['windows'],
};

const licenceReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LICENCE_INCREMENT:
            return {
                ...state,
                amount: state.amount + 1,
            };
        case LICENCE_DECREMENT:
            return {
                ...state,
                amount: state.amount - 1,
            };
        case LICENCE_CHANGE_VALUE:
            return {
                ...state,
                amount: payload,
            };
        case LICENCE_CHANGE_TYPE:
            return {
                ...state,
                type: payload,
            };
        default:
            return state;
    }
};

export default licenceReducer;
