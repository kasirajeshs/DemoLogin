import {all} from "redux-saga/effects";

import SagaHome from "./sageHome";


function* rootSaga() {
    yield all([
        SagaHome(),
    ]);
}

export default rootSaga;
