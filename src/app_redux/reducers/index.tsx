import {combineReducers} from "redux";

import ReducerHome from "./home/reducerHome";

export const combinedReducers = combineReducers({
    ReducerHome: ReducerHome
});
