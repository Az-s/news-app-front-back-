import {
    FETCH_NEWS_REQUEST,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE,
} from '../actions/postsActions';

const initialState = {
    fetchLoading: false,
    news: [],
  };

  const postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_NEWS_REQUEST:
        return {...state, fetchLoading: true};
      case FETCH_NEWS_SUCCESS:
        return {...state, fetchLoading: false, news: action.payload};
      case FETCH_NEWS_FAILURE:
        return {...state, fetchLoading: false};
      default:
        return state;
    }
  };
  
  export default postsReducer;