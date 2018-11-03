import { mount } from 'enzyme'
import React, { PureComponent } from 'react'
import { Checkbox, CheckboxGroup } from '../src'

const mockCallBack = jest.fn()
describe('test for Checkbox', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(<RenderCheckboxGroup />)
  })

  afterEach(() => {
    wrapper.unmount()
    mockCallBack.mockReset()
  })

  it('should render properly:', () => {
    expect(wrapper.find('.or-checkbox-group').length).toBe(1)
    expect(wrapper.find('.or-checkbox').length).toBe(3)
    expect(wrapper.find('.or-checkbox-normal').length).toBe(3)
  })

  it('simulates click events', () => {
    expect(
      wrapper
        .find('.or-checkbox')
        .at(0)
        .hasClass('or-checkbox-checked')
    ).toBe(true)
    wrapper
      .find('.or-checkbox')
      .at(0)
      .simulate('click')
    expect(
      wrapper
        .find('.or-checkbox')
        .at(0)
        .hasClass('or-checkbox-checked')
    ).toBe(false)
    expect(
      wrapper
        .find('.or-checkbox')
        .at(1)
        .hasClass('or-checkbox-checked')
    ).toBe(false)
    wrapper
      .find('.or-checkbox')
      .at(1)
      .simulate('click')
    expect(
      wrapper
        .find('.or-checkbox')
        .at(1)
        .hasClass('or-checkbox-checked')
    ).toBe(true)
  })
})

describe('no default checked value', () => {
  const wrapper = mount(renderCheckboxGroup({}))
  it('should render properly', () => {
    expect(
      wrapper
        .find('.or-checkbox')
        .at(0)
        .hasClass('or-checkbox-checked')
    ).toBe(false)
    expect(
      wrapper
        .find('.or-checkbox')
        .at(1)
        .hasClass('or-checkbox-checked')
    ).toBe(false)
  })
})

function renderCheckboxGroup(props) {
  return (
    <CheckboxGroup values={props.fruits}>
      <Checkbox value="apple">Apple</Checkbox>
      <Checkbox value="banana">Banana</Checkbox>
    </CheckboxGroup>
  )
}

class RenderCheckboxGroup extends PureComponent {
  state = {
    fruits: ['apple']
  }

  render() {
    return (
      <CheckboxGroup values={this.state.fruits} onChange={this.handleChange}>
        <Checkbox value="apple">Apple</Checkbox>
        <Checkbox value="banana">Banana</Checkbox>
        <Checkbox value="grape">Grape</Checkbox>
      </CheckboxGroup>
    )
  }

  handleChange = values => {
    this.setState({
      fruits: values
    })
  }
}
