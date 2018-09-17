import React from 'react'

import { Checkbox, CheckboxGroup } from '../../src'

import Button from 'or-button'

class CheckboxButtonExample extends React.Component {
  state = {
    sports: ['baseball']
  }
  render () {
    return (
      <div className='checkbox-group-example'>
        <h1>checkbox-button horizontal:</h1>
        <CheckboxGroup type='button' defaultValues={this.state.sports} horizontal  onGroupChange={this.handleSportsChange}>
          <Checkbox value='baseball'>棒球</Checkbox>
          <Checkbox value='tennis'>网球</Checkbox>
          <Checkbox value='basketball'>篮球</Checkbox>
        </CheckboxGroup>
        <Button onClick={this.handleSportsClick}>提交</Button>
      </div>
    )
  }

  handleSportsChange = (values) => {
    this.setState({
      sports: values
    })
  }

  handleSportsClick = () => {
    window.alert('sports: ' + this.state.sports)
  }
}

export default CheckboxButtonExample
