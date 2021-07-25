import { USER_SEARCH_REQUEST, USER_SEARCH_SUCCESS, USER_SEARCH_FAIL } from "../constants/searchConstants";

export const userSearchReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_SEARCH_REQUEST:
        return { loading: true };
      case USER_SEARCH_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_SEARCH_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };