import React from 'react'

import { Checkbox, CheckboxGroup } from 'or-checkbox'

import Button from 'or-button'

export default class CheckboxGroupExample extends React.Component {
  state = {
    fruits: ['apple'],
    sports: []
  }
  render() {
    return (
      <div className="checkbox-group-example">
        <h1>checkbox group vertical:</h1>
        <CheckboxGroup
          values={this.state.fruits}
          onChange={this.handleChange('fruits')}
        >
          <Checkbox value="apple">Apple</Checkbox>
          <Checkbox value="banana">Banana</Checkbox>
          <Checkbox value="grape">Grape</Checkbox>
        </CheckboxGroup>
        <Button onClick={this.handleSubmit('fruits')}>提交</Button>
        <h1>checkbox group horizontal:</h1>
        <CheckboxGroup
          values={this.state.sports}
          horizontal
          onChange={this.handleChange('sports')}
        >
          <Checkbox value="baseball">Baseball</Checkbox>
          <Checkbox value="tennis">Tennis</Checkbox>
          <Checkbox value="basketball">Basketball</Checkbox>
        </CheckboxGroup>
        <Button onClick={this.handleSubmit('sports')}>提交</Button>
      </div>
    )
  }

  handleChange = stateKey => {
    return values => {
      this.setState({
        [`${stateKey}`]: values
      })
    }
  }

  handleSubmit = stateKey => {
    return () => {
      window.alert(`${stateKey}: ` + this.state[`${stateKey}`])
    }
  }
}
