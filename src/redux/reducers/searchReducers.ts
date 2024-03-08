import { INITIAL_STATE } from '../../constants/constants';
import { UPDATE_SEARCH_TERMS, UpdateSearchTermsAction } from '../types';

const searchReducer = (
    state = INITIAL_STATE.searchTerms,
    action: UpdateSearchTermsAction,
) => {
    switch (action.type) {
        case UPDATE_SEARCH_TERMS:
            return action.payload;
        default:
            return state;
    }
};

export default searchReducer;
