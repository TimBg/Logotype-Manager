import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import MainReducer from '../reducers/MainReducer';

let Reducers = combineReducers({
    MainBranch: MainReducer
});

export const store = createStore(Reducers, applyMiddleware(thunkMiddleware));