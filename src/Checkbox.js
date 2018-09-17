import React from 'react'
import clx from 'classnames'

class Checkbox extends React.Component {
  render () {
    const { children, value, isChecked } = this.props
    const checkboxClass = clx({
      'or-checkbox': true,
      'or-checkbox-checked': isChecked
    })
    return (
      <div className={checkboxClass} value={value} onClick={this.handleClick}>
        <div className='checkbox-icon'>
          <svg
            fill={isChecked ? '#eee' : '#FFFFFF'}
            height='18'
            viewBox='0 0 24 24'
            width='18'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' />
          </svg>
        </div>
        <div className='or-checkbox-content'>{children}</div>
      </div>
    )
  }

  handleClick = (e) => {
    const { onChange, isChecked, value } = this.props
    if (typeof onChange === 'function') {
      onChange(!isChecked, value)
    }
  }
}

export default Checkbox
