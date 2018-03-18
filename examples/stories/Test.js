import React from 'react'

import { Checkbox } from '../../src'

class TestUse extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: true
    }
  }
  render () {
    return (
      <div>
        <Checkbox value='agree' checked={this.state.isChecked} onChange={this.handleOnChange}>我已仔细阅读协议并同意</Checkbox>
        <div onClick={this.handleSubmit}>提交</div>
      </div>
    )
  }

  handleOnChange = (checked) => {
    this.setState({
      isChecked: checked
    })
  }

  handleSubmit = () => {
    if (!this.state.isChecked) {
      window.alert('请确保您仔细看了用户协议并勾选')
    } else {
      console.log(this.state.isChecked)
    }
  }
}

export default TestUse
