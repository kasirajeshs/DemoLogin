import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { HOME_GET_POST_LIST } from "../actionTypes";
import { actionHomeGetPostListError, actionHomeGetPostListSuccess } from "../actions";
import axios from "axios";
import { AppUtils } from "../../utils/appUtils";
import { AppConstants } from "../../constants/appConstants";

/**** http : home to get post list ****/
const httpActionGetPostList = async () =>
  await axios.get(AppConstants.URLS.POST_LIST, AppUtils.getHttpHeaders())
    .then(result => result)
    .catch(error => {
      return error;
    });

/**** handler : home to get post list ****/
function* handleHttpActionGetPostList({ payload }) {
  try {
    let result = yield call(httpActionGetPostList, payload);
    result.data ? yield put(actionHomeGetPostListSuccess(result.data)) : yield put(actionHomeGetPostListError(result));
  } catch (error) {
    yield put(actionHomeGetPostListError(error));
  }
}


/**** watcher : home to get post list ****/
export function* sagaActionGetPostList() {
  yield takeEvery(HOME_GET_POST_LIST, handleHttpActionGetPostList);
}

export default function* rootSaga() {
  yield all([
    fork(sagaActionGetPostList),
  ]);
}
