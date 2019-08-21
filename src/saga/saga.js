import { fork, all } from 'redux-saga/effects';
import sagaHome from '../container/Home/saga';

export default function* rootSaga() {
  yield all([fork(sagaHome)]);
}
