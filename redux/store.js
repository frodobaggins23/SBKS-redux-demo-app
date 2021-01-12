import { createStore, combineReducers, applyMiddleware } from 'redux';
import { basicLogger, delayActions, fooLogger } from './middleware/basicLogger';
import licenceReducer from './reducers/licence-reducer';
import userReducer from './reducers/user-reducer';

const mainReducer = combineReducers({ licenceReducer, userReducer });
const store = createStore(
    mainReducer,
    applyMiddleware(delayActions, basicLogger)
);

export default store;
