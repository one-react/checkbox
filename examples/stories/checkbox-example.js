import React from 'react'

import Button from 'or-button'

import { Checkbox } from '../../src'

class CheckboxExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: false
    }
  }
  render () {
    return (
      <div className='checkbox-example'>
        <Checkbox value='agree'
          isChecked={this.state.isChecked}
          onChange={this.handleOnChange}>
          Yes, I'd like to receive the latest news and event invites from OneReact!
        </Checkbox>
        <Button type='primary' onClick={this.handleSubmit}>Submit</Button>
      </div>
    )
  }

  handleOnChange = (isChecked) => {
    this.setState({
      isChecked: isChecked
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

export default CheckboxExample
