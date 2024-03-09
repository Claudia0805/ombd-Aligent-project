import { MovieItemInfo } from '../../types/type';
import { RESET_SELECTED_MOVIE, SELECT_MOVIE_TO_VIEW } from '../types';

export const setSelectedMovieId = (id: string) => ({
    type: SELECT_MOVIE_TO_VIEW,
    payload: id,
});

export const resetSelectedMovie = () => ({
    type: RESET_SELECTED_MOVIE,
});
