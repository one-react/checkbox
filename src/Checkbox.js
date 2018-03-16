import React from 'react'

class Checkbox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: props.defaultChecked || false
    }
  }

  render () {
    const { children, value } = this.props
    return (
      <div>
        <input
          id={`checkbox-${value}`}
          type='checkbox'
          checked={this.state.isChecked}
          onChange={this.handleClick} />
        <label htmlFor={`checkbox-${value}`}>{children}</label>
      </div>
    )
  }

  handleClick = (e) => {
    const ifChecked = !this.state.isChecked
    this.setState({
      isChecked: ifChecked
    })
    const { onChange } = this.props
    if (typeof onChange === 'function') {
      onChange(ifChecked)
    }
    // const { onClick, value } = this.props
    // if (onClick) {
    //   onClick(value)
    // }
  }
}

export default Checkbox
