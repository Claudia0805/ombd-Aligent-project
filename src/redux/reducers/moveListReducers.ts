import { INITIAL_STATE } from '../../constants/constants';
import {
    FetchMoviesActionType,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
} from '../types';

const movieListReducer = (
    state = INITIAL_STATE.movieListState,
    action: FetchMoviesActionType,
) => {
    switch (action.type) {
        case FETCH_MOVIES_SUCCESS:
            return action.payload;
        case FETCH_MOVIES_FAILURE:
            return state;
        default:
            return state;
    }
};

export default movieListReducer;
