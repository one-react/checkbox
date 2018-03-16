import React from 'react'
import clx from 'classnames'

class Checkbox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: props.defaultChecked || false
    }
  }

  render () {
    const { children, value } = this.props
    const active = this.state.isChecked
    const checkboxClass = clx({
      'or-checkbox': true,
      active
    })
    return (
      <div className={checkboxClass} value={value} onClick={this.handleClick}>
        <div className='checkbox-icon'>
          <svg
            fill='#ffffff'
            height='18'
            viewBox='0 0 24 24'
            width='18'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' />
          </svg>
        </div>
        <div className='checkbox-content'>{children}</div>
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
