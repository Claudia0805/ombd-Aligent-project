import { FINISH_LOADING_PAGE, START_LOADING_PAGE } from '../types';

export const startLoadingPage = () => ({
    type: START_LOADING_PAGE,
});

export const finishLoadingPage = () => ({
    type: FINISH_LOADING_PAGE,
});
