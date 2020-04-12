import { put, call, takeLatest } from 'redux-saga/effects';
import {
  GET_OAUTH_GITHUB_TOKEN_START,
  GET_OAUTH_GITHUB_TOKEN_SUCCESS,
  GET_OAUTH_GITHUB_TOKEN_ERROR
} from '../../consts/actionTypes'
import { apiCall } from '../api'

// Generator function
export function* getGithubToken({ payload }) {
  try {
    const body = {
      client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
      client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
      code: payload.code
    }

    // async call
    const loginResponse = yield call(
      apiCall,
      `${process.env.REACT_APP_GITHUB_CODE_FOR_TOKEN}`,
      body,
      null,
      'POST')

    // yield to wait, and put() from sagas
    yield put({ type: GET_OAUTH_GITHUB_TOKEN_SUCCESS, loginResponse })
  } catch (error) {
    yield put({ type: GET_OAUTH_GITHUB_TOKEN_ERROR, error })
  }
}

// create the watcher
export default function* login() {
  yield takeLatest(GET_OAUTH_GITHUB_TOKEN_START, getGithubToken)
}