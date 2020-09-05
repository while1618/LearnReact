import jsonPlacehloder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlacehloder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: response
  });
}
