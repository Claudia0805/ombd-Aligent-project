import { MovieListState } from '../../types/type';
import {
    FETCH_MOVIE_REQUEST,
    FETCH_MOVIES_FAILURE,
    FETCH_MOVIES_SUCCESS,
    FetchMoviesActionType,
} from '../types';

export const fetchMoviesRequest = (
    isLoading: boolean,
): FetchMoviesActionType => ({
    type: FETCH_MOVIE_REQUEST,
    payload: isLoading,
});

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
