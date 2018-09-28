import clx from 'classnames'
import Button from 'or-button'
import React, { PureComponent } from 'react'

interface Props {
  /**
   * custom classname
   **/
  classname?: string

  /**
   * checkbox type
   * @default 'normal'
   **/
  type?: 'button'

  /**
   * value of the checkbox
   **/
  value: string

  /**
   * whether the checkbox is checked or not
   **/
  isChecked?: boolean

  /**
   * children of the checkbox
   **/
  children: any

  /**
   * callback triggered by click
   **/
  onChange?: (isChecked) => void
}
export class Checkbox extends PureComponent<Props, {}> {
  render() {
    const { children, isChecked, type = 'normal', classname } = this.props
    const checkboxClass = clx(
      {
        'or-checkbox-checked': isChecked,
        [`or-checkbox-${type}`]: type
      },
      'or-checkbox',
      classname
    )
    return (
      <div className={checkboxClass} onClick={this.handleClick}>
        {type !== 'button' ? (
          <>
            <div className="or-checkbox-icon">
              <svg
                fill={isChecked ? '#eee' : '#FFFFFF'}
                height="18"
                viewBox="0 0 24 24"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <div className="or-checkbox-label">{children}</div>
          </>
        ) : (
          <Button size="small">{children}</Button>
        )}
      </div>
    )
  }

  handleClick = () => {
    const { onChange, isChecked } = this.props
    if (typeof onChange === 'function') {
      onChange(!isChecked)
    }
  }
}
