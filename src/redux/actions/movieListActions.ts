import { MovieItemInfo, MovieListState } from '../../types/type';
import {
    FETCH_MOVIES_FAILURE,
    FETCH_MOVIES_SUCCESS,
    FetchMoviesActionType,
} from '../types';

export const fetchMoviesSuccess = (
    movieListState: MovieListState,
): FetchMoviesActionType => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: movieListState,
});

export const fetchMoviesFailure = (error: string): FetchMoviesActionType => ({
    type: FETCH_MOVIES_FAILURE,
    payload: error,
});
