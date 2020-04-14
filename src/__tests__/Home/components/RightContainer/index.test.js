import React from 'react'
import { render } from 'enzyme'
import sinon from 'sinon'

import RightContainer from '../../../../pages/Home/components/RightContainer'

describe("<RightContainer />", () => {
  const props = {
    repos: ''
  }
  const wrapper = render(<RightContainer {...props} />)
  it("render success", () => {
    // console.log(wrapper.html())
    // when component use fragment, wrapper only will send firstItem. To be changed to div to get all tags inside in wrapper.
    expect(wrapper).toBeDefined();
    expect(wrapper.html()).toBeDefined();
  })

})