import clx from 'classnames'
import { SvgCheck } from 'or-icons'
import React, { PureComponent } from 'react'

interface Props {
  /**
   * custom className
   **/
  className?: string

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
    const { children, isChecked, type = 'normal', className } = this.props
    const checkboxClass = clx(
      {
        'or-checkbox-checked': isChecked,
        [`or-checkbox-${type}`]: type
      },
      'or-checkbox',
      className
    )
    return (
      <div className={checkboxClass} onClick={this.handleClick}>
        {type !== 'button' ? (
          <>
            <div className="or-checkbox-icon">
              <SvgCheck size="18" fill={isChecked ? '#eee' : '#FFFFFF'} />
            </div>
            <div className="or-checkbox-label">{children}</div>
          </>
        ) : (
          <div className="or-checkbox-button-content">{children}</div>
        )}
      </div>
    )
  }

  handleClick = () => {
    const { onChange, isChecked } = this.props
    /* istanbul ignore next */
    if (typeof onChange === 'function') {
      onChange(!isChecked)
    }
  }
}
