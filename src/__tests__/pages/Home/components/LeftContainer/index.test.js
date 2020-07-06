import React from 'react'
import { render } from 'enzyme'
import sinon from 'sinon'

import { LeftContainer } from '../../../../../pages/Home/components/LeftContainer'

describe("<LeftContainer />", () => {
  const props = {
    classes: {},
    avatar_url: 'something.com',
    bio: 'something',
    blog: 'some blog',
    email: 'my@email.com',
    name: 'my name',
    onLogout: sinon.spy()
  }
  const wrapper = render(<LeftContainer {...props} />)
  it("render success", () => {
    // console.log(wrapper.html())
    // when component use fragment, wrapper only will send firstItem. To be changed to div to get all tags inside in wrapper.
    expect(wrapper).toBeDefined();
    expect(wrapper.html()).toBeDefined();
  })

  it('render success with initial props', () => {
    expect(wrapper.find('p')).toBeDefined()
    expect(wrapper.find('p')).toHaveLength(4)

    expect(wrapper.find('img')).toBeDefined()
    expect(wrapper.find('img')).toHaveLength(1)

    expect(wrapper.find('button')).toBeDefined()
    expect(wrapper.find('button')).toHaveLength(1)

    expect(wrapper.find('span')).toBeDefined()
    expect(wrapper.find('span')).toHaveLength(2)
  })

  it('render image success', () => {
    const img = wrapper.find('img')[0];
    expect(img.attribs.alt).toBeDefined()
    expect(img.attribs.alt).toEqual(props.email)

    expect(img.attribs.src).toBeDefined()
    expect(img.attribs.src).toEqual(props.avatar_url)
  })

  it('render success name', () => {
    const name = wrapper.find('p')[0];
    expect(name.children[0].data).toBeDefined()
    expect(name.children[0].data).toEqual(props.name)
    expect(name.children[1]).toBeUndefined()
  })
})