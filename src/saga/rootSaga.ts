import { all } from 'redux-saga/effects';

import { watchSearchTermsUpdate } from './movieSaga';

export default function* rootSaga() {
    yield all([watchSearchTermsUpdate()]);
}
