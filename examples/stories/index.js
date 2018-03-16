import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import { Checkbox, CheckboxGroup } from '../../src'

storiesOf('Checkbox', module)
  .add('Checkbox', () => (
    <div>
      <Checkbox value='choose' onChange={(checked) => {console.log(checked)}}>请选择</Checkbox>
      <Checkbox value='apple' defaultChecked>apple</Checkbox>
    </div>
  ))
  .add('CheckboxGroup', () => (
    <CheckboxGroup defaultValue={['agree']} onChange={(checkedArr) => {console.log(checkedArr)}}>
      <Checkbox value='agree'>我同意</Checkbox>
      <Checkbox value='banana'>banana</Checkbox>
    </CheckboxGroup>
  ))
