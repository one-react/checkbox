import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Checkbox, CheckboxGroup } from 'or-checkbox'
import { previewCode } from './util'

import CheckboxExample from './checkbox'
import CheckboxButtonExample from './checkboxButton'
import CheckboxGroupExample from './checkboxGroup'

import './styles.scss'

storiesOf('or-checkbox', module)
  .addDecorator(
    withInfo({
      inline: true,
      propTables: [Checkbox, CheckboxGroup],
      propTablesExclude: [CheckboxExample, CheckboxGroupExample],
      styles: {
        jsxInfoContent: {
          borderTop: 'none',
          margin: 0
        }
      }
    })
  )
  .add('single checkbox', () => <CheckboxExample />, {
    info: {
      source: false,
      text: previewCode(require('!!raw-loader!./checkbox.tsx'))
    }
  })

  .add('checkbox button', () => <CheckboxButtonExample />, {
    info: {
      source: false,
      text: previewCode(require('!!raw-loader!./checkboxButton.tsx'))
    }
  })

  .add('checkbox group', () => <CheckboxGroupExample />, {
    info: {
      source: false,
      text: previewCode(require('!!raw-loader!./checkboxGroup.tsx'))
    }
  })
