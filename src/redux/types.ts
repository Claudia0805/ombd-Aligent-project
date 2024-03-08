import {
    MovieItemInfo,
    MovieListState,
    MovieType,
    SearchTerms,
    YearRange,
} from '../types/type';

//movie list Action Types
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export type FetchMoviesActionType =
    | {
          type: typeof FETCH_MOVIES_SUCCESS;
          payload: MovieListState;
      }
    | { type: typeof FETCH_MOVIES_FAILURE; payload: string };

// search Action Types
export const UPDATE_SEARCH_TERMS = 'UPDATE_SEARCH_TERMS';

export interface UpdateSearchTermsAction {
    type: typeof UPDATE_SEARCH_TERMS;
    payload: SearchTerms;
}

// watchList Action Types
export const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';
export const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST';

export interface AddToWatchListAction {
    type: typeof ADD_TO_WATCHLIST;
    payload: MovieItemInfo;
}

export interface RemoveFromWatchListAction {
    type: typeof REMOVE_FROM_WATCHLIST;
    payload: string;
}

export type WatchListActionTypes =
    | AddToWatchListAction
    | RemoveFromWatchListAction;
