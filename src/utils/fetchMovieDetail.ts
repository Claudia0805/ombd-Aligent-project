import {
    API_PARAM_R,
    OMDB_API_BASE_URL,
    OMDB_API_KEY,
} from '../constants/constants';
import { MovieItemInfo } from '../types/type';

// Get movie details by ID(imdbID)
export const fetchMovieDetailApi = async (
    imdbID: string,
): Promise<MovieItemInfo> => {
    const queryParams = new URLSearchParams({
        apikey: OMDB_API_KEY,
        i: imdbID,
        plot: 'full',
        r: API_PARAM_R,
    });

    const detailURL = `${OMDB_API_BASE_URL}?${queryParams.toString()}`;

    try {
        const response = await fetch(detailURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.Response === 'True') {
            return data as MovieItemInfo;
        } else {
            throw new Error(data.Error || 'Unknown error from API');
        }
    } catch (err) {
        throw err instanceof Error
            ? err.message
            : new Error('An unknown error occurred');
    }
};
