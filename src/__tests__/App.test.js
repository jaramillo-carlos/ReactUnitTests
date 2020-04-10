import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { mount } from 'enzyme';

// describe // for describe unit test, he have 2 params 'name of test' and callback with all test to run
// it // test case, he have 2 params 'name of test case' and function (test)
// beforeAll // lifecycle of jest, before all test cases

describe("<App", () => {
  let wrapper;

  beforeAll(() => {
    const props = {
      store: {
        getState: jest.fn(), // () => {} in Jest
        subscribe: jest.fn(),
        dispatch: jest.fn(),
      }
    }
    // send props with spread notation (es6)
    wrapper = mount(<App {...props} />);
  })

  it('render succesful', () => {
    // console.log(wrapper);
    expect(wrapper).toBeDefined();
    // expect(wrapper).toBeUndefined();
    expect(wrapper).toBeTruthy();
  });
})
