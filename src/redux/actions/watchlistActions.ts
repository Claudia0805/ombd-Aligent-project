import { MovieItemInfo } from '../../types/type';
import * as actionTypes from '../types';

export const addToWatchlist = (movie: MovieItemInfo) => ({
    type: actionTypes.ADD_TO_WATCHLIST,
    payload: movie,
});

export const removeFromWatchlist = (movieId: string) => ({
    type: actionTypes.REMOVE_FROM_WATCHLIST,
    payload: movieId,
});
