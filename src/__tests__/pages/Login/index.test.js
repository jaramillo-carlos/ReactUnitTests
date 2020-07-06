import React from 'react';
import { shallow } from 'enzyme';

import { Login } from '../../../pages/Login';
import { Card } from '@material-ui/core';
import TestRenderer from 'react-test-renderer';

let wrapper;

describe("<Login/>", () => {


  beforeEach(() => {
    const props = {
      classes: {},
      getGithubToken: jest.fn()
    }

    wrapper = shallow(<Login {...props} />);
  })

  it('render succesful', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toBeTruthy();
  });


  it('render a card', () => {
    // have only 1 CardComponent
    expect(wrapper.find(Card)).toHaveLength(1)
  });

  it('render properties well', () => {
    // statefull components have a instance
    // console.log(wrapper.instance())

    // stateless components dont have instance
    expect(wrapper.instance().props.classes).toBeDefined()
    expect(wrapper.instance().props.classes).toEqual({})
    expect(wrapper.instance().props.getGithubToken).toBeDefined()
  });

  it('onSuccess test', () => {
    const response = { code: 1234 }

    // is like this.onSuccess(response)
    wrapper.instance().onSuccess(response);

    expect(wrapper.instance().props.getGithubToken).toHaveBeenCalled();
  })

  it('onSuccess test with valid response', () => {
    const response = { code: 1234 }

    // is like this.onSuccess(response)
    wrapper.instance().onSuccess(response);

    expect(wrapper.instance().props.getGithubToken).toHaveBeenCalled();
  })

  it('onSuccess test with invalid response', () => {
    const response = null

    // is like this.onSuccess(response)
    wrapper.instance().onSuccess(response);

    // when has been created in beforeAll, this test fail, because other test call this.
    expect(wrapper.instance().props.getGithubToken).toHaveBeenCalledTimes(0);
  })

  it('Show alert, on wrong github response', () => {
    window.alert = jest.fn()

    // is like this.onFailure()
    wrapper.instance().onFailure({ error: 'Fail'});

    expect(window.alert).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledTimes(1);
  })

  it("El snapshot es correcto", () => {
    const props = {
      classes: {container: "container"},
      getGithubToken: jest.fn()
    };

    const tree = TestRenderer.create(<Login {...props} />);
    // console.log(tree.toJSON());
    expect(tree.toJSON()).toMatchSnapshot();
  });

})
