import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import postsReducer from './posts_reducer';

let reducers = combineReducers({
    postsPage: postsReducer,
    form: formReducer,
})


let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;