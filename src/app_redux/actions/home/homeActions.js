import {
  HOME_GET_POST_LIST,
  HOME_GET_POST_LIST_ERROR,
  HOME_GET_POST_LIST_NONE,
  HOME_GET_POST_LIST_SUCCESS,
} from "../../actionTypes";

/**** home : to get post list ****/
export function actionHomeGetPostList(params) {
  return { type: HOME_GET_POST_LIST, payload: params };
}

/**** home : to get post list : success ****/
export function actionHomeGetPostListSuccess(params) {
  return { type: HOME_GET_POST_LIST_SUCCESS, payload: params };
}

/**** home : to get post list : fail ****/
export function actionHomeGetPostListError(params) {
  return { type: HOME_GET_POST_LIST_ERROR, payload: params };
}

/**** home : to get post list : none ****/
export function actionHomeGetPostListNone() {
  return { type: HOME_GET_POST_LIST_NONE };
}
