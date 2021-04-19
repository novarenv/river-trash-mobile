import {call, put, takeLatest, select} from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import {
  postLoginUrl,
  postSignUpUrl,
  postForgotPasswordUrl,
  postCreatePinUrl,
  updateFirstLoginUrl,
  verifEmailUrl,
  sendOtpUrl,
  postResetPasswordUrl,
} from '../lib/jsonPlaceholderAPI';
import axios from 'axios';
import {bearerToken} from '../reducers/auth';

function* postLogin(action) {
  try {
    const auth = yield axios
      .post(postLoginUrl, action.payload)
      .then(response => response.data);
    console.log(auth);
    action.onSuccess(auth);
  } catch (error) {
    action.onFailure(error);
  }
}

export default function* root() {
  yield takeLatest(types.AUTH.POST_LOGIN, postLogin);
}
