import { mount } from 'enzyme'
import React, { PureComponent } from 'react'
import { Checkbox } from '../src/Checkbox'

const mockCallBack = jest.fn()
describe('test for Checkbox', () => {
  describe('should render properly:', () => {
    it('isChecked# checked', () => {
      const wrapper = mount(renderCheckbox({ isChecked: true }))
      expect(wrapper.find('.or-checkbox').length).toBe(1)
      expect(wrapper.find('.or-checkbox-normal').length).toBe(1)
      expect(wrapper.find('.or-checkbox-checked').length).toBe(1)
    })

    it('isChecked# not checked', () => {
      const wrapper = mount(renderCheckbox({ isChecked: false }))
      expect(wrapper.find('.or-checkbox').length).toBe(1)
      expect(wrapper.find('.or-checkbox-normal').length).toBe(1)
      expect(wrapper.find('.or-checkbox-checked').length).toBe(0)
    })

    it('type#normal', () => {
      const wrapper = mount(renderCheckbox({}))
      expect(wrapper.find('.or-checkbox').length).toBe(1)
      expect(wrapper.find('.or-checkbox-normal').length).toBe(1)
    })

    it('type#button', () => {
      const wrapper = mount(renderCheckbox({ type: 'button' }))
      expect(wrapper.find('.or-checkbox').length).toBe(1)
      expect(wrapper.find('.or-checkbox-button').length).toBe(1)
    })
  })

  describe('simulates click events', () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(<RenderCheckbox />)
    })

    afterEach(() => {
      wrapper.unmount()
      mockCallBack.mockReset()
    })

    it('click events', () => {
      expect(wrapper.find('.or-checkbox').length).toBe(1)
      expect(wrapper.find('.or-checkbox').hasClass('or-checkbox-checked')).toBe(
        false
      )
      wrapper.find('.or-checkbox').simulate('click')
      expect(wrapper.find('.or-checkbox').hasClass('or-checkbox-checked')).toBe(
        true
      )
      wrapper.find('.or-checkbox').simulate('click')
      expect(wrapper.find('.or-checkbox').hasClass('or-checkbox-checked')).toBe(
        false
      )
    })
  })
})

class RenderCheckbox extends PureComponent {
  state = {
    isChecked: false
  }

  render() {
    return (
      <Checkbox
        value="agree"
        isChecked={this.state.isChecked}
        onChange={this.handleOnChange}
      >
        Yes, I'd like to receive the latest news and event invites from
        OneReact!
      </Checkbox>
    )
  }

  handleOnChange = isChecked => {
    this.setState({
      isChecked
    })
  }
}

function renderCheckbox(props) {
  return (
    <Checkbox value="agree" {...props}>
      Yes, I'd like to receive the latest news and event invites from OneReact!
    </Checkbox>
  )
}
