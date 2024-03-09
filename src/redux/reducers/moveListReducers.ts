import { INITIAL_STATE } from '../../constants/constants';
import {
    FetchMoviesActionType,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    FETCH_MOVIE_REQUEST,
} from '../types';

const movieListReducer = (
    state = INITIAL_STATE.movieListState,
    action: FetchMoviesActionType,
) => {
    console.log('==>', action.type, action.payload);
    switch (action.type) {
        case FETCH_MOVIES_SUCCESS:
            return action.payload;
        case FETCH_MOVIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                canLoadMore: false,
                error: action.payload,
            };
        case FETCH_MOVIE_REQUEST:
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
};

export default movieListReducer;
