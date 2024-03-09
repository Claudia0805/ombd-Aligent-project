import { MovieItemInfo } from '../../types/type';
import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from '../types';

export const addToWatchlist = (movie: MovieItemInfo) => ({
    type: ADD_TO_WATCHLIST,
    payload: movie,
});

export const removeFromWatchlist = (movieId: string) => ({
    type: REMOVE_FROM_WATCHLIST,
    payload: movieId,
});
