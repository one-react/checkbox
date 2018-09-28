import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { CheckboxButtonExample } from './checkbox-button.story'
import { CheckboxGroupExample } from './checkbox-group.story'
import { CheckboxExample } from './checkbox.story'
import './styles.scss'

storiesOf('or-sample', module)
  .add(
    'checkbox',
    withInfo({ inline: true })(() => (
      <div>
        <CheckboxExample />
      </div>
    ))
  )

  .add(
    'checkbox button',
    withInfo({ inline: true })(() => (
      <div>
        <CheckboxButtonExample />
      </div>
    ))
  )

  .add(
    'checkbox group',
    withInfo({ inline: true })(() => (
      <div>
        <CheckboxGroupExample />
      </div>
    ))
  )
