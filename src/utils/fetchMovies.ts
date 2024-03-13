import {
    API_PARAM_R,
    OMDB_API_BASE_URL,
    OMDB_API_KEY,
} from '../constants/constants';
import {
    MovieItemInfo,
    MovieListState,
    MovieType,
    SearchTerms,
} from '../types/type';
import { mapMovieTypeToApiParam } from './utils';

export const fetchMoviesApi = async (
    searchTerms: SearchTerms,
    movieList: Array<MovieItemInfo>,
): Promise<MovieListState> => {
    const { title, type, page } = searchTerms;

    const queryParams = new URLSearchParams({
        apikey: OMDB_API_KEY,
        s: title?.trim() ?? '',
        r: API_PARAM_R,
        page: page ? page.toString() : '1',
    });

    if (type !== MovieType.Any) {
        queryParams.set('type', mapMovieTypeToApiParam(type));
    }

    const listURL = `${OMDB_API_BASE_URL}?${queryParams.toString()}`;

    try {
        const response = await fetch(listURL);
        if (!response.ok) {
            throw new Error('Failed to fetch from network');
        }

        const data = await response.json();

        if (data.Response === 'True') {
            const result = data.Search as Array<MovieItemInfo>;
            const newList = page > 1 ? [...movieList, ...result] : result;

            return {
                movieList: newList,
                filteredMovieList: newList,
                response: data.Response,
                totalResult: parseInt(data.totalResults, 10),
                error: '',
                canLoadMore: page * 10 < parseInt(data.totalResults, 10),
                isLoading: false,
            };
        }

        if (data.Response === 'False') {
            // If page is equal to 1, means no movies find with search terms
            if (page === 1) {
                return {
                    movieList: [],
                    filteredMovieList: [],
                    response: data.Response,
                    totalResult: 0,
                    canLoadMore: false,
                    isLoading: false,
                    error: data.Error,
                };
            }

            // If page more than 1, false response means reach the end of search results.
            return {
                movieList: movieList,
                filteredMovieList: movieList,
                response: data.Response,
                totalResult: data.totalResults,
                canLoadMore: false,
                isLoading: false,
                error: data.Error,
            };
        }

        throw new Error(data.Error || 'Unknown error from API');
    } catch (err) {
        console.error(err);
        return {
            movieList: [],
            filteredMovieList: [],
            response: 'False',
            totalResult: 0,
            canLoadMore: false,
            isLoading: false,
            error:
                err instanceof Error
                    ? err.message
                    : 'An unknown error occurred',
        };
    }
};
