import React from 'react';
import { shallow } from 'enzyme';

import RenderProp, { Content } from '../../../components/RenderProp/';

describe('RenderProp', () => {
  it('should render value from render prop', () => {
    const wrapper = shallow(
      <RenderProp />
    );
    const childWrapper = wrapper
      .find(Content)
      .renderProp('render')({ value: '222222' });

    // console.log(wrapper.debug());
    // console.log(childWrapper.text());

    expect(childWrapper.text()).toEqual('Value: 222222');
  });
});