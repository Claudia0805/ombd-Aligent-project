// src/redux/reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';

import movieListReducer from './moveListReducers';
import searchReducer from './searchReducers';
import watchListReducer from './watchListReducer';

const rootReducer = combineReducers({
    movieListState: movieListReducer,
    searchTerms: searchReducer,
    watchList: watchListReducer,
});

export default rootReducer;
