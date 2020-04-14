import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { Home } from '../../pages/Home';
import { GITHUB_TOKEN } from '../../consts'

describe("<Home />", () => {
  let wrapper;

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
    clear: sinon.spy() // is the same that jest.fn()
  }

  global.localStorage = localStorage;
  global.location.reload = sinon.spy(); // is the same that jest.fn()

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
    // console.log(wrapper.state())

    // console.log(localStorage)

    expect(wrapper.state().githubToken).toEqual(null) // can't be .toBeUndefined(); like tutorial, because localStorage return null

    console.log(localStorage.getItem.firstCall)

    // expect(localStorage.getItem.getCall(0)).toBeDefined(); //.getCall(0) to accest to first call
    // expect(localStorage.getItem.getCall(0).lastArg).toEqual(GITHUB_TOKEN);

    expect(wrapper.props().getProfileData.getCall(0)).toBeTruthy();
    expect(wrapper.props().getProfileData.getCall).toHaveLength(1);
    expect(wrapper.props().getProfileData.getCall(0).lastArg).toBeDefined(); // can't be .toEqual({}); like tutorial, because that send githubToken
  })

  it("call getProfileRepos when reposUrl Exists", () => {
    expect(wrapper.instance().props.getProfileRepos.getCall(0)).toBeFalsy(); // toBeDefined() is correct, because null is defined
    wrapper.setProps({ githubData: { repos_url: "something.com.co" } }); // can use too setState
    expect(wrapper.instance().props.getProfileRepos.getCall(0)).toBeDefined();
    expect(wrapper.instance().props.getProfileRepos.getCall(0).lastArg).toBeDefined();
  });

  it("Clear Storage and refresh site", () => {
    expect(location.reload.getCall(0)).toBeFalsy();
    expect(localStorage.clear.getCall(0)).toBeFalsy();

    wrapper.instance().handleLogoutClick();

    expect(localStorage.clear.getCall(0)).toBeTruthy();
    // expect(localStorage.clear.getCall(0).lastArg).toBeUndefined();

    expect(location.reload.getCall(0)).toBeTruthy();
    expect(location.reload.getCall(0).lastArg).toBeUndefined();
  });
})