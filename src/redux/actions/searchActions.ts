import { SearchTerms } from '../../types/type';
import { UPDATE_SEARCH_TERMS, UPDATE_SEARCH_YEAR_RANGE } from '../types';

export const updateSearchTerms = (payload: SearchTerms) => ({
    type: UPDATE_SEARCH_TERMS,
    payload: payload,
});

export const updateSearchRange = (searchTerms: SearchTerms) => ({
    type: UPDATE_SEARCH_YEAR_RANGE,
    payload: searchTerms,
});
