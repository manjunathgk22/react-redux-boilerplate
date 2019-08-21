import { takeLatest, put } from 'redux-saga/effects';

function* xyz() {
  // yield delay(4000);
  yield put({ type: 'zyx', value: 1 });
}

export default function* rootSagaManger() {
  yield takeLatest('xyz', xyz);
}
