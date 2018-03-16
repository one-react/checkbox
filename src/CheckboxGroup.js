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
    const { onChange } = this.props
    if (selectedValue.indexOf(value) === -1) {
      this.setState({
        selectedValue: selectedValue.concat(value)
      }, () => {
        onChange(this.state.selectedValue)
      })
    } else {
      this.setState((prevState) => {
        return {
          selectedValue: prevState.selectedValue.filter((item) => {
            return item !== value
          })
        }
      }, () => {
        onChange(this.state.selectedValue)
      })
    }
  }
}

export default CheckboxGroup
