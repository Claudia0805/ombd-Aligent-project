import { combineReducers } from '@reduxjs/toolkit';

import movieListReducer from './moveListReducers';
import searchReducer from './searchReducers';
import watchListReducer from './watchListReducer';
import selectedMovieReducer from './selectedMovieReducers';

const rootReducer = combineReducers({
    movieListState: movieListReducer,
    searchTerms: searchReducer,
    watchList: watchListReducer,
    selectedMovieId: selectedMovieReducer,
});

export default rootReducer;
