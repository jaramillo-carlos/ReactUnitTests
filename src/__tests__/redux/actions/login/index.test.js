import React from 'react';

import { getGithubToken } from '../../../../redux/actions/login';
import { GET_OAUTH_GITHUB_TOKEN_START } from '../../../../consts/actionTypes';
describe('Login Actions', () => {
  it('Debería crear una accion para iniciar el proceso de obtener el token', () => {
    const fakePayload = {
      code: 'GITHUB_TOKEN'
    }
    const expectedActions = {
      type: GET_OAUTH_GITHUB_TOKEN_START,
      payload: fakePayload,
    };

    // console.log(getGithubToken({}));
    // console.log(getGithubToken(fakePayload));

    expect(getGithubToken(fakePayload)).toBeDefined();
    expect(getGithubToken(fakePayload)).toEqual(expectedActions);
    expect(getGithubToken(fakePayload).payload).toEqual(fakePayload);
  });

  it('Regresa un objeto vacio si el payload es vacio', () => {
    const fakePayload = {}
    const expectedActions = {
      type: GET_OAUTH_GITHUB_TOKEN_START,
      payload: {},
    };

    // console.log(getGithubToken({}));
    // console.log(getGithubToken(fakePayload));

    const call = getGithubToken(fakePayload);

    expect(call).toBeDefined();
    expect(call).toEqual(expectedActions);
    expect(call.payload).toEqual(fakePayload);

    // both are the same
    expect(call.payload).toEqual({});
    expect(call.payload).toEqual(new Object());

  });
});