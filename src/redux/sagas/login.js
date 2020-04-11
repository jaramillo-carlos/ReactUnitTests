import { put, call, takeLast } from '../../consts/actionTypes';
import {
  GET_OAUTH_GITHUB_TOKEN_START,
  GET_OAUTH_GITHUB_TOKEN_SUCCESS,
  GET_OAUTH_GITHUB_TOKEN_ERROR
} from '../../consts/actionTypes'

// Generator function
export function* getGithubToken({ payload }) {
  try {
    // async call

    // yield to wait, and put from sagas
    yield put({ type: GET_OAUTH_GITHUB_TOKEN_SUCCESS })
  } catch (error) {
    yield put({ type: GET_OAUTH_GITHUB_TOKEN_ERROR })
  }
}

// create the watcher
export default function* login() {
  yield takeLatest(GET_OAUTH_GITHUB_TOKEN_START, getGithubToken)
}