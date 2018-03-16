import React from 'react'

class CheckboxGroup extends React.Component {
  constructor (props) {
    super(props)
    // props.onClick(props.defaultChecked)
    this.state = {
      selectedValue: props.defaultValue || []
    }
  }

  render () {
    const { selectedValue } = this.state
    const { children } = this.props
    return (
      <div>
        {
          React.Children.map(children, (element) => {
            return React.cloneElement(element, {
              checked: selectedValue.indexOf(element.props.name) > -1,
              onClick: this.handleCheck
            })
          })
        }
      </div>
    )
  }

  handleCheck = (value, operation) => {
    const { selectedValue } = this.state
    if (selectedValue.indexOf(value) === -1) {
      this.setState({
        selectedValue: selectedValue.concat(value)
      })
    }
  }
}

export default CheckboxGroup
