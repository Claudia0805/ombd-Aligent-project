import { AppState, MovieType } from '../types/type';

export const OMDB_API_BASE_URL = 'https://www.omdbapi.com/';

export const OMDB_API_KEY = '1fce73e8';

export const API_PARAM_R = 'json';

export const INITIAL_STATE: AppState = {
    movieListState: {
        movieList: [],
        totalResult: 0,
    },
    watchList: [],
    searchTerms: {
        title: '',
        yearRange: {
            // The first movie is delivered in 1888
            startYear: 1888,
            endYear: 2024,
        },
        type: MovieType.Any,
    },
    isFetching: false,
    error: undefined,
};
