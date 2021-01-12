import { LICENCE_DECREMENT } from '../types';

export const basicLogger = (store) => (next) => (action) => {
    console.info('dispatching:', action.type);
    let result = next(action);
    console.info('updated store:', store.getState().licenceReducer);
    console.log(result);
    return result;
};

export const delayActions = () => (next) => (action) => {
    if (action.type === LICENCE_DECREMENT) {
        return next(action);
    }
    console.info('delaying...');
    const timeoutId = setTimeout(() => next(action), 1500);
    return () => clearTimeout(timeoutId);
};
