import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { Home } from '../../pages/Home';
import { GITHUB_TOKEN } from '../../consts'

describe("<Home />", () => {
  let wrapper;
  let didmount;

  const props = {
    classes: {},
    getProfileData: sinon.spy(), // can be with () => {} but with this you can't track none.
    // but when sinon you can access to instance and see what times has been called.
    getProfileRepos: sinon.spy(),
    githubData: {}
  }

  const localStorage = {
    getItem: sinon.spy(), // is the same that jest.fn()
    setItem: sinon.spy(), // is the same that jest.fn()
    clear: sinon.spy(), // is the same that jest.fn()
  }

  global.localStorage = localStorage;

  beforeEach(() => {
    wrapper = mount(<Home {...props} />)
  })

  it("Render success", () => {
    // console.log(wrapper.instance())
    expect(wrapper).toBeDefined();
    expect(wrapper.instance()).toBeDefined();
    expect(wrapper).toBeTruthy();
  })

  it("Render properties well", () => {
    expect(wrapper.props()).toBeDefined();
    expect(wrapper.props().getProfileData).toBeDefined()
    expect(wrapper.props().getProfileRepos).toBeDefined()
    expect(wrapper.props().classes).toBeDefined();
    expect(wrapper.props().classes).toEqual({});
  })

  it("Call localStorage and getProfileData in comonentDidMount", () => {
    console.log(wrapper.state())
    // expect(wrapper.state().githubToken).toBeUndefined();
    expect(localStorage.getItem.getCall(0)).toBeDefined() //.getCall(0) to accest to first call
    expect(localStorage.getItem.getCall(0).lastArg).toEqual(GITHUB_TOKEN)
  })
})