import { CHANGE_AUTH, FETCH_COMMENTS, SAVE_COMMENT } from "actions/types";
import jsonPlaceholder from "apis/jsonPlaceholder";

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}

export const fetchComments = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/comments");

  dispatch({
    type: FETCH_COMMENTS,
    payload: response.data
  });
}

export const changeAuth = (isLoggedIn) => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}
