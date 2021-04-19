import {all} from 'redux-saga/effects';
import app from './app';
import auth from './auth';

export default function* root() {
  yield all([
    app(),
    auth()
  ]);
}
