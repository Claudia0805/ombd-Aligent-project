import { call, put, takeLatest, select } from 'redux-saga/effects';

import { UPDATE_SEARCH_TERMS, UPDATE_SEARCH_YEAR_RANGE } from '../redux/types';
import { AppState, MovieListState } from '../types/type';
import { fetchMoviesApi } from '../utils/fetchMovies';
import {
    fetchMoviesFailure,
    fetchMoviesSuccess,
} from '../redux/actions/movieListActions';
import { filterMoviesByYear } from '../utils/filterMoviesByYear';
import {
    finishLoadingPage,
    startLoadingPage,
} from '../redux/actions/loadingActions';

function* fetchMoviesSaga(action: any) {
    try {
        const movieListState: MovieListState = yield select(
            (state: AppState) => state.movieListState,
        );
        const { type, yearRange } = yield select(
            (state: AppState) => state.searchTerms,
        );

        const { movieList } = movieListState;

        if (action.type === UPDATE_SEARCH_YEAR_RANGE) {
            const filteredMovieList = movieListState.movieList.filter((movie) =>
                filterMoviesByYear(movie, type, yearRange),
            );
            yield put(
                fetchMoviesSuccess({
                    ...movieListState,
                    filteredMovieList,
                }),
            );
        } else {
            yield put(startLoadingPage());
            const movieListState: MovieListState = yield call(
                fetchMoviesApi,
                action.payload,
                movieList,
            );
            const filteredMovieList = movieListState.movieList.filter((movie) =>
                filterMoviesByYear(movie, type, yearRange),
            );
            yield put(
                fetchMoviesSuccess({
                    ...movieListState,
                    filteredMovieList,
                }),
            );
        }
    } catch (error) {
        const errorMessage =
            error instanceof Error
                ? error.message
                : 'An unknown error occurred';
        yield put(fetchMoviesFailure(errorMessage));
    } finally {
        yield put(finishLoadingPage());
    }
}

export function* watchSearchTermsUpdate() {
    // Forks a saga on each action dispatched to the Store that matches pattern.
    // And automatically cancels any previous saga task started previously if it's still running.
    yield takeLatest(
        [UPDATE_SEARCH_TERMS, UPDATE_SEARCH_YEAR_RANGE],
        fetchMoviesSaga,
    );
}
