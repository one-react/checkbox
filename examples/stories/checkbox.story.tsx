import React, { PureComponent } from 'react'

import Button from 'or-button'

import { Checkbox } from '../../src'

export class CheckboxExample extends PureComponent {
  state = {
    isChecked: false
  }

  render() {
    return (
      <div className="checkbox-example">
        <Checkbox
          value="agree"
          isChecked={this.state.isChecked}
          onChange={this.handleOnChange}
        >
          Yes, I'd like to receive the latest news and event invites from
          OneReact!
        </Checkbox>
        <Button type="primary" onClick={this.handleSubmit}>
          Submit
        </Button>
      </div>
    )
  }

  handleOnChange = isChecked => {
    this.setState({
      isChecked
    })
  }

  handleSubmit = () => {
    if (!this.state.isChecked) {
      window.alert('请确保您仔细看了用户协议并勾选')
    }
  }
}
