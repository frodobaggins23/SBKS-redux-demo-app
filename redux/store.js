import { createStore, combineReducers } from 'redux';
import licenceReducer from './reducers/licence-reducer';
import userReducer from './reducers/user-reducer';

const mainReducer = combineReducers({ licenceReducer, userReducer });
const store = createStore(mainReducer);
console.log(store.getState());

export default store;
