import React from 'react'
import clx from 'classnames'
class CheckboxGroup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedValues: props.defaultValues || []
    }
  }

  render () {
    const { selectedValues } = this.state
    const { children, horizontal, type } = this.props
    const checkboxGroupClass = clx({
      'or-checkbox-group': true,
      'or-checkbox-group-horizontal': horizontal,
      'or-checkbox-group-vertical': !horizontal,
      'or-checkbox-button-group': type === 'button'
    })
    return (
      <div className={checkboxGroupClass}>
        {
          React.Children.map(children, (element) => {
            const isChecked = selectedValues.indexOf(element.props.value) > -1
            return React.cloneElement(element, {
              isChecked,
              onChange: this.handleCheck(isChecked, element.props.value)
            })
          })
        }
      </div>
    )
  }

  handleCheck = (isChecked, value) => {
    return () => {
      const { selectedValues } = this.state
      const { onGroupChange } = this.props
      if (!isChecked) {
        this.setState({
          selectedValues: selectedValues.concat(value)
        }, () => {
          onGroupChange(this.state.selectedValues)
        })
      } else {
        this.setState((prevState) => {
          return {
            selectedValues: prevState.selectedValues.filter((item) => {
              return item !== value
            })
          }
        }, () => {
          onGroupChange(this.state.selectedValues)
        })
      }
    }
  }
}

export default CheckboxGroup
