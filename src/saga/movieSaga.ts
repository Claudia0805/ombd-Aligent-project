import { call, put, takeLatest, select } from 'redux-saga/effects';

import { UPDATE_SEARCH_TERMS } from '../redux/types';
import { AppState, MovieItemInfo, MovieListState } from '../types/type';
import { fetchMoviesApi } from '../utils/fetchMovies';
import {
    fetchMoviesFailure,
    fetchMoviesRequest,
    fetchMoviesSuccess,
} from '../redux/actions/movieListActions';
import { stringIsNotNullOrWhiteSpace } from '../utils/utils';

function* fetchMoviesSaga(action: any) {
    try {
        const movieList: Array<MovieItemInfo> = yield select(
            (state: AppState) => state.movieListState?.movieList,
        );
        const { page, title } = yield select(
            (state: AppState) => state.searchTerms,
        );

        // set isLoading as true for initial title search
        if (page === 1 && stringIsNotNullOrWhiteSpace(title)) {
            yield put(fetchMoviesRequest(true));
        }
        const movieListState: MovieListState = yield call(
            fetchMoviesApi,
            action.payload,
            movieList,
        );
        yield put(fetchMoviesSuccess(movieListState));
    } catch (error) {
        const errorMessage =
            error instanceof Error
                ? error.message
                : 'An unknown error occurred';
        yield put(fetchMoviesFailure(errorMessage));
    }
}

export function* watchSearchTermsUpdate() {
    // Forks a saga on each action dispatched to the Store that matches pattern.
    // And automatically cancels any previous saga task started previously if it's still running.
    yield takeLatest(UPDATE_SEARCH_TERMS, fetchMoviesSaga);
}
