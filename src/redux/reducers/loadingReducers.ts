import { INITIAL_STATE } from '../../constants/constants';
import {
    FINISH_LOADING_PAGE,
    LoadingActionTypes,
    START_LOADING_PAGE,
} from '../types';

export function loadingReducer(
    state = INITIAL_STATE.isLoadingPage,
    action: LoadingActionTypes,
) {
    switch (action.type) {
        case START_LOADING_PAGE:
            return true;
        case FINISH_LOADING_PAGE:
            return false;
        default:
            return state;
    }
}
