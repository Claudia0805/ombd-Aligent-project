import { INITIAL_STATE } from '../../constants/constants';
import {
    SELECT_MOVIE_TO_VIEW,
    RESET_SELECTED_MOVIE,
    SelectedMovieActionTypes,
} from '../types';

const selectedMovieReducer = (
    state = INITIAL_STATE.selectedMovieId,
    action: SelectedMovieActionTypes,
) => {
    switch (action.type) {
        case SELECT_MOVIE_TO_VIEW:
            return action.payload;
        case RESET_SELECTED_MOVIE:
            return state;
        default:
            return state;
    }
};

export default selectedMovieReducer;
