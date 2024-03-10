import { AppState, MovieType } from '../types/type';

export const OMDB_API_BASE_URL = 'https://www.omdbapi.com/';

export const OMDB_API_KEY = '1fce73e8';

export const API_PARAM_R = 'json';

export const DEFAULT_YEAR_RANGE = {
    // The first movie is delivered in 1888
    startYear: 1888,
    endYear: 2024,
};

export const INITIAL_STATE: AppState = {
    movieListState: {
        movieList: [],
        filteredMovieList: [],
        totalResult: 0,
        canLoadMore: false,
    },
    watchList: [],
    searchTerms: {
        title: '',
        yearRange: DEFAULT_YEAR_RANGE,
        type: MovieType.Any,
        page: 1,
    },
    selectedMovieId: '',
    isLoadingPage: false,
};
