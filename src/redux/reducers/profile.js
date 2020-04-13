import get from 'lodash/get'
import {
  GET_PROFILE_GITHUB_DATA_START,
  GET_PROFILE_GITHUB_DATA_SUCCESS,
  GET_PROFILE_GITHUB_DATA_ERROR,
  GET_PROFILE_GITHUB_REPOS_START,
  GET_PROFILE_GITHUB_REPOS_SUCCESS,
  GET_PROFILE_GITHUB_REPOS_ERROR
} from '../../consts/actionTypes'
import { GITHUB_TOKEN } from '../../consts'
import { saveData } from '../../utils/storage'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_GITHUB_DATA_START:
      return { ...state, error: null, githubData: null }
      break
    case GET_PROFILE_GITHUB_DATA_SUCCESS:
      return { ...state, githubData: get(action, "githubData.data") }
      break
    case GET_PROFILE_GITHUB_DATA_ERROR:
      return { ...state, error: true }
      break
    case GET_PROFILE_GITHUB_REPOS_START:
      return { ...state }
      break
    case GET_PROFILE_GITHUB_REPOS_SUCCESS:
      const githubToken = get(action, "loginResponse.data.githubToken")
      //saveData(GITHUB_TOKEN, githubToken)
      return { ...state, githubToken: githubToken }
      break
    case GET_PROFILE_GITHUB_REPOS_ERROR:
      return { ...state, error: true }
      break
    default:
      return { ...state }
  }
}