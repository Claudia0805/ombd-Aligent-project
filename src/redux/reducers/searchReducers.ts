import { INITIAL_STATE } from '../../constants/constants';
import {
    UPDATE_SEARCH_TERMS,
    UPDATE_SEARCH_YEAR_RANGE,
    UpdateSearchTermsTypes,
} from '../types';

const searchReducer = (
    state = INITIAL_STATE.searchTerms,
    action: UpdateSearchTermsTypes,
) => {
    switch (action.type) {
        case UPDATE_SEARCH_TERMS:
            return action.payload;
        case UPDATE_SEARCH_YEAR_RANGE:
            return action.payload;
        default:
            return state;
    }
};

export default searchReducer;
