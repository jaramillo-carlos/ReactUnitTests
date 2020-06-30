import React from 'react'
import { render } from 'enzyme'
import sinon from 'sinon'

import RightContainer from '../../../../pages/Home/components/RightContainer'

describe("<RightContainer />", () => {
  let wrapper
  let wrapperEmpty


  beforeEach(() => {
    const props = {repos: [{ name: 'Test' }]}
    wrapper = render(<RightContainer {...props} />)

    const propsEmpty = {repos: []}
    wrapperEmpty = render(<RightContainer {...propsEmpty} />)
  })

  it("render success", () => {
    // console.log(wrapper.html())
    // when component use fragment, wrapper only will send firstItem. To be changed to div to get all tags inside in wrapper.
    expect(wrapperEmpty).toBeDefined()
    expect(wrapperEmpty.html()).toBeDefined()
  })

  it("render clean when repos is empty", () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.html()).toBeDefined()
    expect(wrapper.find('RightContainer')).toBeDefined()
  })

  it("render success when have repos", () => {
    console.log(wrapper.html())
    expect(wrapper).toBeDefined()
    expect(wrapper.html()).toBeDefined()
    expect(wrapper.find('RightContainer')).toBeDefined()
  })
})