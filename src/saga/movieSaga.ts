import { call, put, takeLatest, select } from 'redux-saga/effects';

import {
    FETCH_MOVIES_FAILURE,
    FETCH_MOVIES_SUCCESS,
    UPDATE_SEARCH_TERMS,
} from '../redux/types';
import { AppState, MovieItemInfo, MovieListState } from '../types/type';
import { fetchMoviesApi } from '../utils/fetchMovies';

function* fetchMoviesSaga(action: any) {
    try {
        const movieList: Array<MovieItemInfo> = yield select(
            (state: AppState) => state.movieListState?.movieList,
        );
        const movieListState: MovieListState = yield call(
            fetchMoviesApi,
            action.payload,
            movieList,
        );
        yield put({ type: FETCH_MOVIES_SUCCESS, payload: movieListState });
    } catch (error) {
        const errorMessage =
            error instanceof Error
                ? error.message
                : 'An unknown error occurred';
        yield put({
            type: FETCH_MOVIES_FAILURE,
            payload: errorMessage,
        });
    }
}

export function* watchSearchTermsUpdate() {
    yield takeLatest(UPDATE_SEARCH_TERMS, fetchMoviesSaga);
}
