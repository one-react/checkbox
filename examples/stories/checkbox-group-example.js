import React from 'react'

import { Checkbox, CheckboxGroup } from '../../src'

import Button from 'or-button'

class CheckboxGroupExample extends React.Component {
  state = {
    fruits: ['apple'],
    sports: []
  }
  render () {
    return (
      <div className='checkbox-group-example'>
        <h1>checkbox group vertical:</h1>
        <CheckboxGroup defaultValues={this.state.fruits}  onGroupChange={this.handleFruitsChange}>
          <Checkbox value='apple'>Apple</Checkbox>
          <Checkbox value='banana'>Banana</Checkbox>
          <Checkbox value='grape'>Grape</Checkbox>
        </CheckboxGroup>
        <Button onClick={this.handleFruitsClick}>提交</Button>
        <h1>checkbox group horizontal:</h1>
        <CheckboxGroup horizontal  onGroupChange={this.handleSportsChange}>
          <Checkbox value='baseball'>Baseball</Checkbox>
          <Checkbox value='tennis'>Tennis</Checkbox>
          <Checkbox value='basketball'>Basketball</Checkbox>
        </CheckboxGroup>
        <Button onClick={this.handleSportsClick}>提交</Button>
      </div>
    )
  }

  handleFruitsChange = (values) => {
    this.setState({
      fruits: values
    })
  }

  handleSportsChange = (values) => {
    this.setState({
      sports: values
    })
  }

  handleFruitsClick = () => {
    window.alert('fruits: ' +  this.state.fruits)
  }

  handleSportsClick = () => {
    window.alert('sports: ' + this.state.sports)
  }
}

export default CheckboxGroupExample
