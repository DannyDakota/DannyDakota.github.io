import Axios from 'axios';
import { USER_SEARCH_SUCCESS, USER_SEARCH_REQUEST, USER_SEARCH_FAIL  } from '../constants/searchConstants';


export const search = searchString => async (dispatch) => {
    dispatch({ type: USER_SEARCH_REQUEST, payload: { email, password } });
    try {
      const { data } = await Axios.post('/api/search', {
        searchString
      });
      dispatch({ type: USER_SEARCH_SUCCESS, payload: data });
      localStorage.setItem('searchInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_SEARCH_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };