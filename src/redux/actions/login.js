import { GET_OAUTH_GITHUB_TOKEN_START } from '../../consts/actionTypes'
// action creator
export const getGithubToken = payload => ({
  // action
  type: GET_OAUTH_GITHUB_TOKEN_START,
  payload
})