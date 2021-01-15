import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { basicLogger, delayActions } from './middleware/basicLogger';
import licenceReducer from './reducers/licence-reducer';
import userReducer from './reducers/user-reducer';

const mainReducer = combineReducers({ licenceReducer, userReducer });
//Redux devtools store enhancer [https://github.com/zalmoxisus/redux-devtools-extension]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    mainReducer,
    composeEnhancers(applyMiddleware(delayActions, basicLogger))
);

export default store;
