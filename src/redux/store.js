import { createStore, applyMiddleware } from 'redux';
import combineReducers from './reducers.js';
import promiseMiddleware from './middleware/promiseMiddleware';

let store = createStore(combineReducers, applyMiddleware(promiseMiddleware));

export default store;

if (module.hot) {
    module.hot.accept("./reducers", () => {
        const nextCombineReducers = require("./reducers").default;
        store.replaceReducer(nextCombineReducers);
    });
}
