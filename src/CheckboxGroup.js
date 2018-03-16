import React from 'react'

class CheckboxGroup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedValue: props.defaultValue || []
    }
  }

  render () {
    const { selectedValue } = this.state
    const { children } = this.props
    return (
      <div className='checkboxGroup'>
        {
          React.Children.map(children, (element) => {
            return React.cloneElement(element, {
              checked: selectedValue.indexOf(element.props.value) > -1,
              onClick: this.handleCheck
            })
          })
        }
      </div>
    )
  }

  handleCheck = (value) => {
    const { selectedValue } = this.state

    if (selectedValue.indexOf(value) === -1) {
      // this.setState({
      //   selectedValue: selectedValue.concat(value)
      // })
      this.setState((prevState) => {
        return {
          selectedValue: prevState.selectedValue.concat(value)
        }
      })
    } else {
      // this.setState({
      //   selectedValue: selectedValue.filter((item) => {
      //     return item !== value
      //   })
      // })
      this.setState((prevState) => {
        return {
          selectedValue: prevState.selectedValue.filter((item) => {
            return item !== value
          })
        }
      })
    }

    const { onChange } = this.props
    if (onChange) {
      onChange(this.state.selectedValue)
    }
  }

  getSelectedValues = () => {
    const { onChange } = this.props
    const { selectedValue } = this.state
    onChange(selectedValue)
  }
}

export default CheckboxGroup
