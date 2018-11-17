import React, { PureComponent } from 'react'

import { Checkbox, CheckboxGroup } from 'or-checkbox'

import Button from 'or-button'

export default class CheckboxButtonExample extends PureComponent {
  state = {
    sports: ['baseball'],
    isAgree: false
  }
  render() {
    return (
      <div className="checkbox-group-button checkbox-group-example">
        <h1>checkbox-group-button horizontal:</h1>
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
        <h1>checkbox button</h1>
        <Checkbox
          type="button"
          value="agree"
          isChecked={this.state.isAgree}
          onChange={this.handleAgree}
        >
          同意
        </Checkbox>
      </div>
    )
  }

  handleSportsChange = values => {
    this.setState({
      sports: values
    })
  }

  handleAgree = () => {
    this.setState({
      isAgree: !this.state.isAgree
    })
  }

  handleSportsSubmit = () => {
    window.alert('sports: ' + this.state.sports)
  }
}
