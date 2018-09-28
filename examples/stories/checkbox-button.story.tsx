import React, { PureComponent } from 'react'

import { Checkbox, CheckboxGroup } from '../../src'

import Button from 'or-button'

export class CheckboxButtonExample extends PureComponent {
  state = {
    sports: ['baseball']
  }
  render() {
    return (
      <div className="checkbox-group-example">
        <h1>checkbox-button horizontal:</h1>
        <CheckboxGroup
          type="button"
          values={this.state.sports}
          horizontal
          onChange={this.handleSportsChange}
        >
          <Checkbox value="baseball">棒球</Checkbox>
          <Checkbox value="tennis">网球</Checkbox>
          <Checkbox value="basketball">篮球</Checkbox>
        </CheckboxGroup>
        <Button onClick={this.handleSportsSubmit}>提交</Button>
      </div>
    )
  }

  handleSportsChange = values => {
    this.setState({
      sports: values
    })
  }

  handleSportsSubmit = () => {
    window.alert('sports: ' + this.state.sports)
  }
}
