import clx from 'classnames'
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
   * checkbox group checked values
   **/
  values: string[]

  /**
   * checkbox group layouts horizontally or vertically
   * @default false
   **/
  horizontal?: boolean

  /**
   * callback triggered by click
   **/
  onChange?: (values) => void
}

export class CheckboxGroup extends PureComponent<Props, {}> {
  state = {
    values: this.props.values || []
  }

  render() {
    const { values } = this.state
    const { className, children, horizontal, type } = this.props
    const checkboxGroupClass = clx(
      {
        'or-checkbox-group-horizontal': horizontal,
        'or-checkbox-group-vertical': !horizontal
      },
      'or-checkbox-group',
      className
    )
    return (
      <div className={checkboxGroupClass}>
        {React.Children.map(children, (element: React.ReactElement<any>) => {
          const isChecked = values.indexOf(element.props.value) > -1
          return React.cloneElement(element, {
            isChecked,
            type,
            onChange: this.handleChange(isChecked, element.props.value)
          })
        })}
      </div>
    )
  }

  handleChange = (isChecked, value) => {
    return () => {
      const { values } = this.state
      const { onChange } = this.props
      if (!isChecked) {
        this.setState(
          {
            values: values.concat(value)
          },
          () => {
            onChange(this.state.values)
          }
        )
      } else {
        this.setState(
          (prevState: any) => {
            return {
              values: prevState.values.filter(item => {
                return item !== value
              })
            }
          },
          () => {
            onChange(this.state.values)
          }
        )
      }
    }
  }
}

export default CheckboxGroup
