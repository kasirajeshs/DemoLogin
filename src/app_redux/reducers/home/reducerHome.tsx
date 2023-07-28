import {
  HOME_GET_POST_LIST,
  HOME_GET_POST_LIST_ERROR,
  HOME_GET_POST_LIST_NONE,
  HOME_GET_POST_LIST_SUCCESS
} from "../../actionTypes";

const INIT_STATE = {
  postList: [],
  isLoading: false
};

export default (state = INIT_STATE, action: any) => {

  console.log("action.type : ", action.type);

  switch (action.type) {

    case HOME_GET_POST_LIST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case HOME_GET_POST_LIST_SUCCESS: {
      let postList = state.postList;

      if (typeof action.payload != "undefined") {
        postList = action.payload;
      }

      return {
        ...state,
        isLoading: false,
        postList: postList
      };
    }

    case HOME_GET_POST_LIST_ERROR: {
      return {
        ...state,
        isLoading: false
      };
    }

    case HOME_GET_POST_LIST_NONE: {
      return {
        ...state,
        isLoading: false
      };
    }

    default: {
      return state;
    }
  }
}
