import { SearchTerms } from '../../types/type';
import {
    UPDATE_SEARCH_TERMS,
    // UPDATE_SEARCH_TITLE,
    // UPDATE_SEARCH_PAGE,
    // UPDATE_SEARCH_RANGE,
    // UPDATE_SEARCH_TYPE,
} from '../types';

export const updateSearchTerms = (payload: SearchTerms) => ({
    type: UPDATE_SEARCH_TERMS,
    payload: payload,
});

// export const updateSearchTitle = (searchTerms: SearchTerms) => ({
//     type: UPDATE_SEARCH_TITLE,
//     payload: searchTerms,
// });

// export const updateSearchPage = (searchTerms: SearchTerms) => ({
//     type: UPDATE_SEARCH_PAGE,
//     payload: searchTerms,
// });

// export const updateSearchRange = (searchTerms: SearchTerms) => ({
//     type: UPDATE_SEARCH_RANGE,
//     payload: searchTerms,
// });

// export const updateSearchType = (searchTerms: SearchTerms) => ({
//     type: UPDATE_SEARCH_TYPE,
//     payload: searchTerms,
// });
