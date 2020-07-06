import React from 'react';
import sinon from 'sinon';
// import * as api from '../../../../redux/api';
import { apiCall } from '../../../../redux/api';
import { getGithubToken as getGithubTokenSaga } from '../../../../redux/sagas/login';
import { GET_OAUTH_GITHUB_TOKEN_START, GET_OAUTH_GITHUB_TOKEN_SUCCESS } from '../../../../consts/actionTypes';
import { recordSaga } from '../../../../redux/utils/index';

// can't use external vars in jest.mock because is not allowed to reference any out-of-scope variable
jest.mock('../../../../redux/api', () => {
  return { apiCall: jest.fn(() => ({ githubToken: 'GITHUBT0K3N' })) }
})

describe("Login Saga", () => {
  it("Regresa un token valido", async () => {
    // const fakeResponse = { githubToken: 'GITHUBT0K3N' };
    const initialAction = {
      type: GET_OAUTH_GITHUB_TOKEN_START,
      payload: { code: '12345C0D3' }
    }

    // sinon.stub(api, 'apiCall').callsFake(() => fakeResponse);

    const dispatched = await recordSaga(getGithubTokenSaga, initialAction);
    // const dispatched2 = await recordSaga(getGithubTokenSaga, initialAction);

    // console.log(dispatched);

    // console.log(apiCall.mock.calls.length);
    // console.log(apiCall.mock.calls);

    expect(dispatched[0]).toBeDefined();
    expect(dispatched).toHaveLength(1);
    expect(dispatched[0].type).toBe(GET_OAUTH_GITHUB_TOKEN_SUCCESS);

    // with jest, cant check this because: jest.mock is not allowed to reference any out-of-scope variable
    // expect(dispatched[0].loginResponse.githubToken).toEqual(fakeResponse.githubToken);

    expect(apiCall.mock.calls.length).toEqual(1);
    expect(apiCall.mock.calls[0][0]).toEqual('https://reactjsteachingproj.herokuapp.com/users/github');

    expect(apiCall.mock.calls[0][1]).toHaveProperty('client_id');
    expect(apiCall.mock.calls[0][1]).toHaveProperty('client_secret');
    expect(apiCall.mock.calls[0][1]).toHaveProperty('code');

    expect(apiCall.mock.calls[0][1]).toMatchObject({
      client_id: expect.any(String),
      client_secret: expect.any(String),
      code: expect.any(String)
    });

    expect(Object.keys(apiCall.mock.calls[0][1])).toEqual(['client_id', 'client_secret', 'code']);

    expect(apiCall.mock.calls[0][2]).toEqual(null);
    expect(apiCall.mock.calls[0][3]).toEqual('POST');
  })
});