import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";

import { combinedReducers } from "../reducers";
import rootSaga from "../saga/index";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(combinedReducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;

