import { put, call, takeLatest } from 'redux-saga/effects';
import {
  GET_PROFILE_GITHUB_DATA_START,
  GET_PROFILE_GITHUB_DATA_SUCCESS,
  GET_PROFILE_GITHUB_DATA_ERROR,
  GET_PROFILE_GITHUB_REPOS_START,
  GET_PROFILE_GITHUB_REPOS_SUCCESS,
  GET_PROFILE_GITHUB_REPOS_ERROR
} from '../../consts/actionTypes'
import { apiCall } from '../api'

// Generator function
export function* getProfileData({ payload: { githubToken } }) {
  try {
    // async call
    const githubData = yield call(
      apiCall,
      `${process.env.REACT_APP_GITHUB_USER_URL}${githubToken}`,
      null,
      null,
      'GET')

    // yield to wait, and put() from sagas
    yield put({ type: GET_PROFILE_GITHUB_DATA_SUCCESS, githubData })
  } catch (error) {
    yield put({ type: GET_PROFILE_GITHUB_DATA_ERROR, error })
  }
}

// Generator function
export function* getProfileRepos({ payload: { githubToken, repostUrl } }) {
  try {
    // async call
    const userRepos = yield call(
      apiCall,
      repostUrl,
      null,
      null,
      'GET')

    // yield to wait, and put() from sagas
    yield put({ type: GET_PROFILE_GITHUB_REPOS_SUCCESS, userRepos })
  } catch (error) {
    yield put({ type: GET_PROFILE_GITHUB_REPOS_ERROR, error })
  }
}

// create the watchers
export default function* login() {
  yield takeLatest(GET_PROFILE_GITHUB_DATA_START, getProfileData)
  yield takeLatest(GET_PROFILE_GITHUB_REPOS_START, getProfileRepos)
}