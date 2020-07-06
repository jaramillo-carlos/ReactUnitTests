import React from 'react';
import { shallow } from 'enzyme';

import HoC, { withValue } from '../../../components/HoC/';

describe('RenderProp', () => {
  it('should render value from render prop', () => {
    const NewApp = withValue('777')(HoC);
    const wrapper = shallow(
        <NewApp />
    );

    // console.log(wrapper.dive().debug());

    expect(wrapper.dive().find('h1')).toBeDefined();
    expect(wrapper.props().value).toEqual('777');
  });
});