import { watchForm } from 'features/ManageUser/saga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    watchForm()
  ])
}