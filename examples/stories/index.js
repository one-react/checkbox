import React from 'react'
import { storiesOf } from '@storybook/react'
import CheckExample from './checkbox-example'
import CheckboxGroupExample from './checkbox-group-example'
import CheckboxButtonExample from './checkbox-button'

import './example.scss'

storiesOf('Checkbox', module)
  .add('single checkbox', () => (
    <CheckExample />
  ))
  .add('checkbox group', () => (
    <CheckboxGroupExample />
  ))
  .add('checkbox-button', () => (
    <CheckboxButtonExample />
  ))
