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
    console.log('before async call')
    const body = {
      client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
      client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
      code: payload.code
    }
    const loginResponse = yield call(
      apiCall,
      `${process.env.REACT_APP_GITHUB_CODE_FOR_TOKEN}`,
      body,
      null,
      'POST')
    console.log('after async call')
    // async call

    console.log('before async call success')
    // yield to wait, and put from sagas
    yield put({ type: GET_OAUTH_GITHUB_TOKEN_SUCCESS, loginResponse })
    console.log('after async call success')
  } catch (error) {
    yield put({ type: GET_OAUTH_GITHUB_TOKEN_ERROR, error })
  }
}

// create the watcher
export default function* login() {
  yield takeLatest(GET_OAUTH_GITHUB_TOKEN_START, getGithubToken)
}