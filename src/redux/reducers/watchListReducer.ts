import { INITIAL_STATE } from '../../constants/constants';
import {
    WatchListActionTypes,
    ADD_TO_WATCHLIST,
    REMOVE_FROM_WATCHLIST,
} from '../types';

const watchListReducer = (
    state = INITIAL_STATE.watchList,
    action: WatchListActionTypes,
) => {
    switch (action.type) {
        case ADD_TO_WATCHLIST:
            return [...state, action.payload];
        case REMOVE_FROM_WATCHLIST:
            return state.filter((movie) => movie.imdbID !== action.payload);
        default:
            return state;
    }
};

export default watchListReducer;
